import {
  GraphQLSchema,
  printSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  isObjectType,
} from 'graphql';

import { TypescriptGenerator } from 'graphql-binding';
import path from 'path';
import fs from 'fs';
import prettier from 'prettier';

type GenerateMixinOptions = {
  outputDir: string;
  schema: GraphQLSchema;
  operations: any;
  objectTypes: any;
};

// @TODO nodeChanged - mutation, array of changedy types ?!!!
// @TODO @manyToMany relations !
// @TODO generateClient with broker ?

export async function generateMixin(options: GenerateMixinOptions) {
  await generateSchemaAndBinding(options);
  await generateMixinFile(options);
}

function moleculerTsReturnType(options: { type: string; nullable?: boolean }) {
  if (options.nullable) {
    return `NodeOptional<${options.type}>`;
  }
  return options.type;
}

function getPrimaryFields(options: GenerateMixinOptions, typeName: string) {
  const objectTypes = options.objectTypes;
  const primaryKeys: string[] = [];
  let keyNums: number[] = [];
  try {
    keyNums = objectTypes[
      typeName
    ].scope.pgIntrospection.primaryKeyConstraint.keyAttributes.map(
      (one: any) => one.num,
    );
  } catch {}
  if (keyNums.length > 0) {
    Object.keys(objectTypes[typeName].fields).map((fieldName: any) => {
      const fieldScope = objectTypes[typeName].fields[fieldName].scope;
      if (
        fieldScope.pgFieldIntrospection &&
        keyNums.includes(fieldScope.pgFieldIntrospection.num)
      ) {
        primaryKeys.push(fieldScope.fieldName);
      }
    });
  }

  return primaryKeys;
}

async function generateMixinFile(options: GenerateMixinOptions) {
  const outputDir = options.outputDir;
  const operations = options.operations;
  const objectTypes = options.objectTypes;

  // add meta info
  Object.keys(operations).map(operationName => {
    if (operationName === 'node') {
      delete operations[operationName];
      return;
    }

    if (operationName === 'nodeId') {
      delete operations[operationName];
      return;
    }

    const op = operations[operationName];
    const opReturnObjectType = objectTypes[op.returnTypeName];

    if (op.isRootQuery) {
      if (opReturnObjectType.scope.isConnectionType) {
        const connectionNames = getConnectionTypeNames(
          opReturnObjectType.scope,
        );

        // native connection - needed for native upsert
        if (connectionNames.edgeType === `${capitalize(op.name)}Edge`) {
          objectTypes[connectionNames.nodeType].connectionOpName = op.name;
        }
      }
    }
  });

  let mixin = `
    import * as moleculerTs from 'moleculer-ts';
    import * as moleculerPgr from 'moleculer-pgr';
    import * as binding from './binding';
    
    function getPartialObject(obj: any, keys: string[] ) {
      return Object.keys(obj)
      .filter(key => keys.indexOf(key) >= 0)
      .reduce((obj2, key) => Object.assign(obj2, { [key]: obj[key] }), {});
    }

    type NodeArray<Node> = Node[];
    type NodeOptional<Node> = Node | null;
    type Node<Node> = Node;
    `;

  const query = 'gqlQueryString';
  const client = 'const client = this.settings.pgr.client as any';

  let mixinGql = ``;
  let mixinActionsTs = ``;
  let mixinActions = ``;

  Object.keys(operations).map(operationName => {
    const op = operations[operationName];
    const opReturnObjectType = objectTypes[op.returnTypeName];

    const opReturn = getOpOutputType(options, op);
    if (!opReturn) {
      console.log('Cannot process graphql operation', op);
      return;
    }

    if (op.isRootQuery) {
      mixinGql += `'${operationName}': \`${getQueryString(
        options,
        opReturn.name,
      )}\`,`;

      let mixinActionTsNullable = true;
      if (opReturn.opScope.isConnectionType) {
        mixinActionTsNullable = false;
      }

      mixinActionsTs += `moleculerTs.Action<'${operationName}', Parameters<binding.Query['${operationName}']>[0], ${moleculerTsReturnType(
        { type: `binding.${opReturn.name}`, nullable: mixinActionTsNullable },
      )}>,\n`;

      mixinActions += `
      async ${operationName}(this: any, ctx: any) {
        const params = ctx.params;
        ${client}
        const query = ${query}['${operationName}'];
        const data = params;
        const result = await client.query.${operationName}(data, query); 
        return result;
      },`;

      // extra queries
      if (opReturn.opScope.isConnectionType) {
        const connectionNames = getConnectionTypeNames(
          opReturnObjectType.scope,
        );

        // COUNT
        let customOperationName = `count${capitalize(operationName)}`;
        mixinGql += `'${customOperationName}': \`{ totalCount }\`,`;
        mixinActionsTs += `moleculerTs.Action<'${customOperationName}', Parameters<binding.Query['${operationName}']>[0], number>,\n`;
        mixinActions += `
        async ${customOperationName}(this: any, ctx: any) {
          const params = ctx.params;
          ${client}
          const query = ${query}['${customOperationName}'];
          const data = params;
          const result = await client.query.${operationName}(data, query); 
          return result['totalCount']
        },`;

        // FRIST
        customOperationName = `first${capitalize(operationName)}`;
        mixinActionsTs += `moleculerTs.Action<'${customOperationName}', Parameters<binding.Query['${operationName}']>[0], NodeOptional<binding.${connectionNames.nodeType}>>,\n`;
        mixinActions += `
        async ${customOperationName}(this: any, ctx: any) {
          let { first, last, ...params } = ctx.params;   
          if (first) {
            first = 1;
          }

          if (last) {
            last = 1;
          }

          if (!first && !last) {
            first = 1;
          }

          const result = await ctx.call(\`\${this.name}.find${capitalize(
            operationName,
          )}\`, {first, last, ...params});
          if (result.length === 0) {
            return null
          } 
          return result[0]
        },`;
        // FIRST SINGLE RELATIONS
        getSingleRelationFields(objectTypes[connectionNames.nodeType]).map(
          fieldName => {
            const customOperationName = `${`first${capitalize(
              operationName,
            )}`}.${fieldName}`;
            let curType =
              objectTypes[connectionNames.nodeType].fields[fieldName].field
                .type;

            while (curType && curType.ofType) {
              curType = curType.ofType;
            }

            const singleRelationOutputTypeName = curType.name;

            mixinGql += `'${customOperationName}': \`{ nodes { ${fieldName} ${getQueryString(
              options,
              singleRelationOutputTypeName,
            )} } }\`,`;

            mixinActionsTs += `moleculerTs.Action<'${customOperationName}',Parameters<binding.Query['${operationName}']>[0], NodeOptional<binding.${singleRelationOutputTypeName}>>,\n`;

            mixinActions += `
            async '${customOperationName}'(this:any, ctx: any) {
              let { first, last, ...params } = ctx.params;   
              if (first) {
                first = 1;
              }

              if (last) {
                last = 1;
              }

              if (!first && !last) {
                first = 1;
              }

              ${client}
              const query = ${query}['${customOperationName}'];
              const data = { first, last, ...params };
              const result = await client.query.${operationName}(data, query); 

              if (result.nodes.length === 0) {
                return null;
              }
              return result.nodes[0]['${fieldName}']
            },`;
          },
        );

        // FIND
        customOperationName = `find${capitalize(operationName)}`;
        mixinActionsTs += `moleculerTs.Action<'${customOperationName}', Parameters<binding.Query['${operationName}']>[0], NodeArray<binding.${connectionNames.nodeType}>>,\n`;
        mixinActions += `
        async ${customOperationName}(this: any, ctx: any) {
          const params = ctx.params;   
          const result = await ctx.call(\`\${this.name}.${operationName}\`, params);
          return result.nodes;
        },`;
      }

      if (opReturn.opScope.isPgRowType) {
        getSingleRelationFields(objectTypes[opReturn.name]).map(fieldName => {
          const customOperationName = `${operationName}.${fieldName}`;
          let curType = objectTypes[opReturn.name].fields[fieldName].field.type;

          while (curType && curType.ofType) {
            curType = curType.ofType;
          }

          const singleRelationOutputTypeName = curType.name;

          mixinGql += `'${customOperationName}': \`{ ${fieldName} ${getQueryString(
            options,
            singleRelationOutputTypeName,
          )}}\`,`;

          mixinActionsTs += `moleculerTs.Action<'${customOperationName}', Parameters<binding.Query['${operationName}']>[0], NodeOptional<binding.${singleRelationOutputTypeName}>>,\n`;

          mixinActions += `
              async '${customOperationName}'(this: any, ctx: any) {
                const params = ctx.params;
                ${client}
                const query = ${query}['${customOperationName}'];
                const data = params;
                const result = await client.query.${operationName}(data, query); 
                if (result === null) {
                  return null;
                }
                return result['${fieldName}']
              },`;
        });
      }
    }

    if (op.isRootMutation) {
      let inputType = `Parameters<binding.Mutation['${operationName}']>[0]['input']`;
      let inputData = `{ input: params }`;
      let tryCatchResultBefore = ``;
      let tryCatchResultAfter = ``;

      let mixinActionsTsMutation = `moleculerTs.Action<'${operationName}', ${inputType}, NodeOptional<binding.${opReturn.name}>>,\n`;

      if (opReturn.opScope.isPgCreatePayloadType) {
        inputType = `Parameters<binding.Mutation['${operationName}']>[0]['input']['${lowerlize(
          opReturn.name,
        )}']`;
        inputData = `{ input: { ${lowerlize(opReturn.name)} : params } }`;
        mixinActionsTsMutation = `moleculerTs.Action<'${operationName}', ${inputType}, Node<binding.${opReturn.name}>>,\n`;
      }

      if (opReturn.opScope.isPgUpdatePayloadType) {
        inputData = `{ input: { ...uniqueFields, patch: { ...uniqueFields, ...patch} } }`;
        mixinActionsTsMutation = `moleculerTs.Action<'${operationName}', ${inputType}, NodeOptional<binding.${opReturn.name}>>,\n`;
        tryCatchResultBefore = 'try {';
        tryCatchResultAfter = `} catch (err) {
          if (err.message && err.message.match(/No values were updated in collection '.*' because no values you can update were found matching these criteria.\./)) {
            return null;
          }
          throw err;
        }`;
      }

      if (opReturn.opScope.isPgDeletePayloadType) {
        mixinActionsTsMutation = `moleculerTs.Action<'${operationName}', ${inputType}, NodeOptional<binding.${opReturn.name}>>,\n`;
        tryCatchResultBefore = 'try {';
        tryCatchResultAfter = `} catch (err) {
          if (err.message && err.message.match(/No values were deleted in collection '.*' because no values you can delete were found matching these criteria\./)) {
            return null;
          }
          throw err;
        }`;
      }

      mixinGql += `'${operationName}': \`{ 
${opReturn.mutationFieldName} ${getQueryString(options, opReturn.name)}
}\`,`;

      mixinActionsTs += mixinActionsTsMutation;

      mixinActions += `
      async ${operationName}(this: any, ctx: any) {
        const params = ctx.params;
        const { patch, ...uniqueFields } = params;
        ${client}
        const query = ${query}['${operationName}'];
        const data = ${inputData}
        ${tryCatchResultBefore}
        const result = await client.mutation.${operationName}(data, query); 
        return result!['${opReturn.mutationFieldName}'];
        ${tryCatchResultAfter}
      },`;

      // extra mutations
    }

    // UPSERT
    if (opReturn.opScope.isPgUpdatePayloadType) {
      if (
        operations[`create${opReturn.name}`] &&
        operationName === `update${opReturn.name}` &&
        objectTypes[opReturn.name].connectionOpName
      ) {
        let customOperationName = `upsert${opReturn.name}`;
        let createInputType = `Parameters<binding.Mutation['create${
          opReturn.name
        }']>[0]['input']['${lowerlize(opReturn.name)}']`;

        let updateInputType = `Parameters<binding.Mutation['${operationName}']>[0]['input']['patch']`;
        let queryInputType = `Parameters<binding.Query['${
          objectTypes[opReturn.name].connectionOpName
        }']>[0]`;

        mixinActionsTs += `moleculerTs.Action<'${customOperationName}', { query: ${queryInputType}, create: ${createInputType}, update: ${updateInputType} } , Node<binding.${opReturn.name}>>,\n`;

        const updateFields = getPrimaryFields(options, opReturn.name);

        mixinActions += `
        async '${customOperationName}'(this: any, ctx: any) {
          const params = ctx.params;
          let node = await ctx.call(\`\${this.name}.first${capitalize(
            objectTypes[opReturn.name].connectionOpName,
          )}\`, { ...params.query });
     
          if (!node) {
            node = await ctx.call(\`\${this.name}.create${
              opReturn.name
            }\`, { ...params.create });
          } else {
            const primaryQuery = getPartialObject(node, [${updateFields
              .map(one => `'${one}'`)
              .join(',')}]);
            node = await ctx.call(\`\${this.name}.update${
              opReturn.name
            }\`, { ...primaryQuery, patch: params.update });
    
            if (!node) {
              return await ctx.callSvc(\`\${this.name}.upsert${
                opReturn.name
              }\`, ctx.params);
            }
          }
    
          return node;
        },`;
      }
    }
  });

  mixin += `
    export type PgrActions = [
      ${mixinActionsTs}
    ]

    const gqlQueryString = {
      ${mixinGql}
    }

    export const PgrMixin = {
      name: 'PostgraphileMixin',
      methods: {},
      events: {},
      actions: {
        ${mixinActions}
      }
    }
    `;

  await formatAndSave(mixin, path.join(outputDir, 'index.ts'));
  // fs.writeFileSync(path.join(outputDir, 'index.ts'), mixin);
}

async function generateSchemaAndBinding(options: GenerateMixinOptions) {
  // dir: string, schema: GraphQLSchema
  const dir = options.outputDir;
  const schema = options.schema;

  const schemaTs = `
      import { buildSchema } from 'graphql';
      import { gql } from 'moleculer-pgr';
      
      export const sdl = gql\`
        ${printSchema(schema).replace(/\`/g, '\\`')}
      \`;
      
      export default buildSchema(sdl);
      `;

  const inputSchemaPath = path.join(dir, 'schema.ts');
  const outputBindingPath = path.join(dir, 'binding.ts');

  await formatAndSave(schemaTs, inputSchemaPath);

  const args = {
    schema,
    isDefaultExport: true,
    inputSchemaPath: path.resolve(inputSchemaPath),
    outputBindingPath: path.resolve(outputBindingPath),
  };

  const generatorInstance = new PgrTypescriptGenerator(args, options);

  const code = generatorInstance.render();

  await formatAndSave(code, outputBindingPath);
}

class PgrTypescriptGenerator extends TypescriptGenerator {
  _options: GenerateMixinOptions;
  constructor(args: any, options: GenerateMixinOptions) {
    super(args);
    this._options = options;
  }

  renderInterfaceOrObject(
    type: GraphQLObjectType | GraphQLInputObjectType | GraphQLInterfaceType,
  ): string {
    let fieldDefinitionKeys = Object.keys(type.getFields());
    let pgrType = this._options.objectTypes[type.name];

    // Remove relation fields
    if (pgrType) {
      const relationFields = getRelationsFields(pgrType);
      fieldDefinitionKeys = fieldDefinitionKeys.filter(fieldName => {
        if (fieldName === 'clientMutationId') {
          return true;
        }
        return !relationFields.includes(fieldName);
      });
    }

    const fieldDefinition = fieldDefinitionKeys
      .map(f => {
        var field = type.getFields()[f];
        return (
          '  ' +
          this.renderFieldName(field) +
          ': ' +
          this.renderFieldType(field.type)
        );
      })
      .join('\n');

    var interfaces: GraphQLInterfaceType[] = [];

    if (isObjectType(type)) {
      interfaces = type.getInterfaces();
    }

    return this.renderInterfaceWrapper(
      type.name,
      type.description,
      interfaces,
      fieldDefinition,
    );
  }
}

async function formatAndSave(input: string, destination: string) {
  const info = await prettier.getFileInfo(destination);

  const options = (await prettier.resolveConfig(destination)) || undefined;
  if (options) {
    options.parser = info.inferredParser as prettier.Options['parser'];
  }

  const output = prettier.format(input, options);
  await new Promise((resolve, reject) => {
    fs.mkdir(path.dirname(destination), { recursive: true }, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
  await new Promise((resolve, reject) => {
    fs.writeFile(destination, output, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

function getRelationsFields(type: any): string[] {
  // const type = objectTypes[typeName];
  const relationsFields: string[] = [];
  if (type) {
    // isPgForwardRelationField
    // isPgBackwardRelationField
    // isPgBackwardSingleRelationField
    // isPgManyToManyRelationField

    Object.keys(type.fields).map(fieldName => {
      const scope = type.fields[fieldName].scope;

      if (scope.isPgManyToManyRelationField) {
        relationsFields.push(fieldName);
      }
      if (scope.isPgForwardRelationField) {
        relationsFields.push(fieldName);
      }
      if (scope.isPgBackwardRelationField) {
        relationsFields.push(fieldName);
      }
      if (scope.isPgBackwardSingleRelationField) {
        relationsFields.push(fieldName);
      }
    });
  }
  return relationsFields;
}

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const lowerlize = (s: string) => {
  return s.charAt(0).toLowerCase() + s.slice(1);
};

function getQueryStringFields(
  options: GenerateMixinOptions,
  typeName: string,
  depth: number = 0,
) {
  const objectTypes = options.objectTypes;
  const objectType = objectTypes[typeName];
  let query = '';
  let indent = '';
  for (let i = 0; i < depth; i++) {
    indent += '  ';
  }

  if (objectType) {
    const relationFields = getRelationsFields(objectType);
    query += `${indent}{\n`;
    const fieldsKeys = Object.keys(objectType.fields).filter(fieldName => {
      if (fieldName === 'clientMutationId') {
        return true;
      }
      return !relationFields.includes(fieldName);
    });

    fieldsKeys.map(fieldName => {
      let recursive = '';
      if (objectType.fields[fieldName]) {
        recursive =
          '\n' +
          getQueryStringFields(
            options,
            objectType.fields[fieldName].returnTypeName,
            depth + 1,
          );
      }

      query += `${indent}  ${fieldName} ${recursive}`;
    });
    query += `${indent}}\n`;
  }
  return query;
}

function getQueryString(
  options: GenerateMixinOptions,
  typeName: string,
): string {
  return getQueryStringFields(options, typeName);
}

function getOpOutputType(options: GenerateMixinOptions, op: any) {
  const objectTypes = options.objectTypes;
  // QUERY -> scalar, list, custom type, table row or even a table connection
  // MUTATION -> scalar, list, custom type, table row or list of table rows (but not a connection, since you cannot paginate over a mutation)

  const opReturnObjectType = objectTypes[op.returnTypeName];

  let opScope = {
    isConnectionType: false,
    isPgRowType: false,
    isPgUpdatePayloadType: false,
    isPgDeletePayloadType: false,
    isPgCreatePayloadType: false,
  };

  let opReturnTypeName: string | null = null;
  let mutationFieldName: string | null = null;

  if (op.isRootQuery) {
    opReturnTypeName = op.returnTypeName;

    if (opReturnObjectType.scope.isConnectionType) {
      opScope.isConnectionType = true;

      const connectionNames = getConnectionTypeNames(opReturnObjectType.scope);
      // native connection to row type! for native upsert
      if (connectionNames.edgeType === `${capitalize(op.name)}Edge`) {
        objectTypes[connectionNames.nodeType].connectionOpName = op.name;
      }
      /*
      if (opReturnTypeName && objectTypes[opReturnTypeName]) {
        // @TODO refactor to this into hook phase, ( for upsert mutation ) !
        objectTypes[opReturnTypeName].connectionOpName = op.name;
      }
      */
    }

    if (opReturnObjectType.scope.isPgRowType) {
      opScope.isPgRowType = true;
    }
  }

  if (op.isRootMutation) {
    mutationFieldName = Object.keys(objectTypes[op.returnTypeName].fields)[0];
    opReturnTypeName =
      objectTypes[op.returnTypeName].fields[mutationFieldName].returnTypeName;

    const mutationOutputType = objectTypes[op.returnTypeName];

    if (mutationOutputType.scope.isPgCreatePayloadType) {
      opScope.isPgCreatePayloadType = true;
    }

    if (mutationOutputType.scope.isPgUpdatePayloadType) {
      opScope.isPgUpdatePayloadType = true;
    }

    if (mutationOutputType.scope.isPgDeletePayloadType) {
      opScope.isPgDeletePayloadType = true;
    }
  }

  if (!opReturnTypeName) {
    return null;
  }

  return {
    name: opReturnTypeName,
    opScope,
    mutationFieldName,
  };
}

function getConnectionTypeNames(scope: any) {
  // edgeType: UsersEdge,
  // nodeType: User

  let curType = scope.nodeType;
  while (curType && curType.ofType) {
    curType = curType.ofType;
  }
  let nodeType = curType.name as string;

  curType = scope.edgeType;
  while (curType && curType.ofType) {
    curType = curType.ofType;
  }

  let edgeType = curType.name as string;

  return {
    nodeType,
    edgeType,
  };
}

//const type = objectTypes[typeName];
function getSingleRelationFields(type: any): string[] {
  const relationsFields: string[] = [];
  if (type) {
    // isPgForwardRelationField
    // isPgBackwardSingleRelationField
    // @TODO ManyToMany
    Object.keys(type.fields).map(fieldName => {
      const scope = type.fields[fieldName].scope;

      if (scope.isPgForwardRelationField) {
        relationsFields.push(fieldName);
      }

      if (scope.isPgBackwardSingleRelationField) {
        relationsFields.push(fieldName);
      }
    });
  }
  return relationsFields;
}

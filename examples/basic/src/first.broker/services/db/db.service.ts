import { Service, Action, Event, Method } from 'moleculer-decorators';
import * as Broker from '@first.broker/moleculer';
import { DbServiceTypes } from '@first.broker/types';

import { generateSchemaTs } from 'moleculer-pgr';
import path from 'path';
import express from 'express';
import { postgraphile, SchemaBuilder, Plugin } from 'postgraphile';

import {
  makeJSONPgSmartTagsPlugin,
  makeAddInflectorsPlugin,
} from 'graphile-utils';

import { NodePlugin } from 'graphile-build';
import pgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector';
// @ts-ignore
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';
// @ts-ignore
import PostGraphileNestedMutations from 'postgraphile-plugin-nested-mutations';
// @ts-ignore
import PgManyToManyPlugin from '@graphile-contrib/pg-many-to-many';
const PgNonNullPlugin = require('@graphile-contrib/pg-non-null');

import { Server } from 'http';

import fs from 'fs';

import { PgrClient } from './client';

import { PgrMixin } from './mixin';

// @ts-ignore
const MySmartTagsPlugin = makeJSONPgSmartTagsPlugin({
  version: 1,
  config: {
    constraint: {
      FK_user_user_profile_id: {
        tags: {
          fieldName: 'profile',
          foreignFieldName: 'user',
        },
      },
    },
  },
});

function MyBuilderPlugin(builder: SchemaBuilder) {
  // @TODO Hide tables ? migration migrationSeed -> by output type Query Migration MigrationSeed !!!
  // @custom mutation, keep input as it is!
  // node changed?
  // @TODO unknown mutation output?!

  // NodeChanged array types!! fire !

  // @TODO nodeChanged - mutation ?!!!

  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const lowerlize = (s: string) => {
    return s.charAt(0).toLowerCase() + s.slice(1);
  };

  function getOpOutputType(op: any) {
    const opReturnObjectType = objectTypes[op.returnTypeName];
    let opReturnTypeName: string | null = null;
    let opReturnType:
      | 'connection'
      | 'node'
      | 'create'
      | 'update'
      | 'delete'
      | 'customMutation'
      | null = null;

    if (op.isRootQuery) {
      if (opReturnObjectType.scope.isConnectionType) {
        opReturnType = 'connection';
        opReturnTypeName = getConnectionOutputTypeName(
          opReturnObjectType.scope,
        );
        if (opReturnTypeName && objectTypes[opReturnTypeName]) {
          // for upsert mutation !
          objectTypes[opReturnTypeName].connectionOpName = op.name;
        }
      }

      if (opReturnObjectType.scope.isPgRowType) {
        opReturnType = 'node';
        opReturnTypeName = op.returnTypeName;
      }
    }

    const mutationTypeNames: string[] = [];

    if (op.isRootMutation) {
      if (op.returnTypeName.match(/^Create/)) {
        opReturnType = 'create';
      }
      if (op.returnTypeName.match(/^Update/)) {
        opReturnType = 'update';
      }
      if (op.returnTypeName.match(/^Delete/)) {
        opReturnType = 'delete';
      }
      opReturnTypeName = getMutationOutputTypeName(op.returnTypeName);
      // check if we have match type with this name!
      if (opReturnTypeName && !objectTypes[opReturnTypeName]) {
        opReturnTypeName = null;
        opReturnType = 'customMutation';
      }

      if (opReturnTypeName) {
        mutationTypeNames.push(opReturnTypeName);
      }
    }

    // node changed type ?!
    // @TODO custom fce edit types ! ( custom mutations? allow add mutationTypeNames )

    if (opReturnTypeName === null || opReturnType === null) {
      return null;
    }

    return {
      name: opReturnTypeName,
      type: opReturnType,
      mutationTypeNames,
    };
  }

  function getMutationOutputTypeName(typeName: string) {
    let match: RegExpMatchArray | null = null;
    match = typeName.match(/^Create(.*)Payload$/);
    if (match && match.length === 2) {
      return match[1];
    }
    match = typeName.match(/^Update(.*)Payload$/);
    if (match && match.length === 2) {
      return match[1];
    }
    match = typeName.match(/^Delete(.*)Payload$/);
    if (match && match.length === 2) {
      return match[1];
    }

    return null;
  }

  function getConnectionOutputTypeName(scope: any) {
    // edgeType: UsersEdge,
    // nodeType: User

    let curType = scope.nodeType;
    while (curType && curType.ofType) {
      curType = curType.ofType;
    }

    return curType.name;
  }

  function getSingleRelationFields(typeName: string): string[] {
    const type = objectTypes[typeName];
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

  function getRelationsFields(typeName: string): string[] {
    const type = objectTypes[typeName];
    const relationsFields: string[] = [];
    if (type) {
      // isPgForwardRelationField
      // isPgBackwardRelationField
      // isPgBackwardSingleRelationField
      // @TODO ManyToMany
      Object.keys(type.fields).map(fieldName => {
        const scope = type.fields[fieldName].scope;

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

  const operations: any = {};
  const objectTypes: any = {};

  async function generateMixin() {
    Object.keys(objectTypes).map(objectTypeName => {
      console.log(
        objectTypeName,
        'relationKeys',
        getRelationsFields(objectTypeName),
      );
      console.log(
        objectTypeName,
        'singleRelationKeys',
        getSingleRelationFields(objectTypeName),
      );
    });

    let mixin = `
    import * as moleculerTs from 'moleculer-ts';
    import * as moleculerPgr from 'moleculer-pgr';
    import * as pgr from './binding';
    import * as customPgr from '../mixin';
    
    function getPartialObject(obj: any, keys: string[] ) {
      return Object.keys(obj)
      .filter(key => keys.indexOf(key) >= 0)
      .reduce((obj2, key) => Object.assign(obj2, { [key]: obj[key] }), {});
    }

    export type PgrConnection<Node> = {
      nodes: Node[];
      edges: { node: Node; cursor: string }[];
      pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string | null;
        endCursor: string | null;
      };
      totalCount: number;
    };
    
    export type PgrNodeArray<Node> = Node[];
    export type PgrNodeOptional<Node> = Node | null;
    export type PgrNode<Node> = Node;
    export type PgrCount = number;

    `;

    const query = 'customPgr.pgrQuery';
    const client = 'const client = this.settings.pgr.client as pgr.Binding';

    let mixinGql = ``;
    let mixinPgrExtend = ``;
    let mixinMixinActions = ``;
    let mixinActions = ``;
    let mixinOutputTypes = ``;
    let mixinInputTypes = ``;
    let outputTypes: any = {};
    // export type ${op.spec.type.name}Extend<T extends keyof pgr.${op.spec.type.name}, P> = { [K in T]: P };
    Object.keys(operations).map(operationName => {
      const op = operations[operationName];
      console.log(operationName, op.returnTypeName);

      const opReturnObjectType = objectTypes[op.returnTypeName];

      const opReturn = getOpOutputType(op);
      if (!opReturn) {
        return;
      }

      outputTypes[opReturn.name] = true;

      if (op.isRootQuery) {
        if (opReturn.type === 'connection') {
          let opOutputType = `customPgr.PgrConnection<customPgr.${opReturn.name}>`;

          mixinGql += `
            '${operationName}': moleculerPgr.shapeToGql(moleculerPgr.shape<NonNullable<${opOutputType}>>()),
          `;

          mixinInputTypes += `
          export type ${operationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;

          mixinActions += `
            moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, ${opOutputType}>,
          `;

          mixinMixinActions += `
          async ${operationName}(this: any, ctx: any) {
            const params = ctx.params;
            ${client}
            const query = ${query}['${operationName}'];
            const data = params;
            const result = await client.query.${op.name}(data, query); 
            return result;
          },`;

          // add extra connection operations - count, first, find
          const countOperationName = `count${capitalize(operationName)}`;
          opOutputType = `customPgr.PgrCount`;

          mixinGql += `
            '${countOperationName}': moleculerPgr.shapeToGql(moleculerPgr.shape<NonNullable<{ totalCount: ${opOutputType} }>>()),
          `;

          mixinInputTypes += `
            export type ${countOperationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;

          mixinActions += `
            moleculerTs.Action<'${countOperationName}', customPgr.${countOperationName}Input, ${opOutputType}>,
          `;

          mixinMixinActions += `
            async ${countOperationName}(this: any, ctx: any) {
              const params = ctx.params;
              ${client}
              const query = ${query}['${countOperationName}'];
              const data = params;
              const result = await client.query.${op.name}(data, query); 
              return result!['totalCount']
            },`;
          // @TODO !
          const firstOperationName = `first${capitalize(operationName)}`;

          mixinInputTypes += `
            export type ${firstOperationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;

          mixinActions += `
            moleculerTs.Action<'${firstOperationName}', customPgr.${operationName}Input, customPgr.PgrNodeOptional<customPgr.${opReturn.name}>>,
          `;

          mixinMixinActions += `
            async ${firstOperationName}(this: any, ctx: any) {
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

          // op first single relation fields !
          getSingleRelationFields(opReturn.name).map(fieldName => {
            const singleRelationOperationName = `${firstOperationName}.${fieldName}`;

            let curType =
              objectTypes[opReturn.name].fields[fieldName].field.type;

            while (curType && curType.ofType) {
              curType = curType.ofType;
            }
            const singleRelationOutputTypeName = curType.name;

            mixinGql += `
              '${singleRelationOperationName}': moleculerPgr.shapeToGql(moleculerPgr.shape<NonNullable<{ nodes: { ${fieldName}: customPgr.${singleRelationOutputTypeName} } }>>()),
            `;

            mixinInputTypes += `
              export type ${singleRelationOperationName.replace(
                '.',
                '_',
              )}Input = Parameters<pgr.Query['${operationName}']>[0];`;

            mixinActions += `
              moleculerTs.Action<'${singleRelationOperationName}', customPgr.${singleRelationOperationName.replace(
              '.',
              '_',
            )}Input, customPgr.PgrNodeOptional<customPgr.${singleRelationOutputTypeName}>>,
            `;

            mixinMixinActions += `
              async '${singleRelationOperationName}'(this:any, ctx: any) {
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
                const query = ${query}['${singleRelationOperationName}'];
                const data = {first, last, ...params};
                const result = await client.query.${op.name}(data, query); 
                if (!result || result.nodes.length === 0) {
                  return null;
                }
                return result.nodes[0]['${fieldName}']
              },`;
          });

          const findOperationName = `find${capitalize(operationName)}`;
          opOutputType = `customPgr.PgrNodeArray<customPgr.${opReturn.name}>`;

          mixinGql += `
            '${findOperationName}': moleculerPgr.shapeToGql(moleculerPgr.shape<NonNullable<{ nodes: customPgr.${opReturn.name} }>>()),
          `;

          mixinInputTypes += `
            export type ${findOperationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;

          mixinActions += `
            moleculerTs.Action<'${findOperationName}', customPgr.${findOperationName}Input, ${opOutputType}>,
          `;

          mixinMixinActions += `
            async ${findOperationName}(this:any, ctx: any) {
              const params = ctx.params;
              ${client}
              const query = ${query}['${findOperationName}'];
              const data = params;
              const result = await client.query.${op.name}(data, query); 
              return result!['nodes'];
            },`;
        }

        // @TODO - add extra single relation operations
        if (opReturn.type === 'node') {
          let opOutputType = `customPgr.PgrNodeOptional<customPgr.${opReturn.name}>`;

          mixinGql += `
            '${operationName}': moleculerPgr.shapeToGql(moleculerPgr.shape<NonNullable<${opOutputType}>>()),
          `;

          mixinInputTypes += `
          export type ${operationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;

          mixinActions += `
            moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, ${opOutputType}>,
          `;

          mixinMixinActions += `
          async ${operationName}(this: any, ctx: any) {
            const params = ctx.params;
            ${client}
            const query = ${query}['${operationName}'];
            const data = params;
            const result = await client.query.${op.name}(data, query); 
            return result;
          },`;

          getSingleRelationFields(opReturn.name).map(fieldName => {
            const singleRelationOperationName = `${operationName}.${fieldName}`;
            let curType =
              objectTypes[opReturn.name].fields[fieldName].field.type;

            while (curType && curType.ofType) {
              curType = curType.ofType;
            }

            const singleRelationOutputTypeName = curType.name;
            mixinInputTypes += `
              export type ${singleRelationOperationName.replace(
                '.',
                '_',
              )}Input = Parameters<pgr.Query['${operationName}']>[0];`;

            mixinActions += `
              moleculerTs.Action<'${singleRelationOperationName}', customPgr.${singleRelationOperationName.replace(
              '.',
              '_',
            )}Input, customPgr.PgrNodeOptional<customPgr.${singleRelationOutputTypeName}>>,
            `;

            mixinMixinActions += `
              async '${singleRelationOperationName}'(ctx: any) {},`;
          });
        }
      }

      if (op.isRootMutation) {
        if (opReturn.type === 'create') {
          const mutationOutField = lowerlize(opReturn.name);
          let opOutputType = `customPgr.PgrNode<customPgr.${opReturn.name}>`;
          mixinGql += `
            '${operationName}': moleculerPgr.shapeToGql(moleculerPgr.shape<NonNullable<{${mutationOutField}: ${opOutputType}} >>()),
          `;

          mixinInputTypes += `
          export type ${operationName}Input = Parameters<pgr.Mutation['${operationName}']>[0]['input']['${mutationOutField}']`;

          mixinActions += `
          moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, ${opOutputType}>,
        `;

          mixinMixinActions += `
          async ${operationName}(this: any, ctx: any) {
            const params = ctx.params;
            ${client}
            const query = ${query}['${operationName}'];
            const data = {
              input: {
                ${mutationOutField}: params,
              }
            }
            const result = await client.mutation.${op.name}(data, query); 
            return result!['${mutationOutField}'];
          },`;
        }

        if (opReturn.type === 'update') {
          const mutationOutField = lowerlize(opReturn.name);
          let opOutputType = `customPgr.PgrNodeOptional<customPgr.${opReturn.name}>`;
          mixinGql += `
            '${operationName}': moleculerPgr.shapeToGql(moleculerPgr.shape<NonNullable<{${mutationOutField}: ${opOutputType}} >>()),
          `;

          mixinInputTypes += `
          export type ${operationName}Input = Omit<Parameters<pgr.Mutation['${operationName}']>[0]['input'], 'clientMutationId'>`;

          mixinActions += `
          moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, ${opOutputType}>,
        `;

          mixinMixinActions += `
          async ${operationName}(this: any, ctx: any) {
            const params = ctx.params;
            ${client}
            const query = ${query}['${operationName}'];
            const data = {
              input: params
            }
            const result = await client.mutation.${op.name}(data, query); 
            return result!['${mutationOutField}'];
          },`;
          // UPSERT
          if (
            operations[`create${opReturn.name}`] &&
            operationName === `update${opReturn.name}` &&
            objectTypes[opReturn.name].connectionOpName // @TODO add it in hook !
          ) {
            let keyNums: number[] = [];
            try {
              keyNums = objectTypes[
                opReturn.name
              ].scope.pgIntrospection.primaryKeyConstraint.keyAttributes.map(
                (one: any) => one.num,
              );
            } catch {}
            if (keyNums.length > 0) {
              const updateKeys: string[] = [];
              Object.keys(objectTypes[opReturn.name].fields).map(
                (fieldName: any) => {
                  const fieldScope =
                    objectTypes[opReturn.name].fields[fieldName].scope;
                  if (keyNums.includes(fieldScope.pgFieldIntrospection.num)) {
                    updateKeys.push(fieldScope.fieldName);
                  }
                },
              );

              const upsertOutputTypeName = `upsert${opReturn.name}`;
              const updatePatchField = 'patch';
              let opOutputType = `customPgr.PgrNode<customPgr.${opReturn.name}>`;

              mixinInputTypes += `
                export type ${upsertOutputTypeName}Input = { query: customPgr.${
                objectTypes[opReturn.name].connectionOpName
              }Input, create: customPgr.create${
                opReturn.name
              }Input  , update:  customPgr.update${
                opReturn.name
              }Input['${updatePatchField}'] };`;

              mixinActions += `
                moleculerTs.Action<'${upsertOutputTypeName}', customPgr.${upsertOutputTypeName}Input, ${opOutputType}>,
              `;

              mixinMixinActions += `
                async '${upsertOutputTypeName}'(this: any, ctx: any) {
                  const params = ctx.params;
                  let node = await ctx.call(\`\${this.name}.first${capitalize(
                    objectTypes[opReturn.name].connectionOpName,
                  )}\`, { ...params.query });
                  console.log('node', node)
                  if (!node) {
                    node = await ctx.call(\`\${this.name}.create${
                      opReturn.name
                    }\`, { ...params.create });
                  } else {
                    const primaryQuery = getPartialObject(node, [${updateKeys
                      .map(one => `'${one}'`)
                      .join(',')}]);
                    node = await ctx.call(\`\${this.name}.update${
                      opReturn.name
                    }\`, { ...primaryQuery, ${updatePatchField}: params.update });

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
        }

        if (opReturn.type === 'delete') {
          const mutationOutField = lowerlize(opReturn.name);
          let opOutputType = `customPgr.PgrNodeOptional<customPgr.${opReturn.name}>`;
          mixinGql += `
            '${operationName}': moleculerPgr.shapeToGql(moleculerPgr.shape<NonNullable<{${mutationOutField}: ${opOutputType}} >>()),
          `;

          mixinInputTypes += `
          export type ${operationName}Input = Omit<Parameters<pgr.Mutation['${operationName}']>[0]['input'], 'clientMutationId'>`;

          mixinActions += `
          moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, ${opOutputType}>,
        `;

          mixinMixinActions += `
          async ${operationName}(this: any, ctx: any) {
            const params = ctx.params;
            ${client}
            const query = ${query}['${operationName}'];
            const data = {
              input: params
            }
            const result = await client.mutation.${op.name}(data, query); 
            return result!['${mutationOutField}'];
          },`;
        }

        // @TODO
        if (opReturn.type === 'customMutation') {
        }
      }
    });

    Object.keys(outputTypes).map(outputTypeName => {
      const relationsKeys = getRelationsFields(outputTypeName);
      let Omit = '';
      if (relationsKeys.length > 0) {
        relationsKeys.map(key => {
          Omit += `| '${key}'`;
        });
        Omit = Omit.substr(1);
      } else {
        Omit = 'never';
      }

      mixinPgrExtend += `
        export type ${outputTypeName}<T extends keyof pgr.${outputTypeName}, P, Optional extends true | false = true
        > = Optional extends true
          ? {
              [K in T]?: P;
            }
          : {
              [K in T]: P;
            };
      `;

      mixinOutputTypes += `
        export type ${outputTypeName} = moleculerPgr.StrictOmit<pgr.${outputTypeName}, ${Omit}>`;
    });

    mixin += `
    ${mixinInputTypes} 

    ${mixinOutputTypes} 

    export namespace PgrExtend {
      ${mixinPgrExtend} 
    }

    export type PgrActions = [
      ${mixinActions}
    ]

    export const pgrQuery = {
      ${mixinGql}
    }

    export const PgrMixin = {
      name: 'PostgraphileMixin',
      settings: {
        pgr: {
          query: pgrQuery,
        },
      },
      methods: {},
      events: {},
      actions: {
        ${mixinMixinActions}
      }
    }
    `;

    fs.writeFileSync(`${__dirname}/schema/mixin.ts`, mixin);
  }

  builder.hook('GraphQLObjectType', (spec, { extend }, { scope }) => {
    console.log(spec.name);

    objectTypes[spec.name] = {
      fields: {},
      scope,
    };

    return spec;
  });

  builder.hook(
    'GraphQLObjectType:fields',
    (spec: any, { extend }, { scope }) => {
      if (scope.isRootQuery) {
        Object.keys(spec).forEach(operationName => {
          if (operationName === 'query') {
            return spec;
          }

          let curType = spec[operationName].type;
          while (curType && curType.ofType) {
            curType = curType.ofType;
          }

          const returnTypeName = curType.name;

          if (returnTypeName) {
            operations[operationName] = {
              name: operationName,
              isRootQuery: true,
              returnTypeName,
            };
          }
        });

        return spec;
      }

      if (scope.isRootMutation) {
        Object.keys(spec).forEach(operationName => {
          let curType = spec[operationName].type;
          while (curType && curType.ofType) {
            curType = curType.ofType;
          }

          const returnTypeName = curType.name;

          if (returnTypeName) {
            operations[operationName] = {
              name: operationName,
              isRootMutation: true,
              returnTypeName,
            };
          }
        });

        return spec;
      }

      return spec;
    },
  );

  builder.hook(
    'GraphQLObjectType:fields:field',
    (field: any, { extend }: any, { scope, Self }: any) => {
      let curType = field.type;
      while (curType && curType.ofType) {
        curType = curType.ofType;
      }

      const returnTypeName = curType.name;

      objectTypes[Self.name].fields[scope.fieldName] = {
        scope,
        returnTypeName,
        field,
      };

      return field;
    },
  );

  builder.hook('finalize', schema => {
    setTimeout(async () => {
      await generateSchemaTs(path.join(__dirname, 'schema'), schema).then(
        () => {
          console.log('generated');
        },
      );

      await generateMixin();

      // touch file to regenrate ?
      const filename = `${__dirname}/db.service.types.ts`;
      try {
        const time = new Date();
        fs.utimesSync(filename, time, time);
      } catch (err) {
        fs.closeSync(fs.openSync(filename, 'w'));
      }

      process.exit(0);
    }, 0);

    return schema;
  });
}

const MyInflectorPlugin = makeAddInflectorsPlugin(oldInflectors => {
  // @ts-ignore
  const oldSingularize = oldInflectors.singularize.bind(oldInflectors);

  return {
    singularize(str) {
      if (str.match(/_os$/i)) {
        return str;
      }

      if (str.match(/_tls$/i)) {
        return str;
      }

      if (str.match(/_options$/i)) {
        return str;
      }

      return oldSingularize(str);
    },
  };
}, true);

interface DbService {
  name: typeof DbServiceTypes.name;
}
@Service({
  name: DbServiceTypes.name,
  mixins: [PgrMixin],
})
class DbService
  extends Broker.Service<{
    port: string;
    pgr: { client: any; generate: boolean };
  }>
  implements DbServiceTypes.ServiceOwnActions {
  server!: Server;

  created() {
    this.settings.port = '3000';
    this.settings.pgr = {
      client: new PgrClient(`http://127.0.0.1:${this.settings.port}/graphql`),
      generate: false,
    };
  }

  async started() {
    const app = express();
    const plugins: Plugin[] = [
      PgNonNullPlugin,
      pgSimplifyInflector,
      ConnectionFilterPlugin,
      // PostGraphileNestedMutations,
      PgManyToManyPlugin,

      MyInflectorPlugin,
      MySmartTagsPlugin,
    ];

    if (this.settings.pgr.generate) {
      plugins.push(MyBuilderPlugin);
    }

    app.use(
      postgraphile(process.env.FIRST_BROKER_DB_URL || 'public', {
        graphileBuildOptions: {},
        dynamicJson: true,
        setofFunctionsContainNulls: false,
        ignoreRBAC: true,
        ignoreIndexes: true,
        extendedErrors: ['hint', 'detail', 'errcode'],
        skipPlugins: [NodePlugin],
        appendPlugins: plugins,
        graphiql: true,
        enhanceGraphiql: true,
        enableQueryBatching: true,
        legacyRelations: 'omit',
      }),
    );

    await new Promise((resolve, reject) => {
      this.server = app.listen(this.settings.port);

      this.server.once('listening', resolve);
      this.server.once('error', reject);
    });

    setTimeout(async () => {
      const userProfile = await this.broker.call('db.upsertUserProfile', {
        create: { picture: 'create' },
        update: { picture: 'update' },
        query: {},
      });
      console.log('UP', userProfile);

      console.log(
        await this.broker.call('db.userProfile', { id: userProfile.id }),
      );
    }, 1500);

    if (0) {
    }
  }
  async stopped() {
    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server.close(err => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        });
      });
    }
  }
}

export = DbService;

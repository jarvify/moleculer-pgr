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

  // @TODO unknown mutation output?!

  // @TODO nodeChanged ?!!!

  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
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
      | null = null;

    if (op.isRootQuery) {
      if (opReturnObjectType.scope.isConnectionType) {
        opReturnType = 'connection';
        opReturnTypeName = getConnectionOutputTypeName(
          opReturnObjectType.scope,
        );
      }

      if (opReturnObjectType.scope.isPgRowType) {
        opReturnType = 'node';
        opReturnTypeName = op.returnTypeName;
      }
    }

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
      }
    }

    if (opReturnTypeName === null || opReturnType === null) {
      return null;
    }

    return {
      name: opReturnTypeName,
      type: opReturnType,
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
    export type PgrNode<Node> = Node | null;
    export type PgrCount = number;

    `;
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
        // add extra connection operations - count, first, find
        if (opReturn.type === 'connection') {
          const countOperationName = `count${capitalize(operationName)}`;
          mixinInputTypes += `
            export type ${countOperationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;

          mixinActions += `
            moleculerTs.Action<'${countOperationName}', customPgr.${countOperationName}Input, customPgr.PgrCount>,
          `;

          mixinMixinActions += `
            async ${countOperationName}(ctx: any) {},`;

          const firstOperationName = `first${capitalize(operationName)}`;
          mixinInputTypes += `
            export type ${firstOperationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;

          mixinActions += `
            moleculerTs.Action<'${firstOperationName}', customPgr.${firstOperationName}Input, customPgr.PgrNodeOptional<customPgr.${opReturn.name}>>,
          `;

          mixinMixinActions += `
            async ${firstOperationName}(ctx: any) {},`;

          // op first single relation fields !
          getSingleRelationFields(opReturn.name).map(fieldName => {
            const singleRelationOperationName = `${firstOperationName}.${fieldName}`;
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

          const findOperationName = `find${capitalize(operationName)}`;
          mixinInputTypes += `
            export type ${findOperationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;

          mixinActions += `
            moleculerTs.Action<'${findOperationName}', customPgr.${findOperationName}Input, customPgr.PgrNodeArray<customPgr.${opReturn.name}>>,
          `;

          mixinMixinActions += `
            async ${findOperationName}(ctx: any) {},`;
        }
        // @TODO - add extra single relation operations
        if (opReturn.type === 'node') {
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

        mixinInputTypes += `
        export type ${operationName}Input = Parameters<pgr.Query['${operationName}']>[0];`;
      }

      if (op.isRootMutation) {
        if (opReturn.type === 'create') {
          const createInputName =
            opReturn.name.charAt(0).toLowerCase() + opReturn.name.slice(1);
          mixinInputTypes += `
          export type ${operationName}Input = Parameters<pgr.Mutation['${operationName}']>[0]['input']['${createInputName}']`;
        } else {
          mixinInputTypes += `
          export type ${operationName}Input = Omit<Parameters<pgr.Mutation['${operationName}']>[0]['input'], 'clientMutationId'>`;
        }
      }

      if (opReturn.type === 'connection') {
        mixinActions += `
          moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, customPgr.PgrConnection<customPgr.${opReturn.name}>>,
        `;

        mixinMixinActions += `
          async ${operationName}(ctx: any) {},`;
      }

      if (opReturn.type === 'node') {
        mixinActions += `
          moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, customPgr.PgrNodeOptional<customPgr.${opReturn.name}>>,
        `;

        mixinMixinActions += `
          async ${operationName}(ctx: any) {},`;
      }

      if (opReturn.type === 'create') {
        mixinActions += `
          moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, customPgr.PgrNode<customPgr.${opReturn.name}>>,
        `;

        mixinMixinActions += `
          async ${operationName}(ctx: any) {},`;
      }

      if (opReturn.type === 'update') {
        mixinActions += `
          moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, customPgr.PgrNodeOptional<customPgr.${opReturn.name}>>,
        `;

        mixinMixinActions += `
          async ${operationName}(ctx: any) {},`;
      }

      if (opReturn.type === 'delete') {
        mixinActions += `
          moleculerTs.Action<'${operationName}', customPgr.${operationName}Input, customPgr.PgrNodeOptional<customPgr.${opReturn.name}>>,
        `;

        mixinMixinActions += `
          async ${operationName}(ctx: any) {},`;
      }

      return;
      /*

        export const PgrMixin = {
          name: 'PostgraphileMixin',
          methods: {},
          events: {},
          actions: {
            async accounts(this: any, ctx: any) {
              const client = this.settings.pgr.client;
              const params = ctx.parmas;
              let $query = params.$query;

              return client.query.accounts(params, $query);
            },
       

      console.log(operationName);
      console.log(op);
       */
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

      mixinGql += `
        ${outputTypeName}: moleculerPgr.shapeToGql(moleculerPgr.shape<customPgr.${outputTypeName}>()),
      `;

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
  mixins: [],
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
    if (0) {
      const a1 = await this.broker.call('db.user.profile', { id: 'user_Id' });
      const a = await this.broker.call('db.accounts', {});

      /*
        await this.broker.call('db.user.account', {});
        await this.broker.call('db.user.profile', {});
      */
    }

    const app = express();
    const plugins: Plugin[] = [
      pgSimplifyInflector,
      ConnectionFilterPlugin,
      PostGraphileNestedMutations,
      PgManyToManyPlugin,
      MyInflectorPlugin,
      MySmartTagsPlugin,
    ];

    if (this.settings.pgr.generate) {
      plugins.push(MyBuilderPlugin);
    }

    app.use(
      postgraphile(process.env.FIRST_BROKER_DB_URL || 'public', {
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

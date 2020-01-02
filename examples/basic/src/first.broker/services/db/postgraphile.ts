import { postgraphile, Plugin, makePluginHook } from 'postgraphile';
import { createGenerateMixinPlugin } from 'moleculer-pgr';
import { Pool, PoolConfig } from 'pg';

import {
  makeJSONPgSmartTagsPlugin,
  makeAddInflectorsPlugin,
} from 'graphile-utils';

import path from 'path';

import pgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector';
// @ts-ignore
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';
// @ts-ignore
import PgManyToManyPlugin from '@graphile-contrib/pg-many-to-many';

import { NodeChangeSubscriptionPlugin } from './subscription';

const PgNonNullPlugin = require('@graphile-contrib/pg-non-null');

const { default: PgPubsub } = require('@graphile/pg-pubsub');
const pluginHook = makePluginHook([PgPubsub]);

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

// @TODO refactor inflector with new build hooks
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

type CreatePostgraphileOptions = {
  poolOrConfig?: string | Pool | PoolConfig | undefined;
  schema?: string | string[] | undefined;
};

const plugins: Plugin[] = [
  PgNonNullPlugin,
  pgSimplifyInflector,
  ConnectionFilterPlugin,
  PgManyToManyPlugin,
  MyInflectorPlugin,
  MySmartTagsPlugin,
  NodeChangeSubscriptionPlugin,
];

function getPostgraphile(options: CreatePostgraphileOptions) {
  if (!options.schema) {
    options.schema = 'public';
  }

  return postgraphile(options.poolOrConfig, options.schema, {
    pluginHook,
    subscriptions: true,
    graphileBuildOptions: {},
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: true,
    ignoreIndexes: true,
    extendedErrors: ['hint', 'detail', 'errcode'],
    appendPlugins: plugins,
    graphiql: true,
    enhanceGraphiql: true,
    enableQueryBatching: true,
    legacyRelations: 'omit',
  });
}

export async function generateMixin(options: CreatePostgraphileOptions) {
  return new Promise((resolve, reject) => {
    const GenerateClientPlugin = createGenerateMixinPlugin(
      {
        outputDir: path.join(__dirname, 'mixin'),
      },
      async (err: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      },
    );

    plugins.push(GenerateClientPlugin);
    getPostgraphile(options);
  });
}

export function createPostgraphile(options: CreatePostgraphileOptions) {
  return getPostgraphile(options);
}

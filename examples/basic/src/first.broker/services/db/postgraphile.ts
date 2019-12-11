import { postgraphile, Plugin } from 'postgraphile';
import { createGenerateClientPlugin } from 'moleculer-pgr';

import {
  makeJSONPgSmartTagsPlugin,
  makeAddInflectorsPlugin,
} from 'graphile-utils';

import path from 'path';

// Plugins
import { NodePlugin } from 'graphile-build';
import pgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector';
// @ts-ignore
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';
// @ts-ignore
import PostGraphileNestedMutations from 'postgraphile-plugin-nested-mutations';
// @ts-ignore
import PgManyToManyPlugin from '@graphile-contrib/pg-many-to-many';
const PgNonNullPlugin = require('@graphile-contrib/pg-non-null');

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

export async function createPostgraphile(generateClient: boolean = false) {
  const plugins: Plugin[] = [
    PgNonNullPlugin,
    pgSimplifyInflector,
    ConnectionFilterPlugin,
    // PostGraphileNestedMutations,
    PgManyToManyPlugin,

    MyInflectorPlugin,
    MySmartTagsPlugin,
  ];

  if (generateClient) {
    const GenerateClientPlugin = createGenerateClientPlugin(
      {
        outputDir: path.join(__dirname, 'pgr-client'),
        customMixinPath: path.join(__dirname, 'mixin.ts'),
      },
      async err => {
        if (err) {
          console.error(err);
          process.exit(1);
          return;
        }
        console.log('generate client - ok');
        process.exit(0);
      },
    );

    plugins.push(GenerateClientPlugin);
  }

  const pgr = postgraphile(process.env.FIRST_BROKER_DB_URL || 'public', {
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
  });

  return {
    postgraphile: pgr,
  };
}

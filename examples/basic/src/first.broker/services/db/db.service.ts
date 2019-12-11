import { Service, Action, Event, Method } from 'moleculer-decorators';
import * as Broker from '@first.broker/moleculer';
import { DbServiceTypes } from '@first.broker/types';

import { createGenerateClientPlugin } from 'moleculer-pgr';
import path from 'path';
import express from 'express';
import { postgraphile, Plugin } from 'postgraphile';

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

import { PgrMixin } from './mixin';
import { PgrClient } from './client';

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
      const GenerateClientPlugin = createGenerateClientPlugin(
        {
          outputDir: path.join(__dirname, 'schema'),
          customMixinPath: path.join(__dirname, 'mixin.ts'),
        },
        async err => {
          if (err) {
            this.logger.error(err);
          }
          console.log('client generated');
          await this.broker.stop();
        },
      );

      plugins.push(GenerateClientPlugin);
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
    /*
    setTimeout(async () => {
      const userProfile = await this.broker.call('db.upsertUserProfile', {
        create: { picture: 'create' },
        update: { picture: 'update' },
        query: {},
      });
      console.log('UP', userProfile);

      await this.broker.call('db.deleteUser', {
        id: 'b9bd501c-9e54-45f4-8518-bd4793b72207',
      });

      const user = await this.broker.call('db.createUser', {
        id: 'b9bd501c-9e54-45f4-8518-bd4793b72207',
        email: 'user@user.com',
        lastLoggedAt: new Date().toISOString(),
        userProfileId: userProfile.id,
      });

      const unknownId = '1c96407c-8be8-4c0e-bbf2-724761a7ac5a';

      console.log('createUser', user);
      console.log('user', await this.broker.call('db.user', { id: user.id }));

      console.log(
        'db.userProfile.user',
        await this.broker.call('db.userProfile.user', {
          id: userProfile.id,
        }),
      );

      console.log(
        'db.userProfile.user ( Unknown id )',
        await this.broker.call('db.userProfile.user', {
          id: unknownId,
        }),
      );

      console.log(
        'db.firstUserProfiles.user',
        await this.broker.call('db.firstUserProfiles.user', {
          filter: {
            id: {
              equalTo: userProfile.id,
            },
          },
        }),
      );

      console.log(
        'db.firstUserProfiles.user  ( Unknown id )',
        await this.broker.call('db.firstUserProfiles.user', {
          filter: {
            id: {
              equalTo: unknownId,
            },
          },
        }),
      );

      console.log(
        'db.user.profile',
        await this.broker.call('db.user.profile', { id: user.id }),
      );

      console.log(
        'db.user.profile ( Unknown id )',
        await this.broker.call('db.user.profile', { id: unknownId }),
      );

      console.log(
        'db.firstUsers.profile',
        await this.broker.call('db.firstUsers.profile', {
          filter: { id: { equalTo: user.id } },
        }),
      );

      console.log(
        'db.firstUsers.profile ( Unknown id )',
        await this.broker.call('db.firstUsers.profile', {
          filter: { id: { equalTo: unknownId } },
        }),
      );

      console.log(
        'db.userProfile',
        await this.broker.call('db.userProfile', { id: userProfile.id }),
      );

      console.log(
        'db.userProfile  ( Unknown id )',
        await this.broker.call('db.userProfile', { id: unknownId }),
      );

      console.log(
        'db.firstUserProfiles',
        await this.broker.call('db.firstUserProfiles', {
          filter: { id: { equalTo: userProfile.id } },
        }),
      );

      console.log(
        'db.firstUserProfiles',
        await this.broker.call('db.firstUserProfiles', {
          filter: { id: { equalTo: unknownId } },
        }),
      );

      console.log(
        'db.countUserProfiles',
        await this.broker.call('db.countUserProfiles', {}),
      );

      console.log(
        'db.findUserProfiles',
        await this.broker.call('db.findUserProfiles', {}),
      );

      console.log(
        'db.updateUserProfile',
        await this.broker.call('db.updateUserProfile', {
          id: '1c96407c-8be8-4c0e-bbf2-724761a7ac5a',
          patch: {},
        }),
      );

      console.log(
        'db.updateUserProfile (Unknown id)',
        await this.broker.call('db.updateUserProfile', {
          id: '1c96407c-8be8-4c0e-bbf2-724761a7ac5a',
          patch: {},
        }),
      );

      console.log(
        'db.deleteUser',
        await this.broker.call('db.deleteUser', { id: user.id }),
      );

      console.log(
        'db.deleteUserProfile',
        await this.broker.call('db.deleteUserProfile', { id: userProfile.id }),
      );

      console.log(
        'db.deleteUserProfile (Unknown id)',
        await this.broker.call('db.deleteUserProfile', {
          id: '1c96407c-8be8-4c0e-bbf2-724761a7ac5a',
        }),
      );
    }, 1500);

    if (0) {
    }
    */
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

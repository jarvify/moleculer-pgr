import { Service, Action, Event, Method } from 'moleculer-decorators';
import * as Broker from '@first.broker/moleculer';
import { DbServiceTypes } from '@first.broker/types';

import express from 'express';
import { Server } from 'http';
import { createPostgraphile } from './postgraphile';

import { PgrMixin } from './mixin';
import { PgrClient } from './client';

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

  @Action()
  test(
    ctx: Broker.Context<DbServiceTypes.ActionParams<'test'>>,
  ): DbServiceTypes.ActionReturn<'test'> {
    ctx.params.id;
    return 'a';
  }

  created() {
    this.settings.port = '3000';
    this.settings.pgr = {
      client: new PgrClient(`http://127.0.0.1:${this.settings.port}/graphql`),
      generate: false,
    };
  }

  async started() {
    const app = express();
    const instance = await createPostgraphile();
    app.use(instance.postgraphile);

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

      // this.broker.call('')

      console.log('createUser', user);
      console.log('user', await this.broker.call('db.user', { id: user.id }));

      console.log('users', await this.broker.call('db.users', {}));

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
          id: userProfile.id,
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
  }
  async stopped() {
    console.log('db.service.stopped');
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

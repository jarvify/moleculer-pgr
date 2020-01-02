import { Service, Action, Event, Method } from 'moleculer-decorators';
import * as Broker from '@first.broker/moleculer';
import { TestServiceTypes } from '@first.broker/types';

interface TestService {
  name: typeof TestServiceTypes.name;
}

@Service({
  name: TestServiceTypes.name,
  mixins: [],
})
class TestService
  extends Broker.Service<{
    port: string;
    pgr: { client: any };
  }>
  implements TestServiceTypes.ServiceOwnActions {
  created() {}

  /*
  pgNotify() {
    const client = new PgrClient(
      `http://127.0.0.1:${this.settings.port}/graphql`,
    );
    /*
    client.subscription.listen('create', ``);
    client.subscription.listen('update', ``);
    client.subscription.listen('delete', ``);
  }
  */

  async started() {
    await this.broker.waitForServices('db');

    const userProfile = await this.broker.call('db.upsertUserProfile', {
      create: { picture: 'create' },
      update: { picture: 'update' },
      query: {},
    });
    // not null
    userProfile.id;
    console.log('UP', userProfile);

    const delUser = await this.broker.call('db.deleteUser', {
      id: 'b9bd501c-9e54-45f4-8518-bd4793b72207',
    });

    console.log(delUser);

    const user = await this.broker.call('db.createUser', {
      id: 'b9bd501c-9e54-45f4-8518-bd4793b72207',
      email: 'user@user.com',
      lastLoggedAt: new Date().toISOString(),
      userProfileId: userProfile.id,
    });
    // not null !
    return;

    const unknownId = '1c96407c-8be8-4c0e-bbf2-724761a7ac5a';

    console.log('createUser', user);
    console.log('user');

    console.log('users', await this.broker.call('db.users', {}));

    const u = await this.broker.call('db.userProfile.user', {
      id: userProfile.id,
    });

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
  }
}

export = TestService;

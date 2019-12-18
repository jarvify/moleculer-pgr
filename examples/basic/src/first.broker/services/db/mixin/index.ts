import * as moleculerTs from 'moleculer-ts';
import * as moleculerPgr from 'moleculer-pgr';
import * as binding from './binding';

function getPartialObject(obj: any, keys: string[]) {
  return Object.keys(obj)
    .filter(key => keys.indexOf(key) >= 0)
    .reduce((obj2, key) => Object.assign(obj2, { [key]: obj[key] }), {});
}

type NodeArray<Node> = Node[];
type NodeOptional<Node> = Node | null;
type Node<Node> = Node;

export type PgrActions = [
  moleculerTs.Action<
    'accounts',
    Parameters<binding.Query['accounts']>[0],
    binding.AccountsConnection
  >,
  moleculerTs.Action<
    'countAccounts',
    Parameters<binding.Query['accounts']>[0],
    number
  >,
  moleculerTs.Action<
    'firstAccounts',
    Parameters<binding.Query['accounts']>[0],
    binding.Account
  >,
  moleculerTs.Action<
    'firstAccounts.user',
    Parameters<binding.Query['accounts']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'findAccounts',
    Parameters<binding.Query['accounts']>[0],
    NodeArray<binding.Account>
  >,
  moleculerTs.Action<
    'migrations',
    Parameters<binding.Query['migrations']>[0],
    binding.MigrationsConnection
  >,
  moleculerTs.Action<
    'countMigrations',
    Parameters<binding.Query['migrations']>[0],
    number
  >,
  moleculerTs.Action<
    'firstMigrations',
    Parameters<binding.Query['migrations']>[0],
    binding.Migration
  >,
  moleculerTs.Action<
    'findMigrations',
    Parameters<binding.Query['migrations']>[0],
    NodeArray<binding.Migration>
  >,
  moleculerTs.Action<
    'testMultiplePrimaries',
    Parameters<binding.Query['testMultiplePrimaries']>[0],
    binding.TestMultiplePrimariesConnection
  >,
  moleculerTs.Action<
    'countTestMultiplePrimaries',
    Parameters<binding.Query['testMultiplePrimaries']>[0],
    number
  >,
  moleculerTs.Action<
    'firstTestMultiplePrimaries',
    Parameters<binding.Query['testMultiplePrimaries']>[0],
    binding.TestMultiplePrimary
  >,
  moleculerTs.Action<
    'findTestMultiplePrimaries',
    Parameters<binding.Query['testMultiplePrimaries']>[0],
    NodeArray<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'testPrimaries',
    Parameters<binding.Query['testPrimaries']>[0],
    binding.TestPrimariesConnection
  >,
  moleculerTs.Action<
    'countTestPrimaries',
    Parameters<binding.Query['testPrimaries']>[0],
    number
  >,
  moleculerTs.Action<
    'firstTestPrimaries',
    Parameters<binding.Query['testPrimaries']>[0],
    binding.TestPrimary
  >,
  moleculerTs.Action<
    'findTestPrimaries',
    Parameters<binding.Query['testPrimaries']>[0],
    NodeArray<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'users',
    Parameters<binding.Query['users']>[0],
    binding.UsersConnection
  >,
  moleculerTs.Action<
    'countUsers',
    Parameters<binding.Query['users']>[0],
    number
  >,
  moleculerTs.Action<
    'firstUsers',
    Parameters<binding.Query['users']>[0],
    binding.User
  >,
  moleculerTs.Action<
    'firstUsers.profile',
    Parameters<binding.Query['users']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'findUsers',
    Parameters<binding.Query['users']>[0],
    NodeArray<binding.User>
  >,
  moleculerTs.Action<
    'userProfiles',
    Parameters<binding.Query['userProfiles']>[0],
    binding.UserProfilesConnection
  >,
  moleculerTs.Action<
    'countUserProfiles',
    Parameters<binding.Query['userProfiles']>[0],
    number
  >,
  moleculerTs.Action<
    'firstUserProfiles',
    Parameters<binding.Query['userProfiles']>[0],
    binding.UserProfile
  >,
  moleculerTs.Action<
    'firstUserProfiles.user',
    Parameters<binding.Query['userProfiles']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'findUserProfiles',
    Parameters<binding.Query['userProfiles']>[0],
    NodeArray<binding.UserProfile>
  >,
  moleculerTs.Action<
    'account',
    Parameters<binding.Query['account']>[0],
    binding.Account
  >,
  moleculerTs.Action<
    'account.user',
    Parameters<binding.Query['account']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'migration',
    Parameters<binding.Query['migration']>[0],
    binding.Migration
  >,
  moleculerTs.Action<
    'testMultiplePrimary',
    Parameters<binding.Query['testMultiplePrimary']>[0],
    binding.TestMultiplePrimary
  >,
  moleculerTs.Action<
    'testPrimary',
    Parameters<binding.Query['testPrimary']>[0],
    binding.TestPrimary
  >,
  moleculerTs.Action<
    'user',
    Parameters<binding.Query['user']>[0],
    binding.User
  >,
  moleculerTs.Action<
    'user.profile',
    Parameters<binding.Query['user']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userByEmail',
    Parameters<binding.Query['userByEmail']>[0],
    binding.User
  >,
  moleculerTs.Action<
    'userByEmail.profile',
    Parameters<binding.Query['userByEmail']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userByFirstNameAndLastName',
    Parameters<binding.Query['userByFirstNameAndLastName']>[0],
    binding.User
  >,
  moleculerTs.Action<
    'userByFirstNameAndLastName.profile',
    Parameters<binding.Query['userByFirstNameAndLastName']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userByUserProfileId',
    Parameters<binding.Query['userByUserProfileId']>[0],
    binding.User
  >,
  moleculerTs.Action<
    'userByUserProfileId.profile',
    Parameters<binding.Query['userByUserProfileId']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userProfile',
    Parameters<binding.Query['userProfile']>[0],
    binding.UserProfile
  >,
  moleculerTs.Action<
    'userProfile.user',
    Parameters<binding.Query['userProfile']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'userSearch',
    Parameters<binding.Query['userSearch']>[0],
    binding.UsersConnection
  >,
  moleculerTs.Action<
    'countUserSearch',
    Parameters<binding.Query['userSearch']>[0],
    number
  >,
  moleculerTs.Action<
    'firstUserSearch',
    Parameters<binding.Query['userSearch']>[0],
    binding.User
  >,
  moleculerTs.Action<
    'firstUserSearch.profile',
    Parameters<binding.Query['userSearch']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'findUserSearch',
    Parameters<binding.Query['userSearch']>[0],
    NodeArray<binding.User>
  >,
  moleculerTs.Action<
    'createAccount',
    Parameters<binding.Mutation['createAccount']>[0]['input']['account'],
    Node<binding.Account>
  >,
  moleculerTs.Action<
    'createMigration',
    Parameters<binding.Mutation['createMigration']>[0]['input']['migration'],
    Node<binding.Migration>
  >,
  moleculerTs.Action<
    'createTestMultiplePrimary',
    Parameters<
      binding.Mutation['createTestMultiplePrimary']
    >[0]['input']['testMultiplePrimary'],
    Node<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'createTestPrimary',
    Parameters<
      binding.Mutation['createTestPrimary']
    >[0]['input']['testPrimary'],
    Node<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'createUser',
    Parameters<binding.Mutation['createUser']>[0]['input']['user'],
    Node<binding.User>
  >,
  moleculerTs.Action<
    'createUserProfile',
    Parameters<
      binding.Mutation['createUserProfile']
    >[0]['input']['userProfile'],
    Node<binding.UserProfile>
  >,
  moleculerTs.Action<
    'updateAccount',
    Parameters<binding.Mutation['updateAccount']>[0]['input'],
    NodeOptional<binding.Account>
  >,
  moleculerTs.Action<
    'upsertAccount',
    {
      query: Parameters<binding.Query['accounts']>[0];
      create: Parameters<
        binding.Mutation['createAccount']
      >[0]['input']['account'];
      update: Parameters<
        binding.Mutation['updateAccount']
      >[0]['input']['patch'];
    },
    Node<binding.Account>
  >,
  moleculerTs.Action<
    'updateMigration',
    Parameters<binding.Mutation['updateMigration']>[0]['input'],
    NodeOptional<binding.Migration>
  >,
  moleculerTs.Action<
    'upsertMigration',
    {
      query: Parameters<binding.Query['migrations']>[0];
      create: Parameters<
        binding.Mutation['createMigration']
      >[0]['input']['migration'];
      update: Parameters<
        binding.Mutation['updateMigration']
      >[0]['input']['patch'];
    },
    Node<binding.Migration>
  >,
  moleculerTs.Action<
    'updateTestMultiplePrimary',
    Parameters<binding.Mutation['updateTestMultiplePrimary']>[0]['input'],
    NodeOptional<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'upsertTestMultiplePrimary',
    {
      query: Parameters<binding.Query['testMultiplePrimaries']>[0];
      create: Parameters<
        binding.Mutation['createTestMultiplePrimary']
      >[0]['input']['testMultiplePrimary'];
      update: Parameters<
        binding.Mutation['updateTestMultiplePrimary']
      >[0]['input']['patch'];
    },
    Node<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'updateTestPrimary',
    Parameters<binding.Mutation['updateTestPrimary']>[0]['input'],
    NodeOptional<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'upsertTestPrimary',
    {
      query: Parameters<binding.Query['testPrimaries']>[0];
      create: Parameters<
        binding.Mutation['createTestPrimary']
      >[0]['input']['testPrimary'];
      update: Parameters<
        binding.Mutation['updateTestPrimary']
      >[0]['input']['patch'];
    },
    Node<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'updateUser',
    Parameters<binding.Mutation['updateUser']>[0]['input'],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'upsertUser',
    {
      query: Parameters<binding.Query['users']>[0];
      create: Parameters<binding.Mutation['createUser']>[0]['input']['user'];
      update: Parameters<binding.Mutation['updateUser']>[0]['input']['patch'];
    },
    Node<binding.User>
  >,
  moleculerTs.Action<
    'updateUserByEmail',
    Parameters<binding.Mutation['updateUserByEmail']>[0]['input'],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'updateUserByFirstNameAndLastName',
    Parameters<
      binding.Mutation['updateUserByFirstNameAndLastName']
    >[0]['input'],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'updateUserByUserProfileId',
    Parameters<binding.Mutation['updateUserByUserProfileId']>[0]['input'],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'updateUserProfile',
    Parameters<binding.Mutation['updateUserProfile']>[0]['input'],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'upsertUserProfile',
    {
      query: Parameters<binding.Query['userProfiles']>[0];
      create: Parameters<
        binding.Mutation['createUserProfile']
      >[0]['input']['userProfile'];
      update: Parameters<
        binding.Mutation['updateUserProfile']
      >[0]['input']['patch'];
    },
    Node<binding.UserProfile>
  >,
  moleculerTs.Action<
    'deleteAccount',
    Parameters<binding.Mutation['deleteAccount']>[0]['input'],
    NodeOptional<binding.Account>
  >,
  moleculerTs.Action<
    'deleteMigration',
    Parameters<binding.Mutation['deleteMigration']>[0]['input'],
    NodeOptional<binding.Migration>
  >,
  moleculerTs.Action<
    'deleteTestMultiplePrimary',
    Parameters<binding.Mutation['deleteTestMultiplePrimary']>[0]['input'],
    NodeOptional<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'deleteTestPrimary',
    Parameters<binding.Mutation['deleteTestPrimary']>[0]['input'],
    NodeOptional<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'deleteUser',
    Parameters<binding.Mutation['deleteUser']>[0]['input'],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'deleteUserByEmail',
    Parameters<binding.Mutation['deleteUserByEmail']>[0]['input'],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'deleteUserByFirstNameAndLastName',
    Parameters<
      binding.Mutation['deleteUserByFirstNameAndLastName']
    >[0]['input'],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'deleteUserByUserProfileId',
    Parameters<binding.Mutation['deleteUserByUserProfileId']>[0]['input'],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'deleteUserProfile',
    Parameters<binding.Mutation['deleteUserProfile']>[0]['input'],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userCustomMutation',
    Parameters<binding.Mutation['userCustomMutation']>[0]['input'],
    NodeOptional<binding.User>
  >,
];

const gqlQueryString = {
  accounts: `{
  nodes 
  {
    id 
    name 
    planStatus 
    plan 
    subscriptionId 
    createdAt 
    updatedAt 
    userId 
  }
  edges 
  {
    cursor 
    node 
    {
      id 
      name 
      planStatus 
      plan 
      subscriptionId 
      createdAt 
      updatedAt 
      userId 
    }
  }
  totalCount 
  pageInfo 
  {
    hasNextPage 
    hasPreviousPage 
    startCursor 
    endCursor 
  }
}
`,
  countAccounts: `{ totalCount }`,
  'firstAccounts.user': `{ nodes { user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}
 } }`,
  migrations: `{
  nodes 
  {
    id 
    timestamp 
    name 
  }
  edges 
  {
    cursor 
    node 
    {
      id 
      timestamp 
      name 
    }
  }
  totalCount 
  pageInfo 
  {
    hasNextPage 
    hasPreviousPage 
    startCursor 
    endCursor 
  }
}
`,
  countMigrations: `{ totalCount }`,
  testMultiplePrimaries: `{
  nodes 
  {
    oneId 
    twoId 
    createdAt 
    updatedAt 
  }
  edges 
  {
    cursor 
    node 
    {
      oneId 
      twoId 
      createdAt 
      updatedAt 
    }
  }
  totalCount 
  pageInfo 
  {
    hasNextPage 
    hasPreviousPage 
    startCursor 
    endCursor 
  }
}
`,
  countTestMultiplePrimaries: `{ totalCount }`,
  testPrimaries: `{
  nodes 
  {
    primary 
    createdAt 
    updatedAt 
  }
  edges 
  {
    cursor 
    node 
    {
      primary 
      createdAt 
      updatedAt 
    }
  }
  totalCount 
  pageInfo 
  {
    hasNextPage 
    hasPreviousPage 
    startCursor 
    endCursor 
  }
}
`,
  countTestPrimaries: `{ totalCount }`,
  users: `{
  nodes 
  {
    id 
    email 
    password 
    firstName 
    lastName 
    lastLoggedAt 
    createdAt 
    updatedAt 
    userProfileId 
  }
  edges 
  {
    cursor 
    node 
    {
      id 
      email 
      password 
      firstName 
      lastName 
      lastLoggedAt 
      createdAt 
      updatedAt 
      userProfileId 
    }
  }
  totalCount 
  pageInfo 
  {
    hasNextPage 
    hasPreviousPage 
    startCursor 
    endCursor 
  }
}
`,
  countUsers: `{ totalCount }`,
  'firstUsers.profile': `{ nodes { profile {
  id 
  picture 
  createdAt 
  updatedAt 
}
 } }`,
  userProfiles: `{
  nodes 
  {
    id 
    picture 
    createdAt 
    updatedAt 
  }
  edges 
  {
    cursor 
    node 
    {
      id 
      picture 
      createdAt 
      updatedAt 
    }
  }
  totalCount 
  pageInfo 
  {
    hasNextPage 
    hasPreviousPage 
    startCursor 
    endCursor 
  }
}
`,
  countUserProfiles: `{ totalCount }`,
  'firstUserProfiles.user': `{ nodes { user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}
 } }`,
  account: `{
  id 
  name 
  planStatus 
  plan 
  subscriptionId 
  createdAt 
  updatedAt 
  userId 
}
`,
  'account.user': `{ user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}
}`,
  migration: `{
  id 
  timestamp 
  name 
}
`,
  testMultiplePrimary: `{
  oneId 
  twoId 
  createdAt 
  updatedAt 
}
`,
  testPrimary: `{
  primary 
  createdAt 
  updatedAt 
}
`,
  user: `{
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}
`,
  'user.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
}
}`,
  userByEmail: `{
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}
`,
  'userByEmail.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
}
}`,
  userByFirstNameAndLastName: `{
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}
`,
  'userByFirstNameAndLastName.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
}
}`,
  userByUserProfileId: `{
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}
`,
  'userByUserProfileId.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
}
}`,
  userProfile: `{
  id 
  picture 
  createdAt 
  updatedAt 
}
`,
  'userProfile.user': `{ user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}
}`,
  userSearch: `{
  nodes 
  {
    id 
    email 
    password 
    firstName 
    lastName 
    lastLoggedAt 
    createdAt 
    updatedAt 
    userProfileId 
  }
  edges 
  {
    cursor 
    node 
    {
      id 
      email 
      password 
      firstName 
      lastName 
      lastLoggedAt 
      createdAt 
      updatedAt 
      userProfileId 
    }
  }
  totalCount 
  pageInfo 
  {
    hasNextPage 
    hasPreviousPage 
    startCursor 
    endCursor 
  }
}
`,
  countUserSearch: `{ totalCount }`,
  'firstUserSearch.profile': `{ nodes { profile {
  id 
  picture 
  createdAt 
  updatedAt 
}
 } }`,
  createAccount: `{ 
account {
  id 
  name 
  planStatus 
  plan 
  subscriptionId 
  createdAt 
  updatedAt 
  userId 
}

}`,
  createMigration: `{ 
migration {
  id 
  timestamp 
  name 
}

}`,
  createTestMultiplePrimary: `{ 
testMultiplePrimary {
  oneId 
  twoId 
  createdAt 
  updatedAt 
}

}`,
  createTestPrimary: `{ 
testPrimary {
  primary 
  createdAt 
  updatedAt 
}

}`,
  createUser: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  createUserProfile: `{ 
userProfile {
  id 
  picture 
  createdAt 
  updatedAt 
}

}`,
  updateAccount: `{ 
account {
  id 
  name 
  planStatus 
  plan 
  subscriptionId 
  createdAt 
  updatedAt 
  userId 
}

}`,
  updateMigration: `{ 
migration {
  id 
  timestamp 
  name 
}

}`,
  updateTestMultiplePrimary: `{ 
testMultiplePrimary {
  oneId 
  twoId 
  createdAt 
  updatedAt 
}

}`,
  updateTestPrimary: `{ 
testPrimary {
  primary 
  createdAt 
  updatedAt 
}

}`,
  updateUser: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  updateUserByEmail: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  updateUserByFirstNameAndLastName: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  updateUserByUserProfileId: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  updateUserProfile: `{ 
userProfile {
  id 
  picture 
  createdAt 
  updatedAt 
}

}`,
  deleteAccount: `{ 
account {
  id 
  name 
  planStatus 
  plan 
  subscriptionId 
  createdAt 
  updatedAt 
  userId 
}

}`,
  deleteMigration: `{ 
migration {
  id 
  timestamp 
  name 
}

}`,
  deleteTestMultiplePrimary: `{ 
testMultiplePrimary {
  oneId 
  twoId 
  createdAt 
  updatedAt 
}

}`,
  deleteTestPrimary: `{ 
testPrimary {
  primary 
  createdAt 
  updatedAt 
}

}`,
  deleteUser: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  deleteUserByEmail: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  deleteUserByFirstNameAndLastName: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  deleteUserByUserProfileId: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
  deleteUserProfile: `{ 
userProfile {
  id 
  picture 
  createdAt 
  updatedAt 
}

}`,
  userCustomMutation: `{ 
user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
}

}`,
};

export const PgrMixin = {
  name: 'PostgraphileMixin',
  methods: {},
  events: {},
  actions: {
    async accounts(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['accounts'];
      const data = params;
      const result = await client.query.accounts(data, query);
      return result;
    },
    async countAccounts(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countAccounts'];
      const data = params;
      const result = await client.query.accounts(data, query);
      return result['totalCount'];
    },
    async firstAccounts(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findAccounts`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async 'firstAccounts.user'(this: any, ctx: any) {
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

      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['firstAccounts.user'];
      const data = { first, last, ...params };
      const result = await client.query.accounts(data, query);

      if (result.nodes.length === 0) {
        return null;
      }
      return result.nodes[0]['user'];
    },
    async findAccounts(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.accounts`, params);
      return result.nodes;
    },
    async migrations(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrations'];
      const data = params;
      const result = await client.query.migrations(data, query);
      return result;
    },
    async countMigrations(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countMigrations'];
      const data = params;
      const result = await client.query.migrations(data, query);
      return result['totalCount'];
    },
    async firstMigrations(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findMigrations`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async findMigrations(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.migrations`, params);
      return result.nodes;
    },
    async testMultiplePrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['testMultiplePrimaries'];
      const data = params;
      const result = await client.query.testMultiplePrimaries(data, query);
      return result;
    },
    async countTestMultiplePrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countTestMultiplePrimaries'];
      const data = params;
      const result = await client.query.testMultiplePrimaries(data, query);
      return result['totalCount'];
    },
    async firstTestMultiplePrimaries(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findTestMultiplePrimaries`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async findTestMultiplePrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(
        `${this.name}.testMultiplePrimaries`,
        params,
      );
      return result.nodes;
    },
    async testPrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['testPrimaries'];
      const data = params;
      const result = await client.query.testPrimaries(data, query);
      return result;
    },
    async countTestPrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countTestPrimaries'];
      const data = params;
      const result = await client.query.testPrimaries(data, query);
      return result['totalCount'];
    },
    async firstTestPrimaries(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findTestPrimaries`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async findTestPrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.testPrimaries`, params);
      return result.nodes;
    },
    async users(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['users'];
      const data = params;
      const result = await client.query.users(data, query);
      return result;
    },
    async countUsers(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countUsers'];
      const data = params;
      const result = await client.query.users(data, query);
      return result['totalCount'];
    },
    async firstUsers(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findUsers`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async 'firstUsers.profile'(this: any, ctx: any) {
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

      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['firstUsers.profile'];
      const data = { first, last, ...params };
      const result = await client.query.users(data, query);

      if (result.nodes.length === 0) {
        return null;
      }
      return result.nodes[0]['profile'];
    },
    async findUsers(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.users`, params);
      return result.nodes;
    },
    async userProfiles(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userProfiles'];
      const data = params;
      const result = await client.query.userProfiles(data, query);
      return result;
    },
    async countUserProfiles(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countUserProfiles'];
      const data = params;
      const result = await client.query.userProfiles(data, query);
      return result['totalCount'];
    },
    async firstUserProfiles(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findUserProfiles`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async 'firstUserProfiles.user'(this: any, ctx: any) {
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

      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['firstUserProfiles.user'];
      const data = { first, last, ...params };
      const result = await client.query.userProfiles(data, query);

      if (result.nodes.length === 0) {
        return null;
      }
      return result.nodes[0]['user'];
    },
    async findUserProfiles(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.userProfiles`, params);
      return result.nodes;
    },
    async account(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['account'];
      const data = params;
      const result = await client.query.account(data, query);
      return result;
    },
    async 'account.user'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['account.user'];
      const data = params;
      const result = await client.query.account(data, query);
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async migration(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migration'];
      const data = params;
      const result = await client.query.migration(data, query);
      return result;
    },
    async testMultiplePrimary(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['testMultiplePrimary'];
      const data = params;
      const result = await client.query.testMultiplePrimary(data, query);
      return result;
    },
    async testPrimary(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['testPrimary'];
      const data = params;
      const result = await client.query.testPrimary(data, query);
      return result;
    },
    async user(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['user'];
      const data = params;
      const result = await client.query.user(data, query);
      return result;
    },
    async 'user.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['user.profile'];
      const data = params;
      const result = await client.query.user(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userByEmail(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userByEmail'];
      const data = params;
      const result = await client.query.userByEmail(data, query);
      return result;
    },
    async 'userByEmail.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userByEmail.profile'];
      const data = params;
      const result = await client.query.userByEmail(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userByFirstNameAndLastName(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userByFirstNameAndLastName'];
      const data = params;
      const result = await client.query.userByFirstNameAndLastName(data, query);
      return result;
    },
    async 'userByFirstNameAndLastName.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userByFirstNameAndLastName.profile'];
      const data = params;
      const result = await client.query.userByFirstNameAndLastName(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userByUserProfileId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userByUserProfileId'];
      const data = params;
      const result = await client.query.userByUserProfileId(data, query);
      return result;
    },
    async 'userByUserProfileId.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userByUserProfileId.profile'];
      const data = params;
      const result = await client.query.userByUserProfileId(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userProfile(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userProfile'];
      const data = params;
      const result = await client.query.userProfile(data, query);
      return result;
    },
    async 'userProfile.user'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userProfile.user'];
      const data = params;
      const result = await client.query.userProfile(data, query);
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async userSearch(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userSearch'];
      const data = params;
      const result = await client.query.userSearch(data, query);
      return result;
    },
    async countUserSearch(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countUserSearch'];
      const data = params;
      const result = await client.query.userSearch(data, query);
      return result['totalCount'];
    },
    async firstUserSearch(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findUserSearch`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async 'firstUserSearch.profile'(this: any, ctx: any) {
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

      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['firstUserSearch.profile'];
      const data = { first, last, ...params };
      const result = await client.query.userSearch(data, query);

      if (result.nodes.length === 0) {
        return null;
      }
      return result.nodes[0]['profile'];
    },
    async findUserSearch(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.userSearch`, params);
      return result.nodes;
    },
    async createAccount(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createAccount'];
      const data = { input: { account: params } };

      const result = await client.mutation.createAccount(data, query);
      return result!['account'];
    },
    async createMigration(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createMigration'];
      const data = { input: { migration: params } };

      const result = await client.mutation.createMigration(data, query);
      return result!['migration'];
    },
    async createTestMultiplePrimary(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createTestMultiplePrimary'];
      const data = { input: { testMultiplePrimary: params } };

      const result = await client.mutation.createTestMultiplePrimary(
        data,
        query,
      );
      return result!['testMultiplePrimary'];
    },
    async createTestPrimary(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createTestPrimary'];
      const data = { input: { testPrimary: params } };

      const result = await client.mutation.createTestPrimary(data, query);
      return result!['testPrimary'];
    },
    async createUser(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createUser'];
      const data = { input: { user: params } };

      const result = await client.mutation.createUser(data, query);
      return result!['user'];
    },
    async createUserProfile(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createUserProfile'];
      const data = { input: { userProfile: params } };

      const result = await client.mutation.createUserProfile(data, query);
      return result!['userProfile'];
    },
    async updateAccount(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateAccount'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateAccount(data, query);
        return result!['account'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async upsertAccount(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstAccounts`, {
        ...params.query,
      });

      if (!node) {
        node = await ctx.call(`${this.name}.createAccount`, {
          ...params.create,
        });
      } else {
        const primaryQuery = getPartialObject(node, ['id']);
        node = await ctx.call(`${this.name}.updateAccount`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(`${this.name}.upsertAccount`, ctx.params);
        }
      }

      return node;
    },
    async updateMigration(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateMigration'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateMigration(data, query);
        return result!['migration'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async upsertMigration(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstMigrations`, {
        ...params.query,
      });

      if (!node) {
        node = await ctx.call(`${this.name}.createMigration`, {
          ...params.create,
        });
      } else {
        const primaryQuery = getPartialObject(node, ['id']);
        node = await ctx.call(`${this.name}.updateMigration`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(`${this.name}.upsertMigration`, ctx.params);
        }
      }

      return node;
    },
    async updateTestMultiplePrimary(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateTestMultiplePrimary'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateTestMultiplePrimary(
          data,
          query,
        );
        return result!['testMultiplePrimary'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async upsertTestMultiplePrimary(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstTestMultiplePrimaries`, {
        ...params.query,
      });

      if (!node) {
        node = await ctx.call(`${this.name}.createTestMultiplePrimary`, {
          ...params.create,
        });
      } else {
        const primaryQuery = getPartialObject(node, ['oneId', 'twoId']);
        node = await ctx.call(`${this.name}.updateTestMultiplePrimary`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(
            `${this.name}.upsertTestMultiplePrimary`,
            ctx.params,
          );
        }
      }

      return node;
    },
    async updateTestPrimary(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateTestPrimary'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateTestPrimary(data, query);
        return result!['testPrimary'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async upsertTestPrimary(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstTestPrimaries`, {
        ...params.query,
      });

      if (!node) {
        node = await ctx.call(`${this.name}.createTestPrimary`, {
          ...params.create,
        });
      } else {
        const primaryQuery = getPartialObject(node, ['primary']);
        node = await ctx.call(`${this.name}.updateTestPrimary`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(
            `${this.name}.upsertTestPrimary`,
            ctx.params,
          );
        }
      }

      return node;
    },
    async updateUser(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateUser'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateUser(data, query);
        return result!['user'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async upsertUser(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstUsers`, { ...params.query });

      if (!node) {
        node = await ctx.call(`${this.name}.createUser`, { ...params.create });
      } else {
        const primaryQuery = getPartialObject(node, ['id']);
        node = await ctx.call(`${this.name}.updateUser`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(`${this.name}.upsertUser`, ctx.params);
        }
      }

      return node;
    },
    async updateUserByEmail(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateUserByEmail'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateUserByEmail(data, query);
        return result!['user'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async updateUserByFirstNameAndLastName(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateUserByFirstNameAndLastName'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateUserByFirstNameAndLastName(
          data,
          query,
        );
        return result!['user'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async updateUserByUserProfileId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateUserByUserProfileId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateUserByUserProfileId(
          data,
          query,
        );
        return result!['user'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async updateUserProfile(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateUserProfile'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateUserProfile(data, query);
        return result!['userProfile'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were updated in collection '.*' because no values you can update were found matching these criteria../,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async upsertUserProfile(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstUserProfiles`, {
        ...params.query,
      });

      if (!node) {
        node = await ctx.call(`${this.name}.createUserProfile`, {
          ...params.create,
        });
      } else {
        const primaryQuery = getPartialObject(node, ['id']);
        node = await ctx.call(`${this.name}.updateUserProfile`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(
            `${this.name}.upsertUserProfile`,
            ctx.params,
          );
        }
      }

      return node;
    },
    async deleteAccount(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteAccount'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteAccount(data, query);
        return result!['account'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async deleteMigration(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteMigration'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteMigration(data, query);
        return result!['migration'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async deleteTestMultiplePrimary(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteTestMultiplePrimary'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteTestMultiplePrimary(
          data,
          query,
        );
        return result!['testMultiplePrimary'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async deleteTestPrimary(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteTestPrimary'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteTestPrimary(data, query);
        return result!['testPrimary'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async deleteUser(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteUser'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteUser(data, query);
        return result!['user'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async deleteUserByEmail(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteUserByEmail'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteUserByEmail(data, query);
        return result!['user'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async deleteUserByFirstNameAndLastName(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteUserByFirstNameAndLastName'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteUserByFirstNameAndLastName(
          data,
          query,
        );
        return result!['user'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async deleteUserByUserProfileId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteUserByUserProfileId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteUserByUserProfileId(
          data,
          query,
        );
        return result!['user'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async deleteUserProfile(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteUserProfile'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteUserProfile(data, query);
        return result!['userProfile'];
      } catch (err) {
        if (
          err.message &&
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
    async userCustomMutation(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userCustomMutation'];
      const data = { input: params };

      const result = await client.mutation.userCustomMutation(data, query);
      return result!['user'];
    },
  },
};

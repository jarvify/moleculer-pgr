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
    NodeOptional<binding.Account>
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
    NodeOptional<binding.Migration>
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
    NodeOptional<binding.TestMultiplePrimary>
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
    NodeOptional<binding.TestPrimary>
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
    NodeOptional<binding.User>
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
    NodeOptional<binding.UserProfile>
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
    NodeOptional<binding.Account>
  >,
  moleculerTs.Action<
    'account.user',
    Parameters<binding.Query['account']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'migration',
    Parameters<binding.Query['migration']>[0],
    NodeOptional<binding.Migration>
  >,
  moleculerTs.Action<
    'testMultiplePrimary',
    Parameters<binding.Query['testMultiplePrimary']>[0],
    NodeOptional<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'testPrimary',
    Parameters<binding.Query['testPrimary']>[0],
    NodeOptional<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'user',
    Parameters<binding.Query['user']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'user.profile',
    Parameters<binding.Query['user']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userByEmail',
    Parameters<binding.Query['userByEmail']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'userByEmail.profile',
    Parameters<binding.Query['userByEmail']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userByFirstNameAndLastName',
    Parameters<binding.Query['userByFirstNameAndLastName']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'userByFirstNameAndLastName.profile',
    Parameters<binding.Query['userByFirstNameAndLastName']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userByUserProfileId',
    Parameters<binding.Query['userByUserProfileId']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'userByUserProfileId.profile',
    Parameters<binding.Query['userByUserProfileId']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userProfile',
    Parameters<binding.Query['userProfile']>[0],
    NodeOptional<binding.UserProfile>
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
    NodeOptional<binding.User>
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
    'accountByNodeId',
    Parameters<binding.Query['accountByNodeId']>[0],
    NodeOptional<binding.Account>
  >,
  moleculerTs.Action<
    'accountByNodeId.user',
    Parameters<binding.Query['accountByNodeId']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'migrationByNodeId',
    Parameters<binding.Query['migrationByNodeId']>[0],
    NodeOptional<binding.Migration>
  >,
  moleculerTs.Action<
    'testMultiplePrimaryByNodeId',
    Parameters<binding.Query['testMultiplePrimaryByNodeId']>[0],
    NodeOptional<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'testPrimaryByNodeId',
    Parameters<binding.Query['testPrimaryByNodeId']>[0],
    NodeOptional<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'userByNodeId',
    Parameters<binding.Query['userByNodeId']>[0],
    NodeOptional<binding.User>
  >,
  moleculerTs.Action<
    'userByNodeId.profile',
    Parameters<binding.Query['userByNodeId']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userProfileByNodeId',
    Parameters<binding.Query['userProfileByNodeId']>[0],
    NodeOptional<binding.UserProfile>
  >,
  moleculerTs.Action<
    'userProfileByNodeId.user',
    Parameters<binding.Query['userProfileByNodeId']>[0],
    NodeOptional<binding.User>
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
    'updateAccountByNodeId',
    Parameters<binding.Mutation['updateAccountByNodeId']>[0]['input'],
    NodeOptional<binding.Account>
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
    'updateMigrationByNodeId',
    Parameters<binding.Mutation['updateMigrationByNodeId']>[0]['input'],
    NodeOptional<binding.Migration>
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
    'updateTestMultiplePrimaryByNodeId',
    Parameters<
      binding.Mutation['updateTestMultiplePrimaryByNodeId']
    >[0]['input'],
    NodeOptional<binding.TestMultiplePrimary>
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
    'updateTestPrimaryByNodeId',
    Parameters<binding.Mutation['updateTestPrimaryByNodeId']>[0]['input'],
    NodeOptional<binding.TestPrimary>
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
    'updateUserByNodeId',
    Parameters<binding.Mutation['updateUserByNodeId']>[0]['input'],
    NodeOptional<binding.User>
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
    'updateUserProfileByNodeId',
    Parameters<binding.Mutation['updateUserProfileByNodeId']>[0]['input'],
    NodeOptional<binding.UserProfile>
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
    'deleteAccountByNodeId',
    Parameters<binding.Mutation['deleteAccountByNodeId']>[0]['input'],
    NodeOptional<binding.Account>
  >,
  moleculerTs.Action<
    'deleteAccount',
    Parameters<binding.Mutation['deleteAccount']>[0]['input'],
    NodeOptional<binding.Account>
  >,
  moleculerTs.Action<
    'deleteMigrationByNodeId',
    Parameters<binding.Mutation['deleteMigrationByNodeId']>[0]['input'],
    NodeOptional<binding.Migration>
  >,
  moleculerTs.Action<
    'deleteMigration',
    Parameters<binding.Mutation['deleteMigration']>[0]['input'],
    NodeOptional<binding.Migration>
  >,
  moleculerTs.Action<
    'deleteTestMultiplePrimaryByNodeId',
    Parameters<
      binding.Mutation['deleteTestMultiplePrimaryByNodeId']
    >[0]['input'],
    NodeOptional<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'deleteTestMultiplePrimary',
    Parameters<binding.Mutation['deleteTestMultiplePrimary']>[0]['input'],
    NodeOptional<binding.TestMultiplePrimary>
  >,
  moleculerTs.Action<
    'deleteTestPrimaryByNodeId',
    Parameters<binding.Mutation['deleteTestPrimaryByNodeId']>[0]['input'],
    NodeOptional<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'deleteTestPrimary',
    Parameters<binding.Mutation['deleteTestPrimary']>[0]['input'],
    NodeOptional<binding.TestPrimary>
  >,
  moleculerTs.Action<
    'deleteUserByNodeId',
    Parameters<binding.Mutation['deleteUserByNodeId']>[0]['input'],
    NodeOptional<binding.User>
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
    'deleteUserProfileByNodeId',
    Parameters<binding.Mutation['deleteUserProfileByNodeId']>[0]['input'],
    NodeOptional<binding.UserProfile>
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
    nodeId 
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
      nodeId 
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
  nodeId 
}
 } }`,
  migrations: `{
  nodes 
  {
    id 
    timestamp 
    name 
    nodeId 
  }
  edges 
  {
    cursor 
    node 
    {
      id 
      timestamp 
      name 
      nodeId 
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
    nodeId 
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
      nodeId 
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
    nodeId 
  }
  edges 
  {
    cursor 
    node 
    {
      primary 
      createdAt 
      updatedAt 
      nodeId 
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
    nodeId 
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
      nodeId 
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
  nodeId 
}
 } }`,
  userProfiles: `{
  nodes 
  {
    id 
    picture 
    createdAt 
    updatedAt 
    nodeId 
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
      nodeId 
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
  nodeId 
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
  nodeId 
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
  nodeId 
}
}`,
  migration: `{
  id 
  timestamp 
  name 
  nodeId 
}
`,
  testMultiplePrimary: `{
  oneId 
  twoId 
  createdAt 
  updatedAt 
  nodeId 
}
`,
  testPrimary: `{
  primary 
  createdAt 
  updatedAt 
  nodeId 
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
  nodeId 
}
`,
  'user.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
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
  nodeId 
}
`,
  'userByEmail.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
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
  nodeId 
}
`,
  'userByFirstNameAndLastName.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
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
  nodeId 
}
`,
  'userByUserProfileId.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
}
}`,
  userProfile: `{
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
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
  nodeId 
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
    nodeId 
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
      nodeId 
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
  nodeId 
}
 } }`,
  accountByNodeId: `{
  id 
  name 
  planStatus 
  plan 
  subscriptionId 
  createdAt 
  updatedAt 
  userId 
  nodeId 
}
`,
  'accountByNodeId.user': `{ user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
  nodeId 
}
}`,
  migrationByNodeId: `{
  id 
  timestamp 
  name 
  nodeId 
}
`,
  testMultiplePrimaryByNodeId: `{
  oneId 
  twoId 
  createdAt 
  updatedAt 
  nodeId 
}
`,
  testPrimaryByNodeId: `{
  primary 
  createdAt 
  updatedAt 
  nodeId 
}
`,
  userByNodeId: `{
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
  nodeId 
}
`,
  'userByNodeId.profile': `{ profile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
}
}`,
  userProfileByNodeId: `{
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
}
`,
  'userProfileByNodeId.user': `{ user {
  id 
  email 
  password 
  firstName 
  lastName 
  lastLoggedAt 
  createdAt 
  updatedAt 
  userProfileId 
  nodeId 
}
}`,
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
  nodeId 
}

}`,
  createMigration: `{ 
migration {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  createTestMultiplePrimary: `{ 
testMultiplePrimary {
  oneId 
  twoId 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  createTestPrimary: `{ 
testPrimary {
  primary 
  createdAt 
  updatedAt 
  nodeId 
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
  nodeId 
}

}`,
  createUserProfile: `{ 
userProfile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  updateAccountByNodeId: `{ 
account {
  id 
  name 
  planStatus 
  plan 
  subscriptionId 
  createdAt 
  updatedAt 
  userId 
  nodeId 
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
  nodeId 
}

}`,
  updateMigrationByNodeId: `{ 
migration {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  updateMigration: `{ 
migration {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  updateTestMultiplePrimaryByNodeId: `{ 
testMultiplePrimary {
  oneId 
  twoId 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  updateTestMultiplePrimary: `{ 
testMultiplePrimary {
  oneId 
  twoId 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  updateTestPrimaryByNodeId: `{ 
testPrimary {
  primary 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  updateTestPrimary: `{ 
testPrimary {
  primary 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  updateUserByNodeId: `{ 
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
  nodeId 
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
  nodeId 
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
  nodeId 
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
  nodeId 
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
  nodeId 
}

}`,
  updateUserProfileByNodeId: `{ 
userProfile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  updateUserProfile: `{ 
userProfile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  deleteAccountByNodeId: `{ 
account {
  id 
  name 
  planStatus 
  plan 
  subscriptionId 
  createdAt 
  updatedAt 
  userId 
  nodeId 
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
  nodeId 
}

}`,
  deleteMigrationByNodeId: `{ 
migration {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  deleteMigration: `{ 
migration {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  deleteTestMultiplePrimaryByNodeId: `{ 
testMultiplePrimary {
  oneId 
  twoId 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  deleteTestMultiplePrimary: `{ 
testMultiplePrimary {
  oneId 
  twoId 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  deleteTestPrimaryByNodeId: `{ 
testPrimary {
  primary 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  deleteTestPrimary: `{ 
testPrimary {
  primary 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  deleteUserByNodeId: `{ 
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
  nodeId 
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
  nodeId 
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
  nodeId 
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
  nodeId 
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
  nodeId 
}

}`,
  deleteUserProfileByNodeId: `{ 
userProfile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
}

}`,
  deleteUserProfile: `{ 
userProfile {
  id 
  picture 
  createdAt 
  updatedAt 
  nodeId 
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
  nodeId 
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
    async accountByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['accountByNodeId'];
      const data = params;
      const result = await client.query.accountByNodeId(data, query);
      return result;
    },
    async 'accountByNodeId.user'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['accountByNodeId.user'];
      const data = params;
      const result = await client.query.accountByNodeId(data, query);
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async migrationByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationByNodeId'];
      const data = params;
      const result = await client.query.migrationByNodeId(data, query);
      return result;
    },
    async testMultiplePrimaryByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['testMultiplePrimaryByNodeId'];
      const data = params;
      const result = await client.query.testMultiplePrimaryByNodeId(
        data,
        query,
      );
      return result;
    },
    async testPrimaryByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['testPrimaryByNodeId'];
      const data = params;
      const result = await client.query.testPrimaryByNodeId(data, query);
      return result;
    },
    async userByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userByNodeId'];
      const data = params;
      const result = await client.query.userByNodeId(data, query);
      return result;
    },
    async 'userByNodeId.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userByNodeId.profile'];
      const data = params;
      const result = await client.query.userByNodeId(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userProfileByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userProfileByNodeId'];
      const data = params;
      const result = await client.query.userProfileByNodeId(data, query);
      return result;
    },
    async 'userProfileByNodeId.user'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['userProfileByNodeId.user'];
      const data = params;
      const result = await client.query.userProfileByNodeId(data, query);
      if (result === null) {
        return null;
      }
      return result['user'];
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
    async updateAccountByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateAccountByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateAccountByNodeId(data, query);
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
    async updateMigrationByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateMigrationByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateMigrationByNodeId(
          data,
          query,
        );
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
    async updateTestMultiplePrimaryByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateTestMultiplePrimaryByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateTestMultiplePrimaryByNodeId(
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
    async updateTestPrimaryByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateTestPrimaryByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateTestPrimaryByNodeId(
          data,
          query,
        );
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
    async updateUserByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateUserByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateUserByNodeId(data, query);
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
    async updateUserProfileByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateUserProfileByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateUserProfileByNodeId(
          data,
          query,
        );
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
    async deleteAccountByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteAccountByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteAccountByNodeId(data, query);
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
    async deleteMigrationByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteMigrationByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteMigrationByNodeId(
          data,
          query,
        );
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
    async deleteTestMultiplePrimaryByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteTestMultiplePrimaryByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteTestMultiplePrimaryByNodeId(
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
    async deleteTestPrimaryByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteTestPrimaryByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteTestPrimaryByNodeId(
          data,
          query,
        );
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
    async deleteUserByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteUserByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteUserByNodeId(data, query);
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
    async deleteUserProfileByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteUserProfileByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteUserProfileByNodeId(
          data,
          query,
        );
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

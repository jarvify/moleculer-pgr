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
    'migrationGenerateds',
    Parameters<binding.Query['migrationGenerateds']>[0],
    binding.MigrationGeneratedsConnection
  >,
  moleculerTs.Action<
    'countMigrationGenerateds',
    Parameters<binding.Query['migrationGenerateds']>[0],
    number
  >,
  moleculerTs.Action<
    'firstMigrationGenerateds',
    Parameters<binding.Query['migrationGenerateds']>[0],
    NodeOptional<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'findMigrationGenerateds',
    Parameters<binding.Query['migrationGenerateds']>[0],
    NodeArray<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'migrationManuals',
    Parameters<binding.Query['migrationManuals']>[0],
    binding.MigrationManualsConnection
  >,
  moleculerTs.Action<
    'countMigrationManuals',
    Parameters<binding.Query['migrationManuals']>[0],
    number
  >,
  moleculerTs.Action<
    'firstMigrationManuals',
    Parameters<binding.Query['migrationManuals']>[0],
    NodeOptional<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'findMigrationManuals',
    Parameters<binding.Query['migrationManuals']>[0],
    NodeArray<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'migrationSeeds',
    Parameters<binding.Query['migrationSeeds']>[0],
    binding.MigrationSeedsConnection
  >,
  moleculerTs.Action<
    'countMigrationSeeds',
    Parameters<binding.Query['migrationSeeds']>[0],
    number
  >,
  moleculerTs.Action<
    'firstMigrationSeeds',
    Parameters<binding.Query['migrationSeeds']>[0],
    NodeOptional<binding.MigrationSeed>
  >,
  moleculerTs.Action<
    'findMigrationSeeds',
    Parameters<binding.Query['migrationSeeds']>[0],
    NodeArray<binding.MigrationSeed>
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
    'migrationGenerated',
    Parameters<binding.Query['migrationGenerated']>[0],
    NodeOptional<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'migrationManual',
    Parameters<binding.Query['migrationManual']>[0],
    NodeOptional<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'migrationSeed',
    Parameters<binding.Query['migrationSeed']>[0],
    NodeOptional<binding.MigrationSeed>
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
    'migrationGeneratedByNodeId',
    Parameters<binding.Query['migrationGeneratedByNodeId']>[0],
    NodeOptional<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'migrationManualByNodeId',
    Parameters<binding.Query['migrationManualByNodeId']>[0],
    NodeOptional<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'migrationSeedByNodeId',
    Parameters<binding.Query['migrationSeedByNodeId']>[0],
    NodeOptional<binding.MigrationSeed>
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
    'createMigrationGenerated',
    Parameters<
      binding.Mutation['createMigrationGenerated']
    >[0]['input']['migrationGenerated'],
    Node<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'createMigrationManual',
    Parameters<
      binding.Mutation['createMigrationManual']
    >[0]['input']['migrationManual'],
    Node<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'createMigrationSeed',
    Parameters<
      binding.Mutation['createMigrationSeed']
    >[0]['input']['migrationSeed'],
    Node<binding.MigrationSeed>
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
    'updateMigrationGeneratedByNodeId',
    Parameters<
      binding.Mutation['updateMigrationGeneratedByNodeId']
    >[0]['input'],
    NodeOptional<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'updateMigrationGenerated',
    Parameters<binding.Mutation['updateMigrationGenerated']>[0]['input'],
    NodeOptional<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'upsertMigrationGenerated',
    {
      query: Parameters<binding.Query['migrationGenerateds']>[0];
      create: Parameters<
        binding.Mutation['createMigrationGenerated']
      >[0]['input']['migrationGenerated'];
      update: Parameters<
        binding.Mutation['updateMigrationGenerated']
      >[0]['input']['patch'];
    },
    Node<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'updateMigrationManualByNodeId',
    Parameters<binding.Mutation['updateMigrationManualByNodeId']>[0]['input'],
    NodeOptional<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'updateMigrationManual',
    Parameters<binding.Mutation['updateMigrationManual']>[0]['input'],
    NodeOptional<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'upsertMigrationManual',
    {
      query: Parameters<binding.Query['migrationManuals']>[0];
      create: Parameters<
        binding.Mutation['createMigrationManual']
      >[0]['input']['migrationManual'];
      update: Parameters<
        binding.Mutation['updateMigrationManual']
      >[0]['input']['patch'];
    },
    Node<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'updateMigrationSeedByNodeId',
    Parameters<binding.Mutation['updateMigrationSeedByNodeId']>[0]['input'],
    NodeOptional<binding.MigrationSeed>
  >,
  moleculerTs.Action<
    'updateMigrationSeed',
    Parameters<binding.Mutation['updateMigrationSeed']>[0]['input'],
    NodeOptional<binding.MigrationSeed>
  >,
  moleculerTs.Action<
    'upsertMigrationSeed',
    {
      query: Parameters<binding.Query['migrationSeeds']>[0];
      create: Parameters<
        binding.Mutation['createMigrationSeed']
      >[0]['input']['migrationSeed'];
      update: Parameters<
        binding.Mutation['updateMigrationSeed']
      >[0]['input']['patch'];
    },
    Node<binding.MigrationSeed>
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
    'deleteMigrationGeneratedByNodeId',
    Parameters<
      binding.Mutation['deleteMigrationGeneratedByNodeId']
    >[0]['input'],
    NodeOptional<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'deleteMigrationGenerated',
    Parameters<binding.Mutation['deleteMigrationGenerated']>[0]['input'],
    NodeOptional<binding.MigrationGenerated>
  >,
  moleculerTs.Action<
    'deleteMigrationManualByNodeId',
    Parameters<binding.Mutation['deleteMigrationManualByNodeId']>[0]['input'],
    NodeOptional<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'deleteMigrationManual',
    Parameters<binding.Mutation['deleteMigrationManual']>[0]['input'],
    NodeOptional<binding.MigrationManual>
  >,
  moleculerTs.Action<
    'deleteMigrationSeedByNodeId',
    Parameters<binding.Mutation['deleteMigrationSeedByNodeId']>[0]['input'],
    NodeOptional<binding.MigrationSeed>
  >,
  moleculerTs.Action<
    'deleteMigrationSeed',
    Parameters<binding.Mutation['deleteMigrationSeed']>[0]['input'],
    NodeOptional<binding.MigrationSeed>
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
  migrationGenerateds: `{
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
  countMigrationGenerateds: `{ totalCount }`,
  migrationManuals: `{
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
  countMigrationManuals: `{ totalCount }`,
  migrationSeeds: `{
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
  countMigrationSeeds: `{ totalCount }`,
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
  migrationGenerated: `{
  id 
  timestamp 
  name 
  nodeId 
}
`,
  migrationManual: `{
  id 
  timestamp 
  name 
  nodeId 
}
`,
  migrationSeed: `{
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
  migrationGeneratedByNodeId: `{
  id 
  timestamp 
  name 
  nodeId 
}
`,
  migrationManualByNodeId: `{
  id 
  timestamp 
  name 
  nodeId 
}
`,
  migrationSeedByNodeId: `{
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
  createMigrationGenerated: `{ 
migrationGenerated {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  createMigrationManual: `{ 
migrationManual {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  createMigrationSeed: `{ 
migrationSeed {
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
  updateMigrationGeneratedByNodeId: `{ 
migrationGenerated {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  updateMigrationGenerated: `{ 
migrationGenerated {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  updateMigrationManualByNodeId: `{ 
migrationManual {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  updateMigrationManual: `{ 
migrationManual {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  updateMigrationSeedByNodeId: `{ 
migrationSeed {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  updateMigrationSeed: `{ 
migrationSeed {
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
  deleteMigrationGeneratedByNodeId: `{ 
migrationGenerated {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  deleteMigrationGenerated: `{ 
migrationGenerated {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  deleteMigrationManualByNodeId: `{ 
migrationManual {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  deleteMigrationManual: `{ 
migrationManual {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  deleteMigrationSeedByNodeId: `{ 
migrationSeed {
  id 
  timestamp 
  name 
  nodeId 
}

}`,
  deleteMigrationSeed: `{ 
migrationSeed {
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
    async migrationGenerateds(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationGenerateds'];
      const data = params;
      const result = await client.query.migrationGenerateds(data, query);
      return result;
    },
    async countMigrationGenerateds(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countMigrationGenerateds'];
      const data = params;
      const result = await client.query.migrationGenerateds(data, query);
      return result['totalCount'];
    },
    async firstMigrationGenerateds(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findMigrationGenerateds`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async findMigrationGenerateds(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.migrationGenerateds`, params);
      return result.nodes;
    },
    async migrationManuals(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationManuals'];
      const data = params;
      const result = await client.query.migrationManuals(data, query);
      return result;
    },
    async countMigrationManuals(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countMigrationManuals'];
      const data = params;
      const result = await client.query.migrationManuals(data, query);
      return result['totalCount'];
    },
    async firstMigrationManuals(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findMigrationManuals`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async findMigrationManuals(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.migrationManuals`, params);
      return result.nodes;
    },
    async migrationSeeds(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationSeeds'];
      const data = params;
      const result = await client.query.migrationSeeds(data, query);
      return result;
    },
    async countMigrationSeeds(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['countMigrationSeeds'];
      const data = params;
      const result = await client.query.migrationSeeds(data, query);
      return result['totalCount'];
    },
    async firstMigrationSeeds(this: any, ctx: any) {
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

      const result = await ctx.call(`${this.name}.findMigrationSeeds`, {
        first,
        last,
        ...params,
      });
      if (result.length === 0) {
        return null;
      }
      return result[0];
    },
    async findMigrationSeeds(this: any, ctx: any) {
      const params = ctx.params;
      const result = await ctx.call(`${this.name}.migrationSeeds`, params);
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
    async migrationGenerated(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationGenerated'];
      const data = params;
      const result = await client.query.migrationGenerated(data, query);
      return result;
    },
    async migrationManual(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationManual'];
      const data = params;
      const result = await client.query.migrationManual(data, query);
      return result;
    },
    async migrationSeed(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationSeed'];
      const data = params;
      const result = await client.query.migrationSeed(data, query);
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
    async migrationGeneratedByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationGeneratedByNodeId'];
      const data = params;
      const result = await client.query.migrationGeneratedByNodeId(data, query);
      return result;
    },
    async migrationManualByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationManualByNodeId'];
      const data = params;
      const result = await client.query.migrationManualByNodeId(data, query);
      return result;
    },
    async migrationSeedByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['migrationSeedByNodeId'];
      const data = params;
      const result = await client.query.migrationSeedByNodeId(data, query);
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
    async createMigrationGenerated(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createMigrationGenerated'];
      const data = { input: { migrationGenerated: params } };

      const result = await client.mutation.createMigrationGenerated(
        data,
        query,
      );
      return result!['migrationGenerated'];
    },
    async createMigrationManual(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createMigrationManual'];
      const data = { input: { migrationManual: params } };

      const result = await client.mutation.createMigrationManual(data, query);
      return result!['migrationManual'];
    },
    async createMigrationSeed(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['createMigrationSeed'];
      const data = { input: { migrationSeed: params } };

      const result = await client.mutation.createMigrationSeed(data, query);
      return result!['migrationSeed'];
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
    async updateMigrationGeneratedByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateMigrationGeneratedByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateMigrationGeneratedByNodeId(
          data,
          query,
        );
        return result!['migrationGenerated'];
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
    async updateMigrationGenerated(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateMigrationGenerated'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateMigrationGenerated(
          data,
          query,
        );
        return result!['migrationGenerated'];
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
    async upsertMigrationGenerated(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstMigrationGenerateds`, {
        ...params.query,
      });

      if (!node) {
        node = await ctx.call(`${this.name}.createMigrationGenerated`, {
          ...params.create,
        });
      } else {
        const primaryQuery = getPartialObject(node, ['id']);
        node = await ctx.call(`${this.name}.updateMigrationGenerated`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(
            `${this.name}.upsertMigrationGenerated`,
            ctx.params,
          );
        }
      }

      return node;
    },
    async updateMigrationManualByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateMigrationManualByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateMigrationManualByNodeId(
          data,
          query,
        );
        return result!['migrationManual'];
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
    async updateMigrationManual(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateMigrationManual'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateMigrationManual(data, query);
        return result!['migrationManual'];
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
    async upsertMigrationManual(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstMigrationManuals`, {
        ...params.query,
      });

      if (!node) {
        node = await ctx.call(`${this.name}.createMigrationManual`, {
          ...params.create,
        });
      } else {
        const primaryQuery = getPartialObject(node, ['id']);
        node = await ctx.call(`${this.name}.updateMigrationManual`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(
            `${this.name}.upsertMigrationManual`,
            ctx.params,
          );
        }
      }

      return node;
    },
    async updateMigrationSeedByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateMigrationSeedByNodeId'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateMigrationSeedByNodeId(
          data,
          query,
        );
        return result!['migrationSeed'];
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
    async updateMigrationSeed(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['updateMigrationSeed'];
      const data = {
        input: { ...uniqueFields, patch: { ...uniqueFields, ...patch } },
      };
      try {
        const result = await client.mutation.updateMigrationSeed(data, query);
        return result!['migrationSeed'];
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
    async upsertMigrationSeed(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstMigrationSeeds`, {
        ...params.query,
      });

      if (!node) {
        node = await ctx.call(`${this.name}.createMigrationSeed`, {
          ...params.create,
        });
      } else {
        const primaryQuery = getPartialObject(node, ['id']);
        node = await ctx.call(`${this.name}.updateMigrationSeed`, {
          ...primaryQuery,
          patch: params.update,
        });

        if (!node) {
          return await ctx.callSvc(
            `${this.name}.upsertMigrationSeed`,
            ctx.params,
          );
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
    async deleteMigrationGeneratedByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteMigrationGeneratedByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteMigrationGeneratedByNodeId(
          data,
          query,
        );
        return result!['migrationGenerated'];
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
    async deleteMigrationGenerated(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteMigrationGenerated'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteMigrationGenerated(
          data,
          query,
        );
        return result!['migrationGenerated'];
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
    async deleteMigrationManualByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteMigrationManualByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteMigrationManualByNodeId(
          data,
          query,
        );
        return result!['migrationManual'];
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
    async deleteMigrationManual(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteMigrationManual'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteMigrationManual(data, query);
        return result!['migrationManual'];
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
    async deleteMigrationSeedByNodeId(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteMigrationSeedByNodeId'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteMigrationSeedByNodeId(
          data,
          query,
        );
        return result!['migrationSeed'];
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
    async deleteMigrationSeed(this: any, ctx: any) {
      const params = ctx.params;
      const { patch, ...uniqueFields } = params;
      const client = this.settings.pgr.client as any;
      const query = gqlQueryString['deleteMigrationSeed'];
      const data = { input: params };
      try {
        const result = await client.mutation.deleteMigrationSeed(data, query);
        return result!['migrationSeed'];
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

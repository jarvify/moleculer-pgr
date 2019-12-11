import * as moleculerTs from 'moleculer-ts';
import * as moleculerPgr from 'moleculer-pgr';
import * as pgr from './binding';
// @TODO relative path !
import * as customPgr from './../mixin';

function getPartialObject(obj: any, keys: string[]) {
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

export type accountsInput = Parameters<pgr.Query['accounts']>[0];
export type countAccountsInput = Parameters<pgr.Query['accounts']>[0];
export type firstAccountsInput = Parameters<pgr.Query['accounts']>[0];
export type firstAccounts_userInput = Parameters<pgr.Query['accounts']>[0];
export type findAccountsInput = Parameters<pgr.Query['accounts']>[0];
export type migrationsInput = Parameters<pgr.Query['migrations']>[0];
export type countMigrationsInput = Parameters<pgr.Query['migrations']>[0];
export type firstMigrationsInput = Parameters<pgr.Query['migrations']>[0];
export type findMigrationsInput = Parameters<pgr.Query['migrations']>[0];
export type testMultiplePrimariesInput = Parameters<
  pgr.Query['testMultiplePrimaries']
>[0];
export type countTestMultiplePrimariesInput = Parameters<
  pgr.Query['testMultiplePrimaries']
>[0];
export type firstTestMultiplePrimariesInput = Parameters<
  pgr.Query['testMultiplePrimaries']
>[0];
export type findTestMultiplePrimariesInput = Parameters<
  pgr.Query['testMultiplePrimaries']
>[0];
export type testPrimariesInput = Parameters<pgr.Query['testPrimaries']>[0];
export type countTestPrimariesInput = Parameters<pgr.Query['testPrimaries']>[0];
export type firstTestPrimariesInput = Parameters<pgr.Query['testPrimaries']>[0];
export type findTestPrimariesInput = Parameters<pgr.Query['testPrimaries']>[0];
export type usersInput = Parameters<pgr.Query['users']>[0];
export type countUsersInput = Parameters<pgr.Query['users']>[0];
export type firstUsersInput = Parameters<pgr.Query['users']>[0];
export type firstUsers_profileInput = Parameters<pgr.Query['users']>[0];
export type findUsersInput = Parameters<pgr.Query['users']>[0];
export type userProfilesInput = Parameters<pgr.Query['userProfiles']>[0];
export type countUserProfilesInput = Parameters<pgr.Query['userProfiles']>[0];
export type firstUserProfilesInput = Parameters<pgr.Query['userProfiles']>[0];
export type firstUserProfiles_userInput = Parameters<
  pgr.Query['userProfiles']
>[0];
export type findUserProfilesInput = Parameters<pgr.Query['userProfiles']>[0];
export type accountInput = Parameters<pgr.Query['account']>[0];
export type account_userInput = Parameters<pgr.Query['account']>[0];
export type migrationInput = Parameters<pgr.Query['migration']>[0];
export type testMultiplePrimaryInput = Parameters<
  pgr.Query['testMultiplePrimary']
>[0];
export type testPrimaryInput = Parameters<pgr.Query['testPrimary']>[0];
export type userInput = Parameters<pgr.Query['user']>[0];
export type user_profileInput = Parameters<pgr.Query['user']>[0];
export type userByEmailInput = Parameters<pgr.Query['userByEmail']>[0];
export type userByEmail_profileInput = Parameters<pgr.Query['userByEmail']>[0];
export type userByFirstNameAndLastNameInput = Parameters<
  pgr.Query['userByFirstNameAndLastName']
>[0];
export type userByFirstNameAndLastName_profileInput = Parameters<
  pgr.Query['userByFirstNameAndLastName']
>[0];
export type userByUserProfileIdInput = Parameters<
  pgr.Query['userByUserProfileId']
>[0];
export type userByUserProfileId_profileInput = Parameters<
  pgr.Query['userByUserProfileId']
>[0];
export type userProfileInput = Parameters<pgr.Query['userProfile']>[0];
export type userProfile_userInput = Parameters<pgr.Query['userProfile']>[0];
export type userSearchInput = Parameters<pgr.Query['userSearch']>[0];
export type countUserSearchInput = Parameters<pgr.Query['userSearch']>[0];
export type firstUserSearchInput = Parameters<pgr.Query['userSearch']>[0];
export type firstUserSearch_profileInput = Parameters<
  pgr.Query['userSearch']
>[0];
export type findUserSearchInput = Parameters<pgr.Query['userSearch']>[0];
export type createAccountInput = Parameters<
  pgr.Mutation['createAccount']
>[0]['input']['account'];
export type createMigrationInput = Parameters<
  pgr.Mutation['createMigration']
>[0]['input']['migration'];
export type createTestMultiplePrimaryInput = Parameters<
  pgr.Mutation['createTestMultiplePrimary']
>[0]['input']['testMultiplePrimary'];
export type createTestPrimaryInput = Parameters<
  pgr.Mutation['createTestPrimary']
>[0]['input']['testPrimary'];
export type createUserInput = Parameters<
  pgr.Mutation['createUser']
>[0]['input']['user'];
export type createUserProfileInput = Parameters<
  pgr.Mutation['createUserProfile']
>[0]['input']['userProfile'];
export type updateAccountInput = Omit<
  Parameters<pgr.Mutation['updateAccount']>[0]['input'],
  'clientMutationId'
>;
export type upsertAccountInput = {
  query: customPgr.accountsInput;
  create: customPgr.createAccountInput;
  update: customPgr.updateAccountInput['patch'];
};
export type updateMigrationInput = Omit<
  Parameters<pgr.Mutation['updateMigration']>[0]['input'],
  'clientMutationId'
>;
export type upsertMigrationInput = {
  query: customPgr.migrationsInput;
  create: customPgr.createMigrationInput;
  update: customPgr.updateMigrationInput['patch'];
};
export type updateTestMultiplePrimaryInput = Omit<
  Parameters<pgr.Mutation['updateTestMultiplePrimary']>[0]['input'],
  'clientMutationId'
>;
export type upsertTestMultiplePrimaryInput = {
  query: customPgr.testMultiplePrimariesInput;
  create: customPgr.createTestMultiplePrimaryInput;
  update: customPgr.updateTestMultiplePrimaryInput['patch'];
};
export type updateTestPrimaryInput = Omit<
  Parameters<pgr.Mutation['updateTestPrimary']>[0]['input'],
  'clientMutationId'
>;
export type upsertTestPrimaryInput = {
  query: customPgr.testPrimariesInput;
  create: customPgr.createTestPrimaryInput;
  update: customPgr.updateTestPrimaryInput['patch'];
};
export type updateUserInput = Omit<
  Parameters<pgr.Mutation['updateUser']>[0]['input'],
  'clientMutationId'
>;
export type upsertUserInput = {
  query: customPgr.userSearchInput;
  create: customPgr.createUserInput;
  update: customPgr.updateUserInput['patch'];
};
export type updateUserByEmailInput = Omit<
  Parameters<pgr.Mutation['updateUserByEmail']>[0]['input'],
  'clientMutationId'
>;
export type updateUserByFirstNameAndLastNameInput = Omit<
  Parameters<pgr.Mutation['updateUserByFirstNameAndLastName']>[0]['input'],
  'clientMutationId'
>;
export type updateUserByUserProfileIdInput = Omit<
  Parameters<pgr.Mutation['updateUserByUserProfileId']>[0]['input'],
  'clientMutationId'
>;
export type updateUserProfileInput = Omit<
  Parameters<pgr.Mutation['updateUserProfile']>[0]['input'],
  'clientMutationId'
>;
export type upsertUserProfileInput = {
  query: customPgr.userProfilesInput;
  create: customPgr.createUserProfileInput;
  update: customPgr.updateUserProfileInput['patch'];
};
export type deleteAccountInput = Omit<
  Parameters<pgr.Mutation['deleteAccount']>[0]['input'],
  'clientMutationId'
>;
export type deleteMigrationInput = Omit<
  Parameters<pgr.Mutation['deleteMigration']>[0]['input'],
  'clientMutationId'
>;
export type deleteTestMultiplePrimaryInput = Omit<
  Parameters<pgr.Mutation['deleteTestMultiplePrimary']>[0]['input'],
  'clientMutationId'
>;
export type deleteTestPrimaryInput = Omit<
  Parameters<pgr.Mutation['deleteTestPrimary']>[0]['input'],
  'clientMutationId'
>;
export type deleteUserInput = Omit<
  Parameters<pgr.Mutation['deleteUser']>[0]['input'],
  'clientMutationId'
>;
export type deleteUserByEmailInput = Omit<
  Parameters<pgr.Mutation['deleteUserByEmail']>[0]['input'],
  'clientMutationId'
>;
export type deleteUserByFirstNameAndLastNameInput = Omit<
  Parameters<pgr.Mutation['deleteUserByFirstNameAndLastName']>[0]['input'],
  'clientMutationId'
>;
export type deleteUserByUserProfileIdInput = Omit<
  Parameters<pgr.Mutation['deleteUserByUserProfileId']>[0]['input'],
  'clientMutationId'
>;
export type deleteUserProfileInput = Omit<
  Parameters<pgr.Mutation['deleteUserProfile']>[0]['input'],
  'clientMutationId'
>;

export type Account = moleculerPgr.StrictOmit<pgr.Account, 'user'>;
export type Migration = moleculerPgr.StrictOmit<pgr.Migration, never>;
export type TestMultiplePrimary = moleculerPgr.StrictOmit<
  pgr.TestMultiplePrimary,
  never
>;
export type TestPrimary = moleculerPgr.StrictOmit<pgr.TestPrimary, never>;
export type User = moleculerPgr.StrictOmit<pgr.User, 'profile' | 'accounts'>;
export type UserProfile = moleculerPgr.StrictOmit<pgr.UserProfile, 'user'>;

export namespace PgrExtend {
  export type Account<
    T extends keyof pgr.Account,
    P,
    Optional extends true | false = true
  > = Optional extends true
    ? {
        [K in T]?: P;
      }
    : {
        [K in T]: P;
      };

  export type Migration<
    T extends keyof pgr.Migration,
    P,
    Optional extends true | false = true
  > = Optional extends true
    ? {
        [K in T]?: P;
      }
    : {
        [K in T]: P;
      };

  export type TestMultiplePrimary<
    T extends keyof pgr.TestMultiplePrimary,
    P,
    Optional extends true | false = true
  > = Optional extends true
    ? {
        [K in T]?: P;
      }
    : {
        [K in T]: P;
      };

  export type TestPrimary<
    T extends keyof pgr.TestPrimary,
    P,
    Optional extends true | false = true
  > = Optional extends true
    ? {
        [K in T]?: P;
      }
    : {
        [K in T]: P;
      };

  export type User<
    T extends keyof pgr.User,
    P,
    Optional extends true | false = true
  > = Optional extends true
    ? {
        [K in T]?: P;
      }
    : {
        [K in T]: P;
      };

  export type UserProfile<
    T extends keyof pgr.UserProfile,
    P,
    Optional extends true | false = true
  > = Optional extends true
    ? {
        [K in T]?: P;
      }
    : {
        [K in T]: P;
      };
}

export type PgrActions = [
  moleculerTs.Action<
    'accounts',
    customPgr.accountsInput,
    customPgr.PgrConnection<customPgr.Account>
  >,

  moleculerTs.Action<
    'countAccounts',
    customPgr.countAccountsInput,
    customPgr.PgrCount
  >,

  moleculerTs.Action<
    'firstAccounts',
    customPgr.accountsInput,
    customPgr.PgrNodeOptional<customPgr.Account>
  >,

  moleculerTs.Action<
    'firstAccounts.user',
    customPgr.firstAccounts_userInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'findAccounts',
    customPgr.findAccountsInput,
    customPgr.PgrNodeArray<customPgr.Account>
  >,

  moleculerTs.Action<
    'migrations',
    customPgr.migrationsInput,
    customPgr.PgrConnection<customPgr.Migration>
  >,

  moleculerTs.Action<
    'countMigrations',
    customPgr.countMigrationsInput,
    customPgr.PgrCount
  >,

  moleculerTs.Action<
    'firstMigrations',
    customPgr.migrationsInput,
    customPgr.PgrNodeOptional<customPgr.Migration>
  >,

  moleculerTs.Action<
    'findMigrations',
    customPgr.findMigrationsInput,
    customPgr.PgrNodeArray<customPgr.Migration>
  >,

  moleculerTs.Action<
    'testMultiplePrimaries',
    customPgr.testMultiplePrimariesInput,
    customPgr.PgrConnection<customPgr.TestMultiplePrimary>
  >,

  moleculerTs.Action<
    'countTestMultiplePrimaries',
    customPgr.countTestMultiplePrimariesInput,
    customPgr.PgrCount
  >,

  moleculerTs.Action<
    'firstTestMultiplePrimaries',
    customPgr.testMultiplePrimariesInput,
    customPgr.PgrNodeOptional<customPgr.TestMultiplePrimary>
  >,

  moleculerTs.Action<
    'findTestMultiplePrimaries',
    customPgr.findTestMultiplePrimariesInput,
    customPgr.PgrNodeArray<customPgr.TestMultiplePrimary>
  >,

  moleculerTs.Action<
    'testPrimaries',
    customPgr.testPrimariesInput,
    customPgr.PgrConnection<customPgr.TestPrimary>
  >,

  moleculerTs.Action<
    'countTestPrimaries',
    customPgr.countTestPrimariesInput,
    customPgr.PgrCount
  >,

  moleculerTs.Action<
    'firstTestPrimaries',
    customPgr.testPrimariesInput,
    customPgr.PgrNodeOptional<customPgr.TestPrimary>
  >,

  moleculerTs.Action<
    'findTestPrimaries',
    customPgr.findTestPrimariesInput,
    customPgr.PgrNodeArray<customPgr.TestPrimary>
  >,

  moleculerTs.Action<
    'users',
    customPgr.usersInput,
    customPgr.PgrConnection<customPgr.User>
  >,

  moleculerTs.Action<
    'countUsers',
    customPgr.countUsersInput,
    customPgr.PgrCount
  >,

  moleculerTs.Action<
    'firstUsers',
    customPgr.usersInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'firstUsers.profile',
    customPgr.firstUsers_profileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'findUsers',
    customPgr.findUsersInput,
    customPgr.PgrNodeArray<customPgr.User>
  >,

  moleculerTs.Action<
    'userProfiles',
    customPgr.userProfilesInput,
    customPgr.PgrConnection<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'countUserProfiles',
    customPgr.countUserProfilesInput,
    customPgr.PgrCount
  >,

  moleculerTs.Action<
    'firstUserProfiles',
    customPgr.userProfilesInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'firstUserProfiles.user',
    customPgr.firstUserProfiles_userInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'findUserProfiles',
    customPgr.findUserProfilesInput,
    customPgr.PgrNodeArray<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'account',
    customPgr.accountInput,
    customPgr.PgrNodeOptional<customPgr.Account>
  >,

  moleculerTs.Action<
    'account.user',
    customPgr.account_userInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'migration',
    customPgr.migrationInput,
    customPgr.PgrNodeOptional<customPgr.Migration>
  >,

  moleculerTs.Action<
    'testMultiplePrimary',
    customPgr.testMultiplePrimaryInput,
    customPgr.PgrNodeOptional<customPgr.TestMultiplePrimary>
  >,

  moleculerTs.Action<
    'testPrimary',
    customPgr.testPrimaryInput,
    customPgr.PgrNodeOptional<customPgr.TestPrimary>
  >,

  moleculerTs.Action<
    'user',
    customPgr.userInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'user.profile',
    customPgr.user_profileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'userByEmail',
    customPgr.userByEmailInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'userByEmail.profile',
    customPgr.userByEmail_profileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'userByFirstNameAndLastName',
    customPgr.userByFirstNameAndLastNameInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'userByFirstNameAndLastName.profile',
    customPgr.userByFirstNameAndLastName_profileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'userByUserProfileId',
    customPgr.userByUserProfileIdInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'userByUserProfileId.profile',
    customPgr.userByUserProfileId_profileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'userProfile',
    customPgr.userProfileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'userProfile.user',
    customPgr.userProfile_userInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'userSearch',
    customPgr.userSearchInput,
    customPgr.PgrConnection<customPgr.User>
  >,

  moleculerTs.Action<
    'countUserSearch',
    customPgr.countUserSearchInput,
    customPgr.PgrCount
  >,

  moleculerTs.Action<
    'firstUserSearch',
    customPgr.userSearchInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'firstUserSearch.profile',
    customPgr.firstUserSearch_profileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'findUserSearch',
    customPgr.findUserSearchInput,
    customPgr.PgrNodeArray<customPgr.User>
  >,

  moleculerTs.Action<
    'createAccount',
    customPgr.createAccountInput,
    customPgr.PgrNode<customPgr.Account>
  >,

  moleculerTs.Action<
    'createMigration',
    customPgr.createMigrationInput,
    customPgr.PgrNode<customPgr.Migration>
  >,

  moleculerTs.Action<
    'createTestMultiplePrimary',
    customPgr.createTestMultiplePrimaryInput,
    customPgr.PgrNode<customPgr.TestMultiplePrimary>
  >,

  moleculerTs.Action<
    'createTestPrimary',
    customPgr.createTestPrimaryInput,
    customPgr.PgrNode<customPgr.TestPrimary>
  >,

  moleculerTs.Action<
    'createUser',
    customPgr.createUserInput,
    customPgr.PgrNode<customPgr.User>
  >,

  moleculerTs.Action<
    'createUserProfile',
    customPgr.createUserProfileInput,
    customPgr.PgrNode<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'updateAccount',
    customPgr.updateAccountInput,
    customPgr.PgrNodeOptional<customPgr.Account>
  >,

  moleculerTs.Action<
    'upsertAccount',
    customPgr.upsertAccountInput,
    customPgr.PgrNode<customPgr.Account>
  >,

  moleculerTs.Action<
    'updateMigration',
    customPgr.updateMigrationInput,
    customPgr.PgrNodeOptional<customPgr.Migration>
  >,

  moleculerTs.Action<
    'upsertMigration',
    customPgr.upsertMigrationInput,
    customPgr.PgrNode<customPgr.Migration>
  >,

  moleculerTs.Action<
    'updateTestMultiplePrimary',
    customPgr.updateTestMultiplePrimaryInput,
    customPgr.PgrNodeOptional<customPgr.TestMultiplePrimary>
  >,

  moleculerTs.Action<
    'upsertTestMultiplePrimary',
    customPgr.upsertTestMultiplePrimaryInput,
    customPgr.PgrNode<customPgr.TestMultiplePrimary>
  >,

  moleculerTs.Action<
    'updateTestPrimary',
    customPgr.updateTestPrimaryInput,
    customPgr.PgrNodeOptional<customPgr.TestPrimary>
  >,

  moleculerTs.Action<
    'upsertTestPrimary',
    customPgr.upsertTestPrimaryInput,
    customPgr.PgrNode<customPgr.TestPrimary>
  >,

  moleculerTs.Action<
    'updateUser',
    customPgr.updateUserInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'upsertUser',
    customPgr.upsertUserInput,
    customPgr.PgrNode<customPgr.User>
  >,

  moleculerTs.Action<
    'updateUserByEmail',
    customPgr.updateUserByEmailInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'updateUserByFirstNameAndLastName',
    customPgr.updateUserByFirstNameAndLastNameInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'updateUserByUserProfileId',
    customPgr.updateUserByUserProfileIdInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'updateUserProfile',
    customPgr.updateUserProfileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'upsertUserProfile',
    customPgr.upsertUserProfileInput,
    customPgr.PgrNode<customPgr.UserProfile>
  >,

  moleculerTs.Action<
    'deleteAccount',
    customPgr.deleteAccountInput,
    customPgr.PgrNodeOptional<customPgr.Account>
  >,

  moleculerTs.Action<
    'deleteMigration',
    customPgr.deleteMigrationInput,
    customPgr.PgrNodeOptional<customPgr.Migration>
  >,

  moleculerTs.Action<
    'deleteTestMultiplePrimary',
    customPgr.deleteTestMultiplePrimaryInput,
    customPgr.PgrNodeOptional<customPgr.TestMultiplePrimary>
  >,

  moleculerTs.Action<
    'deleteTestPrimary',
    customPgr.deleteTestPrimaryInput,
    customPgr.PgrNodeOptional<customPgr.TestPrimary>
  >,

  moleculerTs.Action<
    'deleteUser',
    customPgr.deleteUserInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'deleteUserByEmail',
    customPgr.deleteUserByEmailInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'deleteUserByFirstNameAndLastName',
    customPgr.deleteUserByFirstNameAndLastNameInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'deleteUserByUserProfileId',
    customPgr.deleteUserByUserProfileIdInput,
    customPgr.PgrNodeOptional<customPgr.User>
  >,

  moleculerTs.Action<
    'deleteUserProfile',
    customPgr.deleteUserProfileInput,
    customPgr.PgrNodeOptional<customPgr.UserProfile>
  >,
];

export const pgrQuery = {
  accounts: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrConnection<customPgr.Account>>
    >(),
  ),

  countAccounts: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ totalCount: customPgr.PgrCount }>>(),
  ),

  'firstAccounts.user': moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: { user: customPgr.User } }>>(),
  ),

  findAccounts: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: customPgr.Account }>>(),
  ),

  migrations: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrConnection<customPgr.Migration>>
    >(),
  ),

  countMigrations: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ totalCount: customPgr.PgrCount }>>(),
  ),

  findMigrations: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: customPgr.Migration }>>(),
  ),

  testMultiplePrimaries: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrConnection<customPgr.TestMultiplePrimary>>
    >(),
  ),

  countTestMultiplePrimaries: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ totalCount: customPgr.PgrCount }>>(),
  ),

  findTestMultiplePrimaries: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: customPgr.TestMultiplePrimary }>>(),
  ),

  testPrimaries: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrConnection<customPgr.TestPrimary>>
    >(),
  ),

  countTestPrimaries: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ totalCount: customPgr.PgrCount }>>(),
  ),

  findTestPrimaries: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: customPgr.TestPrimary }>>(),
  ),

  users: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<customPgr.PgrConnection<customPgr.User>>>(),
  ),

  countUsers: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ totalCount: customPgr.PgrCount }>>(),
  ),

  'firstUsers.profile': moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ nodes: { profile: customPgr.UserProfile } }>
    >(),
  ),

  findUsers: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: customPgr.User }>>(),
  ),

  userProfiles: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrConnection<customPgr.UserProfile>>
    >(),
  ),

  countUserProfiles: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ totalCount: customPgr.PgrCount }>>(),
  ),

  'firstUserProfiles.user': moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: { user: customPgr.User } }>>(),
  ),

  findUserProfiles: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: customPgr.UserProfile }>>(),
  ),

  account: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.Account>>
    >(),
  ),

  'account.user': moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ user: customPgr.User }>>(),
  ),

  migration: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.Migration>>
    >(),
  ),

  testMultiplePrimary: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.TestMultiplePrimary>>
    >(),
  ),

  testPrimary: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.TestPrimary>>
    >(),
  ),

  user: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.User>>
    >(),
  ),

  'user.profile': moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ profile: customPgr.UserProfile }>>(),
  ),

  userByEmail: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.User>>
    >(),
  ),

  'userByEmail.profile': moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ profile: customPgr.UserProfile }>>(),
  ),

  userByFirstNameAndLastName: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.User>>
    >(),
  ),

  'userByFirstNameAndLastName.profile': moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ profile: customPgr.UserProfile }>>(),
  ),

  userByUserProfileId: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.User>>
    >(),
  ),

  'userByUserProfileId.profile': moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ profile: customPgr.UserProfile }>>(),
  ),

  userProfile: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<customPgr.PgrNodeOptional<customPgr.UserProfile>>
    >(),
  ),

  'userProfile.user': moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ user: customPgr.User }>>(),
  ),

  userSearch: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<customPgr.PgrConnection<customPgr.User>>>(),
  ),

  countUserSearch: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ totalCount: customPgr.PgrCount }>>(),
  ),

  'firstUserSearch.profile': moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ nodes: { profile: customPgr.UserProfile } }>
    >(),
  ),

  findUserSearch: moleculerPgr.shapeToGql(
    moleculerPgr.shape<NonNullable<{ nodes: customPgr.User }>>(),
  ),

  createAccount: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ account: customPgr.PgrNode<customPgr.Account> }>
    >(),
  ),

  createMigration: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ migration: customPgr.PgrNode<customPgr.Migration> }>
    >(),
  ),

  createTestMultiplePrimary: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{
        testMultiplePrimary: customPgr.PgrNode<customPgr.TestMultiplePrimary>;
      }>
    >(),
  ),

  createTestPrimary: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ testPrimary: customPgr.PgrNode<customPgr.TestPrimary> }>
    >(),
  ),

  createUser: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNode<customPgr.User> }>
    >(),
  ),

  createUserProfile: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ userProfile: customPgr.PgrNode<customPgr.UserProfile> }>
    >(),
  ),

  updateAccount: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ account: customPgr.PgrNodeOptional<customPgr.Account> }>
    >(),
  ),

  updateMigration: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ migration: customPgr.PgrNodeOptional<customPgr.Migration> }>
    >(),
  ),

  updateTestMultiplePrimary: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{
        testMultiplePrimary: customPgr.PgrNodeOptional<
          customPgr.TestMultiplePrimary
        >;
      }>
    >(),
  ),

  updateTestPrimary: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{
        testPrimary: customPgr.PgrNodeOptional<customPgr.TestPrimary>;
      }>
    >(),
  ),

  updateUser: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNodeOptional<customPgr.User> }>
    >(),
  ),

  updateUserByEmail: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNodeOptional<customPgr.User> }>
    >(),
  ),

  updateUserByFirstNameAndLastName: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNodeOptional<customPgr.User> }>
    >(),
  ),

  updateUserByUserProfileId: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNodeOptional<customPgr.User> }>
    >(),
  ),

  updateUserProfile: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{
        userProfile: customPgr.PgrNodeOptional<customPgr.UserProfile>;
      }>
    >(),
  ),

  deleteAccount: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ account: customPgr.PgrNodeOptional<customPgr.Account> }>
    >(),
  ),

  deleteMigration: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ migration: customPgr.PgrNodeOptional<customPgr.Migration> }>
    >(),
  ),

  deleteTestMultiplePrimary: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{
        testMultiplePrimary: customPgr.PgrNodeOptional<
          customPgr.TestMultiplePrimary
        >;
      }>
    >(),
  ),

  deleteTestPrimary: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{
        testPrimary: customPgr.PgrNodeOptional<customPgr.TestPrimary>;
      }>
    >(),
  ),

  deleteUser: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNodeOptional<customPgr.User> }>
    >(),
  ),

  deleteUserByEmail: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNodeOptional<customPgr.User> }>
    >(),
  ),

  deleteUserByFirstNameAndLastName: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNodeOptional<customPgr.User> }>
    >(),
  ),

  deleteUserByUserProfileId: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{ user: customPgr.PgrNodeOptional<customPgr.User> }>
    >(),
  ),

  deleteUserProfile: moleculerPgr.shapeToGql(
    moleculerPgr.shape<
      NonNullable<{
        userProfile: customPgr.PgrNodeOptional<customPgr.UserProfile>;
      }>
    >(),
  ),
};

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
    async accounts(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['accounts'];
      const data = params;
      const result = await client.query.accounts(data, query);
      return result;
    },
    async countAccounts(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['countAccounts'];
      const data = params;
      const result = await client.query.accounts(data, query);
      return result!['totalCount'];
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

      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['firstAccounts.user'];
      const data = { first, last, ...params };
      const result = await client.query.accounts(data, query);
      if (!result || result.nodes.length === 0) {
        return null;
      }
      return result.nodes[0]['user'];
    },
    async findAccounts(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['findAccounts'];
      const data = params;
      const result = await client.query.accounts(data, query);
      return result!['nodes'];
    },
    async migrations(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['migrations'];
      const data = params;
      const result = await client.query.migrations(data, query);
      return result;
    },
    async countMigrations(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['countMigrations'];
      const data = params;
      const result = await client.query.migrations(data, query);
      return result!['totalCount'];
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['findMigrations'];
      const data = params;
      const result = await client.query.migrations(data, query);
      return result!['nodes'];
    },
    async testMultiplePrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['testMultiplePrimaries'];
      const data = params;
      const result = await client.query.testMultiplePrimaries(data, query);
      return result;
    },
    async countTestMultiplePrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['countTestMultiplePrimaries'];
      const data = params;
      const result = await client.query.testMultiplePrimaries(data, query);
      return result!['totalCount'];
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['findTestMultiplePrimaries'];
      const data = params;
      const result = await client.query.testMultiplePrimaries(data, query);
      return result!['nodes'];
    },
    async testPrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['testPrimaries'];
      const data = params;
      const result = await client.query.testPrimaries(data, query);
      return result;
    },
    async countTestPrimaries(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['countTestPrimaries'];
      const data = params;
      const result = await client.query.testPrimaries(data, query);
      return result!['totalCount'];
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['findTestPrimaries'];
      const data = params;
      const result = await client.query.testPrimaries(data, query);
      return result!['nodes'];
    },
    async users(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['users'];
      const data = params;
      const result = await client.query.users(data, query);
      return result;
    },
    async countUsers(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['countUsers'];
      const data = params;
      const result = await client.query.users(data, query);
      return result!['totalCount'];
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

      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['firstUsers.profile'];
      const data = { first, last, ...params };
      const result = await client.query.users(data, query);
      if (!result || result.nodes.length === 0) {
        return null;
      }
      return result.nodes[0]['profile'];
    },
    async findUsers(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['findUsers'];
      const data = params;
      const result = await client.query.users(data, query);
      return result!['nodes'];
    },
    async userProfiles(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userProfiles'];
      const data = params;
      const result = await client.query.userProfiles(data, query);
      return result;
    },
    async countUserProfiles(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['countUserProfiles'];
      const data = params;
      const result = await client.query.userProfiles(data, query);
      return result!['totalCount'];
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

      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['firstUserProfiles.user'];
      const data = { first, last, ...params };
      const result = await client.query.userProfiles(data, query);
      if (!result || result.nodes.length === 0) {
        return null;
      }
      return result.nodes[0]['user'];
    },
    async findUserProfiles(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['findUserProfiles'];
      const data = params;
      const result = await client.query.userProfiles(data, query);
      return result!['nodes'];
    },
    async account(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['account'];
      const data = params;
      const result = await client.query.account(data, query);
      return result;
    },
    async 'account.user'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['account.user'];
      const data = params;
      const result = await client.query.account(data, query);
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async migration(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['migration'];
      const data = params;
      const result = await client.query.migration(data, query);
      return result;
    },
    async testMultiplePrimary(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['testMultiplePrimary'];
      const data = params;
      const result = await client.query.testMultiplePrimary(data, query);
      return result;
    },
    async testPrimary(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['testPrimary'];
      const data = params;
      const result = await client.query.testPrimary(data, query);
      return result;
    },
    async user(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['user'];
      const data = params;
      const result = await client.query.user(data, query);
      return result;
    },
    async 'user.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['user.profile'];
      const data = params;
      const result = await client.query.user(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userByEmail(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userByEmail'];
      const data = params;
      const result = await client.query.userByEmail(data, query);
      return result;
    },
    async 'userByEmail.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userByEmail.profile'];
      const data = params;
      const result = await client.query.userByEmail(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userByFirstNameAndLastName(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userByFirstNameAndLastName'];
      const data = params;
      const result = await client.query.userByFirstNameAndLastName(data, query);
      return result;
    },
    async 'userByFirstNameAndLastName.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userByFirstNameAndLastName.profile'];
      const data = params;
      const result = await client.query.userByFirstNameAndLastName(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userByUserProfileId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userByUserProfileId'];
      const data = params;
      const result = await client.query.userByUserProfileId(data, query);
      return result;
    },
    async 'userByUserProfileId.profile'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userByUserProfileId.profile'];
      const data = params;
      const result = await client.query.userByUserProfileId(data, query);
      if (result === null) {
        return null;
      }
      return result['profile'];
    },
    async userProfile(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userProfile'];
      const data = params;
      const result = await client.query.userProfile(data, query);
      return result;
    },
    async 'userProfile.user'(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userProfile.user'];
      const data = params;
      const result = await client.query.userProfile(data, query);
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async userSearch(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['userSearch'];
      const data = params;
      const result = await client.query.userSearch(data, query);
      return result;
    },
    async countUserSearch(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['countUserSearch'];
      const data = params;
      const result = await client.query.userSearch(data, query);
      return result!['totalCount'];
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

      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['firstUserSearch.profile'];
      const data = { first, last, ...params };
      const result = await client.query.userSearch(data, query);
      if (!result || result.nodes.length === 0) {
        return null;
      }
      return result.nodes[0]['profile'];
    },
    async findUserSearch(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['findUserSearch'];
      const data = params;
      const result = await client.query.userSearch(data, query);
      return result!['nodes'];
    },
    async createAccount(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['createAccount'];
      const data = {
        input: {
          account: params,
        },
      };
      const result = await client.mutation.createAccount(data, query);
      return result!['account'];
    },
    async createMigration(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['createMigration'];
      const data = {
        input: {
          migration: params,
        },
      };
      const result = await client.mutation.createMigration(data, query);
      return result!['migration'];
    },
    async createTestMultiplePrimary(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['createTestMultiplePrimary'];
      const data = {
        input: {
          testMultiplePrimary: params,
        },
      };
      const result = await client.mutation.createTestMultiplePrimary(
        data,
        query,
      );
      return result!['testMultiplePrimary'];
    },
    async createTestPrimary(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['createTestPrimary'];
      const data = {
        input: {
          testPrimary: params,
        },
      };
      const result = await client.mutation.createTestPrimary(data, query);
      return result!['testPrimary'];
    },
    async createUser(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['createUser'];
      const data = {
        input: {
          user: params,
        },
      };
      const result = await client.mutation.createUser(data, query);
      return result!['user'];
    },
    async createUserProfile(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['createUserProfile'];
      const data = {
        input: {
          userProfile: params,
        },
      };
      const result = await client.mutation.createUserProfile(data, query);
      return result!['userProfile'];
    },
    async updateAccount(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateAccount'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateAccount(data, query);
      if (result === null) {
        return null;
      }
      return result['account'];
    },
    async upsertAccount(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstAccounts`, {
        ...params.query,
      });
      console.log('node', node);
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateMigration'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateMigration(data, query);
      if (result === null) {
        return null;
      }
      return result['migration'];
    },
    async upsertMigration(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstMigrations`, {
        ...params.query,
      });
      console.log('node', node);
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateTestMultiplePrimary'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateTestMultiplePrimary(
        data,
        query,
      );
      if (result === null) {
        return null;
      }
      return result['testMultiplePrimary'];
    },
    async upsertTestMultiplePrimary(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstTestMultiplePrimaries`, {
        ...params.query,
      });
      console.log('node', node);
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateTestPrimary'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateTestPrimary(data, query);
      if (result === null) {
        return null;
      }
      return result['testPrimary'];
    },
    async upsertTestPrimary(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstTestPrimaries`, {
        ...params.query,
      });
      console.log('node', node);
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateUser'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateUser(data, query);
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async upsertUser(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstUserSearch`, {
        ...params.query,
      });
      console.log('node', node);
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateUserByEmail'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateUserByEmail(data, query);
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async updateUserByFirstNameAndLastName(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateUserByFirstNameAndLastName'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateUserByFirstNameAndLastName(
        data,
        query,
      );
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async updateUserByUserProfileId(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateUserByUserProfileId'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateUserByUserProfileId(
        data,
        query,
      );
      if (result === null) {
        return null;
      }
      return result['user'];
    },
    async updateUserProfile(this: any, ctx: any) {
      const params = ctx.params;
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['updateUserProfile'];
      const data = {
        input: params,
      };
      const result = await client.mutation.updateUserProfile(data, query);
      if (result === null) {
        return null;
      }
      return result['userProfile'];
    },
    async upsertUserProfile(this: any, ctx: any) {
      const params = ctx.params;
      let node = await ctx.call(`${this.name}.firstUserProfiles`, {
        ...params.query,
      });
      console.log('node', node);
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteAccount'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteAccount(data, query);
        return result!['account'];
      } catch (err) {
        if (
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteMigration'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteMigration(data, query);
        return result!['migration'];
      } catch (err) {
        if (
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteTestMultiplePrimary'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteTestMultiplePrimary(
          data,
          query,
        );
        return result!['testMultiplePrimary'];
      } catch (err) {
        if (
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteTestPrimary'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteTestPrimary(data, query);
        return result!['testPrimary'];
      } catch (err) {
        if (
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteUser'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteUser(data, query);
        return result!['user'];
      } catch (err) {
        if (
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteUserByEmail'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteUserByEmail(data, query);
        return result!['user'];
      } catch (err) {
        if (
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteUserByFirstNameAndLastName'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteUserByFirstNameAndLastName(
          data,
          query,
        );
        return result!['user'];
      } catch (err) {
        if (
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteUserByUserProfileId'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteUserByUserProfileId(
          data,
          query,
        );
        return result!['user'];
      } catch (err) {
        if (
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
      const client = this.settings.pgr.client as pgr.Binding;
      const query = customPgr.pgrQuery['deleteUserProfile'];
      const data = {
        input: params,
      };
      try {
        const result = await client.mutation.deleteUserProfile(data, query);
        return result!['userProfile'];
      } catch (err) {
        if (
          err.message.match(
            /No values were deleted in collection '.*' because no values you can delete were found matching these criteria./,
          )
        ) {
          return null;
        }
        throw err;
      }
    },
  },
};

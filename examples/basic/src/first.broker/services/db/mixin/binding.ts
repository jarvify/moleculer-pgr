import { makeBindingClass, Options } from 'graphql-binding';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { IResolvers } from 'graphql-tools/dist/Interfaces';
import schema from './schema';

export interface Query {
  query: <T = Query>(
    args?: {},
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>;
  accounts: <T = AccountsConnection | null>(
    args: {
      first?: Int | null;
      last?: Int | null;
      offset?: Int | null;
      before?: Cursor | null;
      after?: Cursor | null;
      orderBy?: Array<AccountsOrderBy> | null;
      condition?: AccountCondition | null;
      filter?: AccountFilter | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  migrations: <T = MigrationsConnection | null>(
    args: {
      first?: Int | null;
      last?: Int | null;
      offset?: Int | null;
      before?: Cursor | null;
      after?: Cursor | null;
      orderBy?: Array<MigrationsOrderBy> | null;
      condition?: MigrationCondition | null;
      filter?: MigrationFilter | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  testMultiplePrimaries: <T = TestMultiplePrimariesConnection | null>(
    args: {
      first?: Int | null;
      last?: Int | null;
      offset?: Int | null;
      before?: Cursor | null;
      after?: Cursor | null;
      orderBy?: Array<TestMultiplePrimariesOrderBy> | null;
      condition?: TestMultiplePrimaryCondition | null;
      filter?: TestMultiplePrimaryFilter | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  testPrimaries: <T = TestPrimariesConnection | null>(
    args: {
      first?: Int | null;
      last?: Int | null;
      offset?: Int | null;
      before?: Cursor | null;
      after?: Cursor | null;
      orderBy?: Array<TestPrimariesOrderBy> | null;
      condition?: TestPrimaryCondition | null;
      filter?: TestPrimaryFilter | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  users: <T = UsersConnection | null>(
    args: {
      first?: Int | null;
      last?: Int | null;
      offset?: Int | null;
      before?: Cursor | null;
      after?: Cursor | null;
      orderBy?: Array<UsersOrderBy> | null;
      condition?: UserCondition | null;
      filter?: UserFilter | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  userProfiles: <T = UserProfilesConnection | null>(
    args: {
      first?: Int | null;
      last?: Int | null;
      offset?: Int | null;
      before?: Cursor | null;
      after?: Cursor | null;
      orderBy?: Array<UserProfilesOrderBy> | null;
      condition?: UserProfileCondition | null;
      filter?: UserProfileFilter | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  account: <T = Account | null>(
    args: { id: UUID },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  migration: <T = Migration | null>(
    args: { id: Int },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  testMultiplePrimary: <T = TestMultiplePrimary | null>(
    args: { oneId: UUID; twoId: UUID },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  testPrimary: <T = TestPrimary | null>(
    args: { primary: UUID },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  user: <T = User | null>(
    args: { id: UUID },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  userByEmail: <T = User | null>(
    args: { email: String },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  userByFirstNameAndLastName: <T = User | null>(
    args: { firstName: String; lastName: String },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  userByUserProfileId: <T = User | null>(
    args: { userProfileId: UUID },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  userProfile: <T = UserProfile | null>(
    args: { id: UUID },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  userSearch: <T = UsersConnection>(
    args: {
      search?: String | null;
      first?: Int | null;
      last?: Int | null;
      offset?: Int | null;
      before?: Cursor | null;
      after?: Cursor | null;
      filter?: UserFilter | null;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>;
}

export interface Mutation {
  createAccount: <T = CreateAccountPayload | null>(
    args: { input: CreateAccountInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  createMigration: <T = CreateMigrationPayload | null>(
    args: { input: CreateMigrationInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  createTestMultiplePrimary: <T = CreateTestMultiplePrimaryPayload | null>(
    args: { input: CreateTestMultiplePrimaryInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  createTestPrimary: <T = CreateTestPrimaryPayload | null>(
    args: { input: CreateTestPrimaryInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  createUser: <T = CreateUserPayload | null>(
    args: { input: CreateUserInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  createUserProfile: <T = CreateUserProfilePayload | null>(
    args: { input: CreateUserProfileInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateAccount: <T = UpdateAccountPayload | null>(
    args: { input: UpdateAccountInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateMigration: <T = UpdateMigrationPayload | null>(
    args: { input: UpdateMigrationInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateTestMultiplePrimary: <T = UpdateTestMultiplePrimaryPayload | null>(
    args: { input: UpdateTestMultiplePrimaryInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateTestPrimary: <T = UpdateTestPrimaryPayload | null>(
    args: { input: UpdateTestPrimaryInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateUser: <T = UpdateUserPayload | null>(
    args: { input: UpdateUserInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateUserByEmail: <T = UpdateUserPayload | null>(
    args: { input: UpdateUserByEmailInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateUserByFirstNameAndLastName: <T = UpdateUserPayload | null>(
    args: { input: UpdateUserByFirstNameAndLastNameInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateUserByUserProfileId: <T = UpdateUserPayload | null>(
    args: { input: UpdateUserByUserProfileIdInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  updateUserProfile: <T = UpdateUserProfilePayload | null>(
    args: { input: UpdateUserProfileInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteAccount: <T = DeleteAccountPayload | null>(
    args: { input: DeleteAccountInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteMigration: <T = DeleteMigrationPayload | null>(
    args: { input: DeleteMigrationInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteTestMultiplePrimary: <T = DeleteTestMultiplePrimaryPayload | null>(
    args: { input: DeleteTestMultiplePrimaryInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteTestPrimary: <T = DeleteTestPrimaryPayload | null>(
    args: { input: DeleteTestPrimaryInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteUser: <T = DeleteUserPayload | null>(
    args: { input: DeleteUserInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteUserByEmail: <T = DeleteUserPayload | null>(
    args: { input: DeleteUserByEmailInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteUserByFirstNameAndLastName: <T = DeleteUserPayload | null>(
    args: { input: DeleteUserByFirstNameAndLastNameInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteUserByUserProfileId: <T = DeleteUserPayload | null>(
    args: { input: DeleteUserByUserProfileIdInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  deleteUserProfile: <T = DeleteUserProfilePayload | null>(
    args: { input: DeleteUserProfileInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
  userCustomMutation: <T = UserCustomMutationPayload | null>(
    args: { input: UserCustomMutationInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T | null>;
}

export interface Subscription {}

export interface Binding {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any },
  ) => Promise<T>;
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<any>;
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new (...args: any[]): T;
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({
  schema,
});

/**
 * Types
 */

export type AccountPlanEnum = 'FREE' | 'STARTER' | 'PRO' | 'ENTERPRISE';

export type AccountPlanStatusEnum =
  | 'ACTIVE'
  | 'TRIALING'
  | 'CANCELED'
  | 'PAST_DUE';

/*
 * Methods to use when ordering `Account`.

 */
export type AccountsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'PLAN_STATUS_ASC'
  | 'PLAN_STATUS_DESC'
  | 'PLAN_ASC'
  | 'PLAN_DESC'
  | 'SUBSCRIPTION_ID_ASC'
  | 'SUBSCRIPTION_ID_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'USER_ID_ASC'
  | 'USER_ID_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/*
 * Methods to use when ordering `Migration`.

 */
export type MigrationsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'TIMESTAMP_ASC'
  | 'TIMESTAMP_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/*
 * Methods to use when ordering `TestMultiplePrimary`.

 */
export type TestMultiplePrimariesOrderBy =
  | 'NATURAL'
  | 'ONE_ID_ASC'
  | 'ONE_ID_DESC'
  | 'TWO_ID_ASC'
  | 'TWO_ID_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/*
 * Methods to use when ordering `TestPrimary`.

 */
export type TestPrimariesOrderBy =
  | 'NATURAL'
  | 'PRIMARY_ASC'
  | 'PRIMARY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/*
 * Methods to use when ordering `UserProfile`.

 */
export type UserProfilesOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'PICTURE_ASC'
  | 'PICTURE_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/*
 * Methods to use when ordering `User`.

 */
export type UsersOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'EMAIL_ASC'
  | 'EMAIL_DESC'
  | 'PASSWORD_ASC'
  | 'PASSWORD_DESC'
  | 'FIRST_NAME_ASC'
  | 'FIRST_NAME_DESC'
  | 'LAST_NAME_ASC'
  | 'LAST_NAME_DESC'
  | 'LAST_LOGGED_AT_ASC'
  | 'LAST_LOGGED_AT_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'USER_PROFILE_ID_ASC'
  | 'USER_PROFILE_ID_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/*
 * A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface AccountCondition {
  id?: UUID | null;
  name?: String | null;
  planStatus?: AccountPlanStatusEnum | null;
  plan?: AccountPlanEnum | null;
  subscriptionId?: String | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  userId?: UUID | null;
}

/*
 * A filter to be used against `Account` object types. All fields are combined with a logical ‘and.’

 */
export interface AccountFilter {
  id?: UUIDFilter | null;
  name?: StringFilter | null;
  planStatus?: AccountPlanStatusEnumFilter | null;
  plan?: AccountPlanEnumFilter | null;
  subscriptionId?: StringFilter | null;
  createdAt?: DatetimeFilter | null;
  updatedAt?: DatetimeFilter | null;
  userId?: UUIDFilter | null;
  and?: AccountFilter[] | AccountFilter | null;
  or?: AccountFilter[] | AccountFilter | null;
  not?: AccountFilter | null;
}

/*
 * An input for mutations affecting `Account`

 */
export interface AccountInput {
  id?: UUID | null;
  name: String;
  planStatus: AccountPlanStatusEnum;
  plan: AccountPlanEnum;
  subscriptionId: String;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  userId: UUID;
}

/*
 * Represents an update to a `Account`. Fields that are set will be updated.

 */
export interface AccountPatch {
  id?: UUID | null;
  name?: String | null;
  planStatus?: AccountPlanStatusEnum | null;
  plan?: AccountPlanEnum | null;
  subscriptionId?: String | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  userId?: UUID | null;
}

/*
 * A filter to be used against AccountPlanEnum fields. All fields are combined with a logical ‘and.’

 */
export interface AccountPlanEnumFilter {
  isNull?: Boolean | null;
  equalTo?: AccountPlanEnum | null;
  notEqualTo?: AccountPlanEnum | null;
  distinctFrom?: AccountPlanEnum | null;
  notDistinctFrom?: AccountPlanEnum | null;
  in?: AccountPlanEnum[] | AccountPlanEnum | null;
  notIn?: AccountPlanEnum[] | AccountPlanEnum | null;
  lessThan?: AccountPlanEnum | null;
  lessThanOrEqualTo?: AccountPlanEnum | null;
  greaterThan?: AccountPlanEnum | null;
  greaterThanOrEqualTo?: AccountPlanEnum | null;
}

/*
 * A filter to be used against AccountPlanStatusEnum fields. All fields are combined with a logical ‘and.’

 */
export interface AccountPlanStatusEnumFilter {
  isNull?: Boolean | null;
  equalTo?: AccountPlanStatusEnum | null;
  notEqualTo?: AccountPlanStatusEnum | null;
  distinctFrom?: AccountPlanStatusEnum | null;
  notDistinctFrom?: AccountPlanStatusEnum | null;
  in?: AccountPlanStatusEnum[] | AccountPlanStatusEnum | null;
  notIn?: AccountPlanStatusEnum[] | AccountPlanStatusEnum | null;
  lessThan?: AccountPlanStatusEnum | null;
  lessThanOrEqualTo?: AccountPlanStatusEnum | null;
  greaterThan?: AccountPlanStatusEnum | null;
  greaterThanOrEqualTo?: AccountPlanStatusEnum | null;
}

/*
 * A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’

 */
export interface BigIntFilter {
  isNull?: Boolean | null;
  equalTo?: BigInt | null;
  notEqualTo?: BigInt | null;
  distinctFrom?: BigInt | null;
  notDistinctFrom?: BigInt | null;
  in?: BigInt[] | BigInt | null;
  notIn?: BigInt[] | BigInt | null;
  lessThan?: BigInt | null;
  lessThanOrEqualTo?: BigInt | null;
  greaterThan?: BigInt | null;
  greaterThanOrEqualTo?: BigInt | null;
}

/*
 * All input for the create `Account` mutation.

 */
export interface CreateAccountInput {
  clientMutationId?: String | null;
  account: AccountInput;
}

/*
 * All input for the create `Migration` mutation.

 */
export interface CreateMigrationInput {
  clientMutationId?: String | null;
  migration: MigrationInput;
}

/*
 * All input for the create `TestMultiplePrimary` mutation.

 */
export interface CreateTestMultiplePrimaryInput {
  clientMutationId?: String | null;
  testMultiplePrimary: TestMultiplePrimaryInput;
}

/*
 * All input for the create `TestPrimary` mutation.

 */
export interface CreateTestPrimaryInput {
  clientMutationId?: String | null;
  testPrimary: TestPrimaryInput;
}

/*
 * All input for the create `User` mutation.

 */
export interface CreateUserInput {
  clientMutationId?: String | null;
  user: UserInput;
}

/*
 * All input for the create `UserProfile` mutation.

 */
export interface CreateUserProfileInput {
  clientMutationId?: String | null;
  userProfile: UserProfileInput;
}

/*
 * A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’

 */
export interface DatetimeFilter {
  isNull?: Boolean | null;
  equalTo?: Datetime | null;
  notEqualTo?: Datetime | null;
  distinctFrom?: Datetime | null;
  notDistinctFrom?: Datetime | null;
  in?: Datetime[] | Datetime | null;
  notIn?: Datetime[] | Datetime | null;
  lessThan?: Datetime | null;
  lessThanOrEqualTo?: Datetime | null;
  greaterThan?: Datetime | null;
  greaterThanOrEqualTo?: Datetime | null;
}

/*
 * All input for the `deleteAccount` mutation.

 */
export interface DeleteAccountInput {
  clientMutationId?: String | null;
  id: UUID;
}

/*
 * All input for the `deleteMigration` mutation.

 */
export interface DeleteMigrationInput {
  clientMutationId?: String | null;
  id: Int;
}

/*
 * All input for the `deleteTestMultiplePrimary` mutation.

 */
export interface DeleteTestMultiplePrimaryInput {
  clientMutationId?: String | null;
  oneId: UUID;
  twoId: UUID;
}

/*
 * All input for the `deleteTestPrimary` mutation.

 */
export interface DeleteTestPrimaryInput {
  clientMutationId?: String | null;
  primary: UUID;
}

/*
 * All input for the `deleteUserByEmail` mutation.

 */
export interface DeleteUserByEmailInput {
  clientMutationId?: String | null;
  email: String;
}

/*
 * All input for the `deleteUserByFirstNameAndLastName` mutation.

 */
export interface DeleteUserByFirstNameAndLastNameInput {
  clientMutationId?: String | null;
  firstName: String;
  lastName: String;
}

/*
 * All input for the `deleteUserByUserProfileId` mutation.

 */
export interface DeleteUserByUserProfileIdInput {
  clientMutationId?: String | null;
  userProfileId: UUID;
}

/*
 * All input for the `deleteUser` mutation.

 */
export interface DeleteUserInput {
  clientMutationId?: String | null;
  id: UUID;
}

/*
 * All input for the `deleteUserProfile` mutation.

 */
export interface DeleteUserProfileInput {
  clientMutationId?: String | null;
  id: UUID;
}

/*
 * A filter to be used against Int fields. All fields are combined with a logical ‘and.’

 */
export interface IntFilter {
  isNull?: Boolean | null;
  equalTo?: Int | null;
  notEqualTo?: Int | null;
  distinctFrom?: Int | null;
  notDistinctFrom?: Int | null;
  in?: Int[] | Int | null;
  notIn?: Int[] | Int | null;
  lessThan?: Int | null;
  lessThanOrEqualTo?: Int | null;
  greaterThan?: Int | null;
  greaterThanOrEqualTo?: Int | null;
}

/*
 * A condition to be used against `Migration` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface MigrationCondition {
  id?: Int | null;
  timestamp?: BigInt | null;
  name?: String | null;
}

/*
 * A filter to be used against `Migration` object types. All fields are combined with a logical ‘and.’

 */
export interface MigrationFilter {
  id?: IntFilter | null;
  timestamp?: BigIntFilter | null;
  name?: StringFilter | null;
  and?: MigrationFilter[] | MigrationFilter | null;
  or?: MigrationFilter[] | MigrationFilter | null;
  not?: MigrationFilter | null;
}

/*
 * An input for mutations affecting `Migration`

 */
export interface MigrationInput {
  id?: Int | null;
  timestamp: BigInt;
  name: String;
}

/*
 * Represents an update to a `Migration`. Fields that are set will be updated.

 */
export interface MigrationPatch {
  id?: Int | null;
  timestamp?: BigInt | null;
  name?: String | null;
}

/*
 * A filter to be used against String fields. All fields are combined with a logical ‘and.’

 */
export interface StringFilter {
  isNull?: Boolean | null;
  equalTo?: String | null;
  notEqualTo?: String | null;
  distinctFrom?: String | null;
  notDistinctFrom?: String | null;
  in?: String[] | String | null;
  notIn?: String[] | String | null;
  lessThan?: String | null;
  lessThanOrEqualTo?: String | null;
  greaterThan?: String | null;
  greaterThanOrEqualTo?: String | null;
  includes?: String | null;
  notIncludes?: String | null;
  includesInsensitive?: String | null;
  notIncludesInsensitive?: String | null;
  startsWith?: String | null;
  notStartsWith?: String | null;
  startsWithInsensitive?: String | null;
  notStartsWithInsensitive?: String | null;
  endsWith?: String | null;
  notEndsWith?: String | null;
  endsWithInsensitive?: String | null;
  notEndsWithInsensitive?: String | null;
  like?: String | null;
  notLike?: String | null;
  likeInsensitive?: String | null;
  notLikeInsensitive?: String | null;
  similarTo?: String | null;
  notSimilarTo?: String | null;
}

/*
 * A condition to be used against `TestMultiplePrimary` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface TestMultiplePrimaryCondition {
  oneId?: UUID | null;
  twoId?: UUID | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * A filter to be used against `TestMultiplePrimary` object types. All fields are combined with a logical ‘and.’

 */
export interface TestMultiplePrimaryFilter {
  oneId?: UUIDFilter | null;
  twoId?: UUIDFilter | null;
  createdAt?: DatetimeFilter | null;
  updatedAt?: DatetimeFilter | null;
  and?: TestMultiplePrimaryFilter[] | TestMultiplePrimaryFilter | null;
  or?: TestMultiplePrimaryFilter[] | TestMultiplePrimaryFilter | null;
  not?: TestMultiplePrimaryFilter | null;
}

/*
 * An input for mutations affecting `TestMultiplePrimary`

 */
export interface TestMultiplePrimaryInput {
  oneId: UUID;
  twoId: UUID;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * Represents an update to a `TestMultiplePrimary`. Fields that are set will be updated.

 */
export interface TestMultiplePrimaryPatch {
  oneId?: UUID | null;
  twoId?: UUID | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * A condition to be used against `TestPrimary` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface TestPrimaryCondition {
  primary?: UUID | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * A filter to be used against `TestPrimary` object types. All fields are combined with a logical ‘and.’

 */
export interface TestPrimaryFilter {
  primary?: UUIDFilter | null;
  createdAt?: DatetimeFilter | null;
  updatedAt?: DatetimeFilter | null;
  and?: TestPrimaryFilter[] | TestPrimaryFilter | null;
  or?: TestPrimaryFilter[] | TestPrimaryFilter | null;
  not?: TestPrimaryFilter | null;
}

/*
 * An input for mutations affecting `TestPrimary`

 */
export interface TestPrimaryInput {
  primary?: UUID | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * Represents an update to a `TestPrimary`. Fields that are set will be updated.

 */
export interface TestPrimaryPatch {
  primary?: UUID | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * All input for the `updateAccount` mutation.

 */
export interface UpdateAccountInput {
  clientMutationId?: String | null;
  patch: AccountPatch;
  id: UUID;
}

/*
 * All input for the `updateMigration` mutation.

 */
export interface UpdateMigrationInput {
  clientMutationId?: String | null;
  patch: MigrationPatch;
  id: Int;
}

/*
 * All input for the `updateTestMultiplePrimary` mutation.

 */
export interface UpdateTestMultiplePrimaryInput {
  clientMutationId?: String | null;
  patch: TestMultiplePrimaryPatch;
  oneId: UUID;
  twoId: UUID;
}

/*
 * All input for the `updateTestPrimary` mutation.

 */
export interface UpdateTestPrimaryInput {
  clientMutationId?: String | null;
  patch: TestPrimaryPatch;
  primary: UUID;
}

/*
 * All input for the `updateUserByEmail` mutation.

 */
export interface UpdateUserByEmailInput {
  clientMutationId?: String | null;
  patch: UserPatch;
  email: String;
}

/*
 * All input for the `updateUserByFirstNameAndLastName` mutation.

 */
export interface UpdateUserByFirstNameAndLastNameInput {
  clientMutationId?: String | null;
  patch: UserPatch;
  firstName: String;
  lastName: String;
}

/*
 * All input for the `updateUserByUserProfileId` mutation.

 */
export interface UpdateUserByUserProfileIdInput {
  clientMutationId?: String | null;
  patch: UserPatch;
  userProfileId: UUID;
}

/*
 * All input for the `updateUser` mutation.

 */
export interface UpdateUserInput {
  clientMutationId?: String | null;
  patch: UserPatch;
  id: UUID;
}

/*
 * All input for the `updateUserProfile` mutation.

 */
export interface UpdateUserProfileInput {
  clientMutationId?: String | null;
  patch: UserProfilePatch;
  id: UUID;
}

/*
 * A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface UserCondition {
  id?: UUID | null;
  email?: String | null;
  password?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  lastLoggedAt?: Datetime | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  userProfileId?: UUID | null;
}

/*
 * All input for the `userCustomMutation` mutation.

 */
export interface UserCustomMutationInput {
  clientMutationId?: String | null;
  teamId: Int;
}

/*
 * A filter to be used against `User` object types. All fields are combined with a logical ‘and.’

 */
export interface UserFilter {
  id?: UUIDFilter | null;
  email?: StringFilter | null;
  password?: StringFilter | null;
  firstName?: StringFilter | null;
  lastName?: StringFilter | null;
  lastLoggedAt?: DatetimeFilter | null;
  createdAt?: DatetimeFilter | null;
  updatedAt?: DatetimeFilter | null;
  userProfileId?: UUIDFilter | null;
  and?: UserFilter[] | UserFilter | null;
  or?: UserFilter[] | UserFilter | null;
  not?: UserFilter | null;
}

/*
 * An input for mutations affecting `User`

 */
export interface UserInput {
  id?: UUID | null;
  email: String;
  password?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  lastLoggedAt: Datetime;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  userProfileId: UUID;
}

/*
 * Represents an update to a `User`. Fields that are set will be updated.

 */
export interface UserPatch {
  id?: UUID | null;
  email?: String | null;
  password?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  lastLoggedAt?: Datetime | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  userProfileId?: UUID | null;
}

/*
 * A condition to be used against `UserProfile` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface UserProfileCondition {
  id?: UUID | null;
  picture?: String | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * A filter to be used against `UserProfile` object types. All fields are combined with a logical ‘and.’

 */
export interface UserProfileFilter {
  id?: UUIDFilter | null;
  picture?: StringFilter | null;
  createdAt?: DatetimeFilter | null;
  updatedAt?: DatetimeFilter | null;
  and?: UserProfileFilter[] | UserProfileFilter | null;
  or?: UserProfileFilter[] | UserProfileFilter | null;
  not?: UserProfileFilter | null;
}

/*
 * An input for mutations affecting `UserProfile`

 */
export interface UserProfileInput {
  id?: UUID | null;
  picture: String;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * Represents an update to a `UserProfile`. Fields that are set will be updated.

 */
export interface UserProfilePatch {
  id?: UUID | null;
  picture?: String | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
}

/*
 * A filter to be used against UUID fields. All fields are combined with a logical ‘and.’

 */
export interface UUIDFilter {
  isNull?: Boolean | null;
  equalTo?: UUID | null;
  notEqualTo?: UUID | null;
  distinctFrom?: UUID | null;
  notDistinctFrom?: UUID | null;
  in?: UUID[] | UUID | null;
  notIn?: UUID[] | UUID | null;
  lessThan?: UUID | null;
  lessThanOrEqualTo?: UUID | null;
  greaterThan?: UUID | null;
  greaterThanOrEqualTo?: UUID | null;
}

export interface Account {
  id: UUID;
  name: String;
  planStatus: AccountPlanStatusEnum;
  plan: AccountPlanEnum;
  subscriptionId: String;
  createdAt: Datetime;
  updatedAt: Datetime;
  userId: UUID;
}

/*
 * A connection to a list of `Account` values.

 */
export interface AccountsConnection {
  nodes: Array<Account>;
  edges: Array<AccountsEdge>;
  pageInfo: PageInfo;
  totalCount: Int;
}

/*
 * A `Account` edge in the connection.

 */
export interface AccountsEdge {
  cursor?: Cursor | null;
  node: Account;
}

/*
 * The output of our create `Account` mutation.

 */
export interface CreateAccountPayload {
  clientMutationId?: String | null;
  account?: Account | null;
  query?: Query | null;
  accountEdge?: AccountsEdge | null;
}

/*
 * The output of our create `Migration` mutation.

 */
export interface CreateMigrationPayload {
  clientMutationId?: String | null;
  migration?: Migration | null;
  query?: Query | null;
  migrationEdge?: MigrationsEdge | null;
}

/*
 * The output of our create `TestMultiplePrimary` mutation.

 */
export interface CreateTestMultiplePrimaryPayload {
  clientMutationId?: String | null;
  testMultiplePrimary?: TestMultiplePrimary | null;
  query?: Query | null;
  testMultiplePrimaryEdge?: TestMultiplePrimariesEdge | null;
}

/*
 * The output of our create `TestPrimary` mutation.

 */
export interface CreateTestPrimaryPayload {
  clientMutationId?: String | null;
  testPrimary?: TestPrimary | null;
  query?: Query | null;
  testPrimaryEdge?: TestPrimariesEdge | null;
}

/*
 * The output of our create `User` mutation.

 */
export interface CreateUserPayload {
  clientMutationId?: String | null;
  user?: User | null;
  query?: Query | null;
  userEdge?: UsersEdge | null;
}

/*
 * The output of our create `UserProfile` mutation.

 */
export interface CreateUserProfilePayload {
  clientMutationId?: String | null;
  userProfile?: UserProfile | null;
  query?: Query | null;
  userProfileEdge?: UserProfilesEdge | null;
}

/*
 * The output of our delete `Account` mutation.

 */
export interface DeleteAccountPayload {
  clientMutationId?: String | null;
  account?: Account | null;
  deletedAccountNodeId?: ID_Output | null;
  query?: Query | null;
  accountEdge?: AccountsEdge | null;
}

/*
 * The output of our delete `Migration` mutation.

 */
export interface DeleteMigrationPayload {
  clientMutationId?: String | null;
  migration?: Migration | null;
  deletedMigrationNodeId?: ID_Output | null;
  query?: Query | null;
  migrationEdge?: MigrationsEdge | null;
}

/*
 * The output of our delete `TestMultiplePrimary` mutation.

 */
export interface DeleteTestMultiplePrimaryPayload {
  clientMutationId?: String | null;
  testMultiplePrimary?: TestMultiplePrimary | null;
  deletedTestMultiplePrimaryNodeId?: ID_Output | null;
  query?: Query | null;
  testMultiplePrimaryEdge?: TestMultiplePrimariesEdge | null;
}

/*
 * The output of our delete `TestPrimary` mutation.

 */
export interface DeleteTestPrimaryPayload {
  clientMutationId?: String | null;
  testPrimary?: TestPrimary | null;
  deletedTestPrimaryNodeId?: ID_Output | null;
  query?: Query | null;
  testPrimaryEdge?: TestPrimariesEdge | null;
}

/*
 * The output of our delete `User` mutation.

 */
export interface DeleteUserPayload {
  clientMutationId?: String | null;
  user?: User | null;
  deletedUserNodeId?: ID_Output | null;
  query?: Query | null;
  userEdge?: UsersEdge | null;
}

/*
 * The output of our delete `UserProfile` mutation.

 */
export interface DeleteUserProfilePayload {
  clientMutationId?: String | null;
  userProfile?: UserProfile | null;
  deletedUserProfileNodeId?: ID_Output | null;
  query?: Query | null;
  userProfileEdge?: UserProfilesEdge | null;
}

export interface Migration {
  id: Int;
  timestamp: BigInt;
  name: String;
}

/*
 * A connection to a list of `Migration` values.

 */
export interface MigrationsConnection {
  nodes: Array<Migration>;
  edges: Array<MigrationsEdge>;
  pageInfo: PageInfo;
  totalCount: Int;
}

/*
 * A `Migration` edge in the connection.

 */
export interface MigrationsEdge {
  cursor?: Cursor | null;
  node: Migration;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: Cursor | null;
  endCursor?: Cursor | null;
}

/*
 * A connection to a list of `TestMultiplePrimary` values.

 */
export interface TestMultiplePrimariesConnection {
  nodes: Array<TestMultiplePrimary>;
  edges: Array<TestMultiplePrimariesEdge>;
  pageInfo: PageInfo;
  totalCount: Int;
}

/*
 * A `TestMultiplePrimary` edge in the connection.

 */
export interface TestMultiplePrimariesEdge {
  cursor?: Cursor | null;
  node: TestMultiplePrimary;
}

export interface TestMultiplePrimary {
  oneId: UUID;
  twoId: UUID;
  createdAt: Datetime;
  updatedAt: Datetime;
}

/*
 * A connection to a list of `TestPrimary` values.

 */
export interface TestPrimariesConnection {
  nodes: Array<TestPrimary>;
  edges: Array<TestPrimariesEdge>;
  pageInfo: PageInfo;
  totalCount: Int;
}

/*
 * A `TestPrimary` edge in the connection.

 */
export interface TestPrimariesEdge {
  cursor?: Cursor | null;
  node: TestPrimary;
}

export interface TestPrimary {
  primary: UUID;
  createdAt: Datetime;
  updatedAt: Datetime;
}

/*
 * The output of our update `Account` mutation.

 */
export interface UpdateAccountPayload {
  clientMutationId?: String | null;
  account?: Account | null;
  query?: Query | null;
  accountEdge?: AccountsEdge | null;
}

/*
 * The output of our update `Migration` mutation.

 */
export interface UpdateMigrationPayload {
  clientMutationId?: String | null;
  migration?: Migration | null;
  query?: Query | null;
  migrationEdge?: MigrationsEdge | null;
}

/*
 * The output of our update `TestMultiplePrimary` mutation.

 */
export interface UpdateTestMultiplePrimaryPayload {
  clientMutationId?: String | null;
  testMultiplePrimary?: TestMultiplePrimary | null;
  query?: Query | null;
  testMultiplePrimaryEdge?: TestMultiplePrimariesEdge | null;
}

/*
 * The output of our update `TestPrimary` mutation.

 */
export interface UpdateTestPrimaryPayload {
  clientMutationId?: String | null;
  testPrimary?: TestPrimary | null;
  query?: Query | null;
  testPrimaryEdge?: TestPrimariesEdge | null;
}

/*
 * The output of our update `User` mutation.

 */
export interface UpdateUserPayload {
  clientMutationId?: String | null;
  user?: User | null;
  query?: Query | null;
  userEdge?: UsersEdge | null;
}

/*
 * The output of our update `UserProfile` mutation.

 */
export interface UpdateUserProfilePayload {
  clientMutationId?: String | null;
  userProfile?: UserProfile | null;
  query?: Query | null;
  userProfileEdge?: UserProfilesEdge | null;
}

export interface User {
  id: UUID;
  email: String;
  password?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  lastLoggedAt: Datetime;
  createdAt: Datetime;
  updatedAt: Datetime;
  userProfileId: UUID;
}

/*
 * The output of our `userCustomMutation` mutation.

 */
export interface UserCustomMutationPayload {
  clientMutationId?: String | null;
  user?: User | null;
  query?: Query | null;
  userEdge?: UsersEdge | null;
}

export interface UserProfile {
  id: UUID;
  picture: String;
  createdAt: Datetime;
  updatedAt: Datetime;
}

/*
 * A connection to a list of `UserProfile` values.

 */
export interface UserProfilesConnection {
  nodes: Array<UserProfile>;
  edges: Array<UserProfilesEdge>;
  pageInfo: PageInfo;
  totalCount: Int;
}

/*
 * A `UserProfile` edge in the connection.

 */
export interface UserProfilesEdge {
  cursor?: Cursor | null;
  node: UserProfile;
}

/*
 * A connection to a list of `User` values.

 */
export interface UsersConnection {
  nodes: Array<User>;
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
  totalCount: Int;
}

/*
 * A `User` edge in the connection.

 */
export interface UsersEdge {
  cursor?: Cursor | null;
  node: User;
}

/*
A signed eight-byte integer. The upper big integer values are greater than the max value for a JavaScript number. Therefore all big integers will be output as strings and not numbers.
*/
export type BigInt = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
A location in a connection that can be used for resuming pagination.
*/
export type Cursor = string;

/*
A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
*/
export type Datetime = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122).
*/
export type UUID = string;

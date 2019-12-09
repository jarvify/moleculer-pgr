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
  | 'ACCOUNT_ID_ASC'
  | 'ACCOUNT_ID_DESC'
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
  and?: AccountFilter[] | AccountFilter | null;
  or?: AccountFilter[] | AccountFilter | null;
  not?: AccountFilter | null;
}

/*
 * The fields on `account` to look up the row to connect.

 */
export interface AccountIdxAccountIdConnect {
  id: UUID;
}

/*
 * The fields on `account` to look up the row to delete.

 */
export interface AccountIdxAccountIdDelete {
  id: UUID;
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
  usersUsingId?: FkUserAccountIdInverseInput | null;
}

/*
 * The fields on `account` to look up the row to update.

 */
export interface AccountOnUserForFkUserAccountIdUsingIdxAccountIdUpdate {
  patch: updateAccountOnUserForFkUserAccountIdPatch;
  id: UUID;
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
  usersUsingId?: FkUserAccountIdInverseInput | null;
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
 * The `account` to be created by this mutation.

 */
export interface FkUserAccountIdAccountCreateInput {
  id?: UUID | null;
  name: String;
  planStatus: AccountPlanStatusEnum;
  plan: AccountPlanEnum;
  subscriptionId: String;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  usersUsingId?: FkUserAccountIdInverseInput | null;
}

/*
 * Input for the nested mutation of `account` in the `UserInput` mutation.

 */
export interface FkUserAccountIdInput {
  connectById?: AccountIdxAccountIdConnect | null;
  deleteById?: AccountIdxAccountIdDelete | null;
  updateById?: AccountOnUserForFkUserAccountIdUsingIdxAccountIdUpdate | null;
  create?: FkUserAccountIdAccountCreateInput | null;
}

/*
 * Input for the nested mutation of `user` in the `AccountInput` mutation.

 */
export interface FkUserAccountIdInverseInput {
  deleteOthers?: Boolean | null;
  connectById?: UserIdxUserIdConnect[] | UserIdxUserIdConnect | null;
  connectByEmail?: UserUqUserEmailConnect[] | UserUqUserEmailConnect | null;
  connectByFirstNameAndLastName?:
    | UserUqUserFirstNameLastNameConnect[]
    | UserUqUserFirstNameLastNameConnect
    | null;
  connectByUserProfileId?:
    | UserUqUserUserProfileIdConnect[]
    | UserUqUserUserProfileIdConnect
    | null;
  deleteById?: UserIdxUserIdDelete[] | UserIdxUserIdDelete | null;
  deleteByEmail?: UserUqUserEmailDelete[] | UserUqUserEmailDelete | null;
  deleteByFirstNameAndLastName?:
    | UserUqUserFirstNameLastNameDelete[]
    | UserUqUserFirstNameLastNameDelete
    | null;
  deleteByUserProfileId?:
    | UserUqUserUserProfileIdDelete[]
    | UserUqUserUserProfileIdDelete
    | null;
  updateById?:
    | UserOnUserForFkUserAccountIdUsingIdxUserIdUpdate[]
    | UserOnUserForFkUserAccountIdUsingIdxUserIdUpdate
    | null;
  updateByEmail?:
    | UserOnUserForFkUserAccountIdUsingUqUserEmailUpdate[]
    | UserOnUserForFkUserAccountIdUsingUqUserEmailUpdate
    | null;
  updateByFirstNameAndLastName?:
    | UserOnUserForFkUserAccountIdUsingUqUserFirstNameLastNameUpdate[]
    | UserOnUserForFkUserAccountIdUsingUqUserFirstNameLastNameUpdate
    | null;
  updateByUserProfileId?:
    | UserOnUserForFkUserAccountIdUsingUqUserUserProfileIdUpdate[]
    | UserOnUserForFkUserAccountIdUsingUqUserUserProfileIdUpdate
    | null;
  create?:
    | FkUserAccountIdUserCreateInput[]
    | FkUserAccountIdUserCreateInput
    | null;
}

/*
 * The `user` to be created by this mutation.

 */
export interface FkUserAccountIdUserCreateInput {
  id?: UUID | null;
  email: String;
  password?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  lastLoggedAt: Datetime;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  userProfileId?: UUID | null;
  accountToAccountId?: FkUserAccountIdInput | null;
  profile?: FkUserUserProfileIdInput | null;
}

/*
 * Input for the nested mutation of `userProfile` in the `UserInput` mutation.

 */
export interface FkUserUserProfileIdInput {
  connectById?: UserProfileIdxUserProfileIdConnect | null;
  deleteById?: UserProfileIdxUserProfileIdDelete | null;
  updateById?: UserProfileOnUserForFkUserUserProfileIdUsingIdxUserProfileIdUpdate | null;
  create?: FkUserUserProfileIdUserProfileCreateInput | null;
}

/*
 * Input for the nested mutation of `user` in the `UserProfileInput` mutation.

 */
export interface FkUserUserProfileIdInverseInput {
  deleteOthers?: Boolean | null;
  connectById?: UserIdxUserIdConnect | null;
  connectByEmail?: UserUqUserEmailConnect | null;
  connectByFirstNameAndLastName?: UserUqUserFirstNameLastNameConnect | null;
  connectByUserProfileId?: UserUqUserUserProfileIdConnect | null;
  deleteById?: UserIdxUserIdDelete | null;
  deleteByEmail?: UserUqUserEmailDelete | null;
  deleteByFirstNameAndLastName?: UserUqUserFirstNameLastNameDelete | null;
  deleteByUserProfileId?: UserUqUserUserProfileIdDelete | null;
  updateById?: UserOnUserForFkUserUserProfileIdUsingIdxUserIdUpdate | null;
  updateByEmail?: UserOnUserForFkUserUserProfileIdUsingUqUserEmailUpdate | null;
  updateByFirstNameAndLastName?: UserOnUserForFkUserUserProfileIdUsingUqUserFirstNameLastNameUpdate | null;
  updateByUserProfileId?: UserOnUserForFkUserUserProfileIdUsingUqUserUserProfileIdUpdate | null;
  create?:
    | FkUserUserProfileIdUserCreateInput[]
    | FkUserUserProfileIdUserCreateInput
    | null;
}

/*
 * The `user` to be created by this mutation.

 */
export interface FkUserUserProfileIdUserCreateInput {
  id?: UUID | null;
  email: String;
  password?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  lastLoggedAt: Datetime;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  accountId?: UUID | null;
  accountToAccountId?: FkUserAccountIdInput | null;
  profile?: FkUserUserProfileIdInput | null;
}

/*
 * The `userProfile` to be created by this mutation.

 */
export interface FkUserUserProfileIdUserProfileCreateInput {
  id?: UUID | null;
  picture: String;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  user?: FkUserUserProfileIdInverseInput | null;
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
 * All input for the `updateAccount` mutation.

 */
export interface UpdateAccountInput {
  clientMutationId?: String | null;
  patch: AccountPatch;
  id: UUID;
}

/*
 * An object where the defined keys will be set on the `account` being updated.

 */
export interface updateAccountOnUserForFkUserAccountIdPatch {
  id?: UUID | null;
  name?: String | null;
  planStatus?: AccountPlanStatusEnum | null;
  plan?: AccountPlanEnum | null;
  subscriptionId?: String | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  usersUsingId?: FkUserAccountIdInverseInput | null;
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
 * An object where the defined keys will be set on the `user` being updated.

 */
export interface updateUserOnUserForFkUserAccountIdPatch {
  id?: UUID | null;
  email?: String | null;
  password?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  lastLoggedAt?: Datetime | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  userProfileId?: UUID | null;
  accountToAccountId?: FkUserAccountIdInput | null;
  profile?: FkUserUserProfileIdInput | null;
}

/*
 * An object where the defined keys will be set on the `user` being updated.

 */
export interface updateUserOnUserForFkUserUserProfileIdPatch {
  id?: UUID | null;
  email?: String | null;
  password?: String | null;
  firstName?: String | null;
  lastName?: String | null;
  lastLoggedAt?: Datetime | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  accountId?: UUID | null;
  accountToAccountId?: FkUserAccountIdInput | null;
  profile?: FkUserUserProfileIdInput | null;
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
 * An object where the defined keys will be set on the `userProfile` being updated.

 */
export interface updateUserProfileOnUserForFkUserUserProfileIdPatch {
  id?: UUID | null;
  picture?: String | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  user?: FkUserUserProfileIdInverseInput | null;
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
  accountId?: UUID | null;
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
  accountId?: UUIDFilter | null;
  userProfileId?: UUIDFilter | null;
  and?: UserFilter[] | UserFilter | null;
  or?: UserFilter[] | UserFilter | null;
  not?: UserFilter | null;
}

/*
 * The fields on `user` to look up the row to connect.

 */
export interface UserIdxUserIdConnect {
  id: UUID;
}

/*
 * The fields on `user` to look up the row to delete.

 */
export interface UserIdxUserIdDelete {
  id: UUID;
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
  accountId?: UUID | null;
  userProfileId?: UUID | null;
  accountToAccountId?: FkUserAccountIdInput | null;
  profile?: FkUserUserProfileIdInput | null;
}

/*
 * The fields on `user` to look up the row to update.

 */
export interface UserOnUserForFkUserAccountIdUsingIdxUserIdUpdate {
  patch: updateUserOnUserForFkUserAccountIdPatch;
  id: UUID;
}

/*
 * The fields on `user` to look up the row to update.

 */
export interface UserOnUserForFkUserAccountIdUsingUqUserEmailUpdate {
  patch: updateUserOnUserForFkUserAccountIdPatch;
  email: String;
}

/*
 * The fields on `user` to look up the row to update.

 */
export interface UserOnUserForFkUserAccountIdUsingUqUserFirstNameLastNameUpdate {
  patch: updateUserOnUserForFkUserAccountIdPatch;
  firstName: String;
  lastName: String;
}

/*
 * The fields on `user` to look up the row to update.

 */
export interface UserOnUserForFkUserAccountIdUsingUqUserUserProfileIdUpdate {
  patch: updateUserOnUserForFkUserAccountIdPatch;
  userProfileId: UUID;
}

/*
 * The fields on `user` to look up the row to update.

 */
export interface UserOnUserForFkUserUserProfileIdUsingIdxUserIdUpdate {
  patch: updateUserOnUserForFkUserUserProfileIdPatch;
  id: UUID;
}

/*
 * The fields on `user` to look up the row to update.

 */
export interface UserOnUserForFkUserUserProfileIdUsingUqUserEmailUpdate {
  patch: updateUserOnUserForFkUserUserProfileIdPatch;
  email: String;
}

/*
 * The fields on `user` to look up the row to update.

 */
export interface UserOnUserForFkUserUserProfileIdUsingUqUserFirstNameLastNameUpdate {
  patch: updateUserOnUserForFkUserUserProfileIdPatch;
  firstName: String;
  lastName: String;
}

/*
 * The fields on `user` to look up the row to update.

 */
export interface UserOnUserForFkUserUserProfileIdUsingUqUserUserProfileIdUpdate {
  patch: updateUserOnUserForFkUserUserProfileIdPatch;
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
  accountId?: UUID | null;
  userProfileId?: UUID | null;
  accountToAccountId?: FkUserAccountIdInput | null;
  profile?: FkUserUserProfileIdInput | null;
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
 * The fields on `userProfile` to look up the row to connect.

 */
export interface UserProfileIdxUserProfileIdConnect {
  id: UUID;
}

/*
 * The fields on `userProfile` to look up the row to delete.

 */
export interface UserProfileIdxUserProfileIdDelete {
  id: UUID;
}

/*
 * An input for mutations affecting `UserProfile`

 */
export interface UserProfileInput {
  id?: UUID | null;
  picture: String;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  user?: FkUserUserProfileIdInverseInput | null;
}

/*
 * The fields on `userProfile` to look up the row to update.

 */
export interface UserProfileOnUserForFkUserUserProfileIdUsingIdxUserProfileIdUpdate {
  patch: updateUserProfileOnUserForFkUserUserProfileIdPatch;
  id: UUID;
}

/*
 * Represents an update to a `UserProfile`. Fields that are set will be updated.

 */
export interface UserProfilePatch {
  id?: UUID | null;
  picture?: String | null;
  createdAt?: Datetime | null;
  updatedAt?: Datetime | null;
  user?: FkUserUserProfileIdInverseInput | null;
}

/*
 * The fields on `user` to look up the row to connect.

 */
export interface UserUqUserEmailConnect {
  email: String;
}

/*
 * The fields on `user` to look up the row to delete.

 */
export interface UserUqUserEmailDelete {
  email: String;
}

/*
 * The fields on `user` to look up the row to connect.

 */
export interface UserUqUserFirstNameLastNameConnect {
  firstName: String;
  lastName: String;
}

/*
 * The fields on `user` to look up the row to delete.

 */
export interface UserUqUserFirstNameLastNameDelete {
  firstName: String;
  lastName: String;
}

/*
 * The fields on `user` to look up the row to connect.

 */
export interface UserUqUserUserProfileIdConnect {
  userProfileId: UUID;
}

/*
 * The fields on `user` to look up the row to delete.

 */
export interface UserUqUserUserProfileIdDelete {
  userProfileId: UUID;
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
  users: UsersConnection;
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
 * The output of our create `User` mutation.

 */
export interface CreateUserPayload {
  clientMutationId?: String | null;
  user?: User | null;
  query?: Query | null;
  account?: Account | null;
  profile?: UserProfile | null;
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
 * The output of our delete `User` mutation.

 */
export interface DeleteUserPayload {
  clientMutationId?: String | null;
  user?: User | null;
  deletedUserNodeId?: ID_Output | null;
  query?: Query | null;
  account?: Account | null;
  profile?: UserProfile | null;
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
 * The output of our update `User` mutation.

 */
export interface UpdateUserPayload {
  clientMutationId?: String | null;
  user?: User | null;
  query?: Query | null;
  account?: Account | null;
  profile?: UserProfile | null;
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
  accountId?: UUID | null;
  userProfileId?: UUID | null;
  account?: Account | null;
  profile?: UserProfile | null;
}

/*
 * The output of our `userCustomMutation` mutation.

 */
export interface UserCustomMutationPayload {
  clientMutationId?: String | null;
  user?: User | null;
  query?: Query | null;
  account?: Account | null;
  profile?: UserProfile | null;
  userEdge?: UsersEdge | null;
}

export interface UserProfile {
  id: UUID;
  picture: String;
  createdAt: Datetime;
  updatedAt: Datetime;
  user?: User | null;
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

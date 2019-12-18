import { buildSchema } from 'graphql';
import { gql } from 'moleculer-pgr';

export const sdl = gql`
  type Account implements Node {
    """
    A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    """
    nodeId: ID!
    id: UUID!
    name: String!
    planStatus: AccountPlanStatusEnum!
    plan: AccountPlanEnum!
    subscriptionId: String!
    createdAt: Datetime!
    updatedAt: Datetime!
    userId: UUID!

    """
    Reads a single \`User\` that is related to this \`Account\`.
    """
    user: User!
  }

  """
  A condition to be used against \`Account\` object types. All fields are tested for equality and combined with a logical ‘and.’
  """
  input AccountCondition {
    """
    Checks for equality with the object’s \`id\` field.
    """
    id: UUID

    """
    Checks for equality with the object’s \`name\` field.
    """
    name: String

    """
    Checks for equality with the object’s \`planStatus\` field.
    """
    planStatus: AccountPlanStatusEnum

    """
    Checks for equality with the object’s \`plan\` field.
    """
    plan: AccountPlanEnum

    """
    Checks for equality with the object’s \`subscriptionId\` field.
    """
    subscriptionId: String

    """
    Checks for equality with the object’s \`createdAt\` field.
    """
    createdAt: Datetime

    """
    Checks for equality with the object’s \`updatedAt\` field.
    """
    updatedAt: Datetime

    """
    Checks for equality with the object’s \`userId\` field.
    """
    userId: UUID
  }

  """
  A filter to be used against \`Account\` object types. All fields are combined with a logical ‘and.’
  """
  input AccountFilter {
    """
    Filter by the object’s \`id\` field.
    """
    id: UUIDFilter

    """
    Filter by the object’s \`name\` field.
    """
    name: StringFilter

    """
    Filter by the object’s \`planStatus\` field.
    """
    planStatus: AccountPlanStatusEnumFilter

    """
    Filter by the object’s \`plan\` field.
    """
    plan: AccountPlanEnumFilter

    """
    Filter by the object’s \`subscriptionId\` field.
    """
    subscriptionId: StringFilter

    """
    Filter by the object’s \`createdAt\` field.
    """
    createdAt: DatetimeFilter

    """
    Filter by the object’s \`updatedAt\` field.
    """
    updatedAt: DatetimeFilter

    """
    Filter by the object’s \`userId\` field.
    """
    userId: UUIDFilter

    """
    Checks for all expressions in this list.
    """
    and: [AccountFilter!]

    """
    Checks for any expressions in this list.
    """
    or: [AccountFilter!]

    """
    Negates the expression.
    """
    not: AccountFilter
  }

  """
  An input for mutations affecting \`Account\`
  """
  input AccountInput {
    id: UUID
    name: String!
    planStatus: AccountPlanStatusEnum!
    plan: AccountPlanEnum!
    subscriptionId: String!
    createdAt: Datetime
    updatedAt: Datetime
    userId: UUID!
  }

  """
  Represents an update to a \`Account\`. Fields that are set will be updated.
  """
  input AccountPatch {
    id: UUID
    name: String
    planStatus: AccountPlanStatusEnum
    plan: AccountPlanEnum
    subscriptionId: String
    createdAt: Datetime
    updatedAt: Datetime
    userId: UUID
  }

  enum AccountPlanEnum {
    FREE
    STARTER
    PRO
    ENTERPRISE
  }

  """
  A filter to be used against AccountPlanEnum fields. All fields are combined with a logical ‘and.’
  """
  input AccountPlanEnumFilter {
    """
    Is null (if \`true\` is specified) or is not null (if \`false\` is specified).
    """
    isNull: Boolean

    """
    Equal to the specified value.
    """
    equalTo: AccountPlanEnum

    """
    Not equal to the specified value.
    """
    notEqualTo: AccountPlanEnum

    """
    Not equal to the specified value, treating null like an ordinary value.
    """
    distinctFrom: AccountPlanEnum

    """
    Equal to the specified value, treating null like an ordinary value.
    """
    notDistinctFrom: AccountPlanEnum

    """
    Included in the specified list.
    """
    in: [AccountPlanEnum!]

    """
    Not included in the specified list.
    """
    notIn: [AccountPlanEnum!]

    """
    Less than the specified value.
    """
    lessThan: AccountPlanEnum

    """
    Less than or equal to the specified value.
    """
    lessThanOrEqualTo: AccountPlanEnum

    """
    Greater than the specified value.
    """
    greaterThan: AccountPlanEnum

    """
    Greater than or equal to the specified value.
    """
    greaterThanOrEqualTo: AccountPlanEnum
  }

  enum AccountPlanStatusEnum {
    ACTIVE
    TRIALING
    CANCELED
    PAST_DUE
  }

  """
  A filter to be used against AccountPlanStatusEnum fields. All fields are combined with a logical ‘and.’
  """
  input AccountPlanStatusEnumFilter {
    """
    Is null (if \`true\` is specified) or is not null (if \`false\` is specified).
    """
    isNull: Boolean

    """
    Equal to the specified value.
    """
    equalTo: AccountPlanStatusEnum

    """
    Not equal to the specified value.
    """
    notEqualTo: AccountPlanStatusEnum

    """
    Not equal to the specified value, treating null like an ordinary value.
    """
    distinctFrom: AccountPlanStatusEnum

    """
    Equal to the specified value, treating null like an ordinary value.
    """
    notDistinctFrom: AccountPlanStatusEnum

    """
    Included in the specified list.
    """
    in: [AccountPlanStatusEnum!]

    """
    Not included in the specified list.
    """
    notIn: [AccountPlanStatusEnum!]

    """
    Less than the specified value.
    """
    lessThan: AccountPlanStatusEnum

    """
    Less than or equal to the specified value.
    """
    lessThanOrEqualTo: AccountPlanStatusEnum

    """
    Greater than the specified value.
    """
    greaterThan: AccountPlanStatusEnum

    """
    Greater than or equal to the specified value.
    """
    greaterThanOrEqualTo: AccountPlanStatusEnum
  }

  """
  A connection to a list of \`Account\` values.
  """
  type AccountsConnection {
    """
    A list of \`Account\` objects.
    """
    nodes: [Account!]!

    """
    A list of edges which contains the \`Account\` and cursor to aid in pagination.
    """
    edges: [AccountsEdge!]!

    """
    Information to aid in pagination.
    """
    pageInfo: PageInfo!

    """
    The count of *all* \`Account\` you could get from the connection.
    """
    totalCount: Int!
  }

  """
  A \`Account\` edge in the connection.
  """
  type AccountsEdge {
    """
    A cursor for use in pagination.
    """
    cursor: Cursor

    """
    The \`Account\` at the end of the edge.
    """
    node: Account!
  }

  """
  Methods to use when ordering \`Account\`.
  """
  enum AccountsOrderBy {
    NATURAL
    ID_ASC
    ID_DESC
    NAME_ASC
    NAME_DESC
    PLAN_STATUS_ASC
    PLAN_STATUS_DESC
    PLAN_ASC
    PLAN_DESC
    SUBSCRIPTION_ID_ASC
    SUBSCRIPTION_ID_DESC
    CREATED_AT_ASC
    CREATED_AT_DESC
    UPDATED_AT_ASC
    UPDATED_AT_DESC
    USER_ID_ASC
    USER_ID_DESC
    PRIMARY_KEY_ASC
    PRIMARY_KEY_DESC
  }

  """
  A signed eight-byte integer. The upper big integer values are greater than the
  max value for a JavaScript number. Therefore all big integers will be output as
  strings and not numbers.
  """
  scalar BigInt

  """
  A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’
  """
  input BigIntFilter {
    """
    Is null (if \`true\` is specified) or is not null (if \`false\` is specified).
    """
    isNull: Boolean

    """
    Equal to the specified value.
    """
    equalTo: BigInt

    """
    Not equal to the specified value.
    """
    notEqualTo: BigInt

    """
    Not equal to the specified value, treating null like an ordinary value.
    """
    distinctFrom: BigInt

    """
    Equal to the specified value, treating null like an ordinary value.
    """
    notDistinctFrom: BigInt

    """
    Included in the specified list.
    """
    in: [BigInt!]

    """
    Not included in the specified list.
    """
    notIn: [BigInt!]

    """
    Less than the specified value.
    """
    lessThan: BigInt

    """
    Less than or equal to the specified value.
    """
    lessThanOrEqualTo: BigInt

    """
    Greater than the specified value.
    """
    greaterThan: BigInt

    """
    Greater than or equal to the specified value.
    """
    greaterThanOrEqualTo: BigInt
  }

  """
  All input for the create \`Account\` mutation.
  """
  input CreateAccountInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The \`Account\` to be created by this mutation.
    """
    account: AccountInput!
  }

  """
  The output of our create \`Account\` mutation.
  """
  type CreateAccountPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`Account\` that was created by this mutation.
    """
    account: Account

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    Reads a single \`User\` that is related to this \`Account\`.
    """
    user: User!

    """
    An edge for our \`Account\`. May be used by Relay 1.
    """
    accountEdge(
      """
      The method to use when ordering \`Account\`.
      """
      orderBy: [AccountsOrderBy!] = [PRIMARY_KEY_ASC]
    ): AccountsEdge
  }

  """
  All input for the create \`Migration\` mutation.
  """
  input CreateMigrationInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The \`Migration\` to be created by this mutation.
    """
    migration: MigrationInput!
  }

  """
  The output of our create \`Migration\` mutation.
  """
  type CreateMigrationPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`Migration\` that was created by this mutation.
    """
    migration: Migration

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`Migration\`. May be used by Relay 1.
    """
    migrationEdge(
      """
      The method to use when ordering \`Migration\`.
      """
      orderBy: [MigrationsOrderBy!] = [PRIMARY_KEY_ASC]
    ): MigrationsEdge
  }

  """
  All input for the create \`TestMultiplePrimary\` mutation.
  """
  input CreateTestMultiplePrimaryInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The \`TestMultiplePrimary\` to be created by this mutation.
    """
    testMultiplePrimary: TestMultiplePrimaryInput!
  }

  """
  The output of our create \`TestMultiplePrimary\` mutation.
  """
  type CreateTestMultiplePrimaryPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`TestMultiplePrimary\` that was created by this mutation.
    """
    testMultiplePrimary: TestMultiplePrimary

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`TestMultiplePrimary\`. May be used by Relay 1.
    """
    testMultiplePrimaryEdge(
      """
      The method to use when ordering \`TestMultiplePrimary\`.
      """
      orderBy: [TestMultiplePrimariesOrderBy!] = [PRIMARY_KEY_ASC]
    ): TestMultiplePrimariesEdge
  }

  """
  All input for the create \`TestPrimary\` mutation.
  """
  input CreateTestPrimaryInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The \`TestPrimary\` to be created by this mutation.
    """
    testPrimary: TestPrimaryInput!
  }

  """
  The output of our create \`TestPrimary\` mutation.
  """
  type CreateTestPrimaryPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`TestPrimary\` that was created by this mutation.
    """
    testPrimary: TestPrimary

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`TestPrimary\`. May be used by Relay 1.
    """
    testPrimaryEdge(
      """
      The method to use when ordering \`TestPrimary\`.
      """
      orderBy: [TestPrimariesOrderBy!] = [PRIMARY_KEY_ASC]
    ): TestPrimariesEdge
  }

  """
  All input for the create \`User\` mutation.
  """
  input CreateUserInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The \`User\` to be created by this mutation.
    """
    user: UserInput!
  }

  """
  The output of our create \`User\` mutation.
  """
  type CreateUserPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`User\` that was created by this mutation.
    """
    user: User

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    Reads a single \`UserProfile\` that is related to this \`User\`.
    """
    profile: UserProfile!

    """
    An edge for our \`User\`. May be used by Relay 1.
    """
    userEdge(
      """
      The method to use when ordering \`User\`.
      """
      orderBy: [UsersOrderBy!] = [PRIMARY_KEY_ASC]
    ): UsersEdge
  }

  """
  All input for the create \`UserProfile\` mutation.
  """
  input CreateUserProfileInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The \`UserProfile\` to be created by this mutation.
    """
    userProfile: UserProfileInput!
  }

  """
  The output of our create \`UserProfile\` mutation.
  """
  type CreateUserProfilePayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`UserProfile\` that was created by this mutation.
    """
    userProfile: UserProfile

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`UserProfile\`. May be used by Relay 1.
    """
    userProfileEdge(
      """
      The method to use when ordering \`UserProfile\`.
      """
      orderBy: [UserProfilesOrderBy!] = [PRIMARY_KEY_ASC]
    ): UserProfilesEdge
  }

  """
  A location in a connection that can be used for resuming pagination.
  """
  scalar Cursor

  """
  A point in time as described by the [ISO
  8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
  """
  scalar Datetime

  """
  A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’
  """
  input DatetimeFilter {
    """
    Is null (if \`true\` is specified) or is not null (if \`false\` is specified).
    """
    isNull: Boolean

    """
    Equal to the specified value.
    """
    equalTo: Datetime

    """
    Not equal to the specified value.
    """
    notEqualTo: Datetime

    """
    Not equal to the specified value, treating null like an ordinary value.
    """
    distinctFrom: Datetime

    """
    Equal to the specified value, treating null like an ordinary value.
    """
    notDistinctFrom: Datetime

    """
    Included in the specified list.
    """
    in: [Datetime!]

    """
    Not included in the specified list.
    """
    notIn: [Datetime!]

    """
    Less than the specified value.
    """
    lessThan: Datetime

    """
    Less than or equal to the specified value.
    """
    lessThanOrEqualTo: Datetime

    """
    Greater than the specified value.
    """
    greaterThan: Datetime

    """
    Greater than or equal to the specified value.
    """
    greaterThanOrEqualTo: Datetime
  }

  """
  All input for the \`deleteAccountByNodeId\` mutation.
  """
  input DeleteAccountByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`Account\` to be deleted.
    """
    nodeId: ID!
  }

  """
  All input for the \`deleteAccount\` mutation.
  """
  input DeleteAccountInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    id: UUID!
  }

  """
  The output of our delete \`Account\` mutation.
  """
  type DeleteAccountPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`Account\` that was deleted by this mutation.
    """
    account: Account
    deletedAccountNodeId: ID

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    Reads a single \`User\` that is related to this \`Account\`.
    """
    user: User!

    """
    An edge for our \`Account\`. May be used by Relay 1.
    """
    accountEdge(
      """
      The method to use when ordering \`Account\`.
      """
      orderBy: [AccountsOrderBy!] = [PRIMARY_KEY_ASC]
    ): AccountsEdge
  }

  """
  All input for the \`deleteMigrationByNodeId\` mutation.
  """
  input DeleteMigrationByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`Migration\` to be deleted.
    """
    nodeId: ID!
  }

  """
  All input for the \`deleteMigration\` mutation.
  """
  input DeleteMigrationInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    id: Int!
  }

  """
  The output of our delete \`Migration\` mutation.
  """
  type DeleteMigrationPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`Migration\` that was deleted by this mutation.
    """
    migration: Migration
    deletedMigrationNodeId: ID

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`Migration\`. May be used by Relay 1.
    """
    migrationEdge(
      """
      The method to use when ordering \`Migration\`.
      """
      orderBy: [MigrationsOrderBy!] = [PRIMARY_KEY_ASC]
    ): MigrationsEdge
  }

  """
  All input for the \`deleteTestMultiplePrimaryByNodeId\` mutation.
  """
  input DeleteTestMultiplePrimaryByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`TestMultiplePrimary\` to be deleted.
    """
    nodeId: ID!
  }

  """
  All input for the \`deleteTestMultiplePrimary\` mutation.
  """
  input DeleteTestMultiplePrimaryInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    oneId: UUID!
    twoId: UUID!
  }

  """
  The output of our delete \`TestMultiplePrimary\` mutation.
  """
  type DeleteTestMultiplePrimaryPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`TestMultiplePrimary\` that was deleted by this mutation.
    """
    testMultiplePrimary: TestMultiplePrimary
    deletedTestMultiplePrimaryNodeId: ID

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`TestMultiplePrimary\`. May be used by Relay 1.
    """
    testMultiplePrimaryEdge(
      """
      The method to use when ordering \`TestMultiplePrimary\`.
      """
      orderBy: [TestMultiplePrimariesOrderBy!] = [PRIMARY_KEY_ASC]
    ): TestMultiplePrimariesEdge
  }

  """
  All input for the \`deleteTestPrimaryByNodeId\` mutation.
  """
  input DeleteTestPrimaryByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`TestPrimary\` to be deleted.
    """
    nodeId: ID!
  }

  """
  All input for the \`deleteTestPrimary\` mutation.
  """
  input DeleteTestPrimaryInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    primary: UUID!
  }

  """
  The output of our delete \`TestPrimary\` mutation.
  """
  type DeleteTestPrimaryPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`TestPrimary\` that was deleted by this mutation.
    """
    testPrimary: TestPrimary
    deletedTestPrimaryNodeId: ID

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`TestPrimary\`. May be used by Relay 1.
    """
    testPrimaryEdge(
      """
      The method to use when ordering \`TestPrimary\`.
      """
      orderBy: [TestPrimariesOrderBy!] = [PRIMARY_KEY_ASC]
    ): TestPrimariesEdge
  }

  """
  All input for the \`deleteUserByEmail\` mutation.
  """
  input DeleteUserByEmailInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    email: String!
  }

  """
  All input for the \`deleteUserByFirstNameAndLastName\` mutation.
  """
  input DeleteUserByFirstNameAndLastNameInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    firstName: String!
    lastName: String!
  }

  """
  All input for the \`deleteUserByNodeId\` mutation.
  """
  input DeleteUserByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`User\` to be deleted.
    """
    nodeId: ID!
  }

  """
  All input for the \`deleteUserByUserProfileId\` mutation.
  """
  input DeleteUserByUserProfileIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    userProfileId: UUID!
  }

  """
  All input for the \`deleteUser\` mutation.
  """
  input DeleteUserInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    id: UUID!
  }

  """
  The output of our delete \`User\` mutation.
  """
  type DeleteUserPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`User\` that was deleted by this mutation.
    """
    user: User
    deletedUserNodeId: ID

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    Reads a single \`UserProfile\` that is related to this \`User\`.
    """
    profile: UserProfile!

    """
    An edge for our \`User\`. May be used by Relay 1.
    """
    userEdge(
      """
      The method to use when ordering \`User\`.
      """
      orderBy: [UsersOrderBy!] = [PRIMARY_KEY_ASC]
    ): UsersEdge
  }

  """
  All input for the \`deleteUserProfileByNodeId\` mutation.
  """
  input DeleteUserProfileByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`UserProfile\` to be deleted.
    """
    nodeId: ID!
  }

  """
  All input for the \`deleteUserProfile\` mutation.
  """
  input DeleteUserProfileInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    id: UUID!
  }

  """
  The output of our delete \`UserProfile\` mutation.
  """
  type DeleteUserProfilePayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`UserProfile\` that was deleted by this mutation.
    """
    userProfile: UserProfile
    deletedUserProfileNodeId: ID

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`UserProfile\`. May be used by Relay 1.
    """
    userProfileEdge(
      """
      The method to use when ordering \`UserProfile\`.
      """
      orderBy: [UserProfilesOrderBy!] = [PRIMARY_KEY_ASC]
    ): UserProfilesEdge
  }

  """
  A filter to be used against Int fields. All fields are combined with a logical ‘and.’
  """
  input IntFilter {
    """
    Is null (if \`true\` is specified) or is not null (if \`false\` is specified).
    """
    isNull: Boolean

    """
    Equal to the specified value.
    """
    equalTo: Int

    """
    Not equal to the specified value.
    """
    notEqualTo: Int

    """
    Not equal to the specified value, treating null like an ordinary value.
    """
    distinctFrom: Int

    """
    Equal to the specified value, treating null like an ordinary value.
    """
    notDistinctFrom: Int

    """
    Included in the specified list.
    """
    in: [Int!]

    """
    Not included in the specified list.
    """
    notIn: [Int!]

    """
    Less than the specified value.
    """
    lessThan: Int

    """
    Less than or equal to the specified value.
    """
    lessThanOrEqualTo: Int

    """
    Greater than the specified value.
    """
    greaterThan: Int

    """
    Greater than or equal to the specified value.
    """
    greaterThanOrEqualTo: Int
  }

  type ListenPayload {
    """
    Our root query field type. Allows us to run any query from our subscription payload.
    """
    query: Query
    relatedNode: Node
    relatedNodeId: ID
  }

  type Migration implements Node {
    """
    A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    """
    nodeId: ID!
    id: Int!
    timestamp: BigInt!
    name: String!
  }

  """
  A condition to be used against \`Migration\` object types. All fields are tested
  for equality and combined with a logical ‘and.’
  """
  input MigrationCondition {
    """
    Checks for equality with the object’s \`id\` field.
    """
    id: Int

    """
    Checks for equality with the object’s \`timestamp\` field.
    """
    timestamp: BigInt

    """
    Checks for equality with the object’s \`name\` field.
    """
    name: String
  }

  """
  A filter to be used against \`Migration\` object types. All fields are combined with a logical ‘and.’
  """
  input MigrationFilter {
    """
    Filter by the object’s \`id\` field.
    """
    id: IntFilter

    """
    Filter by the object’s \`timestamp\` field.
    """
    timestamp: BigIntFilter

    """
    Filter by the object’s \`name\` field.
    """
    name: StringFilter

    """
    Checks for all expressions in this list.
    """
    and: [MigrationFilter!]

    """
    Checks for any expressions in this list.
    """
    or: [MigrationFilter!]

    """
    Negates the expression.
    """
    not: MigrationFilter
  }

  """
  An input for mutations affecting \`Migration\`
  """
  input MigrationInput {
    id: Int
    timestamp: BigInt!
    name: String!
  }

  """
  Represents an update to a \`Migration\`. Fields that are set will be updated.
  """
  input MigrationPatch {
    id: Int
    timestamp: BigInt
    name: String
  }

  """
  A connection to a list of \`Migration\` values.
  """
  type MigrationsConnection {
    """
    A list of \`Migration\` objects.
    """
    nodes: [Migration!]!

    """
    A list of edges which contains the \`Migration\` and cursor to aid in pagination.
    """
    edges: [MigrationsEdge!]!

    """
    Information to aid in pagination.
    """
    pageInfo: PageInfo!

    """
    The count of *all* \`Migration\` you could get from the connection.
    """
    totalCount: Int!
  }

  """
  A \`Migration\` edge in the connection.
  """
  type MigrationsEdge {
    """
    A cursor for use in pagination.
    """
    cursor: Cursor

    """
    The \`Migration\` at the end of the edge.
    """
    node: Migration!
  }

  """
  Methods to use when ordering \`Migration\`.
  """
  enum MigrationsOrderBy {
    NATURAL
    ID_ASC
    ID_DESC
    TIMESTAMP_ASC
    TIMESTAMP_DESC
    NAME_ASC
    NAME_DESC
    PRIMARY_KEY_ASC
    PRIMARY_KEY_DESC
  }

  """
  The root mutation type which contains root level fields which mutate data.
  """
  type Mutation {
    """
    Creates a single \`Account\`.
    """
    createAccount(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: CreateAccountInput!
    ): CreateAccountPayload

    """
    Creates a single \`Migration\`.
    """
    createMigration(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: CreateMigrationInput!
    ): CreateMigrationPayload

    """
    Creates a single \`TestMultiplePrimary\`.
    """
    createTestMultiplePrimary(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: CreateTestMultiplePrimaryInput!
    ): CreateTestMultiplePrimaryPayload

    """
    Creates a single \`TestPrimary\`.
    """
    createTestPrimary(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: CreateTestPrimaryInput!
    ): CreateTestPrimaryPayload

    """
    Creates a single \`User\`.
    """
    createUser(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: CreateUserInput!
    ): CreateUserPayload

    """
    Creates a single \`UserProfile\`.
    """
    createUserProfile(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: CreateUserProfileInput!
    ): CreateUserProfilePayload

    """
    Updates a single \`Account\` using its globally unique id and a patch.
    """
    updateAccountByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateAccountByNodeIdInput!
    ): UpdateAccountPayload

    """
    Updates a single \`Account\` using a unique key and a patch.
    """
    updateAccount(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateAccountInput!
    ): UpdateAccountPayload

    """
    Updates a single \`Migration\` using its globally unique id and a patch.
    """
    updateMigrationByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateMigrationByNodeIdInput!
    ): UpdateMigrationPayload

    """
    Updates a single \`Migration\` using a unique key and a patch.
    """
    updateMigration(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateMigrationInput!
    ): UpdateMigrationPayload

    """
    Updates a single \`TestMultiplePrimary\` using its globally unique id and a patch.
    """
    updateTestMultiplePrimaryByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateTestMultiplePrimaryByNodeIdInput!
    ): UpdateTestMultiplePrimaryPayload

    """
    Updates a single \`TestMultiplePrimary\` using a unique key and a patch.
    """
    updateTestMultiplePrimary(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateTestMultiplePrimaryInput!
    ): UpdateTestMultiplePrimaryPayload

    """
    Updates a single \`TestPrimary\` using its globally unique id and a patch.
    """
    updateTestPrimaryByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateTestPrimaryByNodeIdInput!
    ): UpdateTestPrimaryPayload

    """
    Updates a single \`TestPrimary\` using a unique key and a patch.
    """
    updateTestPrimary(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateTestPrimaryInput!
    ): UpdateTestPrimaryPayload

    """
    Updates a single \`User\` using its globally unique id and a patch.
    """
    updateUserByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateUserByNodeIdInput!
    ): UpdateUserPayload

    """
    Updates a single \`User\` using a unique key and a patch.
    """
    updateUser(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateUserInput!
    ): UpdateUserPayload

    """
    Updates a single \`User\` using a unique key and a patch.
    """
    updateUserByEmail(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateUserByEmailInput!
    ): UpdateUserPayload

    """
    Updates a single \`User\` using a unique key and a patch.
    """
    updateUserByFirstNameAndLastName(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateUserByFirstNameAndLastNameInput!
    ): UpdateUserPayload

    """
    Updates a single \`User\` using a unique key and a patch.
    """
    updateUserByUserProfileId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateUserByUserProfileIdInput!
    ): UpdateUserPayload

    """
    Updates a single \`UserProfile\` using its globally unique id and a patch.
    """
    updateUserProfileByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateUserProfileByNodeIdInput!
    ): UpdateUserProfilePayload

    """
    Updates a single \`UserProfile\` using a unique key and a patch.
    """
    updateUserProfile(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UpdateUserProfileInput!
    ): UpdateUserProfilePayload

    """
    Deletes a single \`Account\` using its globally unique id.
    """
    deleteAccountByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteAccountByNodeIdInput!
    ): DeleteAccountPayload

    """
    Deletes a single \`Account\` using a unique key.
    """
    deleteAccount(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteAccountInput!
    ): DeleteAccountPayload

    """
    Deletes a single \`Migration\` using its globally unique id.
    """
    deleteMigrationByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteMigrationByNodeIdInput!
    ): DeleteMigrationPayload

    """
    Deletes a single \`Migration\` using a unique key.
    """
    deleteMigration(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteMigrationInput!
    ): DeleteMigrationPayload

    """
    Deletes a single \`TestMultiplePrimary\` using its globally unique id.
    """
    deleteTestMultiplePrimaryByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteTestMultiplePrimaryByNodeIdInput!
    ): DeleteTestMultiplePrimaryPayload

    """
    Deletes a single \`TestMultiplePrimary\` using a unique key.
    """
    deleteTestMultiplePrimary(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteTestMultiplePrimaryInput!
    ): DeleteTestMultiplePrimaryPayload

    """
    Deletes a single \`TestPrimary\` using its globally unique id.
    """
    deleteTestPrimaryByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteTestPrimaryByNodeIdInput!
    ): DeleteTestPrimaryPayload

    """
    Deletes a single \`TestPrimary\` using a unique key.
    """
    deleteTestPrimary(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteTestPrimaryInput!
    ): DeleteTestPrimaryPayload

    """
    Deletes a single \`User\` using its globally unique id.
    """
    deleteUserByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteUserByNodeIdInput!
    ): DeleteUserPayload

    """
    Deletes a single \`User\` using a unique key.
    """
    deleteUser(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteUserInput!
    ): DeleteUserPayload

    """
    Deletes a single \`User\` using a unique key.
    """
    deleteUserByEmail(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteUserByEmailInput!
    ): DeleteUserPayload

    """
    Deletes a single \`User\` using a unique key.
    """
    deleteUserByFirstNameAndLastName(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteUserByFirstNameAndLastNameInput!
    ): DeleteUserPayload

    """
    Deletes a single \`User\` using a unique key.
    """
    deleteUserByUserProfileId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteUserByUserProfileIdInput!
    ): DeleteUserPayload

    """
    Deletes a single \`UserProfile\` using its globally unique id.
    """
    deleteUserProfileByNodeId(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteUserProfileByNodeIdInput!
    ): DeleteUserProfilePayload

    """
    Deletes a single \`UserProfile\` using a unique key.
    """
    deleteUserProfile(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: DeleteUserProfileInput!
    ): DeleteUserProfilePayload
    userCustomMutation(
      """
      The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
      """
      input: UserCustomMutationInput!
    ): UserCustomMutationPayload
  }

  """
  An object with a globally unique \`ID\`.
  """
  interface Node {
    """
    A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    """
    nodeId: ID!
  }

  """
  Information about pagination in a connection.
  """
  type PageInfo {
    """
    When paginating forwards, are there more items?
    """
    hasNextPage: Boolean!

    """
    When paginating backwards, are there more items?
    """
    hasPreviousPage: Boolean!

    """
    When paginating backwards, the cursor to continue.
    """
    startCursor: Cursor

    """
    When paginating forwards, the cursor to continue.
    """
    endCursor: Cursor
  }

  """
  The root query type which gives access points into the data universe.
  """
  type Query implements Node {
    """
    Exposes the root query type nested one level down. This is helpful for Relay 1
    which can only query top level fields if they are in a particular form.
    """
    query: Query!

    """
    The root query type must be a \`Node\` to work well with Relay 1 mutations. This just resolves to \`query\`.
    """
    nodeId: ID!

    """
    Fetches an object given its globally unique \`ID\`.
    """
    node(
      """
      The globally unique \`ID\`.
      """
      nodeId: ID!
    ): Node

    """
    Reads and enables pagination through a set of \`Account\`.
    """
    accounts(
      """
      Only read the first \`n\` values of the set.
      """
      first: Int

      """
      Only read the last \`n\` values of the set.
      """
      last: Int

      """
      Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
      based pagination. May not be used with \`last\`.
      """
      offset: Int

      """
      Read all values in the set before (above) this cursor.
      """
      before: Cursor

      """
      Read all values in the set after (below) this cursor.
      """
      after: Cursor

      """
      The method to use when ordering \`Account\`.
      """
      orderBy: [AccountsOrderBy!] = [PRIMARY_KEY_ASC]

      """
      A condition to be used in determining which values should be returned by the collection.
      """
      condition: AccountCondition

      """
      A filter to be used in determining which values should be returned by the collection.
      """
      filter: AccountFilter
    ): AccountsConnection

    """
    Reads and enables pagination through a set of \`Migration\`.
    """
    migrations(
      """
      Only read the first \`n\` values of the set.
      """
      first: Int

      """
      Only read the last \`n\` values of the set.
      """
      last: Int

      """
      Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
      based pagination. May not be used with \`last\`.
      """
      offset: Int

      """
      Read all values in the set before (above) this cursor.
      """
      before: Cursor

      """
      Read all values in the set after (below) this cursor.
      """
      after: Cursor

      """
      The method to use when ordering \`Migration\`.
      """
      orderBy: [MigrationsOrderBy!] = [PRIMARY_KEY_ASC]

      """
      A condition to be used in determining which values should be returned by the collection.
      """
      condition: MigrationCondition

      """
      A filter to be used in determining which values should be returned by the collection.
      """
      filter: MigrationFilter
    ): MigrationsConnection

    """
    Reads and enables pagination through a set of \`TestMultiplePrimary\`.
    """
    testMultiplePrimaries(
      """
      Only read the first \`n\` values of the set.
      """
      first: Int

      """
      Only read the last \`n\` values of the set.
      """
      last: Int

      """
      Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
      based pagination. May not be used with \`last\`.
      """
      offset: Int

      """
      Read all values in the set before (above) this cursor.
      """
      before: Cursor

      """
      Read all values in the set after (below) this cursor.
      """
      after: Cursor

      """
      The method to use when ordering \`TestMultiplePrimary\`.
      """
      orderBy: [TestMultiplePrimariesOrderBy!] = [PRIMARY_KEY_ASC]

      """
      A condition to be used in determining which values should be returned by the collection.
      """
      condition: TestMultiplePrimaryCondition

      """
      A filter to be used in determining which values should be returned by the collection.
      """
      filter: TestMultiplePrimaryFilter
    ): TestMultiplePrimariesConnection

    """
    Reads and enables pagination through a set of \`TestPrimary\`.
    """
    testPrimaries(
      """
      Only read the first \`n\` values of the set.
      """
      first: Int

      """
      Only read the last \`n\` values of the set.
      """
      last: Int

      """
      Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
      based pagination. May not be used with \`last\`.
      """
      offset: Int

      """
      Read all values in the set before (above) this cursor.
      """
      before: Cursor

      """
      Read all values in the set after (below) this cursor.
      """
      after: Cursor

      """
      The method to use when ordering \`TestPrimary\`.
      """
      orderBy: [TestPrimariesOrderBy!] = [PRIMARY_KEY_ASC]

      """
      A condition to be used in determining which values should be returned by the collection.
      """
      condition: TestPrimaryCondition

      """
      A filter to be used in determining which values should be returned by the collection.
      """
      filter: TestPrimaryFilter
    ): TestPrimariesConnection

    """
    Reads and enables pagination through a set of \`User\`.
    """
    users(
      """
      Only read the first \`n\` values of the set.
      """
      first: Int

      """
      Only read the last \`n\` values of the set.
      """
      last: Int

      """
      Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
      based pagination. May not be used with \`last\`.
      """
      offset: Int

      """
      Read all values in the set before (above) this cursor.
      """
      before: Cursor

      """
      Read all values in the set after (below) this cursor.
      """
      after: Cursor

      """
      The method to use when ordering \`User\`.
      """
      orderBy: [UsersOrderBy!] = [PRIMARY_KEY_ASC]

      """
      A condition to be used in determining which values should be returned by the collection.
      """
      condition: UserCondition

      """
      A filter to be used in determining which values should be returned by the collection.
      """
      filter: UserFilter
    ): UsersConnection

    """
    Reads and enables pagination through a set of \`UserProfile\`.
    """
    userProfiles(
      """
      Only read the first \`n\` values of the set.
      """
      first: Int

      """
      Only read the last \`n\` values of the set.
      """
      last: Int

      """
      Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
      based pagination. May not be used with \`last\`.
      """
      offset: Int

      """
      Read all values in the set before (above) this cursor.
      """
      before: Cursor

      """
      Read all values in the set after (below) this cursor.
      """
      after: Cursor

      """
      The method to use when ordering \`UserProfile\`.
      """
      orderBy: [UserProfilesOrderBy!] = [PRIMARY_KEY_ASC]

      """
      A condition to be used in determining which values should be returned by the collection.
      """
      condition: UserProfileCondition

      """
      A filter to be used in determining which values should be returned by the collection.
      """
      filter: UserProfileFilter
    ): UserProfilesConnection
    account(id: UUID!): Account
    migration(id: Int!): Migration
    testMultiplePrimary(oneId: UUID!, twoId: UUID!): TestMultiplePrimary
    testPrimary(primary: UUID!): TestPrimary
    user(id: UUID!): User
    userByEmail(email: String!): User
    userByFirstNameAndLastName(firstName: String!, lastName: String!): User
    userByUserProfileId(userProfileId: UUID!): User
    userProfile(id: UUID!): UserProfile

    """
    Reads and enables pagination through a set of \`User\`.
    """
    userSearch(
      search: String

      """
      Only read the first \`n\` values of the set.
      """
      first: Int

      """
      Only read the last \`n\` values of the set.
      """
      last: Int

      """
      Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
      based pagination. May not be used with \`last\`.
      """
      offset: Int

      """
      Read all values in the set before (above) this cursor.
      """
      before: Cursor

      """
      Read all values in the set after (below) this cursor.
      """
      after: Cursor

      """
      A filter to be used in determining which values should be returned by the collection.
      """
      filter: UserFilter
    ): UsersConnection!

    """
    Reads a single \`Account\` using its globally unique \`ID\`.
    """
    accountByNodeId(
      """
      The globally unique \`ID\` to be used in selecting a single \`Account\`.
      """
      nodeId: ID!
    ): Account

    """
    Reads a single \`Migration\` using its globally unique \`ID\`.
    """
    migrationByNodeId(
      """
      The globally unique \`ID\` to be used in selecting a single \`Migration\`.
      """
      nodeId: ID!
    ): Migration

    """
    Reads a single \`TestMultiplePrimary\` using its globally unique \`ID\`.
    """
    testMultiplePrimaryByNodeId(
      """
      The globally unique \`ID\` to be used in selecting a single \`TestMultiplePrimary\`.
      """
      nodeId: ID!
    ): TestMultiplePrimary

    """
    Reads a single \`TestPrimary\` using its globally unique \`ID\`.
    """
    testPrimaryByNodeId(
      """
      The globally unique \`ID\` to be used in selecting a single \`TestPrimary\`.
      """
      nodeId: ID!
    ): TestPrimary

    """
    Reads a single \`User\` using its globally unique \`ID\`.
    """
    userByNodeId(
      """
      The globally unique \`ID\` to be used in selecting a single \`User\`.
      """
      nodeId: ID!
    ): User

    """
    Reads a single \`UserProfile\` using its globally unique \`ID\`.
    """
    userProfileByNodeId(
      """
      The globally unique \`ID\` to be used in selecting a single \`UserProfile\`.
      """
      nodeId: ID!
    ): UserProfile
  }

  """
  A filter to be used against String fields. All fields are combined with a logical ‘and.’
  """
  input StringFilter {
    """
    Is null (if \`true\` is specified) or is not null (if \`false\` is specified).
    """
    isNull: Boolean

    """
    Equal to the specified value.
    """
    equalTo: String

    """
    Not equal to the specified value.
    """
    notEqualTo: String

    """
    Not equal to the specified value, treating null like an ordinary value.
    """
    distinctFrom: String

    """
    Equal to the specified value, treating null like an ordinary value.
    """
    notDistinctFrom: String

    """
    Included in the specified list.
    """
    in: [String!]

    """
    Not included in the specified list.
    """
    notIn: [String!]

    """
    Less than the specified value.
    """
    lessThan: String

    """
    Less than or equal to the specified value.
    """
    lessThanOrEqualTo: String

    """
    Greater than the specified value.
    """
    greaterThan: String

    """
    Greater than or equal to the specified value.
    """
    greaterThanOrEqualTo: String

    """
    Contains the specified string (case-sensitive).
    """
    includes: String

    """
    Does not contain the specified string (case-sensitive).
    """
    notIncludes: String

    """
    Contains the specified string (case-insensitive).
    """
    includesInsensitive: String

    """
    Does not contain the specified string (case-insensitive).
    """
    notIncludesInsensitive: String

    """
    Starts with the specified string (case-sensitive).
    """
    startsWith: String

    """
    Does not start with the specified string (case-sensitive).
    """
    notStartsWith: String

    """
    Starts with the specified string (case-insensitive).
    """
    startsWithInsensitive: String

    """
    Does not start with the specified string (case-insensitive).
    """
    notStartsWithInsensitive: String

    """
    Ends with the specified string (case-sensitive).
    """
    endsWith: String

    """
    Does not end with the specified string (case-sensitive).
    """
    notEndsWith: String

    """
    Ends with the specified string (case-insensitive).
    """
    endsWithInsensitive: String

    """
    Does not end with the specified string (case-insensitive).
    """
    notEndsWithInsensitive: String

    """
    Matches the specified pattern (case-sensitive). An underscore (_) matches any
    single character; a percent sign (%) matches any sequence of zero or more characters.
    """
    like: String

    """
    Does not match the specified pattern (case-sensitive). An underscore (_)
    matches any single character; a percent sign (%) matches any sequence of zero
    or more characters.
    """
    notLike: String

    """
    Matches the specified pattern (case-insensitive). An underscore (_) matches
    any single character; a percent sign (%) matches any sequence of zero or more characters.
    """
    likeInsensitive: String

    """
    Does not match the specified pattern (case-insensitive). An underscore (_)
    matches any single character; a percent sign (%) matches any sequence of zero
    or more characters.
    """
    notLikeInsensitive: String

    """
    Matches the specified pattern using the SQL standard's definition of a regular expression.
    """
    similarTo: String

    """
    Does not match the specified pattern using the SQL standard's definition of a regular expression.
    """
    notSimilarTo: String
  }

  """
  The root subscription type: contains realtime events you can subscribe to with the \`subscription\` operation.
  """
  type Subscription {
    listen(topic: String!): ListenPayload!
  }

  """
  A connection to a list of \`TestMultiplePrimary\` values.
  """
  type TestMultiplePrimariesConnection {
    """
    A list of \`TestMultiplePrimary\` objects.
    """
    nodes: [TestMultiplePrimary!]!

    """
    A list of edges which contains the \`TestMultiplePrimary\` and cursor to aid in pagination.
    """
    edges: [TestMultiplePrimariesEdge!]!

    """
    Information to aid in pagination.
    """
    pageInfo: PageInfo!

    """
    The count of *all* \`TestMultiplePrimary\` you could get from the connection.
    """
    totalCount: Int!
  }

  """
  A \`TestMultiplePrimary\` edge in the connection.
  """
  type TestMultiplePrimariesEdge {
    """
    A cursor for use in pagination.
    """
    cursor: Cursor

    """
    The \`TestMultiplePrimary\` at the end of the edge.
    """
    node: TestMultiplePrimary!
  }

  """
  Methods to use when ordering \`TestMultiplePrimary\`.
  """
  enum TestMultiplePrimariesOrderBy {
    NATURAL
    ONE_ID_ASC
    ONE_ID_DESC
    TWO_ID_ASC
    TWO_ID_DESC
    CREATED_AT_ASC
    CREATED_AT_DESC
    UPDATED_AT_ASC
    UPDATED_AT_DESC
    PRIMARY_KEY_ASC
    PRIMARY_KEY_DESC
  }

  type TestMultiplePrimary implements Node {
    """
    A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    """
    nodeId: ID!
    oneId: UUID!
    twoId: UUID!
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  """
  A condition to be used against \`TestMultiplePrimary\` object types. All fields
  are tested for equality and combined with a logical ‘and.’
  """
  input TestMultiplePrimaryCondition {
    """
    Checks for equality with the object’s \`oneId\` field.
    """
    oneId: UUID

    """
    Checks for equality with the object’s \`twoId\` field.
    """
    twoId: UUID

    """
    Checks for equality with the object’s \`createdAt\` field.
    """
    createdAt: Datetime

    """
    Checks for equality with the object’s \`updatedAt\` field.
    """
    updatedAt: Datetime
  }

  """
  A filter to be used against \`TestMultiplePrimary\` object types. All fields are combined with a logical ‘and.’
  """
  input TestMultiplePrimaryFilter {
    """
    Filter by the object’s \`oneId\` field.
    """
    oneId: UUIDFilter

    """
    Filter by the object’s \`twoId\` field.
    """
    twoId: UUIDFilter

    """
    Filter by the object’s \`createdAt\` field.
    """
    createdAt: DatetimeFilter

    """
    Filter by the object’s \`updatedAt\` field.
    """
    updatedAt: DatetimeFilter

    """
    Checks for all expressions in this list.
    """
    and: [TestMultiplePrimaryFilter!]

    """
    Checks for any expressions in this list.
    """
    or: [TestMultiplePrimaryFilter!]

    """
    Negates the expression.
    """
    not: TestMultiplePrimaryFilter
  }

  """
  An input for mutations affecting \`TestMultiplePrimary\`
  """
  input TestMultiplePrimaryInput {
    oneId: UUID!
    twoId: UUID!
    createdAt: Datetime
    updatedAt: Datetime
  }

  """
  Represents an update to a \`TestMultiplePrimary\`. Fields that are set will be updated.
  """
  input TestMultiplePrimaryPatch {
    oneId: UUID
    twoId: UUID
    createdAt: Datetime
    updatedAt: Datetime
  }

  """
  A connection to a list of \`TestPrimary\` values.
  """
  type TestPrimariesConnection {
    """
    A list of \`TestPrimary\` objects.
    """
    nodes: [TestPrimary!]!

    """
    A list of edges which contains the \`TestPrimary\` and cursor to aid in pagination.
    """
    edges: [TestPrimariesEdge!]!

    """
    Information to aid in pagination.
    """
    pageInfo: PageInfo!

    """
    The count of *all* \`TestPrimary\` you could get from the connection.
    """
    totalCount: Int!
  }

  """
  A \`TestPrimary\` edge in the connection.
  """
  type TestPrimariesEdge {
    """
    A cursor for use in pagination.
    """
    cursor: Cursor

    """
    The \`TestPrimary\` at the end of the edge.
    """
    node: TestPrimary!
  }

  """
  Methods to use when ordering \`TestPrimary\`.
  """
  enum TestPrimariesOrderBy {
    NATURAL
    PRIMARY_ASC
    PRIMARY_DESC
    CREATED_AT_ASC
    CREATED_AT_DESC
    UPDATED_AT_ASC
    UPDATED_AT_DESC
    PRIMARY_KEY_ASC
    PRIMARY_KEY_DESC
  }

  type TestPrimary implements Node {
    """
    A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    """
    nodeId: ID!
    primary: UUID!
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  """
  A condition to be used against \`TestPrimary\` object types. All fields are tested
  for equality and combined with a logical ‘and.’
  """
  input TestPrimaryCondition {
    """
    Checks for equality with the object’s \`primary\` field.
    """
    primary: UUID

    """
    Checks for equality with the object’s \`createdAt\` field.
    """
    createdAt: Datetime

    """
    Checks for equality with the object’s \`updatedAt\` field.
    """
    updatedAt: Datetime
  }

  """
  A filter to be used against \`TestPrimary\` object types. All fields are combined with a logical ‘and.’
  """
  input TestPrimaryFilter {
    """
    Filter by the object’s \`primary\` field.
    """
    primary: UUIDFilter

    """
    Filter by the object’s \`createdAt\` field.
    """
    createdAt: DatetimeFilter

    """
    Filter by the object’s \`updatedAt\` field.
    """
    updatedAt: DatetimeFilter

    """
    Checks for all expressions in this list.
    """
    and: [TestPrimaryFilter!]

    """
    Checks for any expressions in this list.
    """
    or: [TestPrimaryFilter!]

    """
    Negates the expression.
    """
    not: TestPrimaryFilter
  }

  """
  An input for mutations affecting \`TestPrimary\`
  """
  input TestPrimaryInput {
    primary: UUID
    createdAt: Datetime
    updatedAt: Datetime
  }

  """
  Represents an update to a \`TestPrimary\`. Fields that are set will be updated.
  """
  input TestPrimaryPatch {
    primary: UUID
    createdAt: Datetime
    updatedAt: Datetime
  }

  """
  All input for the \`updateAccountByNodeId\` mutation.
  """
  input UpdateAccountByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`Account\` to be updated.
    """
    nodeId: ID!

    """
    An object where the defined keys will be set on the \`Account\` being updated.
    """
    patch: AccountPatch!
  }

  """
  All input for the \`updateAccount\` mutation.
  """
  input UpdateAccountInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`Account\` being updated.
    """
    patch: AccountPatch!
    id: UUID!
  }

  """
  The output of our update \`Account\` mutation.
  """
  type UpdateAccountPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`Account\` that was updated by this mutation.
    """
    account: Account

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    Reads a single \`User\` that is related to this \`Account\`.
    """
    user: User!

    """
    An edge for our \`Account\`. May be used by Relay 1.
    """
    accountEdge(
      """
      The method to use when ordering \`Account\`.
      """
      orderBy: [AccountsOrderBy!] = [PRIMARY_KEY_ASC]
    ): AccountsEdge
  }

  """
  All input for the \`updateMigrationByNodeId\` mutation.
  """
  input UpdateMigrationByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`Migration\` to be updated.
    """
    nodeId: ID!

    """
    An object where the defined keys will be set on the \`Migration\` being updated.
    """
    patch: MigrationPatch!
  }

  """
  All input for the \`updateMigration\` mutation.
  """
  input UpdateMigrationInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`Migration\` being updated.
    """
    patch: MigrationPatch!
    id: Int!
  }

  """
  The output of our update \`Migration\` mutation.
  """
  type UpdateMigrationPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`Migration\` that was updated by this mutation.
    """
    migration: Migration

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`Migration\`. May be used by Relay 1.
    """
    migrationEdge(
      """
      The method to use when ordering \`Migration\`.
      """
      orderBy: [MigrationsOrderBy!] = [PRIMARY_KEY_ASC]
    ): MigrationsEdge
  }

  """
  All input for the \`updateTestMultiplePrimaryByNodeId\` mutation.
  """
  input UpdateTestMultiplePrimaryByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`TestMultiplePrimary\` to be updated.
    """
    nodeId: ID!

    """
    An object where the defined keys will be set on the \`TestMultiplePrimary\` being updated.
    """
    patch: TestMultiplePrimaryPatch!
  }

  """
  All input for the \`updateTestMultiplePrimary\` mutation.
  """
  input UpdateTestMultiplePrimaryInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`TestMultiplePrimary\` being updated.
    """
    patch: TestMultiplePrimaryPatch!
    oneId: UUID!
    twoId: UUID!
  }

  """
  The output of our update \`TestMultiplePrimary\` mutation.
  """
  type UpdateTestMultiplePrimaryPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`TestMultiplePrimary\` that was updated by this mutation.
    """
    testMultiplePrimary: TestMultiplePrimary

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`TestMultiplePrimary\`. May be used by Relay 1.
    """
    testMultiplePrimaryEdge(
      """
      The method to use when ordering \`TestMultiplePrimary\`.
      """
      orderBy: [TestMultiplePrimariesOrderBy!] = [PRIMARY_KEY_ASC]
    ): TestMultiplePrimariesEdge
  }

  """
  All input for the \`updateTestPrimaryByNodeId\` mutation.
  """
  input UpdateTestPrimaryByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`TestPrimary\` to be updated.
    """
    nodeId: ID!

    """
    An object where the defined keys will be set on the \`TestPrimary\` being updated.
    """
    patch: TestPrimaryPatch!
  }

  """
  All input for the \`updateTestPrimary\` mutation.
  """
  input UpdateTestPrimaryInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`TestPrimary\` being updated.
    """
    patch: TestPrimaryPatch!
    primary: UUID!
  }

  """
  The output of our update \`TestPrimary\` mutation.
  """
  type UpdateTestPrimaryPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`TestPrimary\` that was updated by this mutation.
    """
    testPrimary: TestPrimary

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`TestPrimary\`. May be used by Relay 1.
    """
    testPrimaryEdge(
      """
      The method to use when ordering \`TestPrimary\`.
      """
      orderBy: [TestPrimariesOrderBy!] = [PRIMARY_KEY_ASC]
    ): TestPrimariesEdge
  }

  """
  All input for the \`updateUserByEmail\` mutation.
  """
  input UpdateUserByEmailInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`User\` being updated.
    """
    patch: UserPatch!
    email: String!
  }

  """
  All input for the \`updateUserByFirstNameAndLastName\` mutation.
  """
  input UpdateUserByFirstNameAndLastNameInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`User\` being updated.
    """
    patch: UserPatch!
    firstName: String!
    lastName: String!
  }

  """
  All input for the \`updateUserByNodeId\` mutation.
  """
  input UpdateUserByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`User\` to be updated.
    """
    nodeId: ID!

    """
    An object where the defined keys will be set on the \`User\` being updated.
    """
    patch: UserPatch!
  }

  """
  All input for the \`updateUserByUserProfileId\` mutation.
  """
  input UpdateUserByUserProfileIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`User\` being updated.
    """
    patch: UserPatch!
    userProfileId: UUID!
  }

  """
  All input for the \`updateUser\` mutation.
  """
  input UpdateUserInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`User\` being updated.
    """
    patch: UserPatch!
    id: UUID!
  }

  """
  The output of our update \`User\` mutation.
  """
  type UpdateUserPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`User\` that was updated by this mutation.
    """
    user: User

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    Reads a single \`UserProfile\` that is related to this \`User\`.
    """
    profile: UserProfile!

    """
    An edge for our \`User\`. May be used by Relay 1.
    """
    userEdge(
      """
      The method to use when ordering \`User\`.
      """
      orderBy: [UsersOrderBy!] = [PRIMARY_KEY_ASC]
    ): UsersEdge
  }

  """
  All input for the \`updateUserProfileByNodeId\` mutation.
  """
  input UpdateUserProfileByNodeIdInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    The globally unique \`ID\` which will identify a single \`UserProfile\` to be updated.
    """
    nodeId: ID!

    """
    An object where the defined keys will be set on the \`UserProfile\` being updated.
    """
    patch: UserProfilePatch!
  }

  """
  All input for the \`updateUserProfile\` mutation.
  """
  input UpdateUserProfileInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String

    """
    An object where the defined keys will be set on the \`UserProfile\` being updated.
    """
    patch: UserProfilePatch!
    id: UUID!
  }

  """
  The output of our update \`UserProfile\` mutation.
  """
  type UpdateUserProfilePayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String

    """
    The \`UserProfile\` that was updated by this mutation.
    """
    userProfile: UserProfile

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    An edge for our \`UserProfile\`. May be used by Relay 1.
    """
    userProfileEdge(
      """
      The method to use when ordering \`UserProfile\`.
      """
      orderBy: [UserProfilesOrderBy!] = [PRIMARY_KEY_ASC]
    ): UserProfilesEdge
  }

  type User implements Node {
    """
    A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    """
    nodeId: ID!
    id: UUID!
    email: String!
    password: String
    firstName: String
    lastName: String
    lastLoggedAt: Datetime!
    createdAt: Datetime!
    updatedAt: Datetime!
    userProfileId: UUID!

    """
    Reads a single \`UserProfile\` that is related to this \`User\`.
    """
    profile: UserProfile!

    """
    Reads and enables pagination through a set of \`Account\`.
    """
    accounts(
      """
      Only read the first \`n\` values of the set.
      """
      first: Int

      """
      Only read the last \`n\` values of the set.
      """
      last: Int

      """
      Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
      based pagination. May not be used with \`last\`.
      """
      offset: Int

      """
      Read all values in the set before (above) this cursor.
      """
      before: Cursor

      """
      Read all values in the set after (below) this cursor.
      """
      after: Cursor

      """
      The method to use when ordering \`Account\`.
      """
      orderBy: [AccountsOrderBy!] = [PRIMARY_KEY_ASC]

      """
      A condition to be used in determining which values should be returned by the collection.
      """
      condition: AccountCondition

      """
      A filter to be used in determining which values should be returned by the collection.
      """
      filter: AccountFilter
    ): AccountsConnection!
  }

  """
  A condition to be used against \`User\` object types. All fields are tested for equality and combined with a logical ‘and.’
  """
  input UserCondition {
    """
    Checks for equality with the object’s \`id\` field.
    """
    id: UUID

    """
    Checks for equality with the object’s \`email\` field.
    """
    email: String

    """
    Checks for equality with the object’s \`password\` field.
    """
    password: String

    """
    Checks for equality with the object’s \`firstName\` field.
    """
    firstName: String

    """
    Checks for equality with the object’s \`lastName\` field.
    """
    lastName: String

    """
    Checks for equality with the object’s \`lastLoggedAt\` field.
    """
    lastLoggedAt: Datetime

    """
    Checks for equality with the object’s \`createdAt\` field.
    """
    createdAt: Datetime

    """
    Checks for equality with the object’s \`updatedAt\` field.
    """
    updatedAt: Datetime

    """
    Checks for equality with the object’s \`userProfileId\` field.
    """
    userProfileId: UUID
  }

  """
  All input for the \`userCustomMutation\` mutation.
  """
  input UserCustomMutationInput {
    """
    An arbitrary string value with no semantic meaning. Will be included in the
    payload verbatim. May be used to track mutations by the client.
    """
    clientMutationId: String
    teamId: Int!
  }

  """
  The output of our \`userCustomMutation\` mutation.
  """
  type UserCustomMutationPayload {
    """
    The exact same \`clientMutationId\` that was provided in the mutation input,
    unchanged and unused. May be used by a client to track mutations.
    """
    clientMutationId: String
    user: User

    """
    Our root query field type. Allows us to run any query from our mutation payload.
    """
    query: Query

    """
    Reads a single \`UserProfile\` that is related to this \`User\`.
    """
    profile: UserProfile!

    """
    An edge for our \`User\`. May be used by Relay 1.
    """
    userEdge(
      """
      The method to use when ordering \`User\`.
      """
      orderBy: [UsersOrderBy!] = [PRIMARY_KEY_ASC]
    ): UsersEdge
  }

  """
  A filter to be used against \`User\` object types. All fields are combined with a logical ‘and.’
  """
  input UserFilter {
    """
    Filter by the object’s \`id\` field.
    """
    id: UUIDFilter

    """
    Filter by the object’s \`email\` field.
    """
    email: StringFilter

    """
    Filter by the object’s \`password\` field.
    """
    password: StringFilter

    """
    Filter by the object’s \`firstName\` field.
    """
    firstName: StringFilter

    """
    Filter by the object’s \`lastName\` field.
    """
    lastName: StringFilter

    """
    Filter by the object’s \`lastLoggedAt\` field.
    """
    lastLoggedAt: DatetimeFilter

    """
    Filter by the object’s \`createdAt\` field.
    """
    createdAt: DatetimeFilter

    """
    Filter by the object’s \`updatedAt\` field.
    """
    updatedAt: DatetimeFilter

    """
    Filter by the object’s \`userProfileId\` field.
    """
    userProfileId: UUIDFilter

    """
    Checks for all expressions in this list.
    """
    and: [UserFilter!]

    """
    Checks for any expressions in this list.
    """
    or: [UserFilter!]

    """
    Negates the expression.
    """
    not: UserFilter
  }

  """
  An input for mutations affecting \`User\`
  """
  input UserInput {
    id: UUID
    email: String!
    password: String
    firstName: String
    lastName: String
    lastLoggedAt: Datetime!
    createdAt: Datetime
    updatedAt: Datetime
    userProfileId: UUID!
  }

  """
  Represents an update to a \`User\`. Fields that are set will be updated.
  """
  input UserPatch {
    id: UUID
    email: String
    password: String
    firstName: String
    lastName: String
    lastLoggedAt: Datetime
    createdAt: Datetime
    updatedAt: Datetime
    userProfileId: UUID
  }

  type UserProfile implements Node {
    """
    A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    """
    nodeId: ID!
    id: UUID!
    picture: String!
    createdAt: Datetime!
    updatedAt: Datetime!

    """
    Reads a single \`User\` that is related to this \`UserProfile\`.
    """
    user: User
  }

  """
  A condition to be used against \`UserProfile\` object types. All fields are tested
  for equality and combined with a logical ‘and.’
  """
  input UserProfileCondition {
    """
    Checks for equality with the object’s \`id\` field.
    """
    id: UUID

    """
    Checks for equality with the object’s \`picture\` field.
    """
    picture: String

    """
    Checks for equality with the object’s \`createdAt\` field.
    """
    createdAt: Datetime

    """
    Checks for equality with the object’s \`updatedAt\` field.
    """
    updatedAt: Datetime
  }

  """
  A filter to be used against \`UserProfile\` object types. All fields are combined with a logical ‘and.’
  """
  input UserProfileFilter {
    """
    Filter by the object’s \`id\` field.
    """
    id: UUIDFilter

    """
    Filter by the object’s \`picture\` field.
    """
    picture: StringFilter

    """
    Filter by the object’s \`createdAt\` field.
    """
    createdAt: DatetimeFilter

    """
    Filter by the object’s \`updatedAt\` field.
    """
    updatedAt: DatetimeFilter

    """
    Checks for all expressions in this list.
    """
    and: [UserProfileFilter!]

    """
    Checks for any expressions in this list.
    """
    or: [UserProfileFilter!]

    """
    Negates the expression.
    """
    not: UserProfileFilter
  }

  """
  An input for mutations affecting \`UserProfile\`
  """
  input UserProfileInput {
    id: UUID
    picture: String!
    createdAt: Datetime
    updatedAt: Datetime
  }

  """
  Represents an update to a \`UserProfile\`. Fields that are set will be updated.
  """
  input UserProfilePatch {
    id: UUID
    picture: String
    createdAt: Datetime
    updatedAt: Datetime
  }

  """
  A connection to a list of \`UserProfile\` values.
  """
  type UserProfilesConnection {
    """
    A list of \`UserProfile\` objects.
    """
    nodes: [UserProfile!]!

    """
    A list of edges which contains the \`UserProfile\` and cursor to aid in pagination.
    """
    edges: [UserProfilesEdge!]!

    """
    Information to aid in pagination.
    """
    pageInfo: PageInfo!

    """
    The count of *all* \`UserProfile\` you could get from the connection.
    """
    totalCount: Int!
  }

  """
  A \`UserProfile\` edge in the connection.
  """
  type UserProfilesEdge {
    """
    A cursor for use in pagination.
    """
    cursor: Cursor

    """
    The \`UserProfile\` at the end of the edge.
    """
    node: UserProfile!
  }

  """
  Methods to use when ordering \`UserProfile\`.
  """
  enum UserProfilesOrderBy {
    NATURAL
    ID_ASC
    ID_DESC
    PICTURE_ASC
    PICTURE_DESC
    CREATED_AT_ASC
    CREATED_AT_DESC
    UPDATED_AT_ASC
    UPDATED_AT_DESC
    PRIMARY_KEY_ASC
    PRIMARY_KEY_DESC
  }

  """
  A connection to a list of \`User\` values.
  """
  type UsersConnection {
    """
    A list of \`User\` objects.
    """
    nodes: [User!]!

    """
    A list of edges which contains the \`User\` and cursor to aid in pagination.
    """
    edges: [UsersEdge!]!

    """
    Information to aid in pagination.
    """
    pageInfo: PageInfo!

    """
    The count of *all* \`User\` you could get from the connection.
    """
    totalCount: Int!
  }

  """
  A \`User\` edge in the connection.
  """
  type UsersEdge {
    """
    A cursor for use in pagination.
    """
    cursor: Cursor

    """
    The \`User\` at the end of the edge.
    """
    node: User!
  }

  """
  Methods to use when ordering \`User\`.
  """
  enum UsersOrderBy {
    NATURAL
    ID_ASC
    ID_DESC
    EMAIL_ASC
    EMAIL_DESC
    PASSWORD_ASC
    PASSWORD_DESC
    FIRST_NAME_ASC
    FIRST_NAME_DESC
    LAST_NAME_ASC
    LAST_NAME_DESC
    LAST_LOGGED_AT_ASC
    LAST_LOGGED_AT_DESC
    CREATED_AT_ASC
    CREATED_AT_DESC
    UPDATED_AT_ASC
    UPDATED_AT_DESC
    USER_PROFILE_ID_ASC
    USER_PROFILE_ID_DESC
    PRIMARY_KEY_ASC
    PRIMARY_KEY_DESC
  }

  """
  A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122).
  """
  scalar UUID

  """
  A filter to be used against UUID fields. All fields are combined with a logical ‘and.’
  """
  input UUIDFilter {
    """
    Is null (if \`true\` is specified) or is not null (if \`false\` is specified).
    """
    isNull: Boolean

    """
    Equal to the specified value.
    """
    equalTo: UUID

    """
    Not equal to the specified value.
    """
    notEqualTo: UUID

    """
    Not equal to the specified value, treating null like an ordinary value.
    """
    distinctFrom: UUID

    """
    Equal to the specified value, treating null like an ordinary value.
    """
    notDistinctFrom: UUID

    """
    Included in the specified list.
    """
    in: [UUID!]

    """
    Not included in the specified list.
    """
    notIn: [UUID!]

    """
    Less than the specified value.
    """
    lessThan: UUID

    """
    Less than or equal to the specified value.
    """
    lessThanOrEqualTo: UUID

    """
    Greater than the specified value.
    """
    greaterThan: UUID

    """
    Greater than or equal to the specified value.
    """
    greaterThanOrEqualTo: UUID
  }
`;

export default buildSchema(sdl);

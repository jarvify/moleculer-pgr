import * as MoleculerTs from 'moleculer-ts';
import * as Broker from './moleculer';
import * as Services from './services.types';

export interface ServiceBroker {
  call<T extends ServiceActionNames>(
    actionName: T,
    params: GetCallParams[T],
    opts?: Broker.CallingOptions,
  ): PromiseLike<GetCallReturn[T]>;

  emit<T extends ServiceEventNames>(
    eventName: T,
    payload: GetEmitParams[T],
    groups?: ServiceNamesEmitGroup,
  ): void;

  broadcast: ServiceBroker['emit'];
  broadcastLocal: ServiceBroker['emit'];
}

type GetCallParams = {
  'db.countAccounts': Services.DbServiceTypes.Actions[0]['in'];
  'db.firstAccounts': Services.DbServiceTypes.Actions[1]['in'];
  'db.findAccounts': Services.DbServiceTypes.Actions[2]['in'];
  'db.accounts': Services.DbServiceTypes.Actions[3]['in'];
  'db.countMigrations': Services.DbServiceTypes.Actions[4]['in'];
  'db.firstMigrations': Services.DbServiceTypes.Actions[5]['in'];
  'db.findMigrations': Services.DbServiceTypes.Actions[6]['in'];
  'db.migrations': Services.DbServiceTypes.Actions[7]['in'];
  'db.countUsers': Services.DbServiceTypes.Actions[8]['in'];
  'db.firstUsers': Services.DbServiceTypes.Actions[9]['in'];
  'db.firstUsers.account': Services.DbServiceTypes.Actions[10]['in'];
  'db.firstUsers.profile': Services.DbServiceTypes.Actions[11]['in'];
  'db.findUsers': Services.DbServiceTypes.Actions[12]['in'];
  'db.users': Services.DbServiceTypes.Actions[13]['in'];
  'db.countUserProfiles': Services.DbServiceTypes.Actions[14]['in'];
  'db.firstUserProfiles': Services.DbServiceTypes.Actions[15]['in'];
  'db.firstUserProfiles.user': Services.DbServiceTypes.Actions[16]['in'];
  'db.findUserProfiles': Services.DbServiceTypes.Actions[17]['in'];
  'db.userProfiles': Services.DbServiceTypes.Actions[18]['in'];
  'db.account': Services.DbServiceTypes.Actions[19]['in'];
  'db.migration': Services.DbServiceTypes.Actions[20]['in'];
  'db.user.account': Services.DbServiceTypes.Actions[21]['in'];
  'db.user.profile': Services.DbServiceTypes.Actions[22]['in'];
  'db.user': Services.DbServiceTypes.Actions[23]['in'];
  'db.userByEmail.account': Services.DbServiceTypes.Actions[24]['in'];
  'db.userByEmail.profile': Services.DbServiceTypes.Actions[25]['in'];
  'db.userByEmail': Services.DbServiceTypes.Actions[26]['in'];
  'db.userByFirstNameAndLastName.account': Services.DbServiceTypes.Actions[27]['in'];
  'db.userByFirstNameAndLastName.profile': Services.DbServiceTypes.Actions[28]['in'];
  'db.userByFirstNameAndLastName': Services.DbServiceTypes.Actions[29]['in'];
  'db.userByUserProfileId.account': Services.DbServiceTypes.Actions[30]['in'];
  'db.userByUserProfileId.profile': Services.DbServiceTypes.Actions[31]['in'];
  'db.userByUserProfileId': Services.DbServiceTypes.Actions[32]['in'];
  'db.userProfile.user': Services.DbServiceTypes.Actions[33]['in'];
  'db.userProfile': Services.DbServiceTypes.Actions[34]['in'];
  'db.countUserSearch': Services.DbServiceTypes.Actions[35]['in'];
  'db.firstUserSearch': Services.DbServiceTypes.Actions[36]['in'];
  'db.firstUserSearch.account': Services.DbServiceTypes.Actions[37]['in'];
  'db.firstUserSearch.profile': Services.DbServiceTypes.Actions[38]['in'];
  'db.findUserSearch': Services.DbServiceTypes.Actions[39]['in'];
  'db.userSearch': Services.DbServiceTypes.Actions[40]['in'];
  'db.createAccount': Services.DbServiceTypes.Actions[41]['in'];
  'db.createMigration': Services.DbServiceTypes.Actions[42]['in'];
  'db.createUser': Services.DbServiceTypes.Actions[43]['in'];
  'db.createUserProfile': Services.DbServiceTypes.Actions[44]['in'];
  'db.updateAccount': Services.DbServiceTypes.Actions[45]['in'];
  'db.updateMigration': Services.DbServiceTypes.Actions[46]['in'];
  'db.updateUser': Services.DbServiceTypes.Actions[47]['in'];
  'db.updateUserByEmail': Services.DbServiceTypes.Actions[48]['in'];
  'db.updateUserByFirstNameAndLastName': Services.DbServiceTypes.Actions[49]['in'];
  'db.updateUserByUserProfileId': Services.DbServiceTypes.Actions[50]['in'];
  'db.updateUserProfile': Services.DbServiceTypes.Actions[51]['in'];
  'db.deleteAccount': Services.DbServiceTypes.Actions[52]['in'];
  'db.deleteMigration': Services.DbServiceTypes.Actions[53]['in'];
  'db.deleteUser': Services.DbServiceTypes.Actions[54]['in'];
  'db.deleteUserByEmail': Services.DbServiceTypes.Actions[55]['in'];
  'db.deleteUserByFirstNameAndLastName': Services.DbServiceTypes.Actions[56]['in'];
  'db.deleteUserByUserProfileId': Services.DbServiceTypes.Actions[57]['in'];
  'db.deleteUserProfile': Services.DbServiceTypes.Actions[58]['in'];
};
type GetCallReturn = {
  'db.countAccounts': Services.DbServiceTypes.Actions[0]['out'];
  'db.firstAccounts': Services.DbServiceTypes.Actions[1]['out'];
  'db.findAccounts': Services.DbServiceTypes.Actions[2]['out'];
  'db.accounts': Services.DbServiceTypes.Actions[3]['out'];
  'db.countMigrations': Services.DbServiceTypes.Actions[4]['out'];
  'db.firstMigrations': Services.DbServiceTypes.Actions[5]['out'];
  'db.findMigrations': Services.DbServiceTypes.Actions[6]['out'];
  'db.migrations': Services.DbServiceTypes.Actions[7]['out'];
  'db.countUsers': Services.DbServiceTypes.Actions[8]['out'];
  'db.firstUsers': Services.DbServiceTypes.Actions[9]['out'];
  'db.firstUsers.account': Services.DbServiceTypes.Actions[10]['out'];
  'db.firstUsers.profile': Services.DbServiceTypes.Actions[11]['out'];
  'db.findUsers': Services.DbServiceTypes.Actions[12]['out'];
  'db.users': Services.DbServiceTypes.Actions[13]['out'];
  'db.countUserProfiles': Services.DbServiceTypes.Actions[14]['out'];
  'db.firstUserProfiles': Services.DbServiceTypes.Actions[15]['out'];
  'db.firstUserProfiles.user': Services.DbServiceTypes.Actions[16]['out'];
  'db.findUserProfiles': Services.DbServiceTypes.Actions[17]['out'];
  'db.userProfiles': Services.DbServiceTypes.Actions[18]['out'];
  'db.account': Services.DbServiceTypes.Actions[19]['out'];
  'db.migration': Services.DbServiceTypes.Actions[20]['out'];
  'db.user.account': Services.DbServiceTypes.Actions[21]['out'];
  'db.user.profile': Services.DbServiceTypes.Actions[22]['out'];
  'db.user': Services.DbServiceTypes.Actions[23]['out'];
  'db.userByEmail.account': Services.DbServiceTypes.Actions[24]['out'];
  'db.userByEmail.profile': Services.DbServiceTypes.Actions[25]['out'];
  'db.userByEmail': Services.DbServiceTypes.Actions[26]['out'];
  'db.userByFirstNameAndLastName.account': Services.DbServiceTypes.Actions[27]['out'];
  'db.userByFirstNameAndLastName.profile': Services.DbServiceTypes.Actions[28]['out'];
  'db.userByFirstNameAndLastName': Services.DbServiceTypes.Actions[29]['out'];
  'db.userByUserProfileId.account': Services.DbServiceTypes.Actions[30]['out'];
  'db.userByUserProfileId.profile': Services.DbServiceTypes.Actions[31]['out'];
  'db.userByUserProfileId': Services.DbServiceTypes.Actions[32]['out'];
  'db.userProfile.user': Services.DbServiceTypes.Actions[33]['out'];
  'db.userProfile': Services.DbServiceTypes.Actions[34]['out'];
  'db.countUserSearch': Services.DbServiceTypes.Actions[35]['out'];
  'db.firstUserSearch': Services.DbServiceTypes.Actions[36]['out'];
  'db.firstUserSearch.account': Services.DbServiceTypes.Actions[37]['out'];
  'db.firstUserSearch.profile': Services.DbServiceTypes.Actions[38]['out'];
  'db.findUserSearch': Services.DbServiceTypes.Actions[39]['out'];
  'db.userSearch': Services.DbServiceTypes.Actions[40]['out'];
  'db.createAccount': Services.DbServiceTypes.Actions[41]['out'];
  'db.createMigration': Services.DbServiceTypes.Actions[42]['out'];
  'db.createUser': Services.DbServiceTypes.Actions[43]['out'];
  'db.createUserProfile': Services.DbServiceTypes.Actions[44]['out'];
  'db.updateAccount': Services.DbServiceTypes.Actions[45]['out'];
  'db.updateMigration': Services.DbServiceTypes.Actions[46]['out'];
  'db.updateUser': Services.DbServiceTypes.Actions[47]['out'];
  'db.updateUserByEmail': Services.DbServiceTypes.Actions[48]['out'];
  'db.updateUserByFirstNameAndLastName': Services.DbServiceTypes.Actions[49]['out'];
  'db.updateUserByUserProfileId': Services.DbServiceTypes.Actions[50]['out'];
  'db.updateUserProfile': Services.DbServiceTypes.Actions[51]['out'];
  'db.deleteAccount': Services.DbServiceTypes.Actions[52]['out'];
  'db.deleteMigration': Services.DbServiceTypes.Actions[53]['out'];
  'db.deleteUser': Services.DbServiceTypes.Actions[54]['out'];
  'db.deleteUserByEmail': Services.DbServiceTypes.Actions[55]['out'];
  'db.deleteUserByFirstNameAndLastName': Services.DbServiceTypes.Actions[56]['out'];
  'db.deleteUserByUserProfileId': Services.DbServiceTypes.Actions[57]['out'];
  'db.deleteUserProfile': Services.DbServiceTypes.Actions[58]['out'];
};
type GetEmitParams = {
  'db.emit': MoleculerTs.Union.Strict<Services.DbServiceTypes.Events[0]['in']>;
};
export type ServiceNames = Exclude<never | 'db', never>;
export type ServiceNamesEmitGroup = ServiceNames | ServiceNames[];
export type ServiceEventNames = Exclude<never | 'db.emit', never>;
export type ServiceActionNames = Exclude<
  | never
  | 'db.countAccounts'
  | 'db.firstAccounts'
  | 'db.findAccounts'
  | 'db.accounts'
  | 'db.countMigrations'
  | 'db.firstMigrations'
  | 'db.findMigrations'
  | 'db.migrations'
  | 'db.countUsers'
  | 'db.firstUsers'
  | 'db.firstUsers.account'
  | 'db.firstUsers.profile'
  | 'db.findUsers'
  | 'db.users'
  | 'db.countUserProfiles'
  | 'db.firstUserProfiles'
  | 'db.firstUserProfiles.user'
  | 'db.findUserProfiles'
  | 'db.userProfiles'
  | 'db.account'
  | 'db.migration'
  | 'db.user.account'
  | 'db.user.profile'
  | 'db.user'
  | 'db.userByEmail.account'
  | 'db.userByEmail.profile'
  | 'db.userByEmail'
  | 'db.userByFirstNameAndLastName.account'
  | 'db.userByFirstNameAndLastName.profile'
  | 'db.userByFirstNameAndLastName'
  | 'db.userByUserProfileId.account'
  | 'db.userByUserProfileId.profile'
  | 'db.userByUserProfileId'
  | 'db.userProfile.user'
  | 'db.userProfile'
  | 'db.countUserSearch'
  | 'db.firstUserSearch'
  | 'db.firstUserSearch.account'
  | 'db.firstUserSearch.profile'
  | 'db.findUserSearch'
  | 'db.userSearch'
  | 'db.createAccount'
  | 'db.createMigration'
  | 'db.createUser'
  | 'db.createUserProfile'
  | 'db.updateAccount'
  | 'db.updateMigration'
  | 'db.updateUser'
  | 'db.updateUserByEmail'
  | 'db.updateUserByFirstNameAndLastName'
  | 'db.updateUserByUserProfileId'
  | 'db.updateUserProfile'
  | 'db.deleteAccount'
  | 'db.deleteMigration'
  | 'db.deleteUser'
  | 'db.deleteUserByEmail'
  | 'db.deleteUserByFirstNameAndLastName'
  | 'db.deleteUserByUserProfileId'
  | 'db.deleteUserProfile',
  never
>;

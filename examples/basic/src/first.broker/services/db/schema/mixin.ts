
    import * as moleculerTs from 'moleculer-ts';
    import * as moleculerPgr from 'moleculer-pgr';
    import * as pgr from './binding';
    import * as customPgr from '../mixin';
       
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
    export type PgrNode<Node> = Node | null;
    export type PgrCount = number;

    
    
            export type countAccountsInput = Parameters<pgr.Query['accounts']>[0];
            export type firstAccountsInput = Parameters<pgr.Query['accounts']>[0];
            export type findAccountsInput = Parameters<pgr.Query['accounts']>[0];
        export type accountsInput = Parameters<pgr.Query['accounts']>[0];
            export type countMigrationsInput = Parameters<pgr.Query['migrations']>[0];
            export type firstMigrationsInput = Parameters<pgr.Query['migrations']>[0];
            export type findMigrationsInput = Parameters<pgr.Query['migrations']>[0];
        export type migrationsInput = Parameters<pgr.Query['migrations']>[0];
            export type countUsersInput = Parameters<pgr.Query['users']>[0];
            export type firstUsersInput = Parameters<pgr.Query['users']>[0];
              export type firstUsers_accountInput = Parameters<pgr.Query['users']>[0];
              export type firstUsers_profileInput = Parameters<pgr.Query['users']>[0];
            export type findUsersInput = Parameters<pgr.Query['users']>[0];
        export type usersInput = Parameters<pgr.Query['users']>[0];
            export type countUserProfilesInput = Parameters<pgr.Query['userProfiles']>[0];
            export type firstUserProfilesInput = Parameters<pgr.Query['userProfiles']>[0];
              export type firstUserProfiles_userInput = Parameters<pgr.Query['userProfiles']>[0];
            export type findUserProfilesInput = Parameters<pgr.Query['userProfiles']>[0];
        export type userProfilesInput = Parameters<pgr.Query['userProfiles']>[0];
        export type accountInput = Parameters<pgr.Query['account']>[0];
        export type migrationInput = Parameters<pgr.Query['migration']>[0];
              export type user_accountInput = Parameters<pgr.Query['user']>[0];
              export type user_profileInput = Parameters<pgr.Query['user']>[0];
        export type userInput = Parameters<pgr.Query['user']>[0];
              export type userByEmail_accountInput = Parameters<pgr.Query['userByEmail']>[0];
              export type userByEmail_profileInput = Parameters<pgr.Query['userByEmail']>[0];
        export type userByEmailInput = Parameters<pgr.Query['userByEmail']>[0];
              export type userByFirstNameAndLastName_accountInput = Parameters<pgr.Query['userByFirstNameAndLastName']>[0];
              export type userByFirstNameAndLastName_profileInput = Parameters<pgr.Query['userByFirstNameAndLastName']>[0];
        export type userByFirstNameAndLastNameInput = Parameters<pgr.Query['userByFirstNameAndLastName']>[0];
              export type userByUserProfileId_accountInput = Parameters<pgr.Query['userByUserProfileId']>[0];
              export type userByUserProfileId_profileInput = Parameters<pgr.Query['userByUserProfileId']>[0];
        export type userByUserProfileIdInput = Parameters<pgr.Query['userByUserProfileId']>[0];
              export type userProfile_userInput = Parameters<pgr.Query['userProfile']>[0];
        export type userProfileInput = Parameters<pgr.Query['userProfile']>[0];
            export type countUserSearchInput = Parameters<pgr.Query['userSearch']>[0];
            export type firstUserSearchInput = Parameters<pgr.Query['userSearch']>[0];
              export type firstUserSearch_accountInput = Parameters<pgr.Query['userSearch']>[0];
              export type firstUserSearch_profileInput = Parameters<pgr.Query['userSearch']>[0];
            export type findUserSearchInput = Parameters<pgr.Query['userSearch']>[0];
        export type userSearchInput = Parameters<pgr.Query['userSearch']>[0];
          export type createAccountInput = Parameters<pgr.Mutation['createAccount']>[0]['input']['account']
          export type createMigrationInput = Parameters<pgr.Mutation['createMigration']>[0]['input']['migration']
          export type createUserInput = Parameters<pgr.Mutation['createUser']>[0]['input']['user']
          export type createUserProfileInput = Parameters<pgr.Mutation['createUserProfile']>[0]['input']['userProfile']
          export type updateAccountInput = Omit<Parameters<pgr.Mutation['updateAccount']>[0]['input'], 'clientMutationId'>
          export type updateMigrationInput = Omit<Parameters<pgr.Mutation['updateMigration']>[0]['input'], 'clientMutationId'>
          export type updateUserInput = Omit<Parameters<pgr.Mutation['updateUser']>[0]['input'], 'clientMutationId'>
          export type updateUserByEmailInput = Omit<Parameters<pgr.Mutation['updateUserByEmail']>[0]['input'], 'clientMutationId'>
          export type updateUserByFirstNameAndLastNameInput = Omit<Parameters<pgr.Mutation['updateUserByFirstNameAndLastName']>[0]['input'], 'clientMutationId'>
          export type updateUserByUserProfileIdInput = Omit<Parameters<pgr.Mutation['updateUserByUserProfileId']>[0]['input'], 'clientMutationId'>
          export type updateUserProfileInput = Omit<Parameters<pgr.Mutation['updateUserProfile']>[0]['input'], 'clientMutationId'>
          export type deleteAccountInput = Omit<Parameters<pgr.Mutation['deleteAccount']>[0]['input'], 'clientMutationId'>
          export type deleteMigrationInput = Omit<Parameters<pgr.Mutation['deleteMigration']>[0]['input'], 'clientMutationId'>
          export type deleteUserInput = Omit<Parameters<pgr.Mutation['deleteUser']>[0]['input'], 'clientMutationId'>
          export type deleteUserByEmailInput = Omit<Parameters<pgr.Mutation['deleteUserByEmail']>[0]['input'], 'clientMutationId'>
          export type deleteUserByFirstNameAndLastNameInput = Omit<Parameters<pgr.Mutation['deleteUserByFirstNameAndLastName']>[0]['input'], 'clientMutationId'>
          export type deleteUserByUserProfileIdInput = Omit<Parameters<pgr.Mutation['deleteUserByUserProfileId']>[0]['input'], 'clientMutationId'>
          export type deleteUserProfileInput = Omit<Parameters<pgr.Mutation['deleteUserProfile']>[0]['input'], 'clientMutationId'> 

    
        export type Account = moleculerPgr.StrictOmit<pgr.Account,  'users'>
        export type Migration = moleculerPgr.StrictOmit<pgr.Migration, never>
        export type User = moleculerPgr.StrictOmit<pgr.User,  'account'| 'profile'>
        export type UserProfile = moleculerPgr.StrictOmit<pgr.UserProfile,  'user'> 

    export namespace PgrExtend {
      
        export type Account<T extends keyof pgr.Account, P, Optional extends true | false = true
        > = Optional extends true
          ? {
              [K in T]?: P;
            }
          : {
              [K in T]: P;
            };
      
        export type Migration<T extends keyof pgr.Migration, P, Optional extends true | false = true
        > = Optional extends true
          ? {
              [K in T]?: P;
            }
          : {
              [K in T]: P;
            };
      
        export type User<T extends keyof pgr.User, P, Optional extends true | false = true
        > = Optional extends true
          ? {
              [K in T]?: P;
            }
          : {
              [K in T]: P;
            };
      
        export type UserProfile<T extends keyof pgr.UserProfile, P, Optional extends true | false = true
        > = Optional extends true
          ? {
              [K in T]?: P;
            }
          : {
              [K in T]: P;
            };
       
    }

    export type PgrActions = [
      
            moleculerTs.Action<'countAccounts', customPgr.countAccountsInput, customPgr.PgrCount>,
          
            moleculerTs.Action<'firstAccounts', customPgr.firstAccountsInput, customPgr.PgrNodeOptional<customPgr.Account>>,
          
            moleculerTs.Action<'findAccounts', customPgr.findAccountsInput, customPgr.PgrNodeArray<customPgr.Account>>,
          
          moleculerTs.Action<'accounts', customPgr.accountsInput, customPgr.PgrConnection<customPgr.Account>>,
        
            moleculerTs.Action<'countMigrations', customPgr.countMigrationsInput, customPgr.PgrCount>,
          
            moleculerTs.Action<'firstMigrations', customPgr.firstMigrationsInput, customPgr.PgrNodeOptional<customPgr.Migration>>,
          
            moleculerTs.Action<'findMigrations', customPgr.findMigrationsInput, customPgr.PgrNodeArray<customPgr.Migration>>,
          
          moleculerTs.Action<'migrations', customPgr.migrationsInput, customPgr.PgrConnection<customPgr.Migration>>,
        
            moleculerTs.Action<'countUsers', customPgr.countUsersInput, customPgr.PgrCount>,
          
            moleculerTs.Action<'firstUsers', customPgr.firstUsersInput, customPgr.PgrNodeOptional<customPgr.User>>,
          
              moleculerTs.Action<'firstUsers.account', customPgr.firstUsers_accountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
            
              moleculerTs.Action<'firstUsers.profile', customPgr.firstUsers_profileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
            
            moleculerTs.Action<'findUsers', customPgr.findUsersInput, customPgr.PgrNodeArray<customPgr.User>>,
          
          moleculerTs.Action<'users', customPgr.usersInput, customPgr.PgrConnection<customPgr.User>>,
        
            moleculerTs.Action<'countUserProfiles', customPgr.countUserProfilesInput, customPgr.PgrCount>,
          
            moleculerTs.Action<'firstUserProfiles', customPgr.firstUserProfilesInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
          
              moleculerTs.Action<'firstUserProfiles.user', customPgr.firstUserProfiles_userInput, customPgr.PgrNodeOptional<customPgr.User>>,
            
            moleculerTs.Action<'findUserProfiles', customPgr.findUserProfilesInput, customPgr.PgrNodeArray<customPgr.UserProfile>>,
          
          moleculerTs.Action<'userProfiles', customPgr.userProfilesInput, customPgr.PgrConnection<customPgr.UserProfile>>,
        
          moleculerTs.Action<'account', customPgr.accountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
        
          moleculerTs.Action<'migration', customPgr.migrationInput, customPgr.PgrNodeOptional<customPgr.Migration>>,
        
              moleculerTs.Action<'user.account', customPgr.user_accountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
            
              moleculerTs.Action<'user.profile', customPgr.user_profileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
            
          moleculerTs.Action<'user', customPgr.userInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
              moleculerTs.Action<'userByEmail.account', customPgr.userByEmail_accountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
            
              moleculerTs.Action<'userByEmail.profile', customPgr.userByEmail_profileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
            
          moleculerTs.Action<'userByEmail', customPgr.userByEmailInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
              moleculerTs.Action<'userByFirstNameAndLastName.account', customPgr.userByFirstNameAndLastName_accountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
            
              moleculerTs.Action<'userByFirstNameAndLastName.profile', customPgr.userByFirstNameAndLastName_profileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
            
          moleculerTs.Action<'userByFirstNameAndLastName', customPgr.userByFirstNameAndLastNameInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
              moleculerTs.Action<'userByUserProfileId.account', customPgr.userByUserProfileId_accountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
            
              moleculerTs.Action<'userByUserProfileId.profile', customPgr.userByUserProfileId_profileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
            
          moleculerTs.Action<'userByUserProfileId', customPgr.userByUserProfileIdInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
              moleculerTs.Action<'userProfile.user', customPgr.userProfile_userInput, customPgr.PgrNodeOptional<customPgr.User>>,
            
          moleculerTs.Action<'userProfile', customPgr.userProfileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
        
            moleculerTs.Action<'countUserSearch', customPgr.countUserSearchInput, customPgr.PgrCount>,
          
            moleculerTs.Action<'firstUserSearch', customPgr.firstUserSearchInput, customPgr.PgrNodeOptional<customPgr.User>>,
          
              moleculerTs.Action<'firstUserSearch.account', customPgr.firstUserSearch_accountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
            
              moleculerTs.Action<'firstUserSearch.profile', customPgr.firstUserSearch_profileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
            
            moleculerTs.Action<'findUserSearch', customPgr.findUserSearchInput, customPgr.PgrNodeArray<customPgr.User>>,
          
          moleculerTs.Action<'userSearch', customPgr.userSearchInput, customPgr.PgrConnection<customPgr.User>>,
        
          moleculerTs.Action<'createAccount', customPgr.createAccountInput, customPgr.PgrNode<customPgr.Account>>,
        
          moleculerTs.Action<'createMigration', customPgr.createMigrationInput, customPgr.PgrNode<customPgr.Migration>>,
        
          moleculerTs.Action<'createUser', customPgr.createUserInput, customPgr.PgrNode<customPgr.User>>,
        
          moleculerTs.Action<'createUserProfile', customPgr.createUserProfileInput, customPgr.PgrNode<customPgr.UserProfile>>,
        
          moleculerTs.Action<'updateAccount', customPgr.updateAccountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
        
          moleculerTs.Action<'updateMigration', customPgr.updateMigrationInput, customPgr.PgrNodeOptional<customPgr.Migration>>,
        
          moleculerTs.Action<'updateUser', customPgr.updateUserInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
          moleculerTs.Action<'updateUserByEmail', customPgr.updateUserByEmailInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
          moleculerTs.Action<'updateUserByFirstNameAndLastName', customPgr.updateUserByFirstNameAndLastNameInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
          moleculerTs.Action<'updateUserByUserProfileId', customPgr.updateUserByUserProfileIdInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
          moleculerTs.Action<'updateUserProfile', customPgr.updateUserProfileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
        
          moleculerTs.Action<'deleteAccount', customPgr.deleteAccountInput, customPgr.PgrNodeOptional<customPgr.Account>>,
        
          moleculerTs.Action<'deleteMigration', customPgr.deleteMigrationInput, customPgr.PgrNodeOptional<customPgr.Migration>>,
        
          moleculerTs.Action<'deleteUser', customPgr.deleteUserInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
          moleculerTs.Action<'deleteUserByEmail', customPgr.deleteUserByEmailInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
          moleculerTs.Action<'deleteUserByFirstNameAndLastName', customPgr.deleteUserByFirstNameAndLastNameInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
          moleculerTs.Action<'deleteUserByUserProfileId', customPgr.deleteUserByUserProfileIdInput, customPgr.PgrNodeOptional<customPgr.User>>,
        
          moleculerTs.Action<'deleteUserProfile', customPgr.deleteUserProfileInput, customPgr.PgrNodeOptional<customPgr.UserProfile>>,
        
    ]

    export const pgrQuery = {
      
        Account: moleculerPgr.shapeToGql(moleculerPgr.shape<customPgr.Account>()),
      
        Migration: moleculerPgr.shapeToGql(moleculerPgr.shape<customPgr.Migration>()),
      
        User: moleculerPgr.shapeToGql(moleculerPgr.shape<customPgr.User>()),
      
        UserProfile: moleculerPgr.shapeToGql(moleculerPgr.shape<customPgr.UserProfile>()),
      
    }

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
        
            async countAccounts(ctx: any) {},
            async firstAccounts(ctx: any) {},
            async findAccounts(ctx: any) {},
          async accounts(ctx: any) {},
            async countMigrations(ctx: any) {},
            async firstMigrations(ctx: any) {},
            async findMigrations(ctx: any) {},
          async migrations(ctx: any) {},
            async countUsers(ctx: any) {},
            async firstUsers(ctx: any) {},
              async 'firstUsers.account'(ctx: any) {},
              async 'firstUsers.profile'(ctx: any) {},
            async findUsers(ctx: any) {},
          async users(ctx: any) {},
            async countUserProfiles(ctx: any) {},
            async firstUserProfiles(ctx: any) {},
              async 'firstUserProfiles.user'(ctx: any) {},
            async findUserProfiles(ctx: any) {},
          async userProfiles(ctx: any) {},
          async account(ctx: any) {},
          async migration(ctx: any) {},
              async 'user.account'(ctx: any) {},
              async 'user.profile'(ctx: any) {},
          async user(ctx: any) {},
              async 'userByEmail.account'(ctx: any) {},
              async 'userByEmail.profile'(ctx: any) {},
          async userByEmail(ctx: any) {},
              async 'userByFirstNameAndLastName.account'(ctx: any) {},
              async 'userByFirstNameAndLastName.profile'(ctx: any) {},
          async userByFirstNameAndLastName(ctx: any) {},
              async 'userByUserProfileId.account'(ctx: any) {},
              async 'userByUserProfileId.profile'(ctx: any) {},
          async userByUserProfileId(ctx: any) {},
              async 'userProfile.user'(ctx: any) {},
          async userProfile(ctx: any) {},
            async countUserSearch(ctx: any) {},
            async firstUserSearch(ctx: any) {},
              async 'firstUserSearch.account'(ctx: any) {},
              async 'firstUserSearch.profile'(ctx: any) {},
            async findUserSearch(ctx: any) {},
          async userSearch(ctx: any) {},
          async createAccount(ctx: any) {},
          async createMigration(ctx: any) {},
          async createUser(ctx: any) {},
          async createUserProfile(ctx: any) {},
          async updateAccount(ctx: any) {},
          async updateMigration(ctx: any) {},
          async updateUser(ctx: any) {},
          async updateUserByEmail(ctx: any) {},
          async updateUserByFirstNameAndLastName(ctx: any) {},
          async updateUserByUserProfileId(ctx: any) {},
          async updateUserProfile(ctx: any) {},
          async deleteAccount(ctx: any) {},
          async deleteMigration(ctx: any) {},
          async deleteUser(ctx: any) {},
          async deleteUserByEmail(ctx: any) {},
          async deleteUserByFirstNameAndLastName(ctx: any) {},
          async deleteUserByUserProfileId(ctx: any) {},
          async deleteUserProfile(ctx: any) {},
      }
    }
    
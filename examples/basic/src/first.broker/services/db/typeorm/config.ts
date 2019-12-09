import { CustomNamingStrategy } from '@typeorm/NameStrategy';

const dirName = __dirname.replace(`${process.cwd()}/`, '');

export = [
  {
    name: 'default',
    type: 'postgres' as 'postgres',
    url: process.env.FIRST_BROKER_DB_MIGRATION_URL,
    // ssl: true,
    logging: true,
    entities: [`${dirName}/entity/*.ts`],
    migrations: [`${dirName}/migration/*`],
    cli: {
      migrationsDir: [`${dirName}/migration`],
    },
    namingStrategy: new CustomNamingStrategy(),
  },
  {
    name: 'seed',
    type: 'postgres' as 'postgres',
    url: process.env.FIRST_BROKER_DB_MIGRATION_URL,
    // ssl: true,
    logging: true,
    entities: [],
    migrations: [`${dirName}/seed/*`],
    migrationsTableName: 'migrations-seeds',
    cli: {
      migrationsDir: [`${dirName}/seed`],
    },
    namingStrategy: new CustomNamingStrategy(),
  },
];

import { CustomNamingStrategy } from '@typeorm/NameStrategy';
import { ConnectionOptions } from 'typeorm';

const dirName = __dirname.replace(`${process.cwd()}/`, '');

const config: ConnectionOptions[] = [
  {
    name: 'default',
    type: 'postgres' as 'postgres',
    url: process.env.FIRST_BROKER_DB_MIGRATION_URL,
    // ssl: true,
    logging: true,
    entities: [`${dirName}/entity/*.ts`],
    migrations: [`${dirName}/migration-generated/*`],
    migrationsTableName: 'migration-generated',
    cli: {
      migrationsDir: `${dirName}/migration-generated`,
    },
    namingStrategy: new CustomNamingStrategy(),
  },
  {
    name: 'manual',
    type: 'postgres' as 'postgres',
    url: process.env.FIRST_BROKER_DB_MIGRATION_URL,
    // ssl: true,
    logging: true,
    entities: [],
    synchronize: true,
    migrationsRun: true,
    migrations: [`${dirName}/migration-manual/*`],
    migrationsTableName: 'migration-manual',
    cli: {
      migrationsDir: `${dirName}/migration-manual`,
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
    migrations: [`${dirName}/migration-seed/*`],
    migrationsTableName: 'migration-seed',
    cli: {
      migrationsDir: `${dirName}/migration-seed`,
    },
    namingStrategy: new CustomNamingStrategy(),
  },
];

export = config;

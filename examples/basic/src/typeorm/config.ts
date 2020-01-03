// import 'reflect-metadata';
import { config } from 'dotenv';
config();

const DB = process.env.DB;

let configFile: any = undefined;
if (DB === 'first.broker') {
  configFile = require('@first.broker/services/db/typeorm/config');
}

export = configFile;

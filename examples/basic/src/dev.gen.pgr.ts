import { config } from 'dotenv';
config();

const DB = process.env.DB;
const NAME = process.env.NAME || 'default';

if (DB === 'first.broker') {
  require('@first.broker/services/db/generate');
} else {
  throw Error(`DB: ${DB}, Name: ${NAME} not found!`);
}

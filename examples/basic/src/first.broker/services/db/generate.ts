import { generateMixin } from './postgraphile';
import fs from 'fs';

async function run() {
  await generateMixin({
    poolOrConfig: process.env.FIRST_BROKER_DB_URL,
  });

  console.log('client generated - ok');
  // touch type file to regenerate moleculer-ts
  const filename = `${__dirname}/db.service.types.ts`;
  try {
    const time = new Date();
    fs.utimesSync(filename, time, time);
  } catch (err) {
    fs.closeSync(fs.openSync(filename, 'w'));
  }

  process.exit(0);
}

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

run();

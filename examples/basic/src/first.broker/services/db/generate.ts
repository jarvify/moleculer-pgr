import { createPostgraphile } from './postgraphile';
import fs from 'fs';

async function run() {
  await createPostgraphile(true);
  // touch type file to regenerate moleculer-ts
  const filename = `${__dirname}/db.service.types.ts`;
  try {
    const time = new Date();
    fs.utimesSync(filename, time, time);
  } catch (err) {
    fs.closeSync(fs.openSync(filename, 'w'));
  }
}

run();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

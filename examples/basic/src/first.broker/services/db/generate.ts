import { createPostgraphile } from './postgraphile';

async function run() {
  await createPostgraphile(true);
}

run();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

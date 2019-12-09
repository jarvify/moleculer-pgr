import { createBroker } from '@first.broker/broker';

async function run() {
  const broker = await createBroker();
  broker.loadService(`${__dirname}/db.service`);
  broker.getLocalService('db').settings.pgr.generate = true;
  await broker.start();
}

run();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

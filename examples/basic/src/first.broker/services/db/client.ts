import { createBroker } from '@first.broker/broker';
import fetch from 'node-fetch';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { makeRemoteExecutableSchema } from 'graphql-tools';
import { Binding } from './pgr-client/binding';
import schema from './pgr-client/schema';

export async function createSeedBroker() {
  const broker = await createBroker();
  broker.loadService(`${__dirname}/db.service`);
  await broker.start();
  return broker;
}

export class PgrClient extends Binding {
  constructor(uri: string) {
    super({
      schema: makeRemoteExecutableSchema({
        schema,
        link: postgraphileLink(uri),
      }),
    });
  }
}

const postgraphileLink = (uri: string) => {
  return new BatchHttpLink({
    uri,
    fetch: fetch as any,
    batchMax: 500,
  });
};

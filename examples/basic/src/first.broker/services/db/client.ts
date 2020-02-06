import { createBroker } from '@first.broker/broker';
import fetch from 'node-fetch';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import WebSocket from 'ws';
import { makeRemoteExecutableSchema } from 'graphql-tools';
import { Binding } from './mixin/binding';
import schema from './mixin/schema';

export async function createSeedBroker() {
  const broker = await createBroker();
  broker.loadService(`${__dirname}/db.service`);
  await broker.start();
  return broker;
}

export class HttpClient extends Binding {
  constructor(uri: string) {
    super({
      schema: makeRemoteExecutableSchema({
        schema,
        link: postgraphileHttpLink(uri),
      }),
    });
  }
}

export const PgrClient = HttpClient;

const postgraphileHttpLink = (uri: string) => {
  return new BatchHttpLink({
    uri,
    fetch: fetch as any,
    batchMax: 500,
  });
};

export function createSubscriptionClient(uri: string) {
  return new SubscriptionClient(
    uri,
    {
      reconnect: true,
    },
    WebSocket,
  );
}

export class WsClient extends Binding {
  constructor(subscriptionClient: SubscriptionClient) {
    super({
      schema: makeRemoteExecutableSchema({
        schema,
        link: new WebSocketLink(subscriptionClient),
      }),
    });
  }
}

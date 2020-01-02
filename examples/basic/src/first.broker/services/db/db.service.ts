import { Service, Action, Event, Method } from 'moleculer-decorators';
import * as Broker from '@first.broker/moleculer';
import { DbServiceTypes } from '@first.broker/types';

import express from 'express';
import { Server } from 'http';
import { Pool } from 'pg';

import { createPostgraphile } from './postgraphile';
import { PgrMixin } from './mixin';
import { NodeChangePayload } from './mixin/binding';
import { HttpClient, WsClient } from './client';

interface DbService {
  name: typeof DbServiceTypes.name;
}

type NodeChangeIterator = AsyncIterable<{ nodeChange?: NodeChangePayload }>;

@Service({
  name: DbServiceTypes.name,
  mixins: [PgrMixin],
})
class DbService
  extends Broker.Service<{
    port: string;
    pgr: { client: HttpClient };
  }>
  implements DbServiceTypes.ServiceOwnActions {
  server!: Server;
  pool!: Pool;
  nodeChangeIterator!: NodeChangeIterator;

  @Method
  async nodeChangeListen(iterator: NodeChangeIterator) {
    for await (const value of iterator) {
      if (value && value.nodeChange) {
        this.nodeChange(value.nodeChange);
      }
    }
  }

  @Method
  async nodeChange(change: NodeChangePayload) {
    console.log('nodeChange', change);
  }

  created() {
    this.settings.port = '3000';
    this.settings.pgr = {
      client: new HttpClient(`http://127.0.0.1:${this.settings.port}/graphql`),
    };
  }

  async started() {
    const app = express();

    this.pool = new Pool({
      connectionString: process.env.FIRST_BROKER_DB_URL,
      max: 10,
      idleTimeoutMillis: 1000,
      connectionTimeoutMillis: 5000,
    });

    const postgraphile = createPostgraphile({
      poolOrConfig: this.pool,
    });

    app.use(postgraphile);

    await new Promise((resolve, reject) => {
      this.server = app.listen(this.settings.port);

      this.server.once('listening', resolve);
      this.server.once('error', reject);
    });

    const client = new WsClient(`ws://127.0.0.1:${this.settings.port}/graphql`);
    const nodeChangeIterator = (await client.subscription.nodeChange()) as any;
    this.nodeChangeListen(nodeChangeIterator);
  }

  async stopped() {
    if (this.pool) {
      this.pool.end();
      delete this.pool;
    }

    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server.close(err => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        });

        // https://stackoverflow.com/questions/14626636/how-do-i-shutdown-a-node-js-https-server-immediately
        setImmediate(() => {
          this.server.emit('close');
        });
      });
    }
  }
}

export = DbService;

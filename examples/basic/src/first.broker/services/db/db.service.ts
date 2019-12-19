import { Service, Action, Event, Method } from 'moleculer-decorators';
import * as Broker from '@first.broker/moleculer';
import { DbServiceTypes } from '@first.broker/types';

import express from 'express';
import { Server } from 'http';
import { Pool } from 'pg';

import { createPostgraphile } from './postgraphile';
import { PgrMixin } from './mixin';
import { PgrClient } from './client';

interface DbService {
  name: typeof DbServiceTypes.name;
}

@Service({
  name: DbServiceTypes.name,
  mixins: [PgrMixin],
})
class DbService
  extends Broker.Service<{
    port: string;
    pgr: { client: any };
  }>
  implements DbServiceTypes.ServiceOwnActions {
  server!: Server;
  pool!: Pool;

  created() {
    this.settings.port = '3000';
    this.settings.pgr = {
      client: new PgrClient(`http://127.0.0.1:${this.settings.port}/graphql`),
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
        /*
        // https://stackoverflow.com/questions/14626636/how-do-i-shutdown-a-node-js-https-server-immediately
        setImmediate(() => {
          this.server.emit('close');
        });
        */
      });
    }
  }
}

export = DbService;

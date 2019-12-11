import { StrictOmit } from 'moleculer-pgr';
import * as pgr from './pgr-client/mixin';
import { PgrExtend as Extend } from './pgr-client/mixin';

export * from './pgr-client/mixin';

// export type User = pgr.User & Extend.User<'profile', pgr.UserProfile>;
// let A: User;

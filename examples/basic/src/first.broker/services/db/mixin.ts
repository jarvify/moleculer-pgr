import { StrictOmit } from 'moleculer-pgr';
import * as pgr from './schema/mixin';
import { PgrExtend as Extend } from './schema/mixin';

export * from './schema/mixin';

// export type User = pgr.User & Extend.User<'profile', pgr.UserProfile>;
// let A: User;

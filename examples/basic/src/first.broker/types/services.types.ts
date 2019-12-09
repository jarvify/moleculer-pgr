import * as MoleculerTs from 'moleculer-ts';
declare module '../services/db/db.service.types' {
  type ActionParams<
    T extends MoleculerTs.GetNames<DbServiceTypes.Actions>
  > = MoleculerTs.GetParamsStrict<DbServiceTypes.Actions, T>;
  type ActionReturn<
    T extends MoleculerTs.GetNames<DbServiceTypes.Actions>
  > = MoleculerTs.GetReturn<Actions, T>;
  type EventParams<
    T extends MoleculerTs.GetNames<DbServiceTypes.Events>
  > = MoleculerTs.GetParamsStrict<DbServiceTypes.Events, T>;
  type ServiceOwnActions = MoleculerTs.GetServiceOwnActions<
    DbServiceTypes.OwnActions
  >;
}
import * as DbServiceTypes from '../services/db/db.service.types';

export { DbServiceTypes };

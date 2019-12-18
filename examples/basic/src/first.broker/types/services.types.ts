import * as MoleculerTs from 'moleculer-ts';
import { OwnActions as Service0Action0 } from '../services/db/db.service.types';
import { PgrActions as Service0Action1 } from '../services/db/./mixin';
import { OwnEvents as Service0Event0 } from '../services/db/db.service.types';

declare module '../services/db/db.service.types' {
  type Actions = [
    Service0Action0[0],
    Service0Action1[0],
    Service0Action1[1],
    Service0Action1[2],
    Service0Action1[3],
    Service0Action1[4],
    Service0Action1[5],
    Service0Action1[6],
    Service0Action1[7],
    Service0Action1[8],
    Service0Action1[9],
    Service0Action1[10],
    Service0Action1[11],
    Service0Action1[12],
    Service0Action1[13],
    Service0Action1[14],
    Service0Action1[15],
    Service0Action1[16],
    Service0Action1[17],
    Service0Action1[18],
    Service0Action1[19],
    Service0Action1[20],
    Service0Action1[21],
    Service0Action1[22],
    Service0Action1[23],
    Service0Action1[24],
    Service0Action1[25],
    Service0Action1[26],
    Service0Action1[27],
    Service0Action1[28],
    Service0Action1[29],
    Service0Action1[30],
    Service0Action1[31],
    Service0Action1[32],
    Service0Action1[33],
    Service0Action1[34],
    Service0Action1[35],
    Service0Action1[36],
    Service0Action1[37],
    Service0Action1[38],
    Service0Action1[39],
    Service0Action1[40],
    Service0Action1[41],
    Service0Action1[42],
    Service0Action1[43],
    Service0Action1[44],
    Service0Action1[45],
    Service0Action1[46],
    Service0Action1[47],
    Service0Action1[48],
    Service0Action1[49],
    Service0Action1[50],
    Service0Action1[51],
    Service0Action1[52],
    Service0Action1[53],
    Service0Action1[54],
    Service0Action1[55],
    Service0Action1[56],
    Service0Action1[57],
    Service0Action1[58],
    Service0Action1[59],
    Service0Action1[60],
    Service0Action1[61],
    Service0Action1[62],
    Service0Action1[63],
    Service0Action1[64],
    Service0Action1[65],
    Service0Action1[66],
    Service0Action1[67],
    Service0Action1[68],
    Service0Action1[69],
    Service0Action1[70],
    Service0Action1[71],
    Service0Action1[72],
    Service0Action1[73],
    Service0Action1[74],
    Service0Action1[75],
    Service0Action1[76],
    Service0Action1[77],
  ];
  type Events = [];

  type ActionParams<
    T extends MoleculerTs.GetNames<Actions>
  > = MoleculerTs.GetParamsStrict<Actions, T>;
  type ActionReturn<
    T extends MoleculerTs.GetNames<Actions>
  > = MoleculerTs.GetReturn<Actions, T>;
  type EventParams<
    T extends MoleculerTs.GetNames<Events>
  > = MoleculerTs.GetParamsStrict<Events, T>;
  type ServiceOwnActions = MoleculerTs.GetServiceOwnActions<OwnActions>;
}

import * as DbServiceTypes from '../services/db/db.service.types';

export { DbServiceTypes };

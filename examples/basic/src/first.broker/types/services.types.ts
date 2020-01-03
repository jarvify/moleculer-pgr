import * as MoleculerTs from 'moleculer-ts';
import { OwnActions as Service0Action0 } from '../services/db/db.service.types';
import { PgrActions as Service0Action1 } from '../services/db/./mixin';
import { OwnEvents as Service0Event0 } from '../services/db/db.service.types';
import { OwnActions as Service1Action0 } from '../services/test/test.service.types';
import { OwnEvents as Service1Event0 } from '../services/test/test.service.types';

declare module '../services/db/db.service.types' {
  type Actions = [
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
    Service0Action1[78],
    Service0Action1[79],
    Service0Action1[80],
    Service0Action1[81],
    Service0Action1[82],
    Service0Action1[83],
    Service0Action1[84],
    Service0Action1[85],
    Service0Action1[86],
    Service0Action1[87],
    Service0Action1[88],
    Service0Action1[89],
    Service0Action1[90],
    Service0Action1[91],
    Service0Action1[92],
    Service0Action1[93],
    Service0Action1[94],
    Service0Action1[95],
    Service0Action1[96],
    Service0Action1[97],
    Service0Action1[98],
    Service0Action1[99],
    Service0Action1[100],
    Service0Action1[101],
    Service0Action1[102],
    Service0Action1[103],
    Service0Action1[104],
    Service0Action1[105],
    Service0Action1[106],
    Service0Action1[107],
    Service0Action1[108],
    Service0Action1[109],
    Service0Action1[110],
    Service0Action1[111],
    Service0Action1[112],
    Service0Action1[113],
    Service0Action1[114],
    Service0Action1[115],
    Service0Action1[116],
    Service0Action1[117],
    Service0Action1[118],
    Service0Action1[119],
    Service0Action1[120],
    Service0Action1[121],
    Service0Action1[122],
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

declare module '../services/test/test.service.types' {
  type Actions = [];
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
import * as TestServiceTypes from '../services/test/test.service.types';

export { DbServiceTypes, TestServiceTypes };

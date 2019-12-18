import { Action, Event, ConcatMultiple } from 'moleculer-ts';
import { PgrActions } from './mixin';

export const name: 'db' = 'db';

export type OwnActions = [Action<'test', { id: string }, any>];

export type OwnEvents = [];

type Actions = ConcatMultiple<[OwnActions, PgrActions]>;
type Events = ConcatMultiple<[OwnEvents]>;

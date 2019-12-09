import { Action, Event, ConcatMultiple } from 'moleculer-ts';
import { PgrActions } from './mixin';

export const name: 'db' = 'db';
export type OwnActions = [];
export type OwnEvents = [Event<'emit', { test: string }>];

export type Actions = ConcatMultiple<[OwnActions, PgrActions]>;
export type Events = ConcatMultiple<[OwnEvents]>;

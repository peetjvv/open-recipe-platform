import { AddBarAction, IncrementBarCountAction } from './types';

export const addBar = (): AddBarAction => ({ type: 'FOO', subtype: 'ADD_BAR' });
export const incrementBarCount = (): IncrementBarCountAction => ({
  type: 'FOO',
  subtype: 'INCREMENT_BAR_COUNT',
});

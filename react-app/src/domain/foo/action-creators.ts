import { AddBarAction } from './types';

export const addBar = (): AddBarAction => ({ type: 'FOO', subtype: 'ADD_BAR' });

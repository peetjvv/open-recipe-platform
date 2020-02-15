import { Dispatch } from 'react';
import { State, Action } from './types';
import useElmish, { StateEffectPair, Effects, Effect } from 'react-use-elmish';
import * as Foo from './foo/reducer';
import * as Router from './router/reducer';
import { routeDefinitions } from './router/reducer';
import { throwIfNotNever } from '../util/typescript';

export const appReducer = (
  prev: State,
  action: Action
): StateEffectPair<State, Action> => {
  switch (action.type) {
    case 'FOO':
      return Foo.reducer(prev, action);
    default:
      return throwIfNotNever(action);
  }
};

export const initialState = (): StateEffectPair<State, Action> => {
  const state = { ...Foo.initialState, ...Router.initialState };
  const action = Effects.none() as Effect<any>;
  return [state, action];
};

export default (): [State, Dispatch<Action>] => {
  return useElmish(appReducer, initialState);
};

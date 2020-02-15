import { Dispatch } from 'react';
import { State, Action } from './types';
import useElmish, { StateEffectPair, Effects, Effect } from 'react-use-elmish';
import * as Foo from './foo/reducer';
import { routeDefinitions } from './router';
import { throwIfNotNever } from '../util/typescript';

export const appReducer = (
  prev: State,
  action: Action
): StateEffectPair<State, Action> => {
  switch (action.type) {
    case 'FOO':
      return Foo.reducer(prev, action);
    default:
      return throwIfNotNever(action.type);
  }
};

export const initialState = (): StateEffectPair<State, Action> => {
  const state = { foo: Foo.initialState };
  const action = Effects.none() as Effect<any>;
  return [state, action];
};

export default (): [State, Dispatch<Action>] => {
  return useElmish(appReducer, initialState);
};

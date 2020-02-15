import { Dispatch } from 'react';
import { State, Action } from './types';
import useElmish, { StateEffectPair, Effects, Effect } from 'react-use-elmish';
import { routeDefinitions } from './router';
import { throwIfNotNever } from '../util/typescript';

export const appReducer = (
  prev: State,
  action: Action
): StateEffectPair<State, Action> => {
  switch (action.type) {
    case 'FOO':
      switch (action.subtype) {
        case 'ADD_R':
          const updatedState = { ...prev, foo: prev.foo + 'r' };
          return [updatedState, Effects.none()];
        default:
          return throwIfNotNever(action.subtype);
      }
    default:
      return throwIfNotNever(action.type);
  }
};

export const initialState = (): StateEffectPair<State, Action> => {
  const state = { foo: 'bar' };
  const action = Effects.none() as Effect<any>;
  return [state, action];
};

export default (): [State, Dispatch<Action>] => {
  return useElmish(appReducer, initialState);
};

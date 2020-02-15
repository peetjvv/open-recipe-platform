import { Dispatch } from 'react';
import { State, Action } from './types';
import useElmish, { StateEffectPair, Effects } from 'react-use-elmish';
import { initializeRouter, RouterAction } from 'react-elmish-router';
import * as Foo from './foo/reducer';
import * as Router from './router';
import { Route, routeDefinitions } from './router';
import { throwIfNotNever } from '../util/typescript';

export const appReducer = (
  prev: State,
  action: Action
): StateEffectPair<State, Action> => {
  switch (action.type) {
    case 'FOO':
      return Foo.reducer(prev, action);
    case 'ROUTER':
      return Router.reducer(prev, action);
    default:
      return throwIfNotNever(action);
  }
};

export const initialState = (): StateEffectPair<State, Action> => {
  const [state, action] = initializeRouter<
    typeof routeDefinitions,
    Omit<State, 'router'>,
    RouterAction<Route>
  >(routeDefinitions, [{ ...Foo.initialState }, Effects.none()]);

  return [state, action];
};

export default (): [State, Dispatch<Action>] => {
  return useElmish(appReducer, initialState);
};

import { Dispatch } from 'react';
import { State, Action } from './types';
import useElmish, { StateEffectPair, Effects } from 'react-use-elmish';
import { initializeRouter, RouterAction } from 'react-elmish-router';
import * as Ingredients from './ingredients/reducer';
import * as Recipes from './recipes/reducer';
import * as Router from './router';
import * as Theme from './theme';
import { Route, routeDefinitions } from './router';
import { throwIfNotNever } from '../util/typescript';

export const appReducer = (
  prev: State,
  action: Action
): StateEffectPair<State, Action> => {
  switch (action.type) {
    case 'INGREDIENTS':
      return Ingredients.reducer(prev, action);
    case 'RECIPES':
      return Recipes.reducer(prev, action);
    case 'THEME':
      return Theme.reducer(prev, action);
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
  >(routeDefinitions, [
    {
      ...Ingredients.initialState,
      ...Recipes.initialState,
      ...Theme.initialState,
    },
    Effects.none(),
  ]);

  return [state, action];
};

export default (): [State, Dispatch<Action>] => {
  return useElmish(appReducer, initialState);
};

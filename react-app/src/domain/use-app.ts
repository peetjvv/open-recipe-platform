import { Dispatch } from 'react';
import { State, Action } from './types';
import useElmish, { StateEffectPair, Effects } from 'react-use-elmish';
import * as Ingredients from './ingredients/reducer';
import * as Recipes from './recipes/reducer';
import { throwIfNotNever } from '../util/typescript';

export const appReducer = (
  prev: State,
  action: Action
): StateEffectPair<State, Action> => {
  console.log(action);

  switch (action.type) {
    case 'INGREDIENTS':
      return Ingredients.reducer(prev, action);
    case 'RECIPES':
      return Recipes.reducer(prev, action);
    default:
      return throwIfNotNever(action);
  }
};

export const initialState = (): StateEffectPair<State, Action> => {
  return [
    {
      ...Ingredients.initialState,
      ...Recipes.initialState,
    },
    Effects.none(),
  ];
};

export default (): [State, Dispatch<Action>] => {
  return useElmish(appReducer, initialState);
};

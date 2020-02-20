import { RecipesState, RecipesAction } from './types';
import { StateEffectPair, Effects } from 'react-use-elmish';
import { State } from '../types';
import { throwIfNotNever } from '../../util/typescript';

export const initialState: RecipesState = {
  recipes: {},
};

export const reducer = (
  prevState: State,
  action: RecipesAction
): StateEffectPair<State, RecipesAction> => {
  switch (action.subtype) {
    case 'FETCH_RECIPES':
      return [
        {
          ...prevState,
        },
        Effects.none(),
      ];
    case 'CREATE_RECIPE':
      return [
        {
          ...prevState,
        },
        Effects.none(),
      ];
    default:
      return throwIfNotNever(action);
  }
};

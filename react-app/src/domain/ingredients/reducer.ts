import { IngredientsState, IngredientsAction } from './types';
import { StateEffectPair, Effects } from 'react-use-elmish';
import { State } from '../types';
import { throwIfNotNever } from '../../util/typescript';

export const initialState: IngredientsState = { ingredients: {} };

export const reducer = (
  prevState: State,
  action: IngredientsAction
): StateEffectPair<State, IngredientsAction> => {
  switch (action.subtype) {
    case 'CREATE_INGREDIENT':
      return [
        {
          ...prevState,
        },
        Effects.none(),
      ];
    case 'FETCH_INGREDIENTS':
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

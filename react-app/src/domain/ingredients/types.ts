import { Ingredient } from '../../types/ingredient';
import { MapObject } from '../../types/misc';

export type IngredientsState = { ingredients: MapObject<Ingredient> };
export type IngredientsAction = CreateIngredientAction | FetchIngredientsAction;

type BaseIngredientsAction = { type: 'INGREDIENTS' };
export type CreateIngredientAction = BaseIngredientsAction & {
  subtype: 'CREATE_INGREDIENT';
  payload: Ingredient;
};
export type FetchIngredientsAction = BaseIngredientsAction & {
  subtype: 'FETCH_INGREDIENTS';
};

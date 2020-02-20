import { MapObject } from '../types';

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

export type Ingredient = {
  id: string;
  name: string;
  dryness: 'wet' | 'dry' | 'other';
  measurement: 'weight' | 'volume';
}[];
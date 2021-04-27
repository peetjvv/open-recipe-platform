import { MapObject } from '../../types/misc';
import { Recipe } from '../../types/recipe';

export type RecipesState = { recipes: MapObject<Recipe> };
export type RecipesAction = FetchRecipesAction | CreateRecipeAction;

type BaseRecipeAction = { type: 'RECIPES' };
export type FetchRecipesAction = BaseRecipeAction & {
  subtype: 'FETCH_RECIPES';
};
export type CreateRecipeAction = BaseRecipeAction & {
  subtype: 'CREATE_RECIPE';
  payload: Recipe;
};

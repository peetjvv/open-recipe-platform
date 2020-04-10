import { MapObject } from '../types';

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

export type Recipe = {
  id: string;
  name: string;
  aka: string[];
  servings?: number;
  ingredients: { ingredientId: string; amount: number }[];
  method: string[];
};

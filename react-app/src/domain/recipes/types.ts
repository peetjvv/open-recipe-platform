import { MapObject } from '../../types/misc';

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

// TODO
// export type DietaryRequirement = 'vegetarian' | 'vegan' | 'lactose intolerant';

export type Recipe = {
  id: string;
  name: string;
  aka: string[];
  servings?: number;
  ingredients: { ingredientId: string; amount: number }[];
  steps: string[];
  createdDate: string;
  lastModified: string;
};

export type CreatingRecipe = Omit<
  Recipe,
  'id' | 'createdDate' | 'lastModified'
>;

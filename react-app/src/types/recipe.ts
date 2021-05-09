import { MapObject } from './misc';

// TODO
// export type DietaryRequirement = 'vegetarian' | 'vegan' | 'lactose intolerant';

export type Recipe = {
  id: string;
  name: string;
  aka: string[];
  servings?: number;
  ingredients: { ingredientId: string; amount: number }[];
  steps: string[];
  createdBy: string;
  createdDate: string;
  lastModified: string;
  prepTimeMillis?: number;
  cookTimeMillis?: number;
  culture?: string; // indian, asian, african, mexican, etc.
};

export type RecipeMapObject = MapObject<Recipe>;

export type CreatingRecipe = Omit<
  Recipe,
  'id' | 'createdBy' | 'createdDate' | 'lastModified'
>;

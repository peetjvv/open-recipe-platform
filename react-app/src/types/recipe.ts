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
};

export type CreatingRecipe = Omit<
  Recipe,
  'id' | 'createdBy' | 'createdDate' | 'lastModified'
>;

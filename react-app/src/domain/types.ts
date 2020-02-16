import { RouterState, RouterAction } from 'react-elmish-router';
import { FooState, FooAction } from './foo/types';
import { Route } from './router';

export type State = FooState & RouterState<Route>;

export type Action = FooAction | RouterAction<Route>;

export type Ingredient = {
  id: string;
  name: string;
  dryness: 'wet' | 'dry' | 'other';
  measurement: 'weight' | 'volume';
}[];

export type Recipe = {
  id: string;
  servings?: number;
  ingredients: { ingredientId: string; amount: number }[];
  method: string[];
};

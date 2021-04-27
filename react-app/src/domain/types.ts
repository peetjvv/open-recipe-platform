import { RecipesState, RecipesAction } from './recipes/types';
import { IngredientsState, IngredientsAction } from './ingredients/types';

export type State = IngredientsState & RecipesState;

export type Action = IngredientsAction | RecipesAction;

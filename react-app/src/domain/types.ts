import { ThemeState, ThemeAction } from './theme';
import { RecipesState, RecipesAction } from './recipes/types';
import { IngredientsState, IngredientsAction } from './ingredients/types';

export type State = IngredientsState & RecipesState & ThemeState;

export type Action = IngredientsAction | RecipesAction | ThemeAction;

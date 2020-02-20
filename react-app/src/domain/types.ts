import { RouterState, RouterAction } from 'react-elmish-router';
import { Route } from './router';
import { ThemeState, ThemeAction } from './theme';
import { RecipesState, RecipesAction } from './recipes/types';
import { IngredientsState, IngredientsAction } from './ingredients/types';

export type State = IngredientsState &
  RecipesState &
  ThemeState &
  RouterState<Route>;

export type Action =
  | IngredientsAction
  | RecipesAction
  | ThemeAction
  | RouterAction<Route>;

export type MapObject<V> = { [key: string]: V };

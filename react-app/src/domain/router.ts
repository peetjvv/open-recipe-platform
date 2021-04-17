import { StateEffectPair } from 'react-use-elmish';
import { RouterAction, routerReducer } from 'react-elmish-router';
import { State } from './types';
import { throwIfNotNever } from './../util/typescript';

export const routeDefinitions = {
  HOME: '/',
  RECIPES: '/recipes',
  RECIPE: '/recipes/:recipeId',
  NEW_RECIPE: '/recipes/new',
};

export type Route = keyof typeof routeDefinitions;

export const reducer = (
  prevState: State,
  action: RouterAction<Route>
): StateEffectPair<State, RouterAction<Route>> => {
  const [nextState, nextEffects] = routerReducer(prevState, action);

  if (action.subtype === 'URL_PATHNAME_UPDATED') {
    switch (action.route) {
      case 'HOME': // do stuff here
      case 'RECIPES': // do stuff here
      case 'RECIPE': // do stuff here
      case 'NEW_RECIPE':
      case false: // no matching pages
        return [nextState, nextEffects];
      default:
        throwIfNotNever(action); // Should never hit the default case //TODO: uncomment or just replace with react-router
    }
  }

  return [nextState, nextEffects];
};

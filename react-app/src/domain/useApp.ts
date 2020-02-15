import { Dispatch } from 'react';
import { State, Action, Route } from './types';
import useElmish, { StateEffectPair, Effect, Effects } from 'react-use-elmish';
import { initializeRouter, routerReducer } from 'react-elmish-router';
import { routeDefinitions } from './router';
import { throwIfNotNever } from '../util/typescript';

export const appReducer = (
  prev: State,
  action: Action
): StateEffectPair<State, Action> => {
  switch (action.type) {
    case 'ROUTER': {
      const [nextState, nextEffects] = routerReducer(prev, action);
      if (action.subtype === 'URL_PATHNAME_UPDATED') {
        switch (action.route) {
          case 'HOME': // do stuff here
          case 'PAGE_2': // do stuff here
          case false: // no matching pages
          default:
            throwIfNotNever(action.route);
        }
      } else {
        return [nextState, nextEffects];
      }
    }
    default:
      throwIfNotNever(action.type);
  }
};

export const initialState = (): StateEffectPair<State, Action> => {
  const [state, action] = initializeRouter<
    typeof routeDefinitions,
    State,
    Action
  >(routeDefinitions, [
    {
      /* Your domain state here */
    },
    Effects.none<Action>(),
  ]);

  return [state, action];
};

export default (): [State, Dispatch<Action>] => {
  return useElmish(appReducer, initialState);
};

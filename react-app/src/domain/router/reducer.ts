import { Effects, StateEffectPair } from 'react-use-elmish';
import {
  initializeRouter,
  RouterState,
  RouterAction,
} from 'react-elmish-router';
import { Route } from './types';

export const routeDefinitions = {
  HOME: '/',
  PAGE_1: '/page_1',
  // PAGE_N: '/page/more/:pageNumber',
};

const intializeReducer = (): StateEffectPair<
  RouterState<Route>,
  RouterAction<Route>
> => {
  const [state, action] = initializeRouter<
    Route,
    Omit<DomainState, 'client'>,
    RouterAction<Route>
  >(routeDefinitions, [
    {
      /* Your domain state here */
      //state?
    },
    Effects.none(),
  ]);

  return [state, action];
};

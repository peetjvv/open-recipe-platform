import { RouterState, RouterAction } from 'react-elmish-router';
import { FooState, FooAction } from './foo/types';
import { Route } from './router/types';

export type State = FooState & RouterState<Route>;

export type Action = FooAction | RouterAction<Route>;

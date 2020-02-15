import { RouterAction, RouterState } from 'react-elmish-router';

export type State = RouterState<Route>;

export type Action = RouterAction<Route>;

export type Route = 'HOME' | 'PAGE_2';

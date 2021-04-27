import { Reducer } from 'react';
import { throwIfNotNever } from '../util/typescript';
import {
  ThemeAction,
  ThemeState,
  initialState as ThemeInitialState,
  reducer as ThemeReducer,
} from './theme';

export type State = { theme: ThemeState };
export type AllActions = ThemeAction;

export const initialState: State = {
  theme: ThemeInitialState,
};

export const combinedReducer: Reducer<State, AllActions> = (state, action) => {
  switch (action.type) {
    case 'THEME':
      return {
        ...state,
        theme: ThemeReducer(state.theme, action),
      };

    default:
      throwIfNotNever(action.type);
      return state;
  }
};

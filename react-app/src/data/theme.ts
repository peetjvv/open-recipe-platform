import { Reducer } from 'react';
import { PayloadAction } from '../types/reducer';
import { throwIfNotNever } from '../util/typescript';

export type ThemeSuite = 'LIGHT' | 'DARK';

export type ThemeState = { suite: ThemeSuite };
export type ThemeAction = SetThemeSuiteAction;

export type SetThemeSuiteAction = PayloadAction<
  'THEME',
  'SET_THEME_SUITE',
  ThemeSuite
>;

export const initialState: ThemeState = {
  // initial theme should match user prefered theme
  // TODO: try pull from localStorage first - https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  /*window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'DARK'
      : 'LIGHT',*/
  suite: 'LIGHT',
};

export const reducer: Reducer<ThemeState, ThemeAction> = (
  prevState,
  action
) => {
  switch (action.subType) {
    case 'SET_THEME_SUITE':
      return {
        ...prevState,
        suite: action.payload,
      };

    default:
      throwIfNotNever(action.subType);
      return prevState;
  }
};

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

const getUserPreferredThemeSuite = (): ThemeSuite => {
  // 1. check localStorage
  if (!!localStorage.getItem('themeSuite')) {
    return localStorage.getItem('themeSuite') === 'DARK' ? 'DARK' : 'LIGHT';
  }

  // 2. check system settings
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'DARK';
  }

  // 3. fallback to LIGHT theme
  return 'LIGHT';
};

export const initialState: ThemeState = {
  // initial theme should match user prefered theme
  suite: getUserPreferredThemeSuite(),
};

export const reducer: Reducer<ThemeState, ThemeAction> = (
  prevState,
  action
) => {
  switch (action.subType) {
    case 'SET_THEME_SUITE':
      localStorage.setItem('themeSuite', action.payload);
      return {
        ...prevState,
        suite: action.payload,
      };

    default:
      throwIfNotNever(action.subType);
      return prevState;
  }
};

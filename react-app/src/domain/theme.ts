import { State } from './types';
import { StateEffectPair, Effects } from 'react-use-elmish';
import { throwIfNotNever } from '../util/typescript';

export type ThemeSuite = 'LIGHT' | 'DARK';

export type ThemeState = { theme: { suite: ThemeSuite } };
export type ThemeAction = SetThemeSuiteAction;

type BaseThemeAction = { type: 'THEME' };
export type SetThemeSuiteAction = BaseThemeAction & {
  subtype: 'SET_THEME_SUITE';
  payload: ThemeSuite;
};

export const initialState: ThemeState = {
  theme: {
    // initial theme should match user prefered theme
    // TODO: try pull from localStorage first - https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
    suite: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'DARK'
      : 'LIGHT',
  },
};
export const reducer = (
  prevState: State,
  action: ThemeAction
): StateEffectPair<State, ThemeAction> => {
  switch (action.subtype) {
    case 'SET_THEME_SUITE':
      return [
        {
          ...prevState,
          theme: { ...prevState.theme, suite: action.payload },
        },
        Effects.none(),
      ];
    default:
      return throwIfNotNever(action.subtype);
  }
};

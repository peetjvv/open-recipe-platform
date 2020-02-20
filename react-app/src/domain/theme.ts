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

export const initialState: ThemeState = { theme: { suite: 'LIGHT' } };
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

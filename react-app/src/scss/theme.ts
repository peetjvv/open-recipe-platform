import {
  createTheme,
  lightThemePrimitives,
  darkThemePrimitives,
  createThemedStyled,
  createThemedUseStyletron,
  // createThemedWithStyle,
} from 'baseui';
import { ThemeSuite } from '../domain/theme';
import { ThemePrimitives, Theme as BaseThemeType } from 'baseui/theme';
import { throwIfNotNever } from '../util/typescript';

type CustomTheme = BaseThemeType & {
  // set custom theme properties here
};

const getPrimitives = (themeSuite: ThemeSuite): ThemePrimitives => {
  let themeSuitePrimitives: ThemePrimitives;
  switch (themeSuite) {
    case 'LIGHT':
      themeSuitePrimitives = {
        ...lightThemePrimitives,
        // light theme suite specific primitives here
      };
      break;
    case 'DARK':
      themeSuitePrimitives = {
        ...darkThemePrimitives,
        // dark theme suite specific primitives here
      };
      break;
    default:
      return throwIfNotNever(themeSuite);
  }

  return {
    // global theme primitives here
    ...themeSuitePrimitives,
    // primaryFontFamily: 'Delius', // TODO: make the setting of the primary font family work here
    accent: '#F127E4', // hot pink
    accent50: '#FDEDFC',
    accent100: '#FCD3F9',
    accent200: '#F89FF3',
    accent300: '#F45AEA',
    accent400: '#F127E4',
    accent500: '#B71DAD',
    accent600: '#901788',
    accent700: '#600F5B',
  };
};

const getOverrides = (themeSuite: ThemeSuite) => {
  const primitives = getPrimitives(themeSuite);

  return {
    colors: {
      buttonSecondaryFill: primitives.accent100,
      buttonSecondaryText: primitives.accent,
      buttonSecondaryHover: primitives.accent200,
      buttonSecondaryActive: primitives.accent300,
      buttonSecondarySelectedFill: primitives.accent200,
      buttonSecondarySelectedText: primitives.accent,
      buttonSecondarySpinnerForeground: primitives.accent700,
      buttonSecondarySpinnerBackground: primitives.accent300,
    },
  };
};

const getTheme = (themeSuite: ThemeSuite): CustomTheme => ({
  ...createTheme(getPrimitives(themeSuite), getOverrides(themeSuite)),
  // set custom theme values here
});

export const themedStyled = createThemedStyled<CustomTheme>();
// export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const themedUseStyletron = createThemedUseStyletron<CustomTheme>();

export default getTheme;

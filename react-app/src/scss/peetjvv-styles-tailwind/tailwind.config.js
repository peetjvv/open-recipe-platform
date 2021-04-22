module.exports = {
  purge: [],
  darkMode: 'class', // options: false / 'media' / 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fefefe',
      black: 'var(--pt-black)',
      grey: {
        DEFAULT: 'var(--pt-grey)',
        light: 'var(--pt-grey-light)',
        dark: 'var(--pt-grey-dark)',
      },
      blue: {
        DEFAULT: 'var(--pt-blue)',
        // light: '#85d7ff',
        // dark: '#009eeb',
      },
      brown: {
        DEFAULT: 'var(--pt-brown)',
      },
    },

    extend: {},

    fontFamily: {
      display: ['Sniglet'],
      body: ['Nunito'],
    },

    screens: {
      mobile: { max: 'var(--breakpoint-mobile)' },
      tablet: {
        min: 'var(--breakpoint-mobile)',
        max: 'var(--breakpoint-tablet)',
      },
      desktop: {
        min: 'var(--breakpoint-tablet)',
        max: 'var(--breakpoint-desktop)',
      },
      wide: { min: 'var(--breakpoint-desktop)' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

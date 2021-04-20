const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // options: false / 'media' / 'class'
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
      display: ['Sniglet', 'cursive'],
      body: ['Sniglet', 'cursive'],
    },

    screens: {
      sm: { max: 'var(--breakpoint-sm)' },
      md: { min: 'var(--breakpoint-sm)', max: 'var(--breakpoint-md)' },
      lg: { min: 'var(--breakpoint-md)', max: 'var(--breakpoint-lg)' },
      xl: { min: 'var(--breakpoint-lg)' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

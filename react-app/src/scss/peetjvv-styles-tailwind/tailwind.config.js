const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // options: false / 'media' / 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fefefe',
      black: '#141414',
      blue: {
        // light: '#85d7ff',
        DEFAULT: '#1a79bc',
        // dark: '#009eeb',
      },
      brown: {
        DEFAULT: '#7d4300',
      },
      grey: {
        dark: '#151c26',
        DEFAULT: '#333333',
        light: '#d9d9d9',
      },
    },

    extend: {},

    fontFamily: {
      display: ['Sniglet', 'cursive'],
      body: ['Sniglet', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

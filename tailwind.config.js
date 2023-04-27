/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
      sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.gray,
      neutral: colors.blueGray,
      stone: colors.stone,
    },

    // gradients: (theme) => ({
    //   // Array definition (defaults to linear gradients).
    //   creamwhite: ['to bottom', '#fcfbf8', '#f8fbff'],
    //   fireopal: ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
    //   emerald: ['to right', theme('colors.green.400'), theme('colors.teal.500')],
    // }),
    extend: {
      backgroundImage: {
        creamwhite: 'linear-gradient(to bottom, #fcfbf8 #f8fbff, transparent 100%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1474px',
        // => @media (min-width: 1536px) { ... }

        '2.5xl': '1750',
        // => @media (min-width: 1280px) { ... }
        '3xl': '2000px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-gradients'), require('daisyui'), require("tw-elements/dist/plugin.cjs")],
}

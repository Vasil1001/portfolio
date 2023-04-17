/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    gradients: (theme) => ({
      // Array definition (defaults to linear gradients).
      creamwhite: ['to bottom', '#fcfbf8', '#f8fbff'],
      fireopal: ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
      emerald: ['to right', theme('colors.green.400'), theme('colors.teal.500')],
    }),
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

  plugins: [require('tailwindcss-gradients'), require('daisyui')],
}

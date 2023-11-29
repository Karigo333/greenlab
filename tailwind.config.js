/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'custom_green': '#008000',
      'gray-300': '#e0e0e0',
      'gray-800': '#6c757d',
      'gray-900': '#111827',
      'blue': '0000ff',
      'light-green': '#35fd7b',
    },
    backgroundImage: {
      'main-image': "url('../src/assets/images/main/background.png')",
    },
    fontFamily: {
      raleway: ['Raleway'],
      nunito: ['Nunito'],
      montserrat: ['Montserrat'],
      montserrat_alternates: ['Montserrat Alternates'],
    },
    container: {
      center: true,
      padding: '8rem',
    },
    screens: {
      "ss": '300px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
} 
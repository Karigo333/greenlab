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
    extend: {},
  },
  plugins: [],
} 
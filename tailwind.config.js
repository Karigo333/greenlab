/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'ss': '340px', // Добавляем ss в общий раздел screens
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
      'blue': '#0000ff',
      'light-green': '#35fd7b',
      'sky': '#3e2093',
      'red': '#ff1818',
      'violet': '#8120ff',
    },
    backgroundImage: {
      'main-image': "url('../src/assets/images/main/background.jpg')",
    },
    fontFamily: {
      raleway: ['Raleway'],
      nunito: ['Nunito'],
      montserrat: ['Montserrat'],
      montserrat_alternates: ['Montserrat Alternates'],
      jost: ['Jost'],
    },
    container: {
      center: true,
      screens: {
        'ss': '340px',  // Это тоже можно оставить для контейнера
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    extend: {},
  },
  plugins: [],
}

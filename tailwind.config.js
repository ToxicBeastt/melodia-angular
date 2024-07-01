/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      primary: {
        100: '#F7CAC9',
        200: '#F5B7B5',
        300: '#F3A8A4',
        400: '#F1948F',
        500: '#A91D3A',
        600: '#C73659',
        700: '#D2556F',
        800: '#E2787F',
        900: '#F95C83',
      },
      secondary: {
        100: '#F7F7F7',
        200: '#E5E5E5',
        300: '#CCCCCC',
        400: '#B3B3B3',
        500: '#151515',
        600: '#333333',
        700: '#4C4C4C',
        800: '#666666',
        900: '#888888',
      },
    },
    extend: {},
  },
  plugins: [],
}

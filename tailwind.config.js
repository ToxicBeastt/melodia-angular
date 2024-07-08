/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      dark: {
        100: '#333333',
        200: '#373737',
        300: '#3f3f3f',
        400: '#424242',
        500: '#242424',
        600: '#1f1f1f',
        700: '#1a1a1a',
        800: '#151515',
        900: '#0f0f0f',
      },
      gray: {
        100: '#9f9f9f',
        200: '#8f8f8f',
        300: '#7f7f7f',
        400: '#7d848e',
        500: '#6f6f6f',
        600: '#5f5f5f',
        700: '#4f4f4f',
        800: '#3f3f3f',
        900: '#2f2f2f',
      },
      primary: {
        100: '#577B8D',
        200: '#4c6f83',
        300: '#416778',
        400: '#3a5f6e',
        500: '#334d63',
        600: '#2a4468',
        700: '#233f6d',
        800: '#1e3762',
        900: '#173a57',
      },
      light: {
        100: '#ffffff',
        200: '#f7f7f7',
        300: '#f2f2f2',
        400: '#ebebeb',
        500: '#e5e5e5',
        600: '#d9d9d9',
        700: '#cccccc',
        800: '#bfbfbf',
        900: '#a6a6a6',
      },
    },
    extend: {},
  },
  plugins: [],
}

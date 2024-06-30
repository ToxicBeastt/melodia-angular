/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      // Background
      'midnight-black': '#0D0D0D',
      // Accents and buttons
      'crimson-red': '#D32F2F',
      // Highlights and call-to-action
      gold: '#FFC107',
      // Text and secondary elements
      'slate-gray': '#607D8B',
      // Main text and contrast
      'ivory-white': '#FAFAFA',
    },
    extend: {},
  },
  plugins: [],
}

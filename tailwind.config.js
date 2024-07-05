/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pastel_green': '#e3fbae',
      'near_black': '#14141a',
      'slate_gray': '#282834',
      'white': '#ffffff',
      'custom-bg': 'rgba(40, 40, 52, 0.28)',
    },
    fontFamily: {
      goia_display_regular: ['goia_display_regular', 'sans-serif'],
      goia_regular: ['goia_regular', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
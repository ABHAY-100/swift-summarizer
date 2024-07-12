const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'like-yellow': '#e3fbae',
        'near-black': '#14141a',
        'just-gray': '#282834',
  
        'shadow-gray': 'rgba(40, 40, 52, 0.28)',
        'shadow-gray-light': 'rgba(40, 40, 52, 0.12)',
        'shadow-gray-dark': 'rgba(40, 40, 52, 0.45)',
        'subtle-shadow-gray': 'rgba(40, 40, 52, 0.4)',
      },
      fontFamily: {
        'goia-display': ['goia-display', 'sans-serif'],
        'goia': ['goia', 'sans-serif'],
        'goia-medium': ['goia-medium', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
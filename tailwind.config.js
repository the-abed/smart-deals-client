/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // <-- automatically detect device dark mode
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

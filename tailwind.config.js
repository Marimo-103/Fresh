/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Frank': ['Frank Ruhl Libre', 'serif'],
      'Podkova': ['Podkova', 'serif']
    },

    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        monte : ['Montserrat', 'sans-serif'],
        cali : ['Nothing You Could Do', 'cursive']
      }
    },
  },
  plugins: [],
}
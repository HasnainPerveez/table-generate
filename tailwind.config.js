/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {  		screens: {
      sm: '325px',
      md: '720px',
      lg: '1080px'
    },
    },
  },
  plugins: [],
}
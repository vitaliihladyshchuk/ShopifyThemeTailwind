/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    extend: {
      colors: {
       'light-green': '#49BAA3',
      }
    },
  },
  plugins: [],
}


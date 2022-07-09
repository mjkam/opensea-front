/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        // 'transform': 'transform'
      },
      boxShadow: {
        'header': 'rgb(4 17 29 / 25%) 0px 0px 8px 0px',
        'search': 'rgb(0 0 0 / 16%) 0px 4px 16px',
        'search-item': 'rgb(4 17 29 / 25%) 0px 0px 8px 0px',
      }
    },
  },
  plugins: [],
}

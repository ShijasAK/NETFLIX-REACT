/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,cjs,mjs,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}



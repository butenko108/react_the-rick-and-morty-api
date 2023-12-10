/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'night-sky': '#272B33',
        'mortar-grey': '#9E9E9E',
        'white-smoke': '#F5F5F5',
        'dark-elf': '#3C3E44',
      },
      boxShadow: {
        card: '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};

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
        'washed-black': '#202329',
        'tangled-web': '#B2B2B2',
        'night-black': '#303136',
        poinciana: '#D63D2E',
        'verdant-fields': '#55CC44',
      },
      boxShadow: {
        card: '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
        button:
          '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)',
        'pagination-active-button':
          '0px 5px 14px 0px rgba(0, 0, 0, 0.12), 0px 9px 10px 0px rgba(0, 0, 0, 0.14), 0px 5px 5px 0px rgba(0, 0, 0, 0.20)',
        'pagination-inactive-button':
          '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)',
      },
    },
  },
  plugins: [],
};

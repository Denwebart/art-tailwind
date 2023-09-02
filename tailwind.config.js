/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    screens: {
      xl: {max: '1449.99px'},
      lg: {max: '1199.99px'},
      md: {max: '991.99px'},
      sm: {max: '767.99px'},
      xs: {max: '479.99px'},
    },
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      fontFamily: {
        headings: 'Nunito',
        text: 'Open Sans',
      },
    },
  },
  plugins: [],
}
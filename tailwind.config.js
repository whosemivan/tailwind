/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#2E6B75',
        textColor: '#080000',
        btnColor: '#92C3BD'
      },
      padding: {
        big: '50px'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px '
      }
    },
  },
  plugins: [],
}

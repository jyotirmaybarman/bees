/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
  
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
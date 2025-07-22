/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   gold: {
      //     300: '#d4af37', // Dorado más elegante
      //     400: '#b8860b', // Dorado principal más sofisticado
      //     500: '#996515', // Dorado oscuro
      //     600: '#8b6914', // Dorado muy oscuro
      //   },
      //   cream: {
      //     50: '#fefefe',
      //     100: '#fdf6e3',
      //     200: '#f5e6d3',
      //     300: '#e6d7c3',
      //   }
      // },
      fontFamily: {
        'kapakana': ['Kapakana', 'cursive'],
      }
    },
  },
  plugins: [],
} 
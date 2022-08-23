/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        primary: '#22d3ee',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

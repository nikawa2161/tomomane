/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#192555',
          secondary: '#53AAED',
          google: '#4284f4',
        },
      },
    },
  },
  plugins: [],
}

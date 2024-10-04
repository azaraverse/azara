/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
        colors: {
            skin: {
                DEFAULT: '#C2851B',
                light: '#E4A672',
                dark: '#C97C4A'
            }
        }
    },
  },
  plugins: [],
}


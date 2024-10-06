/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            skin: {
                DEFAULT: '#C2854C',
                light: '#E4A672',
                dark: '#C26D1B'
            }
        }
    },
    fontFamily: {
        'mono': ['"Roboto Mono"', '"IBM Plex Mono"'],
        'sans': ['Poppins'],
    }
  },
  plugins: [],
}


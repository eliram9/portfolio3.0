/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./*.{js,ts,jsx,tsx}",
      "./src/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
            main: '#4E5FFF',   
            black: '#080808',
            white: '#FFFFFF',
            darkGray: '#656565', 
            lightGray: '#D9D9D9',
            special: 'linear-gradient(to right, #D9D9D9, #1E1E1E)', 
        },
        fontFamily: {
          'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          'orbitron': ['Orbitron', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
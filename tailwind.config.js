/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#386641',
        secondary: '#6A994E',
        tertiary: '#A7C957',
        quartiary: '#F2E8Cf',
        quintenary: '#BC4749',
        input: '#F7F7F7'
      },
      fontFamily:{
        primary:['Quicksand','sans-serif']
      }
    },
    
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ACD9C2',
        input: '#F7F7F7'
      },
      fontFamily:{
        primary:['Quicksand','sans-serif']
      }
    },
    
  },
  plugins: [],
}


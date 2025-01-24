/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins
        lato: ['Lato', 'sans-serif'],       // Adding Lato
      },
      colors: {
        black: '#131415',
        text: '#FFFFFF',
        green: '#8FDC24',
        'gray-background': '#DEDCDC',
        primary: '#8FDC24',
        'navbar-bg': '#131415',
      },
    },
  },
  plugins: [],
}

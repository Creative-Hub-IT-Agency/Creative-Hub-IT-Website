/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins
        lato: ['Lato', 'sans-serif'], // Adding Lato
        outfit: ['Outfit', 'serif']
      },
      colors: {
        black: '#131415',
        text: '#FFFFFF',
        green: '#8FDC24',
        'gray-background': '#DEDCDC',
        lime: '#8FDC24',
        'deep-lime': '#79BA16',
        'navbar-bg': '#131415',
        main_color: '#222',
        active_color: '#E02166',
        light: '#FFF'
      },
    },
  },
  plugins: [],
};

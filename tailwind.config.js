/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
      h1: '2rem',
      h2: '1.5rem',
      h3: '1.3rem',
      h4: '1rem',
      h5: '0.8rem',
      h6: '0.7rem',
    },
    colors:{
      muted: '#828FA3',
      default:'#000112',
      dark:'#FFFFFF',
    },
    }
  },
  plugins: []
};

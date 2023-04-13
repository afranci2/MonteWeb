/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './app/**/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './sections/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    screens: {      
      'md': '1000px',
    },
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'gold': '#f1d302'
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      screens: {
        desktop: '850px'
      },
      fontFamily: {
        'sans': ['Mona Sans'],
        'serif': ['Goldenbook']
      },
      fontSize: {
        'header': '3xl'
      }
    },
  },
  plugins: [],
};

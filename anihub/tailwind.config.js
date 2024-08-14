/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animate: {
          '0%': {
            left: '0',
            transform: 'translate(-100%)',
          },
          '100%': {
            left: '100%',
            transform: 'translate(0%)',
          },
        },
        animateReverse: {
          '0%': {
   
            transform: 'translateX(-100%)',
          },
          '100%': {
            
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        animate: 'animate 2s linear infinite', 
        animateReverse:'animate 2s linear infinite reverse',
      },
    },
  },
  plugins: [],
}
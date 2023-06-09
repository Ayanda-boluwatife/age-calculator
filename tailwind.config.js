/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        Purple: 'hsl(259, 100%, 65%)',
        light_red: 'hsl(0, 100%, 67%)',
        off_white: 'hsl(0, 0%, 94%)',
        light_grey: 'hsl(0, 0%, 86%)',
        smokey_grey: 'hsl(0, 1%, 44%)',
        off_black: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        'popp': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'slide-in' : {
          '0%': {
            transform: 'translateX(120%)'
          },
          '50%': {
            transform: 'translateX(0%)'
          },
          '100%':{
            transform: 'translateX(-10px)'
          }
        },
        'slide-out' : {
          '0%': {
            transform: 'translateX(0%)'
          },
          '30%': {
            transform: 'translateX(-10px)'
          },
          '50%': {
            tranasform: 'translateX(0px)'
          },
          '100%':{
            transform: 'translateX(120%)'
          }
        }
      },
      animation: {
        'slide-in' : 'slide-in 1s ease-in-out 0.1ms forwards',
        'close' : 'slide-out 1s ease-in-out 0.1ms forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.remove-arrow': {
          '-moz-appearance': 'text-field',
        },
      })
    })
  ]
}


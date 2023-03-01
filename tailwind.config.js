const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./resources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Noto-Sans-TC': ["Noto Sans TC"],
      },
      screens: {
        'sm': {'raw': 'print, (min-width: 640px)'},
      },
      colors: {
        'primary': colors.blue,
      }
    },
  },
  plugins: [],
}

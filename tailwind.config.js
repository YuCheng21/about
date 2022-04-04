const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./resources/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': colors.blue,
      }
    },
  },
  plugins: [],
}

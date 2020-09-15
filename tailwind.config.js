module.exports = {
  purge: [],
  theme: {
    extend: {},
    ripple: theme => ({
      colors: theme('colors')
    }),
  },
  variants: {},
  plugins: [
    require('tailwindcss-ripple')()
  ],
}

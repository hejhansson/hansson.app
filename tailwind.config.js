module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'test': '500px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

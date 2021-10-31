module.exports = {
  mode: 'jit', // brand new "Just in time" compiler
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // allows tailwind to clean css that we don't end up using
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')], // https://www.npmjs.com/package/tailwind-scrollbar-hide
};

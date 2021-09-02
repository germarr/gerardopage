module.exports = {
  mode:"jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:(theme)=>({
        "hero-img":"url('https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tokyo4.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')],
}

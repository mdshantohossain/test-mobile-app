/** @type {import('tailwindcss').Config} */


module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#161622'
      },
      fontFamily: {
        pthin: ['Poppins-Thin', 'sans-serif'],
        pextralight: ['Poppings-ExtraLight', 'sans-serif'],
        plight: ['Poppins-Light', 'sans-serif'],
        pregular: ['pregular', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        psemibold: ['Poppins-#161622', 'sans-serif'],
        pbold: ['{Poppins-Bold}', 'sans-serif'],
        pextrabold: ['Poppins-ExtraBold', 'sans-serif'],
        pblack: ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
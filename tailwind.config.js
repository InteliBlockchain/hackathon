/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xxs": "10px",
      },
      colors: {
        gray1: "#BBBBBB",
        purple1: "#4863F7",
        blue: "#4863F7",
      },
      textColor: {
        blueText: "#4863F7",
      },
      screens: {
          'mobile': '640px',
          'desktop': '566px',
      }
    },
  },
  plugins: [],
}
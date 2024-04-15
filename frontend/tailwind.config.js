/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      screens:{
        mobile: "270px",
        mb_medium:"350px",
        mb_max: "460px",
      }
    },
  },
  plugins: [],
}


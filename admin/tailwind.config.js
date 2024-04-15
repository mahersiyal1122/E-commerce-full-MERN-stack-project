/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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


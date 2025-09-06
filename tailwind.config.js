/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "lit-bg":`radial-gradient(
        50.7% 50.49% at 50% 40.85%,
        rgba(0,225,128,0.5) 8%,
        rgba(0,40,0, 0.45) 35%,
        rgba(0, 20, 0, 0.6) 60%,
        rgba(0,0,0,0.85)100%
        )`
      },
      fontFamily: {
       ebrima: ["var(--font-ebrima)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
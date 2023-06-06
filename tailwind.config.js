/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "320px",
      md: "390px",
      lg: "744px",
      xl: "1277px",
      "2xl": "1440px",
      "3xl": "1728px",
    },
  },
  plugins: [],
};

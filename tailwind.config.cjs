/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightOrange: "#FFF7EB",
        orange: "#FF9E1C",
        darkBlue: "#010B14",
        darkGray: "#1E1E1E",
        mediumBlue: "#313B44"
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        russo: ["Russo One", "monospace"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
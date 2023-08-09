/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      regular: "Open Sans",
    },
    extend: {
      backgroundImage: {
        bg: "url('img/bg.jpg')",
      },
      colors: {
        bg: "#ebe0e0",
      },
      width: {
        "carousel-el": "48rem",
        carousel: "58rem",
      },
      height: {
        "carousel-el": "30rem",
        carousel: "32rem",
      },
    },
  },
  plugins: [],
};

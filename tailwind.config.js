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
        carousel1: "url('img/carousel1.jpg')",
      },
      colors: {
        bg: "#ebe0e0",
      },
      width: {
        "carousel-el": "48rem",
        carousel: "58rem",
        "carousel-text": "30rem",
      },
      height: {
        "carousel-el": "30rem",
        carousel: "32rem",
      },
      borderRadius: {
        "icon-circle": "4rem",
      },
    },
  },
  plugins: [],
};

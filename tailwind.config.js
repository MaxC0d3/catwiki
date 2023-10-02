/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E3E1DC",
      },
      textColor: {
        primary: "#291507",
        link: "rgba(41, 21, 7, 0.60)",
      },
    },
  },
  plugins: [],
};

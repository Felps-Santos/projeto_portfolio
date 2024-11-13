/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#0a0a0a", // Nome da cor personalizada
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "cursive"],
      },
    },
  },
  plugins: [],
};

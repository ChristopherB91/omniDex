/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Arcade", "sans-serif"],
      },
      keyframes: {
        open: {
          "0%": { transform: "scaleY(0)" },
          "50%": { transform: "scaleY(.5)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        open: "open 1.5s linear",
        open2: "open 2.5s linear",
        open3: "open 3.5s linear",
      },
    },
  },
  plugins: [],
};

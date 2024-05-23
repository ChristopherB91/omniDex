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
          "25%": { transform: "scaleY(.25)" },
          "50%": { transform: "scaleY(.5)" },
          "75%": { transform: "scaleY(.75)" },
          "100%": { transform: "scaleY(1)" },
        },
        open2: {
          "0%": { transform: "scaleY(0)" },
          "25%": { transform: "scaleY(0)" },
          "50%": { transform: "scaleY(0)" },
          "75%": { transform: "scaleY(.5)" },
          "100%": { transform: "scaleY(1)" },
        },
        open3: {
          "0%": { transform: "scaleY(0)" },
          "25%": { transform: "scaleY(0)" },
          "50%": { transform: "scaleY(0)" },
          "75%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        text: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      },
      animation: {
        open: "open 1.5s linear",
        open2: "open2 2s linear",
        open3: "open3 2.5s linear",
        text: "text 1s ease-in-out 3s",
      },
    },
  },
  plugins: [],
};

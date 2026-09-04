/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
      },
      colors: {
        brand: {
          orange: "#FF5A36",
          background: "#FAFAF7",
          text: "#111111",
          muted: "#5F5F5A",
          border: "#E7E5E0",
          white: "#FFFFFF",
        },
      },
    },
  },

  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000300",
        secondary: "#00df9a"
      }
    },
  },
  plugins: [],
}


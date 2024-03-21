/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c8a664',
        beige: "rgb(251 248 243)",
        darkGold: "#D1B000",
        lightGold: "#FFD700",
      },
    },
  },
  plugins: [],
  
}


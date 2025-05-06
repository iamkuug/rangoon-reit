module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#163e80', // Main brand color
          secondary: '#4ac1e0', // Supporting brand color
          accent: '#e87200', // Accent color
        },
      },
      fontFamily: {
        display: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
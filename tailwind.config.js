const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: '-0.015em',
    },
    extend: {
      height: {
        'half-screen': '50vh'
      }
    },
  },
  plugins: [
    
  ],
}

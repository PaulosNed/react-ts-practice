/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '103': '1.03', // You can adjust this value as needed
      },
    },
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('hover-scale-103', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`hover-scale-103${separator}${className}`)}:hover-scale-103`;
        });
      });
    },
  ],
}



/** @type {import('tailwindcss').Config} */

const sharedTailwindConfig = require('./src/app/tailwind/config');

module.exports = {
  presets: [sharedTailwindConfig],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'onboard': "url('assets/onboard.svg')",
      }
    },
  },
  plugins: [],
};


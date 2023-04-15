const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--eb-garamond)', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

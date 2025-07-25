/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        primary2: 'rgba(255, 255, 255, 0.1)',
        secondary: '#ffffff',
      }
    },
  },
  plugins: [],
}

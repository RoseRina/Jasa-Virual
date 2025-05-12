/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c3e50', // warna biru tua
          light: '#34495e',
        },
        secondary: {
          DEFAULT: '#e74c3c', // warna merah
        },
        neutral: {
          DEFAULT: '#ecf0f1', // warna abu-abu terang
          dark: '#95a5a6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 
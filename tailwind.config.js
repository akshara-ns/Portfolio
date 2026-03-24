/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F4',
        navy: '#1B2B4B',
        lavender: {
          DEFAULT: '#C4B5F4',
          light: '#DDD6FE',
          dark: '#A78BFA',
          deeper: '#6D28D9',
        },
        sky: {
          DEFAULT: '#A8D4E6',
          light: '#D1EAF5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        japanese: ['Shippori Mincho', 'serif'],
      },
    },
  },
  plugins: [],
}


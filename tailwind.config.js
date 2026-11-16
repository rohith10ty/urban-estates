/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0D0D0D',
          dark: '#141414',
          charcoal: '#222222',
          accent: '#C5A880',
          'accent-hover': '#B3946B',
          'accent-light': '#F6F2EC',
          cream: '#FAFAFA',
          surface: '#F4F4F4',
          border: '#E6E6E6',
          muted: '#737373',
          subtle: '#A3A3A3',
        }
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        widest: '0.18em',
        ultra: '0.25em',
      }
    },
  },
  plugins: [],
}

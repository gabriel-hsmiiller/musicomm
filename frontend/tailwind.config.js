/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#92253F",
        "orange": "#E4663A",
        "orange-shadow": "#E4663A7F",
        "yellow": "#FFE35E",
        "yellow-pale": "#FBFF7C",
        "gray-pale": "#E6E6E6",
        "gray-light": "#B1B1B1",
        "gray-medium": "#737373",
        "gray-dark": "#2B2B2B",
        "spotify": "#1DB954",
        "deezer": "#FF6230",
        "amazon": "#232F3E",
        "youtube": "#FF0000",
      },
      fontFamily: {
        "title": ['"Righteous", sans-serif'],
        "body": ['"Catamaran", sans-serif']
      },
      boxShadow: {
        custom: '0 0 20px 4px'
      },
      spacing: {
        "1/12": "8.333333%"
      },
      height: {
        "7.5": "1.875rem", /* 28px */
        "sidebar": "calc(100vh - 180px)"
      },
      animation: {
        circlingBg: 'circlingBgKeys 30s linear infinite'
      },
      keyframes: {
        circlingBgKeys: {
          '0%': { backgroundPosition: 'right' },
          '100%': { backgroundPosition: 'left' }
        }
      }
    },
  },
  plugins: [],
}
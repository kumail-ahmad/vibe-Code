/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shadows: {
          black: "#000000",
          surface: "#0a0a0a",
          card: "#121212",
          border: "#262626",
          muted: "#737373",
          light: "#a3a3a3",
          white: "#ffffff",
          offwhite: "#f5f5f5",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

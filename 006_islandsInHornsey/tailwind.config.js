/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        islands: {
          cream: '#F7F4EE',
          'cream-dark': '#EFECE6',
          'cream-light': '#FAF8F5',
          espresso: '#1C1917',
          charcoal: '#292524',
          black: '#12100E',
          olive: '#4A5237',
          'olive-light': '#5C6548',
          terracotta: '#A0523D',
          'terracotta-light': '#B86B4D',
          sand: '#D4A373',
          muted: '#8C857B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        'tight-editorial': '0.92',
      },
      letterSpacing: {
        'tight-editorial': '-0.04em',
        'wide-editorial': '0.2em',
      }
    },
  },
  plugins: [],
}


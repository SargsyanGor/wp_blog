module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontSize: {
        'xxs': '.25rem',
      }
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover']
  },
  plugins: [],
}

/** @type {import("tailwindcss").Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cartoon-orange': {
          50: '#fff8f0',
          100: '#ffe6d5',
          200: '#ffd4ad',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff7700',
          600: '#dd6600',
          700: '#bb5500',
          800: '#884400',
          900: '#663300',
        },
      },
      boxShadow: {
        'cartoon': '0 8px 0 rgba(255, 119, 0, 0.3), 0 12px 20px rgba(0, 0, 0, 0.15)',
        'cartoon-md': '0 6px 0 rgba(255, 119, 0, 0.25), 0 9px 15px rgba(0, 0, 0, 0.1)',
        'cartoon-lg': '0 10px 0 rgba(255, 119, 0, 0.35), 0 15px 25px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'pop': 'pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'bounce-pop': 'bounce-pop 0.6s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.95) rotate(0deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        'bounce-pop': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
    fontFamily: {
      mushaf: 'Mushaf, sans-serif',
    },
  },
  plugins: [],
}

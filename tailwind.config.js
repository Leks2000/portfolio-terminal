/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        'terminal-bg': '#0d0d0d',
        'terminal-fg': '#d1d5db',
        'terminal-purple': '#7c3aed',
        'terminal-blue': '#3b82f6',
        'terminal-green': '#10b981',
      },
      animation: {
        'typing': 'typing 0.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        glow: {
          'from': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          'to': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor' }
        }
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F1EA',
        ink: '#1A1815',
        muted: '#4A4640',
        stone: '#6B6660',
        sienna: '#C8531A',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        signature: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

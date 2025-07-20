import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'preahvihear': ['Preahvihear', 'sans-serif'],
        'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

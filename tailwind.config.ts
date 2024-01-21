import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/styles/**/*.{css,ts,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/client/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        descent: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(50%)'},
        }
      },
      animation: {
        descent: 'descent 0.7s ease-in-out 1'
      },
      colors: {
        bgcolor: '#f8f5f2',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'mb': '840px',
      'lg': '1024px'
    }
  },
  plugins: [],
}
export default config

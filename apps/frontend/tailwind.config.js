/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
        },
        secondary: {
          500: '#764ba2',
          600: '#6b4190',
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        success: {
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-text': 'linear-gradient(45deg, #fff, #e0e7ff)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      animation: {
        'pulse-slow': 'pulse 2s infinite',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      aspectRatio: {
        poster: '2/3',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

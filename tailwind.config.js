/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Bazaari theme colors
        'theme-mint': '#8ecae6',
        'theme-blue': '#219ebc',
        'theme-dark-blue': '#023047',
        'theme-orange': '#ffb703',
        'theme-yellow': '#fb8500',
        
        primary: {
          DEFAULT: '#219ebc',   // theme blue
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#219ebc',       // primary (main)
          600: '#0284c7',       // primary-dark
          700: '#0369a1',
          800: '#075985',
          900: '#023047',       // theme dark blue
        },
        secondary: {
          DEFAULT: '#8ecae6',   // theme mint
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#8ecae6',       // secondary (main)
          400: '#7dd3fc',
          500: '#38bdf8',
          600: '#0ea5e9',
          700: '#0284c7',
          800: '#0369a1',
          900: '#0c4a6e',
        },
        accent: {
          DEFAULT: '#ffb703',   // theme orange
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#ffb703',       // accent (main)
          600: '#d97706',       // accent-dark
          700: '#b45309',
          800: '#92400e',
          900: '#fb8500',       // theme yellow
        },
        background: {
          DEFAULT: '#FFF8E7',   // ivory
          50: '#ffffff',
          100: '#FFF8E7',       // background (main)
          200: '#f5f1e8',
          300: '#ede6d3',
          400: '#ddd4bd',
          500: '#c9bea0',
        },
        text: {
          DEFAULT: '#2E2E2E',   // charcoal
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#2E2E2E',       // text (main)
          900: '#1f2937',
        }
      },
      fontFamily: {
        // Bazaari fonts (Cairo from Ogani theme)
        sans: ['Cairo', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        display: ['Cairo', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'indian': '0 4px 12px rgba(242, 140, 40, 0.2)',
        'indian-lg': '0 8px 24px rgba(242, 140, 40, 0.3)',
        'green': '0 4px 12px rgba(10, 77, 60, 0.2)',
        'gold': '0 4px 12px rgba(255, 215, 0, 0.3)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
      },
      backgroundImage: {
        'gradient-theme': 'linear-gradient(135deg, #8ecae6 0%, #219ebc 100%)',
        'gradient-primary': 'linear-gradient(135deg, #219ebc 0%, #023047 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ffb703 0%, #fb8500 100%)',
        'gradient-mint': 'linear-gradient(135deg, #8ecae6 0%, #7dd3fc 100%)',
      },
    },
  },
  plugins: [],
}
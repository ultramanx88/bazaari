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
        // Indian marketplace theme colors
        primary: {
          DEFAULT: '#F28C28',   // saffron orange
          50: '#fef7ed',
          100: '#fde8d3',
          200: '#fbcda5',
          300: '#f8ab6d',
          400: '#f5a654',       // primary-light
          500: '#F28C28',       // primary (main)
          600: '#e67e1f',       // primary-dark
          700: '#d16a0f',
          800: '#a85410',
          900: '#87450f',
        },
        secondary: {
          DEFAULT: '#0A4D3C',   // dark green
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#0d5a47',       // secondary-light
          700: '#0A4D3C',       // secondary (main)
          800: '#083d30',       // secondary-dark
          900: '#052e23',
        },
        accent: {
          DEFAULT: '#FFD700',   // gold
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFD700',       // accent (main)
          600: '#e6c200',       // accent-dark
          700: '#ca8a04',
          800: '#a16207',
          900: '#854d0e',
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
        // Indian marketplace fonts
        sans: ['Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'serif'],
        display: ['Noto Sans Devanagari', 'system-ui', 'sans-serif'],
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
        'gradient-indian': 'linear-gradient(135deg, #F28C28 0%, #e67e1f 100%)',
        'gradient-green': 'linear-gradient(135deg, #0A4D3C 0%, #083d30 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #e6c200 100%)',
        'gradient-ivory': 'linear-gradient(145deg, #FFF8E7, #f5f1e8)',
      },
    },
  },
  plugins: [],
}
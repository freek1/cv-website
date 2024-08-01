module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',  // Light background
          100: '#F1F5F9', // Light text
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF', // Light secondary text
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937', // Dark text
          900: '#111827',
        },
        blue: {
          500: '#3B82F6', // Accent color
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',  // Dark secondary text
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B', // Dark background
          900: '#0F172A',
        },
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },

  plugins: [],
}
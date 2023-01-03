/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0EA5E9',
          400: '#47B5FF',
          700: '#465E8B',
          800: '#163369',
          900: '#07074E'
        },
        black: '#000',
        white: '#fff',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor')
      }),
      borderOpacity: (theme) => theme('opacity'),
      borderRadius: {
        none: '0px',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
        full: '9999px'
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        8: '8px'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        ml: '0 7px 10px -2px rgba(0, 0, 0, 0.1), 0 3px 5px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none'
      },
      flex: {
        1: '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        none: 'none'
      },
      flexGrow: {
        0: '0',
        DEFAULT: '1'
      },
      flexShrink: {
        0: '0',
        DEFAULT: '1'
      }
    }
  },
  plugins: []
};

import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['class'],
  plugins: [require('tailwindcss-animate')],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        denim: {
          100: '#d9ebfd',
          200: '#b2d7fa',
          300: '#7dbcf7',
          400: '#3597f2',
          50: '#ecf5fe',
          500: '#0b60b0',
          600: '#0a549a',
          700: '#094c8b',
          800: '#073f73',
          900: '#052748',
          950: '#031a30',
          border: '#c0d3e5',
          hover: '#095092',
          main: '#0b60b0',
          pressed: '#053058',
          surface: '#f0f7ff',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          border: '#eeb4b0',
          foreground: 'hsl(var(--destructive-foreground))',
          hover: '#bd251c',
          main: '#cb3a31',
          pressed: '#731912',
          surface: '#fff4f2',
        },
        foreground: 'hsl(var(--foreground))',
        info: {
          border: '#b1c5f6',
          hover: '#114cd6',
          main: '#3267e3',
          pressed: '#11317d',
          surface: '#f0f3ff',
        },
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        neutral: {
          100: '#f5f5f5',
          200: '#ededed',
          300: '#e0e0e0',
          400: '#c2c2c2',
          50: '#ffffff',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#0a0a0a',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: {
          border: '#b8dbca',
          hover: '#367a59',
          main: '#43936c',
          pressed: '#20573d',
          surface: '#f7f7f7',
        },
        warning: {
          border: '#eeceb0',
          hover: '#bf6919',
          main: '#cd7b2e',
          pressed: '#734011',
          surface: '#fff9f2',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
} satisfies Config;

export default config;

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#40dbe8',
          dark: '#268893',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F8F8F8',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#666666',
        },
        success: '#22C55E',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Desktop sizes
        'h1-desktop': ['52px', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '700' }],
        'h2-desktop': ['38px', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h3-desktop': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-large-desktop': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-desktop': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-small-desktop': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption-desktop': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        // Mobile sizes
        'h1-mobile': ['36px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-mobile': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3-mobile': ['22px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-large-mobile': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-mobile': ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-small-mobile': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption-mobile': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'cta': '0 4px 12px rgba(64, 219, 232, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

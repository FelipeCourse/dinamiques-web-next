import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      base: {
        white: 'rgba(var(--base-white), <alpha-value>)',
        1: 'rgba(var(--base-1), <alpha-value>)',
        2: 'rgba(var(--base-2), <alpha-value>)',
        3: 'rgba(var(--base-3), <alpha-value>)',
        4: 'rgba(var(--base-4), <alpha-value>)',
        5: 'rgba(var(--base-5), <alpha-value>)',
        6: 'rgba(var(--base-6), <alpha-value>)',
        7: 'rgba(var(--base-7), <alpha-value>)',
        8: 'rgba(var(--base-8), <alpha-value>)',
        9: 'rgba(var(--base-9), <alpha-value>)',
        10: 'rgba(var(--base-10), <alpha-value>)',
        11: 'rgba(var(--base-11), <alpha-value>)',
        12: 'rgba(var(--base-12), <alpha-value>)',
        13: 'rgba(var(--base-13), <alpha-value>)',
        14: 'rgba(var(--base-14), <alpha-value>)',
        15: 'rgba(var(--base-15), <alpha-value>)',
        16: 'rgba(var(--base-16), <alpha-value>)',
        black: 'rgba(var(--base-black), <alpha-value>)',
      },
      primary: {
        1: 'rgba(var(--primary-1), <alpha-value>)',
        2: 'rgba(var(--primary-2), <alpha-value>)',
        3: 'rgba(var(--primary-3), <alpha-value>)',
        4: 'rgba(var(--primary-4), <alpha-value>)',
        5: 'rgba(var(--primary-5), <alpha-value>)',
        6: 'rgba(var(--primary-6), <alpha-value>)',
        7: 'rgba(var(--primary-7), <alpha-value>)',
        8: 'rgba(var(--primary-8), <alpha-value>)',
      },
      success: {
        1: 'rgba(var(--success-1), <alpha-value>)',
        2: 'rgba(var(--success-2), <alpha-value>)',
        3: 'rgba(var(--success-3), <alpha-value>)',
        4: 'rgba(var(--success-4), <alpha-value>)',
        5: 'rgba(var(--success-5), <alpha-value>)',
        6: 'rgba(var(--success-6), <alpha-value>)',
        7: 'rgba(var(--success-7), <alpha-value>)',
      },
      warning: {
        1: 'rgba(var(--warning-1), <alpha-value>)',
        2: 'rgba(var(--warning-2), <alpha-value>)',
        3: 'rgba(var(--warning-3), <alpha-value>)',
        4: 'rgba(var(--warning-4), <alpha-value>)',
        5: 'rgba(var(--warning-5), <alpha-value>)',
        6: 'rgba(var(--warning-6), <alpha-value>)',
        7: 'rgba(var(--warning-7), <alpha-value>)',
      },
      error: {
        1: 'rgba(var(--error-1), <alpha-value>)',
        2: 'rgba(var(--error-2), <alpha-value>)',
        3: 'rgba(var(--error-3), <alpha-value>)',
        4: 'rgba(var(--error-4), <alpha-value>)',
        5: 'rgba(var(--error-5), <alpha-value>)',
        6: 'rgba(var(--error-6), <alpha-value>)',
        7: 'rgba(var(--error-7), <alpha-value>)',
      },
      sidebar: {
        DEFAULT: 'hsl(var(--sidebar-background))',
        foreground: 'hsl(var(--sidebar-foreground))',
        primary: 'hsl(var(--sidebar-primary))',
        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        accent: 'hsl(var(--sidebar-accent))',
        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        border: 'hsl(var(--sidebar-border))',
        ring: 'hsl(var(--sidebar-ring))',
      },
    },
    fontFamily: {
      inter: 'var(--font-inter)',
    },
    fontSize: {
      xs: [
        'var(--text-xs) /* 12px */',
        { lineHeight: 'var(--text-lh-xs) /* 18px */' },
      ],
      sm: [
        'var(--text-sm) /* 14px */',
        { lineHeight: 'var(--text-lh-sm) /* 21px */' },
      ],
      md: [
        'var(--text-md) /* 16px */',
        { lineHeight: 'var(--text-lh-md) /* 24px */' },
      ],
      lg: [
        'var(--text-lg) /* 18px */',
        { lineHeight: 'var(--text-lh-lg)  /* 27px */' },
      ],
      xl: [
        'var(--text-xl) /* 20px */',
        { lineHeight: 'var(--text-lh-xl)  /* 30px */' },
      ],
      'h3-xs': [
        'var(--title-h3-xs) /* 20px */',
        {
          lineHeight: 'var(--title-h3-lh-xs) /* 30px */',
          letterSpacing: 'var(--title-h3-ls-xs) /* 1px */',
        },
      ],
      'h3-md': [
        'var(--title-h3-md) /* 24px */',
        {
          lineHeight: 'var(--title-h3-lh-md) /* 33px */',
          letterSpacing: 'var(--title-h3-ls-md)  /* 1.2px */',
        },
      ],
      'h3-lg': [
        'var(--title-h3-lg) /* 28px */',
        {
          lineHeight: 'var(--title-h3-lh-lg) /* 42px */',
          letterSpacing: 'var(--title-h3-ls-lg) /* 1.6px */',
        },
      ],
      'h2-xs': [
        'var(--title-h2-xs) /* 28px */',
        {
          lineHeight: 'var(--title-h2-lh-xs) /* 42px */',
          letterSpacing: 'var(--title-h2-ls-xs) /* 1.4px */',
        },
      ],
      'h2-md': [
        'var(--title-h2-md) /* 40x */',
        {
          lineHeight: 'var(--title-h2-lh-md) /* 60px */',
          letterSpacing: 'var(--title-h2-ls-md) /* 2px */',
        },
      ],
      'h2-lg': [
        'var(--title-h2-lg) /* 52px */',
        {
          lineHeight: 'var(--title-h2-lh-lg) /* 78px */',
          letterSpacing: 'var(--title-h2-ls-lg) /* 2.6px */',
        },
      ],
      'h1-xs': [
        'var(--title-h1-xs) /* 32px */',
        {
          lineHeight: 'var(--title-h1-lh-xs) /* 48px */',
          letterSpacing: 'var(--title-h1-ls-xs) /* 1.6px */',
        },
      ],
      'h1-md': [
        'var(--title-h1-md) /* 54px */',
        {
          lineHeight: 'var(--title-h1-lh-md) /* 81px */',
          letterSpacing: 'var(--title-h1-ls-md) /* 2.7px */',
        },
      ],
      'h1-lg': [
        'var(--title-h1-lg) /* 64px */',
        {
          lineHeight: 'var(--title-h1-lh-lg) /* 96px */',
          letterSpacing: 'var(--title-h1-ls-lg) /* 3.2px */',
        },
      ],
    },
    spacing: {
      0: 'var(--spacing-0) /* 0px */',
      1: 'var(--spacing-1) /* 4px */',
      2: 'var(--spacing-2) /* 8px */',
      3: 'var(--spacing-3) /* 12px */',
      4: 'var(--spacing-4) /* 16px */',
      5: 'var(--spacing-5) /* 20px */',
      6: 'var(--spacing-6) /* 24px */',
      7: 'var(--spacing-7) /* 32px */',
      8: 'var(--spacing-8) /* 36px */',
      9: 'var(--spacing-9) /* 40px */',
      10: 'var(--spacing-10) /* 48px */',
      11: 'var(--spacing-11) /* 60px */',
      12: 'var(--spacing-12) /* 72px */',
      13: 'var(--spacing-13) /* 80px */',
      14: 'var(--spacing-14) /* 120px */',
      15: 'var(--spacing-15) /* 160px */',
      16: 'var(--spacing-16) /* 200px */',
    },
    screens: {
      xs: '',
      sm: '37.5rem' /* 600px */,
      md: '52.5rem' /* 840px */,
      lg: '75rem' /* 1200px */,
      xl: '90rem' /* 1440px */,
    },
    borderRadius: {
      sm: 'var(--border-radius-sm) /* 6px */',
      md: 'var(--border-radius-md) /* 8px */',
      lg: 'var(--border-radius-lg) /* 10px */',
      full: 'var(--border-radius-full) /* 100% */',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: 'var(--spacing-5)',
        },
      },
      gridTemplateColumns: {
        'articles-section': 'repeat(auto-fit, minmax(23.75rem, 1fr))',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
      animation: {
        fadein: 'fade-in 1.5s ease-in-out 0.25s forwards',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;

/**
 * Design System - Typography
 * Link Innovations Premium Homepage Typography
 */

export const typography = {
  // Font Families
  fonts: {
    primary: 'Inter, sans-serif',
    headline: 'Space Grotesk, sans-serif',
    body: 'Inter, sans-serif',
  },
  
  // Font Sizes (Desktop)
  sizes: {
    hero: {
      desktop: 'clamp(2.5rem, 5vw, 5rem)', // 40px - 80px
      mobile: 'clamp(2rem, 4vw, 2.5rem)', // 32px - 40px
    },
    h1: {
      desktop: 'clamp(3rem, 4vw, 3.5rem)', // 48px - 56px
      mobile: 'clamp(2rem, 3vw, 2.5rem)', // 32px - 40px
    },
    h2: {
      desktop: 'clamp(2.5rem, 3.5vw, 3rem)', // 40px - 48px
      mobile: 'clamp(1.75rem, 2.5vw, 2rem)', // 28px - 32px
    },
    h3: {
      desktop: 'clamp(2rem, 2.5vw, 2.5rem)', // 32px - 40px
      mobile: 'clamp(1.5rem, 2vw, 1.75rem)', // 24px - 28px
    },
    body: {
      desktop: '1.125rem', // 18px
      mobile: '1rem', // 16px
    },
    bodyLarge: {
      desktop: '1.25rem', // 20px
      mobile: '1.125rem', // 18px
    },
    small: {
      desktop: '0.875rem', // 14px
      mobile: '0.875rem', // 14px
    },
  },
  
  // Line Heights
  lineHeights: {
    tight: '1.1',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
  
  // Font Weights
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  
  // Letter Spacing
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
  },
} as const;

export type TypographySize = keyof typeof typography.sizes;


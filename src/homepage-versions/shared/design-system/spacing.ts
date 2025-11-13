/**
 * Design System - Spacing
 * Link Innovations Premium Homepage Spacing System
 */

export const spacing = {
  // Base spacing unit (4px)
  base: 4,
  
  // Spacing scale (in px)
  scale: {
    xs: 4,      // 0.25rem
    sm: 8,      // 0.5rem
    md: 16,     // 1rem
    lg: 24,     // 1.5rem
    xl: 32,     // 2rem
    '2xl': 48,  // 3rem
    '3xl': 64,  // 4rem
    '4xl': 96,  // 6rem
    '5xl': 128, // 8rem
  },
  
  // Section spacing
  sections: {
    mobile: {
      padding: '3rem 1.5rem', // 48px vertical, 24px horizontal
      gap: '3rem', // 48px
    },
    tablet: {
      padding: '4rem 2rem', // 64px vertical, 32px horizontal
      gap: '4rem', // 64px
    },
    desktop: {
      padding: '6rem 2rem', // 96px vertical, 32px horizontal
      gap: '5rem', // 80px
    },
  },
  
  // Container max widths
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
    '7xl': '1280px',
  },
  
  // Border radius
  radius: {
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    full: '9999px',
  },
} as const;

export type SpacingScale = keyof typeof spacing.scale;


/**
 * Link Innovations - Unified Design System Tokens
 * For Grovia Page Implementation
 * 
 * This file contains all design tokens used across the grovia page
 * to ensure visual consistency and maintainability.
 */

export const designTokens = {
  // ============================================
  // COLOR SYSTEM
  // ============================================
  colors: {
    // Primary Brand Colors
    primary: {
      DEFAULT: '#00D1BF', // Robin Egg Blue
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#00D1BF',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    
    // Secondary Brand Colors
    secondary: {
      DEFAULT: '#FF4FD8', // Pink
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#FF4FD8',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    
    // Accent Colors
    accent: {
      blue: '#3B82F6',
      purple: '#8B5CF6',
      cyan: '#06B6D4',
    },
    
    // Background Colors
    background: {
      primary: '#FFFFFF', // White
      secondary: '#F8F9FA', // Light Gray
      tertiary: '#F5F3EF', // Beige (for specific sections)
      dark: '#000000',
      muted: '#F5F5DC', // Light beige for CTAs
    },
    
    // Text Colors
    text: {
      primary: '#1A1A1A', // Near black
      secondary: '#4A4A4A', // Medium gray
      tertiary: '#6B7280', // Light gray
      inverse: '#FFFFFF', // White
      muted: '#9CA3AF', // Muted gray
    },
    
    // Border Colors
    border: {
      DEFAULT: '#E5E7EB', // Light gray
      subtle: '#F3F4F6', // Very light gray
      medium: '#D1D5DB', // Medium gray
      strong: '#9CA3AF', // Strong gray
    },
    
    // Semantic Colors
    semantic: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },
  
  // ============================================
  // TYPOGRAPHY
  // ============================================
  typography: {
    // Font Families
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Space Grotesk', 'Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'Courier New', 'monospace'],
    },
    
    // Font Sizes (8px base scale)
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      // Large Paragraph (for descriptions)
      'large-paragraph': '1.125rem', // 18px
      // Hero sizes
      hero: 'clamp(2.5rem, 5vw, 5rem)', // 40px - 80px
      h1: 'clamp(3rem, 4vw, 3.5rem)',   // 48px - 56px
      h2: 'clamp(2.5rem, 3.5vw, 3rem)', // 40px - 48px
      h3: 'clamp(2rem, 2.5vw, 2.5rem)', // 32px - 40px
    },
    
    // Font Weights
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    // Line Heights
    lineHeight: {
      none: 1,
      tight: 1.15,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    
    // Letter Spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // ============================================
  // SPACING (8px base scale)
  // ============================================
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    
    // Section Spacing
    section: {
      sm: '4rem',   // 64px
      md: '6rem',   // 96px
      lg: '8rem',   // 128px
    },
    
    // Container Padding
    container: {
      sm: '1.5rem', // 24px
      md: '3rem',   // 48px
      lg: '5rem',   // 80px
    },
  },
  
  // ============================================
  // BORDER RADIUS
  // ============================================
  borderRadius: {
    none: '0',
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem',   // 48px
    full: '9999px',
  },
  
  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    sm: '0px 2px 8px rgba(0, 0, 0, 0.06)',
    md: '0px 4px 16px rgba(0, 0, 0, 0.08)',
    lg: '0px 8px 32px rgba(0, 0, 0, 0.12)',
    xl: '0px 12px 48px rgba(0, 0, 0, 0.16)',
    '2xl': '0px 20px 64px rgba(0, 0, 0, 0.2)',
    
    // Card Shadows
    card: {
      default: '0px 2px 8px rgba(0, 0, 0, 0.06)',
      hover: '0px 8px 32px rgba(0, 0, 0, 0.12)',
    },
    
    // Button Shadows
    button: {
      default: '0px 4px 16px rgba(0, 0, 0, 0.1)',
      hover: '0px 12px 32px rgba(0, 0, 0, 0.12)',
    },
  },
  
  // ============================================
  // ANIMATIONS
  // ============================================
  animations: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
    },
    
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Custom easing for smooth animations
      smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  
  // ============================================
  // BREAKPOINTS
  // ============================================
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // ============================================
  // CONTAINER MAX WIDTHS
  // ============================================
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    // Standard container for grovia page
    standard: '80rem', // 1280px
  },
  
  // ============================================
  // Z-INDEX SCALE
  // ============================================
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

// Export individual token groups for easier imports
export const colors = designTokens.colors;
export const typography = designTokens.typography;
export const spacing = designTokens.spacing;
export const borderRadius = designTokens.borderRadius;
export const shadows = designTokens.shadows;
export const animations = designTokens.animations;
export const breakpoints = designTokens.breakpoints;
export const container = designTokens.container;
export const zIndex = designTokens.zIndex;


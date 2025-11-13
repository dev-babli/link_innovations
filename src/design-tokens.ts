// Design tokens for Link Innovations service pages
// Based on reference images and modern design principles

export const gradients = {
  // Primary brand gradients
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  cool: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  
  // Link Innovations brand colors
  brand: {
    primary: 'linear-gradient(135deg, #00D1BF 0%, #00a89a 100%)',
    secondary: 'linear-gradient(135deg, #FF4FD8 0%, #8B5CF6 100%)',
    accent: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
  },
  
  // Glassmorphism gradients
  glass: {
    light: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    dark: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
    colorful: 'linear-gradient(135deg, rgba(0, 209, 191, 0.1) 0%, rgba(255, 79, 216, 0.1) 100%)',
  },
  
  // Background gradients
  background: {
    hero: 'linear-gradient(135deg, #0a0a0a 0%, #0f1724 50%, #1a1a2e 100%)',
    section: 'linear-gradient(135deg, #000000 0%, #071022 100%)',
    card: 'linear-gradient(135deg, #0f1724 0%, #1a1a2e 100%)',
    overlay: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)',
  },
  
  // Text gradients
  text: {
    primary: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
    accent: 'linear-gradient(135deg, #00D1BF 0%, #FF4FD8 100%)',
    secondary: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
  }
};

export const shadows = {
  // Soft shadows for subtle depth
  soft: '0 2px 40px rgba(0,0,0,0.08)',
  medium: '0 8px 60px rgba(0,0,0,0.12)',
  strong: '0 20px 80px rgba(0,0,0,0.16)',
  
  // Glow effects
  glow: {
    primary: '0 0 40px rgba(0, 209, 191, 0.3)',
    secondary: '0 0 40px rgba(255, 79, 216, 0.3)',
    accent: '0 0 40px rgba(59, 130, 246, 0.3)',
    white: '0 0 40px rgba(255, 255, 255, 0.2)',
  },
  
  // Card shadows
  card: {
    default: '0 4px 20px rgba(0, 0, 0, 0.1)',
    hover: '0 12px 40px rgba(0, 0, 0, 0.15)',
    elevated: '0 20px 60px rgba(0, 0, 0, 0.2)',
  },
  
  // Button shadows
  button: {
    primary: '0 4px 20px rgba(0, 209, 191, 0.3)',
    secondary: '0 4px 20px rgba(255, 79, 216, 0.3)',
    hover: '0 8px 30px rgba(0, 209, 191, 0.4)',
  },
  
  // Glassmorphism shadows
  glass: {
    light: '0 8px 32px rgba(255, 255, 255, 0.1)',
    dark: '0 8px 32px rgba(0, 0, 0, 0.2)',
  }
};

export const blur = {
  // Backdrop blur values
  none: 'blur(0px)',
  sm: 'blur(4px)',
  md: 'blur(8px)',
  lg: 'blur(16px)',
  xl: 'blur(24px)',
  '2xl': 'blur(40px)',
  
  // Glassmorphism blur
  glass: 'blur(20px)',
};

export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
  
  // Custom service page radius
  card: '16px',
  button: '12px',
  input: '8px',
};

export const spacing = {
  // 8px base scale
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
  
  // Component specific
  section: '80px',
  container: '120px',
  card: '24px',
};

export const typography = {
  // Font families
  fontFamily: {
    primary: ['Inter', 'sans-serif'],
    display: ['Orbitron', 'monospace'],
    accent: ['Exo 2', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  
  // Font sizes
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
  },
  
  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Line heights
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  }
};

export const colors = {
  // Primary colors
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  
  // Secondary colors
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  
  // Neutral colors
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Brand colors
  brand: {
    primary: '#00D1BF',
    secondary: '#FF4FD8',
    accent: '#06B6D4',
    blue: '#3B82F6',
    purple: '#8B5CF6',
  }
};

export const animations = {
  // Duration
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  
  // Easing
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  
  // Delays
  delay: {
    none: '0ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
  }
};

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
};

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

  // Glassmorphism utilities
export const glassmorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
  },
  dark: {
    background: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    color: '#ffffff',
  },
  colorful: {
    background: 'rgba(0, 209, 191, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(0, 209, 191, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 209, 191, 0.1)',
    color: '#ffffff',
  }
};

// Neumorphism utilities
export const neumorphism = {
  light: {
    boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)',
  },
  dark: {
    boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.05)',
  }
};

/**
 * Design System - Color Palette
 * Link Innovations Premium Homepage Colors
 */

export const colors = {
  // Primary Accent Colors
  robinEggBlue: {
    hex: '#00c4b8',
    rgb: 'rgba(0, 196, 184, 1)',
    hsl: 'hsla(176, 100%, 38%, 1)',
    name: 'robin-egg-blue',
  },
  brandeisBlue: {
    hex: '#016cf7',
    rgb: 'rgba(1, 108, 247, 1)',
    hsl: 'hsla(214, 99%, 49%, 1)',
    name: 'brandeis-blue',
  },
  
  // Neutral Colors
  black: {
    hex: '#000000',
    rgb: 'rgba(0, 0, 0, 1)',
    hsl: 'hsla(0, 0%, 0%, 1)',
    name: 'black',
  },
  night: {
    hex: '#141414',
    rgb: 'rgba(20, 20, 20, 1)',
    hsl: 'hsla(0, 0%, 8%, 1)',
    name: 'night',
  },
  babyPowder: {
    hex: '#fdfffd',
    rgb: 'rgba(253, 255, 253, 1)',
    hsl: 'hsla(120, 100%, 100%, 1)',
    name: 'baby-powder',
  },
  
  // Semantic Colors
  primary: '#00c4b8',
  secondary: '#016cf7',
  background: '#fdfffd',
  backgroundDark: '#141414',
  text: '#000000',
  textDark: '#141414',
  textLight: '#fdfffd',
  
  // Gradient Combinations
  gradients: {
    primaryToSecondary: 'linear-gradient(135deg, #00c4b8 0%, #016cf7 100%)',
    secondaryToPrimary: 'linear-gradient(135deg, #016cf7 0%, #00c4b8 100%)',
    radialPrimary: 'radial-gradient(circle, #00c4b8 0%, transparent 70%)',
    radialSecondary: 'radial-gradient(circle, #016cf7 0%, transparent 70%)',
    diagonal: 'linear-gradient(45deg, #00c4b8 0%, #016cf7 50%, #00c4b8 100%)',
  },
  
  // Illuminated Background Variants
  illuminated: {
    subtle: {
      robinEgg: 'rgba(0, 196, 184, 0.1)',
      brandeis: 'rgba(1, 108, 247, 0.1)',
    },
    medium: {
      robinEgg: 'rgba(0, 196, 184, 0.2)',
      brandeis: 'rgba(1, 108, 247, 0.2)',
    },
    strong: {
      robinEgg: 'rgba(0, 196, 184, 0.3)',
      brandeis: 'rgba(1, 108, 247, 0.3)',
    },
  },
} as const;

export type ColorName = keyof typeof colors;


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ORB AI Dark Theme Palette
        'orb-dark': '#0A0A0A',
        'orb-darker': '#121212',
        'orb-purple': '#8B5CF6',
        'orb-blue': '#3B82F6',
        'orb-accent': '#A855F7',
        'orb-light': '#E5E7EB',
        'orb-white': '#FFFFFF',
        'orb-card': 'rgba(255, 255, 255, 0.05)',
        'orb-border': 'rgba(255, 255, 255, 0.1)',
        
        // McKinsey-Inspired Professional Palette (Keep for backward compatibility)
        'mckinsey-navy': '#001F3F',
        'mckinsey-blue': '#0066CC',
        'mckinsey-slate': '#5A6C7D',
        'mckinsey-light-gray': '#F5F7FA',
        'mckinsey-white': '#FFFFFF',
        'mckinsey-gold': '#D4AF37',
        'mckinsey-dark-gray': '#2C3E50',
        'mckinsey-medium-gray': '#7F8C8D',
        
        // Legacy colors for compatibility (mapped to new palette)
        'primary': '#001F3F', // mckinsey-navy
        'accent-cyan': '#0066CC', // mckinsey-blue
        'accent-indigo': '#0066CC', // mckinsey-blue
        'accent-emerald': '#D4AF37', // mckinsey-gold
        'accent-purple': '#5A6C7D', // mckinsey-slate
        'neutral-dark': '#2C3E50', // mckinsey-dark-gray
        'neutral-light': '#F5F7FA', // mckinsey-light-gray
        'neutral-medium': '#7F8C8D', // mckinsey-medium-gray
        
        // Cortex Theme Colors
        'cortex-primary': '#7877c6',
        'cortex-secondary': '#a78bfa',
        'cortex-accent': '#4a7856',
        'cortex-bg': '#0f1724',
        'cortex-surface': '#1e293b',
        'cortex-text': '#f8fafc',
        'cortex-text-secondary': '#cbd5e1',
        
        // Metomic Theme Colors
        'metomic-primary': '#ff6b6b',
        'metomic-secondary': '#ffa726',
        'metomic-accent': '#66bb6a',
        'metomic-bg': '#1a1a1a',
        'metomic-surface': '#2d2d2d',
        'metomic-text': '#ffffff',
        'metomic-text-secondary': '#b0b0b0',
        
        // Vareto Theme Colors
        'vareto-primary': '#ffd54f',
        'vareto-secondary': '#ffb74d',
        'vareto-accent': '#81c784',
        'vareto-bg': '#fafafa',
        'vareto-surface': '#ffffff',
        'vareto-text': '#212121',
        'vareto-text-secondary': '#757575',
        
        // Global Design System Colors
        'black-100': '#000000',
        'black-200': '#0a0a0a',
        'black-300': '#1a1a1a',
        'white-100': '#ffffff',
        'white-200': '#f8f9fa',
        'white-300': '#e9ecef',
        
        // Link Innovations Color Palette
        'robin-egg-blue': '#00c4b8',
        'brandeis-blue': '#016cf7',
        'link-black': '#000000',
        'night': '#141414',
        'baby-powder': '#fdfffd',
        
        // Grovia Page Design System (Unified)
        'background': {
          'primary': '#FFFFFF',
          'secondary': '#F8F9FA',
          'tertiary': '#F5F3EF',
          'muted': '#F5F5DC',
          'dark': '#000000',
        },
        'text': {
          'primary': '#1A1A1A',
          'secondary': '#4A4A4A',
          'tertiary': '#6B7280',
          'inverse': '#FFFFFF',
          'muted': '#9CA3AF',
        },
        'border': {
          'DEFAULT': '#E5E7EB',
          'subtle': '#F3F4F6',
          'medium': '#D1D5DB',
          'strong': '#9CA3AF',
        },
      },
      fontFamily: {
        'heading': ['Mango Grotesque', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo2': ['Exo 2', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        container: "80rem",
        'container-standard': "80rem", // 1280px
        'container-lg': "90rem", // 1440px
      },
      fontSize: {
        'large-paragraph': '1.125rem', // 18px
      },
      spacing: {
        'section': '6rem', // 96px
        'section-lg': '8rem', // 128px
      },
      boxShadow: {
        glow: "0 -16px 128px 0 hsla(var(--brand-foreground) / 0.5) inset, 0 -16px 32px 0 hsla(var(--brand) / 0.5) inset",
      },
      animation: {
        'orbit': 'orbit calc(var(--duration)*1s) linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'loop-vertically': 'loop-vertically 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'shimmer-magic': 'shimmer-magic 2s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 3s ease-in-out infinite',
        'ripple-magic': 'ripple-magic 1.5s ease-out infinite',
        'glitch-1': 'glitch-1 0.3s ease-in-out infinite alternate',
        'glitch-2': 'glitch-2 0.3s ease-in-out infinite alternate',
        'bounce-glow': 'bounce-glow 2s ease-in-out infinite',
        'pulse-glow-magic': 'pulse-glow-magic 2s ease-in-out infinite',
        'rotate-scale': 'rotate-scale 2s ease-in-out infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'magic-reveal': 'magic-reveal 1s ease-out forwards',
        'magnetic-hover': 'magnetic-hover 0.3s ease-out',
        'glass-magic': 'glass-magic 2s ease-in-out infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
        'holographic': 'holographic 3s ease-in-out infinite',
        'particle-trail': 'particle-trail 2s ease-out infinite',
        'move': 'move 5s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'loop-vertically': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'shimmer-magic': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'ripple-magic': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'glitch-1': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'glitch-2': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(2px, -2px)' },
          '40%': { transform: 'translate(2px, 2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(-2px, 2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'bounce-glow': {
          '0%, 100%': { transform: 'translateY(0)', boxShadow: '0 0 20px rgba(120, 119, 198, 0.5)' },
          '50%': { transform: 'translateY(-10px)', boxShadow: '0 10px 30px rgba(120, 119, 198, 0.8)' },
        },
        'pulse-glow-magic': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(120, 119, 198, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(120, 119, 198, 0.8)' },
        },
        'rotate-scale': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'magic-reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'magnetic-hover': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))' },
        },
        'glass-magic': {
          '0%, 100%': { backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          '50%': { backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255, 255, 255, 0.2)' },
        },
        'neon-glow': {
          '0%, 100%': { textShadow: '0 0 5px #7877c6, 0 0 10px #7877c6, 0 0 15px #7877c6' },
          '50%': { textShadow: '0 0 10px #7877c6, 0 0 20px #7877c6, 0 0 30px #7877c6' },
        },
        holographic: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'particle-trail': {
          '0%': { transform: 'translateY(0) scale(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(1)', opacity: '0' },
        },
        move: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(200px)' },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'magic-gradient': 'linear-gradient(45deg, #7877c6, #a78bfa, #4a7856, #7877c6)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'holographic-gradient': 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff6b6b)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

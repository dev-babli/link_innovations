/**
 * Animation Configuration System
 * 
 * Centralized presets, timing, and viewport settings for all scroll animations
 * Design System Compliance: Module 14 (Performance), Module 07 (Motion)
 */

// ============================================================================
// ANIMATION PRESETS
// ============================================================================

export const ANIMATION_PRESETS = {
  subtle: {
    distance: 20,
    duration: 0.4,
    threshold: 0.3,
    easing: [0.25, 0.46, 0.45, 0.94] as const,
  },
  standard: {
    distance: 50,
    duration: 0.6,
    threshold: 0.2,
    easing: [0.25, 0.46, 0.45, 0.94] as const,
  },
  dramatic: {
    distance: 100,
    duration: 1.0,
    threshold: 0.1,
    easing: [0.25, 0.46, 0.45, 0.94] as const,
  },
} as const;

// ============================================================================
// VIEWPORT TRIGGERS
// ============================================================================

export const VIEWPORT_TRIGGERS = {
  early: { amount: 0.1 },     // Triggers when 10% visible
  standard: { amount: 0.2 },  // 20% visible (default)
  late: { amount: 0.5 },      // 50% visible
  full: { amount: 0.8 },      // 80% visible
} as const;

// ============================================================================
// EASING CURVES
// ============================================================================

export const EASING_CURVES = {
  // Material Design
  standard: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
  decelerate: [0.0, 0.0, 0.2, 1] as [number, number, number, number],
  accelerate: [0.4, 0.0, 1, 1] as [number, number, number, number],
  
  // Custom (Design System)
  smooth: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  elastic: [0.5, 1.5, 0.5, 1] as [number, number, number, number],
  
  // Simple
  easeIn: [0.42, 0, 1, 1] as [number, number, number, number],
  easeOut: [0, 0, 0.58, 1] as [number, number, number, number],
  easeInOut: [0.42, 0, 0.58, 1] as [number, number, number, number],
} as const;

// ============================================================================
// DURATION PRESETS
// ============================================================================

export const DURATIONS = {
  instant: 0,
  fast: 200,       // Micro-interactions, hover states
  normal: 400,     // Standard UI animations
  medium: 600,     // Content reveals
  slow: 800,       // Section transitions
  verySlow: 1200,  // Dramatic reveals, hero animations
} as const;

// ============================================================================
// STAGGER SETTINGS
// ============================================================================

export const STAGGER_PRESETS = {
  tight: 0.05,      // 50ms between items
  normal: 0.1,      // 100ms between items
  relaxed: 0.2,     // 200ms between items
  dramatic: 0.3,    // 300ms between items
} as const;

// ============================================================================
// GSAP SCROLLTRIGGER PRESETS
// ============================================================================

export const SCROLL_TRIGGER_PRESETS = {
  standard: {
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: false,
    markers: false,
  },
  scrubbed: {
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: false,
    markers: false,
  },
  pinned: {
    start: 'top top',
    end: '+=1000',
    scrub: true,
    pin: true,
    markers: false,
  },
  horizontal: {
    start: 'top top',
    end: () => '+=' + (document.querySelector('.horizontal-sections')?.scrollWidth || 0),
    scrub: 1,
    pin: true,
    markers: false,
  },
} as const;

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

export const FADE_VARIANTS = {
  up: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  down: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  left: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
} as const;

export const SLIDE_VARIANTS = {
  up: {
    initial: { y: 100 },
    animate: { y: 0 },
  },
  down: {
    initial: { y: -100 },
    animate: { y: 0 },
  },
  left: {
    initial: { x: 100 },
    animate: { x: 0 },
  },
  right: {
    initial: { x: -100 },
    animate: { x: 0 },
  },
} as const;

export const MASK_VARIANTS = {
  up: {
    initial: { clipPath: 'inset(100% 0% 0% 0%)' },
    animate: { clipPath: 'inset(0% 0% 0% 0%)' },
  },
  down: {
    initial: { clipPath: 'inset(0% 0% 100% 0%)' },
    animate: { clipPath: 'inset(0% 0% 0% 0%)' },
  },
  left: {
    initial: { clipPath: 'inset(0% 0% 0% 100%)' },
    animate: { clipPath: 'inset(0% 0% 0% 0%)' },
  },
  right: {
    initial: { clipPath: 'inset(0% 100% 0% 0%)' },
    animate: { clipPath: 'inset(0% 0% 0% 0%)' },
  },
  center: {
    initial: { clipPath: 'circle(0% at 50% 50%)' },
    animate: { clipPath: 'circle(100% at 50% 50%)' },
  },
  diagonal: {
    initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
    animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
  },
} as const;

export const SCALE_VARIANTS = {
  in: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  out: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1 },
  },
} as const;

export const ROTATE_VARIANTS = {
  in: {
    initial: { opacity: 0, rotateX: 90 },
    animate: { opacity: 1, rotateX: 0 },
    style: { transformPerspective: 1000 },
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    style: { transformPerspective: 1000 },
  },
} as const;

export const BLUR_VARIANTS = {
  in: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
  },
} as const;

// ============================================================================
// PERFORMANCE LIMITS
// ============================================================================

export const PERFORMANCE_LIMITS = {
  maxSimultaneousAnimations: 20,
  maxBlurValue: 10,
  mobileReducedDistance: 0.5,  // Multiply distance by 0.5 on mobile
  mobileFasterDuration: 0.7,   // Multiply duration by 0.7 on mobile
} as const;

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  wide: 1536,
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < BREAKPOINTS.mobile;
};

export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getResponsiveConfig = (baseConfig: typeof ANIMATION_PRESETS.standard) => {
  const mobile = isMobile();
  
  return {
    ...baseConfig,
    distance: mobile ? baseConfig.distance * PERFORMANCE_LIMITS.mobileReducedDistance : baseConfig.distance,
    duration: mobile ? baseConfig.duration * PERFORMANCE_LIMITS.mobileFasterDuration : baseConfig.duration,
  };
};

// ============================================================================
// ANIMATION TYPE DEFINITIONS
// ============================================================================

export type AnimationType =
  | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right'
  | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'
  | 'mask-reveal-up' | 'mask-reveal-down' | 'mask-reveal-left' | 'mask-reveal-right'
  | 'mask-reveal-center' | 'mask-reveal-diagonal'
  | 'scale-in' | 'scale-out'
  | 'rotate-in' | 'rotate-flip'
  | 'blur-in'
  | 'pixelate' | 'image-zoom-fill';

export type PresetName = keyof typeof ANIMATION_PRESETS;
export type EasingName = keyof typeof EASING_CURVES;
export type TriggerName = keyof typeof VIEWPORT_TRIGGERS;

// ============================================================================
// DEFAULT CONFIGURATION
// ============================================================================

export const DEFAULT_CONFIG = {
  preset: 'standard' as PresetName,
  easing: 'smooth' as EasingName,
  trigger: 'standard' as TriggerName,
  once: true,
  respectReducedMotion: true,
} as const;





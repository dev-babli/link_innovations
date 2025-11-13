/**
 * Animation Utility Functions
 * 
 * Helper functions for scroll animations, viewport calculations,
 * and performance optimizations
 */

import { BREAKPOINTS, PERFORMANCE_LIMITS } from './animation-config';

// ============================================================================
// SCROLL CALCULATIONS
// ============================================================================

/**
 * Calculate scroll progress between two points
 * @returns 0 to 1
 */
export const calculateScrollProgress = (
  scrollY: number,
  start: number,
  end: number
): number => {
  if (scrollY <= start) return 0;
  if (scrollY >= end) return 1;
  return (scrollY - start) / (end - start);
};

/**
 * Get element position relative to document
 */
export const getElementOffset = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    bottom: rect.bottom + scrollTop,
    right: rect.right + scrollLeft,
    width: rect.width,
    height: rect.height,
  };
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement, offset = 0): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= -offset &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  );
};

/**
 * Get viewport dimensions
 */
export const getViewportSize = () => ({
  width: window.innerWidth || document.documentElement.clientWidth,
  height: window.innerHeight || document.documentElement.clientHeight,
});

// ============================================================================
// INTERPOLATION
// ============================================================================

/**
 * Linear interpolation
 */
export const lerp = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};

/**
 * Clamp value between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Map value from one range to another
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 * Ease-out interpolation
 */
export const easeOutQuad = (t: number): number => {
  return t * (2 - t);
};

/**
 * Ease-in-out interpolation
 */
export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// ============================================================================
// PERFORMANCE UTILITIES
// ============================================================================

/**
 * Throttle function using requestAnimationFrame
 */
export const throttleRAF = (callback: () => void) => {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Check if browser supports GPU acceleration
 */
export const supportsGPUAcceleration = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  return !!(
    canvas.getContext('webgl') ||
    canvas.getContext('experimental-webgl')
  );
};

/**
 * Preload images for smooth animations
 */
export const preloadImages = (urls: string[]): Promise<HTMLImageElement[]> => {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
        })
    )
  );
};

// ============================================================================
// DEVICE DETECTION
// ============================================================================

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < BREAKPOINTS.mobile;
};

/**
 * Check if device is tablet
 */
export const isTabletDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= BREAKPOINTS.mobile && window.innerWidth < BREAKPOINTS.desktop;
};

/**
 * Check if device prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get device pixel ratio for high-DPI displays
 */
export const getPixelRatio = (): number => {
  return window.devicePixelRatio || 1;
};

// ============================================================================
// ANIMATION HELPERS
// ============================================================================

/**
 * Calculate stagger delay for index
 */
export const getStaggerDelay = (
  index: number,
  staggerAmount: number,
  reverse = false
): number => {
  return reverse ? staggerAmount * (10 - index) : staggerAmount * index;
};

/**
 * Get responsive animation distance
 */
export const getResponsiveDistance = (baseDistance: number): number => {
  if (isMobileDevice()) {
    return baseDistance * PERFORMANCE_LIMITS.mobileReducedDistance;
  }
  return baseDistance;
};

/**
 * Get responsive animation duration
 */
export const getResponsiveDuration = (baseDuration: number): number => {
  if (isMobileDevice()) {
    return baseDuration * PERFORMANCE_LIMITS.mobileFasterDuration;
  }
  return baseDuration;
};

/**
 * Create animation object with responsive settings
 */
export const createResponsiveAnimation = (config: {
  distance?: number;
  duration?: number;
  easing?: number[];
}) => {
  const shouldReduce = prefersReducedMotion();
  
  return {
    distance: shouldReduce ? 0 : getResponsiveDistance(config.distance || 50),
    duration: shouldReduce ? 0.01 : getResponsiveDuration(config.duration || 0.6),
    easing: config.easing || [0.25, 0.46, 0.45, 0.94],
  };
};

// ============================================================================
// CANVAS UTILITIES (for Pixelate Effect)
// ============================================================================

/**
 * Create pixelated version of image on canvas
 */
export const pixelateImage = (
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  pixelSize: number
): void => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  const w = canvas.width;
  const h = canvas.height;
  
  // Disable smoothing for pixelated effect
  ctx.imageSmoothingEnabled = false;
  
  // Calculate pixelated dimensions
  const pixelW = Math.floor(w / pixelSize);
  const pixelH = Math.floor(h / pixelSize);
  
  // Draw image at small size
  ctx.drawImage(image, 0, 0, pixelW, pixelH);
  
  // Scale back up (creates pixelation)
  ctx.drawImage(canvas, 0, 0, pixelW, pixelH, 0, 0, w, h);
};

/**
 * Calculate pixel size from scroll progress
 * @param progress 0 to 1
 * @returns pixel size (1 = original, 50 = very pixelated)
 */
export const getPixelSizeFromProgress = (progress: number): number => {
  // Inverse relationship: 0 progress = 50px, 1 progress = 1px
  return Math.max(1, Math.floor(50 - (progress * 49)));
};

// ============================================================================
// TRANSFORM UTILITIES
// ============================================================================

/**
 * Calculate scale to fill container
 */
export const getScaleToFill = (
  imageWidth: number,
  imageHeight: number,
  containerWidth: number,
  containerHeight: number
): number => {
  return Math.max(
    containerWidth / imageWidth,
    containerHeight / imageHeight
  ) * 1.1; // 10% extra for padding
};

/**
 * Calculate position for centered element
 */
export const getCenteredPosition = (
  elementWidth: number,
  elementHeight: number,
  containerWidth: number,
  containerHeight: number
) => {
  return {
    x: (containerWidth - elementWidth) / 2,
    y: (containerHeight - elementHeight) / 2,
  };
};

/**
 * Convert percentage string to number
 */
export const parsePercentage = (value: string | number): number => {
  if (typeof value === 'number') return value;
  return parseFloat(value.replace('%', ''));
};

// ============================================================================
// SCROLL EVENT OPTIMIZATION
// ============================================================================

/**
 * Optimized scroll listener with RAF
 */
export const createScrollListener = (callback: (scrollY: number) => void) => {
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback(window.scrollY);
        ticking = false;
      });
      ticking = true;
    }
  };
  
  return {
    start: () => window.addEventListener('scroll', handleScroll, { passive: true }),
    stop: () => window.removeEventListener('scroll', handleScroll),
  };
};

/**
 * Batch read/write operations to avoid layout thrashing
 */
export const batchDOMOperations = <T>(
  elements: Element[],
  readFn: (el: Element) => T,
  writeFn: (el: Element, data: T) => void
): void => {
  // Batch all reads first
  const readData = elements.map(readFn);
  
  // Then batch all writes
  elements.forEach((el, i) => writeFn(el, readData[i]));
};

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  calculateScrollProgress,
  getElementOffset,
  isInViewport,
  getViewportSize,
  lerp,
  clamp,
  mapRange,
  easeOutQuad,
  easeInOutCubic,
  throttleRAF,
  debounce,
  supportsGPUAcceleration,
  preloadImages,
  isMobileDevice,
  isTabletDevice,
  prefersReducedMotion,
  getPixelRatio,
  getStaggerDelay,
  getResponsiveDistance,
  getResponsiveDuration,
  createResponsiveAnimation,
  pixelateImage,
  getPixelSizeFromProgress,
  getScaleToFill,
  getCenteredPosition,
  parsePercentage,
  createScrollListener,
  batchDOMOperations,
};





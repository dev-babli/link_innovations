import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Observer } from 'gsap/Observer';
import { Flip } from 'gsap/Flip';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { EasePack } from 'gsap/EasePack';

// Register all GSAP plugins
export function registerGSAPPlugins() {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    Observer,
    Flip,
    ScrollSmoother,
    EasePack
  );
  console.log("GSAP plugins registered.");
}

// Auto-register plugins only on client side
if (typeof window !== 'undefined') {
  registerGSAPPlugins();
}

// Default GSAP settings
gsap.defaults({
  duration: 1,
  ease: "power2.out"
});

// ScrollTrigger default settings (only on client side)
if (typeof window !== 'undefined') {
  ScrollTrigger.defaults({
    scroller: window,
    invalidateOnRefresh: true,
    anticipatePin: 1
  });
}

// Export configured GSAP instance
export { gsap, ScrollTrigger, ScrollToPlugin, Observer, Flip, ScrollSmoother, EasePack };

// Utility functions
export const gsapUtils = {
  // Create a context for proper cleanup
  context: (func: () => void, scope?: any) => gsap.context(func, scope),
  
  // Convert array-like objects to arrays
  toArray: gsap.utils.toArray,
  
  // Wrap values for seamless looping
  wrap: gsap.utils.wrap,
  
  // Clamp values between min and max
  clamp: gsap.utils.clamp,
  
  // Snap values to increments
  snap: gsap.utils.snap,
  
  // Random number generation
  random: gsap.utils.random,
  
  // Interpolate between values
  interpolate: gsap.utils.interpolate,
  
  // Get property value
  getProperty: gsap.getProperty,
  
  // Set property value
  setProperty: (target: any, property: string, value: any) => {
    if (target && typeof target.style !== 'undefined') {
      target.style[property] = value;
    }
  },

  // Safe element querying
  safeQuerySelector: (selector: string, parent?: Element | Document) => {
    if (typeof window === 'undefined') return null;
    try {
      const context = parent || document;
      return context.querySelector(selector);
    } catch (error) {
      console.warn(`Failed to query selector "${selector}":`, error);
      return null;
    }
  },

  // Safe element querying for multiple elements
  safeQuerySelectorAll: (selector: string, parent?: Element | Document) => {
    if (typeof window === 'undefined') return [];
    try {
      const context = parent || document;
      return Array.from(context.querySelectorAll(selector));
    } catch (error) {
      console.warn(`Failed to query selector "${selector}":`, error);
      return [];
    }
  }
};

// Common animation presets
export const animationPresets = {
  // Fade in from bottom
  fadeInUp: {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
  },
  
  // Fade in from left
  fadeInLeft: {
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: "power2.out"
  },
  
  // Fade in from right
  fadeInRight: {
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: "power2.out"
  },
  
  // Scale in
  scaleIn: {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  },
  
  // Slide in from top
  slideInDown: {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  },
  
  // Slide in from bottom
  slideInUp: {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }
};

// Common ScrollTrigger configurations
export const scrollTriggerPresets = {
  // Basic fade in on scroll
  fadeIn: {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  },
  
  // Pin element
  pin: {
    pin: true,
    start: "top top",
    end: "bottom top",
    pinSpacing: true
  },
  
  // Pin with scrub
  pinScrub: {
    pin: true,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pinSpacing: true
  },
  
  // Horizontal scroll
  horizontal: {
    pin: true,
    start: "top top",
    end: "+=200%",
    scrub: 1
  },
  
  // Parallax effect
  parallax: {
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
};

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function
  debounce: (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Throttle function
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Check if element is in viewport
  isInViewport: (element: Element) => {
    if (typeof window === 'undefined') return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  
  // Get element bounds
  getBounds: (element: Element) => {
    return element.getBoundingClientRect();
  }
};

// Responsive utilities
export const responsiveUtils = {
  // Check if device is mobile
  isMobile: () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  },
  
  // Check if device is tablet
  isTablet: () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  },
  
  // Check if device is desktop
  isDesktop: () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 1024;
  },
  
  // Get current breakpoint
  getBreakpoint: () => {
    if (typeof window === 'undefined') return 'desktop';
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }
};

// Animation cleanup utilities
export const cleanupUtils = {
  // Kill all ScrollTriggers
  killAllScrollTriggers: () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  },
  
  // Kill ScrollTriggers by scope
  killScrollTriggersByScope: (scope: any) => {
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === scope || trigger.scroller === scope) {
        trigger.kill();
      }
    });
  },
  
  // Revert GSAP context
  revertContext: (context: any) => {
    if (context && typeof context.revert === 'function') {
      context.revert();
    }
  },

  // Safe ScrollTrigger creation
  createScrollTrigger: (config: any) => {
    if (typeof window === 'undefined') return null;
    
    try {
      return ScrollTrigger.create({
        ...config,
        scroller: config.scroller || window,
        invalidateOnRefresh: true
      });
    } catch (error) {
      console.warn('ScrollTrigger creation failed:', error);
      return null;
    }
  }
};

// Export default configuration
export default {
  gsap,
  ScrollTrigger,
  ScrollToPlugin,
  Observer,
  Flip,
  ScrollSmoother,
  EasePack,
  gsapUtils,
  animationPresets,
  scrollTriggerPresets,
  performanceUtils,
  responsiveUtils,
  cleanupUtils
};

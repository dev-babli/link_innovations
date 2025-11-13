import { useEffect, useRef, useState } from 'react';

interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enableRAF?: boolean;
  targetFPS?: number;
}

export function usePerformanceOptimization(options: PerformanceOptimizationOptions = {}) {
  const {
    enableLazyLoading = true,
    enableIntersectionObserver = true,
    enableRAF = true,
    targetFPS = 60
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [fps, setFps] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);

  // FPS monitoring
  useEffect(() => {
    if (!enableRAF) return;

    const measureFPS = (currentTime: number) => {
      if (lastTimeRef.current) {
        const deltaTime = currentTime - lastTimeRef.current;
        frameCountRef.current++;
        
        if (deltaTime >= 1000) {
          const currentFPS = Math.round((frameCountRef.current * 1000) / deltaTime);
          setFps(currentFPS);
          frameCountRef.current = 0;
          lastTimeRef.current = currentTime;
        }
      } else {
        lastTimeRef.current = currentTime;
      }
      
      rafRef.current = requestAnimationFrame(measureFPS);
    };

    rafRef.current = requestAnimationFrame(measureFPS);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enableRAF]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!enableIntersectionObserver || !elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [enableIntersectionObserver]);

  // Performance monitoring
  const getPerformanceMetrics = () => {
    if (typeof window === 'undefined') return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
      firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      fps,
      memory: (performance as any).memory ? {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize,
        limit: (performance as any).memory.jsHeapSizeLimit
      } : null
    };
  };

  // Optimize GSAP animations for performance
  const optimizeGSAPAnimation = (animation: any) => {
    if (!animation) return;

    // Use will-change for better performance
    if (animation.targets) {
      const targets = Array.isArray(animation.targets) ? animation.targets : [animation.targets];
      targets.forEach((target: any) => {
        if (target && target.style) {
          target.style.willChange = 'transform, opacity';
        }
      });
    }

    // Set performance-optimized defaults
    animation.vars = {
      ...animation.vars,
      force3D: true,
      transformOrigin: 'center center'
    };

    return animation;
  };

  // Debounce function for performance
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Throttle function for performance
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  return {
    elementRef,
    isVisible,
    fps,
    getPerformanceMetrics,
    optimizeGSAPAnimation,
    debounce,
    throttle,
    isPerformanceGood: fps >= targetFPS * 0.8 // Consider good if within 80% of target
  };
}

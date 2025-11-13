"use client";

import { useEffect, useRef, useState } from "react";

interface UseSimpleFadeInOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

/**
 * McKinsey-inspired minimal fade-in animation hook
 * Simple opacity transition with optional delay
 * No complex transforms or heavy animations
 */
export function useSimpleFadeIn(options: UseSimpleFadeInOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", delay = 0 } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible };
}

/**
 * CSS classes for fade-in animation
 * Use with useSimpleFadeIn hook
 */
export const fadeInClasses = {
  base: "transition-opacity duration-700 ease-out",
  hidden: "opacity-0",
  visible: "opacity-100",
};

/**
 * Hook for staggered fade-in animations
 * Useful for lists and grids
 */
export function useStaggeredFadeIn(
  itemCount: number,
  staggerDelay: number = 100
) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the appearance of items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(i));
            }, i * staggerDelay);
          }
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [itemCount, staggerDelay]);

  return { ref, visibleItems };
}











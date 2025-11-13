"use client";

import { useRef, useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  disabled?: boolean;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up', disabled = false } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      let translateValue = 0;
      
      switch (direction) {
        case 'up':
          translateValue = rate;
          break;
        case 'down':
          translateValue = -rate;
          break;
        case 'left':
          translateValue = rate;
          break;
        case 'right':
          translateValue = -rate;
          break;
      }
      
      setOffset(translateValue);
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed, direction, disabled]);

  return {
    ref: elementRef,
    style: {
      transform: direction === 'left' || direction === 'right' 
        ? `translateX(${offset}px)` 
        : `translateY(${offset}px)`,
      willChange: 'transform'
    }
  };
}

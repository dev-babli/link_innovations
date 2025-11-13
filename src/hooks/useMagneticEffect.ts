"use client";

import { useRef, useEffect, useState } from 'react';

interface MagneticEffectOptions {
  strength?: number;
  distance?: number;
}

export function useMagneticEffect(options: MagneticEffectOptions = {}) {
  const { strength = 0.3, distance = 200 } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distanceFromCenter < distance) {
        const strengthFactor = 1 - (distanceFromCenter / distance);
        const moveX = deltaX * strength * strengthFactor;
        const moveY = deltaY * strength * strengthFactor;
        
        setPosition({ x: moveX, y: moveY });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    const handleMouseOut = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseout', handleMouseOut);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [strength, distance, isHovered]);

  return {
    ref: elementRef,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: isHovered ? 'none' : 'transform 0.3s ease-out'
    }
  };
}

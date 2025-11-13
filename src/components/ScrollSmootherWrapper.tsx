"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { registerGSAPPlugins } from '@/lib/gsap-config';

interface ScrollSmootherWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollSmootherWrapper({ children, className = '' }: ScrollSmootherWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // Register GSAP plugins
    registerGSAPPlugins();

    // Only run on client side
    if (typeof window === 'undefined') return;

    // Initialize ScrollSmoother
    if (wrapperRef.current && contentRef.current) {
      try {
        smootherRef.current = ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 1,
          normalizeScroll: true,
          ignoreMobileResize: true,
          effects: true,
          preventDefault: true
        });

        console.log('ScrollSmoother initialized successfully');
      } catch (error) {
        console.warn('ScrollSmoother initialization failed:', error);
      }
    }

    // Cleanup function
    return () => {
      if (smootherRef.current) {
        try {
          smootherRef.current.kill();
          smootherRef.current = null;
        } catch (error) {
          console.warn('ScrollSmoother cleanup failed:', error);
        }
      }
      
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === wrapperRef.current || trigger.scroller === wrapperRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (smootherRef.current) {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={wrapperRef} 
      id="wrapper" 
      className={`scroll-smoother-wrapper ${className}`}
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden' 
      }}
    >
      <div 
        ref={contentRef} 
        id="content" 
        className="scroll-smoother-content"
        style={{ 
          padding: '0 0.75rem', 
          overflow: 'visible', 
          width: '100%' 
        }}
      >
        {children}
      </div>
    </div>
  );
}










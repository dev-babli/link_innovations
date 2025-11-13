"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useLenisScrollTrigger = () => {
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Update ScrollTrigger on scroll (using native scroll)
        const handleScroll = () => {
            ScrollTrigger.refresh();
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        // Initial refresh
        ScrollTrigger.refresh();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', throttledScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
};





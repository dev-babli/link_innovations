"use client";

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
    children: React.ReactNode;
}

// Global Lenis instance to prevent multiple instances
let globalLenis: Lenis | null = null;

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Only create one global Lenis instance
        if (!globalLenis) {
            let rafId: number | undefined;
            
            try {
                globalLenis = new Lenis({
                    // Core smoothness settings - optimized for buttery smooth scrolling
                    // Lower lerp = smoother, slower scroll (0.08-0.1 is optimal for smoothness)
                    lerp: 0.08, // Smooth but still responsive (lower than default 0.1 for extra smoothness)

                    // Input sensitivity - optimized for smooth, responsive scrolling
                    wheelMultiplier: 1.5, // Higher value for faster, more responsive scrolling
                    smoothWheel: true, // Enable smooth wheel scrolling

                    // Touch settings for mobile
                    touchMultiplier: 1.5, // Balanced touch sensitivity
                    smoothTouch: true, // Enable smooth touch scrolling

                    // Performance optimizations
                    autoRaf: false, // Disable autoRaf when using manual RAF for better control
                    syncTouch: true, // Sync touch events for better mobile experience

                    // Additional settings
                    infinite: false, // Disable infinite scroll for better performance
                    orientation: 'vertical', // Vertical scrolling only
                    gestureOrientation: 'vertical', // Vertical gesture orientation
                });

                lenisRef.current = globalLenis;

                // Expose Lenis globally for ScrollTrigger integration
                (window as any).lenis = globalLenis;

                // Optimized animation frame function for smooth scrolling
                function raf(time: number) {
                    try {
                        if (globalLenis) {
                            globalLenis.raf(time);
                            rafId = requestAnimationFrame(raf);
                        }
                    } catch (error) {
                        console.warn('Lenis RAF error:', error);
                    }
                }

                rafId = requestAnimationFrame(raf);
            } catch (error) {
                console.warn('Lenis initialization failed:', error);
                globalLenis = null;
            }

            // Handle anchor links for smooth scrolling
            const handleAnchorLinks = (e: Event) => {
                try {
                    const target = e.target as HTMLAnchorElement;
                    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                        e.preventDefault();
                        const targetId = target.getAttribute('href');
                        if (targetId && globalLenis) {
                            const scrollPromise = globalLenis.scrollTo(targetId);

                            // Handle promise rejection if scrollTo returns a promise
                            if (scrollPromise && typeof scrollPromise.catch === 'function') {
                                scrollPromise.catch((error) => {
                                    console.warn('Lenis scrollTo failed:', error);
                                });
                            }
                        }
                    }
                } catch (error) {
                    console.warn('Anchor link handler error:', error);
                }
            };

            // Add event listener for anchor links
            document.addEventListener('click', handleAnchorLinks);

            // Store cleanup function
            const cleanup = () => {
                try {
                    document.removeEventListener('click', handleAnchorLinks);
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                    }
                    if (globalLenis) {
                        globalLenis.destroy();
                        globalLenis = null;
                    }
                } catch (error) {
                    console.warn('Lenis cleanup error:', error);
                }
            };

            // Store cleanup function for later use (only if Lenis was initialized successfully)
            if (globalLenis) {
                (globalLenis as any).cleanup = cleanup;
            }
        } else {
            // Use existing global instance
            lenisRef.current = globalLenis;
        }

        // Cleanup on unmount
        return () => {
            try {
                // Only cleanup if this is the last component using Lenis
                if (globalLenis && (globalLenis as any).cleanup) {
                    (globalLenis as any).cleanup();
                }
            } catch (error) {
                console.warn('Lenis useEffect cleanup error:', error);
            }
        };
    }, []);

    return <>{children}</>;
};

export default LenisProvider;




"use client";

import { useEffect } from "react";

export function PerformanceOptimizer() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Preload critical Link Innovations resources
        const preloadCriticalResources = () => {
            const criticalImages = [
                "/logos/link_logo.jpg",
                "/images/services/ai-automation/hero-ai-automation.jpg",
                "/images/services/cloud-devops/hero-cloud-services.jpg",
                "/images/services/mobile-app-development/hero-mobile-apps.jpg",
                "/images/service-cards/ai-automation-service-card.webp",
                "/images/service-cards/web-development-service-card.webp",
                "/images/service-cards/cybersecurity-service-card.webp"
            ];

            criticalImages.forEach((src) => {
                const link = document.createElement("link");
                link.rel = "preload";
                link.as = "image";
                link.href = src;
                document.head.appendChild(link);
            });
        };

        // Optimize animations for reduced motion preference
        const optimizeAnimations = () => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (prefersReducedMotion) {
                document.documentElement.style.setProperty("--animation-duration", "0.01ms");
                document.documentElement.style.setProperty("--animation-iteration-count", "1");
            }
        };

        // Optimize images for different screen densities and add fallback handling
        const optimizeImages = () => {
            try {
                const images = document.querySelectorAll("img");
                images.forEach((img) => {
                    if (!img.loading) {
                        img.loading = "lazy";
                    }

                    // Add comprehensive error handling with fallbacks
                    img.addEventListener("error", (e) => {
                        try {
                            const target = e.target as HTMLImageElement;

                            // Try fallback images based on the original src
                            const fallbackMap: { [key: string]: string } = {
                                "/images/services/ai-automation/hero-ai-automation.jpg": "/images/services/cloud-devops/hero-cloud-services.jpg",
                                "/images/services/cloud-devops/hero-cloud-services.jpg": "/images/services/mobile-app-development/hero-mobile-apps.jpg",
                                "/images/service-cards/ai-automation-service-card.webp": "/images/service-cards/web-development-service-card.webp",
                                "/images/service-cards/web-development-service-card.webp": "/images/service-cards/cybersecurity-service-card.webp"
                            };

                            const fallback = fallbackMap[target.src];
                            if (fallback && !target.dataset.fallbackAttempted) {
                                target.dataset.fallbackAttempted = "true";
                                target.src = fallback;
                            } else {
                                // If no fallback or fallback also failed, show placeholder
                                target.style.display = "none";
                                target.alt = "Image failed to load";
                            }
                        } catch (error) {
                            console.warn('Image error handler failed:', error);
                        }
                    });
                });
            } catch (error) {
                console.warn('Image optimization failed:', error);
            }
        };

        // Initialize performance optimizations
        preloadCriticalResources();
        optimizeAnimations();
        optimizeImages();

        // Set up intersection observer for lazy loading with performance optimizations
        let imageObserver: IntersectionObserver | null = null;

        const setupIntersectionObserver = () => {
            try {
                if ("IntersectionObserver" in window) {
                    imageObserver = new IntersectionObserver(
                        (entries) => {
                            entries.forEach((entry) => {
                                try {
                                    if (entry.isIntersecting) {
                                        const img = entry.target as HTMLImageElement;
                                        if (img.dataset.src) {
                                            img.src = img.dataset.src;
                                            img.removeAttribute("data-src");
                                            imageObserver?.unobserve(img);
                                        }
                                    }
                                } catch (error) {
                                    console.warn('Intersection observer entry error:', error);
                                }
                            });
                        },
                        {
                            rootMargin: "50px", // Start loading 50px before image enters viewport
                            threshold: 0.1
                        }
                    );

                    const lazyImages = document.querySelectorAll("img[data-src]");
                    lazyImages.forEach((img) => imageObserver?.observe(img));
                }
            } catch (error) {
                console.warn('Intersection observer setup failed:', error);
            }
        };

        // Add performance monitoring
        const setupPerformanceMonitoring = () => {
            // Monitor Core Web Vitals
            if ('web-vital' in window) {
                import('web-vitals')
                    .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                        getCLS(console.log);
                        getFID(console.log);
                        getFCP(console.log);
                        getLCP(console.log);
                        getTTFB(console.log);
                    })
                    .catch((error) => {
                        console.warn('Failed to load web-vitals:', error);
                    });
            }
        };

        setupIntersectionObserver();
        setupPerformanceMonitoring();

        // Cleanup function
        return () => {
            if (imageObserver) {
                imageObserver.disconnect();
            }
        };
    }, []);

    return null;
}






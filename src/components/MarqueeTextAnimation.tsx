"use client";

import { useEffect, useRef } from 'react';
import { Globe } from '@/icons/Globe';
import { SmartphoneNfc } from '@/icons/SmartphoneNfc';
import { Wand } from '@/icons/Wand';
import { CloudDrizzle } from '@/icons/CloudDrizzle';
import { BadgeCheck } from '@/icons/BadgeCheck';
import { useLenisScrollTrigger } from '@/hooks/useLenisScrollTrigger';

declare global {
    interface Window {
        gsap: any;
        ScrollTrigger: any;
        Lenis: any;
    }
}

export default function MarqueeTextAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Integrate Lenis with ScrollTrigger
    useLenisScrollTrigger();

    useEffect(() => {
        // Dynamically load GSAP and plugins
        const loadScript = (src: string) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve(true);
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        const loadFonts = () => {
            return new Promise((resolve) => {
                if (document.querySelector('link[href*="Manrope"]')) {
                    resolve(true);
                    return;
                }
                const link = document.createElement('link');
                link.rel = 'preconnect';
                link.href = 'https://fonts.googleapis.com';
                document.head.appendChild(link);

                const link2 = document.createElement('link');
                link2.rel = 'preconnect';
                link2.href = 'https://fonts.gstatic.com';
                link2.crossOrigin = 'anonymous';
                document.head.appendChild(link2);

                const fontLink = document.createElement('link');
                fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap';
                fontLink.rel = 'stylesheet';
                fontLink.onload = resolve;
                document.head.appendChild(fontLink);
            });
        };

        const initializeAnimation = async () => {
            try {
                // Load external dependencies
                await Promise.all([
                    loadFonts(),
                    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
                    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js')
                ]);

                // Wait for GSAP to be available
                if (!window.gsap || !window.ScrollTrigger) {
                    console.error('GSAP or ScrollTrigger not loaded');
                    return;
                }

                const { gsap, ScrollTrigger } = window;

                // Register GSAP plugins
                gsap.registerPlugin(ScrollTrigger);

                // ScrollTrigger works with native smooth scroll

                // Get all heading elements within this component
                const headings = gsap.utils.toArray('.marquee-title h1');
                const splits: NodeList[] = [];

                // Split text into characters
                headings.forEach((heading: any, index: number) => {
                    const text = heading.textContent;
                    const characters = text.split('').map((char: string) =>
                        char === ' ' ? '&nbsp;' : char
                    );

                    heading.innerHTML = characters.map((char: string) =>
                        `<span class="marquee-character">${char}</span>`
                    ).join('');

                    // Store the character elements
                    const characterElements = heading.querySelectorAll('.marquee-character');
                    splits.push(characterElements);

                    // Set initial positions for staggered effect
                    characterElements.forEach((char: any, charIndex: number) => {
                        const offset = charIndex % 2 === 0 ? -50 : 50;
                        gsap.set(char, { y: offset });
                    });
                });

                // Get title sections for scroll triggers
                const titleSections = gsap.utils.toArray('.marquee-title');

                // Create scroll triggers for each title
                titleSections.forEach((title: any, index: number) => {
                    const container = title.querySelector('.marquee-title-container');
                    const characterElements = splits[index];
                    const characterCount = characterElements.length;

                    // Set initial X position
                    const initialX = index === 1 ? '100%' : '-100%';
                    gsap.set(container, { x: initialX });

                    ScrollTrigger.create({
                        trigger: title,
                        start: 'top bottom',
                        end: 'top top-=100px',
                        scrub: true,
                        onUpdate: (self: any) => {
                            const progress = self.progress;

                            // Animate container horizontally
                            const targetX = index === 1 ?
                                (100 - progress * 100) :
                                (-100 + progress * 100);
                            gsap.set(container, { x: `${targetX}%` });

                            // Animate characters vertically with stagger
                            const order = index === 1 ?
                                [...characterElements].reverse() :
                                characterElements;

                            order.forEach((char: any, charIndex: number) => {
                                const characterStartDelay = 0.1;
                                const characterTimelineSpan = 0.6;
                                const staggerFactor = characterTimelineSpan / characterCount;

                                const delay = characterStartDelay + (charIndex * staggerFactor);
                                const duration = staggerFactor * 0.8;

                                let charProgress = 0;

                                if (progress >= delay) {
                                    charProgress = Math.min(1, (progress - delay) / duration);
                                }

                                const initialY = charIndex % 2 === 0 ? -50 : 50;
                                const targetY = initialY * (1 - charProgress);

                                gsap.set(char, { y: targetY });
                            });
                        }
                    });
                });

                // Cleanup function
                return () => {
                    ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
                };

            } catch (error) {
                console.error('Error initializing marquee animation:', error);
            }
        };

        initializeAnimation();
    }, []);

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-black-100 to-black-200">
            {/* Animated Titles Section - Showcasing Components */}
            <div className="relative" ref={containerRef}>
                <div className="marquee-title h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-purple-800/30">
                    <div className="marquee-title-container w-full relative text-center">
                        <div className="flex justify-center mb-6">
                            <Globe width={80} height={80} stroke="#ffffff" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-mono">
                            Web Development
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                            Modern, responsive web applications that scale with your business
                        </p>
                    </div>
                </div>

                <div className="marquee-title h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-blue-800/30">
                    <div className="marquee-title-container w-full relative text-center">
                        <div className="flex justify-center mb-6">
                            <SmartphoneNfc width={80} height={80} stroke="#ffffff" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-mono">
                            Mobile Apps
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                            Native and cross-platform mobile solutions for iOS and Android
                        </p>
                    </div>
                </div>

                <div className="marquee-title h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600/20 to-green-800/30">
                    <div className="marquee-title-container w-full relative text-center">
                        <div className="flex justify-center mb-6">
                            <Wand width={80} height={80} stroke="#ffffff" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-mono">
                            AI Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                            Intelligent solutions that automate and optimize your processes
                        </p>
                    </div>
                </div>

                <div className="marquee-title h-[60vh] flex items-center justify-center bg-gradient-to-br from-orange-600/20 to-orange-800/30">
                    <div className="marquee-title-container w-full relative text-center">
                        <div className="flex justify-center mb-6">
                            <CloudDrizzle width={80} height={80} stroke="#ffffff" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-mono">
                            Cloud & DevOps
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                            Scalable cloud infrastructure and seamless deployment pipelines
                        </p>
                    </div>
                </div>

                <div className="marquee-title h-[60vh] flex items-center justify-center bg-gradient-to-br from-cyan-600/20 to-cyan-800/30">
                    <div className="marquee-title-container w-full relative text-center">
                        <div className="flex justify-center mb-6">
                            <BadgeCheck width={80} height={80} stroke="#ffffff" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-mono">
                            Cybersecurity
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                            Comprehensive security solutions to protect your digital assets
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .marquee-character {
          display: inline-block;
          position: relative;
          will-change: transform;
        }
        
        @media (max-width: 1000px) {
          h1 {
            font-size: clamp(2rem, 6vw, 4rem);
            letter-spacing: 0;
          }
        }
      `}</style>
        </section>
    );
}

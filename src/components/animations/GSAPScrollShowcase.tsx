"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/animation-utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ============================================================================
// PINNED SECTION WITH SCRUBBED ANIMATION
// ============================================================================

export interface PinnedSectionProps {
    children: React.ReactNode;
    className?: string;
    pinDuration?: string;  // e.g., "+=1000" for 1000px scroll
    scrub?: boolean | number;
    markers?: boolean;
}

/**
 * Pinned Section
 * 
 * Pins section while animations play, like Apple product pages
 */
export function PinnedSection({
    children,
    className = "",
    pinDuration = "+=1000",
    scrub = 1,
    markers = false,
}: PinnedSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const shouldReduce = prefersReducedMotion();

    useGSAP(() => {
        if (!sectionRef.current || shouldReduce) return;

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: pinDuration,
            pin: true,
            scrub,
            markers,
            anticipatePin: 1,
        });
    }, { scope: sectionRef });

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
}

// ============================================================================
// HORIZONTAL SCROLL SECTION
// ============================================================================

export interface HorizontalScrollProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;
    markers?: boolean;
}

/**
 * Horizontal Scroll
 * 
 * Scroll vertically to move content horizontally
 * Perfect for galleries, timelines, feature showcases
 */
export function HorizontalScroll({
    children,
    className = "",
    speed = 1,
    markers = false,
}: HorizontalScrollProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const shouldReduce = prefersReducedMotion();

    useGSAP(() => {
        if (!sectionRef.current || !scrollerRef.current || shouldReduce) return;

        const scroller = scrollerRef.current;
        const scrollWidth = scroller.scrollWidth;
        const windowWidth = window.innerWidth;

        gsap.to(scroller, {
            x: -(scrollWidth - windowWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: () => `+=${scrollWidth * speed}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                markers,
            },
        });
    }, { scope: sectionRef, dependencies: [speed] });

    if (shouldReduce) {
        return (
            <div ref={sectionRef} className={className}>
                <div ref={scrollerRef} className="flex gap-8 overflow-x-auto">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div ref={sectionRef} className={`overflow-hidden ${className}`}>
            <div ref={scrollerRef} className="flex gap-8 will-change-transform">
                {children}
            </div>
        </div>
    );
}

// ============================================================================
// SVG PATH DRAWING
// ============================================================================

export interface SVGPathDrawProps {
    path: string;  // SVG path data
    className?: string;
    strokeColor?: string;
    strokeWidth?: number;
    duration?: number;
    markers?: boolean;
}

/**
 * SVG Path Drawing
 * 
 * Draws SVG path progressively on scroll
 * Great for logos, icons, decorative elements
 */
export function SVGPathDraw({
    path,
    className = "",
    strokeColor = "currentColor",
    strokeWidth = 2,
    duration = 2,
    markers = false,
}: SVGPathDrawProps) {
    const pathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduce = prefersReducedMotion();

    useGSAP(() => {
        if (!pathRef.current || !containerRef.current || shouldReduce) return;

        const pathElement = pathRef.current;
        const pathLength = pathElement.getTotalLength();

        // Set initial state
        gsap.set(pathElement, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        // Animate on scroll
        gsap.to(pathElement, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1,
                markers,
            },
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={className}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                    ref={pathRef}
                    d={path}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

// ============================================================================
// SCROLL-SCRUBBED TEXT
// ============================================================================

export interface ScrubTextProps {
    children: React.ReactNode;
    className?: string;
    from?: object;
    to?: object;
    markers?: boolean;
}

/**
 * Scroll-Scrubbed Text
 * 
 * Text animation tied directly to scroll position
 */
export function ScrubText({
    children,
    className = "",
    from = { opacity: 0, y: 100, scale: 0.8 },
    to = { opacity: 1, y: 0, scale: 1 },
    markers = false,
}: ScrubTextProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const shouldReduce = prefersReducedMotion();

    useGSAP(() => {
        if (!elementRef.current || shouldReduce) return;

        gsap.fromTo(
            elementRef.current,
            from,
            {
                ...to,
                ease: 'none',
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 1,
                    markers,
                },
            }
        );
    }, { scope: elementRef });

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}

// ============================================================================
// PARALLAX LAYER
// ============================================================================

export interface ParallaxLayerProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;  // Negative = moves faster, Positive = moves slower
    markers?: boolean;
}

/**
 * Parallax Layer
 * 
 * Moves at different speed than scroll for depth effect
 */
export function ParallaxLayer({
    children,
    className = "",
    speed = 0.5,
    markers = false,
}: ParallaxLayerProps) {
    const layerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduce = prefersReducedMotion();

    useGSAP(() => {
        if (!layerRef.current || !containerRef.current || shouldReduce) return;

        gsap.to(layerRef.current, {
            y: () => -window.innerHeight * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                markers,
            },
        });
    }, { scope: containerRef, dependencies: [speed] });

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <div ref={layerRef} className="will-change-transform">
                {children}
            </div>
        </div>
    );
}

// ============================================================================
// 3D ROTATE ON SCROLL
// ============================================================================

export interface Rotate3DProps {
    children: React.ReactNode;
    className?: string;
    axis?: 'x' | 'y' | 'z';
    maxRotation?: number;
    markers?: boolean;
}

/**
 * 3D Rotate on Scroll
 * 
 * Rotates element in 3D space as user scrolls
 */
export function Rotate3D({
    children,
    className = "",
    axis = 'y',
    maxRotation = 360,
    markers = false,
}: Rotate3DProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduce = prefersReducedMotion();

    useGSAP(() => {
        if (!elementRef.current || !containerRef.current || shouldReduce) return;

        const rotateProperty = `rotate${axis.toUpperCase()}`;

        gsap.to(elementRef.current, {
            [rotateProperty]: maxRotation,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
                markers,
            },
        });
    }, { scope: containerRef, dependencies: [axis, maxRotation] });

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <div
                ref={elementRef}
                className="will-change-transform"
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
                {children}
            </div>
        </div>
    );
}

// ============================================================================
// BATCH ANIMATION (Multiple elements, same trigger)
// ============================================================================

export interface BatchAnimationProps {
    children: React.ReactNode;
    className?: string;
    animations: Array<{
        selector: string;
        from: object;
        to: object;
        delay?: number;
    }>;
    markers?: boolean;
}

/**
 * Batch Animation
 * 
 * Animate multiple child elements with one ScrollTrigger
 * More efficient than individual triggers
 */
export function BatchAnimation({
    children,
    className = "",
    animations,
    markers = false,
}: BatchAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduce = prefersReducedMotion();

    useGSAP(() => {
        if (!containerRef.current || shouldReduce) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                markers,
            },
        });

        animations.forEach((anim) => {
            const elements = containerRef.current!.querySelectorAll(anim.selector);
            if (elements.length > 0) {
                tl.fromTo(
                    elements,
                    anim.from,
                    {
                        ...anim.to,
                        duration: 0.6,
                        ease: 'power2.out',
                        stagger: 0.1,
                    },
                    anim.delay || 0
                );
            }
        });
    }, { scope: containerRef, dependencies: [animations] });

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}





"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { prefersReducedMotion } from "@/lib/animation-utils";

// ============================================================================
// TYPES
// ============================================================================

export interface AnimeScrollEffectProps {
    children: React.ReactNode;
    className?: string;
    effect: 'morph' | 'path-draw' | 'color-shift' | 'elastic' | 'spring';
    duration?: number;
    delay?: number;
    easing?: string;
}

// ============================================================================
// MORPHING SHAPES
// ============================================================================

export interface MorphingShapeProps {
    fromShape: string;  // SVG path
    toShape: string;    // SVG path
    className?: string;
    strokeColor?: string;
    fillColor?: string;
    duration?: number;
    loop?: boolean;
}

/**
 * Morphing Shape Animation
 * 
 * Smoothly morphs between two SVG shapes using Anime.js
 */
export function MorphingShape({
    fromShape,
    toShape,
    className = "",
    strokeColor = "currentColor",
    fillColor = "none",
    duration = 2000,
    loop = false,
}: MorphingShapeProps) {
    const pathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    // Viewport detection
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        if (!loop) observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [loop]);

    // Anime.js morphing
    useEffect(() => {
        if (!pathRef.current || !isInView || shouldReduce) return;

        anime({
            targets: pathRef.current,
            d: [
                { value: fromShape },
                { value: toShape },
            ],
            duration,
            easing: 'easeInOutQuad',
            loop: loop,
            direction: loop ? 'alternate' : 'normal',
        });
    }, [isInView, fromShape, toShape, duration, loop, shouldReduce]);

    return (
        <div ref={containerRef} className={className}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                    ref={pathRef}
                    d={fromShape}
                    stroke={strokeColor}
                    fill={fillColor}
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}

// ============================================================================
// ELASTIC ANIMATION
// ============================================================================

export interface ElasticRevealProps {
    children: React.ReactNode;
    className?: string;
    axis?: 'x' | 'y' | 'both';
    elasticity?: number;  // 0-1000, higher = more elastic
}

/**
 * Elastic Reveal
 * 
 * Uses Anime.js spring physics for bouncy reveals
 */
export function ElasticReveal({
    children,
    className = "",
    axis = 'y',
    elasticity = 400,
}: ElasticRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!elementRef.current || !isInView || shouldReduce) return;

        const targets: any = { opacity: [0, 1] };

        if (axis === 'x' || axis === 'both') {
            targets.translateX = ['-100%', '0%'];
        }
        if (axis === 'y' || axis === 'both') {
            targets.translateY = [100, 0];
        }

        anime({
            targets: elementRef.current,
            ...targets,
            duration: 1200,
            easing: `spring(1, ${elasticity}, 10, 0)`,
        });
    }, [isInView, axis, elasticity, shouldReduce]);

    if (shouldReduce) {
        return <div ref={containerRef} className={className}>{children}</div>;
    }

    return (
        <div ref={containerRef} className={className}>
            <div ref={elementRef} style={{ opacity: 0 }}>
                {children}
            </div>
        </div>
    );
}

// ============================================================================
// COLOR SHIFT ANIMATION
// ============================================================================

export interface ColorShiftProps {
    children: React.ReactNode;
    className?: string;
    fromColor?: string;
    toColor?: string;
    property?: 'color' | 'backgroundColor' | 'borderColor';
    duration?: number;
}

/**
 * Color Shift on Scroll
 * 
 * Smoothly transitions colors using Anime.js
 */
export function ColorShift({
    children,
    className = "",
    fromColor = '#000000',
    toColor = '#8B5CF6',
    property = 'color',
    duration = 1000,
}: ColorShiftProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!elementRef.current || !isInView || shouldReduce) return;

        anime({
            targets: elementRef.current,
            [property]: [fromColor, toColor],
            duration,
            easing: 'easeInOutQuad',
        });
    }, [isInView, fromColor, toColor, property, duration, shouldReduce]);

    return (
        <div ref={containerRef} className={className}>
            <div ref={elementRef} style={{ [property]: fromColor }}>
                {children}
            </div>
        </div>
    );
}

// ============================================================================
// NUMBER COUNTER WITH ANIME.JS
// ============================================================================

export interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    decimals?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    easing?: string;
}

/**
 * Animated Counter
 * 
 * Counts up from one number to another on scroll
 */
export function AnimatedCounter({
    from = 0,
    to,
    duration = 2000,
    decimals = 0,
    suffix = '',
    prefix = '',
    className = "",
    easing = 'easeOutExpo',
}: AnimatedCounterProps) {
    const elementRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!elementRef.current || !isInView) return;

        const obj = { value: from };

        anime({
            targets: obj,
            value: to,
            duration: shouldReduce ? 10 : duration,
            easing,
            round: decimals === 0 ? 1 : Math.pow(10, decimals),
            update: () => {
                if (elementRef.current) {
                    const formatted = decimals > 0
                        ? obj.value.toFixed(decimals)
                        : Math.round(obj.value).toString();
                    elementRef.current.textContent = `${prefix}${formatted}${suffix}`;
                }
            },
        });
    }, [isInView, from, to, duration, decimals, prefix, suffix, easing, shouldReduce]);

    return (
        <div ref={containerRef} className={className}>
            <span ref={elementRef}>{prefix}{from}{suffix}</span>
        </div>
    );
}

// ============================================================================
// SVG PATH ANIMATION
// ============================================================================

export interface SVGPathAnimateProps {
    path: string;
    className?: string;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
    duration?: number;
    delay?: number;
    easing?: string;
}

/**
 * SVG Path Animation
 * 
 * Draws SVG path on scroll using Anime.js
 */
export function SVGPathAnimate({
    path,
    className = "",
    strokeColor = "currentColor",
    strokeWidth = 2,
    fillColor = "none",
    duration = 2000,
    delay = 0,
    easing = 'easeInOutQuad',
}: SVGPathAnimateProps) {
    const pathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!pathRef.current || !isInView) return;

        const pathElement = pathRef.current;
        const pathLength = pathElement.getTotalLength();

        pathElement.style.strokeDasharray = pathLength.toString();
        pathElement.style.strokeDashoffset = pathLength.toString();

        anime({
            targets: pathElement,
            strokeDashoffset: shouldReduce ? 0 : [pathLength, 0],
            duration: shouldReduce ? 10 : duration,
            delay,
            easing,
        });
    }, [isInView, duration, delay, easing, shouldReduce]);

    return (
        <div ref={containerRef} className={className}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                    ref={pathRef}
                    d={path}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    fill={fillColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

// ============================================================================
// STAGGER WITH CUSTOM EASING
// ============================================================================

export interface AnimeStaggerProps {
    children: React.ReactNode;
    className?: string;
    stagger?: number;
    from?: 'first' | 'last' | 'center';
    easing?: string;
    translateY?: [number, number];
    scale?: [number, number];
    rotate?: [number, number];
}

/**
 * Anime.js Stagger
 * 
 * Advanced stagger with Anime.js easing options
 */
export function AnimeStagger({
    children,
    className = "",
    stagger = 100,
    from = 'first',
    easing = 'spring(1, 80, 10, 0)',
    translateY = [50, 0],
    scale = [0.8, 1],
    rotate,
}: AnimeStaggerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!containerRef.current || !isInView) return;

        const items = containerRef.current.querySelectorAll('.anime-stagger-item');
        if (items.length === 0) return;

        const animationProps: any = {
            targets: items,
            opacity: [0, 1],
            translateY,
            scale,
            duration: shouldReduce ? 10 : 800,
            easing,
            delay: anime.stagger(stagger, { from }),
        };

        if (rotate) {
            animationProps.rotate = rotate;
        }

        anime(animationProps);
    }, [isInView, stagger, from, easing, translateY, scale, rotate, shouldReduce]);

    if (shouldReduce) {
        return <div ref={containerRef} className={className}>{children}</div>;
    }

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}

// ============================================================================
// WAVE ANIMATION
// ============================================================================

export interface WaveAnimationProps {
    children: React.ReactNode;
    className?: string;
    waveHeight?: number;
    waveDuration?: number;
    waveDelay?: number;
}

/**
 * Wave Animation
 * 
 * Creates wave effect across elements using Anime.js
 */
export function WaveAnimation({
    children,
    className = "",
    waveHeight = 20,
    waveDuration = 1000,
    waveDelay = 50,
}: WaveAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!containerRef.current || !isInView || shouldReduce) return;

        const items = containerRef.current.querySelectorAll('.wave-item');
        if (items.length === 0) return;

        anime({
            targets: items,
            translateY: [
                { value: waveHeight, duration: waveDuration / 2 },
                { value: 0, duration: waveDuration / 2 },
            ],
            opacity: [0, 1, 1],
            delay: anime.stagger(waveDelay),
            easing: 'easeInOutSine',
        });
    }, [isInView, waveHeight, waveDuration, waveDelay, shouldReduce]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}

// ============================================================================
// TIMELINE SEQUENCE
// ============================================================================

export interface TimelineSequenceProps {
    children: React.ReactNode;
    className?: string;
    sequence: Array<{
        selector: string;
        animation: object;
        offset?: string | number;
    }>;
}

/**
 * Timeline Sequence
 * 
 * Complex multi-step animations with Anime.js timeline
 */
export function TimelineSequence({
    children,
    className = "",
    sequence,
}: TimelineSequenceProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!containerRef.current || !isInView || shouldReduce) return;

        const timeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750,
        });

        sequence.forEach((step) => {
            const targets = containerRef.current!.querySelectorAll(step.selector);
            if (targets.length > 0) {
                timeline.add(
                    {
                        targets,
                        ...step.animation,
                    },
                    step.offset || '+=0'
                );
            }
        });
    }, [isInView, sequence, shouldReduce]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}

// ============================================================================
// RIPPLE EFFECT
// ============================================================================

export interface RippleEffectProps {
    children: React.ReactNode;
    className?: string;
    rippleCount?: number;
    duration?: number;
}

/**
 * Ripple Effect
 * 
 * Creates expanding ripple animation on scroll
 */
export function RippleEffect({
    children,
    className = "",
    rippleCount = 3,
    duration = 2000,
}: RippleEffectProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!containerRef.current || !isInView || shouldReduce) return;

        const ripples = containerRef.current.querySelectorAll('.ripple');

        anime({
            targets: ripples,
            scale: [0, 2],
            opacity: [0.8, 0],
            duration,
            easing: 'easeOutExpo',
            delay: anime.stagger(duration / rippleCount),
        });
    }, [isInView, rippleCount, duration, shouldReduce]);

    if (shouldReduce) {
        return <div ref={containerRef} className={className}>{children}</div>;
    }

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* Ripple elements */}
            {Array.from({ length: rippleCount }).map((_, i) => (
                <div
                    key={i}
                    className="ripple absolute inset-0 border-2 border-purple-500 rounded-full"
                    style={{ opacity: 0 }}
                />
            ))}
            <div className="relative z-10">{children}</div>
        </div>
    );
}

// ============================================================================
// CUSTOM EASING SHOWCASE
// ============================================================================

export interface CustomEasingProps {
    children: React.ReactNode;
    className?: string;
    easingFunction: string;  // Anime.js easing string
}

/**
 * Custom Easing Demo
 * 
 * Showcases custom easing curves from Anime.js
 */
export function CustomEasing({
    children,
    className = "",
    easingFunction = 'spring(1, 80, 10, 0)',
}: CustomEasingProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduce = prefersReducedMotion();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!elementRef.current || !isInView || shouldReduce) return;

        anime({
            targets: elementRef.current,
            translateY: [100, 0],
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 1500,
            easing: easingFunction,
        });
    }, [isInView, easingFunction, shouldReduce]);

    if (shouldReduce) {
        return <div ref={containerRef} className={className}>{children}</div>;
    }

    return (
        <div ref={containerRef} className={className}>
            <div ref={elementRef} style={{ opacity: 0 }}>
                {children}
            </div>
        </div>
    );
}





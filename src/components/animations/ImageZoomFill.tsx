"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NextImage from "next/image";
import { getScaleToFill, getCenteredPosition, prefersReducedMotion, pixelateImage, getPixelSizeFromProgress } from "@/lib/animation-utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ============================================================================
// TYPES
// ============================================================================

export interface ImageZoomFillProps {
    src: string;
    alt: string;
    className?: string;

    // Starting position
    startPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    startSize?: { width: number; height: number };

    // Scroll range
    scrollDistance?: number;     // How many pixels to scroll for full animation

    // Animation config
    useGSAP?: boolean;           // Use GSAP (smoother) vs Framer Motion
    pin?: boolean;               // Pin during animation

    // Style
    objectFit?: "cover" | "contain";
    zIndex?: number;

    // Callbacks
    onZoomStart?: () => void;
    onZoomComplete?: () => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Image Zoom Fill Animation
 * 
 * Starts as small image in corner, expands to fill screen on scroll
 * Apple-style product showcase animation
 * Uses GSAP ScrollTrigger for smooth scrubbing
 */
export function ImageZoomFill({
    src,
    alt,
    className = "",
    startPosition = "bottom-left",
    startSize = { width: 300, height: 200 },
    scrollDistance = 1000,
    useGSAP: shouldUseGSAP = true,
    pin = false,
    objectFit = "cover",
    zIndex = 10,
    onZoomStart,
    onZoomComplete,
}: ImageZoomFillProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const shouldReduce = prefersReducedMotion();

    // Get viewport dimensions
    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Calculate positions
    const getStartPosition = () => {
        const padding = 20;
        const positions = {
            "top-left": { top: padding, left: padding },
            "top-right": { top: padding, right: padding },
            "bottom-left": { bottom: padding, left: padding },
            "bottom-right": { bottom: padding, right: padding },
        };
        return positions[startPosition];
    };

    // GSAP Implementation
    useGSAP(() => {
        if (!shouldUseGSAP || !imageRef.current || shouldReduce) return;

        const startPos = getStartPosition();
        const scaleToFill = getScaleToFill(
            startSize.width,
            startSize.height,
            dimensions.width,
            dimensions.height
        );

        gsap.set(imageRef.current, {
            width: startSize.width,
            height: startSize.height,
            ...startPos,
            position: 'fixed',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: `+=${scrollDistance}`,
                scrub: 1,
                pin: pin ? containerRef.current : false,
                onEnter: onZoomStart,
                onLeave: onZoomComplete,
                markers: false,
            },
        });

        tl.to(imageRef.current, {
            scale: scaleToFill,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            ease: 'none',
        });

    }, { dependencies: [dimensions, shouldUseGSAP, scrollDistance], scope: containerRef });

    // Framer Motion Implementation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const x = useTransform(scrollYProgress, [0, 1], [0, -25]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -25]);

    // Reduced motion - show full image
    if (shouldReduce) {
        return (
            <div ref={containerRef} className={`relative ${className}`}>
                <NextImage
                    src={src}
                    alt={alt}
                    fill
                    className={`object-${objectFit}`}
                    style={{ zIndex }}
                />
            </div>
        );
    }

    // GSAP version
    if (shouldUseGSAP) {
        return (
            <div ref={containerRef} className={`relative ${className}`} style={{ height: `${scrollDistance}px` }}>
                <div
                    ref={imageRef}
                    className="overflow-hidden"
                    style={{ zIndex }}
                >
                    <NextImage
                        src={src}
                        alt={alt}
                        width={startSize.width}
                        height={startSize.height}
                        className={`object-${objectFit}`}
                    />
                </div>
            </div>
        );
    }

    // Framer Motion version
    return (
        <div ref={containerRef} className={`relative ${className}`} style={{ height: '150vh' }}>
            <motion.div
                className="sticky top-0 left-0 w-full h-screen overflow-hidden"
                style={{
                    scale,
                    x,
                    y,
                    zIndex,
                }}
            >
                <NextImage
                    src={src}
                    alt={alt}
                    fill
                    className={`object-${objectFit}`}
                />
            </motion.div>
        </div>
    );
}

// ============================================================================
// CANVAS-BASED PIXELATE (Most Authentic)
// ============================================================================

export function CanvasPixelateReveal({
    src,
    alt,
    className = "",
    maxPixelSize = 50,
    minPixelSize = 1,
}: {
    src: string;
    alt: string;
    className?: string;
    maxPixelSize?: number;
    minPixelSize?: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [loaded, setLoaded] = useState(false);
    const shouldReduce = prefersReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Load image
    useEffect(() => {
        const img = new window.Image();
        img.onload = () => {
            imgRef.current = img;
            setLoaded(true);

            if (canvasRef.current) {
                canvasRef.current.width = img.naturalWidth;
                canvasRef.current.height = img.naturalHeight;
            }
        };
        img.src = src;
    }, [src]);

    // Animate pixelation
    useEffect(() => {
        if (!loaded || !canvasRef.current || !imgRef.current) return;

        const unsubscribe = scrollYProgress.on('change', (progress) => {
            const pixelSize = getPixelSizeFromProgress(progress);
            if (canvasRef.current && imgRef.current) {
                pixelateImage(canvasRef.current, imgRef.current, pixelSize);
            }
        });

        return unsubscribe;
    }, [loaded, scrollYProgress]);

    if (shouldReduce) {
        return (
            <div ref={containerRef} className={className}>
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>
        );
    }

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ imageRendering: 'pixelated' }}
            />
        </div>
    );
}

// ============================================================================
// BLUR FALLBACK (Better Performance)
// ============================================================================

export function BlurPixelateReveal({
    src,
    alt,
    className = "",
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const shouldReduce = prefersReducedMotion();

    if (shouldReduce) {
        return (
            <div ref={ref} className={className}>
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1 } : { filter: "blur(20px)", opacity: 0 }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </motion.div>
    );
}



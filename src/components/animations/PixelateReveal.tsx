"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import anime from "animejs";
import { pixelateImage, getPixelSizeFromProgress, prefersReducedMotion } from "@/lib/animation-utils";

// ============================================================================
// TYPES
// ============================================================================

export interface PixelateRevealProps {
    src: string;
    alt: string;
    className?: string;
    width?: number | string;
    height?: number | string;

    // Animation config
    maxPixelSize?: number;      // Starting pixel size (default: 50)
    duration?: number;           // Animation duration in ms (default: 1000)
    fallbackToBlur?: boolean;   // Use blur on low-end devices (default: true)

    // Scroll config
    scrollStart?: number;        // Scroll position to start (default: auto)
    scrollEnd?: number;          // Scroll position to end (default: auto)

    // Callbacks
    onComplete?: () => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Pixelate Reveal Animation
 * 
 * Progressively reveals image by reducing pixelation on scroll
 * Uses Canvas API for authentic pixelation effect
 * Falls back to blur on unsupported devices
 */
export function PixelateReveal({
    src,
    alt,
    className = "",
    width = "100%",
    height = "auto",
    maxPixelSize = 50,
    duration = 1000,
    fallbackToBlur = true,
    scrollStart,
    scrollEnd,
    onComplete,
}: PixelateRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [useCanvas, setUseCanvas] = useState(true);
    const shouldReduce = prefersReducedMotion();

    // Scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Transform progress to pixel size (50 to 1)
    const pixelSize = useTransform(
        scrollYProgress,
        [0, 1],
        [maxPixelSize, 1]
    );

    // Blur fallback value
    const blurAmount = useTransform(
        scrollYProgress,
        [0, 1],
        [20, 0]
    );

    // Load image
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            if (imageRef.current) {
                imageRef.current.src = img.src;
                setImageLoaded(true);
            }
        };
        img.onerror = () => {
            console.error('Failed to load image for pixelate effect');
            setUseCanvas(false);
        };
        img.src = src;
    }, [src]);

    // Canvas pixelation effect
    useEffect(() => {
        if (!useCanvas || !canvasRef.current || !imageRef.current || !imageLoaded) return;

        const canvas = canvasRef.current;
        const image = imageRef.current;

        // Set canvas size to match image
        canvas.width = image.naturalWidth || image.width;
        canvas.height = image.naturalHeight || image.height;

        // Subscribe to scroll progress
        const unsubscribe = pixelSize.on('change', (latest) => {
            const size = Math.max(1, Math.floor(latest));
            pixelateImage(canvas, image, size);

            if (size === 1 && onComplete) {
                onComplete();
            }
        });

        return unsubscribe;
    }, [pixelSize, useCanvas, imageLoaded, onComplete]);

    // Anime.js fallback for blur
    useEffect(() => {
        if (useCanvas || !fallbackToBlur || !imageRef.current) return;

        const animation = anime({
            targets: imageRef.current,
            filter: ['blur(20px)', 'blur(0px)'],
            duration,
            easing: 'easeOutQuad',
            autoplay: false,
        });

        const unsubscribe = scrollYProgress.on('change', (progress) => {
            animation.seek(animation.duration * progress);
        });

        return () => {
            unsubscribe();
            animation.pause();
        };
    }, [useCanvas, fallbackToBlur, duration, scrollYProgress]);

    // Reduced motion - show image immediately
    if (shouldReduce) {
        return (
            <div ref={containerRef} className={className} style={{ width, height }}>
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>
        );
    }

    return (
        <div ref={containerRef} className={`relative ${className}`} style={{ width, height }}>
            {/* Hidden image for canvas source */}
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="hidden"
            />

            {useCanvas ? (
                // Canvas pixelation
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'pixelated' }}
                />
            ) : (
                // Blur fallback
                <motion.img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    style={{ filter: blurAmount }}
                />
            )}
        </div>
    );
}

// ============================================================================
// CONVENIENCE WRAPPER
// ============================================================================

/**
 * Simple pixelate reveal with sensible defaults
 */
export function SimplePixelate({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1 } : { filter: "blur(10px)", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {children}
        </motion.div>
    );
}


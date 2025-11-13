"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MASK_VARIANTS, EASING_CURVES } from "@/lib/animation-config";
import { prefersReducedMotion } from "@/lib/animation-utils";

// ============================================================================
// TYPES
// ============================================================================

export interface MaskRevealAdvancedProps {
    children: React.ReactNode;
    className?: string;

    // Mask type
    direction?: 'up' | 'down' | 'left' | 'right' | 'center' | 'diagonal';
    shape?: 'rectangle' | 'circle' | 'ellipse' | 'custom';

    // Custom SVG path (if shape='custom')
    customPath?: string;

    // Timing
    duration?: number;
    delay?: number;
    easing?: keyof typeof EASING_CURVES;

    // Trigger
    once?: boolean;
    amount?: number;

    // Scrub (tie to scroll position)
    scrub?: boolean;

    // Callbacks
    onRevealStart?: () => void;
    onRevealComplete?: () => void;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * Advanced Mask Reveal
 * 
 * Enhanced version with circular, diagonal, and custom SVG mask reveals
 * Supports both viewport-triggered and scroll-scrubbed animations
 */
export function MaskRevealAdvanced({
    children,
    className = "",
    direction = 'up',
    shape = 'rectangle',
    customPath,
    duration = 0.8,
    delay = 0,
    easing = 'smooth',
    once = true,
    amount = 0.2,
    scrub = false,
    onRevealStart,
    onRevealComplete,
}: MaskRevealAdvancedProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });
    const shouldReduce = prefersReducedMotion();

    // Scroll progress (for scrub mode)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Get mask variant based on direction and shape
    const getMaskVariant = () => {
        if (shape === 'circle' || direction === 'center') {
            return MASK_VARIANTS.center;
        }

        if (shape === 'custom' && customPath) {
            return {
                initial: { clipPath: customPath.replace('1', '0') },
                animate: { clipPath: customPath },
            };
        }

        if (direction === 'diagonal') {
            return MASK_VARIANTS.diagonal;
        }

        // Rectangle mask with direction
        return MASK_VARIANTS[direction];
    };

    const variant = getMaskVariant();
    const easingCurve = EASING_CURVES[easing];

    // Reduced motion - no animation
    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    // Scrub mode - animation tied to scroll
    if (scrub) {
        const clipPath = useTransform(
            scrollYProgress,
            [0, 1],
            [variant.initial.clipPath as string, variant.animate.clipPath as string]
        );

        return (
            <motion.div
                ref={ref}
                className={className}
                style={{ clipPath }}
            >
                {children}
            </motion.div>
        );
    }

    // Standard viewport-triggered mode
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={variant.initial}
            animate={isInView ? variant.animate : variant.initial}
            transition={{
                duration,
                delay,
                ease: easingCurve,
            }}
            onAnimationStart={onRevealStart}
            onAnimationComplete={onRevealComplete}
        >
            {children}
        </motion.div>
    );
}

// ============================================================================
// CIRCULAR REVEAL
// ============================================================================

export function CircularReveal({
    children,
    className = "",
    duration = 1.0,
    delay = 0,
    centerX = 50,  // Percentage
    centerY = 50,  // Percentage
}: Omit<MaskRevealAdvancedProps, 'direction' | 'shape'> & {
    centerX?: number;
    centerY?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const shouldReduce = prefersReducedMotion();

    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ clipPath: `circle(0% at ${centerX}% ${centerY}%)` }}
            animate={isInView ? { clipPath: `circle(100% at ${centerX}% ${centerY}%)` } : { clipPath: `circle(0% at ${centerX}% ${centerY}%)` }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}

// ============================================================================
// DIAGONAL WIPE
// ============================================================================

export function DiagonalWipe({
    children,
    className = "",
    direction = 'top-left-to-bottom-right',
    duration = 1.0,
}: Omit<MaskRevealAdvancedProps, 'direction' | 'shape'> & {
    direction?: 'top-left-to-bottom-right' | 'top-right-to-bottom-left' | 'bottom-left-to-top-right' | 'bottom-right-to-top-left';
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const shouldReduce = prefersReducedMotion();

    const diagonalPaths = {
        'top-left-to-bottom-right': {
            initial: 'polygon(0 0, 0 0, 0 0)',
            animate: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        'top-right-to-bottom-left': {
            initial: 'polygon(100% 0, 100% 0, 100% 0)',
            animate: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
        },
        'bottom-left-to-top-right': {
            initial: 'polygon(0 100%, 0 100%, 0 100%)',
            animate: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
        },
        'bottom-right-to-top-left': {
            initial: 'polygon(100% 100%, 100% 100%, 100% 100%)',
            animate: 'polygon(100% 100%, 0 100%, 0 0, 100% 0)',
        },
    };

    const path = diagonalPaths[direction];

    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ clipPath: path.initial }}
            animate={isInView ? { clipPath: path.animate } : { clipPath: path.initial }}
            transition={{
                duration,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}

// ============================================================================
// IRIS REVEAL (Circular expansion from point)
// ============================================================================

export function IrisReveal({
    children,
    className = "",
    startX = 50,
    startY = 50,
    duration = 1.2,
}: Omit<MaskRevealAdvancedProps, 'direction'> & {
    startX?: number;
    startY?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const shouldReduce = prefersReducedMotion();

    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ clipPath: `circle(0% at ${startX}% ${startY}%)` }}
            animate={isInView ? { clipPath: `circle(150% at ${startX}% ${startY}%)` } : { clipPath: `circle(0% at ${startX}% ${startY}%)` }}
            transition={{
                duration,
                ease: [0.68, -0.55, 0.265, 1.55], // Bounce
            }}
        >
            {children}
        </motion.div>
    );
}

// ============================================================================
// VENETIAN BLINDS EFFECT
// ============================================================================

export function VenetianBlinds({
    children,
    className = "",
    strips = 10,
    duration = 1.0,
    stagger = 0.05,
}: Omit<MaskRevealAdvancedProps, 'direction'> & {
    strips?: number;
    stagger?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const shouldReduce = prefersReducedMotion();

    // Generate polygon for blind strips
    const generateBlindPath = (progress: number) => {
        const stripHeight = 100 / strips;
        const points: string[] = [];

        for (let i = 0; i < strips; i++) {
            const topY = i * stripHeight;
            const bottomY = (i + 1) * stripHeight;
            const delay = i * stagger;
            const stripProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
            const width = stripProgress * 100;

            points.push(`0% ${topY}%, ${width}% ${topY}%, ${width}% ${bottomY}%, 0% ${bottomY}%`);
        }

        return `polygon(${points.join(', ')})`;
    };

    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ clipPath: generateBlindPath(0) }}
            animate={isInView ? { clipPath: generateBlindPath(1) } : { clipPath: generateBlindPath(0) }}
            transition={{
                duration,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}





"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    ANIMATION_PRESETS,
    VIEWPORT_TRIGGERS,
    EASING_CURVES,
    FADE_VARIANTS,
    SLIDE_VARIANTS,
    MASK_VARIANTS,
    SCALE_VARIANTS,
    ROTATE_VARIANTS,
    BLUR_VARIANTS,
    type AnimationType,
    type PresetName,
    type EasingName,
    type TriggerName,
} from "@/lib/animation-config";
import { prefersReducedMotion, getResponsiveDistance, getResponsiveDuration } from "@/lib/animation-utils";

// ============================================================================
// TYPES
// ============================================================================

export interface ScrollAnimationProps {
    children: React.ReactNode;
    type: AnimationType;
    className?: string;

    // Timing
    duration?: number;
    delay?: number;

    // Preset or custom
    preset?: PresetName;
    easing?: EasingName | number[];

    // Viewport trigger
    trigger?: TriggerName;
    once?: boolean;

    // Custom overrides
    distance?: number;

    // Stagger (for multiple children)
    stagger?: number;

    // Callbacks
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * Advanced Scroll Animations
 * 
 * Unified component supporting 20+ animation types with automatic
 * viewport detection, responsive behavior, and performance optimization
 */
export function ScrollAnimation({
    children,
    type,
    className = "",
    duration,
    delay = 0,
    preset = "standard",
    easing = "smooth",
    trigger = "standard",
    once = true,
    distance,
    stagger,
    onAnimationStart,
    onAnimationComplete,
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const shouldReduce = prefersReducedMotion();

    // Get preset configuration
    const presetConfig = ANIMATION_PRESETS[preset];

    // Get viewport trigger configuration
    const viewportConfig = VIEWPORT_TRIGGERS[trigger];

    // Get easing curve
    const easingCurve = typeof easing === 'string' ? EASING_CURVES[easing] : easing;

    // Calculate final values (responsive)
    const finalDuration = shouldReduce ? 0.01 : getResponsiveDuration(duration || presetConfig.duration);
    const finalDistance = shouldReduce ? 0 : getResponsiveDistance(distance || presetConfig.distance);

    // Viewport detection
    const isInView = useInView(ref, {
        once,
        ...viewportConfig,
    });

    // Get animation variant based on type
    const getAnimationVariant = () => {
        // Fade animations
        if (type.startsWith('fade-')) {
            const direction = type.split('-')[1] as keyof typeof FADE_VARIANTS;
            return {
                ...FADE_VARIANTS[direction],
                initial: {
                    ...FADE_VARIANTS[direction].initial,
                    y: direction === 'up' ? finalDistance : direction === 'down' ? -finalDistance : 0,
                    x: direction === 'left' ? finalDistance : direction === 'right' ? -finalDistance : 0,
                },
            };
        }

        // Slide animations
        if (type.startsWith('slide-')) {
            const direction = type.split('-')[1] as keyof typeof SLIDE_VARIANTS;
            return {
                ...SLIDE_VARIANTS[direction],
                initial: {
                    ...SLIDE_VARIANTS[direction].initial,
                    y: direction === 'up' ? finalDistance * 2 : direction === 'down' ? -finalDistance * 2 : 0,
                    x: direction === 'left' ? finalDistance * 2 : direction === 'right' ? -finalDistance * 2 : 0,
                },
            };
        }

        // Mask reveal animations
        if (type.startsWith('mask-reveal-')) {
            const direction = type.split('-')[2] as keyof typeof MASK_VARIANTS;
            return MASK_VARIANTS[direction] || MASK_VARIANTS.up;
        }

        // Scale animations
        if (type.startsWith('scale-')) {
            const direction = type.split('-')[1] as keyof typeof SCALE_VARIANTS;
            return SCALE_VARIANTS[direction];
        }

        // Rotate animations
        if (type.startsWith('rotate-')) {
            const direction = type.split('-')[1] as keyof typeof ROTATE_VARIANTS;
            return ROTATE_VARIANTS[direction];
        }

        // Blur animation
        if (type === 'blur-in') {
            return BLUR_VARIANTS.in;
        }

        // Default fallback
        return FADE_VARIANTS.up;
    };

    const variant = getAnimationVariant();

    // Handle reduced motion
    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    // Build transition config
    const transitionConfig = {
        duration: finalDuration,
        delay,
        ease: easingCurve as any,
    };

    // If stagger is needed, use variants mode
    if (stagger) {
        return (
            <motion.div
                ref={ref}
                className={className}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: variant.initial,
                    visible: {
                        ...variant.animate,
                        transition: {
                            duration: finalDuration,
                            delay,
                            ease: easingCurve as any,
                            staggerChildren: stagger,
                        },
                    },
                }}
                onAnimationStart={onAnimationStart}
                onAnimationComplete={onAnimationComplete}
                {...('style' in variant && { style: variant.style })}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={variant.initial}
            animate={isInView ? variant.animate : variant.initial}
            transition={transitionConfig}
            onAnimationStart={onAnimationStart}
            onAnimationComplete={onAnimationComplete}
            {...('style' in variant && { style: variant.style })}
        >
            {children}
        </motion.div>
    );
}

// ============================================================================
// CONVENIENCE EXPORTS (Pre-configured Components)
// ============================================================================

export const FadeUp = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="fade-up" />
);

export const FadeDown = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="fade-down" />
);

export const FadeLeft = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="fade-left" />
);

export const FadeRight = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="fade-right" />
);

export const SlideUp = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="slide-up" />
);

export const SlideDown = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="slide-down" />
);

export const SlideLeft = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="slide-left" />
);

export const SlideRight = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="slide-right" />
);

export const MaskRevealUp = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="mask-reveal-up" />
);

export const MaskRevealDown = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="mask-reveal-down" />
);

export const MaskRevealLeft = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="mask-reveal-left" />
);

export const MaskRevealRight = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="mask-reveal-right" />
);

export const MaskRevealCenter = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="mask-reveal-center" />
);

export const ScaleIn = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="scale-in" />
);

export const RotateIn = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="rotate-in" />
);

export const BlurIn = (props: Omit<ScrollAnimationProps, 'type'>) => (
    <ScrollAnimation {...props} type="blur-in" />
);


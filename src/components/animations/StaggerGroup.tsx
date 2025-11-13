"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, Children, ReactElement, cloneElement } from "react";
import { STAGGER_PRESETS, EASING_CURVES, type AnimationType } from "@/lib/animation-config";
import { prefersReducedMotion } from "@/lib/animation-utils";

// ============================================================================
// TYPES
// ============================================================================

export interface StaggerGroupProps {
    children: React.ReactNode;
    className?: string;

    // Stagger config
    stagger?: number | keyof typeof STAGGER_PRESETS;
    delayChildren?: number;

    // Animation type for children
    animation?: AnimationType | 'custom';

    // Viewport trigger
    once?: boolean;
    amount?: number;

    // Direction
    from?: 'start' | 'end' | 'center';

    // Custom variants (if animation='custom')
    itemVariants?: Variants;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Stagger Group
 * 
 * Automatically staggers animations for children elements
 * Supports all animation types from AdvancedScrollAnimations
 */
export function StaggerGroup({
    children,
    className = "",
    stagger = 0.1,
    delayChildren = 0,
    animation = 'fade-up',
    once = true,
    amount = 0.2,
    from = 'start',
    itemVariants,
}: StaggerGroupProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });
    const shouldReduce = prefersReducedMotion();

    // Get stagger value
    const staggerValue = typeof stagger === 'number'
        ? stagger
        : STAGGER_PRESETS[stagger];

    // Create variants based on animation type
    const getItemVariants = (): Variants => {
        if (itemVariants) return itemVariants;

        // Default variants based on animation type
        const baseVariants: Record<string, Variants> = {
            'fade-up': {
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            },
            'fade-down': {
                hidden: { opacity: 0, y: -30 },
                visible: { opacity: 1, y: 0 },
            },
            'fade-left': {
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
            },
            'fade-right': {
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
            },
            'scale-in': {
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            },
            'slide-up': {
                hidden: { y: 100 },
                visible: { y: 0 },
            },
        };

        return baseVariants[animation] || baseVariants['fade-up'];
    };

    const variants = getItemVariants();

    // Container variants
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerValue,
                delayChildren,
                staggerDirection: from === 'end' ? -1 : 1,
            },
        },
    };

    // Reduced motion - no animation
    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {Children.map(children, (child) => {
                if (!child) return null;

                return (
                    <motion.div variants={variants}>
                        {child}
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

// ============================================================================
// GRID STAGGER (Optimized for Grids)
// ============================================================================

export function GridStagger({
    children,
    className = "",
    columns = 3,
    stagger = 0.05,
    animation = 'fade-up',
}: StaggerGroupProps & { columns?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const shouldReduce = prefersReducedMotion();

    const childArray = Children.toArray(children);

    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <div ref={ref} className={className}>
            {childArray.map((child, index) => {
                const row = Math.floor(index / columns);
                const col = index % columns;
                const delay = (row + col) * (typeof stagger === 'number' ? stagger : STAGGER_PRESETS[stagger]);

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{
                            duration: 0.5,
                            delay,
                            ease: EASING_CURVES.smooth,
                        }}
                    >
                        {child}
                    </motion.div>
                );
            })}
        </div>
    );
}

// ============================================================================
// SEQUENTIAL REVEAL (One at a time)
// ============================================================================

export function SequentialReveal({
    children,
    className = "",
    itemDuration = 0.6,
    gap = 0.2,
}: Pick<StaggerGroupProps, 'children' | 'className'> & {
    itemDuration?: number;
    gap?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const childArray = Children.toArray(children);
    const shouldReduce = prefersReducedMotion();

    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <div ref={ref} className={className}>
            {childArray.map((child, index) => {
                const delay = index * (itemDuration + gap);

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            duration: itemDuration,
                            delay,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        {child}
                    </motion.div>
                );
            })}
        </div>
    );
}

// ============================================================================
// RADIAL STAGGER (From Center)
// ============================================================================

export function RadialStagger({
    children,
    className = "",
    stagger = 0.05,
    grid = { columns: 3, rows: 3 },
}: StaggerGroupProps & { grid?: { columns: number; rows: number } }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const childArray = Children.toArray(children);
    const shouldReduce = prefersReducedMotion();

    // Calculate distance from center for each grid position
    const getDistanceFromCenter = (index: number) => {
        const col = index % grid.columns;
        const row = Math.floor(index / grid.columns);
        const centerCol = (grid.columns - 1) / 2;
        const centerRow = (grid.rows - 1) / 2;

        const dx = col - centerCol;
        const dy = row - centerRow;
        return Math.sqrt(dx * dx + dy * dy);
    };

    if (shouldReduce) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <div ref={ref} className={className}>
            {childArray.map((child, index) => {
                const distance = getDistanceFromCenter(index);
                const delay = distance * (typeof stagger === 'number' ? stagger : STAGGER_PRESETS[stagger]);

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{
                            duration: 0.5,
                            delay,
                            ease: [0.68, -0.55, 0.265, 1.55], // Bounce easing
                        }}
                    >
                        {child}
                    </motion.div>
                );
            })}
        </div>
    );
}





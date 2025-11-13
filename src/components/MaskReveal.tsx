"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MaskRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

/**
 * MaskReveal Component
 * 
 * Creates a mask reveal animation on scroll with customizable direction
 * Design System Compliance: Module 14 (Performance), Module 07 (Motion Design)
 */
export function MaskReveal({
    children,
    className = "",
    delay = 0,
    direction = "up"
}: MaskRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const directionVariants = {
        up: {
            initial: { clipPath: "inset(100% 0% 0% 0%)", y: 50 },
            animate: { clipPath: "inset(0% 0% 0% 0%)", y: 0 }
        },
        down: {
            initial: { clipPath: "inset(0% 0% 100% 0%)", y: -50 },
            animate: { clipPath: "inset(0% 0% 0% 0%)", y: 0 }
        },
        left: {
            initial: { clipPath: "inset(0% 0% 0% 100%)", x: 50 },
            animate: { clipPath: "inset(0% 0% 0% 0%)", x: 0 }
        },
        right: {
            initial: { clipPath: "inset(0% 100% 0% 0%)", x: -50 },
            animate: { clipPath: "inset(0% 0% 0% 0%)", x: 0 }
        }
    };

    const variant = directionVariants[direction];

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={variant.initial}
            animate={isInView ? variant.animate : variant.initial}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94], // Ease-standard from design system
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * FadeInScale Component
 * 
 * Combines fade-in with subtle scale effect
 */
export function FadeInScale({
    children,
    className = "",
    delay = 0
}: Omit<MaskRevealProps, "direction">) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * StaggeredReveal Component
 * 
 * Reveals children with staggered timing
 */
export function StaggeredReveal({
    children,
    className = ""
}: Omit<MaskRevealProps, "delay" | "direction">) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}


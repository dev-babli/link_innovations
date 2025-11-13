"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { counterAnimation } from "@/utils/animations";

interface StatisticCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    gradient?: "primary" | "secondary" | "accent" | "warm" | "cool";
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    label?: string;
    description?: string;
}

/**
 * StatisticCounter Component
 * 
 * Animated number counters with gradient text effects
 * Features:
 * - Count-up animations on scroll
 * - Gradient text effects
 * - Modern metric displays
 * - Smooth easing animations
 */
export default function StatisticCounter({
    value,
    suffix = "",
    prefix = "",
    duration = 2,
    gradient = "primary",
    size = "lg",
    className = "",
    label,
    description,
}: StatisticCounterProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const sizeClasses = {
        sm: "text-2xl",
        md: "text-3xl",
        lg: "text-4xl",
        xl: "text-5xl",
    };

    const gradientClasses = {
        primary: "bg-gradient-to-r from-[#00D1BF] to-[#00a89a] bg-clip-text text-transparent",
        secondary: "bg-gradient-to-r from-[#FF4FD8] to-[#8B5CF6] bg-clip-text text-transparent",
        accent: "bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent",
        warm: "bg-gradient-to-r from-[#fa709a] to-[#fee140] bg-clip-text text-transparent",
        cool: "bg-gradient-to-r from-[#30cfd0] to-[#330867] bg-clip-text text-transparent",
    };

    const currentGradient = gradientClasses[gradient];

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * value);

            setDisplayValue(currentValue);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isInView, value, duration]);

    return (
        <motion.div
            ref={ref}
            variants={counterAnimation}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className={`
        text-center group
        ${className}
      `}
        >
            {/* Counter */}
            <div className="relative">
                <motion.div
                    className={`
            font-bold ${sizeClasses[size]}
            ${currentGradient}
            font-['Orbitron']
            tracking-tight
          `}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.2 }
                    }}
                >
                    {prefix}{displayValue.toLocaleString()}{suffix}
                </motion.div>

                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-100"
                    style={{
                        background: `linear-gradient(135deg, ${gradient === 'primary' ? '#00D1BF' :
                                gradient === 'secondary' ? '#FF4FD8' :
                                    gradient === 'accent' ? '#06B6D4' :
                                        gradient === 'warm' ? '#fa709a' : '#30cfd0'
                            }, transparent)`,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{
                        scale: 1.1,
                        opacity: 0.3,
                        transition: { duration: 0.8, delay: 0.4 }
                    }}
                />
            </div>

            {/* Label */}
            {label && (
                <motion.h3
                    className="text-lg font-semibold text-[#e6f0f6] mt-2 group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3, delay: 0.6 }
                    }}
                >
                    {label}
                </motion.h3>
            )}

            {/* Description */}
            {description && (
                <motion.p
                    className="text-[#a8b3be] text-sm mt-1 group-hover:text-[#e6f0f6] transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3, delay: 0.8 }
                    }}
                >
                    {description}
                </motion.p>
            )}

            {/* Animated underline */}
            <motion.div
                className="h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{
                    scaleX: 1,
                    transition: { duration: 0.5, delay: 1 }
                }}
                style={{ transformOrigin: "center" }}
            />
        </motion.div>
    );
}

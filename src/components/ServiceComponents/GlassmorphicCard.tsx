"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassmorphicCardProps {
    children: React.ReactNode;
    variant?: "light" | "dark" | "colorful";
    size?: "sm" | "md" | "lg";
    gradient?: "primary" | "secondary" | "accent" | "warm" | "cool";
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

/**
 * GlassmorphicCard Component
 * 
 * Inspired by reference images 1 & 3 - Clean, minimal cards with glassmorphism effects
 * Features:
 * - Backdrop blur and subtle shadows
 * - Hover animations with scale and glow effects
 * - Multiple variants and gradient options
 * - WCAG 2.1 AA compliant
 */
export default function GlassmorphicCard({
    children,
    variant = "dark",
    size = "md",
    gradient = "primary",
    className = "",
    onClick,
    disabled = false,
}: GlassmorphicCardProps) {

    const sizeClasses = {
        sm: "p-4 rounded-xl",
        md: "p-6 rounded-2xl",
        lg: "p-8 rounded-3xl",
    };

    const variantClasses = {
        light: {
            background: "bg-white/10",
            border: "border-white/20",
            shadow: "shadow-glass-light",
        },
        dark: {
            background: "bg-black/10",
            border: "border-white/10",
            shadow: "shadow-glass-dark",
        },
        colorful: {
            background: "bg-gradient-to-br from-[#00D1BF]/10 to-[#FF4FD8]/10",
            border: "border-[#00D1BF]/20",
            shadow: "shadow-glass-colorful",
        },
    };

    const gradientOverlay = {
        primary: "from-[#667eea]/5 to-[#764ba2]/5",
        secondary: "from-[#f093fb]/5 to-[#f5576c]/5",
        accent: "from-[#4facfe]/5 to-[#00f2fe]/5",
        warm: "from-[#fa709a]/5 to-[#fee140]/5",
        cool: "from-[#30cfd0]/5 to-[#330867]/5",
    };

    const currentVariant = variantClasses[variant];
    const currentGradient = gradientOverlay[gradient];

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className={`
        relative overflow-hidden
        backdrop-blur-xl
        ${currentVariant.background}
        ${currentVariant.border}
        border
        ${currentVariant.shadow}
        ${sizeClasses[size]}
        ${onClick && !disabled ? "cursor-pointer" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        transition-all duration-300
        ${className}
      `}
            onClick={disabled ? undefined : onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick && !disabled ? 0 : undefined}
            aria-disabled={disabled}
            onKeyDown={(e) => {
                if (onClick && !disabled && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {/* Gradient overlay */}
            <div
                className={`
          absolute inset-0 
          bg-gradient-to-br ${currentGradient}
          opacity-0 hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        `}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Animated border */}
            <motion.div
                className="absolute inset-0 rounded-inherit"
                style={{
                    background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Floating particles on hover */}
            <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-[#00D1BF] rounded-full opacity-0"
                whileHover={{
                    opacity: [0, 1, 0],
                    scale: [1, 1.5, 1],
                    transition: { duration: 1, repeat: Infinity }
                }}
            />
            <motion.div
                className="absolute bottom-4 left-4 w-1 h-1 bg-[#FF4FD8] rounded-full opacity-0"
                whileHover={{
                    opacity: [0, 1, 0],
                    scale: [1, 2, 1],
                    transition: { duration: 1.5, repeat: Infinity, delay: 0.5 }
                }}
            />
        </motion.div>
    );
}

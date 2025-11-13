"use client";

import React from "react";
import { motion } from "framer-motion";
import { iconBounce, staggerItem } from "@/utils/animations";

interface IconFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    variant?: "default" | "centered" | "minimal";
    size?: "sm" | "md" | "lg";
    gradient?: "primary" | "secondary" | "accent";
    className?: string;
    onClick?: () => void;
}

/**
 * IconFeatureCard Component
 * 
 * Inspired by reference image 7 - Clean icon display with animated circles
 * Features:
 * - Clean icon display with animated circles
 * - Minimal text with perfect spacing
 * - Hover effects with floating particles
 * - Multiple variants for different use cases
 */
export default function IconFeatureCard({
    icon,
    title,
    description,
    variant = "default",
    size = "md",
    gradient = "primary",
    className = "",
    onClick,
}: IconFeatureCardProps) {

    const sizeClasses = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    const iconSizes = {
        sm: "w-12 h-12",
        md: "w-16 h-16",
        lg: "w-20 h-20",
    };

    const gradientClasses = {
        primary: "from-[#00D1BF] to-[#00a89a]",
        secondary: "from-[#FF4FD8] to-[#8B5CF6]",
        accent: "from-[#06B6D4] to-[#3B82F6]",
    };

    const currentGradient = gradientClasses[gradient];

    const renderDefault = () => (
        <motion.div
            variants={staggerItem}
            whileHover="hover"
            className={`
        relative group
        ${sizeClasses[size]}
        ${onClick ? "cursor-pointer" : ""}
        transition-all duration-300
        ${className}
      `}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {/* Icon Container */}
            <div className="relative mb-4">
                <motion.div
                    variants={iconBounce}
                    className={`
            relative ${iconSizes[size]}
            bg-gradient-to-br ${currentGradient}
            rounded-2xl
            flex items-center justify-center
            shadow-lg
            group-hover:shadow-xl
            transition-shadow duration-300
          `}
                >
                    <div className="text-white text-2xl">
                        {icon}
                    </div>

                    {/* Animated border */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.1,
                            transition: { duration: 0.3 }
                        }}
                    />
                </motion.div>

                {/* Floating particles */}
                <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-[#00D1BF] rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 1, 0],
                        transition: { duration: 2, repeat: Infinity }
                    }}
                />
                <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#FF4FD8] rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 1, 0],
                        transition: { duration: 2.5, repeat: Infinity, delay: 0.5 }
                    }}
                />
            </div>

            {/* Content */}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#e6f0f6] group-hover:text-white transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-[#a8b3be] text-sm leading-relaxed group-hover:text-[#e6f0f6] transition-colors duration-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );

    const renderCentered = () => (
        <motion.div
            variants={staggerItem}
            className={`
        text-center group
        ${sizeClasses[size]}
        ${onClick ? "cursor-pointer" : ""}
        transition-all duration-300
        ${className}
      `}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            {/* Icon */}
            <motion.div
                variants={iconBounce}
                className={`
          inline-flex items-center justify-center
          ${iconSizes[size]}
          bg-gradient-to-br ${currentGradient}
          rounded-full
          mb-4
          shadow-lg
          group-hover:shadow-xl
          transition-shadow duration-300
        `}
            >
                <div className="text-white text-2xl">
                    {icon}
                </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#e6f0f6] group-hover:text-white transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-[#a8b3be] text-sm leading-relaxed group-hover:text-[#e6f0f6] transition-colors duration-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );

    const renderMinimal = () => (
        <motion.div
            variants={staggerItem}
            className={`
        flex items-center space-x-4 group
        ${sizeClasses[size]}
        ${onClick ? "cursor-pointer" : ""}
        transition-all duration-300
        ${className}
      `}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            {/* Icon */}
            <motion.div
                variants={iconBounce}
                className={`
          flex-shrink-0
          w-12 h-12
          bg-gradient-to-br ${currentGradient}
          rounded-xl
          flex items-center justify-center
          shadow-md
          group-hover:shadow-lg
          transition-shadow duration-300
        `}
            >
                <div className="text-white text-lg">
                    {icon}
                </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-[#e6f0f6] group-hover:text-white transition-colors duration-300 truncate">
                    {title}
                </h3>
                <p className="text-[#a8b3be] text-sm leading-relaxed group-hover:text-[#e6f0f6] transition-colors duration-300 line-clamp-2">
                    {description}
                </p>
            </div>
        </motion.div>
    );

    switch (variant) {
        case "centered":
            return renderCentered();
        case "minimal":
            return renderMinimal();
        default:
            return renderDefault();
    }
}

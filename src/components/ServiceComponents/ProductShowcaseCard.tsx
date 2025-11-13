"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cardHover } from "@/utils/animations";

interface ProductShowcaseCardProps {
    image: string;
    title: string;
    description?: string;
    price?: string;
    badge?: string;
    gradient?: "primary" | "secondary" | "accent" | "warm" | "cool";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
}

/**
 * ProductShowcaseCard Component
 * 
 * Inspired by reference image 2 - Product cards with gradient backgrounds and modern typography
 * Features:
 * - Large image display with gradient overlays
 * - Price/title overlay with modern typography
 * - Smooth hover transitions with image zoom
 * - Perfect for case studies or portfolio items
 */
export default function ProductShowcaseCard({
    image,
    title,
    description,
    price,
    badge,
    gradient = "primary",
    size = "md",
    className = "",
    onClick,
}: ProductShowcaseCardProps) {

    const sizeClasses = {
        sm: "h-64 rounded-2xl",
        md: "h-80 rounded-3xl",
        lg: "h-96 rounded-3xl",
    };

    const gradientOverlays = {
        primary: "from-[#667eea]/90 via-[#667eea]/70 to-[#764ba2]/90",
        secondary: "from-[#f093fb]/90 via-[#f093fb]/70 to-[#f5576c]/90",
        accent: "from-[#4facfe]/90 via-[#4facfe]/70 to-[#00f2fe]/90",
        warm: "from-[#fa709a]/90 via-[#fa709a]/70 to-[#fee140]/90",
        cool: "from-[#30cfd0]/90 via-[#30cfd0]/70 to-[#330867]/90",
    };

    const currentGradient = gradientOverlays[gradient];

    return (
        <motion.div
            variants={cardHover}
            whileHover="hover"
            className={`
        relative group overflow-hidden
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
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentGradient}`} />

                {/* Additional overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Badge */}
            {badge && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute top-4 left-4 z-20"
                >
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">
                        <span className="text-white text-sm font-medium">{badge}</span>
                    </div>
                </motion.div>
            )}

            {/* Price */}
            {price && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="absolute top-4 right-4 z-20"
                >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <span className="text-gray-900 font-bold text-lg">{price}</span>
                    </div>
                </motion.div>
            )}

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                >
                    {/* Title */}
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-2 leading-tight">
                        {title}
                    </h3>

                    {/* Description */}
                    {description && (
                        <p className="text-white/90 text-sm md:text-base leading-relaxed">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Hover effect overlay */}
            <motion.div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            />

            {/* Floating elements */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 blur-xl"
                initial={{ scale: 0 }}
                whileHover={{
                    scale: 1,
                    transition: { duration: 0.3 }
                }}
            />

            {/* Bottom accent line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100"
                initial={{ scaleX: 0 }}
                whileHover={{
                    scaleX: 1,
                    transition: { duration: 0.5 }
                }}
                style={{ transformOrigin: "center" }}
            />
        </motion.div>
    );
}

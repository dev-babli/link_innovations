"use client";

import React from "react";
import { motion } from "motion/react";

interface LogoGridProps {
    title: string;
    subtitle?: string;
    logos: {
        name: string;
        imageUrl?: string;
        icon?: React.ReactNode;
    }[];
    columns?: 3 | 4 | 5 | 6;
    className?: string;
}

/**
 * LogoGrid Component
 * For partner/client logos
 * Matches mockup layouts
 */
export default function LogoGrid({
    title,
    subtitle,
    logos,
    columns = 6,
    className = "",
}: LogoGridProps) {
    const gridCols = {
        3: "grid-cols-3",
        4: "grid-cols-2 md:grid-cols-4",
        5: "grid-cols-3 md:grid-cols-5",
        6: "grid-cols-3 md:grid-cols-6",
    };

    return (
        <section className={`py-16 lg:py-24 ${className}`}>
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#FAFAFA] mb-4 font-['Orbitron']">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-[#A1A1AA] font-['Inter']">{subtitle}</p>
                    )}
                </motion.div>

                {/* Logo Grid */}
                <div className={`grid ${gridCols[columns]} gap-8`}>
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="flex items-center justify-center p-6 rounded-lg bg-[#27272A]/50 hover:bg-[#27272A] transition-all duration-300"
                        >
                            {logo.imageUrl ? (
                                <img
                                    src={logo.imageUrl}
                                    alt={logo.name}
                                    className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                />
                            ) : logo.icon ? (
                                <div className="text-[#FAFAFA]/60 hover:text-[#FAFAFA] transition-colors duration-300">
                                    {logo.icon}
                                </div>
                            ) : (
                                <span className="text-sm font-semibold text-[#FAFAFA]/60 font-['Inter']">
                                    {logo.name}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}





"use client";

import React from "react";
import { motion } from "motion/react";

interface IconGridItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface IconGridProps {
    title: string;
    subtitle?: string;
    items: IconGridItem[];
    columns?: 2 | 3 | 4;
    className?: string;
}

/**
 * IconGrid Component
 * Matches the icon grid layout from s_3 (5).svg mockup
 */
export default function IconGrid({
    title,
    subtitle,
    items,
    columns = 4,
    className = "",
}: IconGridProps) {
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4",
    };

  return (
    <section className={`py-16 lg:py-24 bg-[#0a0a0f] ${className}`}>
      <div className="container mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-4 font-['Orbitron']">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg text-[#A1A1AA] max-w-3xl mx-auto font-['Inter']">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Grid */}
                <div className={`grid ${gridCols[columns]} gap-8`}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7877c6]/20 to-[#a78bfa]/20 mb-6">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[#FAFAFA] mb-3 font-['Exo_2']">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#A1A1AA] leading-relaxed font-['Inter']">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


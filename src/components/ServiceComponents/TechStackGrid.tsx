"use client";

import React from "react";
import { motion } from "motion/react";

interface TechCategory {
    category: string;
    technologies: string[];
}

interface TechStackGridProps {
    stack: TechCategory[];
    title?: string;
    subtitle?: string;
    className?: string;
}

/**
 * TechStackGrid Component
 * Following Design System:
 * - QR-02: Brand colors
 * - QR-03: Typography hierarchy
 * - QR-05: Accessibility standards
 * - QR-08: 32px card padding
 */
export default function TechStackGrid({
    stack,
    title = "Architecture & Tech Stack",
    subtitle,
    className = "",
}: TechStackGridProps) {
    return (
        <section
            className={`py-24 bg-[#27272A] ${className}`}
            aria-labelledby="tech-stack-heading"
        >
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        id="tech-stack-heading"
                        className="text-5xl font-bold text-[#FAFAFA] mb-4 font-['Orbitron']"
                    >
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg text-[#A1A1AA] max-w-3xl mx-auto mt-4 leading-relaxed font-['Inter']">
                            {subtitle}
                        </p>
                    )}
                    <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto mt-6" aria-hidden="true" />
                </motion.div>

                {/* Tech Stack Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {stack.map((techCategory, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Card - QR-08: 32px padding */}
                            <div className="h-full p-8 rounded-2xl bg-[#18181B]/80 backdrop-blur-sm border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                {/* Category Title - QR-03: 20px with Exo 2 */}
                                <h3 className="text-xl font-bold text-[#3B82F6] mb-4 uppercase tracking-wider font-['Exo_2']">
                                    {techCategory.category}
                                </h3>

                                {/* Technologies List - QR-08: 8px spacing */}
                                <ul className="space-y-2" role="list">
                                    {techCategory.technologies.map((tech, techIndex) => (
                                        <li
                                            key={techIndex}
                                            className="flex items-center text-[#FAFAFA] text-base font-['Inter']"
                                        >
                                            <span
                                                className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mr-3 flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                            <span className="leading-relaxed">{tech}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Decorative corner accent - QR-08: 16px spacing */}
                                <div
                                    className="mt-6 pt-4 border-t border-[#3B82F6]/10 group-hover:border-[#3B82F6]/30 transition-colors duration-300"
                                    aria-hidden="true"
                                >
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#3B82F6] to-transparent" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#71717A] max-w-2xl mx-auto leading-relaxed font-['Inter']">
                        We select technologies based on your specific requirements, team expertise, and long-term maintainability goals.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}





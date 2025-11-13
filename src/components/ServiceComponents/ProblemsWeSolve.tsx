"use client";

import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface Problem {
    text: string;
}

interface ProblemsWeSolveProps {
    problems: Problem[];
    title?: string;
    className?: string;
}

/**
 * ProblemsWeSolve Component
 * Following Design System QRs:
 * - QR-02: Colors (#3B82F6, #8B5CF6, #06B6D4)
 * - QR-03: Typography (Inter body, Orbitron headlines)
 * - QR-05: WCAG 2.1 AA accessibility
 * - QR-08: 8px spacing scale
 */
export default function ProblemsWeSolve({
    problems,
    title = "Problems We Solve",
    className = "",
}: ProblemsWeSolveProps) {
    return (
        <section
            className={`py-24 bg-[#18181B] ${className}`}
            aria-labelledby="problems-heading"
        >
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header - Following QR-03 Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        id="problems-heading"
                        className="text-5xl font-bold text-[#FAFAFA] mb-6 font-['Orbitron']"
                    >
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto" aria-hidden="true" />
                </motion.div>

                {/* Problems Grid - Following QR-08 Spacing */}
                <div className="max-w-4xl mx-auto">
                    <ul className="space-y-8" role="list">
                        {problems.map((problem, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex items-start gap-4 p-8 rounded-xl bg-[#27272A] border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300 backdrop-blur-sm">
                                    {/* Icon - 44x44px touch target (QR-05) */}
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                                        aria-hidden="true"
                                    >
                                        <AlertCircle className="w-6 h-6 text-[#3B82F6]" />
                                    </div>

                                    {/* Text - QR-03 Typography (16-18px body) */}
                                    <div className="flex-1 pt-1">
                                        <p className="text-lg text-[#FAFAFA] leading-relaxed font-['Inter']">
                                            {problem.text}
                                        </p>
                                    </div>

                                    {/* Solution indicator */}
                                    <div
                                        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        aria-hidden="true"
                                    >
                                        <CheckCircle className="w-6 h-6 text-[#10B981]" />
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Bottom accent */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 max-w-2xl mx-auto"
                >
                    <div className="h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" aria-hidden="true" />
                </motion.div>
            </div>
        </section>
    );
}





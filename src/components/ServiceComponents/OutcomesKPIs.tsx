"use client";

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Target, Zap, Award } from "lucide-react";

interface Outcome {
    metric: string;
    value: string;
    description?: string;
}

interface OutcomesKPIsProps {
    outcomes: Outcome[];
    title?: string;
    subtitle?: string;
    className?: string;
}

const icons = [TrendingUp, Target, Zap, Award];

/**
 * OutcomesKPIs Component
 * Following Design System:
 * - QR-02: Brand colors (#3B82F6, #10B981)
 * - QR-03: Orbitron headlines, Inter body
 * - QR-05: WCAG 2.1 AA (4.5:1 contrast)
 * - QR-08: 32px card padding
 */
export default function OutcomesKPIs({
    outcomes,
    title = "Outcomes & KPIs",
    subtitle,
    className = "",
}: OutcomesKPIsProps) {
    return (
        <section
            className={`py-24 bg-gradient-to-b from-[#27272A] to-[#18181B] ${className}`}
            aria-labelledby="outcomes-heading"
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
                        id="outcomes-heading"
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

                {/* Outcomes Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {outcomes.map((outcome, index) => {
                        const Icon = icons[index % icons.length];

                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                {/* Card - QR-08: 32px padding */}
                                <div className="h-full p-8 rounded-2xl bg-[#27272A]/80 backdrop-blur-sm border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 text-center">
                                    {/* Icon - 64px (8 × 8px) */}
                                    <div
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 mb-6 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                                        aria-hidden="true"
                                    >
                                        <Icon className="w-8 h-8 text-[#3B82F6]" />
                                    </div>

                                    {/* Metric Value - QR-03: 48px (Large) */}
                                    <div
                                        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mb-3 font-['Orbitron']"
                                        aria-label={`${outcome.metric}: ${outcome.value}`}
                                    >
                                        {outcome.value}
                                    </div>

                                    {/* Metric Label - QR-03: 20px (H3) with Exo 2 */}
                                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3 font-['Exo_2']">
                                        {outcome.metric}
                                    </h3>

                                    {/* Description - QR-03: 14px small text */}
                                    {outcome.description && (
                                        <p className="text-sm text-[#A1A1AA] leading-relaxed font-['Inter']">
                                            {outcome.description}
                                        </p>
                                    )}

                                    {/* Decorative bottom accent - QR-08: 24px spacing */}
                                    <div
                                        className="mt-6 pt-6 border-t border-[#3B82F6]/10 group-hover:border-[#3B82F6]/30 transition-colors duration-300"
                                        aria-hidden="true"
                                    >
                                        <div className="w-12 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto" />
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-[#71717A] italic font-['Inter']">
                        * Results based on typical client engagements. Actual outcomes may vary.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}





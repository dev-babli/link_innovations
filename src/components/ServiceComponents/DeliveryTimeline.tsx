"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface TimelineStep {
    title: string;
    description: string;
    duration?: string;
}

interface DeliveryTimelineProps {
    steps: TimelineStep[];
    title?: string;
    subtitle?: string;
    className?: string;
}

/**
 * DeliveryTimeline Component
 * Following Design System:
 * - QR-02: Brand colors
 * - QR-03: Typography hierarchy
 * - QR-05: WCAG 2.1 AA accessibility
 * - QR-08: 8px base spacing
 */
export default function DeliveryTimeline({
    steps,
    title = "How We Deliver",
    subtitle,
    className = "",
}: DeliveryTimelineProps) {
    return (
        <section
            className={`py-24 bg-[#18181B] ${className}`}
            aria-labelledby="delivery-heading"
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
                        id="delivery-heading"
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

                {/* Timeline */}
                <div className="max-w-5xl mx-auto">
                    <ol className="relative" role="list">
                        {steps.map((step, index) => {
                            const isLast = index === steps.length - 1;

                            return (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className="relative pb-12 last:pb-0"
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Step indicator - 64px (8 × 8px) */}
                                        <div className="relative flex-shrink-0 z-10">
                                            <div
                                                className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] shadow-[0_0_30px_rgba(59,130,246,0.4)] border-4 border-[#18181B]"
                                                aria-hidden="true"
                                            >
                                                <span className="text-[#FFFFFF] font-bold text-xl font-['Inter']">
                                                    {index + 1}
                                                </span>
                                            </div>

                                            {/* Connecting line */}
                                            {!isLast && (
                                                <div
                                                    className="absolute left-1/2 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#3B82F6]/20 -translate-x-1/2"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>

                                        {/* Content - QR-08: 32px padding */}
                                        <div className="flex-1 pt-2">
                                            <div className="p-8 rounded-xl bg-[#27272A]/50 backdrop-blur-sm border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300">
                                                {/* Title and duration */}
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                                    <h3 className="text-2xl font-bold text-[#FAFAFA] font-['Exo_2']">
                                                        {step.title}
                                                    </h3>
                                                    {step.duration && (
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-sm font-medium font-['Inter']">
                                                            {step.duration}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Description - QR-03: 16px body */}
                                                <p className="text-[#A1A1AA] leading-relaxed font-['Inter']">
                                                    {step.description}
                                                </p>

                                                {/* Success indicator */}
                                                <div className="mt-4 flex items-center gap-2 text-sm text-[#10B981] font-['Inter']">
                                                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                                                    <span>Step {index + 1} of {steps.length}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ol>

                    {/* Call-to-action hint */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-[#A1A1AA] flex items-center justify-center gap-2 text-lg font-['Inter']">
                            <span>Ready to get started?</span>
                            <ArrowRight className="w-5 h-5 text-[#3B82F6]" aria-hidden="true" />
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}





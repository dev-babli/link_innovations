"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface Capability {
    title: string;
    description: string;
    useCases?: string[];
    outcomes?: string[];
    icon?: string;
}

interface ServiceCapabilitiesGridProps {
    capabilities: Capability[];
    title?: string;
    intro?: string;
    className?: string;
}

/**
 * ServiceCapabilitiesGrid Component
 * Following Design System QRs:
 * - QR-02: Brand colors (#3B82F6, #8B5CF6, #06B6D4)
 * - QR-03: Orbitron headlines, Inter body, Exo 2 subheads
 * - QR-05: WCAG 2.1 AA (4.5:1 contrast, keyboard accessible)
 * - QR-08: 8px spacing scale, 32px card padding
 */
export default function ServiceCapabilitiesGrid({
    capabilities,
    title = "Our Capabilities",
    intro,
    className = "",
}: ServiceCapabilitiesGridProps) {
    return (
        <section
            className={`py-24 bg-gradient-to-b from-[#18181B] to-[#27272A] ${className}`}
            aria-labelledby="capabilities-heading"
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
                        id="capabilities-heading"
                        className="text-5xl font-bold text-[#FAFAFA] mb-6 font-['Orbitron']"
                    >
                        {title}
                    </h2>
                    {intro && (
                        <p className="text-lg text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed font-['Inter']">
                            {intro}
                        </p>
                    )}
                    <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto mt-6" aria-hidden="true" />
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((capability, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card - QR-08: 32px padding */}
                            <div className="h-full p-8 rounded-2xl bg-[#27272A]/80 backdrop-blur-sm border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2">
                                {/* Icon - 56px (7 × 8px) */}
                                <div
                                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 mb-6 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                                    aria-hidden="true"
                                >
                                    {capability.icon ? (
                                        <span className="text-2xl">{capability.icon}</span>
                                    ) : (
                                        <Sparkles className="w-7 h-7 text-[#3B82F6]" />
                                    )}
                                </div>

                                {/* Title - QR-03: 24px (H2) with Exo 2 */}
                                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4 font-['Exo_2']">
                                    {capability.title}
                                </h3>

                                {/* Description - QR-03: 16px body with Inter */}
                                <p className="text-[#A1A1AA] mb-6 leading-relaxed font-['Inter']">
                                    {capability.description}
                                </p>

                                {/* Use Cases */}
                                {capability.useCases && capability.useCases.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-[#3B82F6] mb-2 uppercase tracking-wider font-['Inter']">
                                            Use Cases
                                        </h4>
                                        <ul className="space-y-1" role="list">
                                            {capability.useCases.map((useCase, i) => (
                                                <li key={i} className="text-sm text-[#A1A1AA] flex items-start font-['Inter']">
                                                    <span className="text-[#3B82F6] mr-2" aria-hidden="true">•</span>
                                                    <span>{useCase}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Outcomes */}
                                {capability.outcomes && capability.outcomes.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#8B5CF6] mb-2 uppercase tracking-wider font-['Inter']">
                                            Outcomes
                                        </h4>
                                        <ul className="space-y-1" role="list">
                                            {capability.outcomes.map((outcome, i) => (
                                                <li key={i} className="text-sm text-[#A1A1AA] flex items-start font-['Inter']">
                                                    <span className="text-[#10B981] mr-2" aria-hidden="true">✓</span>
                                                    <span>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Decorative gradient overlay */}
                                <div
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    aria-hidden="true"
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}





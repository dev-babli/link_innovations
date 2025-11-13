"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, TrendingUp, Clock, DollarSign } from "lucide-react";

interface CaseStudy {
    title: string;
    client?: string;
    problem: string;
    solution: string;
    outcome: string;
    metrics?: {
        label: string;
        value: string;
        icon?: "award" | "trending" | "clock" | "dollar";
    }[];
    image?: string;
}

interface ServiceCaseStudyProps {
    caseStudy: CaseStudy;
    title?: string;
    className?: string;
}

const iconMap = {
    award: Award,
    trending: TrendingUp,
    clock: Clock,
    dollar: DollarSign,
};

/**
 * ServiceCaseStudy Component
 * Following Design System:
 * - QR-02: Brand colors with semantic colors (Success #10B981)
 * - QR-03: Typography hierarchy
 * - QR-05: WCAG 2.1 AA compliance
 * - QR-08: 24px spacing for sections
 */
export default function ServiceCaseStudy({
    caseStudy,
    title = "Case Study",
    className = "",
}: ServiceCaseStudyProps) {
    return (
        <section
            className={`py-24 bg-gradient-to-b from-[#18181B] to-[#27272A] ${className}`}
            aria-labelledby="case-study-heading"
        >
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2
                        id="case-study-heading"
                        className="text-5xl font-bold text-[#FAFAFA] mb-4 font-['Orbitron']"
                    >
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto" aria-hidden="true" />
                </motion.div>

                {/* Case Study Content */}
                <article className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            {/* Title */}
                            <div>
                                <h3 className="text-3xl font-bold text-[#FAFAFA] mb-2 font-['Exo_2']">
                                    {caseStudy.title}
                                </h3>
                                {caseStudy.client && (
                                    <p className="text-[#3B82F6] font-medium font-['Inter']">
                                        Client: {caseStudy.client}
                                    </p>
                                )}
                            </div>

                            {/* Problem - QR-02: Error color for problems */}
                            <div className="p-6 rounded-xl bg-[#18181B]/50 backdrop-blur-sm border-l-4 border-[#EF4444]">
                                <h4 className="text-lg font-bold text-[#EF4444] mb-2 uppercase tracking-wide font-['Inter']">
                                    Problem
                                </h4>
                                <p className="text-[#FAFAFA] leading-relaxed font-['Inter']">
                                    {caseStudy.problem}
                                </p>
                            </div>

                            {/* Solution - QR-02: Info color */}
                            <div className="p-6 rounded-xl bg-[#18181B]/50 backdrop-blur-sm border-l-4 border-[#3B82F6]">
                                <h4 className="text-lg font-bold text-[#3B82F6] mb-2 uppercase tracking-wide font-['Inter']">
                                    Solution
                                </h4>
                                <p className="text-[#FAFAFA] leading-relaxed font-['Inter']">
                                    {caseStudy.solution}
                                </p>
                            </div>

                            {/* Outcome - QR-02: Success color */}
                            <div className="p-6 rounded-xl bg-[#18181B]/50 backdrop-blur-sm border-l-4 border-[#10B981]">
                                <h4 className="text-lg font-bold text-[#10B981] mb-2 uppercase tracking-wide font-['Inter']">
                                    Outcome
                                </h4>
                                <p className="text-[#FAFAFA] leading-relaxed font-['Inter']">
                                    {caseStudy.outcome}
                                </p>
                            </div>
                        </motion.div>

                        {/* Metrics Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Image */}
                            {caseStudy.image && (
                                <div className="relative rounded-2xl overflow-hidden border border-[#3B82F6]/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] mb-8">
                                    <img
                                        src={caseStudy.image}
                                        alt=""
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#18181B]/80 via-transparent to-transparent" />
                                </div>
                            )}

                            {/* Metrics */}
                            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-[#FAFAFA] mb-4 font-['Exo_2']">
                                        Key Results
                                    </h4>
                                    {caseStudy.metrics.map((metric, index) => {
                                        const Icon = metric.icon ? iconMap[metric.icon] : TrendingUp;

                                        return (
                                            <div
                                                key={index}
                                                className="p-6 rounded-xl bg-[#18181B]/80 backdrop-blur-sm border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 flex items-center justify-center"
                                                        aria-hidden="true"
                                                    >
                                                        <Icon className="w-6 h-6 text-[#3B82F6]" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div
                                                            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mb-1 font-['Orbitron']"
                                                            aria-label={`${metric.label}: ${metric.value}`}
                                                        >
                                                            {metric.value}
                                                        </div>
                                                        <p className="text-[#A1A1AA] text-sm font-['Inter']">
                                                            {metric.label}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Decorative accent */}
                            <div className="p-6 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 border border-[#3B82F6]/20">
                                <p className="text-[#FAFAFA] text-center italic font-['Inter']">
                                    "A transformation that delivered measurable business impact"
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </article>
            </div>
        </section>
    );
}





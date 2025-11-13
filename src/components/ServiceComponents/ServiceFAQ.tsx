"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    faqs: FAQItem[];
    title?: string;
    subtitle?: string;
    className?: string;
}

/**
 * ServiceFAQ Component
 * Following Design System:
 * - QR-02: Brand colors
 * - QR-03: Typography hierarchy
 * - QR-05: WCAG 2.1 AA - keyboard accessible (Space/Enter)
 * - QR-08: 32px padding
 * - QR-06: NO dark patterns - clear, honest information
 */
export default function ServiceFAQ({
    faqs,
    title = "Frequently Asked Questions",
    subtitle,
    className = "",
}: ServiceFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleFAQ(index);
        }
    };

    return (
        <section
            className={`py-24 bg-[#18181B] ${className}`}
            aria-labelledby="faq-heading"
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
                        id="faq-heading"
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

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const contentId = `faq-content-${index}`;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-xl bg-[#27272A]/80 backdrop-blur-sm border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden"
                            >
                                {/* Question Button - QR-05: 44px min-height */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    aria-expanded={isOpen}
                                    aria-controls={contentId}
                                    className="w-full flex items-center justify-between gap-4 p-8 text-left focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#18181B] min-h-[44px] group"
                                >
                                    {/* Question - QR-03: 20px with Exo 2 */}
                                    <h3 className="text-xl font-bold text-[#FAFAFA] pr-4 font-['Exo_2'] group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {faq.question}
                                    </h3>

                                    {/* Toggle Icon - QR-08: 40px (5 × 8px) */}
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                                        aria-hidden="true"
                                    >
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 text-[#3B82F6]" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-[#3B82F6]" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={contentId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            {/* Answer Content - QR-08: 32px padding */}
                                            <div className="px-8 pb-8 pt-0">
                                                <div className="pt-6 border-t border-[#3B82F6]/10">
                                                    {/* Answer Text - QR-03: 16px body with Inter */}
                                                    <p className="text-[#A1A1AA] leading-relaxed font-['Inter']">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA hint - QR-06: Clear, helpful, no manipulation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#A1A1AA] font-['Inter']">
                        Still have questions?{" "}
                        <a
                            href="#contact"
                            className="text-[#3B82F6] hover:underline focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#18181B] rounded px-1"
                        >
                            Get in touch
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}





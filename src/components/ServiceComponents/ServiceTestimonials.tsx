"use client";

import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating?: number;
    image?: string;
}

interface ServiceTestimonialsProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
    className?: string;
}

/**
 * ServiceTestimonials Component
 * Following Design System:
 * - QR-02: Brand colors (#3B82F6, #F59E0B for stars)
 * - QR-03: Typography hierarchy
 * - QR-05: WCAG 2.1 AA compliance
 * - QR-08: 32px card padding
 * - QR-06: NO dark patterns - authentic testimonials only
 */
export default function ServiceTestimonials({
    testimonials,
    title = "What Our Clients Say",
    subtitle,
    className = "",
}: ServiceTestimonialsProps) {
    return (
        <section
            className={`py-24 bg-[#27272A] ${className}`}
            aria-labelledby="testimonials-heading"
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
                        id="testimonials-heading"
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

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Card - QR-08: 32px padding */}
                            <div className="h-full p-8 rounded-2xl bg-[#18181B]/80 backdrop-blur-sm border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col">
                                {/* Quote Icon - QR-08: 48px (6 × 8px) */}
                                <div
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 mb-6 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                                    aria-hidden="true"
                                >
                                    <Quote className="w-6 h-6 text-[#3B82F6]" />
                                </div>

                                {/* Rating - QR-02: Warning color for stars */}
                                {testimonial.rating && (
                                    <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonial.rating!
                                                        ? "fill-[#F59E0B] text-[#F59E0B]"
                                                        : "fill-none text-[#52525B]"
                                                    }`}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Quote - QR-03: 16px body with Inter */}
                                <blockquote className="flex-1 mb-6">
                                    <p className="text-[#FAFAFA] leading-relaxed italic font-['Inter']">
                                        "{testimonial.quote}"
                                    </p>
                                </blockquote>

                                {/* Author - QR-08: 24px spacing */}
                                <footer className="flex items-center gap-4 pt-6 border-t border-[#3B82F6]/10 group-hover:border-[#3B82F6]/30 transition-colors duration-300">
                                    {/* Avatar - 48px (6 × 8px) */}
                                    {testimonial.image ? (
                                        <img
                                            src={testimonial.image}
                                            alt=""
                                            className="w-12 h-12 rounded-full object-cover border-2 border-[#3B82F6]/30"
                                        />
                                    ) : (
                                        <div
                                            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6]/30 to-[#8B5CF6]/30 flex items-center justify-center font-bold text-[#3B82F6] text-lg"
                                            aria-hidden="true"
                                        >
                                            {testimonial.author.charAt(0)}
                                        </div>
                                    )}

                                    {/* Author Info */}
                                    <div>
                                        <cite className="not-italic">
                                            <div className="font-semibold text-[#FAFAFA] font-['Inter']">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-sm text-[#A1A1AA] font-['Inter']">
                                                {testimonial.role}
                                            </div>
                                            <div className="text-sm text-[#3B82F6] font-['Inter']">
                                                {testimonial.company}
                                            </div>
                                        </cite>
                                    </div>
                                </footer>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}





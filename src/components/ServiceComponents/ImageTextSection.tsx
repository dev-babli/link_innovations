"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ImageTextSectionProps {
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    imageUrl?: string;
    imagePosition?: "left" | "right";
    badge?: string;
    className?: string;
}

/**
 * ImageTextSection Component
 * Matches the layout from s_2 (1).svg mockup
 * Alternating image-text sections
 */
export default function ImageTextSection({
    title,
    description,
    ctaText,
    ctaLink,
    imageUrl,
    imagePosition = "right",
    badge,
    className = "",
}: ImageTextSectionProps) {
    const isImageRight = imagePosition === "right";

    return (
        <section className={`py-16 lg:py-24 bg-[#0a0a0f] ${className}`}>
            <div className="container mx-auto px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isImageRight ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: isImageRight ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={isImageRight ? "" : "lg:col-start-2"}
                    >
                        {badge && (
                            <div className="inline-block mb-4">
                                <span className="text-sm font-semibold text-[#7877c6] uppercase tracking-wider font-['Inter']">
                                    {badge}
                                </span>
                            </div>
                        )}

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-6 leading-tight font-['Orbitron']">
                            {title}
                        </h2>

                        <p className="text-lg text-[#A1A1AA] leading-relaxed mb-8 font-['Inter']">
                            {description}
                        </p>

                        {ctaText && ctaLink && (
                            <a
                                href={ctaLink}
                                className="inline-flex items-center gap-2 text-[#7877c6] font-semibold hover:gap-4 transition-all duration-300 font-['Inter']"
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        )}
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={isImageRight ? "" : "lg:col-start-1 lg:row-start-1"}
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#27272A]">
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    alt={`${title} - ${description}`}
                                    width={600}
                                    height={450}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    unoptimized={false}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-[#3B82F6]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


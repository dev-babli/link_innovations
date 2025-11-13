"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, Calendar } from "lucide-react";

interface CTAButton {
    text: string;
    href: string;
    variant?: "primary" | "secondary";
    icon?: "arrow" | "mail" | "calendar";
}

interface ServiceCTAProps {
    title: string;
    subtitle?: string;
    description?: string;
    buttons: CTAButton[];
    className?: string;
}

const iconMap = {
    arrow: ArrowRight,
    mail: Mail,
    calendar: Calendar,
};

/**
 * ServiceCTA Component
 * Following Design System:
 * - QR-02: Brand colors (#3B82F6, #8B5CF6)
 * - QR-03: Orbitron headlines, Inter body
 * - QR-05: WCAG 2.1 AA - 44x44px touch targets, focus indicators
 * - QR-08: 48px button padding
 * - QR-06: NO dark patterns - clear, honest CTAs
 */
export default function ServiceCTA({
    title,
    subtitle,
    description,
    buttons,
    className = "",
}: ServiceCTAProps) {
    return (
        <section
            className={`py-24 bg-gradient-to-b from-[#27272A] to-[#18181B] relative overflow-hidden ${className}`}
            aria-labelledby="cta-heading"
        >
            {/* Background effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B82F6_1px,transparent_1px),linear-gradient(to_bottom,#3B82F6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            {/* Decorative gradient blobs */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl" aria-hidden="true" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Subtitle */}
                        {subtitle && (
                            <p className="text-[#3B82F6] font-semibold uppercase tracking-wider mb-4 font-['Inter']">
                                {subtitle}
                            </p>
                        )}

                        {/* Title - QR-03: 48px Large with Orbitron */}
                        <h2
                            id="cta-heading"
                            className="text-5xl font-bold text-[#FAFAFA] mb-6 font-['Orbitron']"
                        >
                            {title}
                        </h2>

                        {/* Accent line */}
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto mb-8" aria-hidden="true" />

                        {/* Description - QR-03: 18px body large with Inter */}
                        {description && (
                            <p className="text-lg text-[#A1A1AA] mb-10 leading-relaxed max-w-3xl mx-auto font-['Inter']">
                                {description}
                            </p>
                        )}

                        {/* CTA Buttons - QR-05: 44x44px minimum, QR-08: 32px padding */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {buttons.map((button, index) => {
                                const Icon = button.icon ? iconMap[button.icon] : ArrowRight;
                                const isPrimary = button.variant !== "secondary";

                                return (
                                    <motion.a
                                        key={index}
                                        href={button.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                        className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 min-h-[44px] min-w-[44px] text-center focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#27272A] font-['Inter'] ${isPrimary
                                                ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-[#FFFFFF] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                                                : "border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#FFFFFF] hover:-translate-y-1"
                                            }`}
                                        aria-label={button.text}
                                    >
                                        {button.text}
                                        <Icon className="ml-2 h-5 w-5" aria-hidden="true" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Trust indicators - QR-06: Real stats, no fake scarcity */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-16 pt-12 border-t border-[#3B82F6]/10"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mb-2 font-['Orbitron']">
                                    500+
                                </div>
                                <p className="text-sm text-[#A1A1AA] font-['Inter']">Projects Delivered</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mb-2 font-['Orbitron']">
                                    98%
                                </div>
                                <p className="text-sm text-[#A1A1AA] font-['Inter']">Client Satisfaction</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mb-2 font-['Orbitron']">
                                    24/7
                                </div>
                                <p className="text-sm text-[#A1A1AA] font-['Inter']">Support Available</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mb-2 font-['Orbitron']">
                                    15+
                                </div>
                                <p className="text-sm text-[#A1A1AA] font-['Inter']">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" aria-hidden="true" />
        </section>
    );
}





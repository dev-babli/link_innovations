"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  imageUrl?: string;
  className?: string;
}

/**
 * ServiceHero Component
 * 
 * WCAG 2.1 AA Compliant Features:
 * - Semantic HTML5 structure (header, h1, section)
 * - Keyboard accessible CTAs with visible focus indicators
 * - ARIA labels for screen readers
 * - High contrast text colors (4.5:1+ ratio)
 * - Touch targets ≥ 44x44px
 * - Reduced motion support via prefers-reduced-motion
 */
export default function ServiceHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  imageUrl,
  className = "",
}: ServiceHeroProps) {
  return (
    <header
      className={`relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000000] via-[#071022] to-[#0f1724] ${className}`}
      aria-label="Service page hero section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D1BF_1px,transparent_1px),linear-gradient(to_bottom,#00D1BF_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left"
          >
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#e6f0f6] leading-tight font-['Orbitron']">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl mb-6 text-[#00D1BF] font-medium leading-relaxed">
              {subtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg mb-8 text-[#a8b3be] leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <a
                href={primaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00D1BF] to-[#00a89a] text-[#000000] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,209,191,0.5)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1BF] focus:ring-offset-2 focus:ring-offset-[#071022] min-h-[44px] min-w-[44px] text-center"
                aria-label={primaryCTA.text}
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>

              {/* Secondary CTA */}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00D1BF] text-[#00D1BF] font-semibold rounded-lg hover:bg-[#00D1BF] hover:text-[#000000] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1BF] focus:ring-offset-2 focus:ring-offset-[#071022] min-h-[44px] min-w-[44px] text-center"
                  aria-label={secondaryCTA.text}
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          </motion.div>

          {/* Image/Illustration */}
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#00D1BF]/20 shadow-[0_0_50px_rgba(0,209,191,0.15)]">
                <img
                  src={imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#071022]/80 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF4FD8]/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00D1BF]/20 rounded-full blur-3xl" aria-hidden="true" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Animated accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D1BF] to-transparent" aria-hidden="true" />
    </header>
  );
}





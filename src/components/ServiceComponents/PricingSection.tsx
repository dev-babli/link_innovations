"use client";

import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
}

interface PricingSectionProps {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
  className?: string;
}

/**
 * PricingSection Component
 * For pricing tables with tiers
 * DARK THEME - matches mockup designs
 */
export default function PricingSection({
  title,
  subtitle,
  tiers,
  className = "",
}: PricingSectionProps) {
  return (
    <section className={`py-24 bg-black ${className}`}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-['Orbitron']">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-['Inter']">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                tier.popular
                  ? "border-cyan-400 bg-gray-900/50 hover:shadow-cyan-500/25"
                  : "border-gray-700 bg-gray-900/30 hover:border-gray-600"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black text-sm font-bold rounded-full font-['Inter']">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-bold text-white mb-2 font-['Exo_2']">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-cyan-400 font-['Orbitron']">
                  {tier.price}
                </span>
                <span className="text-gray-400 ml-2 font-['Inter']">
                  {tier.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 font-['Inter']">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300 font-['Inter']">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={tier.ctaLink}
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-cyan-400 to-cyan-600 text-black hover:from-cyan-600 hover:to-cyan-400"
                    : "bg-transparent border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                } font-['Inter']`}
              >
                {tier.ctaText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




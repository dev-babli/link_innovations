"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function OrbComparison() {
  const comparisons = [
    { feature: "24/7 Dedicated Support", us: true, others: false },
    { feature: "Custom IT Solutions", us: true, others: false },
    { feature: "Scalable Infrastructure", us: true, others: true },
    { feature: "Real-Time Analytics", us: true, others: false },
    { feature: "AI-Powered Automation", us: true, others: false },
    { feature: "Flexible Pricing", us: true, others: true },
    { feature: "Enterprise Security", us: true, others: true },
    { feature: "Rapid Deployment", us: true, others: false },
  ];

  return (
    <section className="relative py-24 bg-orb-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">COMPARISON</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why We're Different</h2>
          <p className="text-orb-light text-lg">See how Link Innovations stacks up against traditional IT providers</p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-orb-border">
            <div></div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue text-white font-bold">
                LINK AI
              </div>
            </div>
            <div className="text-center">
              <span className="text-orb-light font-semibold">Traditional IT</span>
            </div>
          </div>

          {/* Features */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`grid grid-cols-3 gap-4 p-6 items-center ${
                index !== comparisons.length - 1 ? "border-b border-orb-border/50" : ""
              }`}
            >
              <div className="text-white font-medium">{item.feature}</div>
              <div className="flex justify-center">
                {item.us ? (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-orb-darker flex items-center justify-center">
                    <X className="w-5 h-5 text-orb-light" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {item.others ? (
                  <div className="w-8 h-8 rounded-full bg-orb-darker flex items-center justify-center">
                    <Check className="w-5 h-5 text-orb-light" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-orb-darker flex items-center justify-center">
                    <X className="w-5 h-5 text-orb-light" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}











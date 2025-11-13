"use client";

import React from "react";
import { motion } from "framer-motion";

export function OrbProcess() {
  const steps = [
    {
      number: "01",
      title: "QUICK & SIMPLE",
      description: "Collaborate and implement custom AI agents in hours, not weeks, helping your business adapt rapidly.",
      highlight: "Deploy in hours",
    },
    {
      number: "02",
      title: "FULL SUPPORT",
      description: "Get 24/7 dedicated assistance, training, and resources to maximize your IT investment and success.",
      highlight: "Always available",
    },
    {
      number: "03",
      title: "DESIGNED TO SCALE",
      description: "Our solutions grow with your business, handling increased demand without compromising performance or quality.",
      highlight: "Enterprise-ready",
    },
  ];

  return (
    <section className="relative py-24 bg-orb-darker overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orb-dark via-transparent to-orb-dark"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">PROCESS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Simple & Scalable</h2>
          <p className="text-orb-light text-lg">Our streamlined approach to delivering excellence</p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Large Number */}
                <div className="flex-shrink-0">
                  <span className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orb-purple to-orb-blue bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <div className="inline-block px-4 py-1 rounded-full bg-orb-card border border-orb-border text-orb-accent text-sm font-semibold mb-4">
                    {step.highlight}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-orb-light text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 w-0.5 h-24 bg-gradient-to-b from-orb-purple/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}











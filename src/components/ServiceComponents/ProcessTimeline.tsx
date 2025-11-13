"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
}

interface ProcessTimelineProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

/**
 * ProcessTimeline Component
 * For showing development process or workflow steps
 * DARK THEME - matches mockup designs
 */
export default function ProcessTimeline({
  title,
  subtitle,
  steps,
  className = "",
}: ProcessTimelineProps) {
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

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400 flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold text-cyan-400 font-['Orbitron']">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white font-['Exo_2']">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full font-['Inter']">
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 leading-relaxed font-['Inter']">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-6 left-12">
                      <ArrowRight className="w-5 h-5 text-cyan-400 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




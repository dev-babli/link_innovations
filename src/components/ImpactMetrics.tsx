"use client";

import React from "react";
import { motion } from "motion/react";

interface ImpactMetric {
  metric: string;
  value: string;
  description: string;
}

interface ImpactMetricsProps {
  metrics: ImpactMetric[];
  title?: string;
  description?: string;
}

export default function ImpactMetrics({
  metrics,
  title = "Impact Metrics",
  description = "Measurable results that drive your business forward",
}: ImpactMetricsProps) {
  return (
    <section className="bg-background-secondary py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-medium text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft text-center hover:shadow-lg transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
                {metric.value}
              </div>
              <div className="text-base font-medium text-text-primary mb-2">
                {metric.metric}
              </div>
              <div className="text-sm text-text-secondary">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}








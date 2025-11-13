"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Across multiple countries",
  },
  {
    number: "99%",
    label: "Compliance track record",
  },
  {
    number: "100+",
    label: "AI strategies delivered",
  },
];

export default function WhyPartnerWithUs() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Why Partner with Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We combine strategic consulting with deep AI expertise, ensuring our recommendations are both visionary and practical. We speak the language of business leaders and data scientists, enabling smoother execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
              <div>
                <p className="text-gray-600 text-sm mb-2">Proven success in aligning AI with business impact.</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Experience across industries with different regulatory needs.</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Structured methodologies for strategy and execution.</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Commitment to measurable outcomes.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold text-black mb-3">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




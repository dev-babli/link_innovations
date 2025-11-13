"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScalingAISection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
              <p className="text-xs font-medium text-black uppercase tracking-wider">SCALING AI SAFELY</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6 mt-4">
              Scaling AI isn't a leap of faith. With our four services as your guardrails, you can innovate quickly, deploy responsibly, and lead with confidence. Together, we'll ensure your AI transformation is both bold and safe.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




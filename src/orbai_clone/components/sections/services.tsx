"use client";

import React from "react";
import { motion } from "framer-motion";
import FUIBentoGridDark from "@/components/ui/bento";
import { Component as BgGradient } from "@/components/ui/bg-gradient";

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-[#f5f5f5] py-24 sm:py-32 overflow-hidden">
      <BgGradient />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
            <p className="text-xs font-medium text-[#666666]">SERVICES</p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl mb-4">
            Our Core Services
          </h2>
          <p className="text-lg leading-8 text-[#666666]">
            Comprehensive IT solutions designed to transform your business.
          </p>
        </motion.div>

        <FUIBentoGridDark />
      </div>
    </section>
  );
};

export default ServicesSection;
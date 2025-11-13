"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function OrbProjects() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "Healthcare Platform Transformation",
      category: "HEALTHCARE",
      description: "Revolutionized patient care with a comprehensive digital platform, integrating telemedicine, electronic health records, and AI-powered diagnostics.",
      metrics: [
        { label: "Patient Satisfaction", value: "95%", change: "+32%" },
        { label: "Efficiency Gain", value: "60%", change: "+45%" },
        { label: "Cost Reduction", value: "40%", change: "-40%" },
      ],
      image: "/images/Healthcare.webp",
    },
    {
      title: "FinTech Security Infrastructure",
      category: "FINANCE",
      description: "Built a robust cybersecurity framework for a leading financial institution, protecting millions of transactions daily with zero-trust architecture.",
      metrics: [
        { label: "Threat Detection", value: "99.9%", change: "+25%" },
        { label: "Response Time", value: "<2min", change: "-70%" },
        { label: "Compliance Score", value: "100%", change: "+15%" },
      ],
      image: "/images/Banking-and-Finance.webp",
    },
    {
      title: "E-Commerce Scalability Solution",
      category: "RETAIL",
      description: "Designed and deployed a cloud-native e-commerce platform capable of handling millions of concurrent users during peak shopping seasons.",
      metrics: [
        { label: "Uptime", value: "99.99%", change: "+5%" },
        { label: "Load Capacity", value: "10M", change: "+500%" },
        { label: "Revenue Growth", value: "250%", change: "+150%" },
      ],
      image: "/images/industry_cards/Corptocorp.webp",
    },
  ];

  const currentProject = projects[activeTab];

  return (
    <section className="relative py-24 bg-orb-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">PROJECTS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Recent Success Stories</h2>
          <p className="text-orb-light text-lg">Explore how we've transformed businesses across industries</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === index
                  ? "bg-gradient-to-r from-orb-purple to-orb-blue text-white"
                  : "bg-orb-card border border-orb-border text-orb-light hover:border-orb-purple/50"
              }`}
            >
              PROJECT {index + 1}
            </button>
          ))}
        </div>

        {/* Project Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Content */}
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-orb-card border border-orb-border text-orb-accent text-sm font-semibold mb-4">
                {currentProject.category}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">{currentProject.title}</h3>
              <p className="text-orb-light text-lg mb-8 leading-relaxed">{currentProject.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {currentProject.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-2xl bg-orb-card backdrop-blur-xl border border-orb-border"
                  >
                    <p className="text-xs text-orb-light mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
                    <p className="text-xs text-orb-accent">{metric.change}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-3xl overflow-hidden border border-orb-border"
            >
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orb-dark/80 to-transparent"></div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}











"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Workflow, LineChart, Headphones } from "lucide-react";

export function OrbFeatures() {
  const features = [
    {
      icon: Brain,
      title: "Cutting-Edge IT",
      description: "Deploy IT solutions that adapt quickly, learn fast, and scale with your business needs.",
      gradient: "from-orb-purple to-orb-blue",
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Streamline tasks and boost efficiency with powerful, scalable IT-powered automation tools for growing teams and projects.",
      gradient: "from-orb-blue to-orb-accent",
    },
    {
      icon: LineChart,
      title: "Insightful Analytics",
      description: "Gain deep, real-time data insights with advanced analytics to guide smarter strategies, decisions, and scalable business growth.",
      gradient: "from-orb-accent to-orb-purple",
    },
    {
      icon: Headphones,
      title: "IT-Powered Support",
      description: "Enhance customer experience with IT-driven virtual assistants available for support and engagement.",
      gradient: "from-orb-purple to-orb-blue",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-orb-darker">
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
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">FEATURES</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">All features in 1 tool</h2>
          <p className="text-orb-light text-lg">Discover features that simplify workflows & grow your business.</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border hover:border-orb-purple/50 transition-all overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-orb-light leading-relaxed">{feature.description}</p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue text-white font-semibold hover:shadow-2xl hover:shadow-orb-purple/50 transition-all">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-full bg-orb-card backdrop-blur-xl border border-orb-border text-white font-semibold hover:bg-orb-border transition-all">
            See Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}











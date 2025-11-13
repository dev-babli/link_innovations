"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, BarChart3 } from "lucide-react";

export function OrbBenefits() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 60 ? prev + 1 : 60));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const features = [
    "Faster Innovation",
    "Virtual Assistance",
    "Scalable Solutions",
    "Personalized Experiences",
    "Cost Effective",
    "Real-Time Insights",
    "Automation",
    "Data-Driven Decisions",
  ];

  return (
    <section id="benefits" className="relative py-24 bg-orb-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orb-purple/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">BENEFITS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-orb-light text-lg">Partner with an IT agency delivering smart solutions.</p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Benefit 1 - Real-Time Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border hover:border-orb-purple/50 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orb-purple to-orb-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Analytics</h3>
            <p className="text-orb-light leading-relaxed">
              Stay ahead with accurate, real-time performance tracking
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orb-purple/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Benefit 2 - AI-Driven Growth with Before/After */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border hover:border-orb-blue/50 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orb-blue to-orb-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">IT-Driven Growth</h3>
            <p className="text-orb-light mb-6 leading-relaxed">
              Make smarter moves with accurate, real-time business insights.
            </p>
            
            {/* Before/After Comparison */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-xl bg-orb-darker/50 border border-orb-border/50">
                <p className="text-xs text-orb-light mb-1">BEFORE</p>
                <p className="text-3xl font-bold text-white">20%</p>
                <p className="text-xs text-orb-light">Automation</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-orb-purple/20 to-orb-blue/20 border border-orb-purple/30">
                <p className="text-xs text-orb-accent mb-1">AFTER</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-orb-purple to-orb-blue bg-clip-text text-transparent">{count}%</p>
                <p className="text-xs text-orb-light">Automation</p>
              </div>
            </div>
          </motion.div>

          {/* Benefit 3 - Sync in Real Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border hover:border-orb-accent/50 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orb-accent to-orb-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Sync in real time</h3>
            <p className="text-orb-light leading-relaxed">
              Connect with your team instantly to track progress and updates
            </p>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orb-accent/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Infinite Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden py-8 rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...features, ...features, ...features].map((feature, index) => (
              <span
                key={index}
                className="mx-8 text-xl font-semibold text-white inline-flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue"></span>
                {feature}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}











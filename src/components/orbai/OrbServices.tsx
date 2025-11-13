"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Shield, Smartphone, Database, Cog } from "lucide-react";

export function OrbServices() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technology",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and consulting",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform data into actionable insights",
    },
    {
      icon: Cog,
      title: "IT Consulting",
      description: "Strategic technology guidance and implementation",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-orb-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">SERVICES</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">What We Offer</h2>
          <p className="text-orb-light text-lg">Comprehensive IT solutions for your business needs</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border hover:border-orb-purple/50 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orb-purple to-orb-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-orb-light">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}











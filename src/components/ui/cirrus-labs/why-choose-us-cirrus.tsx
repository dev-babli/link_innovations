"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Shield, Zap, CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Opportunity-Driven Approach",
    description: "We help you identify the most valuable AI opportunities for your business.",
    icon: Target,
  },
  {
    title: "Cross-Team Alignment",
    description: "We bridge silos and align stakeholders across your organization.",
    icon: Users,
  },
  {
    title: "Compliance First",
    description: "We manage risk and ensure every solution meets regulatory standards.",
    icon: Shield,
  },
  {
    title: "Agile Execution",
    description: "We deliver faster with iterative, agile methodologies tailored to AI.",
    icon: Zap,
  },
  {
    title: "Production-Grade AI",
    description: "We focus on building scalable, trustworthy AI systems that go live.",
    icon: CheckCircle,
  },
];

export default function WhyChooseUsCirrus() {
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
            <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
              <p className="text-xs font-medium text-black uppercase tracking-wider">WHY CHOOSE US</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              Why Cirrus Labs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We identify high-impact AI opportunities, align your teams, and deliver production-ready solutions—safely, quickly, and at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}




"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Zap, Shield, Settings, DollarSign, Users } from "lucide-react";

const challenges = [
  {
    title: "Model-Data Mismatch",
    description: "Our proprietary data framework surfaces and corrects model–data mismatches across pipelines, ensuring consistency.",
    icon: Database,
  },
  {
    title: "Latency Requirements",
    description: "Real-time systems demand millisecond responses, requiring optimization and infrastructure scaling strategies.",
    icon: Zap,
  },
  {
    title: "Security & Privacy",
    description: "Protecting sensitive data, preventing adversarial attacks, and ensuring compliance with regulations.",
    icon: Shield,
  },
  {
    title: "MLOps Infrastructure",
    description: "Building automated pipelines for versioning, testing, deployment, and rollback capabilities.",
    icon: Settings,
  },
  {
    title: "Cost Management",
    description: "Balancing model complexity with computational costs while maintaining performance at scale.",
    icon: DollarSign,
  },
  {
    title: "Cross-team Collaboration",
    description: "Bridging gaps between data scientists, engineers, and business stakeholders for successful deployment.",
    icon: Users,
  },
];

export default function KeyChallengesSection() {
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
              <p className="text-xs font-medium text-black uppercase tracking-wider">FEATURES</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              Key Challenges to Overcome
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI is transformative, but speed without safety is risk. We help you scale AI responsibly in a fast, effective, and trustworthy way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}




"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Database, TrendingUp } from "lucide-react";

const transformations = [
  {
    title: "Safe Transformation",
    description: "Align rollout with compliance, security, scalable systems, and delivery.",
    fullDescription: "Our experts work with you from vision to deployment, ensuring each step is audit-ready and aligned with your business goals.",
    icon: Shield,
  },
  {
    title: "Team Empowerment",
    description: "Train teams for AI success with enablement and change support.",
    fullDescription: "AI success depends on people. We provide hands-on enablement and change management, preparing your teams for long-term adoption and growth.",
    icon: Users,
  },
  {
    title: "AI-Ready Data",
    description: "Engineer data for AI accuracy, compliance, integration, and scale.",
    fullDescription: "We combine industry strategy with technical depth to make AI work reliably in your unique environment.",
    icon: Database,
  },
  {
    title: "Proven Results",
    description: "Show ROI, gain speed, ensure trust, and outperform competitors.",
    fullDescription: "Demonstrate measurable business impact with data-driven AI implementations that deliver value from day one.",
    icon: TrendingUp,
  },
];

export default function TrustedAITransformation() {
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
              <p className="text-xs font-medium text-black uppercase tracking-wider">TRUSTED</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              AI Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From vision to value, deploy AI with engineered data, skilled teams, and measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformations.map((transformation, index) => {
              const IconComponent = transformation.icon;
              return (
                <motion.div
                  key={transformation.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{transformation.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">{transformation.description}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{transformation.fullDescription}</p>
                  
                  {/* Placeholder for video/image */}
                  <div className="mt-6 w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Video/Image Placeholder</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}




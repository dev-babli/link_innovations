"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Brain, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Data Enablement & Architecture",
    description: "Modernize data foundations for cleaner, compliant, and scalable pipelines for robust AI development",
    icon: Database,
    features: [
      "Automated data gathering & governance processes to minimize human errors",
      "Batch + real-time data processing pipelines for scalable enterprise operations",
      "Boost model performance with big data on cloud ecosystems",
      "Privacy-first architectures designed to comply with global regulations and frameworks",
    ],
    buttonText: "Explore Data Enablement",
  },
  {
    title: "Enterprise AI Transformation",
    description: "Building robust, fair, and explainable models",
    icon: Brain,
    features: [
      "Comprehensive multi-metric model validation to ensure accuracy and reliability",
      "Bias & fairness assessment frameworks to promote ethical AI",
      "Explainability techniques for stakeholder trust and transparency",
      "Robustness & adversarial testing to strengthen security",
    ],
    buttonText: "Discover Enterprise AI Transformation",
  },
  {
    title: "Responsible AI Services",
    description: "Be Responsible - Mitigate risk with thorough evaluation",
    icon: ShieldCheck,
    features: [
      "Bias detection & mitigation strategies for unbiased outcomes aligning with client objectives",
      "Risk & security assessments that safeguard AI systems responsibly",
      "Adversarial testing to uncover potential vulnerabilities and risks",
      "Safe deployment validation ensuring production readiness and compliance",
    ],
    buttonText: "View Safety Assurance",
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    description: "Accountable Governance, Risk and Compliance strategies to ensure responsible use of AI",
    icon: FileText,
    features: [
      "Comprehensive repository for policies, risk frameworks, & audit trails for regional use",
      "Continuous regulatory monitoring to remain compliant while client sleeps",
      "In-built Integrations to help develop transparency and accountability during operations",
      "Boost organizational productivity by incorporating AI automation of tasks",
    ],
    buttonText: "Learn About GRC",
  },
];

export default function ServicesGrid() {
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
              <p className="text-xs font-medium text-black uppercase tracking-wider">SERVICES</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete suite of AI services designed to accelerate your enterprise success that aligns with organizational objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-700 transition-colors group"
                    >
                      {service.buttonText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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




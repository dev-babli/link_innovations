"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, AlertTriangle, TrendingUp } from "lucide-react";

const narrativeCards = [
  {
    title: "The Promise",
    description: "AI is transformative, but speed without safety is risk. We help you scale AI responsibly with our fast, effective, and trustworthy services.",
    icon: Sparkles,
  },
  {
    title: "The Challenge",
    description: "Most organizations struggle with siloed data, unclear governance, and untested models. Scaling AI safely is about building the right foundation.",
    icon: AlertTriangle,
  },
  {
    title: "The Path Forward",
    description: "Each of our 4 services act as a chapter in your safe-scaling story designed to keep innovation on track, risk in check, and value within reach.",
    icon: TrendingUp,
  },
];

export default function ThreeColumnNarrative() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {narrativeCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
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




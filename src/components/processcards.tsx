"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const processSteps = [
  {
    id: "01",
    title: "Easy setup",
    text: "Create your workspace and invite your team. Get everything ready.",
    color: "from-blue-500 to-indigo-600",
    img: "/images/process-cards/easy.jpg",
  },
  {
    id: "02",
    title: "Collaborate",
    text: "Assign tasks and keep communication clear. Everyone stays aligned.",
    color: "from-purple-500 to-pink-500",
    img: "/images/process-cards/collabarate.jpg",
  },
  {
    id: "03",
    title: "Track growth",
    text: "Use dashboards to monitor progress, trends, and what matters most.",
    color: "from-emerald-500 to-teal-600",
    img: "/images/process-cards/track.jpg",
  },
];

export default function ProcessCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const defaultExpanded = 0;

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          A simple 3-step process to help your team set up, collaborate, and
          track success efficiently.
        </p>
        <div className="relative p-5 bg-pink-100/30  rounded-3xl flex justify-center gap-6">
          {processSteps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            const isExpanded =
              hoveredIndex !== null ? isHovered : index === defaultExpanded;

            return (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-lg flex bg-white"
                style={{ height: "329.6px", minWidth: "300px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Left side text */}
                <div className="w-64 flex flex-col justify-between p-6">
                  <div className="text-xl font-bold text-left text-gray-400">{step.id}</div>
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold mb-1 text-left">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-left">
                      {step.text}
                    </p>
                  </div>
                </div>
                {/* Right side image */}
                <motion.div
                  className="relative overflow-hidden flex-1"
                  initial={{ width: 0 }}
                  animate={{ width: isExpanded ? 300 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {isExpanded && (
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const clientNeeds = [
  { id: 1, title: "Scalable Solutions", icon: "📈", gradient: "from-blue-500 to-cyan-500" },
  { id: 2, title: "Modern Technology", icon: "⚡", gradient: "from-purple-500 to-pink-500" },
  { id: 3, title: "Expert Support", icon: "🤝", gradient: "from-emerald-500 to-teal-500" },
];

const services = [
  { id: 1, title: "Web Development", icon: "🌐" },
  { id: 2, title: "Mobile Apps", icon: "📱" },
  { id: 3, title: "Custom Software", icon: "💻" },
];

const results = [
  { id: 1, title: "Business Growth", icon: "🚀", gradient: "from-orange-500 to-red-500" },
  { id: 2, title: "Efficiency Gains", icon: "⚙️", gradient: "from-indigo-500 to-blue-500" },
  { id: 3, title: "Competitive Edge", icon: "🏆", gradient: "from-yellow-500 to-amber-500" },
];

export function FlowAnimationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const [activeFlow, setActiveFlow] = useState(0);

  // Create pathLengths for Google Gemini Effect - one for each connection
  // 3 paths from client needs to center, 3 paths from center to results = 6 paths total
  // Using smoother scroll ranges for better animation
  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.25], [0, 1], { clamp: false }), // Client Need 1 -> Center
    useTransform(scrollYProgress, [0.1, 0.35], [0, 1], { clamp: false }), // Client Need 2 -> Center
    useTransform(scrollYProgress, [0.2, 0.45], [0, 1], { clamp: false }), // Client Need 3 -> Center
    useTransform(scrollYProgress, [0.35, 0.6], [0, 1], { clamp: false }), // Center -> Result 1
    useTransform(scrollYProgress, [0.45, 0.7], [0, 1], { clamp: false }), // Center -> Result 2
    useTransform(scrollYProgress, [0.55, 0.8], [0, 1], { clamp: false }), // Center -> Result 3
  ];

  // Create opacity transforms for each path
  const pathOpacities = [
    useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [0, 1, 1, 0.5], { clamp: false }),
    useTransform(scrollYProgress, [0.1, 0.2, 0.35, 0.45], [0, 1, 1, 0.5], { clamp: false }),
    useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0.5], { clamp: false }),
    useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0.5], { clamp: false }),
    useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0.5], { clamp: false }),
    useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0.5], { clamp: false }),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-background-primary via-background-primary to-background-primary py-24 lg:py-32 overflow-hidden min-h-screen"
    >
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4">
            From Vision to Reality
          </h2>
          <p className="text-lg text-gray-300">
            See how we transform your needs into powerful solutions that drive results
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
            {/* Client Needs Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              <h3 className="text-[28px] font-semibold text-white mb-8 text-center lg:text-left">
                Client Needs
              </h3>
              {clientNeeds.map((need, index) => (
                <motion.div
                  key={need.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                  onClick={() => setActiveFlow(index)}
                >
                  {/* Glassmorphic Card */}
                  <div className="relative p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${need.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="relative flex items-center gap-4">
                      {/* Icon Container with Gradient */}
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${need.gradient} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full rounded-2xl bg-black/40 backdrop-blur-sm flex items-center justify-center text-2xl">
                          {need.icon}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors">
                        {need.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center: Processing Unit with Google Gemini Effect Connectors */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center justify-center py-12"
            >
              {/* Custom Google Gemini Effect Connectors */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <svg
                  className="absolute w-full h-full"
                  style={{ zIndex: 0 }}
                  viewBox="0 0 1000 600"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="gradient-connector-left" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient-connector-right" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow-connector">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Paths from Client Needs to Center */}
                  {clientNeeds.map((_, index) => {
                    const startY = 100 + index * 150; // Approximate positions for 3 boxes
                    const endX = 500;
                    const endY = 300;
                    const controlX1 = 200;
                    const controlY1 = startY;
                    const controlX2 = 350;
                    const controlY2 = endY;

                    return (
                      <g key={`path-left-${index}`}>
                        {/* Background blurred path */}
                        <motion.path
                          d={`M 0 ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="4"
                          fill="none"
                          filter="url(#glow-connector)"
                          pathLength={1}
                          style={{ opacity: pathOpacities[index] }}
                        />
                        {/* Animated foreground path */}
                        <motion.path
                          d={`M 0 ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                          stroke="url(#gradient-connector-left)"
                          strokeWidth="3"
                          fill="none"
                          style={{
                            pathLength: pathLengths[index],
                            opacity: pathOpacities[index]
                          }}
                        />
                      </g>
                    );
                  })}

                  {/* Paths from Center to Results */}
                  {results.map((_, index) => {
                    const startX = 500;
                    const startY = 300;
                    const endX = 1000;
                    const endY = 100 + index * 150;
                    const controlX1 = 650;
                    const controlY1 = startY;
                    const controlX2 = 800;
                    const controlY2 = endY;

                    return (
                      <g key={`path-right-${index}`}>
                        {/* Background blurred path */}
                        <motion.path
                          d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="4"
                          fill="none"
                          filter="url(#glow-connector)"
                          pathLength={1}
                          style={{ opacity: pathOpacities[index + 3] }}
                        />
                        {/* Animated foreground path */}
                        <motion.path
                          d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                          stroke="url(#gradient-connector-right)"
                          strokeWidth="3"
                          fill="none"
                          style={{
                            pathLength: pathLengths[index + 3],
                            opacity: pathOpacities[index + 3]
                          }}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Central Processing Unit - Glassmorphic */}
              <div className="relative z-10">
                <div className="relative w-40 h-40 rounded-3xl backdrop-blur-xl bg-white/10 border-2 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center justify-center overflow-hidden group">
                  {/* Animated Gradient Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                  {/* Icon Container */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm flex items-center justify-center text-5xl border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ⚙️
                    </motion.span>
                  </div>

                  {/* Pulsing Rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-3xl border-2 border-white/10"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                <p className="mt-6 text-sm font-semibold text-gray-300 text-center tracking-wide uppercase">
                  Our Process
                </p>
              </div>
            </motion.div>

            {/* Right: Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              <h3 className="text-[28px] font-semibold text-white mb-8 text-center lg:text-right">
                Results
              </h3>
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  {/* Glassmorphic Card */}
                  <div className="relative p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${result.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="relative flex items-center gap-4 justify-end lg:justify-start">
                      <h4 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors text-right lg:text-left">
                        {result.title}
                      </h4>
                      {/* Icon Container with Gradient */}
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${result.gradient} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full rounded-2xl bg-black/40 backdrop-blur-sm flex items-center justify-center text-2xl">
                          {result.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Services Flow (Below) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 pt-16 border-t border-white/10"
          >
            <h3 className="text-[32px] font-semibold text-white mb-12 text-center">
              Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  {/* Glassmorphic Service Card */}
                  <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 text-center overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm flex items-center justify-center text-4xl mx-auto mb-6 border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


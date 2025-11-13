"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const principles = [
  {
    id: "1",
    number: "01",
    title: "Clarity.",
    description: "We communicate simply, openly, and honestly. No jargon, no layers.",
    visual: "💬",
    gradient: "from-blue-500/30 via-cyan-500/30 to-transparent",
    bgGradient: "from-blue-500/5 via-cyan-500/5 to-transparent",
  },
  {
    id: "2",
    number: "02",
    title: "Craft.",
    description: "We obsess over design, performance, and scalability — because great code should feel invisible.",
    visual: "⚙️",
    gradient: "from-purple-500/30 via-pink-500/30 to-transparent",
    bgGradient: "from-purple-500/5 via-pink-500/5 to-transparent",
  },
  {
    id: "3",
    number: "03",
    title: "Care.",
    description: "We treat every project like our own product — your success is our success.",
    visual: "❤️",
    gradient: "from-orange-500/30 via-red-500/30 to-transparent",
    bgGradient: "from-orange-500/5 via-red-500/5 to-transparent",
  },
];

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-background-primary overflow-hidden"
    >
      {/* Dynamic Background Based on Active Principle */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${principles[activeIndex].bgGradient} transition-all duration-1000`}
        />
      </AnimatePresence>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/10 via-red-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-20 relative z-10 py-24 lg:py-32">
        {/* Main Title - Ultra Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-40 lg:mb-48"
        >
          <motion.h2
            style={{ opacity }}
            className="text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] font-medium leading-[0.8] tracking-[-0.04em] text-text-primary mb-12"
          >
            Built on
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative inline-block"
            >
              <span className="bg-gradient-to-r from-text-primary via-text-primary/90 to-text-primary bg-clip-text text-transparent">
                Principles
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="absolute -bottom-6 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-text-primary to-transparent"
              />
            </motion.span>
            <br />
            That Don't
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="italic font-light"
            >
              Compromise.
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl lg:text-3xl xl:text-4xl text-text-secondary max-w-4xl mx-auto mt-16 leading-relaxed"
          >
            We don't just deliver code — we deliver clarity, craftsmanship, and care in everything we build.
          </motion.p>
        </motion.div>

        {/* Principles - Full Width Immersive Layout */}
        <div className="space-y-48 lg:space-y-64">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-300px" }}
              transition={{ duration: 1.2, delay: index * 0.4 }}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative group"
            >
              {/* Massive Number Background - Animated */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.4 + 0.3, type: "spring", stiffness: 50 }}
                className="absolute -left-8 lg:-left-32 top-0 text-[180px] lg:text-[320px] xl:text-[400px] font-black text-text-primary/4 leading-none select-none"
              >
                {principle.number}
              </motion.div>

              {/* Content - Full Width Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">
                {/* Left: Massive Visual Element */}
                <motion.div
                  initial={{ scale: 0, rotate: -360, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.4 + 0.5,
                    type: "spring",
                    stiffness: 80,
                    damping: 20
                  }}
                  className="lg:col-span-5 flex justify-center lg:justify-start"
                >
                  <div className="relative">
                    {/* Main Visual Circle - Large */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className={`relative w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br ${principle.gradient} flex items-center justify-center text-8xl lg:text-9xl xl:text-[180px] backdrop-blur-md border-4 border-border-subtle/30 shadow-[0px_30px_100px_rgba(0,0,0,0.15)] group-hover:shadow-[0px_40px_120px_rgba(0,0,0,0.2)] transition-all duration-500`}
                    >
                      {principle.visual}
                      
                      {/* Pulsing Rings */}
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${principle.gradient} border-4 border-border-subtle/20`}
                      />
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${principle.gradient} border-4 border-border-subtle/10`}
                      />
                    </motion.div>

                    {/* Orbiting Elements - More Dynamic */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.4 + 0.7 + i * 0.05 }}
                          className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${principle.gradient} border-2 border-border-subtle/50`}
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '0 0',
                            transform: `rotate(${i * 30}deg) translateY(-180px)`,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right: Massive Text Content */}
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.4 + 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7"
                >
                  <h3 className="text-[64px] lg:text-[88px] xl:text-[100px] font-medium leading-[1.05] tracking-[-0.03em] text-text-primary mb-10">
                    {principle.title}
                  </h3>
                  <p className="text-2xl lg:text-3xl xl:text-4xl leading-[1.7] text-text-secondary max-w-3xl">
                    {principle.description}
                  </p>
                </motion.div>
              </div>

              {/* Connecting Line - More Prominent */}
              {index < principles.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.4 + 1 }}
                  className="absolute left-1/2 -translate-x-1/2 w-1 h-40 lg:h-48 bg-gradient-to-b from-border-subtle via-border-subtle/50 to-transparent mt-24 lg:mt-32"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Tagline - Ultra Large */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-48 lg:mt-56"
        >
          <p className="text-5xl lg:text-6xl xl:text-7xl font-light text-text-primary italic tracking-tight leading-tight">
            "Simple software.
            <br />
            <span className="font-medium">Serious impact."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

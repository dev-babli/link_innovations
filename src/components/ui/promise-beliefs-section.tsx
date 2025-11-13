"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const promises = [
  {
    icon: "👁️",
    title: "Transparency.",
    text: "You'll always know what's happening — no hidden layers.",
    color: "from-blue-500/20 to-cyan-500/20",
    bgColor: "from-blue-500/8 to-cyan-500/8",
  },
  {
    icon: "⏱️",
    title: "Reliability.",
    text: "We deliver on time, or communicate early.",
    color: "from-purple-500/20 to-pink-500/20",
    bgColor: "from-purple-500/8 to-pink-500/8",
  },
  {
    icon: "🤝",
    title: "Partnership.",
    text: "We grow when you do — your goals are ours.",
    color: "from-orange-500/20 to-red-500/20",
    bgColor: "from-orange-500/8 to-red-500/8",
  },
];

const beliefs = [
  {
    icon: "💡",
    principle: "Technology should simplify, not complicate.",
    description: "We design products that make life easier — not harder.",
    color: "from-yellow-500/20 to-amber-500/20",
    bgColor: "from-yellow-500/8 to-amber-500/8",
  },
  {
    icon: "🔗",
    principle: "Partnerships should outlast projects.",
    description: "We're here for the journey, not just the launch.",
    color: "from-green-500/20 to-emerald-500/20",
    bgColor: "from-green-500/8 to-emerald-500/8",
  },
  {
    icon: "🔍",
    principle: "Transparency builds trust.",
    description: "We stay open in process, pricing, and communication.",
    color: "from-indigo-500/20 to-blue-500/20",
    bgColor: "from-indigo-500/8 to-blue-500/8",
  },
];

export function PromiseBeliefsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), {
    stiffness: 100,
    damping: 30,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#F5F3EF] overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M75 75m-60 0a60 60 0 1 1 120 0a60 60 0 1 1 -120 0' stroke='%23000000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
        />
        
        {/* Floating Orbs - More Dynamic */}
        <motion.div
          animate={{ 
            y: [0, -50, 0], 
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/6 to-cyan-500/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0], 
            x: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/6 to-pink-500/6 rounded-full blur-3xl"
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
            Our Promise
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative inline-block"
            >
              <span className="italic font-light">&</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="absolute -bottom-6 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-text-primary to-transparent"
              />
            </motion.span>
            <br />
            What We
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="bg-gradient-to-r from-text-primary via-text-primary/90 to-text-primary bg-clip-text text-transparent"
            >
              Believe.
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl lg:text-3xl xl:text-4xl text-text-secondary max-w-4xl mx-auto mt-16 leading-relaxed"
          >
            We believe long-term success comes from trust, simplicity, and shared values.
          </motion.p>
        </motion.div>

        {/* Split Layout - Full Width with Visual Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 mb-40 lg:mb-48">
          {/* Left: Our Promise */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20"
          >
            <div className="mb-16">
              <h3 className="text-[56px] lg:text-[64px] xl:text-[72px] font-medium leading-[1.1] tracking-[-0.025em] text-text-primary mb-8">
                ✳️ Our Promise
              </h3>
              <div className="w-40 h-2 bg-gradient-to-r from-text-primary via-text-primary/80 to-transparent" />
            </div>

            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Background Gradient - More Visible */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${promise.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}
                />
                
                <div className="relative flex items-start gap-10 p-8 lg:p-10 rounded-3xl border-2 border-border-subtle/30 bg-background-secondary/60 backdrop-blur-md group-hover:border-border-subtle transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="text-7xl lg:text-8xl xl:text-9xl flex-shrink-0"
                  >
                    {promise.icon}
                  </motion.div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-[40px] lg:text-[48px] xl:text-[56px] font-medium leading-[1.15] tracking-[-0.02em] text-text-primary mb-6">
                      {promise.title}
                    </h4>
                    <p className="text-2xl lg:text-3xl leading-[1.7] text-text-secondary">
                      {promise.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: What We Believe */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20"
          >
            <div className="mb-16">
              <h3 className="text-[56px] lg:text-[64px] xl:text-[72px] font-medium leading-[1.1] tracking-[-0.025em] text-text-primary mb-8">
                🌿 What We Believe
              </h3>
              <div className="w-40 h-2 bg-gradient-to-r from-text-primary via-text-primary/80 to-transparent" />
            </div>

            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Background Gradient - More Visible */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${belief.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}
                />
                
                <div className="relative flex items-start gap-10 p-8 lg:p-10 rounded-3xl border-2 border-border-subtle/30 bg-background-secondary/60 backdrop-blur-md group-hover:border-border-subtle transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="text-7xl lg:text-8xl xl:text-9xl flex-shrink-0"
                  >
                    {belief.icon}
                  </motion.div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-[36px] lg:text-[40px] xl:text-[44px] font-medium leading-[1.3] tracking-[-0.015em] text-text-primary mb-6">
                      {belief.principle}
                    </h4>
                    <p className="text-2xl lg:text-3xl leading-[1.7] text-text-secondary">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Founder Note - Ultra Large and Elegant */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto text-center relative"
        >
          {/* Decorative Quote Mark - Massive */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6, type: "spring", stiffness: 50 }}
            className="absolute -top-16 -left-8 lg:-left-20 text-[200px] lg:text-[300px] text-text-primary/6 font-serif leading-none select-none"
          >
            "
          </motion.div>

          <blockquote className="text-4xl lg:text-5xl xl:text-6xl leading-[1.5] text-text-primary italic font-light mb-16 relative z-10">
            "We started Link Innovations to bring honesty and craftsmanship back into software.
            <br className="hidden lg:block" />
            We stay small to stay personal — and we deliver like your in-house team."
          </blockquote>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
            className="flex items-center justify-center gap-8 pt-16 border-t-2 border-border-subtle"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-text-primary/25 via-text-primary/20 to-text-primary/15 flex items-center justify-center text-3xl font-medium text-text-primary border-4 border-border-subtle/50 shadow-xl"
            >
              SB
            </motion.div>
            <div className="text-left">
              <p className="text-2xl font-medium text-text-primary mb-1">
                Srikanta Barik
              </p>
              <p className="text-xl text-text-secondary">
                Director of Engineering
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

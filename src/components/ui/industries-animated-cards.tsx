"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCard } from "@/components/ui/feature-block-animated-card";
import { Building2, ShoppingCart, Heart, Briefcase, GraduationCap, Plane, Factory, Zap } from "lucide-react";

const industries = [
  {
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant solutions for modern healthcare platforms and medical technology",
    icons: [
      { icon: <Heart className="w-4 h-4 text-blue-600" />, size: "sm" as const },
      { icon: <Heart className="w-6 h-6 text-blue-600" />, size: "md" as const },
      { icon: <Heart className="w-8 h-8 text-blue-600" />, size: "lg" as const },
      { icon: <Heart className="w-6 h-6 text-blue-600" />, size: "md" as const },
      { icon: <Heart className="w-4 h-4 text-blue-600" />, size: "sm" as const },
    ],
  },
  {
    title: "Manufacturing & Automotive",
    description: "Smart manufacturing and Industry 4.0 solutions for industrial operations",
    icons: [
      { icon: <Factory className="w-4 h-4 text-indigo-600" />, size: "sm" as const },
      { icon: <Factory className="w-6 h-6 text-indigo-600" />, size: "md" as const },
      { icon: <Factory className="w-8 h-8 text-indigo-600" />, size: "lg" as const },
      { icon: <Factory className="w-6 h-6 text-indigo-600" />, size: "md" as const },
      { icon: <Factory className="w-4 h-4 text-indigo-600" />, size: "sm" as const },
    ],
  },
  {
    title: "Banking & Finance",
    description: "Secure fintech and banking platforms with advanced security measures",
    icons: [
      { icon: <Briefcase className="w-4 h-4 text-green-600" />, size: "sm" as const },
      { icon: <Briefcase className="w-6 h-6 text-green-600" />, size: "md" as const },
      { icon: <Briefcase className="w-8 h-8 text-green-600" />, size: "lg" as const },
      { icon: <Briefcase className="w-6 h-6 text-green-600" />, size: "md" as const },
      { icon: <Briefcase className="w-4 h-4 text-green-600" />, size: "sm" as const },
    ],
  },
  {
    title: "Retail & E-commerce",
    description: "Scalable online marketplaces and retail solutions for modern commerce",
    icons: [
      { icon: <ShoppingCart className="w-4 h-4 text-purple-600" />, size: "sm" as const },
      { icon: <ShoppingCart className="w-6 h-6 text-purple-600" />, size: "md" as const },
      { icon: <ShoppingCart className="w-8 h-8 text-purple-600" />, size: "lg" as const },
      { icon: <ShoppingCart className="w-6 h-6 text-purple-600" />, size: "md" as const },
      { icon: <ShoppingCart className="w-4 h-4 text-purple-600" />, size: "sm" as const },
    ],
  },
  {
    title: "Education & E-learning",
    description: "Interactive learning platforms and educational technology solutions",
    icons: [
      { icon: <GraduationCap className="w-4 h-4 text-orange-600" />, size: "sm" as const },
      { icon: <GraduationCap className="w-6 h-6 text-orange-600" />, size: "md" as const },
      { icon: <GraduationCap className="w-8 h-8 text-orange-600" />, size: "lg" as const },
      { icon: <GraduationCap className="w-6 h-6 text-orange-600" />, size: "md" as const },
      { icon: <GraduationCap className="w-4 h-4 text-orange-600" />, size: "sm" as const },
    ],
  },
  {
    title: "Logistics & Transportation",
    description: "Transportation and logistics management platforms for efficient operations",
    icons: [
      { icon: <Plane className="w-4 h-4 text-cyan-600" />, size: "sm" as const },
      { icon: <Plane className="w-6 h-6 text-cyan-600" />, size: "md" as const },
      { icon: <Plane className="w-8 h-8 text-cyan-600" />, size: "lg" as const },
      { icon: <Plane className="w-6 h-6 text-cyan-600" />, size: "md" as const },
      { icon: <Plane className="w-4 h-4 text-cyan-600" />, size: "sm" as const },
    ],
  },
];

export default function IndustriesAnimatedCards() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Text reveal animation variants
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  // Card slide in variants (alternating from left and right)
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 30,
      scale: 0.95,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    exit: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with pill design and text reveal */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={textRevealVariants}
            custom={0}
            className="mb-4 inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 shadow-sm border border-gray-200/50"
          >
            <p className="text-xs font-medium text-[#000000] uppercase tracking-wider">INDUSTRIES</p>
          </motion.div>
          
          <motion.h2
            variants={textRevealVariants}
            custom={1}
            className="text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl mb-4"
          >
            Industries We Serve
          </motion.h2>
          
          <motion.p
            variants={textRevealVariants}
            custom={2}
            className="text-lg leading-8 text-[#000000] max-w-3xl mx-auto"
          >
            We deliver tailored technology solutions across diverse industries, helping businesses transform digitally and achieve measurable results.
          </motion.p>
        </motion.div>

        {/* Industries Grid with slide-in animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              variants={cardVariants}
              viewport={{ once: true, margin: "-50px" }}
            >
              <AnimatedCard
                title={industry.title}
                description={industry.description}
                icons={industry.icons}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


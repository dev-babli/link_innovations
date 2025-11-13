"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Building2, ShoppingCart, Heart, Briefcase, GraduationCap, Plane, Factory, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Skiper52 = () => {
  const industries = [
    {
      src: "/images/industry_cards/Aerospace and Defense.webp",
      alt: "Aerospace Technology",
      title: "Aerospace & Defense",
      description: "Advanced aerospace and defense solutions for mission-critical operations",
      icon: Building2,
      projects: "50+ Projects",
      color: "from-blue-400 to-blue-600",
    },
    {
      src: "/images/industry_cards/Retail and Ecommerce.webp",
      alt: "E-Commerce Solutions",
      title: "E-Commerce",
      description: "Scalable online stores and marketplace solutions for modern retail",
      icon: ShoppingCart,
      projects: "80+ Projects",
      color: "from-purple-400 to-purple-600",
    },
    {
      src: "/images/industry_cards/Healthcar and Lifesciences.webp",
      alt: "Healthcare Technology",
      title: "Healthcare",
      description: "HIPAA-compliant medical platforms and health tech solutions",
      icon: Heart,
      projects: "40+ Projects",
      color: "from-pink-400 to-pink-600",
    },
    {
      src: "/images/industry_cards/Baking and Financial.webp",
      alt: "Financial Technology",
      title: "FinTech",
      description: "Secure financial technology and payment processing solutions",
      icon: Briefcase,
      projects: "60+ Projects",
      color: "from-green-400 to-green-600",
    },
    {
      src: "/images/industry_cards/Education and Training.webp",
      alt: "Educational Technology",
      title: "Education",
      description: "E-learning platforms and educational technology solutions",
      icon: GraduationCap,
      projects: "45+ Projects",
      color: "from-orange-400 to-orange-600",
    },
    {
      src: "/images/industry_cards/Logotstic and Transportation.webp",
      alt: "Logistics Technology",
      title: "Logistics",
      description: "Transportation and logistics management platforms",
      icon: Plane,
      projects: "35+ Projects",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      src: "/images/industry_cards/Manufacturing and Automotive.webp",
      alt: "Manufacturing Technology",
      title: "Manufacturing",
      description: "IoT and automation solutions for industrial operations",
      icon: Factory,
      projects: "55+ Projects",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      src: "/images/industry_cards/Energy and Utilities.webp",
      alt: "Energy & Utilities",
      title: "Energy & Utilities",
      description: "Smart grid and energy management solutions",
      icon: Zap,
      projects: "30+ Projects",
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with pill design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
            <p className="text-xs font-medium text-[#000000] uppercase tracking-wider">INDUSTRIES</p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg leading-8 text-[#000000] max-w-3xl mx-auto">
            We deliver tailored technology solutions across diverse industries, helping businesses transform digitally and achieve measurable results.
          </p>
        </motion.div>
        <HoverExpand_001 className="" industries={industries} />
      </div>
    </section>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  industries,
  className,
}: {
  industries: {
    src: string;
    alt: string;
    title: string;
    description: string;
    icon: any;
    projects: string;
    color: string;
  }[];
  className?: string;
}) => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-7xl mx-auto", className)}
    >
      <div className="flex w-full items-center justify-center gap-3 md:gap-4 overflow-x-auto pb-4">
        {industries.map((industry, index) => {
          const IconComponent = industry.icon;
          const isActive = activeIndustry === index;
          return (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl group"
              initial={{ width: "12rem", height: "20rem" }}
              animate={{
                width: isActive ? "28rem" : "12rem",
                height: "20rem",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => setActiveIndustry(index)}
              onHoverStart={() => setActiveIndustry(index)}
            >
              {/* Shadow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-b from-black/8 via-black/4 to-transparent blur-2xl rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 -z-10" />
              
              {/* Card */}
              <div className={cn(
                "relative h-full w-full rounded-3xl overflow-hidden",
                "bg-white",
                "border border-gray-200/80",
                "shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]",
                "group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,1)]",
                "transition-all duration-500"
              )}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={industry.src}
                    alt={industry.alt}
                    fill
                    className={cn(
                      "object-cover transition-all duration-500",
                      isActive ? "scale-100" : "scale-110"
                    )}
                  />
                  {/* Subtle overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
                    isActive ? "from-black/50 via-black/10 to-transparent opacity-100" : "from-black/30 to-transparent opacity-60"
                  )} />
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-start justify-end p-6 z-20"
                    >
                      {/* Glassmorphism content panel */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="w-full bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={cn("p-2.5 rounded-xl bg-gradient-to-br", industry.color, "shadow-lg")}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xs font-medium text-[#1a1a1a] bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
                            {industry.projects}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                          {industry.title}
                        </h3>
                        <p className="text-sm text-[#666666] leading-relaxed">
                          {industry.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10"
                    >
                      <div className={cn("p-3 rounded-xl bg-gradient-to-br shadow-md", industry.color)}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <p className="mt-3 text-xs font-semibold text-white text-center line-clamp-1 drop-shadow-lg">
                        {industry.title}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export { HoverExpand_001 };

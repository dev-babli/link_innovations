"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaTools,
  FaProjectDiagram,
  FaDatabase,
  FaRobot,
  FaUsersCog,
} from "react-icons/fa";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Web Application Development",
    description: "Scalable, high-performance web apps tailored to your goals.",
    icon: FaCode,
    image: "/images/services/web-development/hero-web-development.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform apps with React Native that feel native everywhere.",
    icon: FaMobile,
    image: "/images/services/mobile-app-development/hero-mobile-apps.jpg",
  },
  {
    id: 3,
    title: "Custom Software Solutions",
    description: "Tailored tools and platforms that simplify your business.",
    icon: FaTools,
    image: "/images/services/ai-automation/hero-ai-automation.jpg",
  },
];

const processSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: "Define clear objectives, identify high-impact use-cases, and assess current capabilities to build a strategic roadmap for transformation.",
    icon: FaProjectDiagram,
  },
  {
    id: 2,
    title: "Design & Prototype",
    description: "Create user-centered designs and interactive prototypes to validate concepts before development begins.",
    icon: FaDatabase,
  },
  {
    id: 3,
    title: "Development & QA",
    description: "Design and build custom solutions tailored to business needs, leveraging advanced techniques and rigorous quality assurance.",
    icon: FaRobot,
  },
  {
    id: 4,
    title: "Optimization & Scale",
    description: "Foster team enablement, embed governance frameworks, and sustain value through continuous optimization and adoption.",
    icon: FaUsersCog,
  },
];

export function ServicesWithProcess() {
  const [activeService, setActiveService] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeServiceData = services[activeService];
  const ServiceIcon = activeServiceData.icon;
  const activeStepData = processSteps[activeStep];
  const StepIcon = activeStepData.icon;

  return (
    <section className="relative py-24 lg:py-32 bg-background-primary">
      <div className="container mx-auto max-w-7xl px-6 lg:px-20">
        {/* Section Header - Matching MVerticalCard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
            Transform Your Business
          </h2>
          <p className="text-large-paragraph text-text-secondary">
            A comprehensive approach to digital transformation, from strategy to scale
          </p>
        </motion.div>

        {/* Services Selection - Matching Page Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeService === idx;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => {
                    setActiveService(idx);
                    setActiveStep(0);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative rounded-2xl p-6 border transition-all duration-300 text-left ${
                    isActive
                      ? "bg-background-secondary border-border-subtle shadow-[0px_8px_32px_rgba(0,0,0,0.12)]"
                      : "bg-background-primary border-border-subtle hover:border-border-subtle hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-text-primary text-background-primary"
                          : "bg-background-secondary text-text-secondary group-hover:text-text-primary"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3
                        className={`text-lg font-medium transition-colors duration-300 mb-1 ${
                          isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-[1.5]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Content Grid - Matching MVerticalCard Structure */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">
          {/* Left: Navigation - Matching MVerticalCard Style */}
          <div className="relative">
            <div className="sticky top-32 space-y-2">
              {processSteps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;

                return (
                  <motion.button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className="group relative w-full text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    {/* Enhanced shadow behind card for glassmorphic depth */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "shadow-[0px_16px_64px_rgba(0,0,0,0.15),0px_8px_32px_rgba(0,0,0,0.1),0px_4px_16px_rgba(0,0,0,0.08)]"
                        : "shadow-[0px_8px_32px_rgba(0,0,0,0.08),0px_4px_16px_rgba(0,0,0,0.06),0px_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0px_16px_64px_rgba(0,0,0,0.12),0px_8px_32px_rgba(0,0,0,0.08),0px_4px_16px_rgba(0,0,0,0.06)]"
                      }`} />

                    <div
                      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 backdrop-blur-xl border mvertical-card-box-bg ${
                        isActive
                          ? "mvertical-card-box-bg-active mvertical-card-box-border-active shadow-[0px_12px_48px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.6)_inset,0_4px_20px_rgba(255,255,255,0.4)_inset] scale-[1.02]"
                          : "mvertical-card-box-border shadow-[0px_6px_24px_rgba(0,0,0,0.06),0_0_0_1px_rgba(255,255,255,0.4)_inset,0_2px_12px_rgba(255,255,255,0.3)_inset] hover:mvertical-card-box-bg-hover hover:mvertical-card-box-border-active hover:shadow-[0px_12px_48px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.5)_inset,0_4px_20px_rgba(255,255,255,0.35)_inset] hover:scale-[1.01]"
                        }`}
                    >
                      {/* Content - Just heading */}
                      <div className="relative flex items-center gap-4">
                        {/* Icon - Enhanced Glassmorphic with transparent background and blur */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md border mvertical-card-icon-bg ${
                            isActive
                              ? "mvertical-card-icon-bg-active mvertical-card-icon-border-active shadow-[0px_6px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.7)_inset,0_3px_12px_rgba(255,255,255,0.5)_inset] scale-105"
                              : "mvertical-card-icon-border shadow-[0px_3px_12px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.4)_inset,0_1px_6px_rgba(255,255,255,0.3)_inset] group-hover:mvertical-card-icon-bg-hover group-hover:mvertical-card-icon-border-active group-hover:shadow-[0px_6px_20px_rgba(0,0,0,0.07),0_0_0_1px_rgba(255,255,255,0.6)_inset,0_3px_12px_rgba(255,255,255,0.4)_inset] group-hover:scale-105"
                            }`}
                        >
                          <StepIcon className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-text-primary scale-110" : "text-text-secondary group-hover:text-text-primary group-hover:scale-110"}`} />
                        </div>

                        {/* Text - Just heading */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`text-lg font-medium transition-colors duration-300 ${
                              isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                            }`}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Active indicator line - Refined */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-text-primary rounded-r-full shadow-[0px_0px_8px_rgba(0,0,0,0.2)]"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right: Content Display - Matching MVerticalCard */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeService}-${activeStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Premium Card Container with Image and Overlay */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-background-secondary shadow-[0px_2px_8px_rgba(0,0,0,0.06)] border border-black/[.04] transition-all duration-300 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)]">
                  {/* Background Image */}
                  <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeServiceData.image}
                      alt={activeServiceData.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 70vw"
                    />
                  </motion.div>

                  {/* Premium Gradient Overlay - Refined and subtle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/20" />

                  {/* Content Overlay - Bottom aligned, premium spacing */}
                  <div className="absolute inset-0 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 p-8 lg:p-12 xl:p-16"
                    >
                      {/* Content */}
                      <div className="relative max-w-3xl">
                        {/* Service Badge */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <ServiceIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-medium uppercase tracking-[0.02em] text-white/80">
                              {activeServiceData.title}
                            </span>
                          </div>
                        </div>

                        {/* Header Section */}
                        <div className="flex items-start gap-6 mb-6">
                          {/* Icon Badge - Premium and refined */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                            className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                          >
                            <StepIcon className="w-7 h-7 text-white" />
                          </motion.div>

                          {/* Title Section */}
                          <div className="flex-1 min-w-0">
                            <div className="mb-3">
                              <span className="text-xs font-medium uppercase tracking-[0.02em] text-white/80">
                                Step {activeStepData.id}
                              </span>
                            </div>
                            <motion.h3
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4, duration: 0.5 }}
                              className="text-[40px] lg:text-[48px] font-medium leading-[1.2] tracking-[-0.01em] text-white mb-4"
                            >
                              {activeStepData.title}
                            </motion.h3>
                          </div>
                        </div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className="text-lg lg:text-xl text-white/90 leading-[1.6]"
                        >
                          {activeStepData.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Step Counter */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {processSteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`transition-all duration-300 ${
                        idx === activeStep
                          ? "w-8 h-1.5 rounded-full bg-text-primary"
                          : "w-1.5 h-1.5 rounded-full bg-text-secondary hover:bg-text-primary"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

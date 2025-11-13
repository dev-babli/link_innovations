"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    name: "Web Development",
    title: "Modern, Responsive Web Applications",
    description:
      "Build scalable, high-performance web applications with React, Next.js, and cutting-edge technologies. From enterprise portals to e-commerce platforms, we deliver solutions that drive business growth.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AI & Machine Learning",
    title: "Intelligent Automation Solutions",
    description:
      "Transform your business with AI-powered automation, predictive analytics, and machine learning models. Our solutions help you make data-driven decisions and optimize operations.",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cloud Solutions & DevOps",
    title: "Scalable Cloud Infrastructure",
    description:
      "Deploy and scale your infrastructure on AWS, Azure, and GCP with enterprise-grade DevOps practices. Achieve 99.9% uptime with automated deployments and monitoring.",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mobile Applications",
    title: "Native & Cross-Platform Apps",
    description:
      "Create powerful mobile experiences for iOS and Android with React Native and Flutter. Deliver seamless user experiences with offline-first architecture and real-time synchronization.",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Data Analytics",
    title: "Business Intelligence & Dashboards",
    description:
      "Turn data into actionable insights with advanced analytics, real-time dashboards, and business intelligence tools. Make informed decisions with comprehensive reporting and visualization.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cybersecurity",
    title: "Enterprise Security & Compliance",
    description:
      "Protect your business with comprehensive cybersecurity solutions including penetration testing, compliance audits, and 24/7 threat monitoring. Stay secure with industry-leading security practices.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export interface FeaturesCarouselProps {
  className?: string;
}

export function FeaturesCarousel({ className }: FeaturesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % features.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + features.length) % features.length
    );

  const currentFeature = features[currentIndex];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Feature Image */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0 shadow-lg'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentFeature.imageUrl}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentFeature.imageUrl}
                alt={currentFeature.name}
                width={470}
                height={470}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Card */}
        <div className='bg-white dark:bg-card rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentFeature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  {currentFeature.name}
                </h2>

                <p className='text-sm font-medium text-gray-700 dark:text-gray-500'>
                  {currentFeature.title}
                </p>
              </div>

              <p className='text-black dark:text-white text-base leading-relaxed mb-8'>
                {currentFeature.description}
              </p>

              <div className='flex items-center gap-2'>
                <span className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full'>
                  Learn More
                </span>
                <span className='text-xs text-gray-500 dark:text-gray-400'>
                  {currentIndex + 1} of {features.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>
        {/* Feature Image */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6 shadow-lg'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentFeature.imageUrl}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentFeature.imageUrl}
                alt={currentFeature.name}
                width={400}
                height={400}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Card content */}
        <div className='px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentFeature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                {currentFeature.name}
              </h2>
              
              <p className='text-sm font-medium text-gray-600 dark:text-gray-300 mb-4'>
                {currentFeature.title}
              </p>
              
              <p className='text-black dark:text-white text-sm leading-relaxed mb-6'>
                {currentFeature.description}
              </p>
              
              <div className='flex items-center justify-center gap-2'>
                <span className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full'>
                  Learn More
                </span>
                <span className='text-xs text-gray-500 dark:text-gray-400'>
                  {currentIndex + 1} of {features.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-8'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous feature'
          className='w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card/80 transition-colors cursor-pointer'
        >
          <ChevronLeft className='w-6 h-6 text-gray-700 dark:text-gray-50' />
        </button>

        {/* Dots */}
        <div className='flex gap-2'>
          {features.map((_, featureIndex) => (
            <button
              key={featureIndex}
              onClick={() => setCurrentIndex(featureIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                featureIndex === currentIndex
                  ? "bg-gray-900 dark:bg-white"
                  : "bg-gray-400 dark:bg-gray-600"
              )}
              aria-label={`Go to feature ${featureIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next feature'
          className='w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card/80 transition-colors cursor-pointer'
        >
          <ChevronRight className='w-6 h-6 text-gray-700 dark:text-gray-50' />
        </button>
      </div>
    </div>
  );
}


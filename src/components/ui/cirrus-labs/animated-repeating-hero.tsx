"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroText = "Getting AI into Production, Safely.";

export default function AnimatedRepeatingHero() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative h-24 md:h-32 lg:h-40 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.6,
                    delay: index === 1 ? 0 : index === 2 ? 2 : 4,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                    {heroText}
                  </h1>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}




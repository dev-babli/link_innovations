"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  "Google", "Microsoft", "Amazon", "Apple", "Meta", "Tesla", "IBM", "Oracle",
  "Salesforce", "Adobe", "Netflix", "Spotify", "Uber", "Airbnb"
];

// Create enough duplicates for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function LogoMarquee() {
  const logoWidth = 160; // width + gap
  const scrollDistance = logos.length * logoWidth;

  return (
    <section className="relative bg-white py-12 overflow-hidden border-y border-gray-200">
      <div className="relative flex w-full">
        <motion.div
          className="flex shrink-0 gap-8 items-center"
          animate={{
            x: [0, -scrollDistance],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex shrink-0 items-center justify-center w-32 h-16 bg-gray-100 rounded-lg grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <span className="text-gray-400 text-xs font-medium">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


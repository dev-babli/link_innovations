"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function OrbHero() {
  const clientLogos = [
    "/images/logos/google.png",
    "/images/logos/microsoft.png",
    "/images/logos/amazon.png",
  ];

  return (
    <section className="relative min-h-screen bg-orb-dark overflow-hidden flex items-center">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orb-purple/30 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orb-blue/30 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orb-card backdrop-blur-xl border border-orb-border text-orb-light text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue animate-pulse"></span>
              IT AUTOMATION FOR BUSINESSES
            </span>
          </motion.div>

          {/* Main Headline with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1]"
          >
            <span className="block text-white mb-2">LINK AI</span>
            <span className="bg-gradient-to-r from-orb-purple via-orb-accent to-orb-blue bg-clip-text text-transparent animate-gradient-x">
              Custom IT solutions, built for the innovators of tomorrow
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-orb-light max-w-3xl mx-auto mb-10"
          >
            "We harness your data, understand your audience, and use technology to help your brand rise above the noise. The best part? We execute, too."
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue text-white font-semibold hover:shadow-2xl hover:shadow-orb-purple/50 transition-all flex items-center gap-2"
            >
              Get Template
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full bg-orb-card backdrop-blur-xl border border-orb-border text-white font-semibold hover:bg-orb-border transition-all"
            >
              See Our Services
            </Link>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 opacity-50"
          >
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orb-dark to-transparent"></div>
    </section>
  );
}











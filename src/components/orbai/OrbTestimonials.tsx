"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export function OrbTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Link Innovations transformed our entire IT infrastructure. Their team's expertise and dedication resulted in a 60% increase in operational efficiency.",
      author: "Sarah Chen",
      position: "CTO",
      company: "TechCorp Global",
      rating: 5,
    },
    {
      quote: "The custom software solution they built for us exceeded all expectations. It's intuitive, scalable, and has become essential to our daily operations.",
      author: "Michael Rodriguez",
      position: "CEO",
      company: "InnovateLab",
      rating: 5,
    },
    {
      quote: "Outstanding cybersecurity implementation. We feel confident knowing our data and systems are protected by the best in the industry.",
      author: "Emily Watson",
      position: "Director of IT",
      company: "SecureBank",
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-24 bg-orb-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orb-purple/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orb-blue/20 rounded-full blur-[128px]"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-12 rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-orb-accent text-orb-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-white text-center mb-8 leading-relaxed">
                "{current.quote}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="text-lg font-bold text-white">{current.author}</p>
                <p className="text-orb-light">
                  {current.position} at {current.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-orb-card border border-orb-border hover:bg-orb-border flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-orb-card border border-orb-border hover:bg-orb-border flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orb-purple to-orb-blue w-8"
                    : "bg-orb-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}











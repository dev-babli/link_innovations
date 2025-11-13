"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OverlappingCardsCarousel from "@/components/ui/overlapping-cards-carousel";

export function PhilosophyPromiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background-primary overflow-hidden py-24 lg:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-20 relative z-10">
        {/* Overlapping Cards Carousel */}
        <div className="mb-20">
          <OverlappingCardsCarousel />
        </div>

        {/* Founder's Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8 lg:p-12 rounded-2xl bg-background-secondary border border-border-subtle shadow-[0px_2px_8px_rgba(0,0,0,0.06)] text-center max-w-4xl mx-auto"
        >
          <span className="absolute top-4 left-4 text-[80px] font-serif text-text-secondary/20 leading-none">"</span>
          <p className="text-xl lg:text-2xl font-medium text-text-primary italic">
            "I started Link Innovations to bring honesty and craftsmanship back into software development. We may be a small team, but that's our strength — every project gets direct attention, not layers of management. We treat every line of code like it powers our own product."
          </p>
          <span className="absolute bottom-4 right-4 text-[80px] font-serif text-text-secondary/20 leading-none rotate-180">"</span>
        </motion.div>
      </div>
    </section>
  );
}


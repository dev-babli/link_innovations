"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function OrbStats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 150, suffix: "+", label: "Team Members" },
    { value: 10, suffix: "M+", label: "Lines of Code" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let step = 0;
      const increment = stat.value / steps;
      
      const timer = setInterval(() => {
        step++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.round(increment * step), stat.value);
          return newCounts;
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, [inView]);

  return (
    <section ref={sectionRef} className="relative py-24 bg-orb-darker">
      <div className="absolute inset-0 bg-gradient-to-r from-orb-purple/10 via-transparent to-orb-blue/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border"
            >
              <div className="text-5xl lg:text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-orb-purple to-orb-blue bg-clip-text text-transparent">
                  {counts[index]}
                  {stat.suffix}
                </span>
              </div>
              <p className="text-orb-light">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}











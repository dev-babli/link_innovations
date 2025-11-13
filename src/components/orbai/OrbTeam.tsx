"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function OrbTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const team = [
    {
      name: "Alex Johnson",
      role: "Chief Technology Officer",
      image: "/images/homepage/team-1.webp",
    },
    {
      name: "Sarah Martinez",
      role: "Head of Cloud Solutions",
      image: "/images/homepage/team-2.webp",
    },
    {
      name: "David Chen",
      role: "Cybersecurity Director",
      image: "/images/homepage/team-3.webp",
    },
    {
      name: "Emily Roberts",
      role: "Lead Software Architect",
      image: "/images/homepage/team-4.webp",
    },
    {
      name: "Michael Brown",
      role: "DevOps Manager",
      image: "/images/homepage/hero-image.webp",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-24 bg-orb-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">TEAM</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Meet Our Experts</h2>
          <p className="text-orb-light text-lg">Talented professionals driving innovation</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-80 snap-start"
              >
                <div className="group relative rounded-3xl bg-orb-card backdrop-blur-xl border border-orb-border overflow-hidden hover:border-orb-purple/50 transition-all">
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orb-dark via-orb-dark/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-orb-light">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-orb-card border border-orb-border hover:bg-orb-border flex items-center justify-center transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-orb-card border border-orb-border hover:bg-orb-border flex items-center justify-center transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}











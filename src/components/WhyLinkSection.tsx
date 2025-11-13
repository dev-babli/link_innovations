"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import Image from "next/image";

type Stage = {
  title: string;
  desc: string;
  image: string;
  gradient: string; // CSS gradient for this stage
};

const stages: Stage[] = [
  {
    title: "Ideate",
    desc: "Collaborate to define opportunities, map digital experiences, and shape the innovation journey.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    gradient: "linear-gradient(120deg, rgba(10,10,20,0.85), rgba(20,30,80,0.65))",
  },
  {
    title: "Build",
    desc: "Develop and integrate custom AI-driven systems and tools tailored to your enterprise needs.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80",
    gradient: "linear-gradient(120deg, rgba(8,18,40,0.85), rgba(60,20,90,0.6))",
  },
  {
    title: "Deploy",
    desc: "Launch intelligent digital solutions that streamline workflows and accelerate time to value.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    gradient: "linear-gradient(120deg, rgba(30,8,40,0.85), rgba(90,10,50,0.6))",
  },
  {
    title: "Optimize",
    desc: "Monitor, analyze, and continuously refine your digital ecosystem for performance and scale.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    gradient: "linear-gradient(120deg, rgba(0,0,0,0.9), rgba(20,20,60,0.6))",
  },
];

const GradientLayer: React.FC<{
  stage: Stage;
  index: number;
  total: number;
  progress: MotionValue<number>;
}> = ({ stage, index, total, progress }) => {
  const start = index / total;
  const mid = start + 1 / (total * 2);
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);

  return (
    <motion.div style={{ opacity }} aria-hidden className="absolute inset-0">
      <div style={{ background: stage.gradient, mixBlendMode: "screen" }} className="w-full h-full" />
      <div className="absolute inset-0 bg-black/40" />
    </motion.div>
  );
};

const StageSlide: React.FC<{
  stage: Stage;
  index: number;
  total: number;
  progress: MotionValue<number>;
}> = ({ stage, index, total, progress }) => {
  const start = index / total;
  const mid = start + 1 / (total * 2);
  const end = (index + 1) / total;

  const translateY = useTransform(progress, [start, mid, end], ["60px", "0px", "-20px"]);
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);
  const scale = useTransform(progress, [start, mid, end], [0.98, 1, 1.02]);
  const mediaTranslate = useTransform(progress, [start, end], ["0px", "-12px"]);

  return (
    <motion.article
      style={{ y: translateY, opacity, scale }}
      className="absolute inset-0 flex flex-col md:flex-row items-center justify-center"
    >
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-6">
        <motion.div
          style={{ y: mediaTranslate }}
          className="w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/6"
        >
          <Image
            src={stage.image}
            alt={`${stage.title} stage visual`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 p-6 md:pl-12">
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{stage.title}</h3>
          <p className="text-gray-200 leading-relaxed">{stage.desc}</p>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <span className="w-2 h-2 rounded-full bg-yellow-300" aria-hidden />
        <span className="text-xs uppercase tracking-[0.3em] text-gray-200">
          Stage {index + 1} of {total}
        </span>
      </div>
    </motion.article>
  );
};

export default function WhyLinkInnovationsEnhanced() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[300vh] md:min-h-[400vh] overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Gradient layers (one per stage) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {stages.map((stage, index) => (
          <GradientLayer
            key={`grad-${index}`}
            stage={stage}
            index={index}
            total={stages.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* Fixed heading */}
      <div className="sticky top-16 z-30 text-center pt-6 pb-4">
        <h3 id="why-heading" className="text-sm tracking-widest text-yellow-400 uppercase">
          Why Link Innovations
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 max-w-3xl mx-auto">
          The Power of Innovation at Every Stage of Digital Lifecycle
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto px-4">
          Delight customers, empower employees and provide useful insights to leaders with our
          agentic, data-driven platform.
        </p>
      </div>

      {/* Sticky stacking area */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-20">
        <div className="relative w-full max-w-[1300px] px-6 md:px-12">
          {stages.map((stage, index) => (
            <StageSlide
              key={stage.title}
              stage={stage}
              index={index}
              total={stages.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Spacer area so user can scroll through all stages */}
      <div className="h-[200vh] md:h-[300vh]" />
    </section>
  );
}

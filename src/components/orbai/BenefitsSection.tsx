'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { BenefitCard, MarqueeTicker } from './index';
import { animations } from './animations';

const benefits = [
  "Faster Innovation",
  "Virtual Assistance", 
  "Scalable Solutions",
  "Personalized Experiences",
  "Cost Effective",
  "Real-Time Insights",
  "Automation",
  "Data-Driven Decisions",
];

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    animations.fadeUp(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} id="benefits" className="bg-secondary w-full">
      <div className="container">
        <motion.div 
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 py-2 px-3 bg-white/80 backdrop-blur-md border border-white/50 rounded-full shadow-sm">
            <Sparkles className="w-3 h-3 text-secondary-text" />
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-secondary-text">
              BENEFITS
            </p>
          </div>
          <h2 className="text-5xl font-semibold -tracking-tight text-primary-text">
            Why Choose Us
          </h2>
          <p className="text-lg text-secondary-text max-w-lg">
            Partner with an AI agency delivering smart solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-responsive">
          <BenefitCard
            title="Real-Time Analytics"
            description="Stay ahead with accurate, real-time performance tracking"
            orbitalVariant="analog"
            delay={0.1}
          />
          
          <BenefitCard
            title="AI-Driven Growth"
            description="Make smarter moves with accurate, real-time business insights"
            orbitalVariant="complex"
            delay={0.2}
          />
          
          <BenefitCard
            title="Sync in real time"
            description="Connect with your team instantly to track progress and updates"
            orbitalVariant="simple"
            delay={0.3}
          />
        </div>

        {/* Marquee Ticker */}
        <MarqueeTicker items={benefits} speed={1} />
      </div>
    </section>
  );
};

export default BenefitsSection;

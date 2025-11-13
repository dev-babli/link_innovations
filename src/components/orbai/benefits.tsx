'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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

const BenefitPill = ({ text }: { text: string }) => (
  <div className="flex-shrink-0 flex items-center gap-2 py-3 px-6 bg-white/70 backdrop-blur-md border border-white/40 rounded-full shadow-[0_8px_16px_0_rgba(0,0,0,0.06)]">
    <CheckCircle2 className="w-4 h-4 text-secondary-text" />
    <p className="text-base font-medium text-secondary-text">{text}</p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-secondary w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-20 py-24 sm:py-32">
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Real-Time Analytics */}
          <motion.div 
            className="relative group w-full h-[380px] p-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_8px_32px_0px_rgba(0,0,0,0.08)] flex flex-col justify-end overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_12px_48px_0px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute top-12 left-12">
              <motion.div 
                className="relative w-36 h-36"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm shadow-[inset_0_4px_12px_rgba(0,0,0,0.06)] border border-gray-200/60"></div>
                <div className="absolute inset-0 border-2 border-dashed border-gray-300/70 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-[45px] h-0.5 bg-black origin-left -translate-y-px"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '0% 50%' }}
                >
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl font-medium text-primary-text">Real-Time Analytics</h3>
              <p className="text-base text-secondary-text leading-relaxed">
                Stay ahead with accurate, real-time performance tracking
              </p>
            </div>
          </motion.div>

          {/* Card 2: AI-Driven Growth */}
          <motion.div 
            className="relative group w-full h-[380px] p-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_8px_32px_0px_rgba(0,0,0,0.08)] flex flex-col justify-end overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_12px_48px_0px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-16 right-0 left-0 h-40">
              <div className="relative w-full h-full">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-5">
                  {[90, 110, 130, 160].map((height, index) => (
                    <motion.div
                      key={index}
                      className="w-12 bg-secondary/80 backdrop-blur-sm rounded-lg"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}px` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    />
                  ))}
                </div>
                <motion.div 
                  className="absolute top-[52px] left-[calc(50%-102px)] text-[11px] bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-md px-2 py-0.5 shadow-sm text-secondary-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  20% Automation
                </motion.div>
                <motion.div 
                  className="absolute top-[4px] right-[calc(50%-130px)] text-[11px] bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-md px-2 py-0.5 shadow-sm text-secondary-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  60% Cost
                </motion.div>
                <div className="absolute -bottom-7 w-full left-0 flex justify-between px-[calc(50%-100px)]">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-secondary-text/60">BEFORE</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-secondary-text/60">AFTER</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-2 mt-auto">
              <h3 className="text-xl font-medium text-primary-text">AI-Driven Growth</h3>
              <p className="text-base text-secondary-text leading-relaxed">
                Make smarter moves with accurate, real-time business insights.
              </p>
            </div>
          </motion.div>
          
          {/* Card 3: Sync in real time */}
          <motion.div 
            className="relative group w-full h-[380px] p-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_8px_32px_0px_rgba(0,0,0,0.08)] flex flex-col justify-end overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_12px_48px_0px_rgba(0,0,0,0.12)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute top-12 left-12 w-36 h-36">
              <motion.div 
                className="absolute inset-2 rounded-full bg-gray-500/5 blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full bg-white/40 backdrop-blur-sm border border-gray-200/30 shadow-lg"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-md"
                animate={{ scale: [1, 1.03, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/70 shadow-lg flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/icons/8x7d36XigNJwbX3MhEzcU6N7N8-1.png"
                  alt="Sync Icon"
                  width={56}
                  height={40}
                  className="w-14 h-10 object-contain"
                />
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl font-medium text-primary-text">Sync in real time</h3>
              <p className="text-base text-secondary-text leading-relaxed">
                Connect with your team instantly to track progress and updates
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="relative w-full mt-16 overflow-hidden py-4">
        <div className="flex animate-[marquee_40s_linear_infinite] space-x-4">
          {[...benefits, ...benefits].map((text, index) => (
            <BenefitPill key={index} text={text} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default BenefitsSection;


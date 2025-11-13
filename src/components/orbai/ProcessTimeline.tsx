'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ProcessStep } from './index';
import { animations } from './animations';

const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    animations.fadeUp(sectionRef.current);

    // Draw the connecting line
    if (lineRef.current) {
      animations.drawLine(lineRef.current, 2);
    }
  }, []);

  const processSteps = [
    {
      stepNumber: "01",
      title: "Workflow Assessment",
      description: "We analyze your current processes and identify automation opportunities to maximize efficiency and reduce manual work.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      stepNumber: "02", 
      title: "Deploy Confidence",
      description: "Our team implements AI solutions with confidence, ensuring seamless integration and minimal disruption to your operations.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      stepNumber: "03",
      title: "Ongoing Support",
      description: "We provide continuous monitoring, optimization, and support to ensure your AI solutions deliver maximum value over time.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-24 sm:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
            <p className="text-badge">PROCESS</p>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-primary-text sm:text-5xl">
            How We Work
          </h2>
          <p className="mt-6 text-body-large">
            Our proven 3-step process ensures successful AI implementation and ongoing optimization.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path
                ref={lineRef}
                d="M 10 0.5 L 90 0.5"
                stroke="#E5E5E5"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 grid-responsive">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                imageUrl={step.imageUrl}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

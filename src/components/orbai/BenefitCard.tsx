'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animations } from './animations';
import OrbitalDecoration from './OrbitalDecoration';

interface BenefitCardProps {
  title: string;
  description: string;
  orbitalVariant?: 'simple' | 'complex' | 'analog';
  orbitalSize?: number;
  delay?: number;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  orbitalVariant = 'simple',
  orbitalSize = 150,
  delay = 0,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Apply hover lift animation
    animations.hoverLift(cardRef.current);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative group w-full h-[380px] p-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_8px_32px_0px_rgba(0,0,0,0.08)] flex flex-col justify-end overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_12px_48px_0px_rgba(0,0,0,0.12)] ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Orbital Decoration */}
      <div className="absolute top-12 left-12">
        <OrbitalDecoration 
          size={orbitalSize} 
          variant={orbitalVariant}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-xl font-medium text-primary-text">{title}</h3>
        <p className="text-base text-secondary-text leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;




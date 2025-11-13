'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { animations } from './animations';

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
  imageUrl?: string;
  delay?: number;
  className?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  title,
  description,
  imageUrl,
  delay = 0,
  className = ''
}) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepRef.current || !numberRef.current) return;

    // Animate number counter
    const number = parseInt(stepNumber);
    if (!isNaN(number)) {
      animations.numberCounter(numberRef.current, number, 1.5);
    }

    // Apply hover lift
    animations.hoverLift(stepRef.current);
  }, [stepNumber]);

  return (
    <motion.div
      ref={stepRef}
      className={`text-center relative ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Step Number */}
      <div 
        ref={numberRef}
        className="text-6xl font-bold text-gray-200 mb-4"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {stepNumber}
      </div>

      {/* Step Image */}
      {imageUrl && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          <div className="relative w-48 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Step Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-primary-text">{title}</h3>
        <p className="text-base text-secondary-text leading-relaxed max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProcessStep;




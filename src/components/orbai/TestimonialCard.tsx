'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { animations } from './animations';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  company?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar,
  company,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    animations.hoverLift(cardRef.current);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`flex-shrink-0 w-96 scroll-snap-align-center bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Quote */}
      <blockquote className="text-lg text-primary-text leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100">
          <Image
            src={avatar}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-primary-text">{author}</h4>
          <p className="text-sm text-secondary-text">{role}</p>
          {company && (
            <p className="text-xs text-tertiary-text">{company}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;




'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { animations } from './animations';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  isPopular = false,
  ctaText = 'Get Started',
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
      className={`relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 transition-all duration-300 ${
        isPopular 
          ? 'bg-black text-white scale-105 z-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]' 
          : 'hover:scale-105'
      } ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4" />
          Popular
        </div>
      )}

      {/* Plan Title */}
      <h3 className={`text-2xl font-semibold mb-2 ${isPopular ? 'text-white' : 'text-primary-text'}`}>
        {title}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <span className={`text-5xl font-bold ${isPopular ? 'text-white' : 'text-primary-text'}`}>
          {price}
        </span>
        <span className={`text-lg ml-2 ${isPopular ? 'text-gray-300' : 'text-secondary-text'}`}>
          /{period}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${isPopular ? 'text-white' : 'text-green-500'}`} />
            <span className={`text-sm ${isPopular ? 'text-gray-200' : 'text-secondary-text'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
        isPopular
          ? 'bg-white text-black hover:bg-gray-100'
          : 'bg-black text-white hover:bg-gray-800'
      }`}>
        {ctaText}
      </button>
    </motion.div>
  );
};

export default PricingCard;




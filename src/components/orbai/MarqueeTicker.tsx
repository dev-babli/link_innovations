'use client';

import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { animations } from './animations';

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  className?: string;
}

const BenefitPill: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex-shrink-0 flex items-center gap-2 py-3 px-6 bg-white/70 backdrop-blur-md border border-white/40 rounded-full shadow-[0_8px_16px_0_rgba(0,0,0,0.06)]">
    <CheckCircle2 className="w-4 h-4 text-secondary-text" />
    <p className="text-base font-medium text-secondary-text">{text}</p>
  </div>
);

const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ 
  items, 
  speed = 1, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animations.marqueeScroll(containerRef.current, 'left', speed);
  }, [speed]);

  return (
    <div className={`relative w-full mt-16 overflow-hidden py-4 ${className}`}>
      <div ref={containerRef} className="flex space-x-4">
        <div className="marquee-content flex space-x-4">
          {[...items, ...items].map((text, index) => (
            <BenefitPill key={index} text={text} />
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
    </div>
  );
};

export default MarqueeTicker;




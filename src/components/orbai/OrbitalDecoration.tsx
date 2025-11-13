'use client';

import React, { useEffect, useRef } from 'react';
import { animations } from './animations';

interface OrbitalDecorationProps {
  size?: number;
  className?: string;
  variant?: 'simple' | 'complex' | 'analog';
}

const OrbitalDecoration: React.FC<OrbitalDecorationProps> = ({ 
  size = 150, 
  className = '',
  variant = 'simple'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !outerRef.current || !innerRef.current) return;

    // Start rotation animations
    animations.rotateAnimation(outerRef.current, 20);
    animations.rotateAnimation(innerRef.current, 8);
    animations.floatAnimation(containerRef.current, 6);
  }, []);

  if (variant === 'analog') {
    return (
      <div ref={containerRef} className={`relative ${className}`} style={{ width: size, height: size }}>
        {/* Analog clock style */}
        <div 
          ref={outerRef}
          className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-sm shadow-[inset_0_4px_12px_rgba(0,0,0,0.06)] border border-gray-200/60"
        />
        <div className="absolute inset-2 border-2 border-dashed border-gray-300/70 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full" />
        <div 
          ref={innerRef}
          className="absolute top-1/2 left-1/2 w-[45px] h-0.5 bg-black origin-left -translate-y-px"
          style={{ transformOrigin: '0% 50%' }}
        >
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full" />
        </div>
      </div>
    );
  }

  if (variant === 'complex') {
    return (
      <div ref={containerRef} className={`relative ${className}`} style={{ width: size, height: size }}>
        {/* Complex orbital system */}
        <div 
          ref={outerRef}
          className="absolute inset-0 rounded-full bg-white/40 backdrop-blur-sm border border-gray-200/30 shadow-lg"
        />
        <div 
          ref={innerRef}
          className="absolute top-1/2 left-1/2 w-[110px] h-[110px] rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-md -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/70 shadow-lg flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-black rounded-full" />
        </div>
      </div>
    );
  }

  // Simple variant (default)
  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Simple orbital system */}
      <div 
        ref={outerRef}
        className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-sm shadow-[inset_0_4px_12px_rgba(0,0,0,0.06)] border border-gray-200/60"
      />
      <div 
        ref={innerRef}
        className="absolute top-1/2 left-1/2 w-[80px] h-[80px] rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-md -translate-x-1/2 -translate-y-1/2"
        style={{ transformOrigin: '61% 80%' }}
      />
      <div 
        ref={coreRef}
        className="absolute top-1/2 left-1/2 w-8 h-8 bg-black rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default OrbitalDecoration;




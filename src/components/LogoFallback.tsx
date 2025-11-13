"use client";

import React from 'react';

interface LogoFallbackProps {
  className?: string;
  alt?: string;
}

export default function LogoFallback({ className = '', alt = 'Link Innovations' }: LogoFallbackProps) {
  return (
    <div 
      className={`logo-fallback ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40px',
        width: '120px',
        background: 'linear-gradient(135deg, #2F2411 0%, #FFAD3B 100%)',
        borderRadius: '8px',
        color: '#FFF7E8',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      Link
    </div>
  );
}










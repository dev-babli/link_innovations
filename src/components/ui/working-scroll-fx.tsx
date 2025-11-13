"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Section {
  id: string;
  background: string;
  leftLabel: string;
  title: string;
  rightLabel: string;
}

interface WorkingScrollFXProps {
  sections: Section[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const WorkingScrollFX: React.FC<WorkingScrollFXProps> = ({ sections, header, footer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = sectionsRef.current;
    if (sections.length === 0) return;

    // Create scroll triggers for each section
    sections.forEach((section, index) => {
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setCurrentIndex(index),
        onEnterBack: () => setCurrentIndex(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${sections[currentIndex]?.background})`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el;
            }}
            className="min-h-screen flex items-center justify-center px-8"
          >
            <div className="text-center text-white max-w-4xl">
              {/* Header */}
              {index === 0 && header && (
                <div className="mb-8 text-6xl font-bold leading-tight">
                  {header}
                </div>
              )}

              {/* Section Content */}
              <div className="mb-8">
                <div className="text-lg opacity-80 mb-4">{section.leftLabel}</div>
                <h2 className="text-5xl font-bold mb-4">{section.title}</h2>
                <div className="text-lg opacity-80">{section.rightLabel}</div>
              </div>

              {/* Footer */}
              {index === sections.length - 1 && footer && (
                <div className="text-6xl font-bold leading-tight">
                  {footer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="space-y-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingScrollFX;


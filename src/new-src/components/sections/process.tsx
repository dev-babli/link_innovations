"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProcessCardData {
  id: string;
  title: string;
  text: string;
  img: string;
}

const processData: ProcessCardData[] = [
  {
    id: "01",
    title: "We Listen",
    text: "Understanding your goals and vision to build clarity.",
    img: "/images/process-cards/listen.png",
  },
  {
    id: "02",
    title: "We Simplify",
    text: "Turning complex ideas into clear, actionable plans.",
    img: "/images/process-cards/simplify.png",
  },
  {
    id: "03",
    title: "We Build Together",
    text: "Weekly progress with transparent milestones.",
    img: "/images/process-cards/build.png",
  },
];

const ProcessCard = ({ id, title, text, img, index, hoveredIndex, setHoveredIndex, isVisible, delay }: ProcessCardData & { index: number; hoveredIndex: number | null; setHoveredIndex: (index: number | null) => void; isVisible: boolean; delay: number }) => {
  const isHovered = hoveredIndex === index;
  const defaultExpanded = 0;
  const isExpanded = hoveredIndex !== null ? isHovered : index === defaultExpanded;

  return (
    <motion.div
      className={`group relative cursor-pointer overflow-hidden rounded-[24px] flex transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ 
        height: "300px", 
        minWidth: "280px", 
        transitionDelay: `${delay}ms`,
        background: isHovered
          ? 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.06) 100%)',
        backdropFilter: 'blur(28px) saturate(190%)',
        WebkitBackdropFilter: 'blur(28px) saturate(190%)',
        border: isHovered
          ? '1px solid rgba(255,255,255,0.4)'
          : '1px solid rgba(255,255,255,0.28)',
        boxShadow: isHovered
          ? '0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.4), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(255,255,255,0.2)'
          : '0 6px 28px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.28), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(255,255,255,0.15)'
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      whileHover={{ scale: 1.015, y: -3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Premium glass shine effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none rounded-[24px] transition-opacity duration-600 ${isHovered ? 'opacity-100' : 'opacity-80'}`} />
      
      {/* Subtle inner glow */}
      <div className={`absolute inset-[1px] rounded-[23px] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none transition-opacity duration-600 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Left side text */}
      <div className="w-64 flex flex-col justify-between p-7 relative z-10">
        <motion.div 
          className={`text-2xl font-bold text-left font-heading ${isHovered ? 'text-text-primary' : 'text-text-secondary'}`} 
          style={{ letterSpacing: '-0.03em' }}
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            x: isHovered ? 2 : 0
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {id}
        </motion.div>
        <div className="mt-auto space-y-2.5">
          <motion.h3 
            className={`text-lg font-semibold text-left font-heading text-text-primary`} 
            style={{ letterSpacing: '-0.015em', lineHeight: '1.3' }}
            animate={{ 
              x: isHovered ? 2 : 0
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className={`text-sm leading-[1.5] text-left font-body ${isHovered ? 'text-text-primary' : 'text-text-secondary'}`}
            animate={{ 
              opacity: isHovered ? 1 : 0.85
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {text}
          </motion.p>
        </div>
      </div>

      {/* Right side image with premium glassmorphic overlay */}
      <motion.div
        className="relative overflow-hidden flex-1 rounded-r-[24px] -ml-8"
        initial={{ width: 0, opacity: 0 }}
        animate={{ 
          width: isExpanded ? 280 : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {isExpanded && (
          <>
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
              sizes="240px"
            />
            {/* Premium glass overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/20 via-white/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/[0.03] pointer-events-none" />
            {/* Subtle border highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-background-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col items-center">
          {/* Main Dashboard Image with premium glassmorphic container */}
          <div className={`relative mb-16 w-full max-w-[900px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <motion.div 
              className="group relative overflow-hidden rounded-[32px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 100%)',
                backdropFilter: 'blur(32px) saturate(190%)',
                WebkitBackdropFilter: 'blur(32px) saturate(190%)',
                border: '1px solid rgba(255,255,255,0.32)',
                boxShadow: '0 24px 72px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(255,255,255,0.2)'
              }}
              whileHover={{ scale: 1.008, y: -2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Premium glass shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent pointer-events-none rounded-[32px] z-10" />
              
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

              <Image
                src="/image2.png"
                alt="Dashboard UI"
                width={900}
                height={520}
                className="h-auto w-full transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015] relative z-0"
                priority
              />
              
              {/* Premium bottom gradient overlay */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-transparent via-transparent to-black/[0.04] pointer-events-none z-10"></div>
            </motion.div>
          </div>

          {/* Process Cards Container with premium glassmorphic background */}
          <motion.div 
            className={`relative p-6 rounded-[28px] flex flex-col lg:flex-row justify-center gap-6 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(36px) saturate(190%)',
              WebkitBackdropFilter: 'blur(36px) saturate(190%)',
              border: '1px solid rgba(255,255,255,0.24)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(255,255,255,0.15)'
            }}
          >
            {/* Premium glass shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none rounded-[28px]" />
            
            {processData.map((item, index) => (
              <ProcessCard
                key={item.id}
                {...item}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                isVisible={isVisible}
                delay={index * 120}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
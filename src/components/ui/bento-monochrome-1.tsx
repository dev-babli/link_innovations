"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STYLE_ID = "bento3-animations";

const flows = [
  {
    id: "01",
    variant: "orbit",
    meta: "Expertise",
    title: "Proven Track Record",
    description:
      "Years of experience delivering successful IT solutions for businesses across industries. Our team has a proven track record of transforming businesses through innovative technology solutions.",
    statLabel: "Projects delivered",
    statValue: "200+",
    className: "col-span-2 row-span-2",
  },
  {
    id: "02",
    variant: "relay",
    meta: "Innovation",
    title: "Cutting-Edge Technology",
    description:
      "We stay ahead of the curve with the latest technologies and best practices. Our solutions are built using modern tech stacks that ensure scalability, performance, and future-proofing.",
    statLabel: "Technologies mastered",
    statValue: "50+",
    className: "col-span-1 row-span-2",
  },
  {
    id: "03",
    variant: "wave",
    meta: "Results",
    title: "Measurable Business Impact",
    description:
      "We don't just build solutions—we deliver measurable results. Every project is designed to drive growth, improve efficiency, and provide a clear return on investment for your business.",
    statLabel: "Client satisfaction",
    statValue: "98%",
    className: "col-span-3 row-span-1",
  },
];

const metrics = [
  { label: "Active Projects", value: 150, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "Years Experience", value: 12, suffix: "+" },
];

function Bento3Section() {
  const [introReady, setIntroReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes bento3-card-in {
        0% { opacity: 0; transform: translate3d(0, 28px, 0) scale(0.97); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes bento3-flare {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes bento3-dash {
        0% { transform: translateX(-25%); opacity: 0; }
        30% { opacity: 1; }
        70% { opacity: 1; }
        100% { transform: translateX(25%); opacity: 0; }
      }
      @keyframes bento3-wave {
        0% { transform: translateX(-45%); }
        100% { transform: translateX(45%); }
      }
      .bento3-card {
        opacity: 0;
        transform: translate3d(0, 32px, 0);
        filter: blur(14px);
        transition: all 400ms ease;
      }
      .bento3-card[data-visible="true"] {
        animation: bento3-card-in 760ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
        animation-delay: var(--bento3-delay, 0ms);
      }
      .bento3-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: clamp(2.25rem, 5vw, 2.75rem);
        width: clamp(2.25rem, 5vw, 2.75rem);
        border-radius: 9999px;
        overflow: hidden;
        isolation: isolate;
      }
      .bento3-icon::before,
      .bento3-icon::after {
        content: "";
        position: absolute;
        inset: 4px;
        border-radius: inherit;
        border: 1px solid rgba(30, 41, 59, 0.42);
        opacity: 0.45;
      }
      .bento3-icon::after {
        inset: 10px;
        opacity: 0.2;
      }
      .bento3-icon[data-variant="orbit"] span {
        position: absolute;
        height: 140%;
        width: 3px;
        background: linear-gradient(180deg, transparent, #000000 55%, transparent);
        transform-origin: center;
        animation: bento3-flare 8s linear infinite;
      }
      .bento3-icon[data-variant="relay"] span {
        position: absolute;
        inset: 18px;
        border-top: 1px solid #000000;
        border-bottom: 1px solid #000000;
        transform: skewX(-15deg);
      }
      .bento3-icon[data-variant="relay"] span::before,
      .bento3-icon[data-variant="relay"] span::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 120%;
        left: -10%;
        background: linear-gradient(90deg, transparent, #000000, transparent);
        animation: bento3-dash 2.6s ease-in-out infinite;
      }
      .bento3-icon[data-variant="relay"] span::after {
        top: 70%;
        animation-delay: 0.9s;
      }
      .bento3-icon[data-variant="wave"] span {
        position: absolute;
        inset: 12px;
        border-radius: 999px;
        overflow: hidden;
      }
      .bento3-icon[data-variant="wave"] span::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent 5%, #000000 50%, transparent 95%);
        transform: translateX(-45%);
        animation: bento3-wave 2.8s ease-in-out infinite alternate;
      }
    `;

    document.head.appendChild(style);

    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    setIntroReady(true);
    if (typeof window === "undefined") {
      setVisible(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative bg-white py-20 sm:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
            <p className="text-xs font-medium text-[#000000] uppercase tracking-wider">WHY CHOOSE US</p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl mb-4">
            Why businesses choose Link Innovations
          </h2>
          <p className="text-lg leading-8 text-[#000000]">
            We combine expertise, innovation, and results-driven approach to deliver IT solutions that transform your business.
          </p>
        </motion.div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-6xl mx-auto">
          {flows.map((flow, index) => (
            <FlowCard key={flow.id} flow={flow} index={index} visible={visible} />
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 rounded-[28px] border border-gray-200 bg-white p-6 sm:grid-cols-2 md:grid-cols-3 mt-12 max-w-4xl mx-auto">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowCard({ flow, index, visible }: { flow: typeof flows[0], index: number, visible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const setGlow = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = cardRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--bento3-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--bento3-y", `${event.clientY - rect.top}px`);
  };

  const clearGlow = () => {
    const target = cardRef.current;
    if (!target) return;
    target.style.removeProperty("--bento3-x");
    target.style.removeProperty("--bento3-y");
  };

  return (
    <motion.article
      ref={cardRef}
      className={`bento3-card group relative overflow-hidden rounded-[20px] p-4 transition-all duration-500 ${flow.className}`}
      data-visible={visible && isInView}
      style={{ 
        "--bento3-delay": `${index * 100}ms` 
      } as React.CSSProperties}
      onMouseMove={setGlow}
      onMouseLeave={clearGlow}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 0.68, 0, 1]
      }}
    >
      {/* Glassmorphism & Neuromorphism Card */}
      <div 
        className="relative h-full w-full rounded-[20px] p-4 sm:p-5 backdrop-blur-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.12),
            0 2px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(0, 0, 0, 0.05)
          `,
        }}
      >
        <div className="relative flex flex-col gap-2 sm:gap-3 h-full">
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[9px] uppercase tracking-[0.3em] opacity-50 sm:h-8 sm:w-8 sm:text-[10px] text-[#000000]">
              {flow.id}
            </div>
            <div 
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10`}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: `
                  0 4px 12px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                `,
              }}
            >
              <AnimatedIcon variant={flow.variant} />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 flex-1 min-h-0">
            <span 
              className="inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[8px] uppercase tracking-[0.4em] text-[#000000]"
              style={{
                background: 'rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              {flow.meta}
            </span>
            <h3 className="text-base font-semibold leading-tight sm:text-lg text-[#000000]">{flow.title}</h3>
            <p className="text-xs leading-relaxed text-[#000000] flex-1 opacity-80 line-clamp-3 sm:line-clamp-4">{flow.description}</p>
          </div>
          
          <div className="flex flex-col gap-1.5 text-[0.55rem] uppercase tracking-[0.25em] opacity-70 sm:text-[10px] sm:tracking-[0.35em] sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-gray-200">
            <span className="text-center sm:text-left text-[#000000] opacity-60">{flow.statLabel}</span>
            <span className="text-center font-semibold text-[#000000] sm:text-right">{flow.statValue}</span>
          </div>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[20px]"
        style={{
          background: `radial-gradient(200px circle at var(--bento3-x, 50%) var(--bento3-y, 50%), rgba(0, 0, 0, 0.08), transparent 68%)`,
        }}
      />

      {/* Shadow Behind Card */}
      <div 
        className="absolute inset-0 -z-10 rounded-[20px] transition-all duration-300 group-hover:scale-105"
        style={{
          background: 'transparent',
          filter: 'blur(20px)',
          transform: 'translateY(8px) scale(0.95)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1)',
        }}
      />
    </motion.article>
  );
}

function AnimatedIcon({ variant }: { variant: string }) {
  return (
    <span className="bento3-icon" data-variant={variant}>
      <span />
    </span>
  );
}

function MetricCard({ metric }: { metric: typeof metrics[0] }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = metric.value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= metric.value) {
        setCount(metric.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
  };

  return (
    <div
      ref={cardRef}
      className="rounded-[22px] border border-gray-200 bg-white px-5 py-6 text-xs uppercase tracking-[0.22em] text-center sm:text-sm sm:tracking-[0.25em] text-[#666666]"
    >
      <span className="block text-[10px] opacity-60 sm:text-[11px]">{metric.label}</span>
      <span className="mt-2 block text-base font-semibold tracking-[0.08em] sm:text-lg sm:tracking-[0.12em] text-[#000000]">
        {count}{metric.suffix}
      </span>
    </div>
  );
}

export default Bento3Section;
export { Bento3Section };

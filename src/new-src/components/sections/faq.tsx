"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    question: "What types of companies do you work with?",
    answer:
      "Link Innovations partners with startups, small businesses, and enterprises across various industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are tailored to meet the unique needs of each client, regardless of size or industry.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Project timelines vary based on scope and complexity. Most clients begin seeing improvements within the first few weeks of implementation. For comprehensive digital transformations, we typically deliver measurable results within 2 to 4 months, with ongoing optimization and support.",
  },
  {
    question: "What services does Link Innovations provide?",
    answer:
      "We offer comprehensive IT and technology solutions including web development, mobile app development, cloud services, AI solutions, cybersecurity, data analytics, UI/UX design, DevOps, API development, database design, IT consulting, and 24/7 support & maintenance.",
  },
  {
    question: "Do you offer one-time projects or ongoing support?",
    answer:
      "Both. Link Innovations provides one-time project development as well as ongoing support and maintenance services. We offer flexible engagement models including project-based work, retainer agreements, and managed services to suit your business needs and budget.",
  },
  {
    question: "What does the project onboarding process look like?",
    answer:
      "Our onboarding process is collaborative and transparent. We start with a discovery session to understand your requirements, followed by a detailed proposal and timeline. Once approved, we conduct a kickoff meeting, establish communication channels, and provide a comprehensive project roadmap with regular milestones and updates.",
  },
];

const FaqSection = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (faqRef.current) {
        const rect = faqRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate parallax offset based on scroll position
        const offset = (windowHeight - rect.top) * 0.1;
        setScrollY(offset);

        // Check if section is visible
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="faq" className="relative bg-gradient-to-br from-[#F7F5F1] via-[#F5F3EF] to-[#F2F0EC] py-32 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Section - Text Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a]">
                Your questions,
                <span className="block mt-2 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] bg-clip-text text-transparent">
                  answered
                </span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-[#3a3a3a] font-light max-w-lg">
                Get quick answers to the most common questions about Link Innovations' technology solutions and services.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-4 rounded-full bg-[#0a0a0a] px-8 py-4 text-base font-semibold text-white transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] overflow-hidden"
              >
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_ease-in-out_infinite] transition-opacity duration-500" />
                <span className="relative z-10">Contact us</span>
                <div className="relative z-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-2 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30">
                  <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Section - FAQ Items with Parallax */}
          <div
            ref={faqRef}
            className="flex flex-col gap-5 transition-all duration-300 ease-out"
            style={{
              transform: `translateY(${scrollY}px)`,
            }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {faqData.map((item, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="border-none"
                >
                  <AccordionTrigger className="group relative rounded-3xl px-8 py-6 text-left font-semibold text-[#0a0a0a] hover:no-underline transition-all duration-700 ease-out [&>svg.lucide-chevron-down]:hidden overflow-hidden"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? `translateY(0)`
                        : `translateY(30px)`,
                      transition: `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, all 0.7s ease-out`,
                      // Glassmorphic Background
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      // Neuromorphic Shadows
                      boxShadow: `
                        inset 0 1px 2px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.05),
                        0 8px 32px rgba(0, 0, 0, 0.08),
                        0 2px 8px rgba(0, 0, 0, 0.04)
                      `,
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `
                        inset 0 1px 2px rgba(255, 255, 255, 0.9),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.08),
                        0 16px 48px rgba(0, 0, 0, 0.12),
                        0 4px 16px rgba(0, 0, 0, 0.08),
                        0 0 0 1px rgba(255, 255, 255, 0.5)
                      `;
                      e.currentTarget.style.transform = `translateY(-2px) scale(1.01)`;
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.65) 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `
                        inset 0 1px 2px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.05),
                        0 8px 32px rgba(0, 0, 0, 0.08),
                        0 2px 8px rgba(0, 0, 0, 0.04)
                      `;
                      e.currentTarget.style.transform = `translateY(0) scale(1)`;
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)';
                    }}
                  >
                    {/* Premium Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

                    {/* Neuromorphic Inner Glow */}
                    <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <span className="relative z-10 flex-1 text-left text-lg md:text-xl font-semibold leading-relaxed pr-4">{item.question}</span>
                    <div
                      className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-700"
                      style={{
                        background: 'linear-gradient(135deg, rgba(232, 227, 221, 0.9) 0%, rgba(216, 211, 205, 0.9) 100%)',
                        boxShadow: `
                          inset 0 2px 4px rgba(255, 255, 255, 0.8),
                          inset 0 -2px 4px rgba(0, 0, 0, 0.1),
                          0 4px 12px rgba(0, 0, 0, 0.15)
                        `,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)';
                        e.currentTarget.style.boxShadow = `
                          inset 0 2px 4px rgba(255, 255, 255, 0.2),
                          inset 0 -2px 4px rgba(0, 0, 0, 0.3),
                          0 6px 16px rgba(0, 0, 0, 0.25),
                          0 0 0 1px rgba(255, 255, 255, 0.1)
                        `;
                        e.currentTarget.style.transform = 'scale(1.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(232, 227, 221, 0.9) 0%, rgba(216, 211, 205, 0.9) 100%)';
                        e.currentTarget.style.boxShadow = `
                          inset 0 2px 4px rgba(255, 255, 255, 0.8),
                          inset 0 -2px 4px rgba(0, 0, 0, 0.1),
                          0 4px 12px rgba(0, 0, 0, 0.15)
                        `;
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <Plus className="h-5 w-5 text-[#1a1a1a] transition-all duration-700 group-data-[state=closed]:block group-data-[state=open]:hidden group-hover:text-white" />
                      <Minus className="h-5 w-5 text-[#1a1a1a] transition-all duration-700 group-data-[state=open]:block group-data-[state=closed]:hidden group-hover:text-white" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-6 pb-7 px-8 rounded-b-3xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <p className="text-base md:text-lg leading-relaxed text-[#3a3a3a] font-light">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default FaqSection;
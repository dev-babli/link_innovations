"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSimpleFadeIn } from "@/hooks/useSimpleFadeIn";

export function McKinseyHero() {
  const { ref, isVisible } = useSimpleFadeIn({ delay: 100 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-gradient-to-b from-white to-mckinsey-light-gray py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div 
          className={`max-w-4xl transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Overline */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-mckinsey-blue/10 text-mckinsey-blue rounded-full text-sm font-medium">
              Digital Innovation Partner
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-merriweather text-4xl md:text-5xl lg:text-6xl font-bold text-mckinsey-navy mb-6 leading-tight">
            Transform Your Business with Intelligent Technology Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-mckinsey-slate mb-10 leading-relaxed max-w-3xl">
            We partner with forward-thinking organizations to build innovative digital experiences that drive measurable business outcomes. From strategy to execution, we deliver excellence at every step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mckinsey-blue text-white rounded hover:bg-opacity-90 transition-all font-medium text-lg group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-mckinsey-navy text-mckinsey-navy rounded hover:bg-mckinsey-navy hover:text-white transition-all font-medium text-lg"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-merriweather font-bold text-mckinsey-navy mb-1">
                  100+
                </div>
                <div className="text-sm text-mckinsey-slate">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-merriweather font-bold text-mckinsey-navy mb-1">
                  98%
                </div>
                <div className="text-sm text-mckinsey-slate">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-merriweather font-bold text-mckinsey-navy mb-1">
                  15+
                </div>
                <div className="text-sm text-mckinsey-slate">
                  Industries Served
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-merriweather font-bold text-mckinsey-navy mb-1">
                  5+
                </div>
                <div className="text-sm text-mckinsey-slate">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}











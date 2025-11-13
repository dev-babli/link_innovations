"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useStaggeredFadeIn } from "@/hooks/useSimpleFadeIn";

const industries = [];

export function McKinseyIndustries() {
  const { ref, visibleItems } = useStaggeredFadeIn(industries.length, 100);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-mckinsey-navy mb-4">
            Industries We Serve
          </h2>
          <p className="text-mckinsey-slate text-lg max-w-2xl mx-auto">
            Deep industry expertise across multiple sectors, delivering tailored solutions that address unique challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Link
              key={industry.id}
              href={industry.href}
              className={`group block relative overflow-hidden rounded-lg h-80 transition-opacity duration-700 ${
                visibleItems.has(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mckinsey-navy via-mckinsey-navy/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                {/* Stats Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium">
                    {industry.stats}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-merriweather text-2xl font-bold text-white mb-2 group-hover:text-mckinsey-gold transition-colors">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm mb-4">
                  {industry.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/showcases"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-mckinsey-navy text-mckinsey-navy rounded hover:bg-mckinsey-navy hover:text-white transition-all font-medium"
          >
            View All Industries
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}











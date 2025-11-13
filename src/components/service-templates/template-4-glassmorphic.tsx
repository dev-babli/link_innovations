"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import HeroSectionNew from "@/components/HeroSectionNew";
import ProcessSection from "@/new-src/components/sections/process";
// Using custom glassmorphic cards instead
import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";
import { ExpandableCard } from "@/components/ui/expandable-card";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Template 4: "Glassmorphic Showcase" - Premium Glass Effects
 * 
 * Heavy backdrop blur effects
 * Layered glassmorphic cards
 * Hover reveal animations
 * Premium depth effects
 * Subtle border highlights
 */
export default function Template4Glassmorphic({ service, className }: ServiceTemplateProps) {
  // Map FAQs to expandable cards
  const faqItems = service.faqs.map((faq) => ({
    title: faq.question,
    description: faq.answer,
  }));

  return (
    <main className={`min-h-screen bg-background-primary ${className || ""}`}>
      <Navigation />
      
      {/* 1️⃣ Hero with enhanced glassmorphic overlay */}
      <div className="relative">
        <HeroSectionNew />
        {/* Enhanced glassmorphic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
      </div>
      
      {/* 2️⃣ Features - Card Hover Reveal */}
      {service.highlights.length > 0 && (
        <section className="bg-background-secondary py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-6 lg:px-20">
            <div className="mb-16 text-center">
              <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
                Our Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/20 transition-all duration-500"
                >
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className="inline-block rounded-md bg-accent-yellow px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.02em] text-[#1a1a1a]">
                        {highlight.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em] text-text-primary mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-base leading-[1.6] text-text-secondary">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* 3️⃣ Process - Enhanced glassmorphic cards */}
      <ProcessSection />
      
      {/* 4️⃣ Services - Bento Monochrome Grid */}
      {service.narrative.differentiators.length > 0 && (
        <section className="bg-background-primary py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-6 lg:px-20">
            <div className="mb-16 text-center">
              <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
                What Sets Us Apart
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.narrative.differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/30 bg-white/15 backdrop-blur-2xl p-8 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0px_12px_48px_rgba(0,0,0,0.16)] hover:bg-white/25 transition-all duration-500"
                >
                  {/* Enhanced glass shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] rounded-[15px] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className="inline-block rounded-md bg-accent-yellow px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.02em] text-[#1a1a1a]">
                        {diff.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em] text-text-primary mb-3">
                      {diff.title}
                    </h3>
                    <p className="text-base leading-[1.6] text-text-secondary">
                      {diff.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* 5️⃣ Case Studies - Gallery Hover Carousel */}
      <section className="bg-background-secondary py-24 lg:py-32">
        <GalleryHoverCarousel />
      </section>
      
      {/* 6️⃣ FAQ - Expandable Cards */}
      {faqItems.length > 0 && (
        <section className="bg-background-primary py-24 lg:py-32">
          <div className="container mx-auto max-w-4xl px-6 lg:px-20">
            <div className="mb-16 text-center">
              <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <ExpandableCard
                  key={index}
                  title={faq.title}
                  src=""
                  description={faq.description}
                  className="rounded-xl border border-border-subtle bg-background-secondary shadow-[0px_2px_8px_rgba(0,0,0,0.06)]"
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* 7️⃣ Testimonials */}
      <div className="bg-background-primary">
        <TestimonialsColumns />
      </div>
      
      {/* 8️⃣ Final CTA - Enhanced glassmorphic */}
      <CTAWithShader />
      
      {/* 9️⃣ Footer */}
      <Footer />
    </main>
  );
}


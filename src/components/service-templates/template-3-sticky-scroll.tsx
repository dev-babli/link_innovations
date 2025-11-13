"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import HeroSectionNew from "@/components/HeroSectionNew";
import FeaturesSection from "@/new-src/components/sections/features";
import { Process } from "@/components/ui/cards-stack-demo";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Template 3: "Sticky Scroll Story" - Narrative-Driven
 * 
 * Sticky positioning for narrative flow
 * Scroll-triggered animations
 * Story-driven progression
 * Immersive scrolling experience
 */
export default function Template3StickyScroll({ service, className }: ServiceTemplateProps) {
  // Map challenges to sticky scroll content
  const challengesContent = service.narrative.challenges.map((challenge) => ({
    title: challenge.title,
    description: challenge.description,
  }));

  // Map solutions to container scroll content
  const solutionsContent = service.highlights.map((highlight) => ({
    title: highlight.title,
    description: highlight.description,
    badge: highlight.badge,
  }));

  return (
    <main className={`min-h-screen bg-background-primary ${className || ""}`}>
      <Navigation />
      
      {/* 1️⃣ Hero */}
      <HeroSectionNew />
      
      {/* 2️⃣ Challenges - Sticky Scroll */}
      {challengesContent.length > 0 && (
        <section className="bg-background-secondary py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-6 lg:px-20">
            <div className="mb-16 text-center">
              <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
                Challenges We Solve
              </h2>
            </div>
            <StickyScroll content={challengesContent} />
          </div>
        </section>
      )}
      
      {/* 3️⃣ Process - 6-step sticky */}
      <Process />
      
      {/* 4️⃣ Solutions - Container Scroll */}
      {solutionsContent.length > 0 && (
        <section className="bg-background-primary py-24 lg:py-32">
          <ContainerScroll titleComponent={
            <div className="text-center mb-12">
              <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
                Our Solutions
              </h2>
            </div>
          }>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionsContent.map((solution, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <div className="mb-4">
                    <span className="inline-block rounded-md bg-accent-yellow px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.02em] text-[#1a1a1a]">
                      {solution.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em] text-text-primary mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-base leading-[1.6] text-text-secondary">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </ContainerScroll>
        </section>
      )}
      
      {/* 5️⃣ Features - Tabbed */}
      <FeaturesSection />
      
      {/* 6️⃣ Testimonials */}
      <div className="bg-background-primary">
        <TestimonialsColumns />
      </div>
      
      {/* 7️⃣ Final CTA */}
      <CTAWithShader />
      
      {/* 8️⃣ Footer */}
      <Footer />
    </main>
  );
}



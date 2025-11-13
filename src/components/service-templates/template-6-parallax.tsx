"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import HeroSectionNew from "@/components/HeroSectionNew";
import ProcessSection from "@/new-src/components/sections/process";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { ServicesZoomParallaxSection } from "@/components/ui/services-zoom-parallax-section";
import { HeroParallax } from "@/components/ui/hero-parallax";
// ScrollImageZoom not available - using alternative showcase
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Template 6: "Parallax Premium" - Dynamic & Interactive
 * 
 * Parallax scroll effects
 * Image zoom on scroll
 * Interactive hover states
 * Depth through layering
 * Dynamic visual interest
 */
export default function Template6Parallax({ service, className }: ServiceTemplateProps) {
  // Map highlights to parallax images
  const parallaxImages = service.highlights.slice(0, 7).map((highlight, index) => ({
    src: `/images/services/${service.slug}-${index + 1}.jpg`,
    alt: highlight.title,
    title: highlight.title,
    description: highlight.description,
  }));

  return (
    <main className={`min-h-screen bg-background-primary ${className || ""}`}>
      <Navigation />
      
      {/* 1️⃣ Hero with parallax */}
      <ParallaxSection intensity="medium">
        <HeroSectionNew />
      </ParallaxSection>
      
      {/* 2️⃣ Features - Parallax Section */}
      {service.narrative.differentiators.length > 0 && (
        <ParallaxSection intensity="light" className="bg-background-secondary py-24 lg:py-32">
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
                  className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.02]"
                >
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
              ))}
            </div>
          </div>
        </ParallaxSection>
      )}
      
      {/* 3️⃣ Service Showcase - Zoom Parallax */}
      {parallaxImages.length > 0 && (
        <section className="bg-background-primary py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-6 lg:px-20">
            <div className="mb-16 text-center">
              <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
                Our Solutions
              </h2>
            </div>
            <ZoomParallax images={parallaxImages} showText={true} />
          </div>
        </section>
      )}
      
      {/* 4️⃣ Capabilities - Services Zoom Parallax */}
      <section className="bg-background-secondary py-24 lg:py-32">
        <ServicesZoomParallaxSection />
      </section>
      
      {/* 5️⃣ Process - With parallax images */}
      <ParallaxSection intensity="light">
        <ProcessSection />
      </ParallaxSection>
      
      {/* 6️⃣ CTA Section - Hero Parallax */}
      <section className="bg-background-primary py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <HeroParallax products={service.highlights.slice(0, 15).map((h, i) => ({
            title: h.title,
            link: `#${h.id}`,
            thumbnail: `/images/services/${service.slug}-${i + 1}.jpg`,
          }))} />
        </div>
      </section>
      
      {/* 7️⃣ Case Studies - Image Grid */}
      <section className="bg-background-secondary py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
              Case Studies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.highlights.slice(0, 6).map((highlight, index) => (
              <div
                key={index}
                className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {highlight.title}
                </h3>
                <p className="text-base text-text-secondary">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 8️⃣ Testimonials */}
      <div className="bg-background-primary">
        <TestimonialsColumns />
      </div>
      
      {/* 9️⃣ Final CTA */}
      <CTAWithShader />
      
      {/* 🔟 Footer */}
      <Footer />
    </main>
  );
}


"use client";

import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { FAQ } from "@/components/blocks/faq";
import { Footer } from "@/components/blocks/footer";
import Navigation from "@/new-src/components/sections/navigation";
import RuixenFeatureSection from "@/components/ui/ruixen-feature-section";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Mainline Premium Template
 *
 * By default this renders the premium layout with its static content.
 * Each block component now takes optional props so service pages can
 * override copy or assets without rebuilding the layout.
 */
export default function TemplateMainlinePremium({
  service,
  className,
}: ServiceTemplateProps) {
  const content = service?.content;

  return (
    <main className={`min-h-screen bg-background ${className || ""}`}>
      <Navigation />
      <Background className="via-muted to-muted/80">
        <Hero content={content} />
        <Features content={content} />
        <ResourceAllocation content={content} />
      </Background>
      <RuixenFeatureSection content={content} />
      <FAQ content={content} />
      <CTAWithShader content={content} />
      <Footer />
    </main>
  );
}


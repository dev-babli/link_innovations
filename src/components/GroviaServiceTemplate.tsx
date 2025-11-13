"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import HeroSectionNew from "@/components/HeroSectionNew";
import FeaturesSection from "@/new-src/components/sections/features";
import ProcessSection from "@/new-src/components/sections/process";
import { Process } from "@/components/ui/cards-stack-demo";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";
import { TrustedBySparkles } from "@/components/ui/trusted-by-sparkles";

interface GroviaServiceTemplateProps {
  serviceName: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroDescription: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  challenges?: {
    challenge: string;
    solution: string;
  }[];
  solutions?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  capabilities?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  technologies?: string[];
  testimonials?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export default function GroviaServiceTemplate({
  serviceName,
  heroTitle,
  heroSubtitle,
  heroDescription,
  primaryCTA,
  secondaryCTA,
  challenges = [],
  solutions = [],
  capabilities = [],
  technologies = [],
  testimonials = [],
  faq = [],
}: GroviaServiceTemplateProps) {
  return (
    <main className="min-h-screen bg-background-primary">
      <Navigation />

      {/* Hero Section */}
      <HeroSectionNew />

      {/* Features Section */}
      <FeaturesSection />

      {/* Challenges & Solutions */}
      {challenges.length > 0 && (
        <section className="bg-background-secondary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium text-text-primary mb-12 text-center">
                Challenges We Solve
              </h2>
              <div className="space-y-6">
                {challenges.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft"
                  >
                    <h3 className="text-xl font-medium text-text-primary mb-2">
                      {item.challenge}
                    </h3>
                    <p className="text-base text-text-secondary">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Solutions */}
      {solutions.length > 0 && (
        <section className="bg-background-primary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-3xl font-medium text-text-primary mb-12 text-center">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  {solution.icon && (
                    <div className="text-4xl mb-4">{solution.icon}</div>
                  )}
                  <h3 className="text-xl font-medium text-text-primary mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-base text-text-secondary">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities */}
      {capabilities.length > 0 && (
        <section className="bg-background-secondary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-3xl font-medium text-text-primary mb-12 text-center">
              Our Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  {capability.icon && (
                    <div className="text-4xl mb-4">{capability.icon}</div>
                  )}
                  <h3 className="text-xl font-medium text-text-primary mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-base text-text-secondary">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <ProcessSection />

      {/* Technologies */}
      {technologies.length > 0 && (
        <section className="bg-background-primary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-3xl font-medium text-text-primary mb-12 text-center">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full border border-border-subtle bg-background-secondary text-text-primary font-medium shadow-soft"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <div className="bg-background-primary">
          <TestimonialsColumns />
          <TrustedBySparkles />
        </div>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="bg-background-secondary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-3xl font-medium text-text-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faq.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft"
                >
                  <h3 className="text-xl font-medium text-text-primary mb-3">
                    {item.question}
                  </h3>
                  <p className="text-base text-text-secondary">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTAWithShader />

      <Footer />
    </main>
  );
}


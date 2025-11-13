"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { McKinseyNavigation } from "./McKinseyNavigation";
import { McKinseyFooter } from "./McKinseyFooter";
import { CallToAction } from "./CallToAction";
import { useSimpleFadeIn } from "@/hooks/useSimpleFadeIn";
import ShaderShowcase from "@/components/ui/hero";

interface IndustryPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  keyStats?: { value: string; label: string }[];
  challenges?: string[];
  solutions?: { title: string; description: string }[];
  caseStudies?: { title: string; description: string; result: string }[];
  expertise?: string[];
}

export function IndustryPageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  keyStats,
  challenges,
  solutions,
  caseStudies,
  expertise,
}: IndustryPageProps) {
  const { ref: challengesRef, isVisible: challengesVisible } = useSimpleFadeIn();
  const { ref: solutionsRef, isVisible: solutionsVisible } = useSimpleFadeIn();

  return (
    <div className="min-h-screen bg-white">
      {/* Shader Hero Section - Full Height Hero */}
      <div className="relative min-h-screen">
        <ShaderShowcase
          title={title}
          subtitle={subtitle}
          description={description}
          showNavigation={false}
          showPulsingBorder={true}
        />
        
        {/* Key Stats Overlay - Positioned above content */}
        {keyStats && keyStats.length > 0 && (
          <div className="absolute bottom-32 left-8 z-30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              {keyStats.map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Link Overlay */}
        <div className="absolute top-8 left-8 z-30">
          <Link href="/industries" className="text-white/80 hover:text-white transition-colors text-sm font-medium backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
            ← Back to Industries
          </Link>
        </div>
      </div>

      {/* Rest of the page content */}
      <McKinseyNavigation />

      {/* Industry Challenges */}
      {challenges && challenges.length > 0 && (
        <section
          ref={challengesRef as React.RefObject<HTMLElement>}
          className={`py-16 bg-mckinsey-light-gray transition-opacity duration-700 ${
            challengesVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-merriweather text-3xl font-bold text-mckinsey-navy mb-8">
              Industry Challenges We Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-mckinsey-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-mckinsey-blue" />
                  </div>
                  <span className="text-mckinsey-slate">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Solutions */}
      {solutions && solutions.length > 0 && (
        <section
          ref={solutionsRef as React.RefObject<HTMLElement>}
          className={`py-16 bg-white transition-opacity duration-700 ${
            solutionsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-merriweather text-3xl font-bold text-mckinsey-navy mb-12">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-mckinsey-blue transition-all">
                  <h3 className="font-merriweather text-xl font-bold text-mckinsey-navy mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-mckinsey-slate leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="py-16 bg-mckinsey-light-gray">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-merriweather text-3xl font-bold text-mckinsey-navy mb-12">
              Success Stories
            </h2>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="font-merriweather text-2xl font-bold text-mckinsey-navy mb-3">
                    {study.title}
                  </h3>
                  <p className="text-mckinsey-slate mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex items-center gap-2 text-mckinsey-blue font-medium">
                    <Check className="w-5 h-5" />
                    <span>{study.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expertise */}
      {expertise && expertise.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-merriweather text-3xl font-bold text-mckinsey-navy mb-8">
              Our Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="p-4 text-center bg-mckinsey-light-gray rounded-lg hover:bg-mckinsey-blue/10 transition-colors"
                >
                  <span className="text-mckinsey-navy font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CallToAction />

      {/* Footer */}
      <McKinseyFooter />
    </div>
  );
}









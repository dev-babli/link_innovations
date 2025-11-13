"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { McKinseyNavigation } from "./McKinseyNavigation";
import { McKinseyFooter } from "./McKinseyFooter";
import { CallToAction } from "./CallToAction";
import { useSimpleFadeIn } from "@/hooks/useSimpleFadeIn";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  benefits: { title: string; description: string }[];
  process?: { step: string; title: string; description: string }[];
  relatedServices?: { name: string; href: string }[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  capabilities,
  benefits,
  process,
  relatedServices,
}: ServicePageProps) {
  const { ref: heroRef, isVisible: heroVisible } = useSimpleFadeIn({ delay: 100 });
  const { ref: capabilitiesRef, isVisible: capabilitiesVisible } = useSimpleFadeIn();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useSimpleFadeIn();

  return (
    <div className="min-h-screen bg-white">
      <McKinseyNavigation />

      {/* Hero Section */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className={`py-20 bg-gradient-to-b from-mckinsey-light-gray to-white transition-opacity duration-700 ${
          heroVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-3xl">
            <div className="mb-4">
              <Link href="/services" className="text-mckinsey-blue hover:text-mckinsey-navy transition-colors text-sm font-medium">
                ← Back to Services
              </Link>
            </div>
            <p className="text-mckinsey-slate font-medium mb-4">{subtitle}</p>
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold text-mckinsey-navy mb-6">
              {title}
            </h1>
            <p className="text-lg text-mckinsey-slate leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section
        ref={capabilitiesRef as React.RefObject<HTMLElement>}
        className={`py-16 bg-white transition-opacity duration-700 ${
          capabilitiesVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-merriweather text-3xl font-bold text-mckinsey-navy mb-8">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-mckinsey-light-gray transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-mckinsey-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-mckinsey-blue" />
                </div>
                <span className="text-mckinsey-slate">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        ref={benefitsRef as React.RefObject<HTMLElement>}
        className={`py-16 bg-mckinsey-light-gray transition-opacity duration-700 ${
          benefitsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-merriweather text-3xl font-bold text-mckinsey-navy mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-merriweather text-xl font-bold text-mckinsey-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-mckinsey-slate text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process (if provided) */}
      {process && process.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-merriweather text-3xl font-bold text-mckinsey-navy mb-12">
              Our Process
            </h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-mckinsey-blue text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-merriweather text-xl font-bold text-mckinsey-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-mckinsey-slate leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 bg-mckinsey-light-gray">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-merriweather text-3xl font-bold text-mckinsey-navy mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-mckinsey-blue transition-all"
                >
                  <h3 className="font-merriweather font-bold text-mckinsey-navy group-hover:text-mckinsey-blue mb-2 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-2 text-mckinsey-blue text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
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











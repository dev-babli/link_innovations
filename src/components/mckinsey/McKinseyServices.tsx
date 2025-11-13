"use client";

import React from "react";
import Link from "next/link";
import { Code, Smartphone, Brain, Cloud, Shield, BarChart3, ArrowRight } from "lucide-react";
import { useStaggeredFadeIn } from "@/hooks/useSimpleFadeIn";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Build powerful, scalable web applications with modern frameworks and best practices.",
    icon: Code,
    href: "/services/web-development",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description: "Create engaging mobile experiences for iOS and Android with native and cross-platform solutions.",
    icon: Smartphone,
    href: "/services/mobile-apps",
  },
  {
    id: "ai-solutions",
    title: "AI & Machine Learning",
    description: "Leverage artificial intelligence to automate processes and gain intelligent insights.",
    icon: Brain,
    href: "/services/ai-automation",
  },
  {
    id: "cloud-services",
    title: "Cloud Solutions",
    description: "Migrate, optimize, and manage your infrastructure with enterprise cloud services.",
    icon: Cloud,
    href: "/services/cloud-services",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions and consulting.",
    icon: Shield,
    href: "/services/cybersecurity",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization.",
    icon: BarChart3,
    href: "/services/data-analytics",
  },
];

export function McKinseyServices() {
  const { ref, visibleItems } = useStaggeredFadeIn(services.length, 100);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20 bg-mckinsey-light-gray">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-mckinsey-navy mb-4">
            Our Services
          </h2>
          <p className="text-mckinsey-slate text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group block transition-opacity duration-700 ${
                  visibleItems.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="h-full bg-white p-8 rounded-lg border border-gray-200 hover:border-mckinsey-blue hover:shadow-lg transition-all">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-mckinsey-blue/10 flex items-center justify-center mb-6 group-hover:bg-mckinsey-blue group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-mckinsey-blue group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-merriweather text-xl font-bold text-mckinsey-navy mb-3 group-hover:text-mckinsey-blue transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-mckinsey-slate text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-mckinsey-blue font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-mckinsey-navy text-white rounded hover:bg-opacity-90 transition-all font-medium"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}











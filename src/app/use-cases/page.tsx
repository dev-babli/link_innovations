"use client";

import React, { useState } from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import Link from "next/link";
import HeroSectionNew from "@/components/HeroSectionNew";

const useCases = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Complete online store with payment integration, inventory management, and customer analytics.",
    industry: "Retail",
    services: ["Web Development", "Cloud Services", "Data Analytics"],
    image: "🛒",
    color: "from-[#8B5CF6]/20 to-[#3B82F6]/20"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Secure patient management system with HIPAA compliance and telemedicine capabilities.",
    industry: "Healthcare",
    services: ["Web Development", "Cybersecurity", "Cloud Services"],
    image: "🏥",
    color: "from-[#06B6D4]/20 to-[#8B5CF6]/20"
  },
  {
    id: 3,
    title: "FinTech Mobile App",
    description: "Banking application with biometric authentication and real-time transaction processing.",
    industry: "Finance",
    services: ["Mobile Development", "Cybersecurity", "Cloud Services"],
    image: "💳",
    color: "from-[#3B82F6]/20 to-[#06B6D4]/20"
  },
  {
    id: 4,
    title: "Educational Platform",
    description: "Learning management system with video streaming, assessments, and progress tracking.",
    industry: "Education",
    services: ["Web Development", "Cloud Services", "Data Analytics"],
    image: "📚",
    color: "from-[#8B5CF6]/20 to-[#06B6D4]/20"
  },
  {
    id: 5,
    title: "Manufacturing IoT Dashboard",
    description: "Real-time monitoring system for manufacturing equipment with predictive maintenance.",
    industry: "Manufacturing",
    services: ["Cloud Services", "Data Analytics", "AI & ML"],
    image: "🏭",
    color: "from-[#06B6D4]/20 to-[#3B82F6]/20"
  },
  {
    id: 6,
    title: "SaaS Business Tool",
    description: "Comprehensive business management platform with CRM, project management, and reporting.",
    industry: "Technology",
    services: ["Web Development", "Cloud Services", "Automation Testing"],
    image: "💼",
    color: "from-[#8B5CF6]/20 to-[#3B82F6]/20"
  },
  {
    id: 7,
    title: "Real Estate Portal",
    description: "Property listing platform with virtual tours, search filters, and agent management.",
    industry: "Real Estate",
    services: ["Web Development", "Cloud Services", "Data Analytics"],
    image: "🏠",
    color: "from-[#3B82F6]/20 to-[#8B5CF6]/20"
  },
  {
    id: 8,
    title: "AI-Powered Analytics Dashboard",
    description: "Business intelligence platform with machine learning insights and predictive analytics.",
    industry: "Technology",
    services: ["Web Development", "AI & ML", "Data Analytics"],
    image: "📊",
    color: "from-[#8B5CF6]/20 to-[#06B6D4]/20"
  },
  {
    id: 9,
    title: "Supply Chain Management",
    description: "End-to-end supply chain visibility with tracking, optimization, and logistics management.",
    industry: "Logistics",
    services: ["Web Development", "Cloud Services", "Data Analytics"],
    image: "🚚",
    color: "from-[#06B6D4]/20 to-[#3B82F6]/20"
  }
];

const industries = ["All", "Retail", "Healthcare", "Finance", "Education", "Manufacturing", "Technology", "Real Estate", "Logistics"];

export default function UseCasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredCases = selectedIndustry === "All"
    ? useCases
    : useCases.filter(caseItem => caseItem.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-background-primary">
      <PerformanceOptimizer />
      <Navigation />

      {/* Hero Section */}
      <HeroSectionNew />
      
      {/* Use Cases Content */}
      <section className="bg-background-primary py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-accent-yellow/20 px-4 py-2 text-sm text-text-primary mb-8">
            <span className="w-2 h-2 bg-accent-yellow rounded-full"></span>
            Use Cases
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-medium text-text-primary mb-6">
            Real-World <span className="text-text-primary">Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            Explore how we've helped businesses across industries transform their operations with innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="bg-background-secondary py-8">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? "bg-accent-yellow text-text-primary shadow-md"
                    : "bg-background-secondary text-text-secondary hover:bg-background-primary border border-border-subtle"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="bg-background-primary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((useCase, index) => (
            <div key={useCase.id}>
              <div className="group block h-full rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1">
                {/* Image */}
                <div className="w-full h-32 rounded-lg bg-gradient-to-br from-accent-yellow/20 to-accent-yellow/10 flex items-center justify-center text-5xl mb-4">
                  {useCase.image}
                </div>

                {/* Industry Tag */}
                <div className="text-xs font-medium text-text-primary mb-2">
                  {useCase.industry}
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-text-primary mb-3">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {useCase.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {useCase.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-text-secondary bg-background-primary rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-sm text-text-primary font-medium flex items-center group-hover:opacity-70 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center rounded-xl border border-border-subtle bg-background-secondary p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              Have a Specific Use Case?
            </h2>
            <p className="text-base text-text-secondary mb-8">
              Every business is unique. Let's discuss how we can create a custom solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="rounded-full bg-accent-yellow px-8 py-3.5 font-medium text-text-primary transition-transform hover:scale-[1.02]"
              >
                Discuss Your Project
              </a>
              <a
                href="/services"
                className="rounded-full border border-border-subtle px-8 py-3.5 font-medium text-text-primary transition-transform hover:scale-[1.02] hover:bg-background-primary"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


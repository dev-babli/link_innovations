"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { Check, X } from "lucide-react";
import HeroSectionNew from "@/components/HeroSectionNew";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small projects and startups",
    price: "$5,000",
    period: "per project",
    features: [
      "Basic web application",
      "Responsive design",
      "Up to 5 pages",
      "Basic SEO optimization",
      "3 months support",
      "Email support"
    ],
    notIncluded: [
      "Mobile app development",
      "Advanced integrations",
      "Priority support"
    ],
    popular: false,
    color: "text-[#3B82F6]"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$15,000",
    period: "per project",
    features: [
      "Full-stack web application",
      "Custom design & development",
      "Unlimited pages",
      "Advanced SEO optimization",
      "Mobile-responsive design",
      "API integrations",
      "6 months support",
      "Priority email support",
      "Performance optimization"
    ],
    notIncluded: [
      "24/7 support",
      "Dedicated account manager"
    ],
    popular: true,
    color: "text-[#8B5CF6]"
  },
  {
    name: "Enterprise",
    description: "Complete solution for large organizations",
    price: "Custom",
    period: "pricing",
    features: [
      "Everything in Professional",
      "Mobile app development",
      "Complex integrations",
      "Custom architecture",
      "Dedicated team",
      "12 months support",
      "24/7 priority support",
      "Dedicated account manager",
      "Custom SLAs",
      "Security audits",
      "Ongoing maintenance"
    ],
    notIncluded: [],
    popular: false,
    color: "text-[#06B6D4]"
  }
];

const faqs = [
  {
    question: "What's included in the project price?",
    answer: "The project price includes design, development, testing, and initial deployment. Support periods vary by plan."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. We'll prorate the difference in cost."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for larger projects. Contact us to discuss options."
  },
  {
    question: "What happens after the support period ends?",
    answer: "After the support period, we offer maintenance packages and ongoing support on a retainer basis."
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <PerformanceOptimizer />
      <Navigation />

      {/* Hero Section */}
      <HeroSectionNew />
      
      {/* Pricing Content */}
      <section className="bg-background-primary py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-4 py-2 text-sm text-[#8B5CF6] mb-8">
            <span className="w-2 h-2 bg-[#8B5CF6] rounded-full"></span>
            Pricing
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-medium text-text-primary mb-6">
            Simple, Transparent <span className="text-text-primary">Pricing</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            Choose a plan that fits your needs. All plans include our commitment to quality, transparency, and ethical practices.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={plan.name} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-yellow text-text-primary text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`h-full rounded-xl border ${plan.popular ? "border-2 border-accent-yellow shadow-lg" : "border-border-subtle"} bg-background-secondary p-8 shadow-soft transition-all hover:shadow-lg`}>
                {/* Plan Name */}
                <div className="text-2xl font-bold text-text-primary mb-2">
                  {plan.name}
                </div>
                <p className="text-sm text-text-secondary mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-4xl font-bold text-text-primary mb-1">
                    {plan.price}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {plan.period}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 opacity-50">
                      <X className="w-5 h-5 text-text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`w-full block text-center rounded-full px-8 py-3.5 font-medium transition-transform hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-accent-yellow text-text-primary"
                      : "border border-border-subtle text-text-primary hover:bg-background-primary"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background-primary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-medium text-text-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft">
                  <h3 className="text-xl font-medium text-text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-base text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center rounded-xl border border-border-subtle bg-background-secondary p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-base text-text-secondary mb-8">
              Every project is unique. Contact us for a personalized quote tailored to your specific needs.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-accent-yellow px-8 py-3.5 font-medium text-text-primary transition-transform hover:scale-[1.02]"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


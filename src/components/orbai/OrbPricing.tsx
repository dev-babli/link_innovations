"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function OrbPricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        "Basic IT Support",
        "Cloud Storage (50GB)",
        "Email Support",
        "Monthly Reports",
        "Basic Security",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Most popular for growing teams",
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        "Priority IT Support 24/7",
        "Cloud Storage (500GB)",
        "Phone & Email Support",
        "Weekly Reports",
        "Advanced Security",
        "Custom Integrations",
        "Dedicated Account Manager",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      features: [
        "White Glove Support 24/7",
        "Unlimited Cloud Storage",
        "All Support Channels",
        "Daily Reports & Analytics",
        "Enterprise Security Suite",
        "Unlimited Integrations",
        "Dedicated Team",
        "Custom SLA",
        "On-site Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-orb-darker">
      <div className="absolute inset-0 bg-gradient-to-b from-orb-dark via-transparent to-orb-dark"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">PRICING</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-orb-light text-lg mb-8">Flexible pricing for businesses of all sizes</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-orb-card border border-orb-border">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                !isYearly
                  ? "bg-gradient-to-r from-orb-purple to-orb-blue text-white"
                  : "text-orb-light"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                isYearly
                  ? "bg-gradient-to-r from-orb-purple to-orb-blue text-white"
                  : "text-orb-light"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-orb-accent">(Save 17%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all ${
                plan.popular
                  ? "bg-gradient-to-b from-orb-purple/20 to-orb-blue/20 border-orb-purple scale-105"
                  : "bg-orb-card border-orb-border hover:border-orb-purple/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue text-white text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-orb-light text-sm mb-6">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice}
                  </span>
                  <span className="text-orb-light">/{isYearly ? "year" : "mo"}</span>
                </div>

                <button className={`w-full px-6 py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-orb-purple to-orb-blue text-white hover:shadow-2xl hover:shadow-orb-purple/50"
                    : "bg-orb-card border border-orb-border text-white hover:bg-orb-border"
                }`}>
                  Get Started
                </button>
              </div>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orb-accent flex-shrink-0 mt-0.5" />
                    <span className="text-orb-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}











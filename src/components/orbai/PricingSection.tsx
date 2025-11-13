'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from './index';

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      title: "Starter",
      monthlyPrice: "$800",
      yearlyPrice: "$8,000",
      period: "month",
      features: [
        "Basic AI consultation",
        "Up to 2 automation workflows",
        "Email support",
        "Monthly progress reports",
        "Basic analytics dashboard"
      ],
      ctaText: "Get Started"
    },
    {
      title: "Pro",
      monthlyPrice: "$1,700",
      yearlyPrice: "$17,000", 
      period: "month",
      features: [
        "Advanced AI strategy",
        "Up to 5 automation workflows",
        "Priority support",
        "Weekly progress reports",
        "Advanced analytics & insights",
        "Custom integrations",
        "Training sessions"
      ],
      ctaText: "Choose Pro",
      isPopular: true
    },
    {
      title: "Enterprise",
      monthlyPrice: "$4,700",
      yearlyPrice: "$47,000",
      period: "month", 
      features: [
        "Complete AI transformation",
        "Unlimited automation workflows",
        "24/7 dedicated support",
        "Daily progress reports",
        "Enterprise analytics suite",
        "Custom AI model development",
        "On-site training",
        "Dedicated account manager"
      ],
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
            <p className="text-badge">PRICING</p>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-primary-text sm:text-5xl">
            Choose Your Plan
          </h2>
          <p className="mt-6 text-body-large">
            Flexible pricing options designed to scale with your business needs.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div 
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-white text-primary-text shadow-sm'
                  : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isYearly
                  ? 'bg-white text-primary-text shadow-sm'
                  : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              Yearly
              <span className="ml-1 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto grid-responsive">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard
                title={plan.title}
                price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                period={plan.period}
                features={plan.features}
                isPopular={plan.isPopular}
                ctaText={plan.ctaText}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-secondary-text mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <p className="text-sm text-tertiary-text">
            Need a custom solution? <a href="#" className="text-primary-text hover:underline">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

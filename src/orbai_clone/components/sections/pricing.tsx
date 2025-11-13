"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 1143, yearly: 800 },
    description:
      "Ideal for businesses ready to explore AI and intelligent automation",
    features: [
      "Basic AI Tools",
      "Limited Automation Features",
      "Real-Time Reporting",
      "Basic Chatbot Integration",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: { monthly: 2429, yearly: 1700 },
    description:
      "Built for companies that want to gain an edge with AI-powered automation",
    features: [
      "Advanced AI Tools",
      "Customizable Workflows",
      "AI-Powered Analytics",
      "Premium Chatbot Features",
      "Cross-Platform Integrations",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 6714, yearly: 4700 },
    description:
      "For businesses aiming to harness AI and automation to lead their industry",
    features: [
      "Fully Customized AI Solutions",
      "Unlimited Integrations",
      "Advanced Reporting & Insights",
      "Scalable AI Solutions",
      "Team Collaboration Features",
      "Priority Feature Access",
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="w-full bg-secondary-background py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground shadow-sm"
          >
            PRICING
          </div>
          <h2 className="mb-4 text-4xl font-semibold tracking-[-0.02em] text-primary-text md:text-5xl">
            Simple Price For All
          </h2>
          <p className="text-lg text-secondary-text">
            Flexible pricing plans that fit your budget & scale with needs.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative flex items-center rounded-full bg-neutral-100 p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? "bg-black text-white shadow-md"
                  : "text-secondary-text hover:bg-neutral-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly
                  ? "bg-black text-white shadow-md"
                  : "text-secondary-text hover:bg-neutral-200"
              }`}
            >
              Yearly
            </button>
          </div>
          <div className="rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-black shadow-sm">
            30% off
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.price.yearly : plan.price.monthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] ${
                  plan.isPopular
                    ? "border-2 border-primary/20 bg-white/70 backdrop-blur-xl shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
                    : "border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-primary-text">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight text-primary-text">
                    ${price}
                  </span>
                  <span className="ml-1 text-xl font-medium text-secondary-text">
                    /month
                  </span>
                </div>
                <p className="mt-4 text-base text-secondary-text">
                  {plan.description}
                </p>
                <a
                  href="#"
                  className={`mt-8 block w-full py-3 text-center text-base font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.isPopular
                      ? "rounded-lg bg-primary text-primary-foreground shadow-lg shadow-black/20 hover:bg-black/90"
                      : "rounded-lg border border-gray-300 bg-white/80 backdrop-blur-md text-primary-text hover:bg-gray-50"
                  }`}
                >
                  Get Started
                </a>
                <ul className="mt-8 flex-grow space-y-4">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 ${
                        index !== plan.features.length - 1
                          ? "border-b border-dotted border-border pb-4"
                          : ""
                      }`}
                    >
                      <Check className="h-5 w-5 flex-shrink-0 text-primary-text" />
                      <span className="text-[15px] text-secondary-text">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-tertiary-text">
          We donate 2% of your membership to pediatric wellbeing
        </p>
      </div>
    </section>
  );
}
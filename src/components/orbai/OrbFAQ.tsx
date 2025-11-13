"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function OrbFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What IT services does Link Innovations provide?",
      answer: "We offer comprehensive IT solutions including custom software development, cloud infrastructure, cybersecurity, mobile app development, data analytics, and managed IT services. Our team specializes in creating tailored solutions that scale with your business.",
    },
    {
      question: "How quickly can you deploy a solution?",
      answer: "Our streamlined process allows us to deploy solutions in hours to days, not weeks or months. We use agile methodologies and modern DevOps practices to ensure rapid, reliable delivery without compromising quality.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes! We offer round-the-clock support for all our enterprise clients. Our dedicated support team is available via phone, email, and chat to address any issues or questions you may have.",
    },
    {
      question: "Can your solutions integrate with existing systems?",
      answer: "Absolutely. We specialize in seamless integrations with legacy systems, third-party APIs, and modern platforms. Our team ensures your new solutions work harmoniously with your existing technology stack.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries including healthcare, finance, retail, manufacturing, education, and more. Our team has deep expertise across multiple sectors and can adapt our solutions to meet industry-specific requirements.",
    },
    {
      question: "How do you ensure data security?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like ISO 27001, SOC 2, and GDPR.",
    },
  ];

  return (
    <section className="relative py-24 bg-orb-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orb-accent font-semibold mb-2 uppercase tracking-wider text-sm">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-orb-light text-lg">Everything you need to know about our services</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-orb-card backdrop-blur-xl border border-orb-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-orb-border/30 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-orb-light leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-orb-light mb-4">Still have questions?</p>
          <a
            href="mailto:contact@linkinnovations.com"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orb-purple to-orb-blue text-white font-semibold hover:shadow-2xl hover:shadow-orb-purple/50 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}











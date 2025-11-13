"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Copy } from "lucide-react";

const faqs = [
  {
    question: "How secure is my data when using your AI services?",
    answer:
      "We prioritize data privacy and enterprise-grade security. All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). We comply with GDPR, SOC 2, and ISO 27001 standards, ensuring your data stays confidential and never used to train shared or public models.",
  },
  {
    question: "Can your AI solutions integrate with our existing systems?",
    answer:
      "Absolutely. Our AI services are platform-agnostic and integrate seamlessly with CRMs, ERPs, or analytics tools. We provide REST APIs, webhooks, and SDKs for smooth interoperability across your tech stack.",
  },
  {
    question: "What types of AI services do you offer?",
    answer:
      "We provide a wide range of AI services including Predictive Analytics, Generative AI, Computer Vision, NLP, AI Chatbots, and Custom Model Development. Each service can be customized to your goals.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation depends on scope: pre-trained models can be deployed in 3–5 days, while custom solutions typically take 2–6 weeks, including proof-of-concept and testing.",
  },
];

export default function FaqSection() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // Filter FAQs by search
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle FAQ open/close
  const toggleIndex = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Scroll into view when opened
  useEffect(() => {
    if (activeIndices.length) {
      const lastIndex = activeIndices[activeIndices.length - 1];
      refs.current[lastIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeIndices]);

  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-6 rounded-3xl shadow-lg mt-10">
      <h2 className="text-4xl font-semibold text-center mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <div className="space-y-5">
        {filteredFaqs.map((faq, index) => (
          <motion.div
            ref={(el) => {
              refs.current[index] = el; // ✅ Assign, do NOT return
            }}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-100 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 relative"
          >
            <button
              onClick={() => toggleIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleIndex(index);
              }}
              tabIndex={0}
              className="flex justify-between items-center w-full p-6 text-left"
            >
              <span className="text-lg font-medium text-gray-900 flex items-center gap-2">
                {faq.question}
              </span>
              <div className="flex items-center gap-2">
                <Copy
                  className="w-4 h-4 text-indigo-400 hover:text-indigo-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(
                      `${faq.question}\n${faq.answer}`
                    );
                  }}
                />
                <ChevronDown
                  className={`w-5 h-5 text-indigo-600 transform transition-transform duration-500 ${
                    activeIndices.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            <AnimatePresence>
              {activeIndices.includes(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="px-6 pb-6 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {filteredFaqs.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No FAQs match your search.
          </p>
        )}
      </div>
    </section>
  );
}

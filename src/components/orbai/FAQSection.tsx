'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQItem } from './index';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What types of AI solutions do you provide?",
      answer: "We provide a comprehensive range of AI solutions including chatbots, automation workflows, predictive analytics, natural language processing, computer vision, and custom AI model development. Our solutions are tailored to your specific business needs and industry requirements."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary depending on the complexity of the solution. Simple chatbots can be deployed in 2-4 weeks, while complex AI systems may take 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive ongoing support including monitoring, optimization, updates, and maintenance. Our support packages range from basic email support to 24/7 dedicated assistance, depending on your plan. We also provide regular performance reports and optimization recommendations."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integration with existing systems including CRMs, ERPs, databases, and third-party APIs. Our team works closely with your IT department to ensure smooth integration without disrupting your current operations."
    },
    {
      question: "What makes your AI solutions different from competitors?",
      answer: "Our AI solutions are built with a focus on practical business value, not just technical complexity. We combine cutting-edge AI technology with deep industry expertise to deliver solutions that actually solve real business problems. We also provide comprehensive training and support to ensure your team can effectively use and maintain the solutions."
    },
    {
      question: "Do you offer custom AI model development?",
      answer: "Yes, we develop custom AI models tailored to your specific data and requirements. Our data scientists work with your team to understand your unique challenges and develop models that provide maximum value. We handle everything from data preparation to model training, validation, and deployment."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-secondary py-24 sm:py-32">
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
            <p className="text-badge">FAQ</p>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-primary-text sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-body-large">
            Find answers to common questions about our AI solutions and services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-secondary-text mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;




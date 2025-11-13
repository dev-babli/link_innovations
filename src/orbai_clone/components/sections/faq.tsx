"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "bg-white border border-gray-100 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-6 md:p-8 text-left text-lg md:text-xl font-semibold text-[#1a1a1a] transition-all hover:text-[#000000] hover:no-underline [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-gray-50 [&[data-state=open]]:to-white",
        className
      )}
      {...props}
    >
      <span className="pr-4">{children}</span>
      <ChevronDown className="h-5 w-5 shrink-0 text-[#666666] transition-transform duration-300" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base text-[#666666] leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-6 md:px-8 pb-6 md:pb-8 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const faqData = [
  {
    id: "item-1",
    question: "What services do you offer?",
    answer: "We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs",
  },
  {
    id: "item-2",
    question: "How long does it take to develop an AI solution?",
    answer: "Depending on the project's complexity, timelines typically range from 2 to 12 weeks. We'll provide a detailed timeline after our initial discovery call",
  },
  {
    id: "item-3",
    question: "Do I need technical expertise to work with you?",
    answer: "No technical background is required! We handle all the complexity for you and explain every step in simple, actionable terms",
  },
  {
    id: "item-4",
    question: "Is my data safe when working with your agency?",
    answer: "Absolutely. We follow strict data privacy protocols, comply with GDPR standards, and offer NDAs to ensure your information stays secure",
  },
  {
    id: "item-5",
    question: "Can AI really help my business grow?",
    answer: "Yes! AI can automate tasks, enhance customer experiences, uncover insights, and open new revenue streams — and we'll show you exactly how it can work for your business.",
  },
];

const FaqSection = () => {
  return (
    <section id="faqs" className="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-24 sm:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-6 inline-flex items-center rounded-full bg-white px-5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-semibold text-[#000000] uppercase tracking-wider">Frequently Asked Questions</p>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] mb-6">
            Questions? <span className="bg-gradient-to-r from-[#1a1a1a] to-[#666666] bg-clip-text text-transparent">Answers!</span>
          </h2>
          <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Find quick answers to the most common questions about our services and solutions.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <AccordionItem value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-relaxed text-[#666666]">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#666666] mb-2">
            Still have questions?
          </p>
          <a
            href="mailto:linkai@support.com"
            className="inline-flex items-center gap-2 font-semibold text-[#1a1a1a] hover:text-[#000000] transition-colors group"
          >
            <span>linkai@support.com</span>
            <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

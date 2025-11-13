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
      "bg-white/60 backdrop-blur-xl border border-white/40 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
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
        "flex flex-1 items-center justify-between p-6 text-left text-lg font-semibold text-primary-text transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 text-primary-text transition-transform duration-200" />
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
    className="overflow-hidden text-base text-secondary-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-6 pb-6 pt-0", className)}>{children}</div>
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
    <section id="faqs" className="bg-secondary-background py-24 sm:py-32">
      <div className="container max-w-7xl">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-block rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-4 py-1.5">
            <p className="text-badge text-muted-foreground">FAQS</p>
          </div>
          <h2 className="text-4xl font-semibold text-primary-text md:text-5xl tracking-[-0.01em]">
            Questions? Answers!
          </h2>
          <p className="mt-4 text-lg text-secondary-text">
            Find Some quick answers to the most common questions.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl">
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
                    <p className="leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <p className="mt-12 text-center text-secondary-text">
          Feel free to mail us for any enquiries :{" "}
          <a
            href="mailto:linkai@support.com"
            className="font-medium text-primary-text hover:underline"
          >
            linkai@support.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;


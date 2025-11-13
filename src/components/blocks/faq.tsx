"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const questions = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive web development services including custom web applications, frontend and backend development, API integration, and cloud deployment solutions.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on complexity. Simple websites typically take 2-4 weeks, while complex web applications can take 8-16 weeks or more.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Next.js, TypeScript, Node.js, and various databases. We choose the best tools for each project's specific needs.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance and support services after project completion. We can help with updates, bug fixes, and new feature development.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on project scope and requirements. Contact us for a free consultation and customized quote based on your specific needs.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Absolutely. We specialize in integrating new solutions with existing systems and can work with your current infrastructure and APIs.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development approach with regular communication, milestone reviews, and iterative improvements to ensure your project meets expectations.",
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
  content,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
  content?: Record<string, unknown>;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const faqContent = (content?.faqSection ?? content ?? {}) as {
    faqTitle?: string;
    faqDescription?: string;
    faq?: FAQItem[];
  };

  const faqTitle =
    faqContent.faqTitle ?? "Frequently Asked Questions";
  const faqDescription =
    faqContent.faqDescription ??
    "If you can't find what you're looking for, get in touch.";

  const faqItems =
    Array.isArray(faqContent.faq) && faqContent.faq.length > 0
      ? faqContent.faq
      : questions;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        setIsScrolling(scrollTop > 0 || scrollTop + clientHeight < scrollHeight - 10);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-6xl">
        <div className={cn("mx-auto grid gap-12 lg:gap-16 lg:grid-cols-2", className2)}>
          {/* Left side - Fixed */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-3xl lg:text-4xl font-bold text-foreground">
                {faqTitle}
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl font-bold text-foreground">
                {faqTitle}
              </h2>
            )}
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {faqDescription}{" "}
              <Link href="/contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
                get in touch
              </Link>
              .
            </p>
          </div>

          {/* Right side - Scrollable */}
          <div 
            ref={scrollContainerRef}
            className="grid gap-4 text-start max-h-[700px] lg:max-h-[800px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
            style={{
              scrollbarWidth: 'thin',
            }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`question-${i}`} className="border-border/50">
                  <AccordionTrigger className="text-sm md:text-base font-medium py-3 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

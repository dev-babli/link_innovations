"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { useStaggeredFadeIn } from "@/hooks/useSimpleFadeIn";

const articles = [
  {
    id: "1",
    title: "Digital Transformation: A Strategic Roadmap for 2025",
    excerpt: "Learn how to navigate the complexities of digital transformation with a clear, actionable strategy that delivers measurable results.",
    category: "Strategy",
    date: "October 28, 2025",
    author: "Sarah Johnson",
    href: "/insights/digital-transformation-roadmap",
  },
  {
    id: "2",
    title: "The ROI of Modern DevOps Practices",
    excerpt: "Discover how implementing DevOps methodologies can reduce deployment time by 60% and increase development velocity.",
    category: "Technology",
    date: "October 26, 2025",
    author: "Michael Chen",
    href: "/insights/roi-modern-devops",
  },
  {
    id: "3",
    title: "Building Resilient Cloud Infrastructure",
    excerpt: "Best practices for architecting cloud systems that can withstand failures and scale seamlessly with demand.",
    category: "Cloud",
    date: "October 23, 2025",
    author: "Emily Rodriguez",
    href: "/insights/resilient-cloud-infrastructure",
  },
  {
    id: "4",
    title: "AI-Powered Customer Experience Innovation",
    excerpt: "How artificial intelligence is reshaping customer interactions and creating personalized experiences at scale.",
    category: "Innovation",
    date: "October 21, 2025",
    author: "David Park",
    href: "/insights/ai-customer-experience",
  },
];

export function LatestThinking() {
  const { ref, visibleItems } = useStaggeredFadeIn(articles.length, 100);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20 bg-mckinsey-light-gray">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-mckinsey-navy">
              Latest Thinking
            </h2>
            <Link
              href="/insights"
              className="hidden md:flex items-center gap-2 text-mckinsey-blue hover:text-mckinsey-navy transition-colors font-medium group"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-mckinsey-slate text-lg max-w-2xl">
            Thought leadership and practical insights from our team of experts.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={article.href}
              className={`group block transition-opacity duration-700 ${
                visibleItems.has(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <article className="bg-white p-6 rounded-lg border border-gray-200 hover:border-mckinsey-blue hover:shadow-md transition-all h-full">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-mckinsey-blue/10 text-mckinsey-blue rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-mckinsey-slate">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-merriweather text-xl font-bold text-mckinsey-navy mb-3 group-hover:text-mckinsey-blue transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-mckinsey-slate text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-mckinsey-slate">
                    By {article.author}
                  </span>
                  <div className="flex items-center gap-2 text-mckinsey-blue font-medium text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-mckinsey-blue hover:text-mckinsey-navy transition-colors font-medium"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}











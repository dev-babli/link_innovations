"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { useStaggeredFadeIn } from "@/hooks/useSimpleFadeIn";

interface Insight {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  href: string;
}

const insights: Insight[] = [
  {
    id: "1",
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications, from code generation to intelligent automation.",
    category: "Artificial Intelligence",
    image: "/images/ai-brain-hero.jpg",
    date: "Oct 25, 2025",
    readTime: "5 min read",
    href: "/insights/future-of-ai-enterprise",
  },
  {
    id: "2",
    title: "Cloud-Native Architecture: Best Practices for 2025",
    excerpt: "A comprehensive guide to building scalable, resilient cloud-native applications with microservices, containerization, and modern DevOps practices.",
    category: "Cloud Computing",
    image: "/images/cloud-computing-hero.webp",
    date: "Oct 20, 2025",
    readTime: "7 min read",
    href: "/insights/cloud-native-architecture",
  },
  {
    id: "3",
    title: "Cybersecurity in the Age of Digital Transformation",
    excerpt: "Understanding the evolving threat landscape and implementing robust security measures to protect your digital assets in an increasingly connected world.",
    category: "Cybersecurity",
    image: "/images/services/cybersecurity-consulting.jpg",
    date: "Oct 15, 2025",
    readTime: "6 min read",
    href: "/insights/cybersecurity-digital-transformation",
  },
];

export function FeaturedInsights() {
  const { ref, visibleItems } = useStaggeredFadeIn(insights.length, 150);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-mckinsey-navy">
              Latest Insights
            </h2>
            <Link
              href="/insights"
              className="hidden md:flex items-center gap-2 text-mckinsey-blue hover:text-mckinsey-navy transition-colors font-medium group"
            >
              View All Insights
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-mckinsey-slate text-lg max-w-2xl">
            Expert perspectives on technology trends, digital transformation, and innovation strategies.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Link
              key={insight.id}
              href={insight.href}
              className={`group block transition-opacity duration-700 ${
                visibleItems.has(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <article className="h-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white text-mckinsey-blue rounded text-xs font-medium">
                      {insight.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-merriweather text-xl font-bold text-mckinsey-navy mb-3 group-hover:text-mckinsey-blue transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-mckinsey-slate text-sm mb-4 line-clamp-3">
                    {insight.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-mckinsey-slate">
                    <span>{insight.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{insight.readTime}</span>
                    </div>
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
            View All Insights
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}











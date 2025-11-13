"use client";

import React, { useState } from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import Link from "next/link";
import HeroSectionNew from "@/components/HeroSectionNew";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring the latest trends, frameworks, and technologies shaping the web development landscape.",
    category: "Web Development",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "💻"
  },
  {
    id: 2,
    title: "AI Integration Best Practices",
    excerpt: "How to ethically integrate AI into your applications while maintaining transparency and user trust.",
    category: "AI & ML",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "🤖"
  },
  {
    id: 3,
    title: "Cloud Migration Strategies",
    excerpt: "A comprehensive guide to migrating your infrastructure to the cloud with minimal disruption.",
    category: "Cloud Services",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "☁️"
  },
  {
    id: 4,
    title: "Mobile App Performance Optimization",
    excerpt: "Techniques for building fast, responsive mobile applications that users love.",
    category: "Mobile Development",
    date: "February 28, 2024",
    readTime: "5 min read",
    image: "📱"
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    excerpt: "Essential security practices every developer and organization should implement.",
    category: "Cybersecurity",
    date: "February 20, 2024",
    readTime: "8 min read",
    image: "🔒"
  },
  {
    id: 6,
    title: "Data Analytics for Business Growth",
    excerpt: "Leveraging data analytics to make informed decisions and drive business growth.",
    category: "Data Analytics",
    date: "February 15, 2024",
    readTime: "6 min read",
    image: "📊"
  }
];

const categories = ["All", "Web Development", "AI & ML", "Cloud Services", "Mobile Development", "Cybersecurity", "Data Analytics"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background-primary">
      <PerformanceOptimizer />
      <Navigation />

      {/* Hero Section */}
      <HeroSectionNew />
      
      {/* Blog Content */}
      <section className="bg-background-primary py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-accent-yellow/20 px-4 py-2 text-sm text-text-primary mb-8">
            <span className="w-2 h-2 bg-accent-yellow rounded-full"></span>
            Blog & Articles
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-medium text-text-primary mb-6">
            Insights & <span className="text-text-primary">Resources</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of experts.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-background-secondary py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent-yellow text-text-primary shadow-md"
                  : "bg-background-secondary text-text-secondary hover:bg-background-primary border border-border-subtle"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-background-primary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div key={post.id}>
              <Link href={`/blog/${post.id}`} className="group block h-full rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1">
                {/* Image */}
                <div className="w-full h-48 rounded-lg bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/20 flex items-center justify-center text-6xl mb-4">
                  {post.image}
                </div>

                {/* Category */}
                <div className="text-xs font-medium text-text-primary mb-2">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-text-primary mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* CTA */}
                <div className="text-sm text-text-primary font-medium flex items-center group-hover:opacity-70 transition-colors">
                  Read Article
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center rounded-xl border border-border-subtle bg-background-secondary p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              Want to Stay Updated?
            </h2>
            <p className="text-base text-text-secondary mb-8">
              Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border-subtle bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
              />
              <button className="rounded-full bg-accent-yellow px-8 py-3.5 font-medium text-text-primary transition-transform hover:scale-[1.02]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


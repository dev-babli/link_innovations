"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/header-3";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import ShaderShowcase from "@/components/ui/hero";
import TimeLine_01 from "@/components/ui/release-time-line";
import { AnimatedMetricCard } from "@/components/positivus/AnimatedMetricCard";
import { PositivusCard, PositivusButton, PositivusSection, PositivusGrid } from "@/components/positivus";
import { BentoGrid } from "@/components/ui/bento-grid-curtain";
import { motion } from "motion/react";
import { Check, ArrowRight, Building, TrendingUp, Award, Package, Calendar, Sparkles, Zap } from "lucide-react";
import "@/styles/positivus-theme.css";

interface IndustryPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  keyStats?: { value: string; label: string }[];
  challenges?: string[];
  solutions?: { title: string; description: string }[];
  caseStudies?: { title: string; description: string; result: string }[];
  expertise?: string[];
}

export function EnhancedIndustryPageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  keyStats,
  challenges,
  solutions,
  caseStudies,
  expertise,
}: IndustryPageProps) {
  
  // Create timeline entries for process phases
  const timelineEntries = [
    {
      icon: Package,
      title: 'Discovery & Assessment',
      subtitle: 'Phase 01 • Discovery',
      description: 'Understanding your industry challenges and requirements',
      items: [
        'Comprehensive industry analysis',
        'Stakeholder interviews and workshops',
        'Requirements gathering and documentation',
        'Technology assessment and feasibility study',
      ],
    },
    {
      icon: Sparkles,
      title: 'Solution Design',
      subtitle: 'Phase 02 • Design',
      description: 'Designing tailored solutions for your specific needs',
      items: [
        'Architecture and system design',
        'User experience and interface design',
        'Technical specifications and planning',
        'Integration strategy development',
      ],
    },
    {
      icon: Zap,
      title: 'Development & Integration',
      subtitle: 'Phase 03 • Development',
      description: 'Building and integrating solutions seamlessly',
      items: [
        'Agile development methodology',
        'Continuous integration and testing',
        'Third-party system integration',
        'Quality assurance and performance optimization',
      ],
    },
    {
      icon: Calendar,
      title: 'Deployment & Launch',
      subtitle: 'Phase 04 • Launch',
      description: 'Smooth deployment and go-live support',
      items: [
        'Production environment setup',
        'Data migration and system configuration',
        'User training and documentation',
        'Go-live support and monitoring',
      ],
    },
  ];

  const gradientColors = ['purple', 'blue', 'cyan'] as const;

  return (
    <div className="min-h-screen bg-white">
      <PerformanceOptimizer />
      <Header />

      {/* Hero Section - ShaderShowcase */}
      <div className="relative min-h-screen">
        <ShaderShowcase
          title={title}
          subtitle={subtitle}
          description={description}
          showNavigation={false}
          showPulsingBorder={true}
        />
        
        {/* Key Stats Overlay - Enhanced Cards */}
        {keyStats && keyStats.length > 0 && (
          <div className="absolute bottom-32 left-8 z-30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyStats.map((stat, index) => (
                <AnimatedMetricCard
                  key={index}
                  value={stat.value}
                  metric={stat.label}
                  gradient={gradientColors[index % gradientColors.length]}
                  className="backdrop-blur-sm bg-white/10 border-white/20"
                />
              ))}
            </div>
          </div>
        )}

        {/* Back Link Overlay */}
        <div className="absolute top-8 left-8 z-30">
          <Link href="/industries" className="text-white/80 hover:text-white transition-colors text-sm font-medium backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
            ← Back to Industries
          </Link>
        </div>
      </div>

      {/* Challenges Section - Bento Grid with Curtain Reveal */}
      {challenges && challenges.length > 0 && (
        <PositivusSection background="gray" padding="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="positivus-heading-2 text-gray-900 mb-4">
              Industry Challenges We Address
            </h2>
          </motion.div>
          <BentoGrid
            items={challenges.map((challenge, index) => ({
              id: `challenge-${index}`,
              title: challenge,
              description: `We address ${challenge.toLowerCase()} through innovative solutions tailored to your industry needs.`,
              icon: <Check className="w-6 h-6 text-[#8B5CF6]" />,
              useCurtain: true,
              className: "flex flex-col",
              gradient: "from-[#8B5CF6] to-[#7C3AED]",
            }))}
            columns={2}
          />
        </PositivusSection>
      )}

      {/* Process Timeline - TimeLine_01 */}
      <div className="bg-white py-20">
        <TimeLine_01
          title="Our Process"
          description="A proven methodology that delivers exceptional results at every stage."
          entries={timelineEntries}
        />
      </div>

      {/* Solutions - Enhanced Cards */}
      {solutions && solutions.length > 0 && (
        <PositivusSection background="gray" padding="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="positivus-heading-2 text-gray-900 mb-4">
              Our Solutions
            </h2>
          </motion.div>
          <BentoGrid
            items={solutions.map((solution, index) => ({
              id: `solution-${index}`,
              title: solution.title,
              description: solution.description,
              icon: <TrendingUp className="w-8 h-8 text-[#8B5CF6]" />,
              useCurtain: true,
              className: "flex flex-col h-full",
              gradient: index % 2 === 0 ? "from-[#8B5CF6] to-[#7C3AED]" : "from-[#3B82F6] to-[#2563EB]",
              href: "/contact",
            }))}
            columns={2}
          />
        </PositivusSection>
      )}

      {/* Case Studies - Enhanced Cards */}
      {caseStudies && caseStudies.length > 0 && (
        <PositivusSection background="white" padding="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="positivus-heading-2 text-gray-900 mb-4">
              Success Stories
            </h2>
          </motion.div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PositivusCard variant="elevated" hover className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Building className="w-8 h-8 text-[#8B5CF6] flex-shrink-0" />
                    <h3 className="positivus-heading-3 text-gray-900">
                      {study.title}
                    </h3>
                  </div>
                  <p className="positivus-body text-gray-600 leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#8B5CF6] font-medium">
                    <Award className="w-5 h-5" />
                    <span>{study.result}</span>
                  </div>
                </PositivusCard>
              </motion.div>
            ))}
          </div>
        </PositivusSection>
      )}

      {/* Expertise - Enhanced Cards */}
      {expertise && expertise.length > 0 && (
        <PositivusSection background="gray" padding="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="positivus-heading-2 text-gray-900 mb-4">
              Our Expertise
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <PositivusCard variant="light" className="px-6 py-4 min-w-[150px] text-center">
                  <span className="font-medium text-gray-900">{item}</span>
                </PositivusCard>
              </motion.div>
            ))}
          </div>
        </PositivusSection>
      )}

      {/* CTA Section */}
      <PositivusSection background="white" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <PositivusCard variant="elevated" className="p-8 md:p-12">
            <h2 className="positivus-heading-2 text-gray-900 mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="positivus-body-large text-gray-600 mb-8">
              Let's discuss how we can create custom solutions tailored to your industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PositivusButton variant="primary" size="lg" href="/contact">
                Get Started
              </PositivusButton>
              <PositivusButton variant="outline" size="lg" href="/services">
                Explore Services
              </PositivusButton>
            </div>
          </PositivusCard>
        </motion.div>
      </PositivusSection>

      <Footer />
    </div>
  );
}


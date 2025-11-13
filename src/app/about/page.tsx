"use client";

import React from "react";
import { motion } from "motion/react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { Target, Users, Lightbulb, Shield, Globe, Award, TrendingUp, Clock, CheckCircle } from "lucide-react";
import ImpactMetrics from "@/components/ImpactMetrics";
import { CTAWithShader } from "@/components/ui/cta-with-shader";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build long-term relationships based on trust, transparency, and mutual success.",
    },
    {
      icon: Target,
      title: "Excellence Driven",
      description: "We deliver exceptional quality in every project, exceeding expectations consistently.",
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "We prioritize data security and privacy in every solution we build.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international best practices and diverse perspectives to every engagement.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "We invest in our team's growth and stay ahead of technology trends.",
    },
  ];

  const stats = [
    {
      metric: "Projects Delivered",
      value: "500+",
      description: "Successful projects across industries"
    },
    {
      metric: "Client Satisfaction",
      value: "98%",
      description: "Client satisfaction rate"
    },
    {
      metric: "Team Members",
      value: "100+",
      description: "Expert developers and designers"
    },
    {
      metric: "Years of Experience",
      value: "10+",
      description: "Delivering excellence since 2014"
    }
  ];

  const whyWorkWithUs = [
    {
      icon: "🎯",
      title: "Proven Track Record",
      description: "500+ successful projects delivered across diverse industries and use cases."
    },
    {
      icon: "🚀",
      title: "Rapid Delivery",
      description: "Agile methodologies and efficient processes for faster time-to-market."
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      description: "Cutting-edge technologies and modern approaches to solve complex problems."
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team, not just a vendor."
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance in every solution."
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description: "Architectures that grow with your business and scale effortlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-background-primary">
      <PerformanceOptimizer />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-primary">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-accent-yellow/20 px-4 py-2 text-sm text-text-primary mb-4">
              <span className="w-2 h-2 bg-accent-yellow rounded-full"></span>
              About Link Innovations
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary leading-tight">
              Building Software That Transforms Businesses
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              We're a team of passionate developers, designers, and strategists dedicated to creating software solutions that drive real business value. With over 10 years of experience, we've helped hundreds of companies transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics
        metrics={stats}
        title="Our Impact"
        description="Numbers that reflect our commitment to excellence"
      />

      {/* Our Story */}
      <section className="bg-background-primary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-medium text-text-primary mb-4">
                Our Story
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                From a small team to a trusted partner for businesses worldwide
              </p>
            </motion.div>

            <div className="space-y-6 text-base text-text-secondary leading-relaxed">
              <p>
                Founded in 2014, Link Innovations started with a simple mission: to help businesses leverage technology to achieve their goals. What began as a small team of passionate developers has grown into a full-service software development company serving clients across industries.
              </p>
              <p>
                Over the years, we've evolved from a web development agency to a comprehensive technology partner. We've built everything from simple websites to complex enterprise platforms, always maintaining our commitment to quality, innovation, and client success.
              </p>
              <p>
                Today, we're proud to work with startups, mid-size companies, and enterprises, helping them navigate the digital landscape and build solutions that make a real impact. Our team of 100+ experts brings together diverse skills in development, design, DevOps, and strategy to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-yellow/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-text-primary" />
                </div>
                <h3 className="text-xl font-medium text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-background-primary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              What sets us apart in the software development industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWorkWithUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative software solutions.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-yellow text-text-primary hover:opacity-90 transition-all shadow-soft font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

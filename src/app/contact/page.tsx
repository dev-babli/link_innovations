"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Calendar } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "hello@linkinnovations.com",
      href: "mailto:hello@linkinnovations.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "123 Innovation Street, Tech City, TC 12345",
      href: "#"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team",
      value: "Available 24/7",
      href: "#"
    }
  ];

  const supportOptions = [
    {
      title: "Sales Inquiries",
      description: "Interested in our services? Let's discuss your project.",
      icon: "💼",
      action: "Schedule a Call"
    },
    {
      title: "Technical Support",
      description: "Need help with an existing project? We're here to help.",
      icon: "🛠️",
      action: "Get Support"
    },
    {
      title: "Partnership",
      description: "Let's explore partnership opportunities together.",
      icon: "🤝",
      action: "Partner With Us"
    },
    {
      title: "General Inquiry",
      description: "Have a question? We'd love to hear from you.",
      icon: "💬",
      action: "Send Message"
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
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary leading-tight">
              Let's Work Together
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? Want to learn more about our services? We're here to help. Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-medium text-text-primary mb-6">
                Contact Information
              </h2>
              <p className="text-base text-text-secondary mb-8 leading-relaxed">
                Reach out to us through any of these channels, and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border-subtle bg-background-secondary hover:bg-background-primary transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-yellow/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-yellow/30 transition-colors">
                      <method.icon className="w-6 h-6 text-text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-text-primary mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-text-secondary mb-2">
                        {method.description}
                      </p>
                      <p className="text-sm font-medium text-text-primary">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-6 rounded-xl border border-border-subtle bg-background-secondary">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-text-primary" />
                  <h3 className="text-base font-medium text-text-primary">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-1 text-sm text-text-secondary">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft">
                <h2 className="text-3xl font-medium text-text-primary mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow transition-all"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile Apps</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border-subtle bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-yellow text-text-primary hover:opacity-90 transition-all shadow-soft font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="bg-background-primary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Choose the option that best fits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-medium text-text-primary mb-3">
                  {option.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {option.description}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-text-primary hover:text-accent-yellow transition-colors"
                >
                  {option.action} →
                </a>
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
            className="max-w-4xl mx-auto text-center rounded-xl border border-border-subtle bg-background-secondary p-8 md:p-12 shadow-soft"
          >
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              Prefer to Schedule a Call?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a time that works for you, and we'll discuss your project in detail.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-yellow text-text-primary hover:opacity-90 transition-all shadow-soft font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

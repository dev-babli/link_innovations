"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  BrainCircuit,
  ChevronsRight,
  GitBranch,
  Settings2,
  Sparkles,
  User2,
  Zap,
} from "lucide-react";

interface IconWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  className = "",
  children,
}) => (
  <div
    className={`flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] ${className}`}
  >
    {children}
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#f5f5f5] py-24 sm:py-32">
      <div className="container">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
            <p className="text-badge text-muted-foreground">SERVICES</p>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-primary-text sm:text-5xl">
            Our AI-Driven Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary-text">
            Leverage AI features that boost performance to your business.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: AI Strategy Consulting */}
          <motion.div 
            className="flex flex-col rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:scale-[1.02]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative mb-8 flex flex-grow items-center justify-center overflow-hidden rounded-2xl bg-secondary/60 backdrop-blur-sm p-8 min-h-[300px]">
              <motion.div 
                className="absolute top-16 left-12 h-6 w-6 rounded-full border border-border bg-white/70 backdrop-blur-sm"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-12 right-12 h-10 w-10 rounded-full border border-border bg-white/70 backdrop-blur-sm"
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <svg
                width="140"
                height="80"
                viewBox="0 0 140 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute z-0"
              >
                <path
                  d="M36 71L104 9"
                  stroke="#E5E5E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <IconWrapper className="absolute top-8 left-8 h-16 w-16 rounded-2xl bg-white/80 backdrop-blur-md border border-border">
                <BarChart3 className="h-8 w-8 text-primary-text" />
              </IconWrapper>
              <IconWrapper className="absolute bottom-8 right-8 h-20 w-20 rounded-3xl bg-primary text-primary-foreground">
                <ChevronsRight className="h-10 w-10" />
              </IconWrapper>
            </div>
            <h3 className="text-xl font-semibold text-primary-text">
              AI Strategy Consulting
            </h3>
            <p className="mt-2 text-secondary-text">
              Get expert guidance to implement AI solutions that drive business
              growth
            </p>
          </motion.div>

          {/* Card 2: Content Generation */}
          <motion.div 
            className="flex flex-col rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:scale-[1.02]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mb-8 flex flex-grow flex-col justify-center overflow-hidden rounded-2xl bg-secondary/60 backdrop-blur-sm p-8 min-h-[300px]">
              <div className="w-full rounded-xl border border-border bg-white/80 backdrop-blur-md p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full border-2 border-primary bg-white"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="mt-4 h-16 rounded-md border border-dashed border-gray-300 p-2"></div>
                <div className="mt-3 space-y-2">
                  <div className="rounded-md border border-border bg-gray-50/80 backdrop-blur-sm px-3 py-1.5 text-sm text-secondary-text">
                    Continue writing
                  </div>
                  <div className="rounded-md border border-border bg-gray-50/80 backdrop-blur-sm px-3 py-1.5 text-sm text-secondary-text">
                    Fix spelling
                  </div>
                  <div className="rounded-md border border-border bg-gray-50/80 backdrop-blur-sm px-3 py-1.5 text-sm text-secondary-text">
                    Explain in detail
                  </div>
                </div>
              </div>
              <button className="absolute top-8 right-12 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md hover:scale-105 transition-transform">
                Generate
              </button>
            </div>
            <h3 className="text-xl font-semibold text-primary-text">
              Content Generation
            </h3>
            <p className="mt-2 text-secondary-text">
              We provide seamless content creation solutions that generate
              captivating, high-quality content in line with your brand's voice.
            </p>
          </motion.div>

          {/* Card 3: AI-Powered Chatbots */}
          <motion.div 
            className="flex flex-col rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:scale-[1.02]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative mb-8 flex flex-grow items-center justify-center overflow-hidden rounded-2xl bg-secondary/60 backdrop-blur-sm p-8 min-h-[300px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <IconWrapper className="absolute top-8 left-12 h-12 w-12 rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-6 w-6" />
                </IconWrapper>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <IconWrapper className="absolute top-16 right-8 h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-border">
                  <Sparkles className="h-5 w-5 text-primary-text" />
                </IconWrapper>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                <IconWrapper className="absolute bottom-24 left-8 h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-border">
                  <Zap className="h-5 w-5 text-primary-text" />
                </IconWrapper>
              </motion.div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <IconWrapper className="absolute bottom-8 right-16 h-12 w-12 rounded-full bg-primary text-primary-foreground">
                  <BrainCircuit className="h-6 w-6" />
                </IconWrapper>
              </motion.div>
              <div className="relative w-full max-w-sm">
                <div className="flex items-start gap-3 rounded-xl bg-white/80 backdrop-blur-md p-3 pr-8 shadow-sm">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                    <User2 className="h-4 w-4 text-gray-600" />
                  </div>
                  <p className="text-sm text-primary-text">
                    Set up a Zoom call with Emily at 10:00 AM on Wednesday.
                  </p>
                </div>
                <div className="mt-4 rounded-full border border-border bg-white/80 backdrop-blur-md py-3 px-4 text-sm text-muted-foreground shadow-sm">
                  Type a message
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-primary-text">
              AI-Powered Chatbots
            </h3>
            <p className="mt-2 text-secondary-text">
              We develop AI-driven chatbots with advanced cognitive technologies
              to elevate customer support and automate business operations.
            </p>
          </motion.div>

          {/* Card 4: Automated Workflows */}
          <motion.div 
            className="flex flex-col rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:scale-[1.02]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative mb-8 flex flex-grow items-center justify-center overflow-hidden rounded-2xl bg-secondary/60 backdrop-blur-sm p-8 min-h-[300px]">
              <IconWrapper className="absolute top-8 left-12 h-14 w-14 rounded-2xl bg-white/80 backdrop-blur-md border border-border">
                <Zap className="h-7 w-7 text-primary-text" />
              </IconWrapper>
              <IconWrapper className="absolute top-16 right-10 h-10 w-10 rounded-full bg-primary text-primary-foreground">
                <GitBranch className="h-5 w-5" />
              </IconWrapper>
               <IconWrapper className="absolute bottom-12 left-16 h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-border">
                <Settings2 className="h-5 w-5 text-primary-text" />
              </IconWrapper>

              <IconWrapper className="h-20 w-20 rounded-3xl bg-primary text-primary-foreground">
                <ChevronsRight className="h-10 w-10" />
              </IconWrapper>
            </div>
            <h3 className="text-xl font-semibold text-primary-text">
              Automated Workflows
            </h3>
            <p className="mt-2 text-secondary-text">
              Automate workflows to streamline tasks, boost efficiency, and save
              time
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


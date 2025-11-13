"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function FUIBentoGridDark() {
  return (
    <div className="pt-24 pb-32 container mx-auto min-w-screen flex flex-col p-10 bg-white">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
          <p className="text-xs font-medium text-[#000000] uppercase tracking-wider">SERVICES</p>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl mb-4">
          Our Core Services
        </h2>
        <p className="text-lg leading-8 text-[#000000]">
          Comprehensive IT solutions designed to transform your business and drive growth.
        </p>
      </motion.div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          index={0}
          eyebrow="Development"
          title="Web Development"
          description="Custom web applications and websites built with modern technologies and best practices. We deliver scalable, high-performance solutions that grow with your business."
          graphic={
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://framerusercontent.com/images/ghyfFEStl6BNusZl0ZQd5r7JpM.png)" }} />
          }
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          index={1}
          eyebrow="Mobile"
          title="Mobile Applications"
          description="Native iOS and Android applications that deliver exceptional user experiences. We build mobile solutions that drive engagement and deliver measurable results across all platforms."
          graphic={
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)" }} />
          }
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          index={2}
          eyebrow="Cloud"
          title="Cloud Solutions"
          description="Scalable cloud infrastructure and deployment solutions that ensure reliability, security, and cost-effectiveness. Migrate and optimize your infrastructure for the cloud."
          graphic={
            <div className="absolute inset-0 -top-20 -left-60 bg-cover bg-center bg-no-repeat bg-black" style={{ backgroundImage: "url(https://framerusercontent.com/images/gR21e8Wh6l3pU6CciDrqt8wjHM.png)" }} />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          index={3}
          eyebrow="Security"
          title="Cybersecurity"
          description="Comprehensive security solutions to protect your data, systems, and infrastructure from evolving cyber threats. We implement enterprise-grade security measures."
          graphic={
            <div className="absolute inset-0 bg-cover bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)" }} />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          index={4}
          eyebrow="AI/ML"
          title="AI & Machine Learning"
          description="Leverage cutting-edge AI and ML technologies to automate processes, enhance decision-making, and unlock new business opportunities. Transform data into intelligent insights."
          graphic={
            <div className="absolute inset-0 -top-44 -left-60 bg-cover bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url(https://framerusercontent.com/images/h496iPSwtSnGZwpJyErl6cLWdtE.png)" }} />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </div>
  );
}

export function BentoCard({
  index = 0,
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  index?: number;
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  // Alternate slide direction: even indices from left, odd from right
  const slideDirection = index % 2 === 0 ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x: slideDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-3xl",
        "bg-white transform-gpu shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300"
      )}
    >
      {/* Shadow element behind the card */}
      <div className="absolute -inset-2 bg-gradient-to-b from-black/10 via-black/5 to-transparent blur-xl rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
      
      <div className="relative">
        <div className="relative h-[29rem] shrink-0">
          {graphic}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          {fade.includes("top") && (
            <div className="absolute inset-0 bg-gradient-to-b from-white to-50% opacity-25" />
          )}
          {fade.includes("bottom") && (
            <div className="absolute inset-0 bg-gradient-to-t from-white to-50% opacity-25" />
          )}
        </div>
        <div className="relative p-10 z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl bg-white/95 text-[#1a1a1a] border-t border-gray-100">
          <h1 className="text-xs font-medium text-[#666666] uppercase tracking-wider mb-1">{eyebrow}</h1>
          <p className="mt-1 text-2xl/8 font-medium tracking-tight text-[#1a1a1a]">
            {title}
          </p>
          <p className="mt-2 max-w-[600px] text-sm/6 text-[#666666]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

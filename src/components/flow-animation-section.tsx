"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Zap, Users, Globe, Smartphone, Code, Rocket, Gauge, Award, Settings } from "lucide-react";

const clientNeeds = [
  {
    id: 1,
    title: "Enterprise Scalability",
    description: "Built to grow with your business, handling millions of users seamlessly",
    icon: TrendingUp,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Cutting-Edge Technology",
    description: "Leveraging the latest frameworks and tools for peak performance",
    icon: Zap,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "Dedicated Expertise",
    description: "Senior engineers and strategists committed to your success",
    icon: Users,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
];

const services = [
  {
    id: 1,
    title: "Enterprise Web Solutions",
    description: "High-performance web applications that scale",
    icon: Globe
  },
  {
    id: 2,
    title: "Native Mobile Applications",
    description: "iOS and Android apps with native performance",
    icon: Smartphone
  },
  {
    id: 3,
    title: "Custom Software Development",
    description: "Tailored solutions for unique business needs",
    icon: Code
  },
];

const results = [
  {
    id: 1,
    title: "Revenue Acceleration",
    description: "Drive measurable growth and market expansion",
    icon: Rocket,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 2,
    title: "Operational Excellence",
    description: "Streamline processes and reduce costs by up to 40%",
    icon: Gauge,
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: 3,
    title: "Market Leadership",
    description: "Outpace competitors with innovative technology",
    icon: Award,
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
];

export function FlowAnimationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [activeFlow, setActiveFlow] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background-primary py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
            From Vision to Market Leadership
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* LEFT – Client Needs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-[28px] font-semibold text-text-primary mb-6 text-center lg:text-left">
                Your Challenges
              </h3>

              {clientNeeds.map((need, index) => (
                <motion.div
                  key={need.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveFlow(index)}
                  className="
                  relative p-6 lg:p-7 rounded-2xl 
                  backdrop-blur-xl bg-white/5 border border-white/10 
                  shadow-[0px_2px_8px_rgba(0,0,0,0.06)] 
                  hover:bg-white/10 hover:border-white/20 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)]
                  overflow-hidden group
                  cursor-pointer
                  transition-all duration-300
                "
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Mirror shine moving on hover */}
                  <div
                    className="
                    absolute top-0 left-[-150%] w-[130%] h-full 
                    bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    rotate-12 
                    group-hover:left-[150%] 
                    transition-all duration-700 ease-in-out
                  "
                  />

                  {/* Bottom border glow on hover */}
                  <div
                    className="
                    absolute bottom-0 left-0 w-0 h-1 rounded-full 
                    bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
                    group-hover:w-full 
                    transition-all duration-500
                  "
                  />

                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className={`
                      w-14 h-14 rounded-2xl 
                      bg-gradient-to-br ${need.gradient}
                      backdrop-blur-sm
                      border border-white/20 
                      flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300
                      shadow-md flex-shrink-0
                    `}
                    >
                      <need.icon className="w-7 h-7 text-text-primary" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-text-primary font-semibold text-lg mb-1">
                        {need.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {need.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CENTER – Processing Unit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center justify-center py-12"
            >
              {/* Flow Lines (blue dashed) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="absolute w-full h-full">
                  {/* LEFT → CENTER lines */}
                  {clientNeeds.map((_, i) => {
                    const total = clientNeeds.length;
                    const startY = (i + 0.5) * (100 / total);

                    return (
                      <motion.line
                        key={i}
                        x1="0%"
                        y1={`${startY}%`}
                        x2="50%"
                        y2="50%"
                        stroke="rgba(59, 130, 246, 0.4)"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        animate={{ strokeDashoffset: [0, -24] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                        }}
                      />
                    );
                  })}

                  {/* CENTER → RIGHT lines */}
                  {results.map((_, i) => {
                    const total = results.length;
                    const endY = (i + 0.5) * (100 / total);

                    return (
                      <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2="100%"
                        y2={`${endY}%`}
                        stroke="rgba(139, 92, 246, 0.4)"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        animate={{ strokeDashoffset: [0, -24] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                        }}
                      />
                    );
                  })}
                </svg>
                {/* Diamonds moving along Left → Center dotted line */}
                {clientNeeds.map((_, index) => {
                  const total = clientNeeds.length;
                  const startX = 0;
                  const startY = (index + 0.5) * (100 / total);
                  const endX = 50;
                  const endY = 50;

                  return (
                    <motion.div
                      key={`diamond-left-${index}`}
                      className="
                      absolute w-4 h-4 rotate-45
                      bg-gradient-to-br from-blue-500 to-cyan-500
                      shadow-[0_0_12px_rgba(59,130,246,0.6)]
                      border border-blue-300/50
                      rounded-sm
                    "
                      style={{
                        left: `${startX}%`,
                        top: `${startY}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        left: [`${startX}%`, `${endX}%`],
                        top: [`${startY}%`, `${endY}%`],
                      }}
                      transition={{
                        duration: 2.5 + index * 0.3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })}

                {/* Diamonds moving along Center → Right dotted line */}
                {results.map((_, index) => {
                  const total = results.length;
                  const startX = 50;
                  const startY = 50;
                  const endX = 100;
                  const endY = (index + 0.5) * (100 / total);

                  return (
                    <motion.div
                      key={`diamond-right-${index}`}
                      className="
                      absolute w-4 h-4 rotate-45
                      bg-gradient-to-br from-purple-500 to-pink-500
                      shadow-[0_0_12px_rgba(139,92,246,0.6)]
                      border border-purple-300/50
                      rounded-sm
                    "
                      style={{
                        left: `${startX}%`,
                        top: `${startY}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        left: [`${startX}%`, `${endX}%`],
                        top: [`${startY}%`, `${endY}%`],
                      }}
                      transition={{
                        duration: 2.5 + index * 0.3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })}
              </div>

              {/* Center Circle - Glassmorphic */}
              <div className="relative w-40 h-40 flex items-center justify-center">
                <div
                  className="relative w-40 h-40 rounded-3xl backdrop-blur-xl bg-white/10 border-2 border-white/20 
                  flex items-center justify-center text-5xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] z-10 
                  group overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Settings className="w-12 h-12 text-text-primary" strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Pulsing ripples */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-3xl border-2 border-white/10"
                    style={{
                      width: 160 + i * 25,
                      height: 160 + i * 25,
                    }}
                    initial={{ scale: 0.8, opacity: 0.4 }}
                    animate={{
                      scale: [0.8, 1.3, 0.8],
                      opacity: [0.4, 0, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold text-text-secondary text-center tracking-wide uppercase">
                Strategic Execution
              </p>
            </motion.div>

            {/* RIGHT – Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-[28px] font-semibold text-text-primary mb-6 text-center lg:text-right">
                Measurable Outcomes
              </h3>

              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="
                  relative p-6 lg:p-7 rounded-2xl 
                  backdrop-blur-xl bg-white/5 border border-white/10 
                  shadow-[0px_2px_8px_rgba(0,0,0,0.06)] 
                  hover:bg-white/10 hover:border-white/20 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)]
                  overflow-hidden group
                  transition-all duration-300
                "
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Mirror shine moving on hover */}
                  <div
                    className="
                    absolute top-0 left-[-150%] w-[130%] h-full 
                    bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    rotate-12 
                    group-hover:left-[150%] 
                    transition-all duration-700 ease-in-out
                  "
                  />

                  {/* Bottom border glow on hover */}
                  <div
                    className="
                    absolute bottom-0 left-0 w-0 h-1 rounded-full 
                    bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 
                    group-hover:w-full 
                    transition-all duration-500
                  "
                  />

                  <div className="flex items-start gap-4 justify-end lg:justify-start relative z-10">
                    <div className="flex-1 text-right lg:text-left">
                      <h4 className="text-text-primary font-semibold text-lg mb-1">
                        {result.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                    <div
                      className={`
                      w-14 h-14 rounded-2xl 
                      bg-gradient-to-br ${result.gradient}
                      backdrop-blur-sm
                      border border-white/20 
                      flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300
                      shadow-md flex-shrink-0
                    `}
                    >
                      <result.icon className="w-7 h-7 text-text-primary" strokeWidth={2} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 pt-16 border-t border-border-subtle"
          >
            <h3 className="text-[32px] font-semibold text-text-primary mb-12 text-center">
              Core Capabilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="
                    relative p-8 lg:p-10 rounded-2xl 
                    backdrop-blur-xl bg-white/5 border border-white/10 
                    shadow-[0px_2px_8px_rgba(0,0,0,0.06)] 
                    hover:bg-white/10 hover:border-white/20 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)]
                    transition-all duration-300 text-center group overflow-hidden
                  "
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative z-10">
                    <div
                      className="w-20 h-20 rounded-2xl 
                      bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                      backdrop-blur-sm border border-white/20 
                      flex items-center justify-center mx-auto mb-6 
                      group-hover:scale-110 transition-transform duration-300
                      shadow-md"
                    >
                      <service.icon className="w-10 h-10 text-text-primary" strokeWidth={2} />
                    </div>

                    <h4 className="text-text-primary font-semibold text-lg mb-2">
                      {service.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGit, SiGithub, SiVercel, SiFigma } from 'react-icons/si';

const techLogos = [
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
        <SiReact className="text-cyan-400 text-6xl" />
      </motion.div>
    ),
    title: "React",
    href: "https://react.dev"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
        <SiNextdotjs className="text-[#1a1a1a] text-6xl" />
      </motion.div>
    ),
    title: "Next.js",
    href: "https://nextjs.org"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgb(96, 165, 250))" }} transition={{ duration: 0.3 }}>
        <SiTypescript className="text-blue-400 text-6xl" />
      </motion.div>
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={{ duration: 0.3 }}>
        <SiTailwindcss className="text-cyan-300 text-6xl" />
      </motion.div>
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
        <SiNodedotjs className="text-green-400 text-6xl" />
      </motion.div>
    ),
    title: "Node.js",
    href: "https://nodejs.org"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.3 }}>
        <SiMongodb className="text-green-300 text-6xl" />
      </motion.div>
    ),
    title: "MongoDB",
    href: "https://www.mongodb.com"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgb(147, 197, 253))" }} transition={{ duration: 0.3 }}>
        <SiPostgresql className="text-blue-300 text-6xl" />
      </motion.div>
    ),
    title: "PostgreSQL",
    href: "https://www.postgresql.org"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, y: -8 }} transition={{ duration: 0.3, type: "spring" }}>
        <SiDocker className="text-blue-400 text-6xl" />
      </motion.div>
    ),
    title: "Docker",
    href: "https://www.docker.com"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
        <SiGit className="text-orange-400 text-6xl" />
      </motion.div>
    ),
    title: "Git",
    href: "https://git-scm.com"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgb(255, 255, 255))" }} transition={{ duration: 0.3 }}>
        <SiGithub className="text-[#1a1a1a] text-6xl" />
      </motion.div>
    ),
    title: "GitHub",
    href: "https://github.com"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
        <SiVercel className="text-[#1a1a1a] text-6xl" />
      </motion.div>
    ),
    title: "Vercel",
    href: "https://vercel.com"
  },
  {
    node: (
      <motion.div whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgb(192, 132, 252))" }} transition={{ duration: 0.3 }}>
        <SiFigma className="text-purple-400 text-6xl" />
      </motion.div>
    ),
    title: "Figma",
    href: "https://www.figma.com"
  },
];


const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f5f5f5] pt-[40px]"
    >
      <video
        src="https://framerusercontent.com/assets/aMPvRVYHFQxBoB0v2qyJln83jI.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,_transparent_0%,#f5f5f5_70%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex cursor-default items-center rounded-full border border-white/30 bg-white/70 backdrop-blur-md px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1a1a1a] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              INNOVATIVE IT SOLUTIONS
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            <motion.div 
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="relative flex h-[139px] w-[139px] items-center justify-center rounded-full bg-gradient-to-b from-[#d7d7d7] to-white shadow-[0_30px_40px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-[#ccc]/50"
                animate={{ 
                  boxShadow: [
                    "0_30px_40px_rgba(0,0,0,0.08)",
                    "0_35px_50px_rgba(0,0,0,0.12)",
                    "0_30px_40px_rgba(0,0,0,0.08)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex h-[105px] w-[105px] items-center justify-center rounded-full bg-[#1a1a1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5),0_20px_25px_rgba(0,0,0,0.8)]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/svgs/6ZRrNs4Gy2rcMzXTLB8Tl2NZ51I-2.svg"
                    alt="Link Innovations logo"
                    width={77}
                    height={55}
                    priority
                  />
                </div>
              </motion.div>
              <motion.h1 
                className="text-[96px] font-semibold leading-none tracking-[-0.02em] md:text-[80px] sm:text-6xl"
                style={{ color: '#000000' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                LINK <span style={{ color: '#000000' }}>INNOVATIONS</span>
              </motion.h1>
            </motion.div>
            <motion.p 
              className="max-w-[580px] text-xl leading-relaxed"
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Building innovative digital solutions for modern businesses
            </motion.p>
          </div>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl px-8 py-4 text-[15px] font-medium shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
              style={{ color: '#ffffff', backgroundColor: '#000000' }}
            >
              <span style={{ color: '#ffffff' }}>Start Your Project</span>
            </a>
            <a
              href="./#services"
              className="group inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/70 backdrop-blur-md px-8 py-4 text-[15px] font-medium shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              style={{ color: '#1a1a1a' }}
            >
              <span style={{ color: '#1a1a1a' }}>Explore Our Services</span>
            </a>
          </motion.div>

          {/* Technology Logos - Just the moving logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-full mt-20 max-w-[1200px]"
          >
            <div style={{ height: '120px', position: 'relative', overflow: 'hidden', width: '100%' }}>
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={80}
                gap={50}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#f5f5f5"
                ariaLabel="Technology stack"
                className="[--logoloop-fadeColor:#f5f5f5]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
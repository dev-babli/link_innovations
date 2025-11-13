"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma
} from "react-icons/si";

const VIDEO_SRC =
  "https://yellow.ai/wp-content/uploads/2025/09/hero-video-25.mp4";

// Base tech logos with original colors (will be styled white by default, show colors on hover)
const techLogosBase = [
  {
    node: <SiReact className="text-4xl md:text-5xl" style={{ color: '#61DAFB' }} />,
    title: "React",
    href: "https://react.dev"
  },
  {
    node: <SiNextdotjs className="text-4xl md:text-5xl" style={{ color: '#000000' }} />,
    title: "Next.js",
    href: "https://nextjs.org"
  },
  {
    node: <SiTypescript className="text-4xl md:text-5xl" style={{ color: '#3178C6' }} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org"
  },
  {
    node: <SiTailwindcss className="text-4xl md:text-5xl" style={{ color: '#06B6D4' }} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com"
  },
  {
    node: <SiNodedotjs className="text-4xl md:text-5xl" style={{ color: '#339933' }} />,
    title: "Node.js",
    href: "https://nodejs.org"
  },
  {
    node: <SiMongodb className="text-4xl md:text-5xl" style={{ color: '#47A248' }} />,
    title: "MongoDB",
    href: "https://www.mongodb.com"
  },
  {
    node: <SiPostgresql className="text-4xl md:text-5xl" style={{ color: '#4169E1' }} />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org"
  },
  {
    node: <SiDocker className="text-4xl md:text-5xl" style={{ color: '#2496ED' }} />,
    title: "Docker",
    href: "https://www.docker.com"
  },
  {
    node: <SiGit className="text-4xl md:text-5xl" style={{ color: '#F05032' }} />,
    title: "Git",
    href: "https://git-scm.com"
  },
  {
    node: <SiGithub className="text-4xl md:text-5xl" style={{ color: '#181717' }} />,
    title: "GitHub",
    href: "https://github.com"
  },
  {
    node: <SiVercel className="text-4xl md:text-5xl" style={{ color: '#000000' }} />,
    title: "Vercel",
    href: "https://vercel.com"
  },
  {
    node: <SiFigma className="text-4xl md:text-5xl" style={{ color: '#F24E1E' }} />,
    title: "Figma",
    href: "https://www.figma.com"
  }
];


const HeroSectionNew: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <>
      <style jsx global>{`
        .hero-yellow-text {
          color: #F2CB67 !important;
        }
        .hero-yellow-bg {
          background-color: #F2CB67 !important;
        }
        .hero-yellow-bg-opacity {
          background-color: rgba(242,203,103,0.2) !important;
        }
        .hero-yellow-bg-opacity:hover {
          background-color: rgba(242,203,103,0.3) !important;
        }
        .hero-yellow-dot {
          background-color: #F2CB67 !important;
        }
        .hero-yellow-gradient {
          background: linear-gradient(to right, rgba(242,203,103,0.5), #F2CB67, rgba(242,203,103,0.5)) !important;
        }
        .hero-button-yellow {
          background-color: #F2CB67 !important;
          box-shadow: 0 12px 40px 0 rgba(242,203,103,0.5) !important;
        }
        .hero-button-yellow:hover {
          box-shadow: 0 12px 40px 0 rgba(242,203,103,0.6) !important;
        }
        .hero-button-gradient {
          background: linear-gradient(to right, #F2CB67, #F4D178, #F2CB67) !important;
        }
        .hero-description-text {
          color: #FFFFFF !important;
        }
        .hero-font-heading {
          font-family: var(--font-heading) !important;
        }
        .hero-font-body {
          font-family: var(--font-body) !important;
        }
        .hero-built-with-text {
          color: #000000 !important;
        }
        .hero-modern-tech-text {
          color: #FFFFFF !important;
        }
        .hero-logo-container svg {
          filter: brightness(0) invert(1) !important;
          transition: filter 0.3s ease, color 0.3s ease;
        }
        .hero-logo-container .logoloop__link:hover svg,
        .hero-logo-container .logoloop__item:hover svg,
        .hero-logo-container .logoloop__node:hover svg,
        .hero-logo-container a:hover svg,
        .hero-logo-container li:hover svg,
        .hero-logo-container .logoloop__link:hover svg *,
        .hero-logo-container .logoloop__item:hover svg *,
        .hero-logo-container .logoloop__node:hover svg * {
          filter: none !important;
        }
      `}</style>
      <section className="relative w-full min-h-[calc(90vh-10px)] flex items-center justify-center md:justify-start bg-background-primary overflow-visible px-6 md:px-16 lg:px-20 -mt-[104px] pt-[104px] pb-16 rounded-b-[60px] lg:rounded-b-[80px]">
      {/* Hero video background */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover opacity-90 rounded-b-[60px] lg:rounded-b-[80px]"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Hero animation showcasing Link Innovations"
      />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-x-12 items-center">
          <div className="text-center lg:text-left space-y-6 lg:space-y-7">
            {/* Main headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight font-heading hero-font-heading">
                <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Build Software That</span>{" "}
                <span className="relative hero-yellow-text">
                  Grows With You
                  <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full hero-yellow-gradient"></span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-white max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] font-body hero-font-body hero-description-text">
                From idea to launch in weeks, not months. We build scalable, performant software that your team and customers will love.
              </p>
            </div>

            {/* Feature bullets */}
            <ul className="space-y-3 text-white/90 max-w-xl mx-auto lg:mx-0 text-left">
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors hero-yellow-bg-opacity">
                  <div className="w-2 h-2 rounded-full hero-yellow-dot"></div>
                </div>
                <span className="text-base font-medium font-body hero-font-body">Modern tech stack for speed & performance</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors hero-yellow-bg-opacity">
                  <div className="w-2 h-2 rounded-full hero-yellow-dot"></div>
                </div>
                <span className="text-base font-medium font-body hero-font-body">Human-centered design across all platforms</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors hero-yellow-bg-opacity">
                  <div className="w-2 h-2 rounded-full hero-yellow-dot"></div>
                </div>
                <span className="text-base font-medium font-body hero-font-body">150+ integrations to launch faster</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <a
                href="#contact"
                className="group relative text-black text-base font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:scale-[1.05] overflow-hidden font-body hero-font-body hero-button-yellow"
              >
                <span className="relative z-10">Book a demo</span>
                <svg 
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hero-button-gradient"></div>
              </a>
              <a
                href="#learn"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-base font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-[1.05] font-body hero-font-body"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-0 h-[450px] lg:h-[550px]">
            {/* Right side content area - can be used for images or other content */}
          </div>
        </div>

        {/* Technology Logos Section - Extends across full width, beyond grid */}
        <div className="relative mt-12 lg:mt-14 w-full -mx-6 md:-mx-16 lg:-mx-20 px-6 md:px-16 lg:px-20">
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Text */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-medium tracking-tight font-heading hero-font-heading hero-built-with-text">
                Built with
              </h3>
              <p className="text-lg lg:text-xl mt-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] font-body hero-font-body hero-modern-tech-text">
                Modern Technologies
              </p>
            </div>

            {/* Divider Line */}
            <div className="hidden lg:block w-px h-12 bg-white/30 flex-shrink-0" />

            {/* Right Logos - Extends to right edge */}
            <div className="flex-1 w-full min-w-0 overflow-visible">
              <motion.div
                className="hero-logo-container flex items-center gap-8 lg:gap-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <LogoLoop
                  logos={techLogosBase}
                  speed={70}
                  direction="left"
                  logoHeight={48}
                  gap={48}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="rgba(0,0,0,0)"
                  ariaLabel="Technology stack"
                  className="[--logoloop-fadeColor:rgba(0,0,0,0)] w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSectionNew;

"use client";

import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Eye,
  Clock,
  Handshake,
  Lightbulb,
  Link2,
  Search,
  FileSearch,
  Layers,
  Code,
  Rocket,
  Palette
} from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

import { cn } from "@/lib/utils";

const Skiper49 = () => {
  const items = [
    {
      src: "/Step-1.png",
      alt: "Transparency",
      icon: Eye,
      title: "Transparency.",
      description: "You'll always know what's happening — no hidden layers.",
    },
    {
      src: "/Step-1(2).png",
      alt: "Reliability",
      icon: Clock,
      title: "Reliability.",
      description: "We deliver on time, or communicate early.",
    },
    {
      src: "/Step-3.png",
      alt: "Partnership",
      icon: Handshake,
      title: "Partnership.",
      description: "We grow when you do — your goals are ours.",
    },
    {
      src: "/Step-4.png",
      alt: "Technology should simplify",
      icon: Lightbulb,
      title: "Technology should simplify, not complicate.",
      description: "We design products that make life easier — not harder.",
    },
    {
      src: "/Step-5.png",
      alt: "Partnerships should outlast projects",
      icon: Link2,
      title: "Partnerships should outlast projects.",
      description: "We're here for the journey, not just the launch.",
    },
    {
      src: "/UIUX.png",
      alt: "UI/UX Design",
      icon: Palette,
      title: "UI/UX Design Excellence.",
      description: "We create intuitive and beautiful user experiences.",
    },
    {
      src: "/wireframing-prototyping.jpeg",
      alt: "Wireframing and Prototyping",
      icon: Layers,
      title: "Wireframing & Prototyping.",
      description: "We visualize concepts before building them.",
    },
    {
      src: "/research.jpeg",
      alt: "Research",
      icon: FileSearch,
      title: "Research & Analysis.",
      description: "We understand your users and market deeply.",
    },
    {
      src: "/freepik__create-a-image-like-the-prompt-below-but-for-conta__40693.jpeg",
      alt: "Development",
      icon: Code,
      title: "Development & Testing.",
      description: "We build robust and scalable solutions.",
    },
    {
      src: "/freepik__create-a-image-like-the-prompt-below-but-for-conta__40695.jpeg",
      alt: "Launch",
      icon: Rocket,
      title: "Launch & Support.",
      description: "We ensure smooth deployment and ongoing support.",
    },
    {
      src: "/design.jpeg",
      alt: "Design",
      icon: Search,
      title: "Transparency builds trust.",
      description: "We stay open in process, pricing, and communication.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] py-24 lg:py-32">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Carousel_003 className="" items={items} showPagination showNavigation loop />
      </div>
    </section>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  items,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  items: { src: string; alt: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; title: string; description: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 680px;
    padding-bottom: 60px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 520px;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .Carousal_003 .swiper-slide-active {
    box-shadow: 
      0 32px 80px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 0 60px rgba(59, 130, 246, 0.15);
  }

  .swiper-pagination {
    bottom: 0 !important;
  }

  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.4) !important;
    width: 12px !important;
    height: 12px !important;
    opacity: 0.6 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    margin: 0 6px !important;
  }

  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    background-color: rgba(255, 255, 255, 1) !important;
    width: 32px !important;
    border-radius: 6px !important;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5) !important;
  }

`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-7xl px-6 lg:px-12", className)}
    >
      <style>{css}</style>

      {/* Premium Navigation in top right corner */}
      {showNavigation && (
        <div className="absolute top-4 right-6 lg:top-6 lg:right-12 z-30 flex gap-3">
          <button
            className="swiper-button-prev-custom group relative w-14 h-14 flex items-center justify-center 
              bg-gradient-to-br from-white/10 to-white/5 
              backdrop-blur-xl 
              border border-white/20 
              rounded-2xl 
              shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
              transition-all duration-500 ease-out
              hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10
              hover:border-white/30 
              hover:scale-110
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]
              active:scale-95"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <button
            className="swiper-button-next-custom group relative w-14 h-14 flex items-center justify-center 
              bg-gradient-to-br from-white/10 to-white/5 
              backdrop-blur-xl 
              border border-white/20 
              rounded-2xl 
              shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
              transition-all duration-500 ease-out
              hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10
              hover:border-white/30 
              hover:scale-110
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]
              active:scale-95"
          >
            <ChevronRightIcon className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                delay: 1500,
                disableOnInteraction: true,
              }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                clickable: true,
              }
              : false
          }
          navigation={
            showNavigation
              ? {
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <SwiperSlide key={index} className="group">
                <div className="relative h-full w-full overflow-hidden">
                  {/* Premium Image with Parallax Effect */}
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.12]"
                    sizes="(max-width: 768px) 100vw, 520px"
                    quality={95}
                  />

                  {/* Premium Multi-layer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Premium Glow Effect on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                  {/* Premium Glassmorphic Content Card */}
                  <div className="absolute inset-0 flex items-end justify-center pb-10 px-8 pointer-events-none">
                    <motion.div
                      className="w-full relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Main Glass Card */}
                      <div className="relative backdrop-blur-2xl 
                        bg-gradient-to-b from-white/[0.12] to-white/[0.08]
                        border border-white/25 
                        rounded-3xl 
                        p-8
                        shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.3)]
                        transform 
                        transition-all duration-700 ease-out
                        group-hover:bg-gradient-to-b group-hover:from-white/[0.18] group-hover:to-white/[0.12]
                        group-hover:border-white/35
                        group-hover:scale-[1.02]
                        group-hover:shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.15),0_0_40px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]">

                        {/* Top Edge Highlight */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                        {/* Premium Icon Container */}
                        <div className="flex justify-center mb-6">
                          <motion.div
                            className="relative w-20 h-20 flex items-center justify-center 
                              backdrop-blur-xl 
                              bg-gradient-to-br from-white/25 to-white/15
                              border border-white/35 
                              rounded-2xl 
                              shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]
                              group-hover:bg-gradient-to-br group-hover:from-white/35 group-hover:to-white/20
                              group-hover:border-white/45
                              transition-all duration-500 ease-out"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <IconComponent className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={2.5} />

                            {/* Icon Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                          </motion.div>
                        </div>

                        {/* Premium Typography */}
                        <h3 className="text-2xl font-semibold mb-3 text-white text-center leading-tight tracking-tight
                          drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                          {item.title}
                        </h3>

                        <p className="text-[15px] text-white/85 text-center leading-relaxed font-light tracking-wide
                          drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                          {item.description}
                        </p>

                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mt-6" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };

/**
 * Skiper 49 Carousel_003 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */

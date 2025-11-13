"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AccordionItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  imageAlt?: string;
}

interface DetailsSummaryAccordionProps {
  items?: AccordionItem[];
}

const defaultItems: AccordionItem[] = [
  {
    id: "01",
    title: "Innovation Strategy",
    description: "Transform your business with cutting-edge technology solutions that drive growth and competitive advantage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    image: "/images/process-cards/easy.jpg",
    imageAlt: "Innovation Strategy",
  },
  {
    id: "02",
    title: "Digital Transformation",
    description: "Modernize your operations with intelligent automation and cloud-native architectures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    image: "/images/process-cards/collabarate.jpg",
    imageAlt: "Digital Transformation",
  },
  {
    id: "03",
    title: "AI & Machine Learning",
    description: "Leverage artificial intelligence to unlock insights and automate complex processes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    image: "/images/process-cards/track.jpg",
    imageAlt: "AI & Machine Learning",
  },
  {
    id: "04",
    title: "Cloud Solutions",
    description: "Scale seamlessly with secure, high-performance cloud infrastructure tailored to your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    image: "/images/process-cards/easy.jpg",
    imageAlt: "Cloud Solutions",
  },
  {
    id: "05",
    title: "Enterprise Integration",
    description: "Connect your systems seamlessly with robust APIs and integration platforms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    image: "/images/process-cards/collabarate.jpg",
    imageAlt: "Enterprise Integration",
  },
];

export default function DetailsSummaryAccordion({ items = defaultItems }: DetailsSummaryAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isCheckingDetails, setIsCheckingDetails] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  // Handle toggle events
  useEffect(() => {
    const handleToggle = (e: Event, index: number) => {
      const target = e.target as HTMLDetailsElement;
      if (target.open) {
        setOpenIndex(index);
        setIsCheckingDetails(true);
      } else {
        if (openIndex === index) {
          setOpenIndex(null);
        }
        setIsCheckingDetails(false);
      }
    };

    // Add toggle listeners
    const cleanup: (() => void)[] = [];
    detailsRefs.current.forEach((details, index) => {
      if (details) {
        const handler = (e: Event) => handleToggle(e, index);
        details.addEventListener("toggle", handler);
        cleanup.push(() => details.removeEventListener("toggle", handler));
      }
    });

    return () => {
      cleanup.forEach(fn => fn());
    };
  }, [openIndex]);

  const handleNext = () => {
    if (openIndex !== null && openIndex < items.length - 1) {
      const currentDetails = detailsRefs.current[openIndex];
      if (currentDetails) {
        currentDetails.open = false;
      }
      const nextDetails = detailsRefs.current[openIndex + 1];
      if (nextDetails) {
        nextDetails.open = true;
        setOpenIndex(openIndex + 1);
      }
    } else if (openIndex === items.length - 1) {
      // Wrap to first
      const currentDetails = detailsRefs.current[openIndex];
      if (currentDetails) {
        currentDetails.open = false;
      }
      const firstDetails = detailsRefs.current[0];
      if (firstDetails) {
        firstDetails.open = true;
        setOpenIndex(0);
      }
    }
  };

  const handlePrevious = () => {
    if (openIndex !== null && openIndex > 0) {
      const currentDetails = detailsRefs.current[openIndex];
      if (currentDetails) {
        currentDetails.open = false;
      }
      const prevDetails = detailsRefs.current[openIndex - 1];
      if (prevDetails) {
        prevDetails.open = true;
        setOpenIndex(openIndex - 1);
      }
    } else if (openIndex === 0) {
      // Wrap to last
      const currentDetails = detailsRefs.current[0];
      if (currentDetails) {
        currentDetails.open = false;
      }
      const lastDetails = detailsRefs.current[items.length - 1];
      if (lastDetails) {
        lastDetails.open = true;
        setOpenIndex(items.length - 1);
      }
    }
  };

  const handleExit = () => {
    if (openIndex !== null) {
      const currentDetails = detailsRefs.current[openIndex];
      if (currentDetails) {
        currentDetails.open = false;
        setOpenIndex(null);
      }
    }
  };

  // Handle click on details to ensure state syncs
  const handleDetailsClick = (index: number) => {
    const details = detailsRefs.current[index];
    if (details) {
      // Small delay to allow native toggle to complete
      setTimeout(() => {
        if (details.open) {
          setOpenIndex(index);
        } else if (openIndex === index) {
          setOpenIndex(null);
        }
      }, 0);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 lg:py-24 bg-night overflow-hidden"
      data-checking-details={isCheckingDetails}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.section
          className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-6 min-h-[400px] md:min-h-[450px] lg:min-h-[500px] p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-night/95 backdrop-blur-sm border-2 border-robin-egg-blue/20 shadow-2xl shadow-black/50 z-10"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          {/* Premium background gradient overlay */}
          <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-br from-robin-egg-blue/5 via-transparent to-brandeis-blue/5 pointer-events-none" />
          {/* Left Column - Details/Summary */}
          <div className="w-full lg:w-[300px] flex-shrink-0 flex flex-col gap-2 z-20">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const isEven = index % 2 === 0;
              
              return (
                <details
                  key={item.id}
                  ref={(el) => {
                    detailsRefs.current[index] = el;
                  }}
                  name="feature"
                  onClick={() => handleDetailsClick(index)}
                  className={`
                    group relative overflow-hidden rounded-xl
                    transition-all duration-300 ease-out
                    border backdrop-blur-sm
                    ${isOpen 
                      ? isEven
                        ? "bg-robin-egg-blue/20 border-robin-egg-blue/50 shadow-lg shadow-robin-egg-blue/30" 
                        : "bg-brandeis-blue/20 border-brandeis-blue/50 shadow-lg shadow-brandeis-blue/30"
                      : "bg-night/50 border-night/30 hover:bg-night/70"
                    }
                  `}
                >
                  {/* Illuminated background glow */}
                  <div
                    className={`
                      absolute inset-0 transition-all duration-500 ease-out
                      ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-100"}
                      ${isEven
                        ? "bg-gradient-to-br from-robin-egg-blue/30 via-robin-egg-blue/15 to-transparent"
                        : "bg-gradient-to-br from-brandeis-blue/30 via-brandeis-blue/15 to-transparent"
                      }
                      rounded-xl
                    `}
                  />
                  {/* Animated glow ring */}
                  {isOpen && (
                    <motion.div
                      className={`absolute inset-0 rounded-xl ${
                        isEven
                          ? "ring-2 ring-robin-egg-blue/50 shadow-[0_0_20px_rgba(0,196,184,0.3)]"
                          : "ring-2 ring-brandeis-blue/50 shadow-[0_0_20px_rgba(1,108,247,0.3)]"
                      }`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <summary
                    className={`
                      relative z-10 flex items-center gap-2 sm:gap-3 p-3 sm:p-4 cursor-pointer
                      text-baby-powder font-semibold text-xs sm:text-sm
                      transition-all duration-300
                      hover:text-white
                      ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
                    `}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isEven ? "text-robin-egg-blue" : "text-brandeis-blue"}`}>
                      {item.icon}
                    </div>
                    <span className="whitespace-nowrap truncate">{item.title}</span>
                  </summary>

                  <motion.div
                    className="relative z-10 p-3 sm:p-4 text-baby-powder/80 text-xs sm:text-sm"
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <p className="leading-relaxed">{item.description}</p>
                  </motion.div>
                </details>
              );
            })}
          </div>

          {/* Right Column - Images */}
          <div className="relative flex-1 w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] mt-4 lg:mt-0">
            {items.map((item, index) => {
              const isActive = openIndex === index;
              const isFirst = index === 0 && openIndex === null;
              const shouldShow = isActive || (isFirst && openIndex === null);
              
              return (
                <motion.div
                  key={item.id}
                  className={`
                    absolute inset-0
                    ${shouldShow ? "z-10" : "z-0"}
                  `}
                  initial={false}
                  animate={{
                    x: shouldShow ? 0 : "15%",
                    opacity: shouldShow ? 1 : 0,
                    scale: shouldShow ? 1 : 0.9,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-night/50">
                    {shouldShow && (
                      <>
                        <Image
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          fill
                          className="object-cover"
                          priority={shouldShow}
                          onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        {/* Gradient overlay with accent color */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            index % 2 === 0 
                              ? "from-robin-egg-blue/20 to-transparent" 
                              : "from-brandeis-blue/20 to-transparent"
                          }`}
                        />
                      </>
                    )}
                     {/* Fallback content if image doesn't load */}
                     {shouldShow && (
                       <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                         index % 2 === 0 
                           ? "from-robin-egg-blue/10 to-night/50" 
                           : "from-brandeis-blue/10 to-night/50"
                       }`}>
                         <div className="text-center p-8">
                           <div className={`text-4xl mb-4 ${index % 2 === 0 ? "text-robin-egg-blue" : "text-brandeis-blue"}`}>
                             {item.icon}
                           </div>
                           <h3 className="text-baby-powder font-semibold text-lg mb-2">{item.title}</h3>
                           <p className="text-baby-powder/70 text-sm max-w-md">{item.description}</p>
                         </div>
                       </div>
                     )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
          <AnimatePresence>
            {openIndex !== null && (
              <>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={handlePrevious}
                  className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-robin-egg-blue/80 hover:bg-robin-egg-blue backdrop-blur-sm border border-robin-egg-blue/50 items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-robin-egg-blue/30"
                  aria-label="Previous"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-baby-powder rotate-90"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={handleNext}
                  className="hidden md:flex absolute left-2 lg:left-4 top-1/2 translate-y-1/2 z-30 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-brandeis-blue/80 hover:bg-brandeis-blue backdrop-blur-sm border border-brandeis-blue/50 items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-brandeis-blue/30"
                  aria-label="Next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-4 h-4 lg:w-5 lg:h-5 text-baby-powder -rotate-90"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleExit}
                  className="absolute right-2 sm:right-4 top-2 sm:top-4 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-night/80 hover:bg-night/90 backdrop-blur-sm border border-baby-powder/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5 text-baby-powder rotate-45"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </motion.button>
              </>
            )}
          </AnimatePresence>
        </motion.section>
      </div>
    </section>
  );
}


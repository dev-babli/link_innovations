"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { colors } from "@/homepage-versions/shared/design-system/colors";

// Register GSAP plugins if needed
if (typeof window !== "undefined") {
  // Using built-in Power easing instead of CustomEase
  // CustomEase.create("", ".87, 0, .13, 1") is equivalent to power2.out
}

export interface CarouselSlide {
  title: string;
  description: string;
  imageUrl: string;
}

interface DynamicCarouselSliderProps {
  slides?: CarouselSlide[];
  className?: string;
}

const defaultSlides: CarouselSlide[] = [
  {
    title: "Web Development",
    description: "Custom Solutions",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f0?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "AI Solutions",
    description: "Intelligent Automation",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Cloud Services",
    description: "Scalable Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Data Analytics",
    description: "Insights & Intelligence",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Cybersecurity",
    description: "Protection & Security",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Digital Transformation",
    description: "Innovation & Growth",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function DynamicCarouselSlider({
  slides = defaultSlides,
  className = "",
}: DynamicCarouselSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const mainImageContainerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const descContainerRef = useRef<HTMLDivElement>(null);
  const counterContainerRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(1);
  const isAnimatingRef = useRef(false);
  const scrollAllowedRef = useRef(true);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isTouchActiveRef = useRef(false);

  const totalSlides = slides.length;

  // Custom easing function matching ".87, 0, .13, 1" cubic-bezier
  const customEase = "power2.out"; // Close approximation, or we can use a custom function

  const createSlide = useCallback(
    (slideNumber: number, direction: "up" | "down") => {
      const slide = document.createElement("div");
      slide.className = "absolute top-0 left-0 w-full h-full";

      const slideBgImg = document.createElement("div");
      slideBgImg.className = "absolute top-0 left-0 w-full h-full";

      const img = document.createElement("img");
      img.src = slides[slideNumber - 1].imageUrl;
      img.alt = slides[slideNumber - 1].description;
      img.className = "w-full h-full object-cover";
      img.style.opacity = "1";
      img.style.display = "block";
      img.loading = "eager";
      img.crossOrigin = "anonymous";
      img.onerror = () => {
        // Fallback if image fails to load
        console.warn(`Failed to load image: ${slides[slideNumber - 1].imageUrl}`);
        img.style.display = "none";
      };
      img.onload = () => {
        img.style.opacity = "1";
      };

      // Add illuminated overlay
      const overlay = document.createElement("div");
      overlay.className = "absolute inset-0";
      overlay.style.background = `linear-gradient(180deg, transparent 0%, ${colors.robinEggBlue.hex}20 50%, ${colors.brandeisBlue.hex}20 100%)`;
      overlay.style.mixBlendMode = "overlay";

      slideBgImg.appendChild(img);
      slideBgImg.appendChild(overlay);
      slide.appendChild(slideBgImg);

      // Set initial clip-path based on direction
      if (direction === "down") {
        slideBgImg.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
      } else {
        slideBgImg.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
      }

      return { slide, slideBgImg };
    },
    [slides]
  );

  const createMainImageWrapper = useCallback(
    (slideNumber: number, direction: "up" | "down") => {
      const wrapper = document.createElement("div");
      wrapper.className = "absolute top-0 left-0 w-full h-full";

      const img = document.createElement("img");
      img.src = slides[slideNumber - 1].imageUrl;
      img.alt = slides[slideNumber - 1].description;
      img.className = "w-full h-full object-cover";
      img.style.opacity = "0";
      img.style.transition = "opacity 0.5s ease-in-out";
      img.loading = "eager";
      img.onerror = () => {
        // Fallback if image fails to load
        console.warn(`Failed to load image: ${slides[slideNumber - 1].imageUrl}`);
        img.style.opacity = "0";
        img.style.backgroundColor = colors.night.hex;
      };
      img.onload = () => {
        img.style.opacity = "1";
      };

      wrapper.appendChild(img);

      if (direction === "down") {
        wrapper.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
      } else {
        wrapper.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
      }

      return wrapper;
    },
    [slides]
  );

  const createTextElements = useCallback(
    (slideNumber: number, direction: "up" | "down") => {
      const newTitle = document.createElement("h1");
      newTitle.textContent = slides[slideNumber - 1].title;
      newTitle.className = "absolute text-white text-4xl md:text-5xl font-bold leading-none";
      newTitle.style.textShadow = `2px 2px 6px rgba(0, 0, 0, 0.3), 0 0 20px ${colors.robinEggBlue.hex}40`;
      newTitle.style.opacity = "1";
      newTitle.style.visibility = "visible";
      newTitle.style.display = "block";
      if (typeof gsap !== "undefined") {
        gsap.set(newTitle, {
          y: direction === "down" ? 50 : -50,
          opacity: 1,
        });
      }

      const newDesc = document.createElement("p");
      newDesc.textContent = slides[slideNumber - 1].description;
      newDesc.className = "absolute text-white text-lg md:text-xl font-semibold leading-none";
      newDesc.style.textShadow = `2px 2px 6px rgba(0, 0, 0, 0.3), 0 0 15px ${colors.brandeisBlue.hex}40`;
      newDesc.style.opacity = "1";
      newDesc.style.visibility = "visible";
      newDesc.style.display = "block";
      if (typeof gsap !== "undefined") {
        gsap.set(newDesc, {
          y: direction === "down" ? 20 : -20,
          opacity: 1,
        });
      }

      const newCounter = document.createElement("p");
      newCounter.textContent = slideNumber.toString();
      newCounter.className = "absolute text-white text-base leading-none";
      newCounter.style.opacity = "1";
      newCounter.style.visibility = "visible";
      newCounter.style.display = "block";
      if (typeof gsap !== "undefined") {
        gsap.set(newCounter, {
          y: direction === "down" ? 18 : -18,
          opacity: 1,
        });
      }

      return { newTitle, newDesc, newCounter };
    },
    [slides]
  );

  const animateSlide = useCallback(
    (direction: "up" | "down") => {
      if (isAnimatingRef.current || !scrollAllowedRef.current || !sliderRef.current) return;

      isAnimatingRef.current = true;
      scrollAllowedRef.current = false;

      const slider = sliderRef.current;
      const currentSlideElement = slider.querySelector(".slide");
      const mainImageContainer = mainImageContainerRef.current;
      const titleContainer = titleContainerRef.current;
      const descContainer = descContainerRef.current;
      const counterContainer = counterContainerRef.current;

      if (
        !currentSlideElement ||
        !mainImageContainer ||
        !titleContainer ||
        !descContainer ||
        !counterContainer
      ) {
        isAnimatingRef.current = false;
        scrollAllowedRef.current = true;
        return;
      }

      const currentMainWrapper = mainImageContainer.querySelector(".slide-main-img-wrapper");
      const currentTitle = titleContainer.querySelector("h1");
      const currentDesc = descContainer.querySelector("p");
      const currentCounter = counterContainer.querySelector("p");

      if (!currentMainWrapper || !currentTitle || !currentDesc || !currentCounter) {
        isAnimatingRef.current = false;
        scrollAllowedRef.current = true;
        return;
      }

      // Calculate next slide number
      let nextSlide: number;
      if (direction === "down") {
        nextSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
      } else {
        nextSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
      }

      setCurrentSlide(nextSlide);

      const { slide: newSlide, slideBgImg: newSlideBgImg } = createSlide(nextSlide, direction);
      const newMainWrapper = createMainImageWrapper(nextSlide, direction);
      const { newTitle, newDesc, newCounter } = createTextElements(nextSlide, direction);

      slider.appendChild(newSlide);
      mainImageContainer.appendChild(newMainWrapper);
      titleContainer.appendChild(newTitle);
      descContainer.appendChild(newDesc);
      counterContainer.appendChild(newCounter);

      gsap.set(newMainWrapper.querySelector("img"), {
        y: direction === "down" ? "-50%" : "50%",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          // Cleanup old elements
          if (currentSlideElement) currentSlideElement.remove();
          if (currentMainWrapper) currentMainWrapper.remove();
          if (currentTitle) currentTitle.remove();
          if (currentDesc) currentDesc.remove();
          if (currentCounter) currentCounter.remove();

          isAnimatingRef.current = false;

          setTimeout(() => {
            scrollAllowedRef.current = true;
            lastScrollTimeRef.current = Date.now();
          }, 100);
        },
      });

      // Animate all elements in parallel
      tl.to(
        newSlideBgImg,
        {
          clipPath:
            direction === "down"
              ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
              : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.25,
          ease: customEase,
        },
        0
      )
        .to(
          currentSlideElement.querySelector("img"),
          {
            scale: 1.5,
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          newMainWrapper,
          {
            clipPath:
              direction === "down"
                ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          currentMainWrapper.querySelector("img"),
          {
            y: direction === "down" ? "50%" : "-50%",
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          newMainWrapper.querySelector("img"),
          {
            y: 0,
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          currentTitle,
          {
            y: direction === "down" ? -50 : 50,
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          newTitle,
          {
            y: 0,
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          currentDesc,
          {
            y: direction === "down" ? -20 : 20,
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          newDesc,
          {
            y: 0,
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          currentCounter,
          {
            y: direction === "down" ? -18 : 18,
            duration: 1.25,
            ease: customEase,
          },
          0
        )
        .to(
          newCounter,
          {
            y: 0,
            duration: 1.25,
            ease: customEase,
          },
          0
        );
    },
    [currentSlide, totalSlides, createSlide, createMainImageWrapper, createTextElements, customEase]
  );

  const handleScroll = useCallback(
    (direction: "up" | "down") => {
      const now = Date.now();
      if (isAnimatingRef.current || !scrollAllowedRef.current) return;
      if (now - lastScrollTimeRef.current < 1000) return;
      lastScrollTimeRef.current = now;
      animateSlide(direction);
    },
    [animateSlide]
  );

  // Initialize first slide
  useEffect(() => {
    // Wait for DOM to be ready and ensure GSAP is loaded
    const timer = setTimeout(() => {
      if (!sliderRef.current || !mainImageContainerRef.current) {
        console.warn("Slider refs not ready");
        return;
      }

      // Check if gsap is available (it's imported, so it should be)
      if (typeof gsap === "undefined") {
        console.warn("GSAP not loaded");
        return;
      }

      try {
        // Clear any existing content
        if (sliderRef.current) sliderRef.current.innerHTML = '';
        if (mainImageContainerRef.current) mainImageContainerRef.current.innerHTML = '';
        if (titleContainerRef.current) titleContainerRef.current.innerHTML = '';
        if (descContainerRef.current) descContainerRef.current.innerHTML = '';
        if (counterContainerRef.current) counterContainerRef.current.innerHTML = '';

        const { slide } = createSlide(1, "down");
        slide.classList.add("slide");
        if (sliderRef.current) {
          sliderRef.current.appendChild(slide);
        }

        const mainWrapper = createMainImageWrapper(1, "down");
        mainWrapper.classList.add("slide-main-img-wrapper");
        if (mainImageContainerRef.current) {
          mainImageContainerRef.current.appendChild(mainWrapper);
        }

        const { newTitle, newDesc, newCounter } = createTextElements(1, "down");
        if (titleContainerRef.current) {
          titleContainerRef.current.appendChild(newTitle);
        }
        if (descContainerRef.current) {
          descContainerRef.current.appendChild(newDesc);
        }
        if (counterContainerRef.current) {
          counterContainerRef.current.appendChild(newCounter);
        }

        // Force initial animation to show content immediately
        if (typeof gsap !== "undefined") {
          gsap.set([newTitle, newDesc, newCounter], { opacity: 1, y: 0 });
        } else {
          // Fallback if GSAP not available - show content immediately
          newTitle.style.opacity = "1";
          newTitle.style.transform = "translateY(0)";
          newDesc.style.opacity = "1";
          newDesc.style.transform = "translateY(0)";
          newCounter.style.opacity = "1";
          newCounter.style.transform = "translateY(0)";
        }
      } catch (error) {
        console.error("Error initializing slider:", error);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [createSlide, createMainImageWrapper, createTextElements]);

  // Wheel scroll handler - only when component is in view
  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) return;

    const handleWheel = (e: WheelEvent) => {
      // Check if the slider is in viewport
      const rect = sliderElement.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isInView) return;
      
      // Only prevent default if we're scrolling within the slider area
      const isScrollingInSlider = e.target === sliderElement || sliderElement.contains(e.target as Node);
      
      if (isScrollingInSlider || (rect.top < 100 && rect.bottom > window.innerHeight - 100)) {
        e.preventDefault();
        const direction = e.deltaY > 0 ? "down" : "up";
        handleScroll(direction);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleScroll]);

  // Touch handlers
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
      isTouchActiveRef.current = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (!isTouchActiveRef.current || isAnimatingRef.current || !scrollAllowedRef.current) return;
      const touchCurrentY = e.touches[0].clientY;
      const difference = touchStartYRef.current - touchCurrentY;
      if (Math.abs(difference) > 10) {
        isTouchActiveRef.current = false;
        const direction = difference > 0 ? "down" : "up";
        handleScroll(direction);
      }
    };

    const handleTouchEnd = () => {
      isTouchActiveRef.current = false;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleScroll]);

  return (
    <section className={`relative w-full min-h-screen overflow-hidden bg-night ${className}`}>
      {/* Illuminated background with accent colors - primary layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.illuminated.medium.robinEgg} 0%, ${colors.illuminated.medium.brandeis} 100%)`,
        }}
      />

      {/* Slider container */}
      <div ref={sliderRef} className="relative w-full h-full z-0">
        {/* Initial slide will be added via useEffect */}
      </div>

      {/* Background image overlay with illuminated tint */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${colors.robinEggBlue.hex}15 50%, ${colors.brandeisBlue.hex}15 100%)`,
        }}
      />

      {/* Main centered image with illuminated glow */}
      <div
        ref={mainImageContainerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[35%] h-[50%] min-h-[300px] z-[2] rounded-2xl overflow-hidden bg-night/50"
        style={{
          boxShadow: `0 0 60px -10px ${colors.robinEggBlue.hex}60, 
                      0 0 100px -20px ${colors.brandeisBlue.hex}40,
                      0 20px 60px -15px rgba(0, 0, 0, 0.3)`,
          border: `1px solid ${colors.robinEggBlue.hex}30`,
        }}
      >
        {/* Main image wrapper will be added via useEffect */}
      </div>

      {/* Text content with illuminated text shadow - responsive */}
      <div className="absolute text-white z-[2] top-[70%] left-1/2 -translate-x-1/2 -translate-y-[70%] w-[75%] md:top-1/2 md:left-[15%] md:-translate-x-[15%] md:-translate-y-1/2 md:w-auto">
        <div
          ref={titleContainerRef}
          className="relative w-full md:w-[500px] h-[50px] mb-3"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* Title will be added via useEffect */}
        </div>
        <div
          ref={descContainerRef}
          className="relative w-full md:w-[500px] h-5"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* Description will be added via useEffect */}
        </div>
      </div>

      {/* Counter with illuminated background */}
      <div className="absolute bottom-12 right-12 z-[2] flex items-center gap-2">
        <p className="text-white text-xs font-medium opacity-35">All Projects</p>
        <div className="flex items-center">
          <div
            ref={counterContainerRef}
            className="relative w-6 h-[18px] flex justify-center"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            {/* Counter will be added via useEffect */}
          </div>
          <p className="text-white text-xs font-medium opacity-35 w-6 flex justify-center">/</p>
          <p className="text-white text-xs font-medium opacity-35 w-6 flex justify-center">
            {totalSlides}
          </p>
        </div>
      </div>

      {/* Animated illuminated glow effects */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] animate-pulse"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${colors.robinEggBlue.hex}25 0%, transparent 60%),
                       radial-gradient(circle at 70% 50%, ${colors.brandeisBlue.hex}25 0%, transparent 60%)`,
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse-glow {
            0%, 100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }
        `
      }} />
    </section>
  );
}


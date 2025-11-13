"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors } from "@/homepage-versions/shared/design-system/colors";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface GridSlide {
  imageUrl: string;
  title: { first: string; second: string };
  caption: string;
  category: string;
  description: string;
}

interface GridToSliderTransitionProps {
  slides?: GridSlide[];
  className?: string;
}

const defaultSlides: GridSlide[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f0?q=80&w=2069&auto=format&fit=crop",
    title: { first: "Web", second: "Development" },
    caption: "01 / SERVICES",
    category: "TECHNOLOGY",
    description: "Custom web solutions that drive your business forward. We build responsive, scalable, and high-performance web applications tailored to your needs.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    title: { first: "Mobile", second: "Applications" },
    caption: "02 / SERVICES",
    category: "INNOVATION",
    description: "Native and cross-platform mobile apps for iOS and Android. Seamless user experiences that engage and convert on any device.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    title: { first: "AI", second: "Solutions" },
    caption: "03 / SERVICES",
    category: "INTELLIGENCE",
    description: "Intelligent automation and AI-powered solutions that transform your business processes. Machine learning, NLP, and computer vision expertise.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    title: { first: "Cloud", second: "Services" },
    caption: "04 / SERVICES",
    category: "INFRASTRUCTURE",
    description: "Scalable cloud infrastructure that grows with your business. AWS, Azure, and GCP expertise for reliable, secure, and cost-effective solutions.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    title: { first: "Data", second: "Analytics" },
    caption: "05 / SERVICES",
    category: "INSIGHTS",
    description: "Turn data into actionable insights. Advanced analytics, business intelligence, and data visualization to drive informed decision-making.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    title: { first: "Cyber", second: "Security" },
    caption: "06 / SERVICES",
    category: "PROTECTION",
    description: "Comprehensive security solutions to protect your digital assets. Threat detection, vulnerability assessment, and compliance management.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: { first: "Digital", second: "Transformation" },
    caption: "07 / SERVICES",
    category: "INNOVATION",
    description: "End-to-end digital transformation strategies that modernize your business. From consultation to implementation, we guide your journey.",
  },
];

export default function GridToSliderTransition({
  slides = defaultSlides,
  className = "",
}: GridToSliderTransitionProps) {
  const [isWebEntered, setIsWebEntered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [preloaderProgress, setPreloaderProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  const mainContentRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const expandingImageRef = useRef<HTMLDivElement>(null);
  const enterButtonRef = useRef<HTMLButtonElement>(null);
  const switchContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLHeadingElement>(null);
  const contentParagraphRef = useRef<HTMLParagraphElement>(null);
  const slideCaptionRef = useRef<HTMLDivElement>(null);
  const slideCategoryRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const scrollTextRef = useRef<HTMLDivElement>(null);
  const contentSectionRef = useRef<HTMLDivElement>(null);

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Preloader animation
  useEffect(() => {
    if (!showPreloader) return;

    let counter = 0;
    const duration = 2000;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const counterInterval = setInterval(() => {
      counter += increment;
      if (counter >= 100) {
        counter = 100;
        clearInterval(counterInterval);

        if (mainContentRef.current) {
          gsap.to(mainContentRef.current, {
            opacity: 1,
            visibility: "visible",
            duration: 0.5,
            onComplete: () => {
              setShowPreloader(false);
            },
          });
        }

        if (gridRef.current) {
          gsap.timeline().set(gridRef.current, { opacity: 1 }).fromTo(
            ".column",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: "power2.out",
            }
          );
        }
      }
      setPreloaderProgress(Math.floor(counter));
    }, interval);

    return () => clearInterval(counterInterval);
  }, [showPreloader]);

  // Setup ScrollTrigger refresh on native scroll
  useEffect(() => {
    if (!isWebEntered) return;

    // Update ScrollTrigger on scroll
    const handleScroll = () => {
      ScrollTrigger.refresh();
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial refresh
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isWebEntered]);

  // Find leftmost visible image
  const findLeftmostVisibleImage = useCallback(() => {
    const images = document.querySelectorAll<HTMLElement>(".column-item-img");
    let leftmostImage: HTMLElement | null = null;
    let leftmostX = Infinity;

    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (
        rect.left < window.innerWidth &&
        rect.right > 0 &&
        rect.top < window.innerHeight &&
        rect.bottom > 0
      ) {
        if (rect.left < leftmostX) {
          leftmostX = rect.left;
          leftmostImage = img;
        }
      }
    });

    return leftmostImage;
  }, []);

  // Animate text with GSAP (simplified version without SplitText)
  const animateText = useCallback((element: HTMLElement, delay = 0) => {
    if (!element) return;

    gsap.set(element, { opacity: 1 });

    const chars = element.textContent?.split("") || [];
    element.innerHTML = chars
      .map((char) => `<span class="char" style="display:inline-block">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    const charElements = element.querySelectorAll(".char");

    gsap.from(charElements, {
      duration: 0.9,
      yPercent: 100,
      opacity: 0.2,
      stagger: 0.02,
      ease: "power2.out",
      delay: delay,
    });
  }, []);

  // Update slide content
  const updateSlideContent = useCallback(
    (index: number) => {
      const slide = slides[index];
      if (!slide) return;

      if (titleWrapperRef.current) {
        titleWrapperRef.current.innerHTML = `
          <span class="content-title">${slide.title.first}</span>
          <span class="content-title">${slide.title.second}</span>
        `;
      }

      if (contentParagraphRef.current) {
        contentParagraphRef.current.textContent = slide.description;
      }

      if (slideCaptionRef.current) {
        slideCaptionRef.current.textContent = slide.caption;
      }

      if (slideCategoryRef.current) {
        slideCategoryRef.current.textContent = slide.category;
      }

      const masterTl = gsap.timeline();

      // Animate caption and category
      if (slideCaptionRef.current && slideCategoryRef.current) {
        masterTl.fromTo(
          [slideCaptionRef.current, slideCategoryRef.current],
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0
        );
      }

      // Animate title
      if (titleWrapperRef.current) {
        const titleElements = titleWrapperRef.current.querySelectorAll(".content-title");
        titleElements.forEach((titleEl, idx) => {
          animateText(titleEl as HTMLElement, 0.05 + idx * 0.1);
        });
      }

      // Animate paragraph
      if (contentParagraphRef.current) {
        animateText(contentParagraphRef.current, 0.4);
      }

      return masterTl;
    },
    [slides, animateText]
  );

  // Enter the web animation
  const enterTheWeb = useCallback(() => {
    if (isAnimating || isWebEntered || !gridRef.current || !expandingImageRef.current) return;

    setIsAnimating(true);

    if (switchContainerRef.current) {
      switchContainerRef.current.style.paddingLeft = "30px";

      gsap.to(switchContainerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (switchContainerRef.current) {
            switchContainerRef.current.style.display = "none";
          }
        },
      });
    }

    if (contentRef.current) {
      contentRef.current.classList.add("content--current");
    }

    const columnsInnerUp = gridRef.current.querySelectorAll(".column-moveup > .column-inner");
    const columnsInnerDown = gridRef.current.querySelectorAll(".column-movedown > .column-inner");

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setIsWebEntered(true);

        document.body.style.overflow = "auto";

        if (scrollTextRef.current) {
          gsap.to(scrollTextRef.current, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
          });
        }

        // Setup ScrollTrigger for hero section
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }

        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const heroSection = document.querySelector<HTMLElement>(".hero-section");
            if (heroSection) {
              gsap.to(heroSection, {
                height: 100 - self.progress * 40 + "vh",
                duration: 0,
                width: "100%",
                transformOrigin: "center top",
              });
            }

            if (expandingImageRef.current) {
              gsap.to(expandingImageRef.current, {
                scale: 1 + self.progress * 0.1,
                y: -self.progress * 25 + "%",
                duration: 0,
                width: "100vw",
                height: 100 + self.progress * 30 + "vh",
              });
            }

            if (contentRef.current) {
              gsap.to(contentRef.current, {
                y: -self.progress * 50 + "%",
                opacity: 1 - self.progress * 0.7,
                duration: 0,
              });
            }

            if (contentParagraphRef.current) {
              gsap.to(contentParagraphRef.current, {
                y: -self.progress * 50 + "%",
                opacity: 1 - self.progress * 0.7,
                duration: 0,
              });
            }

            if (slideCaptionRef.current && slideCategoryRef.current) {
              gsap.to([slideCaptionRef.current, slideCategoryRef.current], {
                y: -self.progress * 50 + "%",
                opacity: 1 - self.progress * 0.7,
                duration: 0,
              });
            }

            if (thumbnailsRef.current) {
              gsap.to(thumbnailsRef.current, {
                y: -self.progress * 50 + "%",
                opacity: 1 - self.progress * 0.7,
                duration: 0,
              });
            }

            if (scrollTextRef.current) {
              gsap.to(scrollTextRef.current, {
                opacity: 1 - self.progress * 2,
                y: -self.progress * 20 + "%",
                duration: 0,
              });
            }
          },
        });
      },
    });

    // Step 1: Zoom grid
    tl.to(gridRef.current, { scale: 1, duration: 0.8, ease: "power2.inOut" }, 0);

    tl.to(columnsInnerUp, { y: "-200vh", duration: 0.8, ease: "power2.inOut" }, 0);
    tl.to(columnsInnerDown, { y: "200vh", duration: 0.8, ease: "power2.inOut" }, 0);

    // Step 2: Set up expanding image
    tl.add(() => {
      const leftImg = findLeftmostVisibleImage();
      if (leftImg && expandingImageRef.current) {
        const imgRect = leftImg.getBoundingClientRect();
        const imgStyle = window.getComputedStyle(leftImg);
        const bgImage = imgStyle.backgroundImage;
        const dataIndex = leftImg.getAttribute("data-index");

        expandingImageRef.current.style.backgroundImage = bgImage;
        expandingImageRef.current.style.top = `${imgRect.top}px`;
        expandingImageRef.current.style.left = `${imgRect.left}px`;
        expandingImageRef.current.style.width = `${imgRect.width}px`;
        expandingImageRef.current.style.height = `${imgRect.height}px`;
        expandingImageRef.current.style.opacity = "1";

        if (dataIndex) {
          const index = parseInt(dataIndex);
          setActiveIndex(index);

          // Update active thumbnail
          const thumbnails = document.querySelectorAll(".thumbnail");
          thumbnails.forEach((thumb) => thumb.classList.remove("active"));
          const activeThumb = document.querySelector(`.thumbnail[data-index="${index}"]`);
          if (activeThumb) {
            activeThumb.classList.add("active");
          }
        }
      }
    }, 0.8);

    // Step 3: Expand image
    tl.to(expandingImageRef.current, { width: "100vw", duration: 0.7, ease: "power2.inOut" }, 1.0);
    tl.to(gridRef.current, { opacity: 0, duration: 0.3 }, 1.2);

    // Step 4: Show content
    tl.add(() => updateSlideContent(activeIndex), 1.8);
    if (thumbnailsRef.current) {
      tl.set(thumbnailsRef.current, { opacity: 1 }, 2.2);
      const thumbnailItems = thumbnailsRef.current.querySelectorAll(".thumbnail");
      tl.to(thumbnailItems, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }, 2.3);
    }
  }, [isAnimating, isWebEntered, activeIndex, findLeftmostVisibleImage, updateSlideContent]);

  // Handle thumbnail clicks
  const handleThumbnailClick = useCallback(
    (index: number) => {
      if (!isWebEntered || isAnimating) return;

      const thumbnails = document.querySelectorAll(".thumbnail");
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      const activeThumb = document.querySelector(`.thumbnail[data-index="${index}"]`);
      if (activeThumb) {
        activeThumb.classList.add("active");
      }

      setActiveIndex(index);

      if (expandingImageRef.current) {
        gsap.to(expandingImageRef.current, {
          opacity: 0.5,
          duration: 0.3,
          onComplete: () => {
            if (expandingImageRef.current && slides[index]) {
              expandingImageRef.current.style.backgroundImage = `url(${slides[index].imageUrl})`;
              gsap.to(expandingImageRef.current, { opacity: 1, duration: 0.3 });
            }
          },
        });
      }

      if (slideCaptionRef.current && slideCategoryRef.current) {
        gsap.set([slideCaptionRef.current, slideCategoryRef.current], { opacity: 0, y: -20 });
      }

      updateSlideContent(index);
    },
    [isWebEntered, isAnimating, slides, updateSlideContent]
  );

  // Enter button hover effects
  useEffect(() => {
    const button = enterButtonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      const indicator = button.querySelector(".indicator-dot") as HTMLElement;
      if (indicator) indicator.style.opacity = "1";
      if (switchContainerRef.current) {
        switchContainerRef.current.style.paddingLeft = "30px";
      }
    };

    const handleMouseLeave = () => {
      const indicator = button.querySelector(".indicator-dot") as HTMLElement;
      if (indicator) indicator.style.opacity = "0";
      if (switchContainerRef.current) {
        switchContainerRef.current.style.paddingLeft = "20px";
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      {showPreloader && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{
            background: colors.night.hex,
          }}
        >
          <div
            className="text-2xl font-bold"
            style={{
              color: colors.robinEggBlue.hex,
            }}
          >
            {preloaderProgress}%
          </div>
        </div>
      )}

      <main
        ref={mainContentRef}
        className={`relative w-full ${className}`}
        style={{
          opacity: showPreloader ? 0 : 1,
          visibility: showPreloader ? "hidden" : "visible",
        }}
      >
        {/* Illuminated background */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `linear-gradient(135deg, ${colors.illuminated.medium.robinEgg} 0%, ${colors.illuminated.medium.brandeis} 100%)`,
          }}
        />

        <div className="hero-section relative w-full h-screen overflow-hidden">
          {/* Enter button */}
          {!isWebEntered && (
            <div
              ref={switchContainerRef}
              className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-5 rounded px-5 py-2.5 transition-all"
              style={{
                background: `rgba(${colors.night.hex.slice(1).match(/.{2}/g)?.map((hex) => parseInt(hex, 16)).join(", ") || "20, 20, 20"}, 0.8)`,
                paddingLeft: "20px",
              }}
            >
              <button
                ref={enterButtonRef}
                onClick={enterTheWeb}
                className="relative inline-block text-white text-sm tracking-wide px-2.5 py-1.5 bg-transparent cursor-pointer transition-all"
                style={{
                  color: colors.robinEggBlue.hex,
                  fontFamily: "monospace",
                }}
              >
                <span
                  className="absolute w-1.5 h-1.5 rounded-full transition-opacity"
                  style={{
                    backgroundColor: colors.brandeisBlue.hex,
                    opacity: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "-8px",
                  }}
                />
                ENTER THE FLOW
              </button>
            </div>
          )}

          {/* Grid columns */}
          <div
            ref={gridRef}
            className="columns absolute inset-0 flex justify-center items-center"
            style={{
              transform: "scale(0.5, 0.4)",
              opacity: 0,
            }}
          >
            {/* Column 1 - Move up */}
            <div className="column column-moveup relative grid">
              <div className="column-inner relative">
                {slides.map((slide, idx) => {
                  const displayIndex = (idx + 6) % slides.length;
                  return (
                    <figure key={`col1-${idx}`} className="column-item m-0 relative z-[1]" style={{ width: "50vw", height: "100vh" }}>
                      <div className="column-item-imgwrap w-full h-full relative overflow-hidden">
                        <div
                          className="column-item-img w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${slides[displayIndex].imageUrl})`,
                          }}
                          data-index={displayIndex}
                        />
                      </div>
                    </figure>
                  );
                })}
              </div>
            </div>

            {/* Column 2 - Move down */}
            <div className="column column-movedown relative grid">
              <div className="column-inner relative">
                {slides.map((slide, idx) => {
                  const displayIndex = (idx + 4) % slides.length;
                  return (
                    <figure key={`col2-${idx}`} className="column-item m-0 relative z-[1]" style={{ width: "50vw", height: "100vh" }}>
                      <div className="column-item-imgwrap w-full h-full relative overflow-hidden">
                        <div
                          className="column-item-img w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${slides[displayIndex].imageUrl})`,
                          }}
                          data-index={displayIndex}
                        />
                      </div>
                    </figure>
                  );
                })}
              </div>
            </div>

            {/* Column 3 - Move up */}
            <div className="column column-moveup relative grid">
              <div className="column-inner relative">
                {slides.map((slide, idx) => {
                  const displayIndex = (idx + 2) % slides.length;
                  return (
                    <figure key={`col3-${idx}`} className="column-item m-0 relative z-[1]" style={{ width: "50vw", height: "100vh" }}>
                      <div className="column-item-imgwrap w-full h-full relative overflow-hidden">
                        <div
                          className="column-item-img w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${slides[displayIndex].imageUrl})`,
                          }}
                          data-index={displayIndex}
                        />
                      </div>
                    </figure>
                  );
                })}
              </div>
            </div>

            {/* Column 4 - Move down */}
            <div className="column column-movedown relative grid">
              <div className="column-inner relative">
                {slides.map((slide, idx) => {
                  const displayIndex = idx % slides.length;
                  return (
                    <figure key={`col4-${idx}`} className="column-item m-0 relative z-[1]" style={{ width: "50vw", height: "100vh" }}>
                      <div className="column-item-imgwrap w-full h-full relative overflow-hidden">
                        <div
                          className="column-item-img w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${slides[displayIndex].imageUrl})`,
                          }}
                          data-index={displayIndex}
                        />
                      </div>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Expanding image */}
          <div
            ref={expandingImageRef}
            className="expanding-image fixed top-0 left-0 w-[50vw] h-screen bg-cover bg-center z-[85]"
            style={{
              opacity: 0,
            }}
          />

          {/* Content area */}
          <div
            ref={contentRef}
            className="content pointer-events-none fixed w-full h-screen top-0 left-0 grid grid-rows-[1fr_auto] z-[90]"
          >
            <div className="content-item w-full h-full absolute top-0 left-0" />

            {/* Title wrapper */}
            <h1
              ref={titleWrapperRef}
              className="title-wrapper opacity-0 uppercase self-center m-0 relative font-medium p-0 w-full flex pointer-events-none justify-center gap-[3vw] items-start z-[100]"
              style={{
                color: colors.babyPowder.hex,
                fontSize: "clamp(2rem, 13.85vw, 14rem)",
                fontFamily: "monospace",
              }}
            >
              {/* Title will be populated by updateSlideContent */}
            </h1>
          </div>

          {/* Caption and category */}
          <div
            ref={slideCaptionRef}
            className="slide-caption fixed top-10 left-10 text-sm tracking-wide opacity-0 z-[95]"
            style={{
              color: colors.robinEggBlue.hex,
              fontFamily: "monospace",
            }}
          >
            {slides[activeIndex]?.caption}
          </div>

          <div
            ref={slideCategoryRef}
            className="slide-category fixed top-[140px] right-10 text-sm tracking-wide opacity-0 z-[95]"
            style={{
              color: colors.brandeisBlue.hex,
              fontFamily: "monospace",
            }}
          >
            {slides[activeIndex]?.category}
          </div>

          {/* Content paragraph */}
          <div
            ref={contentParagraphRef}
            className="content-paragraph text-left text-base max-w-[600px] leading-tight mb-[10%] opacity-0 fixed bottom-[20%] left-[10%] z-[100]"
            style={{
              color: colors.babyPowder.hex,
              fontFamily: "monospace",
            }}
          >
            {slides[activeIndex]?.description}
          </div>

          {/* Thumbnails */}
          <div
            ref={thumbnailsRef}
            className="thumbnails fixed bottom-5 right-5 flex gap-2.5 z-[200] opacity-0"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`thumbnail w-[60px] h-10 rounded overflow-hidden cursor-pointer transition-all ${
                  index === activeIndex ? "active" : ""
                }`}
                data-index={index}
                style={{
                  border: index === activeIndex ? `2px solid ${colors.robinEggBlue.hex}` : "2px solid transparent",
                }}
              >
                <div
                  className="thumbnail-img w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.imageUrl})`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Scroll text */}
          <div
            ref={scrollTextRef}
            className="scroll-text fixed bottom-5 left-5 z-[95] opacity-0 text-sm tracking-wide transition-opacity"
            style={{
              color: colors.babyPowder.hex,
              fontFamily: "monospace",
            }}
          >
            SCROLL
          </div>
        </div>

        {/* Content section */}
        <div
          ref={contentSectionRef}
          className="content-section w-full min-h-[200vh] relative z-[80] mt-screen"
          style={{
            background: colors.night.hex,
          }}
        />
      </main>

      {/* Illuminated glow effects */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${colors.robinEggBlue.hex}25 0%, transparent 60%),
                       radial-gradient(circle at 70% 50%, ${colors.brandeisBlue.hex}25 0%, transparent 60%)`,
        }}
      />
    </>
  );
}



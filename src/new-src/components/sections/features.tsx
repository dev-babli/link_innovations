"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, BarChart3, RefreshCw, SlidersHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("client-focused");
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsListRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { value: "expert-team", label: "Expert Team", icon: User },
    { value: "cutting-edge", label: "Cutting-Edge Tech", icon: BarChart3 },
    { value: "proven-track", label: "Proven Track Record", icon: RefreshCw },
    {
      value: "client-focused",
      label: "Client-Focused",
      icon: SlidersHorizontal,
    },
  ];

  const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Update slider position smoothly
  useEffect(() => {
    const updateSliderPosition = () => {
      const activeTabElement = tabRefs.current[activeIndex];
      const tabsListElement = tabsListRef.current;

      if (activeTabElement && tabsListElement) {
        const tabsListRect = tabsListElement.getBoundingClientRect();
        const activeTabRect = activeTabElement.getBoundingClientRect();

        setSliderStyle({
          left: activeTabRect.left - tabsListRect.left,
          width: activeTabRect.width,
        });
      }
    };

    // Use double requestAnimationFrame for smoother updates
    let rafId1: number;
    let rafId2: number;

    rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => {
        updateSliderPosition();
      });
    });

    // Also update on resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(updateSliderPosition);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex, isVisible]);

  return (
    <section
      ref={sectionRef}
      id="feature"
      className="relative overflow-hidden bg-[#F5F3EF] py-16 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F5F3EF] to-[#E8E0D6] opacity-90" />
      <div className="pointer-events-none absolute -top-32 right-[-12%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#d9c9ff]/30 via-[#f7f0ff]/10 to-transparent blur-3xl" />
      <div className="container relative mx-auto max-w-7xl px-6 text-center md:px-20">
        <div
          className={`mx-auto mb-16 max-w-3xl transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-[3rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] md:text-[56px] md:leading-[1.15] md:tracking-[-0.015em]">
            Why Choose Us
          </h2>
        </div>

        <Tabs
          defaultValue="client-focused"
          onValueChange={setActiveTab}
          className={`w-full transition-all duration-1000 ease-in-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12 flex justify-center">
            {/* Rounded Rectangular Box Container with Elevation - Beige Background */}
            <div className="relative inline-flex rounded-2xl bg-white/70 p-2.5 shadow-[0px_20px_45px_rgba(31,22,10,0.08)] backdrop-blur-md border border-white/60">
              <TabsList
                ref={tabsListRef}
                className="relative inline-flex h-auto flex-wrap justify-center gap-3 bg-transparent p-0 shadow-none"
              >
                {/* Sliding Glassmorphic Indicator */}
                <div
                  className="absolute inset-y-1 rounded-full bg-white/80 backdrop-blur-xl border border-white/70 shadow-[0px_12px_35px_rgba(15,12,8,0.12)] pointer-events-none z-0"
                  style={{
                    left: `${sliderStyle.left}px`,
                    width: `${sliderStyle.width}px`,
                    transition:
                      "left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "left, width",
                  }}
                />
                <div
                  className="absolute inset-y-1 rounded-full bg-gradient-to-br from-white/90 via-white/70 to-white/40 pointer-events-none z-0"
                  style={{
                    left: `${sliderStyle.left}px`,
                    width: `${sliderStyle.width}px`,
                    transition:
                      "left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "left, width",
                  }}
                />

                {tabs.map((tab, index) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    className="group relative flex items-center gap-3 rounded-full border-none bg-transparent px-6 py-3 text-base font-medium text-[#67615B] transition-all duration-300 ease-in-out hover:text-[#1a1a1a] hover:scale-[1.01] data-[state=active]:text-[#1a1a1a] data-[state=active]:scale-[1.02] z-10"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-3">
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <TabsContent
            value="expert-team"
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
          >
            <FeatureTab
              tag="Expert Team"
              title="Experienced professionals at your service"
              description="Our team of skilled developers, designers, and strategists brings years of industry experience to every project. We combine technical expertise with creative problem-solving to deliver exceptional results."
            >
              <Image
                src="/images/why-chose/expert.png"
                alt="Expert team collaboration"
                fill
                className="object-cover object-center rounded-r-[24px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="100vw"
              />
            </FeatureTab>
          </TabsContent>

          <TabsContent
            value="cutting-edge"
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
          >
            <FeatureTab
              tag="Cutting-Edge Tech"
              title="Latest technologies and best practices"
              description="We leverage the most advanced tools, frameworks, and methodologies to build scalable, secure, and future-proof solutions. Stay ahead with modern tech stacks and innovative approaches."
            >
              <Image
                src="/images/why-chose/cutting-edge.png"
                alt="Cutting-edge technology"
                fill
                className="object-cover object-center rounded-r-[24px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="100vw"
              />
            </FeatureTab>
          </TabsContent>

          <TabsContent
            value="proven-track"
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
          >
            <FeatureTab
              tag="Proven Track Record"
              title="Delivering success across industries"
              description="With a portfolio of successful projects and satisfied clients, we've proven our ability to deliver on time, within budget, and exceed expectations. Your success is our reputation."
            >
              <Image
                src="/images/why-chose/track.png"
                alt="Proven track record"
                fill
                className="object-cover object-center rounded-r-[24px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="100vw"
              />
            </FeatureTab>
          </TabsContent>

          <TabsContent
            value="client-focused"
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
          >
            <FeatureTab
              tag="Client-Focused"
              title="Your success is our priority"
              description="We prioritize your business goals and work closely with you throughout the entire process. From initial consultation to ongoing support, we're committed to your success and satisfaction."
            >
              <Image
                src="/images/why-chose/client-focused.png"
                alt="Client-focused approach"
                fill
                className="object-cover object-center rounded-r-[24px] transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="100vw"
              />
            </FeatureTab>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const FeatureTab = ({
  tag,
  title,
  description,
  children,
}: {
  tag: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <div className="group flex w-full flex-col items-center gap-8 rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0px_24px_60px_rgba(31,22,10,0.08)] backdrop-blur-lg transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white hover:shadow-[0px_30px_70px_rgba(31,22,10,0.12)] lg:flex-row lg:gap-12 lg:p-12">
    <div className="relative h-[240px] w-full flex-1 self-stretch overflow-hidden rounded-[26px] bg-white/40 lg:h-[320px]">
      {/* Illumination effect from behind on hover */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 ease-in-out -z-10" />
      <div className="absolute -inset-2 bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-pink-300/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 ease-in-out -z-10" />

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#5226bb]/[0.06] to-[#f64949]/[0.03] transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
      {children}
    </div>
    <div className="flex w-full flex-col gap-5 text-left lg:w-auto lg:flex-shrink-0 lg:basis-[400px]">
      <div>
        <div className="inline-block rounded-md bg-accent-yellow/90 px-3 py-1.5 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-[0_12px_24px_rgba(242,203,103,0.35)]">
          <span className="text-xs font-semibold uppercase tracking-[0.02em] text-[#1a1a1a]">
            {tag}
          </span>
        </div>
      </div>
      <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em] text-[#1a1a1a] transition-all duration-700 ease-in-out group-hover:translate-x-1 lg:text-3xl">
        {title}
      </h3>
      <p className="text-base leading-[1.7] text-[#4a4a4a] transition-all duration-700 ease-in-out group-hover:text-[#1a1a1a]">
        {description}
      </p>
    </div>
  </div>
);

export default FeaturesSection;

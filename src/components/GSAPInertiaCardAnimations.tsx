"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { colors } from "@/homepage-versions/shared/design-system/colors";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, InertiaPlugin);
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface GSAPInertiaCardAnimationsProps {
  cards?: CardData[];
  className?: string;
}

const defaultCards: CardData[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web solutions that drive your business forward",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f0?q=80&w=2069&auto=format&fit=crop",
    category: "Development",
  },
  {
    id: 2,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS & Android",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    category: "Mobile",
  },
  {
    id: 3,
    title: "AI Solutions",
    description: "Intelligent automation that transforms business processes",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    category: "AI",
  },
  {
    id: 4,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure that grows with your business",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    category: "Cloud",
  },
  {
    id: 5,
    title: "Data Analytics",
    description: "Turn data into actionable insights for informed decisions",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "Analytics",
  },
  {
    id: 6,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect digital assets",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    category: "Security",
  },
  {
    id: 7,
    title: "Digital Transformation",
    description: "End-to-end strategies that modernize your business",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    category: "Transformation",
  },
  {
    id: 8,
    title: "Enterprise Integration",
    description: "Seamless connectivity that streamlines operations",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    category: "Integration",
  },
  {
    id: 9,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive interfaces",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    category: "Design",
  },
  {
    id: 10,
    title: "DevOps",
    description: "Automated deployment and CI/CD pipelines",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
    category: "DevOps",
  },
  {
    id: 11,
    title: "Blockchain",
    description: "Decentralized solutions and smart contracts",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2069&auto=format&fit=crop",
    category: "Blockchain",
  },
  {
    id: 12,
    title: "IoT Solutions",
    description: "Connected devices and IoT platforms",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2072&auto=format&fit=crop",
    category: "IoT",
  },
];

type AnimationType = "circle" | "wave" | "stagger" | "grid" | "fan" | "depth";

export default function GSAPInertiaCardAnimations({
  cards = defaultCards,
  className = "",
}: GSAPInertiaCardAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselItemsRef = useRef<HTMLDivElement>(null);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("circle");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeAnimationsRef = useRef<gsap.core.Tween[]>([]);
  const draggableInstanceRef = useRef<Draggable | null>(null);
  const originalZIndicesRef = useRef<number[]>([]);
  const cardElementsRef = useRef<HTMLDivElement[]>([]);

  const CONFIG = {
    totalCards: cards.length,
    wheelRadius: 35,
    animations: {
      initialDuration: 1,
      rotationDuration: 0.64,
      flipDuration: 0.64,
      transitionDuration: 1.2,
      circleTransitionDuration: 0.8,
    },
  };

  const getViewportSize = useCallback(() => {
    return {
      width: typeof window !== "undefined" ? window.innerWidth : 1920,
      height: typeof window !== "undefined" ? window.innerHeight : 1080,
    };
  }, []);

  const killActiveAnimations = useCallback(() => {
    gsap.killTweensOf(".carousel-item");
    gsap.killTweensOf(".carousel-items");
    activeAnimationsRef.current.forEach((animation) => {
      if (animation && animation.kill) {
        animation.kill();
      }
    });
    activeAnimationsRef.current = [];
  }, []);

  const updateMenuState = useCallback((newAnimation: AnimationType) => {
    setCurrentAnimation(newAnimation);
  }, []);

  const initializeZIndices = useCallback(() => {
    const cardElements = cardElementsRef.current;
    originalZIndicesRef.current = cardElements.map((card, index) => {
      const zIndex = 100 + (CONFIG.totalCards - index);
      if (card) {
        gsap.set(card, { zIndex });
      }
      return zIndex;
    });
  }, [CONFIG.totalCards]);

  const setupCirclePositions = useCallback(
    (animated = true) => {
      const cardElements = cardElementsRef.current;
      const viewportSize = getViewportSize();
      const radius = Math.min(viewportSize.width, viewportSize.height) * (CONFIG.wheelRadius / 100);
      const totalAngle = 2 * Math.PI;
      const angleStep = totalAngle / CONFIG.totalCards;

      const currentWheelRotation =
        carouselItemsRef.current
          ? (gsap.getProperty(carouselItemsRef.current, "rotation") as number) || 0
          : 0;
      const currentWheelRotationRad = currentWheelRotation * (Math.PI / 180);

      const timeline = gsap.timeline();

      cardElements.forEach((card, i) => {
        if (!card) return;
        const angle = i * angleStep + currentWheelRotationRad;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        if (animated) {
          timeline.to(
            card,
            {
              x,
              y,
              rotation: -currentWheelRotation,
              scale: 0.85,
              duration: CONFIG.animations.transitionDuration,
              ease: "power2.inOut",
            },
            0
          );
        } else {
          gsap.set(card, {
            x,
            y,
            rotation: -currentWheelRotation,
            scale: 0.85,
          });
        }
      });

      return timeline;
    },
    [CONFIG.totalCards, CONFIG.wheelRadius, CONFIG.animations.transitionDuration, getViewportSize]
  );

  const setupDraggable = useCallback(
    (target: string = ".carousel-items") => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
        draggableInstanceRef.current = null;
      }

      if (!carouselItemsRef.current) return;

      carouselItemsRef.current.classList.add("draggable");

      draggableInstanceRef.current = Draggable.create(target, {
        type: "rotation",
        inertia: true,
        throwResistance: 0.3,
        snap: (endValue) => endValue,
        onDrag: updateCardRotations,
        onThrowUpdate: updateCardRotations,
      })[0];

      gsap.set(target, { overwrite: "auto" });
    },
    []
  );

  const updateCardRotations = useCallback(() => {
    if (isTransitioning || !draggableInstanceRef.current) return;
    const wheelRotation = draggableInstanceRef.current.rotation || 0;
    const cardElements = cardElementsRef.current;

    if (currentAnimation === "circle") {
      cardElements.forEach((card) => {
        if (card) {
          gsap.set(card, { rotation: -wheelRotation });
        }
      });
    } else if (currentAnimation === "fan") {
      const viewport = getViewportSize();
      const maxFanAngle = Math.min(180, viewport.width / 5);
      const fanStartAngle = -maxFanAngle / 2;
      const fanEndAngle = maxFanAngle / 2;

      cardElements.forEach((card, index) => {
        if (!card) return;
        const progress = index / (CONFIG.totalCards - 1);
        const fanAngle = fanStartAngle + progress * (fanEndAngle - fanStartAngle);
        gsap.set(card, { rotation: fanAngle - wheelRotation });
      });
    }
  }, [isTransitioning, currentAnimation, CONFIG.totalCards, getViewportSize]);

  const setupWavePositions = useCallback(() => {
    const cardElements = cardElementsRef.current;
    const viewport = getViewportSize();
    const cardWidth = 430;
    const lineWidth = Math.min(viewport.width * 0.8, CONFIG.totalCards * cardWidth * 0.4);
    const cardSpacing = lineWidth / (CONFIG.totalCards - 1);
    const waveHeight = Math.min(viewport.height * 0.1, 80);

    const timeline = gsap.timeline();

    cardElements.forEach((card, index) => {
      if (!card) return;
      const xPos = (index - (CONFIG.totalCards - 1) / 2) * cardSpacing;
      const yPos = Math.sin((index / (CONFIG.totalCards - 1)) * Math.PI * 2) * waveHeight;

      timeline.to(
        card,
        {
          x: xPos,
          y: yPos,
          rotation: 0,
          scale: 0.75,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut",
        },
        0
      );
    });

    return timeline;
  }, [CONFIG.totalCards, CONFIG.animations.transitionDuration, getViewportSize]);

  const startWaveAnimation = useCallback(() => {
    const cardElements = cardElementsRef.current;
    const viewport = getViewportSize();
    const waveHeight = Math.min(viewport.height * 0.1, 80);

    return gsap.to(cardElements, {
      y: (i) => {
        const normalizedIndex = i / (CONFIG.totalCards - 1);
        return Math.sin(normalizedIndex * Math.PI * 2 + Math.PI) * waveHeight;
      },
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [CONFIG.totalCards, getViewportSize]);

  const setupStaggerPositions = useCallback(() => {
    const cardElements = cardElementsRef.current;
    const viewport = getViewportSize();
    const cardWidth = 430;
    const cardHeight = 610;
    const rows = 3;
    const cols = 4;
    const xSpacing = cardWidth * 0.7;
    const ySpacing = cardHeight * 0.7;

    const timeline = gsap.timeline();

    cardElements.forEach((card, index) => {
      if (!card) return;
      const row = Math.floor(index / cols);
      const col = index % cols;
      const xOffset = row % 2 === 1 ? xSpacing / 2 : 0;
      const xPos = (col - (cols - 1) / 2) * xSpacing + xOffset;
      const yPos = (row - (rows - 1) / 2) * ySpacing;

      timeline.to(
        card,
        {
          x: xPos,
          y: yPos,
          rotation: 0,
          scale: 0.7,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut",
        },
        0
      );
    });

    return timeline;
  }, [CONFIG.animations.transitionDuration, getViewportSize]);

  const setupStaggerMouseTracking = useCallback(() => {
    const viewport = getViewportSize();
    const maxOffset = 40;
    const rows = 3;
    const cols = 4;

    const handleMouseMove = (e: MouseEvent) => {
      if (currentAnimation !== "stagger" || isTransitioning || !containerRef.current) return;
      const mouseY = e.clientY / viewport.height;
      const offset = (mouseY - 0.5) * -maxOffset;
      const cardElements = cardElementsRef.current;

      cardElements.forEach((card, index) => {
        if (!card) return;
        const row = Math.floor(index / cols);
        const col = index % cols;
        const cardWidth = 430;
        const cardHeight = 610;
        const xSpacing = cardWidth * 0.7;
        const ySpacing = cardHeight * 0.7;
        const xOffset = row % 2 === 1 ? xSpacing / 2 : 0;
        const xPos = (col - (cols - 1) / 2) * xSpacing + xOffset;
        const yPos = (row - (rows - 1) / 2) * ySpacing + offset;

        gsap.to(card, {
          y: yPos,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
      return () => {
        containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [currentAnimation, isTransitioning, getViewportSize]);

  const setupGridPositions = useCallback(() => {
    const cardElements = cardElementsRef.current;
    const viewport = getViewportSize();
    const cardWidth = 430;
    const cardHeight = 610;
    const viewportRatio = viewport.width / viewport.height;
    const rows = viewportRatio > 1 ? 3 : 4;
    const cols = viewportRatio > 1 ? 4 : 3;

    const scale = Math.min(
      0.8,
      viewport.width / (cols * cardWidth * 1.2),
      viewport.height / (rows * cardHeight * 1.2)
    );

    const xSpacing = cardWidth * scale * 1.2;
    const ySpacing = cardHeight * scale * 1.2;

    const timeline = gsap.timeline();

    cardElements.forEach((card, index) => {
      if (!card) return;
      const col = index % cols;
      const row = Math.floor(index / cols);
      const xPos = (col - (cols - 1) / 2) * xSpacing;
      const yPos = (row - (rows - 1) / 2) * ySpacing;

      timeline.to(
        card,
        {
          x: xPos,
          y: yPos,
          rotation: 0,
          scale,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut",
        },
        0
      );
    });

    return timeline;
  }, [CONFIG.animations.transitionDuration, getViewportSize]);

  const setupFanPositions = useCallback(() => {
    const cardElements = cardElementsRef.current;
    const viewport = getViewportSize();
    const maxFanAngle = Math.min(180, viewport.width / 5);
    const fanStartAngle = -maxFanAngle / 2;
    const fanEndAngle = maxFanAngle / 2;

    const timeline = gsap.timeline();

    cardElements.forEach((card, index) => {
      if (!card) return;
      const progress = index / (CONFIG.totalCards - 1);
      const angle = fanStartAngle + progress * (fanEndAngle - fanStartAngle);
      const yOffset = Math.sin((progress - 0.5) * Math.PI) * 50;

      timeline.to(
        card,
        {
          x: 0,
          y: yOffset,
          rotation: angle,
          scale: 0.8,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut",
        },
        0
      );
    });

    return timeline;
  }, [CONFIG.totalCards, CONFIG.animations.transitionDuration, getViewportSize]);

  const setup3DDepthPositions = useCallback(() => {
    const cardElements = cardElementsRef.current;
    const viewport = getViewportSize();

    const positions = [
      { x: -viewport.width * 0.25, y: -viewport.height * 0.2, z: -200, scale: 0.9, rotX: -5, rotY: 5 },
      { x: viewport.width * 0.25, y: -viewport.height * 0.25, z: -300, scale: 0.85, rotX: -3, rotY: -4 },
      { x: -viewport.width * 0.3, y: viewport.height * 0.2, z: -400, scale: 0.8, rotX: 4, rotY: 6 },
      { x: viewport.width * 0.3, y: viewport.height * 0.25, z: -500, scale: 0.75, rotX: 5, rotY: -5 },
      { x: 0, y: -viewport.height * 0.3, z: -700, scale: 0.7, rotX: -6, rotY: 0 },
      { x: -viewport.width * 0.35, y: 0, z: -800, scale: 0.65, rotX: 0, rotY: 7 },
      { x: viewport.width * 0.35, y: 0, z: -900, scale: 0.6, rotX: 0, rotY: -7 },
      { x: 0, y: viewport.height * 0.3, z: -1000, scale: 0.55, rotX: 6, rotY: 0 },
      { x: -viewport.width * 0.2, y: -viewport.height * 0.15, z: -1200, scale: 0.5, rotX: -3, rotY: 3 },
      { x: viewport.width * 0.2, y: -viewport.height * 0.15, z: -1300, scale: 0.45, rotX: -3, rotY: -3 },
      { x: -viewport.width * 0.2, y: viewport.height * 0.15, z: -1400, scale: 0.4, rotX: 3, rotY: 3 },
      { x: viewport.width * 0.2, y: viewport.height * 0.15, z: -1500, scale: 0.35, rotX: 3, rotY: -3 },
    ];

    const timeline = gsap.timeline();

    cardElements.forEach((card, index) => {
      if (!card || index >= positions.length) return;
      const pos = positions[index];
      const zIndex = 1000 - Math.round(Math.abs(pos.z));

      gsap.set(card, { zIndex });

      timeline.to(
        card,
        {
          x: pos.x,
          y: pos.y,
          z: pos.z,
          rotationX: pos.rotX,
          rotationY: pos.rotY,
          scale: pos.scale,
          duration: CONFIG.animations.transitionDuration,
          ease: "power2.inOut",
        },
        0
      );
    });

    return timeline;
  }, [CONFIG.animations.transitionDuration, getViewportSize]);

  const setup3DDepthMouseTracking = useCallback(() => {
    const viewport = getViewportSize();

    const handleMouseMove = (e: MouseEvent) => {
      if (currentAnimation !== "depth" || isTransitioning || !carouselItemsRef.current) return;
      const mouseX = e.clientX / viewport.width - 0.5;
      const mouseY = e.clientY / viewport.height - 0.5;

      gsap.to(carouselItemsRef.current, {
        rotationY: mouseX * 3,
        rotationX: -mouseY * 3,
        duration: 1.2,
        ease: "power1.out",
      });
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
      return () => {
        containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [currentAnimation, isTransitioning, getViewportSize]);

  const transitionToPattern = useCallback(
    (newPattern: AnimationType) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      updateMenuState(newPattern);
      killActiveAnimations();

      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
        draggableInstanceRef.current = null;
      }

      if (carouselItemsRef.current) {
        carouselItemsRef.current.classList.remove("draggable");
      }

      const timeline = gsap.timeline({
        onComplete: () => {
          setIsTransitioning(false);

          if (newPattern === "circle" || newPattern === "fan") {
            setupDraggable();
          } else if (newPattern === "wave") {
            const waveAnim = startWaveAnimation();
            if (waveAnim) activeAnimationsRef.current.push(waveAnim);
          } else if (newPattern === "stagger") {
            setupStaggerMouseTracking();
          } else if (newPattern === "depth") {
            setup3DDepthMouseTracking();
          }
        },
      });

      activeAnimationsRef.current.push(timeline);

      if (newPattern !== "circle" && newPattern !== "fan") {
        timeline.set(".carousel-items", {
          rotationX: 0,
          rotationY: 0,
        });
      }

      let patternTimeline: gsap.core.Timeline | undefined;

      switch (newPattern) {
        case "circle":
          patternTimeline = setupCirclePositions(true);
          if (patternTimeline) timeline.add(patternTimeline, 0);
          break;
        case "wave":
          patternTimeline = setupWavePositions();
          if (patternTimeline) timeline.add(patternTimeline, 0);
          timeline.to(
            ".carousel-items",
            {
              rotation: 0,
              duration: CONFIG.animations.transitionDuration,
              ease: "power2.inOut",
            },
            0
          );
          break;
        case "stagger":
          patternTimeline = setupStaggerPositions();
          if (patternTimeline) timeline.add(patternTimeline, 0);
          timeline.to(
            ".carousel-items",
            {
              rotation: 0,
              duration: CONFIG.animations.transitionDuration,
              ease: "power2.inOut",
            },
            0
          );
          break;
        case "grid":
          patternTimeline = setupGridPositions();
          if (patternTimeline) timeline.add(patternTimeline, 0);
          timeline.to(
            ".carousel-items",
            {
              rotation: 0,
              duration: CONFIG.animations.transitionDuration,
              ease: "power2.inOut",
            },
            0
          );
          break;
        case "fan":
          patternTimeline = setupFanPositions();
          if (patternTimeline) timeline.add(patternTimeline, 0);
          break;
        case "depth":
          patternTimeline = setup3DDepthPositions();
          if (patternTimeline) timeline.add(patternTimeline, 0);
          timeline.to(
            ".carousel-items",
            {
              rotation: 0,
              duration: CONFIG.animations.transitionDuration,
              ease: "power2.inOut",
            },
            0
          );
          break;
      }
    },
    [
      isTransitioning,
      updateMenuState,
      killActiveAnimations,
      setupDraggable,
      startWaveAnimation,
      setupStaggerMouseTracking,
      setup3DDepthMouseTracking,
      setupCirclePositions,
      setupWavePositions,
      setupStaggerPositions,
      setupGridPositions,
      setupFanPositions,
      setup3DDepthPositions,
      CONFIG.animations.transitionDuration,
    ]
  );

  const initializeCarousel = useCallback(() => {
    const cardElements = cardElementsRef.current;

    gsap.set(cardElements, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 0,
      opacity: 0,
    });

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        setupDraggable();
      },
    });

    cardElements.forEach((card, i) => {
      if (!card) return;
      const delay = (CONFIG.totalCards - 1 - i) * 0.1;
      gsap.set(card, {
        zIndex: 100 + (CONFIG.totalCards - 1 - i),
      });

      timeline.to(
        card,
        {
          opacity: 1,
          scale: 0.85,
          duration: 0.5,
          ease: "power2.out",
        },
        delay
      );
    });

    timeline.to({}, { duration: 0.3 });
    const circleTimeline = setupCirclePositions(true);
    if (circleTimeline) timeline.add(circleTimeline);

    setCurrentAnimation("circle");
    activeAnimationsRef.current.push(timeline);
  }, [CONFIG.totalCards, setupCirclePositions, setupDraggable]);

  // Initialize cards and carousel
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || !carouselItemsRef.current) return;

    const timer = setTimeout(() => {
      initializeZIndices();
      initializeCarousel();
    }, 100);

    return () => {
      clearTimeout(timer);
      killActiveAnimations();
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, [initializeZIndices, initializeCarousel, killActiveAnimations]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!isTransitioning) {
        transitionToPattern(currentAnimation);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isTransitioning, currentAnimation, transitionToPattern]);

  return (
    <section className={`relative w-full min-h-screen overflow-hidden ${className}`} style={{ background: colors.night.hex }}>
      {/* Subtle illuminated background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${colors.robinEggBlue.hex}08 0%, transparent 60%)`,
        }}
      />

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="relative w-full h-screen flex justify-center items-center perspective-[2500px] select-none overflow-hidden"
      >
        <div
          ref={carouselItemsRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center select-none"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardElementsRef.current[index] = el;
              }}
              className="carousel-item absolute w-[420px] h-[580px] rounded-[32px] overflow-hidden transform -translate-x-1/2 -translate-y-1/2 origin-center select-none cursor-pointer group"
              style={{
                backgroundImage: `url(${card.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: `0 25px 70px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.05)`,
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                const accentColor = index % 2 === 0 ? colors.robinEggBlue.hex : colors.brandeisBlue.hex;
                gsap.to(e.currentTarget, {
                  scale: 1.03,
                  boxShadow: `0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px ${accentColor}30, inset 0 0 0 1px rgba(255, 255, 255, 0.1)`,
                  duration: 0.5,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  boxShadow: `0 25px 70px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.05)`,
                  duration: 0.5,
                  ease: "power2.out",
                });
              }}
            >
              {/* Premium gradient overlay */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${colors.night.hex}CC 70%, ${colors.night.hex}EE 100%)`,
                }}
              />

              {/* Accent color overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(135deg, ${
                    index % 2 === 0 ? `${colors.robinEggBlue.hex}25` : `${colors.brandeisBlue.hex}25`
                  } 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                {/* Number badge - premium */}
                <div className="absolute top-8 right-8 z-20">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${colors.night.hex}F0 0%, ${colors.night.hex}E0 100%)`,
                      border: `1px solid ${index % 2 === 0 ? `${colors.robinEggBlue.hex}50` : `${colors.brandeisBlue.hex}50`}`,
                      boxShadow: `0 8px 20px rgba(0, 0, 0, 0.4), 0 0 20px ${index % 2 === 0 ? colors.robinEggBlue.hex : colors.brandeisBlue.hex}30, inset 0 0 0 1px rgba(255, 255, 255, 0.1)`,
                    }}
                  >
                    <span
                      className="text-base font-bold"
                      style={{
                        color: index % 2 === 0 ? colors.robinEggBlue.hex : colors.brandeisBlue.hex,
                      }}
                    >
                      {String(card.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Category badge */}
                <div
                  className="inline-block px-4 py-2 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase w-fit backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index % 2 === 0 ? `${colors.robinEggBlue.hex}25` : `${colors.brandeisBlue.hex}25`
                    } 0%, ${
                      index % 2 === 0 ? `${colors.robinEggBlue.hex}15` : `${colors.brandeisBlue.hex}15`
                    } 100%)`,
                    color: index % 2 === 0 ? colors.robinEggBlue.hex : colors.brandeisBlue.hex,
                    border: `1px solid ${index % 2 === 0 ? `${colors.robinEggBlue.hex}40` : `${colors.brandeisBlue.hex}40`}`,
                    boxShadow: `0 4px 12px rgba(0, 0, 0, 0.3), 0 0 15px ${index % 2 === 0 ? colors.robinEggBlue.hex : colors.brandeisBlue.hex}20`,
                    letterSpacing: "0.1em",
                  }}
                >
                  {card.category}
                </div>

                {/* Title */}
                <h3
                  className="text-4xl font-bold mb-4 leading-tight"
                  style={{
                    color: colors.babyPowder.hex,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: `${colors.babyPowder.hex}E6`,
                    lineHeight: "1.7",
                    textShadow: "0 1px 5px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Control Panel */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-8 py-4 rounded-2xl backdrop-blur-2xl border z-[1000]"
        style={{
          background: `linear-gradient(135deg, ${colors.night.hex}F5 0%, ${colors.night.hex}E8 100%)`,
          borderColor: `rgba(255, 255, 255, 0.1)`,
          boxShadow: `0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.05)`,
        }}
      >
        {(["circle", "wave", "stagger", "grid", "fan", "depth"] as AnimationType[]).map((animType) => {
          const isActive = currentAnimation === animType;
          return (
            <button
              key={animType}
              onClick={() => transitionToPattern(animType)}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold transition-all relative"
              style={{
                color: isActive ? colors.babyPowder.hex : `${colors.babyPowder.hex}70`,
                background: isActive
                  ? `linear-gradient(135deg, ${colors.robinEggBlue.hex} 0%, ${colors.brandeisBlue.hex} 100%)`
                  : "transparent",
                letterSpacing: "0.08em",
                boxShadow: isActive ? `0 4px 15px ${colors.robinEggBlue.hex}40, inset 0 0 0 1px rgba(255, 255, 255, 0.1)` : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = colors.babyPowder.hex;
                  e.currentTarget.style.background = `rgba(255, 255, 255, 0.08)`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = `${colors.babyPowder.hex}70`;
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {animType.toUpperCase()}
            </button>
          );
        })}

        <div className="w-px h-8 mx-2" style={{ background: `rgba(255, 255, 255, 0.12)` }} />

        <button
          onClick={() => {
            killActiveAnimations();
            if (draggableInstanceRef.current) {
              draggableInstanceRef.current.kill();
            }
            initializeCarousel();
          }}
          className="px-5 py-2.5 rounded-xl text-xs font-semibold transition-all"
          style={{
            color: `${colors.babyPowder.hex}70`,
            letterSpacing: "0.08em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.babyPowder.hex;
            e.currentTarget.style.background = `rgba(255, 255, 255, 0.08)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = `${colors.babyPowder.hex}70`;
            e.currentTarget.style.background = "transparent";
          }}
        >
          RESET
        </button>
      </div>
    </section>
  );
}

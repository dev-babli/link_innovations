"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Settings, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CarouselCard {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  overlayText?: string;
}

interface OverlappingCardsCarouselProps {
  cards?: CarouselCard[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const principles = [
  {
    id: "1",
    title: "Clarity.",
    description: "We communicate simply, openly, and honestly. No jargon, no layers.",
    icon: MessageCircle,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    gradient: "from-blue-500/20 via-cyan-500/20 to-transparent",
    color: "blue",
  },
  {
    id: "2",
    title: "Craft.",
    description: "We obsess over design, performance, and scalability — because great code should feel invisible.",
    icon: Settings,
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=80",
    gradient: "from-purple-500/20 via-pink-500/20 to-transparent",
    color: "purple",
  },
  {
    id: "3",
    title: "Care.",
    description: "We treat every project like our own product — your success is our success.",
    icon: Heart,
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    gradient: "from-orange-500/20 via-red-500/20 to-transparent",
    color: "orange",
  },
];

const defaultCards: CarouselCard[] = principles.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  imageUrl: p.imageUrl,
  overlayText: "",
}));

export default function OverlappingCardsCarousel({
  cards = defaultCards,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
}: OverlappingCardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  const totalCards = cards.length;

  // Memoize visible cards calculation - reduced to 3 cards total for better performance
  const visibleCards = useMemo(() => {
    const visible: { card: CarouselCard; index: number; position: number; key: string }[] = [];
    
    // Add previous card (only 1)
    const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
    visible.push({
      card: cards[prevIndex],
      index: prevIndex,
      position: -1,
      key: `${cards[prevIndex].id}-${prevIndex}-${-1}`,
    });
    
    // Add current card
    visible.push({
      card: cards[currentIndex],
      index: currentIndex,
      position: 0,
      key: `${cards[currentIndex].id}-${currentIndex}-0`,
    });
    
    // Add next card (only 1)
    const nextIndex = (currentIndex + 1) % totalCards;
    visible.push({
      card: cards[nextIndex],
      index: nextIndex,
      position: 1,
      key: `${cards[nextIndex].id}-${nextIndex}-1`,
    });
    
    return visible;
  }, [currentIndex, totalCards, cards]);

  // Optimized navigation with proper timing - fixed to work consistently
  const goToNext = useCallback(() => {
    // Use ref to check animation state immediately
    if (isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    setIsAnimating(true);
    
    setCurrentIndex((prev) => {
      const next = (prev + 1) % totalCards;
      return next;
    });
    
    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    
    // Match timeout with actual animation duration (650ms for tween)
    animationTimeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 650);
  }, []);

  const goToPrev = useCallback(() => {
    // Use ref to check animation state immediately
    if (isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    setIsAnimating(true);
    
    setCurrentIndex((prev) => {
      const prevIndex = (prev - 1 + totalCards) % totalCards;
      return prevIndex;
    });
    
    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    
    // Match timeout with actual animation duration
    animationTimeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 650);
  }, [totalCards]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        if (!isAnimatingRef.current) {
          goToNext();
        }
      }, autoPlayInterval);
      
      autoPlayRef.current = interval;
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, goToNext]);

  return (
    <div className={cn("relative w-full py-24 lg:py-32 overflow-visible bg-background-primary", className)}>
      {/* Background gradient - matching grovia design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>
      
      {/* Performance optimizations for smooth animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .overlapping-carousel-container {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            will-change: transform;
          }
          .overlapping-carousel-container * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        `
      }} />
      
      <div className="relative container mx-auto max-w-7xl px-6 lg:px-20 z-10">
        {/* Title Section - matching grovia typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
            Built on Principles That Don't Compromise.
          </h2>
          <p className="text-large-paragraph text-text-secondary">
            We don't just deliver code — we deliver clarity, craftsmanship, and care in everything we build.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center" style={{ overflow: 'visible' }}>
          {/* Navigation Arrows - matching grovia design */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrev();
            }}
            disabled={isAnimating}
            className={cn(
              "absolute left-4 z-[100] p-3 rounded-full bg-background-primary/90 backdrop-blur-sm",
              "shadow-lg hover:shadow-xl transition-all duration-300",
              "hover:bg-background-primary hover:scale-110",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
              "border border-border cursor-pointer",
              "active:scale-95"
            )}
            aria-label="Previous card"
            type="button"
          >
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            disabled={isAnimating}
            className={cn(
              "absolute right-4 z-[100] p-3 rounded-full bg-background-primary/90 backdrop-blur-sm",
              "shadow-lg hover:shadow-xl transition-all duration-300",
              "hover:bg-background-primary hover:scale-110",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
              "border border-border cursor-pointer",
              "active:scale-95"
            )}
            aria-label="Next card"
            type="button"
          >
            <ChevronRight className="w-6 h-6 text-text-primary" />
          </button>

          {/* Cards Container */}
          <div 
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center overlapping-carousel-container"
            style={{ 
              perspective: '1000px', 
              perspectiveOrigin: 'center center',
              overflow: 'visible',
              width: '100%',
              height: '100%'
            }}
          >
            {visibleCards.map(({ card, index, position, key }) => {
              const isCenter = position === 0;
              
              // Calculate scale, z-index, and transform based on position
              // Optimized to show side cards clearly but behind center
              const scale = isCenter ? 1 : 0.75; // Side cards at 75% scale
              const zIndex = isCenter ? 30 : position === -1 ? 20 : 20; // Center on top, sides equal behind
              // Increased offsets to make side cards more visible - spread them wider
              const xOffset = position * 280; // Increased to 280px for better spread
              const yOffset = 0; // No vertical offset for cleaner look
              const opacity = isCenter ? 1 : 0.7; // Side cards at 70% opacity
              const rotation = 0;

                return (
                  <motion.div
                    key={key}
                    initial={false}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className={cn(
                      "absolute w-[85%] md:w-[60%] lg:w-[50%] h-[80%]",
                      "rounded-[28px] overflow-hidden",
                      "cursor-pointer",
                      "group",
                      !isCenter && "pointer-events-auto",
                      isCenter && "hover:scale-[1.02] transition-transform duration-500"
                    )}
                    onClick={() => {
                      if (!isCenter && !isAnimatingRef.current) {
                        const diff = index - currentIndex;
                        if (diff === 1 || diff === -(totalCards - 1)) {
                          goToNext();
                        } else if (diff === -1 || diff === totalCards - 1) {
                          goToPrev();
                        } else {
                          isAnimatingRef.current = true;
                          setIsAnimating(true);
                          setCurrentIndex(index);
                          if (animationTimeoutRef.current) {
                            clearTimeout(animationTimeoutRef.current);
                          }
                          animationTimeoutRef.current = setTimeout(() => {
                            isAnimatingRef.current = false;
                            setIsAnimating(false);
                          }, 650);
                        }
                      }
                    }}
                    style={{
                      background: isCenter
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(40px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(40px) saturate(200%)',
                      border: isCenter
                        ? '1px solid rgba(255,255,255,0.3)'
                        : '1px solid rgba(255,255,255,0.25)',
                      boxShadow: isCenter
                        ? '0 24px 80px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.3), inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(255,255,255,0.15)'
                        : '0 12px 48px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(255,255,255,0.12)',
                      willChange: "transform, opacity",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "translate3d(0, 0, 0)",
                      WebkitTransform: "translate3d(0, 0, 0)",
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Background Image */}
                    {card.imageUrl && (
                      <div className="absolute inset-0 z-0 overflow-hidden rounded-[28px]">
                        <Image
                          src={card.imageUrl}
                          alt={card.title}
                          fill
                          className="object-cover"
                          priority={isCenter}
                          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 50vw"
                          style={{
                            transform: "translate3d(0, 0, 0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            opacity: isCenter ? 0.25 : 0.15,
                            filter: 'blur(0.5px)',
                          }}
                        />
                        {/* Gradient Overlay */}
                        <div 
                          className="absolute inset-0"
                          style={{
                            background: isCenter
                              ? `linear-gradient(135deg, ${principles.find(p => p.id === card.id)?.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.15)' : principles.find(p => p.id === card.id)?.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.15)' : 'rgba(249, 115, 22, 0.15)'} 0%, transparent 100%)`
                              : `linear-gradient(135deg, ${principles.find(p => p.id === card.id)?.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.10)' : principles.find(p => p.id === card.id)?.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.10)' : 'rgba(249, 115, 22, 0.10)'} 0%, transparent 100%)`
                          }}
                        />
                      </div>
                    )}

                    {/* Premium Glass Shine Effect */}
                    <div className={cn(
                      "absolute inset-0 z-[2] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent pointer-events-none rounded-[28px] transition-opacity duration-700",
                      isCenter ? 'opacity-100' : 'opacity-70'
                    )} />

                    {/* Top Edge Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] z-[3] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none rounded-t-[28px]" />

                    {/* Left Edge Highlight */}
                    <div className="absolute top-0 left-0 bottom-0 w-[1px] z-[3] bg-gradient-to-b from-white/40 via-white/20 to-transparent pointer-events-none rounded-l-[28px]" />

                    {/* Content - Premium Design */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.1, 
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute inset-0 z-[20] flex flex-col justify-center items-center p-8 md:p-12"
                        style={{
                          willChange: "transform, opacity",
                        }}
                      >
                        <div className="text-center max-w-3xl space-y-8 px-6 relative z-[25]">
                          {/* Icon Badge */}
                          {(() => {
                            const principle = principles.find(p => p.id === card.id);
                            const IconComponent = principle?.icon;
                            const iconColor = principle?.color === 'blue' ? 'rgba(59, 130, 246, 0.9)' : 
                                             principle?.color === 'purple' ? 'rgba(168, 85, 247, 0.9)' : 
                                             'rgba(249, 115, 22, 0.9)';
                            
                            return IconComponent ? (
                              <motion.div 
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl mb-8 group"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)',
                                  backdropFilter: 'blur(24px) saturate(180%)',
                                  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                                  border: '1px solid rgba(255,255,255,0.5)',
                                  boxShadow: '0 12px 40px rgba(0,0,0,0.12), inset 0 1px 2px rgba(255,255,255,0.6)',
                                }}
                              >
                                <IconComponent 
                                  className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
                                  style={{ color: iconColor }}
                                  strokeWidth={2}
                                />
                              </motion.div>
                            ) : null;
                          })()}
                          
                          <h3 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.1] tracking-[-0.03em]" style={{ color: '#0a0a0a', textShadow: '0 2px 20px rgba(255,255,255,0.9)' }}>
                            {card.title}
                          </h3>
                          {card.description && (
                            <motion.p 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                              className="text-xl md:text-2xl text-gray-700 font-light leading-[1.7] max-w-2xl mx-auto"
                              style={{ textShadow: '0 1px 12px rgba(255,255,255,0.7)' }}
                            >
                              {card.description}
                            </motion.p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Non-center cards - Premium */}
                    {!isCenter && (() => {
                      const principle = principles.find(p => p.id === card.id);
                      const IconComponent = principle?.icon;
                      const iconColor = principle?.color === 'blue' ? 'rgba(59, 130, 246, 0.8)' : 
                                       principle?.color === 'purple' ? 'rgba(168, 85, 247, 0.8)' : 
                                       'rgba(249, 115, 22, 0.8)';
                      
                      return (
                        <div className="absolute inset-0 z-[20] flex items-center justify-center">
                          <div className="text-center px-6">
                            {IconComponent && (
                              <div 
                                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 opacity-90"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                                  backdropFilter: 'blur(16px)',
                                  WebkitBackdropFilter: 'blur(16px)',
                                  border: '1px solid rgba(255,255,255,0.4)',
                                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                }}
                              >
                                <IconComponent 
                                  className="w-6 h-6" 
                                  style={{ color: iconColor }}
                                  strokeWidth={2}
                                />
                              </div>
                            )}
                            <h4 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: '#1a1a1a', textShadow: '0 1px 12px rgba(255,255,255,0.6)' }}>
                              {card.title}
                            </h4>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* Dots Indicator - matching grovia design */}
        <div className="flex justify-center gap-2 mt-12">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimatingRef.current) {
                  isAnimatingRef.current = true;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  
                  // Clear any existing timeout
                  if (animationTimeoutRef.current) {
                    clearTimeout(animationTimeoutRef.current);
                  }
                  
                  // Match timeout with animation duration
                  animationTimeoutRef.current = setTimeout(() => {
                    isAnimatingRef.current = false;
                    setIsAnimating(false);
                  }, 650);
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200 ease-out",
                index === currentIndex
                  ? "w-8 bg-purple-500"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


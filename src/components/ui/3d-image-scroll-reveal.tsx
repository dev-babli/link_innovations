"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { colors } from '@/homepage-versions/shared/design-system/colors';
import styles from './3d-image-scroll-reveal.module.css';

interface WhyChooseUsCard {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon?: string;
  metrics?: {
    value: string;
    label: string;
  };
}

interface ThreeDImageScrollRevealProps {
  scrollSpeed?: number; // in seconds
  totalImages?: number;
}

const whyChooseUsCards: WhyChooseUsCard[] = [
  {
    id: 1,
    title: 'Expert Team',
    shortDescription: 'Industry veterans with proven expertise',
    fullDescription: 'Our team consists of industry veterans with 10+ years of experience in cutting-edge technologies. We combine technical excellence with business acumen to deliver solutions that drive real results.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '👥',
    metrics: {
      value: '98%',
      label: 'Client Satisfaction',
    },
  },
  {
    id: 2,
    title: 'Proven Track Record',
    shortDescription: 'Successfully delivered 500+ projects',
    fullDescription: 'We have successfully delivered 500+ projects with a 98% client satisfaction rate across various industries. Our track record speaks for itself with consistent on-time delivery and exceptional quality.',
    image: 'https://plus.unsplash.com/premium_photo-1671649240322-2124cd07eaae?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '🏆',
    metrics: {
      value: '500+',
      label: 'Projects Delivered',
    },
  },
  {
    id: 3,
    title: 'Cutting-Edge Technology',
    shortDescription: 'Latest AI, ML, and Cloud solutions',
    fullDescription: 'We leverage the latest technologies including AI, ML, Cloud, and modern frameworks for optimal results. Our tech stack is constantly evolving to stay ahead of industry trends.',
    image: 'https://plus.unsplash.com/premium_photo-1673029925648-af80569efc46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '🚀',
    metrics: {
      value: '95%',
      label: 'Tech Adoption',
    },
  },
  {
    id: 4,
    title: '24/7 Support',
    shortDescription: 'Round-the-clock assistance',
    fullDescription: 'We provide round-the-clock support and monitoring for your projects. Our dedicated team ensures that your systems run smoothly with less than 1 hour average response time.',
    image: 'https://plus.unsplash.com/premium_photo-1666533099824-abd0ed813f2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '🛡️',
    metrics: {
      value: '< 1 hour',
      label: 'Response Time',
    },
  },
  {
    id: 5,
    title: 'Enterprise Clients',
    shortDescription: 'Trusted by leading companies',
    fullDescription: 'Trusted by 50+ leading enterprises across various industries. We understand enterprise needs and deliver scalable solutions that grow with your business.',
    image: 'https://plus.unsplash.com/premium_photo-1671105035554-7f8c2a587201?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '🏢',
    metrics: {
      value: '50+',
      label: 'Enterprise Clients',
    },
  },
  {
    id: 6,
    title: 'Quality Assurance',
    shortDescription: 'Zero compromise on quality',
    fullDescription: 'Rigorous testing and quality assurance processes ensure that every project meets the highest standards. We maintain a 97% quality score with comprehensive testing protocols.',
    image: 'https://plus.unsplash.com/premium_photo-1686750875748-d00684d36b1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '✅',
    metrics: {
      value: '97%',
      label: 'Quality Score',
    },
  },
  {
    id: 7,
    title: 'Innovation First',
    shortDescription: 'Pioneering new solutions',
    fullDescription: 'We stay at the forefront of innovation, constantly exploring new technologies and methodologies to provide cutting-edge solutions that give you a competitive advantage.',
    image: 'https://plus.unsplash.com/premium_photo-1686844462591-393ceae12be0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '💡',
    metrics: {
      value: '100+',
      label: 'Innovations',
    },
  },
  {
    id: 8,
    title: 'Data-Driven Decisions',
    shortDescription: 'Analytics and insights',
    fullDescription: 'We use advanced analytics and data insights to make informed decisions that drive business growth. Our data-driven approach ensures optimal results for every project.',
    image: 'https://plus.unsplash.com/premium_photo-1686839181367-febb561faa53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '📊',
    metrics: {
      value: '99%',
      label: 'Accuracy',
    },
  },
  {
    id: 9,
    title: 'Cost-Effective Solutions',
    shortDescription: 'Maximize ROI',
    fullDescription: 'We deliver cost-effective solutions that maximize your ROI without compromising on quality. Our efficient processes and strategic approach help you achieve more with less.',
    image: 'https://plus.unsplash.com/premium_photo-1671199850329-91cae34a6b6d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '💰',
    metrics: {
      value: '40%',
      label: 'Cost Savings',
    },
  },
  {
    id: 10,
    title: 'Scalable Architecture',
    shortDescription: 'Grows with your business',
    fullDescription: 'Our solutions are built with scalability in mind, ensuring they can grow with your business. We design architectures that handle growth seamlessly without requiring major rewrites.',
    image: 'https://plus.unsplash.com/premium_photo-1685655611311-9f801b43b9fa?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '📈',
    metrics: {
      value: '10x',
      label: 'Scalability',
    },
  },
  {
    id: 11,
    title: 'Security First',
    shortDescription: 'Enterprise-grade security',
    fullDescription: 'Security is our top priority. We implement enterprise-grade security measures and follow industry best practices to protect your data and systems from threats.',
    image: 'https://plus.unsplash.com/premium_photo-1675598468920-878ae1e46f14?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '🔒',
    metrics: {
      value: '100%',
      label: 'Compliance',
    },
  },
  {
    id: 12,
    title: 'Agile Methodology',
    shortDescription: 'Fast and flexible delivery',
    fullDescription: 'We follow agile methodologies to ensure fast, flexible, and iterative delivery. Our agile approach allows us to adapt quickly to changing requirements and deliver value faster.',
    image: 'https://images.unsplash.com/photo-1718036094878-ecdce2b1be95?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0',
    icon: '⚡',
    metrics: {
      value: '2x',
      label: 'Faster Delivery',
    },
  },
];

export default function ThreeDImageScrollReveal({
  scrollSpeed = 60,
  totalImages = 12,
}: ThreeDImageScrollRevealProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);
  const carouselItemsRef = useRef<HTMLDivElement[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Wait for Lenis to be available
    const initAnimations = () => {
      const lenis = (window as any).lenis;

      if (lenis) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time: number) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup ScrollTriggers
      scrollTriggersRef.current.forEach((trigger) => trigger.kill());
      scrollTriggersRef.current = [];
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === carouselRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Handle card hover - pause animation
  const handleCardHover = (cardId: number) => {
    if (carouselRef.current) {
      const items = carouselRef.current.querySelectorAll(`[data-carousel-item]`);
      
      // Pause animation
      items.forEach((item) => {
        const element = item as HTMLElement;
        element.style.animationPlayState = 'paused';
      });
      setIsPaused(true);
      setHoveredCard(cardId);
    }
  };

  // Handle card leave - resume animation
  const handleCardLeave = () => {
    if (carouselRef.current) {
      const items = carouselRef.current.querySelectorAll(`[data-carousel-item]`);
      
      // Resume animation
      items.forEach((item) => {
        const element = item as HTMLElement;
        element.style.animationPlayState = 'running';
      });
      setIsPaused(false);
      setHoveredCard(null);
    }
  };

  // Navigation handlers
  const handlePrev = () => {
    if (carouselRef.current) {
      const items = carouselRef.current.querySelectorAll(`[data-carousel-item]`);
      const newIndex = (currentCardIndex - 1 + totalImages) % totalImages;
      
      // Calculate the time per card
      const timePerCard = scrollSpeed / totalImages;
      
      // Update animation delay for all cards to jump backward
      items.forEach((item) => {
        const element = item as HTMLElement;
        const currentDelay = parseFloat(getComputedStyle(element).getPropertyValue('animation-delay') || '0');
        // Jump backward by one card duration
        const newDelay = currentDelay - timePerCard;
        element.style.animationDelay = `${newDelay}s`;
      });
      
      setCurrentCardIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const items = carouselRef.current.querySelectorAll(`[data-carousel-item]`);
      const newIndex = (currentCardIndex + 1) % totalImages;
      
      // Calculate the time per card
      const timePerCard = scrollSpeed / totalImages;
      
      // Update animation delay for all cards to jump forward
      items.forEach((item) => {
        const element = item as HTMLElement;
        const currentDelay = parseFloat(getComputedStyle(element).getPropertyValue('animation-delay') || '0');
        // Jump forward by one card duration
        const newDelay = currentDelay + timePerCard;
        element.style.animationDelay = `${newDelay}s`;
      });
      
      setCurrentCardIndex(newIndex);
    }
  };

  // Initialize content elements to hidden state
  useEffect(() => {
    const timer = setTimeout(() => {
      Object.keys(contentRefs.current).forEach((key) => {
        const contentRef = contentRefs.current[parseInt(key)];
        if (contentRef) {
          gsap.set(contentRef, { opacity: 0, height: 0, y: 20 });
          const textElements = contentRef.querySelectorAll('[data-text-reveal]');
          textElements.forEach((el) => {
            gsap.set(el, { opacity: 0, y: 10 });
          });
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [totalImages]);


  // Animate content reveal
  useEffect(() => {
    Object.keys(contentRefs.current).forEach((key) => {
      const cardId = parseInt(key);
      const contentRef = contentRefs.current[cardId];
      const isActive = hoveredCard === cardId;

      if (contentRef) {
        if (isActive) {
          // Reveal content
          gsap.to(contentRef, {
            opacity: 1,
            y: 0,
            height: 'auto',
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
              // Animate text reveal after content is visible
              const textElements = contentRef.querySelectorAll('[data-text-reveal]');
              textElements.forEach((el, index) => {
                gsap.fromTo(
                  el,
                  {
                    opacity: 0,
                    y: 10,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: 0.1 * index,
                    ease: 'power2.out',
                  }
                );
              });
            },
          });
        } else {
          // Hide content
          gsap.to(contentRef, {
            opacity: 0,
            y: 20,
            height: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
              // Reset text elements for next reveal
              const textElements = contentRef.querySelectorAll('[data-text-reveal]');
              textElements.forEach((el) => {
                gsap.set(el, { opacity: 0, y: 10 });
              });
            },
          });
        }
      }
    });
  }, [hoveredCard]);

  // Calculate total images to display
  const displayCards = whyChooseUsCards.slice(0, totalImages);

  return (
    <>
      {/* Section 1: Carousel */}
      <section className={styles.loopImages} ref={carouselRef}>
        {/* Navigation Buttons */}
        <button
          className={styles.navButton}
          onClick={handlePrev}
          aria-label="Previous card"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={`${styles.navButton} ${styles.navButtonRight}`}
          onClick={handleNext}
          aria-label="Next card"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          ref={carouselTrackRef}
          className={styles.carouselTrack}
          style={
            {
              '--total': totalImages,
              '--time': `${scrollSpeed}s`,
            } as React.CSSProperties
          }
        >
          {displayCards.map((card, index) => (
            <div
              key={card.id}
              className={styles.carouselItem}
              style={{ '--i': index + 1 } as React.CSSProperties}
              data-carousel-item
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={handleCardLeave}
            >
              <div className={styles.cardWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={480}
                  height={480}
                  className={styles.cardImage}
                  unoptimized
                />
                <div className={styles.cardOverlay}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardIcon}>{card.icon}</div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardShortDescription}>{card.shortDescription}</p>
                    
                    {/* Revealable Content */}
                    <div
                      ref={(el) => {
                        contentRefs.current[card.id] = el;
                      }}
                      className={styles.cardFullContent}
                    >
                      <p className={styles.cardFullDescription} data-text-reveal>
                        {card.fullDescription}
                      </p>
                      {card.metrics && (
                        <div className={styles.cardMetrics} data-text-reveal>
                          <span className={styles.metricValue}>{card.metrics.value}</span>
                          <span className={styles.metricLabel}>{card.metrics.label}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}

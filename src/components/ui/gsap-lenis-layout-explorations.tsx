"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from '@/homepage-versions/shared/design-system/colors';
import styles from './gsap-lenis-layout-explorations.module.css';

interface CircleTransition {
  initial: { cx: number; cy: number; r: number };
  final: { cx: number; cy: number; r: number };
  outlineCircle?: SVGElement;
  filledCircle?: SVGElement;
}

export default function GSAPLenisLayoutExplorations() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const geometricBgRef = useRef<HTMLDivElement>(null);
  const gridLinesRef = useRef<SVGGElement>(null);
  const circlesOutlineRef = useRef<SVGGElement>(null);
  const circlesFilledRef = useRef<SVGGElement>(null);
  const glowCircleRef = useRef<HTMLDivElement>(null);
  const gradientRevealRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const circleTransitionsRef = useRef<CircleTransition[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Setup geometric background
  useEffect(() => {
    if (!isReady || !geometricBgRef.current) return;

    const gridLinesGroup = gridLinesRef.current;
    const circlesOutlineGroup = circlesOutlineRef.current;
    const circlesFilledGroup = circlesFilledRef.current;
    
    if (!gridLinesGroup || !circlesOutlineGroup || !circlesFilledGroup) return;

    // Clear existing elements
    gridLinesGroup.innerHTML = '';
    circlesOutlineGroup.innerHTML = '';
    circlesFilledGroup.innerHTML = '';

    // Create grid lines
    const gridSpacing = 48;
    for (let i = 0; i <= 40; i++) {
      const vLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      vLine.setAttribute('class', styles.gridLine);
      vLine.setAttribute('x1', String(i * gridSpacing));
      vLine.setAttribute('y1', '0');
      vLine.setAttribute('x2', String(i * gridSpacing));
      vLine.setAttribute('y2', '1080');
      gridLinesGroup.appendChild(vLine);

      if (i <= 22) {
        const hLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        hLine.setAttribute('class', styles.gridLine);
        hLine.setAttribute('x1', '0');
        hLine.setAttribute('y1', String(i * gridSpacing));
        hLine.setAttribute('x2', '1920');
        hLine.setAttribute('y2', String(i * gridSpacing));
        gridLinesGroup.appendChild(hLine);
      }
    }

    // Create circle transitions
    const d = 80;
    const centerX = 960;
    const centerY = 540;
    const transitions: CircleTransition[] = [
      { initial: { cx: centerX - 3 * d, cy: centerY, r: d * 0.8 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX + 3 * d, cy: centerY, r: d * 0.8 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX, cy: centerY - 3 * d, r: d * 0.8 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX, cy: centerY + 3 * d, r: d * 0.8 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX - 2 * d, cy: centerY - 2 * d, r: d * 0.6 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX + 2 * d, cy: centerY - 2 * d, r: d * 0.6 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX - 2 * d, cy: centerY + 2 * d, r: d * 0.6 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX + 2 * d, cy: centerY + 2 * d, r: d * 0.6 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX - 4 * d, cy: centerY, r: d * 0.4 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX + 4 * d, cy: centerY, r: d * 0.4 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX, cy: centerY - 4 * d, r: d * 0.4 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX, cy: centerY + 4 * d, r: d * 0.4 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
      { initial: { cx: centerX, cy: centerY, r: d * 0.3 }, final: { cx: centerX, cy: centerY, r: 4 * d } },
    ];

    transitions.forEach((transition) => {
      const circleOutline = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circleOutline.setAttribute('class', styles.circleOutline);
      circleOutline.setAttribute('cx', String(transition.initial.cx));
      circleOutline.setAttribute('cy', String(transition.initial.cy));
      circleOutline.setAttribute('r', String(transition.initial.r));
      circlesOutlineGroup.appendChild(circleOutline);

      const circleFilled = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circleFilled.setAttribute('class', styles.circleFilled);
      circleFilled.setAttribute('cx', String(transition.initial.cx));
      circleFilled.setAttribute('cy', String(transition.initial.cy));
      circleFilled.setAttribute('r', String(transition.initial.r));
      circlesFilledGroup.appendChild(circleFilled);

      transition.outlineCircle = circleOutline;
      transition.filledCircle = circleFilled;
    });

    circleTransitionsRef.current = transitions;
  }, [isReady]);

  // Handle preloader start
  const handleStart = () => {
    setIsLoading(true);
    setShowPreloader(true);
    setCounter(0);

    let count = 0;
    const timer = setInterval(() => {
      count++;
      setCounter(count);
      if (count >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          setIsReady(true);
          startAnimations();
        }, 500);
      }
    }, 50);
  };

  // Start animations
  const startAnimations = () => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    // Animate gradient reveal
    if (gradientRevealRef.current) {
      gsap.to(gradientRevealRef.current, {
        y: '-500vh',
        duration: 2,
        ease: 'power2.inOut',
        delay: 0.25,
      });
    }

    // Animate preloader out
    if (preloaderRef.current) {
      gsap.to(preloaderRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 1.0,
        onComplete: () => {
          setShowPreloader(false);
        },
      });
    }

    // Animate sections
    setTimeout(() => {
      const sections = document.querySelectorAll(`.${styles.section}`);
      sections.forEach((section: any) => {
        gsap.to(section, {
          backgroundPositionY: '50%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Start scroll animations
      updateScrollAnimations();
    }, 100);
  };

  // Update scroll animations
  const updateScrollAnimations = () => {
    if (typeof window === 'undefined') return;

    const updateAnimations = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(scrollY / maxScroll, 1);

      // Update glowing circle
      if (glowCircleRef.current) {
        const scale = 1 + progress * 1.8;
        const shadowSize = progress * 150;
        const shadowSpread = progress * 35;
        const shadowOpacity = progress;
        glowCircleRef.current.style.transform = `scale(${scale})`;
        glowCircleRef.current.style.boxShadow = `0 0 ${shadowSize}px ${shadowSpread}px rgba(0, 196, 184, ${shadowOpacity})`;
      }

      // Update grid opacity
      const gridOpacity = Math.max(0, 0.3 * (1 - progress * 1.5));
      if (gridLinesRef.current) {
        const lines = gridLinesRef.current.querySelectorAll('line');
        lines.forEach((line) => {
          line.setAttribute('stroke-opacity', String(gridOpacity));
        });
      }

      // Update circles
      circleTransitionsRef.current.forEach((transition, index) => {
        const currentCx = transition.initial.cx + (transition.final.cx - transition.initial.cx) * progress;
        const currentCy = transition.initial.cy + (transition.final.cy - transition.initial.cy) * progress;
        const currentR = transition.initial.r + (transition.final.r - transition.initial.r) * progress;
        const rotation = progress * 360 * (index % 2 === 0 ? 1 : -1);
        const opacity = Math.max(0.1, 1 - progress * 0.7);

        if (transition.outlineCircle) {
          transition.outlineCircle.setAttribute('cx', String(currentCx));
          transition.outlineCircle.setAttribute('cy', String(currentCy));
          transition.outlineCircle.setAttribute('r', String(currentR));
          transition.outlineCircle.setAttribute('transform', `rotate(${rotation} ${currentCx} ${currentCy})`);
          transition.outlineCircle.setAttribute('stroke-opacity', String(opacity));
        }
        if (transition.filledCircle) {
          transition.filledCircle.setAttribute('cx', String(currentCx));
          transition.filledCircle.setAttribute('cy', String(currentCy));
          transition.filledCircle.setAttribute('r', String(currentR));
          transition.filledCircle.setAttribute('transform', `rotate(${rotation} ${currentCx} ${currentCy})`);
          transition.filledCircle.setAttribute('fill-opacity', String(opacity * 0.05));
        }
      });

      // Update text opacity
      const footerElement = document.querySelector(`.${styles.siteFooter}`);
      if (footerElement) {
        const footerStart = footerElement.getBoundingClientRect().top + window.scrollY - window.innerHeight;
        const footerProgress = Math.max(0, (scrollY - footerStart) / (window.innerHeight * 0.5));
        const textOpacity = Math.max(0, 1 - footerProgress * 2);
        const geometricTexts = geometricBgRef.current?.querySelectorAll(`.${styles.geometricText}`);
        geometricTexts?.forEach((text) => {
          (text as SVGTextElement).style.opacity = String(textOpacity);
        });
      }
    };

    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(updateAnimations);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateAnimations();

    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Audio Enable Screen */}
      {!isReady && !showPreloader && (
        <div className={styles.audioEnable}>
          <p>ENTER EXPERIENCE<br />WITH INNOVATION</p>
          <button className={styles.enableButton} onClick={handleStart}>
            START
          </button>
        </div>
      )}

      {/* Preloader */}
      {showPreloader && (
        <div className={styles.preloader} ref={preloaderRef}>
          <span>[{String(counter).padStart(3, '0')}]</span>
        </div>
      )}

      {/* Gradient Reveal */}
      <div className={styles.gradientReveal} ref={gradientRevealRef}></div>

      {/* Geometric Background */}
      <div className={styles.geometricBackground} ref={geometricBgRef}>
        <svg className={styles.geometricSvg} viewBox="0 0 1920 1080">
          <g ref={gridLinesRef} id="grid-lines"></g>
          <g ref={circlesOutlineRef} id="circles-outline"></g>
          <g ref={circlesFilledRef} id="circles-filled">
            <clipPath id="right-half">
              <rect x="960" y="0" width="960" height="1080" />
            </clipPath>
            <g clipPath="url(#right-half)"></g>
          </g>

          <text className={styles.geometricText} x="100" y="100">INNOVATION</text>
          <text className={styles.geometricText} x="100" y="115">AT SCALE</text>

          <text className={styles.geometricText} x="1720" y="100">DIGITAL</text>
          <text className={styles.geometricText} x="1720" y="115">EXCELLENCE</text>

          <text className={styles.geometricText} x="100" y="980">AWARENESS: INNOVATION</text>
          <text className={styles.geometricText} x="100" y="995">STATE: GROWTH</text>
          <text className={styles.geometricText} x="100" y="1010">ENERGY: TRANSFORMING</text>
          <text className={styles.geometricText} x="100" y="1025">PRESENCE: LEADING</text>

          <text className={styles.geometricText} x="1620" y="980">BETWEEN THE</text>
          <text className={styles.geometricText} x="1620" y="995">BREAKTHROUGHS</text>
        </svg>
      </div>

      {/* Center Circle */}
      <div className={styles.centerCircle}>
        <div className={styles.circleContainer}>
          <div className={styles.glowingCircle} ref={glowCircleRef}></div>
        </div>
      </div>

      {/* Sections */}
      <section className={`${styles.section} ${styles.section1}`}>
        <div className={styles.sectionContent}></div>
      </section>

      <section className={`${styles.section} ${styles.section2}`}>
        <div className={styles.sectionContent}></div>
      </section>

      <section className={`${styles.section} ${styles.section3}`}>
        <div className={styles.sectionContent}></div>
      </section>

      {/* Footer */}
      <footer className={styles.siteFooter}>
        <div className={styles.footerContentSection}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <p>INNOVATION</p>
              <p>IS WHERE</p>
              <p>SOLUTIONS ARE BORN</p>
              <p>EMPTINESS</p>
              <p>CREATES SPACE</p>
              <p>FOR GROWTH</p>
            </div>
            <div className={styles.footerRight}>
              <p>CREATIVITY FLOWS THROUGH</p>
              <p>INFINITE PATHWAYS</p>
              <p>TECHNOLOGY EXPANDS</p>
              <p>INTO BOUNDLESS REALMS</p>
              <p>OF POSSIBILITY</p>
              <p>WHERE IDEAS BECOME REALITY</p>
            </div>
          </div>
          <div className={styles.footerCredits}>
            <p>Designed & Developed by <a href="#" target="_blank">Link Innovations</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}


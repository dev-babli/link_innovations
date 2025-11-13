"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HeroZoomSectionProps {
  className?: string;
}

export default function HeroZoomSection({ className = '' }: HeroZoomSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Exact code from reference
    console.clear();

    gsap.registerPlugin(ScrollTrigger);

    const initAnimation = () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: true
          }
        })
        .to("img", {
          scale: 2,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut"
        })
        .to(
          ".section.hero",
          {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut"
          },
          "<"
        );
    };

    // Wait for window load
    if (window.addEventListener) {
      window.addEventListener("load", initAnimation);
    } else {
      if (document.readyState === "complete") {
        initAnimation();
      } else {
        window.onload = initAnimation;
      }
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === wrapperRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className={`wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        zIndex: 1
      }}
    >
      <div 
        className="content"
        style={{
          position: 'relative',
          width: '100%',
          zIndex: 1,
          overflowX: 'hidden'
        }}
      >
        <section 
          className="section hero"
          style={{
            width: '100%',
            height: '100vh',
            backgroundImage: 'url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
      </div>
      <div 
        className="image-container"
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          perspective: '500px',
          overflow: 'hidden'
        }}
      >
        <img 
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" 
          alt="image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
      </div>
    </div>
  );
}
"use client";

import { useEffect, useRef } from 'react';

export default function ScrollZoomHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load GSAP with the EXACT CDN from your files
    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
    gsapScript.async = true;

    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = 'https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js';
    scrollTriggerScript.async = true;

    document.body.appendChild(gsapScript);

    gsapScript.onload = () => {
      document.body.appendChild(scrollTriggerScript);
      
      scrollTriggerScript.onload = () => {
        const gsap = (window as any).gsap;
        gsap.registerPlugin((window as any).ScrollTrigger);

        // Show rest of content initially hidden
        const restContent = document.querySelector('.rest-of-homepage-content');
        let hasCompletedOnce = false;
        
        if (restContent) {
          (restContent as HTMLElement).style.visibility = 'hidden';
          (restContent as HTMLElement).style.opacity = '0';
        }

        // EXACT same code as your script.js with content visibility logic
        gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: false,
            pinSpacing: true,
            anticipatePin: 1,
            onLeave: () => {
              hasCompletedOnce = true;
              const content = document.querySelector('.rest-of-homepage-content');
              if (content) {
                (content as HTMLElement).style.visibility = 'visible';
                (content as HTMLElement).style.opacity = '1';
              }
            },
            onLeaveBack: () => {
              const content = document.querySelector('.rest-of-homepage-content');
              if (content && !hasCompletedOnce) {
                (content as HTMLElement).style.visibility = 'hidden';
                (content as HTMLElement).style.opacity = '0';
              }
            },
            onUpdate: (self: any) => {
              if (!hasCompletedOnce) {
                const content = document.querySelector('.rest-of-homepage-content');
                if (content) {
                  if (self.progress < 0.95) {
                    (content as HTMLElement).style.visibility = 'hidden';
                    (content as HTMLElement).style.opacity = '0';
                  } else {
                    (content as HTMLElement).style.visibility = 'visible';
                    const fadeProgress = (self.progress - 0.95) / 0.05;
                    (content as HTMLElement).style.opacity = Math.min(fadeProgress, 1).toString();
                  }
                }
              }
            }
          }
        })
        .to(imageRef.current, {
          scale: 2,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut"
        })
        .to(heroRef.current, {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut"
        }, "<");
      };
    };

    // Cleanup
    return () => {
      if ((window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
      if (document.body.contains(gsapScript)) {
        document.body.removeChild(gsapScript);
      }
      if (document.body.contains(scrollTriggerScript)) {
        document.body.removeChild(scrollTriggerScript);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} style={styles.wrapper}>
      <div style={styles.content}>
        <section ref={heroRef} style={styles.hero}></section>
      </div>
      <div style={styles.imageContainer}>
        <img 
          ref={imageRef}
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" 
          alt="Hero Image"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative' as const,
    width: '100%',
    zIndex: 1
  },
  content: {
    position: 'relative' as const,
    width: '100%',
    zIndex: 1,
    overflowX: 'hidden' as const
  },
  hero: {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  imageContainer: {
    width: '100%',
    height: '100vh',
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    perspective: '500px',
    overflow: 'hidden' as const
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    objectPosition: 'center center'
  }
};











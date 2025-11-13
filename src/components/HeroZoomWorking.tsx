"use client";

import React, { useEffect } from 'react';

export default function HeroZoomWorking() {
  useEffect(() => {
    // Load GSAP scripts - EXACT same as HTML file
    const script1 = document.createElement('script');
    script1.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
    
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js';
      
      script2.onload = () => {
        // EXACT JavaScript from hero-zoom.html
        console.clear();
        console.log('GSAP loaded, initializing zoom...');
        
        gsap.registerPlugin(ScrollTrigger);
        
        // Wait for DOM to be fully ready, then initialize ScrollTrigger
        setTimeout(() => {
          console.log('Creating timeline...');
          console.log('Wrapper element:', document.querySelector('.wrapper'));
          console.log('Image element:', document.querySelector('img'));
          
          // Refresh ScrollTrigger first
          ScrollTrigger.refresh();
          
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
                markers: true,
                pinSpacing: true,
                anticipatePin: 1
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
        }, 500);
      };
      
      document.head.appendChild(script2);
    };
    
    document.head.appendChild(script1);
    
    return () => {
      // Cleanup
      if (window.ScrollTrigger) {
        ScrollTrigger.getAll().forEach(t => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* EXACT CSS from hero-zoom.html */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .wrapper,
        .content {
          position: relative;
          width: 100%;
          z-index: 1;
        }

        .content {
          overflow-x: hidden;
        }

        .content .section {
          width: 100%;
          height: 100vh;
        }

        .content .section.hero {
          background-image: url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .image-container {
          width: 100%;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2;
          perspective: 500px;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
      `}</style>

      {/* EXACT HTML from hero-zoom.html */}
      <div className="wrapper">
        <div className="content">
          <section className="section hero"></section>
        </div>
        <div className="image-container">
          <img src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" alt="Hero Image" />
        </div>
      </div>
    </>
  );
}

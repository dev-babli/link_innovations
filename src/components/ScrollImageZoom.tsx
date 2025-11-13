// ScrollImageZoom.tsx
import React, { useEffect, useRef } from "react";
import "./ScrollImageZoom.css";

type Props = {
  /** Image URL to show. If not provided a default from the original pen is used. */
  imageSrc?: string;
  /** Optional alt text for the image */
  alt?: string;
  /** Whether to show GSAP markers (useful for debugging). Default false. */
  showMarkers?: boolean;
};

const ScrollImageZoom: React.FC<Props> = ({
  imageSrc = "https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp",
  alt = "zoom image",
  showMarkers = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Load GSAP from CDN
    const loadGSAP = () => {
      return new Promise((resolve) => {
        if (window.gsap) {
          resolve(window.gsap);
          return;
        }
        
        const script1 = document.createElement('script');
        script1.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
        script1.onload = () => {
          const script2 = document.createElement('script');
          script2.src = 'https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js';
          script2.onload = () => {
            resolve(window.gsap);
          };
          document.head.appendChild(script2);
        };
        document.head.appendChild(script1);
      });
    };

    const initZoom = async () => {
      await loadGSAP();
      
      // EXACT CODE FROM THE ORIGINAL CODEPEN
      console.clear();

      gsap.registerPlugin(ScrollTrigger);

      // Wait for window load like the original
      if (document.readyState === 'complete') {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".wrapper",
              start: "top top",
              end: "+=150%",
              pin: true,
              scrub: true,
              markers: showMarkers
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
      } else {
        window.addEventListener("load", () => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
                markers: showMarkers
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
        });
      }
    };

    initZoom();

    // Cleanup on unmount: kill timeline + ScrollTriggers
    return () => {
      try {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      } catch (e) {
        /* ignore */
      }
      // kill ScrollTrigger instances associated with this component
      try {
        if (window.ScrollTrigger && ScrollTrigger.getAll) {
          const all = ScrollTrigger.getAll();
          all.forEach((st) => {
            // If the trigger element is our wrapper, kill it
            // @ts-ignore
            if (st.trigger === wrapperRef.current) st.kill();
          });
        }
      } catch (e) {
        // fallback: try killAll
        try {
          // @ts-ignore
          if (window.ScrollTrigger) ScrollTrigger.killAll && ScrollTrigger.killAll();
        } catch (err) {
          /* ignore */
        }
      }

      // clear inline styles applied by GSAP
      try {
        if (window.gsap) {
          gsap.set(imgRef.current, { clearProps: "all" });
          gsap.set(heroRef.current, { clearProps: "all" });
          gsap.set(wrapperRef.current, { clearProps: "all" });
        }
      } catch (e) {
        /* ignore */
      }
    };
  }, [imageSrc, showMarkers]);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="content">
        <section className="section hero" ref={heroRef}></section>
      </div>
      <div className="image-container">
        <img ref={imgRef} src={imageSrc} alt={alt} />
      </div>
    </div>
  );
};

export default ScrollImageZoom;

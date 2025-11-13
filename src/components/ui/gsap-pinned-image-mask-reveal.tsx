'use client';

import { useEffect, useRef } from 'react';

export default function GSAPPinnedImageMaskReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggersRef = useRef<any[]>([]);
  const scrollCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    const initAnimation = async () => {
      try {
        // Import GSAP and plugins
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Setup ScrollTrigger refresh on native scroll
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

        // Store cleanup function
        scrollCleanupRef.current = () => {
          window.removeEventListener('scroll', throttledScroll);
          window.removeEventListener('resize', handleScroll);
        };

        // Initial refresh
        ScrollTrigger.refresh();

        // Set z-index for images
        containerRef.current?.querySelectorAll(".arch__right .img-wrapper").forEach((element) => {
          const order = element.getAttribute("data-index");
          if (order !== null) {
            (element as HTMLElement).style.zIndex = order;
          }
        });

        // Handle mobile layout
        const handleMobileLayout = () => {
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
          const leftItems = gsap.utils.toArray(".arch__left .arch__info");
          const rightItems = gsap.utils.toArray(".arch__right .img-wrapper");

          if (isMobile) {
            leftItems.forEach((item, i) => {
              (item as HTMLElement).style.order = String(i * 2);
            });
            rightItems.forEach((item, i) => {
              (item as HTMLElement).style.order = String(i * 2 + 1);
            });
          } else {
            leftItems.forEach((item) => {
              (item as HTMLElement).style.order = "";
            });
            rightItems.forEach((item) => {
              (item as HTMLElement).style.order = "";
            });
          }
        };

        handleMobileLayout();

        let resizeTimeout: NodeJS.Timeout;
        const resizeHandler = () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(handleMobileLayout, 100);
        };
        window.addEventListener("resize", resizeHandler);

        const imgs = gsap.utils.toArray(".img-wrapper img") as HTMLElement[];
        const bgColors = ["#EDF9FF", "#FFECF2", "#FFE8DB"];

        // GSAP Animation with Media Query
        const mediaMatch = ScrollTrigger.matchMedia({
          "(min-width: 769px)": function () {
            const mainTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: ".arch",
                start: "top top",
                end: "bottom bottom",
                pin: ".arch__right",
                scrub: true
              }
            });

            scrollTriggersRef.current.push(mainTimeline.scrollTrigger);

            gsap.set(imgs, {
              clipPath: "inset(0)",
              objectPosition: "0px 0%"
            });

            imgs.forEach((_, index) => {
              const currentImage = imgs[index];
              const nextImage = imgs[index + 1] ? imgs[index + 1] : null;

              const sectionTimeline = gsap.timeline();

              if (nextImage) {
                sectionTimeline
                  .to(
                    "body",
                    {
                      backgroundColor: bgColors[index % bgColors.length],
                      duration: 1.5,
                      ease: "power2.inOut"
                    },
                    0
                  )
                  .to(
                    currentImage,
                    {
                      clipPath: "inset(0px 0px 100%)",
                      objectPosition: "0px 60%",
                      duration: 1.5,
                      ease: "none"
                    },
                    0
                  )
                  .to(
                    nextImage,
                    {
                      objectPosition: "0px 40%",
                      duration: 1.5,
                      ease: "none"
                    },
                    0
                  );
              }

              mainTimeline.add(sectionTimeline);
            });
          },
          "(max-width: 768px)": function () {
            gsap.set(imgs, {
              objectPosition: "0px 60%"
            });

            imgs.forEach((image, index) => {
              const innerTimeline = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  start: "top-=70% top+=50%",
                  end: "bottom+=200% bottom",
                  scrub: true
                }
              });

              scrollTriggersRef.current.push(innerTimeline.scrollTrigger);

              innerTimeline
                .to(image, {
                  objectPosition: "0px 30%",
                  duration: 5,
                  ease: "none"
                })
                .to("body", {
                  backgroundColor: bgColors[index % bgColors.length],
                  duration: 1.5,
                  ease: "power2.inOut"
                });
            });
          }
        });

        // Cleanup function
        return () => {
          window.removeEventListener("resize", resizeHandler);
          if (scrollCleanupRef.current) {
            scrollCleanupRef.current();
          }
          scrollTriggersRef.current.forEach(st => {
            if (st && st.kill) st.kill();
          });
          if (mediaMatch && typeof mediaMatch.kill === 'function') {
            mediaMatch.kill();
          }
        };
      } catch (error) {
        console.error('Error initializing GSAP pinned image mask reveal:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      initAnimation();
    }, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId);
      if (scrollCleanupRef.current) {
        scrollCleanupRef.current();
      }
      scrollTriggersRef.current.forEach(st => {
        if (st && st.kill) st.kill();
      });
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;800&display=swap");
        
        .pinned-mask-container {
          max-width: 1440px;
          padding: 2rem;
          margin: 0 auto;
          background-color: #f9ffe7;
        }
        
        .spacer {
          width: 100%;
          height: 30vh;
        }
        
        .arch {
          display: flex;
          gap: 60px;
          justify-content: space-between;
          max-width: 1100px;
          margin-inline: auto;
        }
        
        .arch__left {
          display: flex;
          flex-direction: column;
          min-width: 300px;
        }
        
        .arch__info {
          max-width: 356px;
          height: 100vh;
          display: grid;
          place-items: center;
        }
        
        .arch__info h2 {
          font-family: Outfit;
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -0.84px;
          color: #121212;
        }
        
        .arch__info p {
          color: rgba(18, 18, 18, 0.8);
          font-size: 18px;
          letter-spacing: -0.54px;
          margin-block: 6px 28px;
          line-height: normal;
        }
        
        .arch__info a {
          text-decoration: none;
          padding: 16px 18px;
          color: inherit;
          border-radius: 40px;
          display: flex;
          gap: 4px;
          width: fit-content;
          align-items: center;
        }
        
        .arch__right {
          flex-shrink: 1;
          height: 100vh;
          width: 100%;
          max-width: 540px;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .img-wrapper {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          height: 400px;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
        }
        
        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        @media (max-width: 768px) {
          .arch {
            flex-direction: column;
            gap: 20px;
          }
          
          .arch__left,
          .arch__right {
            display: contents;
          }
          
          .arch__right {
            height: auto;
            max-width: 100%;
          }
          
          .img-wrapper {
            position: static;
            transform: none;
            height: 360px;
            width: 100%;
            margin-bottom: 20px;
          }
          
          .arch__info {
            height: auto;
            padding: 20px 0;
          }
        }
      `}</style>
      <div ref={containerRef} className="pinned-mask-container">
        <div className="spacer"></div>
        <div className="arch">
          <div className="arch__left">
            <div className="arch__info" id="green-arch">
              <div className="content">
                <h2 className="header">Green Cityscape</h2>
                <p className="desc">Vibrant streets with vertical gardens and solar buildings. This oasis thrives on renewable energy, smart transport, and green spaces for biodiversity.</p>
                <a className="link" href="#" style={{ backgroundColor: '#D5FF37' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                    <path fill="#121212" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                  </svg> <span>Learn More</span>
                </a>
              </div>
            </div>

            <div className="arch__info" id="blue-arch">
              <div className="content">
                <h2 className="header">Blue Urban Oasis</h2>
                <p className="desc">Avenues with azure facades and eco-structures. This hub uses clean energy, smart transit, and parks for urban wildlife.</p>
                <a className="link" href="#" style={{ backgroundColor: '#7DD6FF' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                    <path fill="#121212" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                  </svg> <span>Learn More</span>
                </a>
              </div>
            </div>

            <div className="arch__info" id="pink-arch">
              <div className="content">
                <h2 className="header">Fluid Architecture</h2>
                <p className="desc">Desert refuge with fluid architecture and glowing interiors. This sanctuary harnesses solar power, sustainable design, and natural harmony for resilient living.</p>
                <a className="link" href="#" style={{ backgroundColor: '#FFA0B0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                    <path fill="#121212" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                  </svg> <span>Learn More</span>
                </a>
              </div>
            </div>

            <div className="arch__info" id="orange-arch">
              <div className="content">
                <h2 className="header">Martian Arches</h2>
                <p className="desc">Ethereal structures arc over tranquil waters, bathed in the glow of a setting Martian sun. This desolate beauty showcases the stark, captivating landscape of the red planet.</p>
                <a className="link" href="#" style={{ backgroundColor: '#FFA17B' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                    <path fill="#121212" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                  </svg> <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="arch__right">
            <div className="img-wrapper" data-index="4">
              <img src="https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp" alt="Green Architecture" />
            </div>

            <div className="img-wrapper" data-index="3">
              <img src="https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp" alt="Blue Architecture" />
            </div>

            <div className="img-wrapper" data-index="2">
              <img src="https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp" alt="Pink Architecture" />
            </div>

            <div className="img-wrapper" data-index="1">
              <img src="https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp" alt="Orange Architecture" />
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </>
  );
}

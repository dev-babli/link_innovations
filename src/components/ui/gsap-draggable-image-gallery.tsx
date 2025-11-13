'use client';

import { useEffect, useRef } from 'react';

export default function GSAPDraggableImageGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    const initGallery = async () => {
      try {
        // Import GSAP and plugins
        const gsap = (await import('gsap')).default;
        const { Draggable } = await import('gsap/Draggable');
        const { InertiaPlugin } = await import('gsap/InertiaPlugin');
        const { CustomEase } = await import('gsap/CustomEase');
        const { Flip } = await import('gsap/Flip');

        // Register plugins
        gsap.registerPlugin(Draggable, InertiaPlugin, CustomEase, Flip);

        const viewport = containerRef.current?.querySelector('.viewport') as HTMLElement;
        const canvasWrapper = containerRef.current?.querySelector('.canvas-wrapper') as HTMLElement;
        const gridContainer = containerRef.current?.querySelector('.grid-container') as HTMLElement;

        if (!viewport || !canvasWrapper || !gridContainer) return;

        // Configuration
        const config = {
          itemSize: 320,
          baseGap: 16,
          rows: 8,
          cols: 12,
          currentZoom: 0.6,
          currentGap: 32
        };

        // Custom eases
        const customEase = CustomEase.create("smooth", ".87,0,.13,1");
        const centerEase = CustomEase.create("center", ".25,.46,.45,.94");

        // Calculate grid dimensions
        const calculateGridDimensions = (gap: number, zoom: number) => {
          const width = config.cols * (config.itemSize + gap) - gap;
          const height = config.rows * (config.itemSize + gap) - gap;
          return {
            width,
            height,
            scaledWidth: width * zoom,
            scaledHeight: height * zoom
          };
        };

        const gridDims = calculateGridDimensions(config.currentGap, config.currentZoom);

        // Set canvas wrapper size
        gsap.set(canvasWrapper, {
          width: gridDims.width,
          height: gridDims.height,
          scale: config.currentZoom
        });

        // Generate grid items
        const fashionImages: string[] = [];
        for (let i = 1; i <= 14; i++) {
          const paddedNumber = String(i).padStart(2, "0");
          fashionImages.push(
            `https://assets.codepen.io/7558/orange-portrait_${paddedNumber}.jpg`
          );
        }

        gridContainer.innerHTML = '';
        let imageIndex = 0;

        for (let row = 0; row < config.rows; row++) {
          for (let col = 0; col < config.cols; col++) {
            const item = document.createElement("div");
            item.className = "grid-item";

            const x = col * (config.itemSize + config.currentGap);
            const y = row * (config.itemSize + config.currentGap);

            item.style.left = `${x}px`;
            item.style.top = `${y}px`;

            const imageUrl = fashionImages[imageIndex % fashionImages.length];
            imageIndex++;

            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = `Fashion Portrait ${imageIndex}`;
            item.appendChild(img);

            gridContainer.appendChild(item);
          }
        }

        // Calculate bounds for dragging
        const calculateBounds = () => {
          const vw = window.innerWidth;
          const vh = window.innerHeight;
          const { scaledWidth, scaledHeight } = gridDims;
          const marginX = config.currentGap * config.currentZoom;
          const marginY = config.currentGap * config.currentZoom;

          let minX, maxX, minY, maxY;

          if (scaledWidth <= vw) {
            const centerX = (vw - scaledWidth) / 2;
            minX = maxX = centerX;
          } else {
            maxX = marginX;
            minX = vw - scaledWidth - marginX;
          }

          if (scaledHeight <= vh) {
            const centerY = (vh - scaledHeight) / 2;
            minY = maxY = centerY;
          } else {
            maxY = marginY;
            minY = vh - scaledHeight - marginY;
          }

          return { minX, maxX, minY, maxY };
        };

        // Center the grid initially
        const centerGrid = () => {
          const vw = window.innerWidth;
          const vh = window.innerHeight;
          const { scaledWidth, scaledHeight } = gridDims;
          const centerX = (vw - scaledWidth) / 2;
          const centerY = (vh - scaledHeight) / 2;

          gsap.set(canvasWrapper, {
            x: centerX,
            y: centerY
          });
        };

        centerGrid();

        // Show viewport
        gsap.set(viewport, { opacity: 0 });
        gsap.to(viewport, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          delay: 0.1
        });

        // Initialize draggable after a short delay
        setTimeout(() => {
          const bounds = calculateBounds();
          
          const draggable = Draggable.create(canvasWrapper, {
            type: "x,y",
            bounds: bounds,
            edgeResistance: 0.8,
            inertia: true,
            throwProps: true,
            onDragStart: () => {
              document.body.classList.add("dragging");
            },
            onDragEnd: () => {
              document.body.classList.remove("dragging");
            }
          })[0];

          galleryRef.current = draggable;

          // Add hover effects to grid items
          const items = gridContainer.querySelectorAll('.grid-item');
          items.forEach((item) => {
            const element = item as HTMLElement;
            element.addEventListener('mouseenter', () => {
              gsap.to(element, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
                zIndex: 2
              });
            });
            element.addEventListener('mouseleave', () => {
              gsap.to(element, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                zIndex: 1
              });
            });
          });
        }, 500);

        // Handle resize
        const resizeHandler = () => {
          setTimeout(() => {
            centerGrid();
            const bounds = calculateBounds();
            if (galleryRef.current) {
              galleryRef.current.applyBounds(bounds);
            }
          }, 100);
        };

        window.addEventListener("resize", resizeHandler);

        // Cleanup
        return () => {
          window.removeEventListener("resize", resizeHandler);
          if (galleryRef.current && galleryRef.current.kill) {
            galleryRef.current.kill();
          }
        };
      } catch (error) {
        console.error('Error initializing GSAP draggable gallery:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      initGallery();
    }, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId);
      if (galleryRef.current && galleryRef.current.kill) {
        galleryRef.current.kill();
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.cdnfonts.com/css/thegoodmonolith");
        
        @font-face {
          font-family: "PPNeueMontreal";
          src: url("https://assets.codepen.io/7558/PPNeueMontreal-Variable.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
        }
        
        .draggable-gallery-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          background: #000;
          overflow: hidden;
        }
        
        body.dragging {
          cursor: grabbing !important;
        }
        
        .viewport {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 1;
          opacity: 0;
          cursor: grab;
        }
        
        .viewport.active {
          opacity: 1;
        }
        
        .canvas-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          transform-origin: 0 0;
          will-change: transform;
          isolation: isolate;
        }
        
        .grid-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .grid-item {
          position: absolute;
          width: 320px;
          height: 320px;
          background: #000;
          cursor: pointer;
          will-change: transform, opacity;
          z-index: 1;
          opacity: 1;
          transition: opacity 0.6s ease;
        }
        
        .grid-item.out-of-view {
          opacity: 0.1;
        }
        
        .grid-item.selected {
          z-index: 2 !important;
        }
        
        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          pointer-events: none;
        }
      `}</style>
      <div ref={containerRef} className="draggable-gallery-wrapper">
        <div className="viewport">
          <div className="canvas-wrapper">
            <div className="grid-container">
              {/* Grid items will be generated by JavaScript */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

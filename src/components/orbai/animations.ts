import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation utilities using GSAP
export const animations = {
  // Fade up animation on scroll reveal
  fadeUp: (element: HTMLElement, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 40,
        willChange: 'transform, opacity'
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Scale in animation on scroll reveal
  scaleIn: (element: HTMLElement, delay = 0) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        scale: 0.9,
        willChange: 'transform, opacity'
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Continuous float animation
  floatAnimation: (element: HTMLElement, duration = 6) => {
    gsap.to(element, {
      y: -20,
      duration,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  },

  // Continuous rotation animation
  rotateAnimation: (element: HTMLElement, duration = 8) => {
    gsap.to(element, {
      rotation: 360,
      duration,
      ease: "none",
      repeat: -1
    });
  },

  // Hover lift effect
  hoverLift: (element: HTMLElement) => {
    const hoverTl = gsap.timeline({ paused: true });
    
    hoverTl.to(element, {
      y: -8,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });

    element.addEventListener('mouseenter', () => hoverTl.play());
    element.addEventListener('mouseleave', () => hoverTl.reverse());
  },

  // Animated number counter
  numberCounter: (element: HTMLElement, targetValue: number, duration = 2) => {
    gsap.fromTo(element, 
      { innerText: 0 },
      {
        innerText: targetValue,
        duration,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate: function() {
          element.innerText = Math.ceil(this.targets()[0].innerText);
        },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  },

  // SVG line drawing animation
  drawLine: (pathElement: SVGPathElement, duration = 1) => {
    const length = pathElement.getTotalLength();
    pathElement.style.strokeDasharray = length.toString();
    pathElement.style.strokeDashoffset = length.toString();

    gsap.to(pathElement, {
      strokeDashoffset: 0,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: pathElement,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  },

  // Staggered animation for multiple elements
  staggerFadeUp: (elements: HTMLElement[], staggerDelay = 0.15) => {
    gsap.fromTo(elements,
      {
        opacity: 0,
        y: 40,
        willChange: 'transform, opacity'
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: staggerDelay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements[0],
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Marquee infinite scroll
  marqueeScroll: (element: HTMLElement, direction = 'left', speed = 1) => {
    const content = element.querySelector('.marquee-content') as HTMLElement;
    if (!content) return;

    const distance = content.scrollWidth / 2;
    const duration = distance / (50 * speed); // 50px per second base speed

    gsap.to(content, {
      x: direction === 'left' ? -distance : distance,
      duration,
      ease: "none",
      repeat: -1
    });
  },

  // Accordion expand/collapse
  accordionToggle: (content: HTMLElement, isOpen: boolean) => {
    gsap.to(content, {
      height: isOpen ? 'auto' : 0,
      duration: 0.4,
      ease: "power2.inOut"
    });
  },

  // Timeline for coordinated animations
  createTimeline: () => {
    return gsap.timeline();
  }
};

// Utility function to set will-change property
export const setWillChange = (element: HTMLElement, property: string = 'transform, opacity') => {
  element.style.willChange = property;
};

// Utility function to clear will-change property
export const clearWillChange = (element: HTMLElement) => {
  element.style.willChange = 'auto';
};

// Hook for cleanup
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};




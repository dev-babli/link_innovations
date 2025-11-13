import { useEffect, useRef } from 'react';

export default function ScrollZoomEffect() {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    gsapScript.async = true;

    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    scrollTriggerScript.async = true;

    document.body.appendChild(gsapScript);

    gsapScript.onload = () => {
      document.body.appendChild(scrollTriggerScript);
      
      scrollTriggerScript.onload = () => {
        const gsap = window.gsap;
        gsap.registerPlugin(window.ScrollTrigger);

        // Create the animation
        gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: true
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
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      document.body.removeChild(gsapScript);
      if (document.body.contains(scrollTriggerScript)) {
        document.body.removeChild(scrollTriggerScript);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '300vh' }}>
      <div ref={wrapperRef} style={styles.wrapper}>
        <div style={styles.content}>
          <section ref={heroRef} style={styles.hero}></section>
        </div>
        <div style={styles.imageContainer}>
          <img 
            ref={imageRef}
            src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" 
            alt="Zooming image"
            style={styles.image}
          />
        </div>
      </div>
      
      {/* Spacer to allow scrolling */}
      <div style={{ height: '100vh', background: '#1a1a1a' }}></div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    zIndex: 1
  },
  content: {
    position: 'relative',
    width: '100%',
    zIndex: 1,
    overflowX: 'hidden'
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    perspective: '500px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center'
  }










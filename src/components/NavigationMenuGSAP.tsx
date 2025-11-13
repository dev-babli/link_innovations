"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { registerGSAPPlugins } from '@/lib/gsap-config';
import { imageAssets } from '@/lib/image-assets';
import LogoFallback from './LogoFallback';

interface NavigationMenuGSAPProps {
  className?: string;
}

export default function NavigationMenuGSAP({ className = '' }: NavigationMenuGSAPProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const pageContentRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const bgImagesRef = useRef<HTMLImageElement[]>([]);
  const menuItemsRef = useRef<HTMLLIElement[]>([]);

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'INDUSTRIES', href: '/industries' },
    { label: 'CONTACT US', href: '/contact' }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/link-innovations' },
    { label: 'Twitter', href: 'https://twitter.com/linkinnovations' },
    { label: 'GitHub', href: 'https://github.com/link-innovations' }
  ];

  useEffect(() => {
    registerGSAPPlugins();

    if (typeof window === 'undefined') return;

    const menuOverlay = menuOverlayRef.current;
    const pageContent = pageContentRef.current;
    const toggleButton = toggleButtonRef.current;

    if (!menuOverlay || !pageContent || !toggleButton) return;

    // Wait for fonts to load before initializing SplitText
    const initMenu = () => {
      if (document.fonts && document.fonts.status === 'loaded') {
        setupMenuAnimations();
      } else if (document.fonts) {
        document.fonts.ready.then(setupMenuAnimations);
      } else {
        // Fallback for browsers without Font Loading API
        setTimeout(setupMenuAnimations, 1000);
      }
    };

    const setupMenuAnimations = () => {
      // Show first image by default
      if (bgImagesRef.current[0]) {
        gsap.set(bgImagesRef.current[0], { opacity: 1 });
      }

      // Menu item hover effects
      menuItemsRef.current.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
          // Fade out all images
          gsap.to(bgImagesRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut"
          });

          // Fade in corresponding image
          if (bgImagesRef.current[index + 1]) {
            gsap.to(bgImagesRef.current[index + 1], {
              opacity: 1,
              scale: 1.18,
              duration: 0.5,
              ease: "power3.inOut"
            });
          }
        });

        item.addEventListener('mouseleave', () => {
          // Reset to default (first image)
          gsap.to(bgImagesRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            scale: 1
          });
          if (bgImagesRef.current[0]) {
            gsap.to(bgImagesRef.current[0], {
              opacity: 1,
              duration: 0.5,
              ease: "power3.inOut"
            });
          }
        });
      });

      // Create menu timeline
      const menuTimeline = gsap.timeline({ paused: true });
      menuTimelineRef.current = menuTimeline;

      // OPEN ANIMATION
      menuTimeline
        // Animate menu overlay clip-path open
        .to(menuOverlay, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 100%)",
          duration: 0.8,
          ease: "power3.inOut",
          onStart: () => {
            menuOverlay.style.pointerEvents = "none";
          },
          onComplete: () => {
            menuOverlay.style.clipPath = "none";
            menuOverlay.style.pointerEvents = "auto";
          }
        }, 0)
        // Animate page content
        .to(pageContent, {
          yPercent: 20,
          rotation: 18,
          scale: 1.3,
          transformOrigin: "left top",
          duration: 0.8,
          ease: "power3.inOut"
        }, 0)
        // Animate background zoom
        .to(".menu-overlay__bg-img img", {
          scale: 1.1,
          duration: 1,
          ease: "power3.inOut"
        }, 0)
        // Animate menu links in
        .add(() => {
          const linkTexts = document.querySelectorAll("[data-text-anim]");
          
          linkTexts.forEach((el) => {
            gsap.set(el, { visibility: "visible" });
            
            try {
              const split = new SplitText(el as HTMLElement, {
                type: "chars",
                smartWrap: true,
                mask: "chars"
              });

              menuTimeline.fromTo(
                split.chars,
                { yPercent: -200 },
                { yPercent: 0, ease: "power2.inOut", duration: 0.5, stagger: 0.01 },
                0.2
              );
            } catch (error) {
              console.warn('SplitText not available, using fallback animation');
              gsap.fromTo(
                el,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                0.2
              );
            }
          });
        }, 0)
        // Animate toggle button
        .to(".toggle-line-top", {
          transformOrigin: "center",
          y: 4,
          scaleX: 0.8,
          rotation: 45,
          duration: 0.4,
          ease: "back.out(1.5)"
        }, 0.2)
        .to(".toggle-line-bottom", {
          transformOrigin: "center",
          y: -4,
          scaleX: 0.8,
          rotation: -45,
          duration: 0.4,
          ease: "back.out(1.5)"
        }, 0.2);

      // Toggle button click handler
      const handleToggleClick = () => {
        if (menuTimeline.progress() === 1) {
          // Menu is open, close it
          menuTimeline.reverse();
          setIsMenuOpen(false);
          menuTimeline.eventCallback("onReverseComplete", () => {
            menuOverlay.style.pointerEvents = "none";
          });
        } else {
          // Menu is closed, open it
          menuTimeline.play();
          setIsMenuOpen(true);
        }
      };

      toggleButton.addEventListener("click", handleToggleClick);
    };

    // Initialize menu
    initMenu();

    // Cleanup
    return () => {
      const toggleButton = toggleButtonRef.current;
      if (toggleButton) {
        toggleButton.removeEventListener("click", () => {});
      }
      if (menuTimelineRef.current) {
        menuTimelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === menuOverlay || trigger.scroller === menuOverlay) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`navbar ${className}`}>
        <div className="menu-bar">
          <div className="logo-wrapper">
            <LogoFallback alt="Link Innovations" />
          </div>
          <button 
            ref={toggleButtonRef}
            id="menu-toggle" 
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="toggle-line-top"></span>
            <span className="toggle-line-bottom"></span>
          </button>
          <a href="#" className="navbar__btn btn">
            <span className="btn-txt">GET STARTED</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none">
              <path fill="currentColor" d="m17.76 6.857-5.727-5.688a.821.821 0 0 0-1.147.01.81.81 0 0 0-.01 1.139l4.33 4.3H.819a.821.821 0 0 0-.578.238.81.81 0 0 0 .578 1.388h14.389l-4.33 4.3a.813.813 0 0 0-.19.892.813.813 0 0 0 .765.505.824.824 0 0 0 .581-.248l5.727-5.688a.81.81 0 0 0 0-1.148Z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div ref={menuOverlayRef} className="menu-overlay">
        <div className="menu-overlay__bg-container" aria-hidden="true">
          {/* Default background */}
          <div className="menu-overlay__bg-img">
            <img 
              ref={el => { if (el) bgImagesRef.current[0] = el; }}
              src={imageAssets.navigation.default} 
              alt="Default background" 
            />
          </div>
          {/* Menu item backgrounds */}
          {menuItems.map((item, index) => (
            <div key={item.label} className="menu-overlay__bg-img">
              <img 
                ref={el => { if (el) bgImagesRef.current[index + 1] = el; }}
                src={imageAssets.navigation[item.label.toLowerCase().replace(' ', '') as keyof typeof imageAssets.navigation] || imageAssets.navigation.default} 
                alt={`${item.label} background`} 
              />
            </div>
          ))}
        </div>

        <div className="menu-overlay__content">
          <div className="menu-overlay__links">
            <div className="menu-overlay__main">
              <ul>
                {menuItems.map((item, index) => (
                  <li 
                    key={item.label}
                    ref={el => { if (el) menuItemsRef.current[index] = el; }}
                  >
                    <a href={item.href} data-text-anim>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-overlay__socials">
              <ul>
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
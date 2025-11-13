"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ArrowRight } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

// Navigation items with background images
const navigationItems = [
  {
    title: "HOME",
    href: "/",
    bgImage: "/images/ai-brain-hero.jpg",
    dataBgFor: "home"
  },
  {
    title: "ABOUT US",
    href: "/about",
    bgImage: "/images/aerial-view-business-team.jpg",
    dataBgFor: "about"
  },
  {
    title: "SERVICES",
    href: "/services/web-app-development",
    bgImage: "/images/service-cards/web-development-service-card.webp",
    dataBgFor: "services"
  },
  {
    title: "INDUSTRIES",
    href: "/showcases",
    bgImage: "/images/industry_cards/Manufacturing and Automotive.webp",
    dataBgFor: "industries"
  },
  {
    title: "CONTACT US",
    href: "/contact",
    bgImage: "/images/cloud-computing-hero.webp",
    dataBgFor: "contact"
  }
];

// Social links
const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com" },
  { title: "Twitter", href: "https://twitter.com" },
  { title: "Facebook", href: "https://facebook.com" }
];

interface GSAPNavigationMenuProps {
  children?: React.ReactNode;
}

export function GSAPNavigationMenu({ children }: GSAPNavigationMenuProps) {
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const pageContentRef = useRef<HTMLDivElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bgImagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!menuOverlayRef.current) return;

    const menuOverlay = menuOverlayRef.current;
    const bgImgs = bgImagesRef.current.filter(Boolean) as HTMLImageElement[];
    const items = menuItemsRef.current.filter(Boolean) as HTMLAnchorElement[];
    
    // Show first image by default
    if (bgImgs[0]) {
      gsap.set(bgImgs[0], { opacity: 1 });
    }

    // Background image hover animations
    items.forEach((item, index) => {
      const handleMouseEnter = () => {
        // Fade out all images
        gsap.to(bgImgs, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });

        // Fade in corresponding image (index + 1 because first is default)
        if (bgImgs[index + 1]) {
          gsap.to(bgImgs[index + 1], {
            opacity: 1,
            scale: 1.18,
            duration: 0.5,
            ease: "power3.inOut"
          });
        }
      };

      const handleMouseLeave = () => {
        // Reset to default (first image)
        gsap.to(bgImgs, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          scale: 1
        });
        if (bgImgs[0]) {
          gsap.to(bgImgs[0], {
            opacity: 1,
            duration: 0.5,
            ease: "power3.inOut"
          });
        }
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Create menu timeline
    const menuTimeline = gsap.timeline({ paused: true });
    menuTimelineRef.current = menuTimeline;

    // === OPEN ANIMATION ===
    menuTimeline
      // Animate menu overlay clip-path open
      .to(
        menuOverlay,
        {
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
        },
        0
      )
      // Animate page content
      .to(
        pageContentRef.current,
        {
          yPercent: 20,
          rotation: 18,
          scale: 1.3,
          transformOrigin: "left top",
          duration: 0.8,
          ease: "power3.inOut"
        },
        0
      )
      // Animate background zoom
      .to(
        ".gsap-menu-overlay__bg-img img",
        {
          scale: 1.1,
          duration: 1,
          ease: "power3.inOut"
        },
        0
      )
      // Animate menu links in
      .add(() => {
        const linkTexts = document.querySelectorAll("[data-gsap-text-anim]");

        linkTexts.forEach((el) => {
          gsap.set(el, { visibility: "visible" });

          const split = new SplitText(el, {
            type: "chars",
          });

          menuTimeline.fromTo(
            split.chars,
            { yPercent: -200 },
            { yPercent: 0, ease: "power2.inOut", duration: 0.5, stagger: 0.01 },
            0.2
          );
        });
      }, 0)
      // Animate toggle button
      .to(
        ".gsap-toggle-line-top",
        {
          transformOrigin: "center",
          y: 4,
          scaleX: 0.8,
          rotation: 45,
          duration: 0.4,
          ease: "back.out(1.5)"
        },
        0.2
      )
      .to(
        ".gsap-toggle-line-bottom",
        {
          transformOrigin: "center",
          y: -4,
          scaleX: 0.8,
          rotation: -45,
          duration: 0.4,
          ease: "back.out(1.5)"
        },
        0.2
      )
      // Animate close button inside menu
      .to(
        ".gsap-menu-close-btn",
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)"
        },
        0.4
      );

    return () => {
      menuTimeline.kill();
    };
  }, []);

  const toggleMenu = () => {
    const menuTimeline = menuTimelineRef.current;
    if (!menuTimeline || !menuOverlayRef.current) return;

    if (menuTimeline.progress() === 1) {
      // Menu is open, close it
      menuTimeline.reverse();
      menuTimeline.eventCallback("onReverseComplete", () => {
        if (menuOverlayRef.current) {
          menuOverlayRef.current.style.pointerEvents = "none";
        }
      });
      setIsMenuOpen(false);
    } else {
      // Menu is closed, open it
      menuTimeline.play();
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      {/* Menu Overlay */}
      <div
        ref={menuOverlayRef}
        className="gsap-menu-overlay fixed inset-0 h-screen w-screen z-[9999] pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      >
        {/* Background Images Container */}
        <div className="gsap-menu-overlay__bg-container absolute top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[#FFDCAC]">
          {/* Default background */}
          <div className="gsap-menu-overlay__bg-img absolute top-0 left-0 w-full h-full">
            <img
              ref={(el) => { bgImagesRef.current[0] = el; }}
              src="/images/cloud-cityscape-hero.jpg"
              alt=""
              className="w-full h-full object-cover opacity-0"
            />
          </div>
          {/* Dynamic backgrounds for each menu item */}
          {navigationItems.map((item, index) => (
            <div key={item.dataBgFor} className="gsap-menu-overlay__bg-img absolute top-0 left-0 w-full h-full">
              <img
                ref={(el) => { bgImagesRef.current[index + 1] = el; }}
                src={item.bgImage}
                data-bg-for={item.dataBgFor}
                alt=""
                className="w-full h-full object-cover opacity-0"
              />
            </div>
          ))}
        </div>

        {/* Menu Content */}
        <div className="gsap-menu-overlay__content w-full h-full flex items-center justify-start">
          <div className="gsap-menu-overlay__links w-1/2 h-full flex flex-col items-center justify-center text-center gap-2.5 px-7 py-11 relative" style={{
            background: "rgba(29, 20, 4, 0.21)",
            backdropFilter: "blur(67px)"
          }}>
            {/* Close Button (X) */}
            <button
              onClick={toggleMenu}
              className="gsap-menu-close-btn absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF0DC] hover:bg-[#FFAD3B] transition-all duration-300 group z-50"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#2F2411] group-hover:text-[#FFF7E8] transition-colors duration-300"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Main Navigation Links */}
            <div className="gsap-menu-overlay__main">
              <ul className="list-none p-0 m-0">
                {navigationItems.map((item, index) => (
                  <li key={item.href} className="mb-2.5 transition-opacity duration-300 w-fit mx-auto hover:opacity-100 [&:has(~li:hover)]:opacity-50">
                    <Link
                      ref={(el) => { menuItemsRef.current[index] = el; }}
                      href={item.href}
                      data-gsap-text-anim
                      className="text-[#FFF7E8] font-['Anton',sans-serif] leading-[93%] no-underline"
                      style={{
                        fontSize: "clamp(2rem, 4.862vw + 0.936rem, 5.313rem)",
                        letterSpacing: "-1.2px",
                        visibility: "hidden"
                      }}
                      onClick={() => {
                        const menuTimeline = menuTimelineRef.current;
                        if (menuTimeline && menuTimeline.progress() === 1) {
                          menuTimeline.reverse();
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="gsap-menu-overlay__socials">
              <ul className="flex gap-3.5 text-[#FFF7E8] font-semibold leading-normal list-none p-0 m-0" style={{
                fontSize: "clamp(1rem, 0.55vw + 0.88rem, 1.375rem)",
                letterSpacing: "-0.44px"
              }}>
                {socialLinks.map((social) => (
                  <li key={social.title}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline text-inherit transition-opacity duration-300 hover:opacity-70"
                    >
                      {social.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="navbar fixed top-[18px] w-full z-[9998]">
        <nav className="max-w-[1440px] px-8 mx-auto">
          <div className="menu-bar flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="logo-wrapper">
              <img
                src="/images/lumin-innovations-horizontal.png"
                alt="Link Innovations"
                className="h-10 w-auto"
              />
            </Link>

            {/* Menu Toggle Button */}
            <div
              id="gsap-menu-toggle"
              className="w-11 h-11 relative flex flex-col gap-[7px] items-center justify-center bg-[#FFF0DC] rounded-[10px] cursor-pointer"
              onClick={toggleMenu}
            >
              <span className="gsap-toggle-line-top w-[29px] h-0.5 bg-[#2F2411]"></span>
              <span className="gsap-toggle-line-bottom w-[29px] h-0.5 bg-[#2F2411]"></span>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="navbar__btn flex gap-2.5 px-3.5 py-3.5 rounded-[10px] bg-[#FFF0DC] text-[#2F2411] font-['Anton',sans-serif] items-center justify-center no-underline text-lg transition-all duration-300 hover:bg-[#FFAD3B] hover:text-[#FFF7E8]"
            >
              <span className="btn-txt">GET STARTED</span>
              <ArrowRight className="w-[18px] h-[14px]" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Content Wrapper - This wraps around your main content */}
      <div ref={pageContentRef} className="page-content will-change-transform">
        {children}
      </div>
    </>
  );
}


"use client";

import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import Galaxy from "@/components/Galaxy";
import './ModernNavbar.css';

// Navigation items - All 6 categories with descriptions and images for bento grid
const navigationItems = [
    {
        label: "Services",
        bgColor: "#1a1a1a",
        textColor: "#ffffff",
        links: [
            { label: "Web Development", href: "/services/web-development", ariaLabel: "Web Development services", description: "Custom web applications and websites", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
            { label: "Mobile Apps", href: "/services/mobile-apps", ariaLabel: "Mobile App development", description: "iOS and Android applications", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop" },
            { label: "AI Solutions", href: "/services/ai-automation", ariaLabel: "AI and automation solutions", description: "Machine learning and automation", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" },
            { label: "Cloud Services", href: "/services/cloud-devops", ariaLabel: "Cloud and DevOps services", description: "Scalable cloud infrastructure", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" },
            { label: "Data Analytics", href: "/services/data-analytics", ariaLabel: "Data analytics solutions", description: "Business intelligence solutions", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
            { label: "Cybersecurity", href: "/services/cybersecurity", ariaLabel: "Cybersecurity solutions", description: "Digital security and protection", image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop" },
        ],
    },
    {
        label: "Industries",
        bgColor: "#2d1b69",
        textColor: "#ffffff",
        links: [],
    },
    {
        label: "Blogs",
        bgColor: "#16423C",
        textColor: "#ffffff",
        links: [
            { label: "Technology Trends", href: "/homepage-1", ariaLabel: "Technology trends", description: "Latest in tech innovation", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop" },
            { label: "Case Studies", href: "/case-studies-demo", ariaLabel: "Case studies", description: "Success stories and insights", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
            { label: "Industry News", href: "/homepage-2", ariaLabel: "Industry news", description: "Market updates and analysis", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop" },
            { label: "Tutorials", href: "/gsap-showcase", ariaLabel: "Tutorials", description: "How-to guides and tips", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" },
            { label: "Company Updates", href: "/homepage-3", ariaLabel: "Company updates", description: "Link Innovations news", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
        ],
    },
    {
        label: "Case Studies",
        bgColor: "#6A1E55",
        textColor: "#ffffff",
        links: [
            { label: "Cortex Showcase", href: "/showcases/cortex", ariaLabel: "Cortex showcase", description: "Advanced analytics platform", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
            { label: "Metomic Showcase", href: "/showcases/metomic", ariaLabel: "Metomic showcase", description: "Data privacy management", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" },
            { label: "Vareto Showcase", href: "/showcases/vareto", ariaLabel: "Vareto showcase", description: "Financial planning platform", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" },
            { label: "All Showcases", href: "/showcases", ariaLabel: "All showcases", description: "View all our work", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" },
            { label: "Case Studies Demo", href: "/case-studies-demo", ariaLabel: "Case studies demo", description: "Interactive case studies", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" },
        ],
    },
    {
        label: "Solutions",
        bgColor: "#0f3460",
        textColor: "#ffffff",
        links: [
            { label: "Web Development", href: "/services/web-development", ariaLabel: "Web development solutions", description: "Custom web applications", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" },
            { label: "Mobile Apps", href: "/services/mobile-apps", ariaLabel: "Mobile app solutions", description: "iOS and Android apps", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop" },
            { label: "AI Automation", href: "/services/ai-automation", ariaLabel: "AI automation solutions", description: "Intelligent automation", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
            { label: "Cloud Services", href: "/services/cloud-devops", ariaLabel: "Cloud solutions", description: "Scalable cloud infrastructure", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
            { label: "All Services", href: "/services", ariaLabel: "All services", description: "Complete service portfolio", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop" },
        ],
    },
    {
        label: "Other",
        bgColor: "#1F2937",
        textColor: "#ffffff",
        links: [
            { label: "About Us", href: "/about", ariaLabel: "About us", description: "Our team and mission", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
            { label: "Portfolio", href: "/portfolio", ariaLabel: "Portfolio", description: "View our work", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop" },
            { label: "Contact", href: "/contact", ariaLabel: "Contact us", description: "Get in touch with us", image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop" },
            { label: "Gallery Demo", href: "/gallery-demo", ariaLabel: "Gallery demo", description: "Interactive gallery showcase", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop" },
            { label: "Magic Demo", href: "/magic-demo", ariaLabel: "Magic demo", description: "Interactive magic effects", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
            { label: "Navigation Demo", href: "/navigation-demo", ariaLabel: "Navigation demo", description: "Navigation showcase", image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop" },
        ],
    },
];

interface ModernNavbarProps {
    theme?: "purple-mystic" | "teal-tech" | "electric-blue" | "cyber-purple" | "default";
    className?: string;
}

export function ModernNavbar({ theme = "default", className }: ModernNavbarProps) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll detection for hero section
    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight; // 100vh
            setIsScrolledPastHero(window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
        if (contentEl) {
            const wasVisible = contentEl.style.visibility;
            const wasPointerEvents = contentEl.style.pointerEvents;
            const wasPosition = contentEl.style.position;
            const wasHeight = contentEl.style.height;

            contentEl.style.visibility = 'visible';
            contentEl.style.pointerEvents = 'auto';
            contentEl.style.position = 'static';
            contentEl.style.height = 'auto';

            contentEl.offsetHeight;

            const topBar = 60;
            const padding = 16;
            const contentHeight = contentEl.scrollHeight;

            contentEl.style.visibility = wasVisible;
            contentEl.style.pointerEvents = wasPointerEvents;
            contentEl.style.position = wasPosition;
            contentEl.style.height = wasHeight;

            return topBar + contentHeight + padding;
        }
        return 260;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease: 'power3.out'
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.08 }, '-=0.1');

        return tl;
    };

    useLayoutEffect(() => {
        if (!isMobile) return;

        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [isMobile, navigationItems]);

    useLayoutEffect(() => {
        if (!isMobile) return;

        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, isMobile]);

    const toggleMenu = () => {
        if (!isMobile) return;

        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) cardsRef.current[i] = el;
    };

    const handleDropdownToggle = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const openNav = (label: string) => {
        setActiveDropdown(label);
        setIsOverlayOpen(true);
    };

    const closeNav = () => {
        setIsOverlayOpen(false);
        setActiveDropdown(null);
    };

    // Desktop Navigation
    if (!isMobile) {
        return (
            <>
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={cn(
                        "fixed top-0 left-0 right-0 z-50 bg-gray-800 transition-all duration-300",
                        isScrolledPastHero ? 'translate-y-0 sticky' :
                            isHovered ? 'translate-y-0' : '-translate-y-full',
                        className
                    )}
                    role="navigation"
                    aria-label="Main navigation"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative w-full">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between h-16 px-6">
                                {/* Logo */}
                                <Link
                                    href="/"
                                    className="flex items-center group"
                                    aria-label="Link Innovations Home"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="relative"
                                    >
                                        <span className="text-xl font-bold text-white tracking-tight">
                                            Link Innovations
                                        </span>
                                    </motion.div>
                                </Link>

                                {/* Desktop Navigation */}
                                <div className="flex items-center space-x-8">
                                    {navigationItems.map((item) => (
                                        <button
                                            key={item.label}
                                            className={cn(
                                                "text-sm font-medium text-white transition-colors duration-200",
                                                "hover:text-purple-300"
                                            )}
                                            onClick={() => openNav(item.label)}
                                            aria-expanded={activeDropdown === item.label}
                                            aria-haspopup="true"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href="/login"
                                        className="text-sm font-medium text-white transition-colors duration-200 hover:text-purple-300"
                                    >
                                        Login
                                    </Link>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <button
                                            className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-200"
                                        >
                                            Get Started
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.nav>

                {/* Full Screen Overlay Navigation - Outside navbar */}
                <div
                    id="myNav"
                    className={`overlay ${isOverlayOpen ? 'open' : ''}`}
                    style={{ width: isOverlayOpen ? '100%' : '0%' }}
                >
                    {/* Galaxy Background */}
                    {isOverlayOpen && (
                        <div className="galaxy-background">
                            <Galaxy
                                focal={[0.5, 0.5]}
                                rotation={[1.0, 0.0]}
                                starSpeed={0.8}
                                density={1.2}
                                hueShift={200}
                                disableAnimation={false}
                                speed={1.5}
                                mouseInteraction={true}
                                glowIntensity={0.6}
                                saturation={0.3}
                                mouseRepulsion={true}
                                twinkleIntensity={0.8}
                                rotationSpeed={0.3}
                                repulsionStrength={0.5}
                                autoCenterRepulsion={0.2}
                                transparent={false}
                            />
                        </div>
                    )}

                    {/* Close button */}
                    <a
                        href="javascript:void(0)"
                        className="closebtn"
                        onClick={closeNav}
                    >
                        &times;
                    </a>

                    {/* Overlay content */}
                    <div className="overlay-content">
                        {activeDropdown && (
                            <div className="bento-grid-container">
                                <h2 className="text-4xl font-bold text-white mb-8 text-center">
                                    {activeDropdown}
                                </h2>
                                <div className="bento-grid">
                                    {navigationItems
                                        .find(item => item.label === activeDropdown)
                                        ?.links.map((link, index) => {
                                            // Create different sized cards for true bento grid
                                            const isLarge = index === 0 || index === 3;
                                            const isWide = index === 1 || index === 4;
                                            const isTall = index === 2 || index === 5;

                                            return (
                                                <Link
                                                    key={index}
                                                    href={link.href}
                                                    className={cn(
                                                        "bento-card group",
                                                        isLarge ? "bento-large" : "",
                                                        isWide ? "bento-wide" : "",
                                                        isTall ? "bento-tall" : ""
                                                    )}
                                                    onClick={closeNav}
                                                >
                                                    <img
                                                        src={link.image}
                                                        alt={link.label}
                                                        className="bento-card-image"
                                                    />
                                                    <div className="bento-card-content">
                                                        <h3 className="bento-title">
                                                            {link.label}
                                                        </h3>
                                                        <p className="bento-description">
                                                            {link.description}
                                                        </p>
                                                        <div className="bento-arrow">
                                                            <GoArrowUpRight className="w-6 h-6" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }

    // Mobile Navigation (CardNav style)
    return (
        <div className={`card-nav-container ${className}`}>
            <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: '#1a1a1a' }}>
                <div className="card-nav-top">
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                        style={{ color: '#ffffff' }}
                    >
                        <div className="hamburger-line" />
                        <div className="hamburger-line" />
                    </div>

                    <div className="logo-container">
                        <span className="text-xl font-bold text-white">Link Innovations</span>
                    </div>

                    <button
                        type="button"
                        className="card-nav-cta-button"
                        style={{ backgroundColor: '#ff6b35', color: '#ffffff' }}
                    >
                        Get Started
                    </button>
                </div>

                <div className="card-nav-content" aria-hidden={!isExpanded}>
                    {navigationItems.slice(0, 3).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label">{item.label}</div>
                            <div className="nav-card-links">
                                {item.links?.map((lnk, i) => (
                                    <a key={`${lnk.label}-${i}`} className="nav-card-link" href={lnk.href} aria-label={lnk.ariaLabel}>
                                        <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                        {lnk.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
}
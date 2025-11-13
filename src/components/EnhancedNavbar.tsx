"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Swiss Design Typography Scale
const typography = {
    navItem: "text-sm font-medium tracking-wide uppercase",
    navItemMobile: "text-base font-medium tracking-wide uppercase",
    logo: "text-lg font-bold tracking-tight",
    submenu: "text-xs font-medium tracking-wider uppercase",
    description: "text-sm font-normal tracking-normal",
};

// Swiss Design Spacing Scale (8px base)
const spacing = {
    navPadding: "px-6 py-4",
    navItemGap: "gap-8",
    mobilePadding: "px-4 py-6",
    submenuGap: "gap-4",
    sectionGap: "gap-8",
};

// Swiss Design Color Palette
const colors = {
    primary: "text-slate-900",
    secondary: "text-slate-600",
    accent: "text-slate-400",
    background: "bg-white",
    border: "border-slate-200",
    hover: "hover:text-slate-900",
    active: "text-slate-900",
};

const useRelume = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useMediaQuery("(max-width: 991px)");

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const openOnMobileDropdownMenu = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const openOnDesktopDropdownMenu = () => {
        !isMobile && setIsDropdownOpen(true);
    };
    const closeOnDesktopDropdownMenu = () => {
        !isMobile && setIsDropdownOpen(false);
    };
    const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
    const animateMobileMenuButtonSpan = isMobileMenuOpen
        ? ["open", "rotatePhase"]
        : "closed";
    const animateDropdownMenu = isDropdownOpen ? "open" : "close";
    const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
    return {
        toggleMobileMenu,
        openOnDesktopDropdownMenu,
        closeOnDesktopDropdownMenu,
        openOnMobileDropdownMenu,
        animateMobileMenu,
        animateMobileMenuButtonSpan,
        animateDropdownMenu,
        animateDropdownMenuIcon,
        isMobileMenuOpen,
        isScrolled,
    };
};

export function EnhancedNavbar() {
    const useActive = useRelume();
    return (
        <motion.section
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                useActive.isScrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
                    : "bg-white/90 backdrop-blur-sm"
            )}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16 px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 group"
                        aria-label="Link Innovations Home"
                    >
                        <div className="relative">
                            <img
                                src="/images/lumin-innovations-horizontal.png"
                                alt="Link Innovations"
                                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/portfolio"
                            className={cn(
                                typography.navItem,
                                colors.primary,
                                "transition-colors duration-200",
                                colors.hover
                            )}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/about"
                            className={cn(
                                typography.navItem,
                                colors.primary,
                                "transition-colors duration-200",
                                colors.hover
                            )}
                        >
                            About
                        </Link>
                        <div
                            onMouseEnter={useActive.openOnDesktopDropdownMenu}
                            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
                        >
                            <button
                                className={cn(
                                    typography.navItem,
                                    colors.primary,
                                    "flex items-center space-x-1 transition-colors duration-200",
                                    useActive.animateDropdownMenu === "open" ? colors.active : colors.hover
                                )}
                                onClick={useActive.openOnMobileDropdownMenu}
                                aria-expanded={useActive.animateDropdownMenu === "open"}
                                aria-haspopup="true"
                            >
                                <span>Services</span>
                                <motion.span
                                    variants={{
                                        rotated: { rotate: 180 },
                                        initial: { rotate: 0 },
                                    }}
                                    animate={useActive.animateDropdownMenuIcon}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.span>
                            </button>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors duration-200"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                        onClick={useActive.toggleMobileMenu}
                        aria-label={useActive.isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={useActive.isMobileMenuOpen}
                    >
                        {useActive.isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                    {useActive.animateDropdownMenu === "open" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden"
                            onMouseEnter={useActive.openOnDesktopDropdownMenu}
                            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
                        >
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Services Grid */}
                                    <div className="space-y-3">
                                        <h4 className={cn(typography.submenu, colors.primary, "mb-4")}>
                                            Services
                                        </h4>
                                        <Link
                                            href="/services/web-development"
                                            className="group p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <span className="text-lg">🌐</span>
                                                <div className="flex-1 min-w-0">
                                                    <div className={cn(typography.submenu, colors.primary)}>
                                                        Web Development
                                                    </div>
                                                    <div className={cn(typography.description, colors.secondary, "mt-1")}>
                                                        Custom web applications
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            href="/services/mobile-app-development"
                                            className="group p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <span className="text-lg">📱</span>
                                                <div className="flex-1 min-w-0">
                                                    <div className={cn(typography.submenu, colors.primary)}>
                                                        Mobile Apps
                                                    </div>
                                                    <div className={cn(typography.description, colors.secondary, "mt-1")}>
                                                        Native & cross-platform
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            href="/services/ai-automation"
                                            className="group p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <span className="text-lg">🤖</span>
                                                <div className="flex-1 min-w-0">
                                                    <div className={cn(typography.submenu, colors.primary)}>
                                                        AI Solutions
                                                    </div>
                                                    <div className={cn(typography.description, colors.secondary, "mt-1")}>
                                                        Intelligent automation
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Resources Grid */}
                                    <div className="space-y-3">
                                        <h4 className={cn(typography.submenu, colors.primary, "mb-4")}>
                                            Resources
                                        </h4>
                                        <Link
                                            href="/services/cloud-devops"
                                            className="group p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <span className="text-lg">☁️</span>
                                                <div className="flex-1 min-w-0">
                                                    <div className={cn(typography.submenu, colors.primary)}>
                                                        Cloud Services
                                                    </div>
                                                    <div className={cn(typography.description, colors.secondary, "mt-1")}>
                                                        Scalable infrastructure
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            href="/services/data-analytics"
                                            className="group p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <span className="text-lg">📊</span>
                                                <div className="flex-1 min-w-0">
                                                    <div className={cn(typography.submenu, colors.primary)}>
                                                        Data Analytics
                                                    </div>
                                                    <div className={cn(typography.description, colors.secondary, "mt-1")}>
                                                        Business intelligence
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            href="/services/cybersecurity"
                                            className="group p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <span className="text-lg">🔒</span>
                                                <div className="flex-1 min-w-0">
                                                    <div className={cn(typography.submenu, colors.primary)}>
                                                        Cybersecurity
                                                    </div>
                                                    <div className={cn(typography.description, colors.secondary, "mt-1")}>
                                                        Digital protection
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {useActive.isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden border-t border-slate-200 bg-white"
                        >
                            <div className="px-4 py-6 space-y-4">
                                <Link
                                    href="/portfolio"
                                    className={cn(
                                        typography.navItemMobile,
                                        colors.primary,
                                        "block py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                    )}
                                    onClick={() => useActive.toggleMobileMenu()}
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="/about"
                                    className={cn(
                                        typography.navItemMobile,
                                        colors.primary,
                                        "block py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                    )}
                                    onClick={() => useActive.toggleMobileMenu()}
                                >
                                    About
                                </Link>

                                {/* Mobile Services Dropdown */}
                                <div>
                                    <button
                                        className={cn(
                                            typography.navItemMobile,
                                            colors.primary,
                                            "flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                        )}
                                        onClick={useActive.openOnMobileDropdownMenu}
                                        aria-expanded={useActive.animateDropdownMenu === "open"}
                                    >
                                        <span>Services</span>
                                        <motion.span
                                            variants={{
                                                rotated: { rotate: 180 },
                                                initial: { rotate: 0 },
                                            }}
                                            animate={useActive.animateDropdownMenuIcon}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.span>
                                    </button>

                                    <AnimatePresence>
                                        {useActive.animateDropdownMenu === "open" && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="ml-4 mt-2 space-y-2"
                                            >
                                                <Link
                                                    href="/services/web-development"
                                                    className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                    onClick={() => {
                                                        useActive.toggleMobileMenu();
                                                        useActive.closeOnDesktopDropdownMenu();
                                                    }}
                                                >
                                                    <span className="text-lg">🌐</span>
                                                    <div>
                                                        <div className={cn(typography.submenu, colors.primary)}>
                                                            Web Development
                                                        </div>
                                                        <div className={cn(typography.description, colors.secondary)}>
                                                            Custom web applications
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/mobile-app-development"
                                                    className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                    onClick={() => {
                                                        useActive.toggleMobileMenu();
                                                        useActive.closeOnDesktopDropdownMenu();
                                                    }}
                                                >
                                                    <span className="text-lg">📱</span>
                                                    <div>
                                                        <div className={cn(typography.submenu, colors.primary)}>
                                                            Mobile Apps
                                                        </div>
                                                        <div className={cn(typography.description, colors.secondary)}>
                                                            Native & cross-platform
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/ai-automation"
                                                    className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                    onClick={() => {
                                                        useActive.toggleMobileMenu();
                                                        useActive.closeOnDesktopDropdownMenu();
                                                    }}
                                                >
                                                    <span className="text-lg">🤖</span>
                                                    <div>
                                                        <div className={cn(typography.submenu, colors.primary)}>
                                                            AI Solutions
                                                        </div>
                                                        <div className={cn(typography.description, colors.secondary)}>
                                                            Intelligent automation
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/cloud-devops"
                                                    className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                    onClick={() => {
                                                        useActive.toggleMobileMenu();
                                                        useActive.closeOnDesktopDropdownMenu();
                                                    }}
                                                >
                                                    <span className="text-lg">☁️</span>
                                                    <div>
                                                        <div className={cn(typography.submenu, colors.primary)}>
                                                            Cloud Services
                                                        </div>
                                                        <div className={cn(typography.description, colors.secondary)}>
                                                            Scalable infrastructure
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/data-analytics"
                                                    className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                    onClick={() => {
                                                        useActive.toggleMobileMenu();
                                                        useActive.closeOnDesktopDropdownMenu();
                                                    }}
                                                >
                                                    <span className="text-lg">📊</span>
                                                    <div>
                                                        <div className={cn(typography.submenu, colors.primary)}>
                                                            Data Analytics
                                                        </div>
                                                        <div className={cn(typography.description, colors.secondary)}>
                                                            Business intelligence
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href="/services/cybersecurity"
                                                    className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                    onClick={() => {
                                                        useActive.toggleMobileMenu();
                                                        useActive.closeOnDesktopDropdownMenu();
                                                    }}
                                                >
                                                    <span className="text-lg">🔒</span>
                                                    <div>
                                                        <div className={cn(typography.submenu, colors.primary)}>
                                                            Cybersecurity
                                                        </div>
                                                        <div className={cn(typography.description, colors.secondary)}>
                                                            Digital protection
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Mobile CTA */}
                                <div className="pt-4 border-t border-slate-200">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
}

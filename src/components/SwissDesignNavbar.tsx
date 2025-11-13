"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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

// Navigation items with Swiss design structure
const navigationItems = [
    {
        label: "Services",
        href: "#",
        hasDropdown: true,
        submenu: [
            {
                label: "Web Development",
                href: "/services/web-development",
                description: "Custom web applications",
                icon: "🌐",
            },
            {
                label: "Mobile Apps",
                href: "/services/mobile-apps",
                description: "Native & cross-platform",
                icon: "📱",
            },
            {
                label: "AI Solutions",
                href: "/services/ai-automation",
                description: "Intelligent automation",
                icon: "🤖",
            },
            {
                label: "Cloud Services",
                href: "/services/cloud-devops",
                description: "Scalable infrastructure",
                icon: "☁️",
            },
            {
                label: "Data Analytics",
                href: "/services/data-analytics",
                description: "Business intelligence",
                icon: "📊",
            },
            {
                label: "Cybersecurity",
                href: "/services/cybersecurity",
                description: "Digital protection",
                icon: "🔒",
            },
        ],
    },
    {
        label: "Portfolio",
        href: "/portfolio",
        hasDropdown: false,
    },
    {
        label: "About",
        href: "/about",
        hasDropdown: false,
    },
    {
        label: "Contact",
        href: "/contact",
        hasDropdown: false,
    },
];

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

export function SwissDesignNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownToggle = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
                    : "bg-white/90 backdrop-blur-sm"
            )}
            role="navigation"
            aria-label="Main navigation"
        >
            {/* Main Navigation Container */}
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
                        {navigationItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                            >
                                {item.hasDropdown ? (
                                    <button
                                        className={cn(
                                            typography.navItem,
                                            colors.primary,
                                            "flex items-center space-x-1 transition-colors duration-200",
                                            activeDropdown === item.label ? colors.active : colors.hover
                                        )}
                                        onClick={() => handleDropdownToggle(item.label)}
                                        aria-expanded={activeDropdown === item.label}
                                        aria-haspopup="true"
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown
                                            className={cn(
                                                "w-4 h-4 transition-transform duration-200",
                                                activeDropdown === item.label && "rotate-180"
                                            )}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            typography.navItem,
                                            colors.primary,
                                            "transition-colors duration-200",
                                            colors.hover
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* Desktop Dropdown */}
                                {item.hasDropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden"
                                                onMouseEnter={() => setActiveDropdown(item.label)}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                <div className="p-6">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {item.submenu?.map((subItem, index) => (
                                                            <Link
                                                                key={subItem.label}
                                                                href={subItem.href}
                                                                className="group p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                            >
                                                                <div className="flex items-start space-x-3">
                                                                    <span className="text-lg">{subItem.icon}</span>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className={cn(typography.submenu, colors.primary)}>
                                                                            {subItem.label}
                                                                        </div>
                                                                        <div className={cn(typography.description, colors.secondary, "mt-1")}>
                                                                            {subItem.description}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
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
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden border-t border-slate-200 bg-white"
                        >
                            <div className="px-4 py-6 space-y-4">
                                {navigationItems.map((item) => (
                                    <div key={item.label}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    className={cn(
                                                        typography.navItemMobile,
                                                        colors.primary,
                                                        "flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                    )}
                                                    onClick={() => handleDropdownToggle(item.label)}
                                                    aria-expanded={activeDropdown === item.label}
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        className={cn(
                                                            "w-5 h-5 transition-transform duration-200",
                                                            activeDropdown === item.label && "rotate-180"
                                                        )}
                                                    />
                                                </button>

                                                <AnimatePresence>
                                                    {activeDropdown === item.label && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="ml-4 mt-2 space-y-2"
                                                        >
                                                            {item.submenu?.map((subItem) => (
                                                                <Link
                                                                    key={subItem.label}
                                                                    href={subItem.href}
                                                                    className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                                    onClick={() => {
                                                                        setIsMobileMenuOpen(false);
                                                                        setActiveDropdown(null);
                                                                    }}
                                                                >
                                                                    <span className="text-lg">{subItem.icon}</span>
                                                                    <div>
                                                                        <div className={cn(typography.submenu, colors.primary)}>
                                                                            {subItem.label}
                                                                        </div>
                                                                        <div className={cn(typography.description, colors.secondary)}>
                                                                            {subItem.description}
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    typography.navItemMobile,
                                                    colors.primary,
                                                    "block py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                                                )}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}

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
        </motion.nav>
    );
}



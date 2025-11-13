"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Navigation items with images and descriptions
const navigationItems = [
    {
        title: "Services",
        items: [
            {
                title: "Web App Development",
                href: "/services/web-app-development",
                description: "Custom web applications and websites",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
            },
            {
                title: "Mobile Apps",
                href: "/services/mobile-apps",
                description: "iOS and Android applications",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
            },
            {
                title: "AI & Automation",
                href: "/services/ai-automation",
                description: "Machine learning and automation solutions",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
            },
            {
                title: "Cloud Services",
                href: "/services/cloud-devops",
                description: "Scalable cloud infrastructure",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
            },
            {
                title: "Data Analytics",
                href: "/services/data-analytics",
                description: "Business intelligence solutions",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
            },
            {
                title: "Cybersecurity",
                href: "/services/cybersecurity",
                description: "Digital security and protection",
                image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                title: "About Us",
                href: "/about",
                description: "Our team and mission",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
            },
            {
                title: "Portfolio",
                href: "/portfolio",
                description: "View our work",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop"
            },
            {
                title: "Case Studies",
                href: "/case-studies-demo",
                description: "Success stories and insights",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
            },
            {
                title: "Contact",
                href: "/contact",
                description: "Get in touch with us",
                image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop"
            }
        ]
    }
];

interface PremiumMegamenuProps {
    theme?: "purple-mystic" | "teal-tech" | "electric-blue" | "cyber-purple" | "default";
    className?: string;
}

export function PremiumMegamenu({ theme = "default", className }: PremiumMegamenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Fix hydration mismatch by only setting state after mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseEnter = (title: string) => {
        if (isMounted) {
            setActiveDropdown(title);
        }
    };

    const handleMouseLeave = () => {
        if (isMounted) {
            setActiveDropdown(null);
        }
    };

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50",
            className
        )}>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16 px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
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
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                                    {item.title}
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === item.title && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-[600px] bg-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl"
                                        >
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {item.items.map((subItem, index) => (
                                                    <motion.div
                                                        key={subItem.href}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        <Link
                                                            href={subItem.href}
                                                            className="group block relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                                                        >
                                                            <div className="relative h-32">
                                                                <img
                                                                    src={subItem.image}
                                                                    alt={subItem.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                                                {/* Simple Glow Effect */}
                                                                <div className="absolute -inset-[10%] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-r from-purple-500 to-blue-500" />
                                                            </div>

                                                            <div className="p-4">
                                                                <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-200">
                                                                    {subItem.title}
                                                                </h3>
                                                                <p className="text-gray-300 text-sm mt-1">
                                                                    {subItem.description}
                                                                </p>
                                                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-300 transition-colors duration-200 mt-2" />
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* Direct Links */}
                        <Link href="/showcases" className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                            Showcases
                        </Link>
                    </nav>

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
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                                Get Started
                            </Button>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-white hover:text-purple-300"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50"
                    >
                        <div className="px-6 py-4 space-y-6">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-200"
                                            >
                                                <img
                                                    src={subItem.image}
                                                    alt={subItem.title}
                                                    className="w-12 h-12 rounded-lg object-cover"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="text-white font-medium">{subItem.title}</h4>
                                                    <p className="text-gray-300 text-sm">{subItem.description}</p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-gray-400" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-4 border-t border-gray-700/50">
                                <Link
                                    href="/showcases"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-200"
                                >
                                    <span className="text-white font-medium">Showcases</span>
                                    <ArrowRight className="w-4 h-4 text-gray-400" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
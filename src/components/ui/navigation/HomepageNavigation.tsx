"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface NavigationItem {
    id: string;
    label: string;
    href: string;
}

const navigationItems: NavigationItem[] = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'showcase', label: 'Showcase', href: '#showcase' },
    { id: 'brand-story', label: 'Story', href: '#brand-story' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'values', label: 'Values', href: '#values' },
    { id: 'contact', label: 'Contact', href: '#contact' },
];

const HomepageNavigation: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollProgress = useScrollProgress();

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);

            // Update active section based on scroll position
            const sections = navigationItems.map(item => item.id);
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Fixed Navigation */}
            <AnimatePresence>
                {isVisible && (
                    <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
                    >
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="flex items-center justify-between h-16">
                                {/* Logo */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-white font-bold text-xl"
                                >
                                    Link Innovation
                                </motion.div>

                                {/* Navigation Items */}
                                <div className="hidden md:flex items-center space-x-8">
                                    {navigationItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + index * 0.05 }}
                                            onClick={() => scrollToSection(item.href)}
                                            className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                                                    ? 'text-blue-400'
                                                    : 'text-gray-300 hover:text-white'
                                                }`}
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
                style={{ scaleX: scrollProgress }}
            />

            {/* Section Indicators (Desktop) */}
            <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
                <div className="flex flex-col space-y-4">
                    {navigationItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            onClick={() => scrollToSection(item.href)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === item.id
                                    ? 'bg-blue-400 scale-125'
                                    : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                            title={item.label}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="fixed top-4 right-4 z-50 md:hidden bg-black/80 backdrop-blur-lg p-3 rounded-full border border-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-white"></div>
                    <div className="w-full h-0.5 bg-white"></div>
                    <div className="w-full h-0.5 bg-white"></div>
                </div>
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 left-4 right-4 z-40 md:hidden bg-black/90 backdrop-blur-lg rounded-lg border border-white/10 p-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.href);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`text-left py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === item.id
                                            ? 'bg-blue-500/20 text-blue-400'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 mt-4">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HomepageNavigation;

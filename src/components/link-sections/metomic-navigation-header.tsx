"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, ArrowRight, Sparkles, Zap, Shield, Brain, Cloud, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavGridCard,
    NavSmallItem,
    NavLargeItem,
    NavItemMobile,
    type NavItemType,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const navItems: NavItemType[] = [
    { title: "Services", href: "#" },
    { title: "Industries", href: "#" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

const platformSolutions = [
    {
        title: "Web Development",
        href: "/services/web-development",
        description: "Modern, responsive websites that drive engagement",
        icon: Sparkles,
        gradient: "from-accent-cyan to-accent-indigo",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop"
    },
    {
        title: "Mobile Apps",
        href: "/services/mobile-apps",
        description: "Native & cross-platform mobile experiences",
        icon: Zap,
        gradient: "from-accent-indigo to-accent-purple",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
        title: "AI Solutions",
        href: "/services/ai-automation",
        description: "Intelligent automation & predictive analytics",
        icon: Brain,
        gradient: "from-accent-emerald to-accent-cyan",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
        title: "Cloud Solutions",
        href: "/services/cloud-devops",
        description: "Scalable infrastructure & DevOps excellence",
        icon: Cloud,
        gradient: "from-accent-cyan to-accent-indigo",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    },
    {
        title: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Enterprise-grade security & compliance",
        icon: Shield,
        gradient: "from-accent-emerald to-accent-cyan",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
    },
    {
        title: "Data Analytics",
        href: "/services/data-analytics",
        description: "Transform data into actionable insights",
        icon: BarChart3,
        gradient: "from-accent-indigo to-accent-emerald",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
];

const platformIntegrations = [];

const caseStudies = [
    {
        title: "TechCorp Solutions",
        category: "SaaS Platform",
        description: "300% increase in user engagement",
        href: "/case-studies/techcorp",
        logo: "TECHCORP",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        stats: "+300%"
    },
    {
        title: "HealthFlow Systems",
        category: "Healthcare",
        description: "Streamlined patient management",
        href: "/case-studies/healthflow",
        logo: "HEALTHFLOW",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
        stats: "50K+ patients"
    },
    {
        title: "FinanceMax",
        category: "Fintech",
        description: "Enterprise-grade security",
        href: "/case-studies/financemax",
        logo: "FINANCEMAX",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        stats: "99.9% uptime"
    },
    {
        title: "EduTech Platform",
        category: "Education",
        description: "AI-powered learning platform",
        href: "/case-studies/edutech",
        logo: "EDUTECH",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
        stats: "1M+ students"
    }
];

export default function LinkMetomicNavigationHeader() {
    const { scrollY } = useScroll();
    const headerBg = useTransform(scrollY, [0, 100], [0, 0.95]);
    const headerBlur = useTransform(scrollY, [0, 100], [0, 24]);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 glass-magic"
            style={{
                backgroundColor: `rgba(0, 0, 0, ${0.4})`,
                backdropFilter: `blur(${20}px) saturate(180%)`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-20 relative">
                <Link href="/" aria-label="home" className="flex items-center gap-3 group">
                    <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <span className="text-white text-lg font-bold">L</span>
                    </motion.div>
                    <span className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Link Innovations
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex flex-1 justify-center">
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger className="bg-transparent text-white/90 text-base font-medium hover:text-white hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white group border-none px-3 py-2 h-auto rounded-lg transition-all">
                                        <span className="flex items-center gap-1">
                                            {item.title}
                                            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                        </span>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {item.title === "Services" ? (
                                            <motion.div
                                                className="p-8 bg-black/95 backdrop-blur-2xl border border-white/10 w-[70rem] rounded-2xl shadow-2xl overflow-hidden"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                                                <div className="relative">
                                                    <div className="mb-8">
                                                        <h3 className="text-2xl font-bold text-white mb-2">Our Services</h3>
                                                        <p className="text-white">Transform your business with cutting-edge technology</p>
                                                    </div>
                                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                                        {platformSolutions.map((sol, index) => {
                                                            const Icon = sol.icon;
                                                            return (
                                                                <NavigationMenuLink key={sol.title} asChild>
                                                                    <Link href={sol.href}>
                                                                        <motion.div
                                                                            className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                                                                            whileHover={{ scale: 1.02, y: -4 }}
                                                                            initial={{ opacity: 0, y: 20 }}
                                                                            animate={{ opacity: 1, y: 0 }}
                                                                            transition={{ delay: index * 0.05 }}
                                                                        >
                                                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover opacity-20" />
                                                                            </div>
                                                                            <div className="relative p-5">
                                                                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sol.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                                                                                    <Icon className="w-6 h-6 text-white" />
                                                                                </div>
                                                                                <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">{sol.title}</h4>
                                                                                <p className="text-white text-sm leading-relaxed">{sol.description}</p>
                                                                                <div className="flex items-center gap-2 mt-4 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                                                                    Learn more
                                                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                                                </div>
                                                                            </div>
                                                                        </motion.div>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            );
                                                        })}
                                                    </div>
                                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                                        <p className="text-white text-sm">Need a custom solution?</p>
                                                        <Link href="/contact" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                                                            Contact Us
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ) : item.title === "Industries" ? (
                                            <motion.div
                                                className="p-8 bg-black/95 backdrop-blur-2xl border border-white/10 w-[60rem] rounded-2xl shadow-2xl overflow-hidden"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10"></div>
                                                <div className="relative">
                                                    <div className="mb-6">
                                                        <h3 className="text-2xl font-bold text-white mb-2">Industries We Serve</h3>
                                                        <p className="text-white">Specialized solutions for every sector</p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                                        {platformIntegrations.map((industry, index) => (
                                                            <NavigationMenuLink key={industry.title} asChild>
                                                                <Link href={industry.href}>
                                                                    <motion.div
                                                                        className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-32"
                                                                        whileHover={{ scale: 1.02 }}
                                                                        initial={{ opacity: 0, x: -20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: index * 0.05 }}
                                                                    >
                                                                        <div className="absolute inset-0">
                                                                            <img src={industry.image} alt={industry.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500" />
                                                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                                                        </div>
                                                                        <div className="relative p-5 h-full flex flex-col justify-end">
                                                                            <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{industry.title}</h4>
                                                                            <p className="text-white text-sm">{industry.description}</p>
                                                                        </div>
                                                                    </motion.div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-3 pt-6 border-t border-white/10">
                                                        {caseStudies.map((study, index) => (
                                                            <NavigationMenuLink key={index} asChild>
                                                                <Link href={study.href}>
                                                                    <motion.div
                                                                        className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                                                                        whileHover={{ y: -4 }}
                                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                                        animate={{ opacity: 1, scale: 1 }}
                                                                        transition={{ delay: index * 0.05 + 0.2 }}
                                                                    >
                                                                        <div className="absolute inset-0">
                                                                            <img src={study.image} alt={study.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
                                                                        </div>
                                                                        <div className="relative p-4 bg-gradient-to-t from-black/90 to-transparent">
                                                                            <div className="text-blue-400 text-xs font-bold mb-1">{study.stats}</div>
                                                                            <div className="text-white text-sm font-semibold mb-1 line-clamp-1">{study.title}</div>
                                                                            <div className="text-white text-xs line-clamp-2">{study.description}</div>
                                                                        </div>
                                                                    </motion.div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                className="p-6 bg-black/95 backdrop-blur-2xl border border-white/10 w-64 rounded-2xl shadow-2xl"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                                                <div className="relative">
                                                    <p className="text-white/80 text-sm mb-4">
                                                        {item.title} links coming soon
                                                    </p>
                                                    <Link
                                                        href={item.href}
                                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                                                    >
                                                        View all
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/login"
                        className="text-white/80 hover:text-white font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                        Login
                    </Link>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/10 border-none"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="bg-black/95 backdrop-blur-2xl border-l border-white/10 text-white w-full max-w-sm p-0"
                        >
                            <div className="p-6">
                                <SheetClose asChild>
                                    <Link href="/" aria-label="home" className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-white text-lg font-bold">L</span>
                                        </div>
                                        <span className="text-xl font-semibold text-white">
                                            Link Innovations
                                        </span>
                                    </Link>
                                </SheetClose>
                            </div>
                            <div className="h-px bg-white/10"></div>
                            <div className="p-6">
                                <Accordion type="single" collapsible className="w-full">
                                    {navItems.map((item) => (
                                        <AccordionItem
                                            key={item.title}
                                            value={item.title}
                                            className="border-b border-white/10"
                                        >
                                            <AccordionTrigger className="py-4 text-base font-medium hover:no-underline text-white hover:text-blue-400 transition-colors">
                                                {item.title}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="pl-4 space-y-3 py-2">
                                                    <p className="text-white">
                                                        Links for {item.title}
                                                    </p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                                <div className="mt-6 space-y-3">
                                    <SheetClose asChild>
                                        <Link
                                            href="/login"
                                            className="block w-full text-center py-3 text-white/80 hover:text-white font-medium transition-colors border border-white/10 rounded-lg hover:bg-white/5"
                                        >
                                            Login
                                        </Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link
                                            href="/contact"
                                            className="flex items-center justify-center gap-2 w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                                        >
                                            Get Started
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
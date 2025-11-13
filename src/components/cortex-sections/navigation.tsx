"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronsUpDown, X, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-[14px] py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
    >
        {children}
    </Link>
);

const NavButton = ({ children }: { children: React.ReactNode }) => (
    <button
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-[14px] py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
    >
        {children}
    </button>
);


const Navigation = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const headerMarginTopClass = isBannerVisible ? 'sm:mt-8' : 'mt-0';

    return (
        <>
            {isBannerVisible && (
                <div className="fixed left-0 top-0 z-[101] hidden w-full items-center justify-center bg-[#E9D5FF] sm:flex sm:min-h-8">
                    <div className="relative mx-auto flex w-full max-w-screen-2xl items-center justify-center px-6 py-1 text-center">
                        <p className="text-sm text-black">
                            🚀 Ready to transform your business?{" "}
                            <a
                                className="relative font-medium text-primary transition-all duration-300 bg-[linear-gradient(theme(colors.primary),theme(colors.primary))] bg-left-bottom bg-no-repeat bg-[length:0%_1px] hover:bg-[length:100%_1px]"
                                href="/contact"
                                rel="noopener noreferrer"
                            >
                                Get in touch
                            </a>{" "}
                            for a free consultation with our technology experts.
                        </p>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
                            aria-label="Close advertisement"
                            onClick={() => setIsBannerVisible(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}

            <header className={cn(
                "fixed z-[100] flex w-full items-center justify-center border-b border-white/10 bg-black/80 px-4 text-white shadow-md backdrop-blur-lg transition-[margin] duration-300",
                "h-20",
                headerMarginTopClass
            )}>
                <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                            Link Innovations
                        </span>
                    </Link>

                    <nav className="relative z-10 hidden flex-1 items-center justify-center lg:flex">
                        <ul className="group flex list-none items-center justify-center space-x-1">
                            <li><NavButton>Services <ChevronsUpDown className="relative top-[1px] ml-1 h-3 w-3" /></NavButton></li>
                            <li><NavButton>Industries <ChevronsUpDown className="relative top-[1px] ml-1 h-3 w-3" /></NavButton></li>
                            <li><NavLink href="/about">About Us</NavLink></li>
                            <li><NavLink href="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink href="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden items-center gap-2 sm:flex">
                            <Link
                                href="/services"
                                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-border bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/80"
                            >
                                Our Services
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Get Started
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="rounded-md p-2 text-white hover:bg-accent"
                                aria-label="Open main menu"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={cn("absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm lg:hidden",
                    isMobileMenuOpen ? "block" : "hidden"
                )}>
                    <div className="flex flex-col space-y-1 p-4">
                        <Link href="/services" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Services</Link>
                        <Link href="/industries" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Industries</Link>
                        <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</Link>
                        <Link href="/portfolio" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Portfolio</Link>
                        <Link href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</Link>
                        <div className="mt-4 flex flex-col space-y-3 border-t border-border pt-4">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-border bg-accent px-4 py-2 text-sm font-medium text-white"
                            >
                                Our Services
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navigation;
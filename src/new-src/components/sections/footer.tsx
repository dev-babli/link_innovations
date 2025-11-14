"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const Footer = () => {
    const socialLinks = [
        { href: "http://linkedin.com/company/link-innovations-official/?viewAsMember=true", label: "LinkedIn", Icon: Linkedin },
        { href: "https://x.com/LinkInnov_98", label: "X (Twitter)", Icon: Twitter },
        { href: "https://www.facebook.com/profile.php?id=61582798476647&notif_id=1761984753033602&notif_t=page_user_activity&ref=notif#", label: "Facebook", Icon: Facebook },
        { href: "https://www.instagram.com/linkinnovationss_official/", label: "Instagram", Icon: Instagram },
    ];

    const navigation = [
        {
            title: "Company",
            links: [
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/use-cases", label: "Use Cases" },
                { href: "/contact", label: "Contact" },
            ],
        },
        {
            title: "Expertise",
            links: [
                { href: "/services/web-development", label: "Web Development" },
                { href: "/services/ai-automation", label: "AI & Automation" },
                { href: "/services/cloud-devops", label: "Cloud & DevOps" },
                { href: "/services/cybersecurity", label: "Cybersecurity" },
            ],
        },
        {
            title: "Resources",
            links: [
                { href: "/blog", label: "Insights" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/pricing", label: "Pricing" },
                { href: "/careers", label: "Careers" },
            ],
        },
    ];

    return (
        <footer className="bg-background-primary text-text-primary">
            <div className="relative overflow-hidden border-t border-border-subtle/60">
                <div className="pointer-events-none absolute inset-0 opacity-70">
                    <div className="absolute -top-24 left-1/2 h-64 w-[480px] -translate-x-1/2 rounded-full bg-accent-yellow/10 blur-[160px]" />
                    <div className="absolute -bottom-32 right-10 h-48 w-48 rounded-full bg-accent-cyan/10 blur-[120px]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 lg:px-20 py-16 lg:py-20 space-y-12">
                    {/* Main grid */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-text-secondary">
                                    Link Innovations
                                </p>
                                <h3 className="mt-3 text-2xl font-medium">
                                    Custom software development studio
                                </h3>
                                <p className="mt-4 text-base text-text-secondary leading-relaxed">
                                    We engineer resilient cloud platforms, AI assistants, and enterprise-grade digital products for ambitious teams across the globe.
                                </p>
                            </div>
                            <div className="space-y-4 text-sm text-text-secondary">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-text-primary" />
                                    <a href="mailto:info@linkinnovations.ai" className="text-text-primary hover:text-accent-cyan">
                                        info@linkinnovations.ai
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-text-primary" />
                                    <a href="tel:+1234567890" className="text-text-primary hover:text-accent-cyan">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                                <p>123 Innovation Street, San Francisco, CA • Remote-first</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {navigation.map((section) => (
                                <div key={section.title} className="space-y-3">
                                    <p className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                                        {section.title}
                                    </p>
                                    <ul className="space-y-2">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <Link href={link.href} className="text-base text-text-primary/80 transition hover:text-text-primary">
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-6 border-t border-border-subtle/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-5">
                            {socialLinks.map(({ href, label, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-text-primary"
                                >
                                    <Icon className="h-5 w-5" />
                                    {label}
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
                            <p>© 2025 Link Innovations. All rights reserved.</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <Link href="/privacy" className="hover:text-text-primary">Privacy</Link>
                                <Link href="/terms" className="hover:text-text-primary">Terms</Link>
                                <Link href="/cookies" className="hover:text-text-primary">Cookies</Link>
                            </div>
                        </div>
                    </div>

                    {/* Wordmark */}
                    <div
                        className="relative"
                        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
                    >
                        <svg
                            viewBox="-20 0 1610 293"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                            className="block w-full text-text-primary/20"
                        >
                            <defs>
                                <linearGradient
                                    id="footer-wordmark"
                                    x1="785"
                                    y1="0"
                                    x2="785"
                                    y2="218.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="currentColor" stopOpacity="0.35" />
                                    <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
                                </linearGradient>
                            </defs>
                            <text
                                x="50%"
                                y="65%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fontSize="200"
                                fontWeight="700"
                                letterSpacing="4"
                                className="font-['Playfair_Display','Cormorant_Garamond','EB_Garamond','Libre_Baskerville','Merriweather',serif]"
                                fill="url(#footer-wordmark)"
                            >
                                Link Innovations
                            </text>
                        </svg>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
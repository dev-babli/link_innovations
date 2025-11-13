import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Shield } from "lucide-react";

type FooterLink = {
    name: string;
    href: string;
    badge?: string;
};

const footerLinks: Record<string, FooterLink[]> = {
    services: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "AI & Machine Learning", href: "/services/ai-automation" },
        { name: "Cloud Solutions", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Managed Services", href: "/services" },
    ],
    industries: [],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Case Studies", href: "/portfolio" },
        { name: "Careers", href: "/about", badge: "We're hiring" },
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/about" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Security", href: "/security" },
    ],
};

const navSections = [
    { title: "Services", links: footerLinks.services },
    { title: "Industries", links: footerLinks.industries },
    { title: "Company", links: footerLinks.company },
    { title: "Legal", links: footerLinks.legal },
];

export default function LinkFooter() {
    return (
        <footer className="bg-black">
            <div className="container py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-16">
                    <div className="flex flex-col gap-8 lg:w-1/4">
                        <Link href="/" aria-label="Home">
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                                Link Innovations
                            </span>
                        </Link>
                        <p className="text-sm text-text-secondary max-w-xs">
                            Building innovative digital solutions for modern businesses. Transforming ideas into reality through cutting-edge technology.
                        </p>
                        <div className="flex gap-6">
                            <a href="https://www.linkedin.com/company/link-innovations" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-tertiary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="https://twitter.com/link_innovations" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-text-tertiary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://facebook.com/link.innovations" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-text-tertiary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                        </div>
                        <div className="space-y-4 text-sm text-text-secondary">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-purple-400" />
                                <span>Certified Technology Partner</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-purple-400" />
                                <span>ISO 27001 Compliant</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-purple-400" />
                                <span>Enterprise-Grade Security</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 lg:mt-0 lg:w-3/4">
                        {navSections.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-sm font-semibold text-text-secondary tracking-wide">{section.title}</h3>
                                <ul className="mt-4 space-y-3">
                                    {section.links.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm text-text-tertiary hover:text-white transition-colors">
                                                {item.name}
                                                {item.badge && (
                                                    <span className="ml-2 inline-block rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-purple-300">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-16 border-t border-border-subtle pt-8 lg:mt-24">
                    <p className="text-sm text-text-tertiary">
                        © 2025 Link Innovations. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}


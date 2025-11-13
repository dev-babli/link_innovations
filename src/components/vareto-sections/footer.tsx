"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Client component for the newsletter form
const NewsletterForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd call an API here.
        console.log('Submitted email:', email);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <input
                type="email"
                name="email"
                placeholder="Subscribe to our monthly newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full flex-auto bg-white border border-input rounded-lg px-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                style={{ height: '48px' }}
            />
            <button
                type="submit"
                className="bg-primary text-primary-foreground font-medium rounded-lg px-10 py-3 text-base whitespace-nowrap hover:bg-primary/90 transition-colors"
                style={{ height: '48px' }}
            >
                Submit
            </button>
        </form>
    );
};

// Component for a single footer link column group
const FooterLinkGroup = ({ title, links }: { title: string; links: string[] }) => (
    <div className="mb-8 last:mb-0">
        <h3 className="text-sm font-semibold text-text-primary mb-4">{title}</h3>
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link}>
                    {link.includes('@') ? (
                        <a href={`mailto:${link}`} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                            {link}
                        </a>
                    ) : (
                        <Link href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                            {link}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

export default function Footer() {
    const linkColumns = [
        {
            groups: [
                { title: 'Services', links: ['Web Development', 'Mobile Apps', 'AI & Machine Learning', 'Cloud Solutions', 'Cybersecurity', 'Data Analytics', 'Managed Services'] },
            ]
        },
        {
            groups: [
                { title: 'Industries', links: ['Healthcare', 'Banking & Finance', 'Retail & E-commerce', 'Manufacturing', 'Education', 'Energy', 'Technology', 'Agriculture'] },
            ]
        },
        {
            groups: [
                { title: 'Company', links: ['About Us', 'Portfolio', 'Case Studies', 'Careers'] },
                { title: 'Resources', links: ['Blog', 'Documentation', 'Support'] },
            ]
        },
        {
            groups: [
                { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'] },
            ]
        },
        {
            groups: [
                { title: 'Connect', links: ['Contact Us', 'LinkedIn', 'contact@linkinnovations.ai'] }
            ]
        }
    ];

    const legalLinks = ['Privacy', 'Cookies', 'Terms', 'Trust Center', 'Data Sub-processors', 'System Status'];

    return (
        <footer className="bg-[#E8E4F3]">
            <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
                <div className="py-16 border-y border-[#C8C0E6]">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-normal text-text-primary mb-6">Stay Connected</h2>
                            <p className="text-text-secondary mb-6">Get the latest insights on technology trends and digital transformation.</p>
                            <NewsletterForm />
                        </div>
                    </div>
                </div>

                <div className="py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr,1.3fr,1fr] gap-8">
                        {linkColumns.map((column, i) => (
                            <div key={i}>
                                {column.groups.map(group => (
                                    <FooterLinkGroup key={group.title} title={group.title} links={group.links} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-10 pb-16 border-t border-[#C8C0E6]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-yellow-400 to-purple-400"></div>
                            <p className="text-sm text-text-secondary">&copy; 2025 Link Innovations. All rights reserved.</p>
                        </div>
                        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                            <Link href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy</Link>
                            <Link href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Terms</Link>
                            <Link href="/cookies" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Cookies</Link>
                            <Link href="/security" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Security</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
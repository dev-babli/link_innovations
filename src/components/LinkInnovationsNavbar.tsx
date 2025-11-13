"use client";

import React from 'react';
import {
    CodeIcon,
    GlobeIcon,
    LayersIcon,
    UserPlusIcon,
    Users,
    Star,
    FileText,
    Shield,
    RotateCcw,
    Handshake,
    Leaf,
    HelpCircle,
    DollarSign,
    BarChart,
    PlugIcon,
    MenuIcon,
    XIcon,
    Smartphone,
    Cloud,
    Brain,
    Lock,
    Database,
    Zap,
    Palette,
    Monitor,
    Server,
    TestTube,
    Cpu,
    BarChart3,
} from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
    type NavItemType,
    NavGridCard,
    NavSmallItem,
    NavLargeItem,
    NavItemMobile,
} from '@/components/navigation-menu';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Link Innovations Services - Categorized
export const developmentServices: NavItemType[] = [
    {
        title: 'Web Development',
        href: '/services/web-development',
        description: 'Custom websites and web applications',
        icon: GlobeIcon,
    },
    {
        title: 'Web App Development',
        href: '/services/web-app-development',
        description: 'Advanced web applications and platforms',
        icon: Monitor,
    },
    {
        title: 'Mobile App Development',
        href: '/services/mobile-app-development',
        description: 'Native iOS and Android applications',
        icon: Smartphone,
    },
    {
        title: 'Mobile Apps',
        href: '/services/mobile-apps',
        description: 'Cross-platform mobile solutions',
        icon: Smartphone,
    },
];

export const cloudDevOpsServices: NavItemType[] = [
    {
        title: 'Cloud Services',
        href: '/services/cloud-services',
        description: 'Scalable cloud infrastructure',
        icon: Cloud,
    },
    {
        title: 'Cloud DevOps',
        href: '/services/cloud-devops',
        description: 'Streamlined development workflows',
        icon: Server,
    },
];

export const securityTestingServices: NavItemType[] = [
    {
        title: 'Cybersecurity',
        href: '/services/cybersecurity',
        description: 'Protect your digital assets',
        icon: Lock,
    },
    {
        title: 'Automation Testing',
        href: '/services/automation-testing',
        description: 'Comprehensive testing solutions',
        icon: TestTube,
    },
];

export const aiDataServices: NavItemType[] = [
    {
        title: 'AI Solutions',
        href: '/services/ai-automation',
        description: 'Intelligent automation solutions',
        icon: Brain,
    },
    {
        title: 'Data Analytics',
        href: '/services/data-analytics',
        description: 'Insights from your data',
        icon: BarChart3,
    },
];

// Combined services for mobile menu
export const servicesLinks: NavItemType[] = [
    ...developmentServices,
    ...cloudDevOpsServices,
    ...securityTestingServices,
    ...aiDataServices,
];

// Company Information
export const companyLinks: NavItemType[] = [
    {
        title: 'About Us',
        href: '/about',
        description: 'Learn more about our story and team',
        icon: Users,
    },
    {
        title: 'Portfolio',
        href: '/portfolio',
        description: 'See our latest projects and case studies',
        icon: Star,
    },
    {
        title: 'Showcases',
        href: '/showcases',
        description: 'Interactive design system demos',
        icon: Palette,
    },
    {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team',
        icon: Handshake,
    },
];

// Demo and Special Pages
export const demoLinks: NavItemType[] = [
    {
        title: 'Magic Demo',
        href: '/magic-demo',
        description: 'Interactive effects demonstration',
        icon: Zap,
    },
    {
        title: 'Case Studies Demo',
        href: '/case-studies-demo',
        description: 'Portfolio showcase demo',
        icon: FileText,
    },
    {
        title: 'Sticky Tabs Demo',
        href: '/sticky-tabs-demo',
        description: 'UI component demonstration',
        icon: LayersIcon,
    },
];

export default function LinkInnovationsNavbar() {
    return (
        <div className="relative w-full">
            <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-[9998] w-full border-b">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                            <Zap className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Link Innovations
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <DesktopMenu />

                    {/* CTA Button & Mobile Menu */}
                    <div className="flex items-center gap-2">
                        <Link href="/contact">
                            <Button className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                Get Started
                            </Button>
                        </Link>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </div>
    );
}

function DesktopMenu() {
    return (
        <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border shadow-lg rounded-md !z-[9999] !relative">
                        <div className="grid w-full md:w-5xl md:grid-cols-4 gap-4 p-6">
                            {/* Development Services */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Development</h4>
                                {developmentServices.map((link) => (
                                    <NavSmallItem
                                        key={link.href}
                                        item={link}
                                        href={link.href}
                                        className="gap-x-2"
                                    />
                                ))}
                            </div>

                            {/* Cloud & DevOps */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Cloud & DevOps</h4>
                                {cloudDevOpsServices.map((link) => (
                                    <NavSmallItem
                                        key={link.href}
                                        item={link}
                                        href={link.href}
                                        className="gap-x-2"
                                    />
                                ))}
                            </div>

                            {/* Security & Testing */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Security & Testing</h4>
                                {securityTestingServices.map((link) => (
                                    <NavSmallItem
                                        key={link.href}
                                        item={link}
                                        href={link.href}
                                        className="gap-x-2"
                                    />
                                ))}
                            </div>

                            {/* AI & Data */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-muted-foreground mb-3">AI & Data</h4>
                                {aiDataServices.map((link) => (
                                    <NavSmallItem
                                        key={link.href}
                                        item={link}
                                        href={link.href}
                                        className="gap-x-2"
                                    />
                                ))}
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border shadow-lg rounded-md !z-[9999] !relative">
                        <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.40fr]">
                            <ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
                                {companyLinks.slice(0, 2).map((link) => (
                                    <li key={link.href}>
                                        <NavGridCard link={link} className="min-h-36" />
                                    </li>
                                ))}
                                <div className="col-span-2 grid grid-cols-2 gap-x-4">
                                    {companyLinks.slice(2, 4).map((link) => (
                                        <li key={link.href}>
                                            <NavLargeItem href={link.href} link={link} />
                                        </li>
                                    ))}
                                </div>
                            </ul>
                            <ul className="space-y-2 p-4">
                                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Demos</h4>
                                {demoLinks.map((link) => (
                                    <li key={link.href}>
                                        <NavLargeItem href={link.href} link={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/showcases" className="cursor-pointer">
                        Showcases
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className="cursor-pointer">
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function MobileNav() {
    const sections = [
        {
            id: 'services',
            name: 'Services',
            list: servicesLinks,
        },
        {
            id: 'company',
            name: 'Company',
            list: companyLinks,
        },
        {
            id: 'demos',
            name: 'Demos',
            list: demoLinks,
        },
    ];

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded-full lg:hidden">
                    <MenuIcon className="size-5" />
                </Button>
            </SheetTrigger>
            <SheetContent
                className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg"
                showClose={false}
            >
                <div className="flex h-14 items-center justify-between border-b px-4">
                    <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-purple-600">
                            <Zap className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Link Innovations
                        </span>
                    </div>
                    <SheetClose asChild>
                        <Button size="icon" variant="ghost" className="rounded-full">
                            <XIcon className="size-5" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </SheetClose>
                </div>
                <div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
                    <Accordion type="single" collapsible>
                        {sections.map((section) => (
                            <AccordionItem key={section.id} value={section.id}>
                                <AccordionTrigger className="capitalize hover:no-underline">
                                    {section.name}
                                </AccordionTrigger>
                                <AccordionContent className="space-y-1">
                                    <ul className="grid gap-1">
                                        {section.list.map((link) => (
                                            <li key={link.href}>
                                                <SheetClose asChild>
                                                    <NavItemMobile item={link} href={link.href} />
                                                </SheetClose>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Additional mobile links */}
                    <div className="mt-6 space-y-2">
                        <SheetClose asChild>
                            <NavItemMobile
                                item={{ title: 'Showcases', href: '/showcases', icon: Palette }}
                                href="/showcases"
                            />
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

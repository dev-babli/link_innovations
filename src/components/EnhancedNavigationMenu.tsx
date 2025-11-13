import React from 'react';
import {
    CodeIcon,
    Grid2x2PlusIcon,
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
} from '@/components/ui/navigation-menu';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

// Link Innovations specific navigation items
export const linkInnovationsProductLinks: NavItemType[] = [
    {
        title: 'Web Development',
        href: '/services/web-development',
        description: 'Custom web applications and websites',
        icon: GlobeIcon,
    },
    {
        title: 'Mobile Apps',
        href: '/services/mobile-development',
        description: 'iOS and Android mobile applications',
        icon: LayersIcon,
    },
    {
        title: 'Cloud Solutions',
        href: '/services/cloud-solutions',
        description: 'Scalable cloud infrastructure and deployment',
        icon: UserPlusIcon,
    },
    {
        title: 'AI Integration',
        href: '/services/ai-integration',
        icon: BarChart,
    },
    {
        title: 'API Development',
        href: '/services/api-development',
        icon: PlugIcon,
    },
    {
        title: 'E-Commerce',
        href: '/services/ecommerce',
        icon: DollarSign,
    },
    {
        title: 'Security',
        href: '/services/security',
        icon: Shield,
    },
    {
        title: 'DevOps',
        href: '/services/devops',
        icon: CodeIcon,
    },
];

export const linkInnovationsCompanyLinks: NavItemType[] = [
    {
        title: 'About Us',
        href: '/about',
        description: 'Learn more about Link Innovations',
        icon: Users,
    },
    {
        title: 'Case Studies',
        href: '/case-studies',
        description: 'See our successful projects',
        icon: Star,
    },
    {
        title: 'Terms of Service',
        href: '/terms',
        description: 'Our terms and conditions',
        icon: FileText,
    },
    {
        title: 'Privacy Policy',
        href: '/privacy',
        description: 'How we protect your data',
        icon: Shield,
    },
    {
        title: 'Refund Policy',
        href: '/refund',
        description: 'Our refund and cancellation policy',
        icon: RotateCcw,
    },
    {
        title: 'Partnerships',
        href: '/partnerships',
        icon: Handshake,
        description: 'Partner with us for growth',
    },
    {
        title: 'Blog',
        href: '/blog',
        icon: Leaf,
        description: 'Latest insights and tutorials',
    },
    {
        title: 'Support',
        href: '/support',
        icon: HelpCircle,
        description: 'Get help and support',
    },
];

interface EnhancedNavigationMenuProps {
    className?: string;
}

export default function EnhancedNavigationMenu({ className }: EnhancedNavigationMenuProps) {
    return (
        <div className={cn("w-full", className)}>
            <div className="flex h-full items-center justify-between">
                <div className="flex items-center gap-2">
                    <Grid2x2PlusIcon className="size-6 text-primary" />
                    <p className="font-mono text-lg font-bold">Link Innovations</p>
                </div>
                <DesktopMenu />
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Contact</Button>
                    <Button size="sm">Get Started</Button>
                    <MobileNav />
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
                    <NavigationMenuContent>
                        <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr]">
                            <ul className="grid grow gap-4 p-4 md:grid-cols-3 md:border-r">
                                {linkInnovationsProductLinks.slice(0, 3).map((link) => (
                                    <li key={link.href}>
                                        <NavGridCard link={link} />
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-1 p-4">
                                {linkInnovationsProductLinks.slice(3).map((link) => (
                                    <li key={link.href}>
                                        <NavSmallItem
                                            item={link}
                                            href={link.href}
                                            className="gap-x-1"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.40fr]">
                            <ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
                                {linkInnovationsCompanyLinks.slice(0, 2).map((link) => (
                                    <li key={link.href}>
                                        <NavGridCard link={link} className="min-h-36" />
                                    </li>
                                ))}
                                <div className="col-span-2 grid grid-cols-3 gap-x-4">
                                    {linkInnovationsCompanyLinks.slice(2, 5).map((link) => (
                                        <li key={link.href}>
                                            <NavLargeItem href={link.href} link={link} />
                                        </li>
                                    ))}
                                </div>
                            </ul>
                            <ul className="space-y-2 p-4">
                                {linkInnovationsCompanyLinks.slice(5, 10).map((link) => (
                                    <li key={link.href}>
                                        <NavLargeItem href={link.href} link={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/pricing" className="cursor-pointer">
                        Pricing
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/portfolio" className="cursor-pointer">
                        Portfolio
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
            list: linkInnovationsProductLinks,
        },
        {
            id: 'company',
            name: 'Company',
            list: linkInnovationsCompanyLinks,
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
                <div className="flex h-14 items-center justify-end border-b px-4">
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
                                    {section.id}
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
                </div>
            </SheetContent>
        </Sheet>
    );
}

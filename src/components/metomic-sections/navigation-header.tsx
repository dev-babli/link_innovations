"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
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

const navItems = [
  { name: "Services", href: "#" },
  { name: "Industries", href: "#" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const platformSolutions = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Apps", href: "/services/mobile-apps" },
  { name: "AI & Machine Learning", href: "/services/ai-automation" },
  { name: "Cloud Solutions", href: "/services/cloud-devops" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Data Analytics", href: "/services/data-analytics" },
];

const platformIntegrations = [];

const platformAITools = [
  { name: "Agriculture", href: "/industries/agriculture" },
  { name: "Energy", href: "/industries/energy" },
  { name: "AI Solutions", href: "/services/ai-automation" },
];

// As this is a client component, we can define a reusable link component here
const DropdownLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="block text-sm hover:text-[#8B7FE8] transition-colors duration-200">
      {children}
    </Link>
  </li>
);

export default function NavigationHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] h-20">
      <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-20">
        <Link href="/" aria-label="home">
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            Link Innovations
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white text-base font-normal hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent group"
                  >
                    <span className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-white after:w-0 after:transition-all after:duration-300 group-hover:after:w-full group-data-[state=open]:after:w-full">
                      {item.name}
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.name === "Services" ? (
                      <div className="p-8 bg-background-secondary text-white w-[56rem] animate-in fade-in">
                        <div className="grid grid-cols-3 gap-8 ">
                          <div>
                            <h3 className="text-xs font-semibold tracking-widest text-text-tertiary uppercase mb-4">
                              Core Services
                            </h3>
                            <ul className="space-y-3">
                              {platformSolutions.map((sol) => (
                                <DropdownLink key={sol.name} href={sol.href}>{sol.name}</DropdownLink>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xs font-semibold tracking-widest text-text-tertiary uppercase mb-4">
                              Key Industries
                            </h3>
                            <ul className="space-y-3">
                              {platformIntegrations.map((integ) => (
                                <DropdownLink key={integ.name} href={integ.href}>{integ.name}</DropdownLink>
                              ))}
                              <li>
                                <Link
                                  href="/industries"
                                  className="text-sm font-medium text-accent-purple-primary hover:underline"
                                >
                                  All Industries →
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xs font-semibold tracking-widest text-text-tertiary uppercase mb-4">
                              More Solutions
                            </h3>
                            <ul className="space-y-3">
                              {platformAITools.map((tool) => (
                                <DropdownLink key={tool.name} href={tool.href}>{tool.name}</DropdownLink>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-background-secondary text-white w-64 animate-in fade-in">
                        <p className="text-sm text-text-tertiary">
                          Links for {item.name}
                        </p>
                      </div>
                    )}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#FF8B5F] text-white font-medium py-3 px-6 rounded-[8px] transition-all hover:bg-[#FF8F6B] hover:scale-[1.02] transform duration-200"
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-800 focus:bg-zinc-800"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#1A1A1A] border-l-border-subtle text-white w-full max-w-sm p-0"
            >
              <div className="p-6">
                <SheetClose asChild>
                  <Link href="/" aria-label="home">
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                      Link Innovations
                    </span>
                  </Link>
                </SheetClose>
              </div>
              <div className="h-px bg-border-subtle"></div>
              <div className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {navItems.map((item) => (
                    <AccordionItem
                      key={item.name}
                      value={item.name}
                      className="border-b border-border-subtle"
                    >
                      <AccordionTrigger className="py-4 text-base font-normal hover:no-underline">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-4 space-y-3 py-2">
                          <p className="text-text-tertiary">
                            Links for {item.name}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-[#FF8B5F] text-white font-medium py-3 px-6 rounded-[8px] transition-all hover:bg-[#FF8F6B]"
                  >
                    <span>Get Started</span>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Navigation items with dropdown information
const navItems = [
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Portfolio", href: "#portfolio", hasDropdown: false },
  { name: "About", href: "#about", hasDropdown: false },
  { name: "Insights", href: "#insights", hasDropdown: false },
  { name: "Contact", href: "#contact", hasDropdown: false },
]

// Services dropdown content
const services = [
  { name: "Web Development", href: "/services/web-development", description: "Custom web applications" },
  { name: "Mobile Apps", href: "/services/mobile-apps", description: "iOS and Android solutions" },
  { name: "AI & Machine Learning", href: "/services/ai-automation", description: "Intelligent automation" },
  { name: "Cloud Solutions", href: "/services/cloud-devops", description: "Scalable infrastructure" },
  { name: "Cybersecurity", href: "/services/cybersecurity", description: "Security solutions" },
  { name: "Data Analytics", href: "/services/data-analytics", description: "Business intelligence" },
]

// Industries dropdown content - removed

// Reusable dropdown link component
const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="block text-sm hover:text-primary transition-colors duration-200 py-2"
    >
      {children}
    </Link>
  </li>
)

export default function NewNavigationMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" aria-label="Link Innovations Homepage" className="flex items-center gap-3">
          <Image
            src="/logos/link_logo.jpg"
            alt="Link Innovations"
            width={150}
            height={45}
            className="h-10 w-auto"
            priority
            quality={95}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-base font-normal hover:bg-accent/50 data-[state=open]:bg-accent/50">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {item.name === "Services" ? (
                          <div className="p-8 w-[800px]">
                            <div className="grid grid-cols-3 gap-8">
                              <div>
                                <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                                  Core Services
                                </h3>
                                <ul className="space-y-2">
                                  {services.slice(0, 3).map((service) => (
                                    <DropdownLink key={service.name} href={service.href}>
                                      <div>
                                        <div className="font-medium">{service.name}</div>
                                        <div className="text-xs text-muted-foreground">{service.description}</div>
                                      </div>
                                    </DropdownLink>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                                  More Services
                                </h3>
                                <ul className="space-y-2">
                                  {services.slice(3, 6).map((service) => (
                                    <DropdownLink key={service.name} href={service.href}>
                                      <div>
                                        <div className="font-medium">{service.name}</div>
                                        <div className="text-xs text-muted-foreground">{service.description}</div>
                                      </div>
                                    </DropdownLink>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                                  Quick Links
                                </h3>
                                <ul className="space-y-2">
                                  <DropdownLink href="/services">
                                    <div className="font-medium">All Services →</div>
                                  </DropdownLink>
                                  <DropdownLink href="/contact">
                                    <div className="font-medium">Get a Quote →</div>
                                  </DropdownLink>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 w-64">
                            <p className="text-sm text-muted-foreground">
                              Links for {item.name}
                            </p>
                          </div>
                        )}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-accent-foreground"
          >
            Get Quote
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {navItems.map((item) => (
                  <AccordionItem key={item.name} value={item.name} className="border-b">
                    {item.hasDropdown ? (
                      <>
                        <AccordionTrigger className="py-4 text-base font-normal hover:no-underline">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-3 py-2">
                            {item.name === "Services" ? (
                              <>
                                {services.map((service) => (
                                  <SheetClose key={service.name} asChild>
                                    <Link
                                      href={service.href}
                                      className="block text-sm hover:text-primary transition-colors"
                                    >
                                      {service.name}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </>
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                Links for {item.name}
                              </p>
                            )}
                          </div>
                        </AccordionContent>
                      </>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex py-4 text-base font-normal transition-colors hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="flex flex-col gap-2 pt-6 border-t mt-4">
                <SheetClose asChild>
                  <Link
                    href="#contact"
                    className="text-sm font-medium transition-colors hover:text-primary py-2"
                  >
                    Get Quote
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#contact"
                    className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center"
                  >
                    Start Project
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


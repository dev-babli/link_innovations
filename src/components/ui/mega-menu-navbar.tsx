"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Plus, Minus } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Services data
const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Web App Development", href: "/services/web-app-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "Mobile Apps", href: "/services/mobile-apps" },
  { name: "AI & Machine Learning", href: "/services/ai-automation" },
  { name: "Cloud Services", href: "/services/cloud-services" },
]

// Industries data - removed

// Portfolio/Case Studies data
const portfolioItems = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies-demo" },
  { name: "Showcases", href: "/showcases" },
]

// About/Insights data
const aboutItems = [
  { name: "About Us", href: "/about" },
  { name: "Insights", href: "/insights" },
]

// Contact data
const contactItems = [
  { name: "Contact", href: "/contact" },
  { name: "Get Quote", href: "#contact" },
  { name: "Start Project", href: "#contact" },
]

// Features
const solutionFeatures = [
  "Full-Stack Development",
  "Cloud-Native Architecture",
  "API Integration",
  "Performance Optimization",
  "Security Implementation",
  "Scalable Solutions",
]

const platformFeatures = [
  "Industry Expertise",
  "Regulatory Compliance",
  "Enterprise Integration",
  "Custom Solutions",
  "24/7 Support",
  "Scalable Platforms",
]

// Custom trigger with + / - indicator
const MegamenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuTrigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuTrigger> & { label: string }
>(({ className, label, ...props }, ref) => {
  return (
    <NavigationMenuTrigger
      ref={ref}
      className={cn(
        "group bg-transparent text-white text-base font-normal hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white px-4 py-2 h-auto",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-1.5">
        {label}
        <span className="ml-1 text-xs transition-transform duration-200">
          <Plus className="size-3 group-data-[state=open]:hidden" />
          <Minus className="size-3 hidden group-data-[state=open]:block" />
        </span>
      </span>
    </NavigationMenuTrigger>
  )
})
MegamenuTrigger.displayName = "MegamenuTrigger"

// Megamenu Column Component
const MegamenuColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col">
    {title && (
      <h3 className="text-[10px] font-semibold tracking-[0.15em] text-white/40 uppercase mb-6 leading-none">
        {title}
      </h3>
    )}
    <div className="space-y-0">
      {children}
    </div>
  </div>
)

// Megamenu Link Component
const MegamenuLink = ({ href, title }: { href: string; title: string }) => (
  <Link
    href={href}
    className="block text-sm text-white py-2.5 leading-normal hover:text-white/80 transition-colors"
  >
    {title}
  </Link>
)

const MegamenuFeatureLink = ({ text }: { text: string }) => (
  <div className="text-sm text-white py-2.5 leading-normal">{text}</div>
)

export default function MegaMenuNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = React.useState(false)
  const [isPlatformOpen, setIsPlatformOpen] = React.useState(false)
  const [isExploreOpen, setIsExploreOpen] = React.useState(false)
  const [isAboutOpen, setIsAboutOpen] = React.useState(false)
  const [isContactOpen, setIsContactOpen] = React.useState(false)

  // Close all menus when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-menu-trigger]') && !target.closest('[data-menu-content]')) {
        setIsSolutionsOpen(false)
        setIsPlatformOpen(false)
        setIsExploreOpen(false)
        setIsAboutOpen(false)
        setIsContactOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/5 h-20">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-20 flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Link Innovations" className="flex items-center z-50 relative">
            <Image
              src="/logos/link_logo.jpg"
              alt="Link Innovations"
              width={150}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-center gap-1">
              {/* Solutions */}
              <div className="relative" onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)}>
                <button
                  data-menu-trigger
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-base font-normal text-white hover:text-white transition-colors",
                    isSolutionsOpen && "text-white"
                  )}
                >
                  Solutions
                  <span className="text-xs">
                    {isSolutionsOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                  </span>
                </button>
                {isSolutionsOpen && (
                  <div
                    data-menu-content
                    className="fixed left-0 right-0 top-20 w-full z-[60]"
                    style={{ marginTop: 0 }}
                  >
                    {/* Full-screen blurred dark overlay */}
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10" />
                    {/* Menu content */}
                    <div className="relative w-full bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5">
                      <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 py-12">
                        <div className="grid grid-cols-4 gap-8 lg:gap-12">
                          {/* MODULES */}
                          <MegamenuColumn title="MODULES">
                            {services.map((service) => (
                              <MegamenuLink
                                key={service.name}
                                href={service.href}
                                title={service.name}
                              />
                            ))}
                          </MegamenuColumn>

                          {/* FEATURES */}
                          <MegamenuColumn title="FEATURES">
                            {solutionFeatures.map((feature) => (
                              <MegamenuFeatureLink key={feature} text={feature} />
                            ))}
                          </MegamenuColumn>

                          {/* SPOTLIGHT */}
                          <MegamenuColumn title="* SPOTLIGHT">
                            <h4 className="text-xl font-bold text-white mb-3 leading-tight">The Modular Machine</h4>
                            <p className="text-sm text-white mb-6 leading-relaxed">
                              Architected from scalable building blocks, Link Innovations removes the need to choose between power and accessibility.
                            </p>
                            <div className="relative w-full aspect-[4/3] overflow-hidden mb-3">
                              <Image
                                src="/images/services/web-development/hero-web-development.jpg"
                                alt="Web Development"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-xs text-white/60">On Product • Link Innovations</p>
                          </MegamenuColumn>

                          {/* Message */}
                          <MegamenuColumn title="">
                            <p className="text-base text-white leading-relaxed">
                              A customer platform built to combine power and intuitiveness. Link Innovations gives you the technical capabilities you need to run your business with greater success, scale and speed than ever.
                            </p>
                          </MegamenuColumn>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Platform */}
              <div className="relative" onMouseEnter={() => setIsPlatformOpen(true)} onMouseLeave={() => setIsPlatformOpen(false)}>
                <button
                  data-menu-trigger
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-base font-normal text-white hover:text-white transition-colors",
                    isPlatformOpen && "text-white"
                  )}
                >
                  Platform
                  <span className="text-xs">
                    {isPlatformOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                  </span>
                </button>
                {isPlatformOpen && (
                  <div
                    data-menu-content
                    className="fixed left-0 right-0 top-20 w-full z-[60]"
                    style={{ marginTop: 0 }}
                  >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10" />
                    <div className="relative w-full bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5">
                      <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 py-12">
                        <div className="grid grid-cols-3 gap-8 lg:gap-12">
                          <MegamenuColumn title="FEATURES">
                            {platformFeatures.map((feature) => (
                              <MegamenuFeatureLink key={feature} text={feature} />
                            ))}
                          </MegamenuColumn>

                          <MegamenuColumn title="* SPOTLIGHT">
                            <h4 className="text-xl font-bold text-white mb-3 leading-tight">Industry Excellence</h4>
                            <p className="text-sm text-white mb-6 leading-relaxed">
                              Transforming industries through innovative technology solutions that drive growth and efficiency.
                            </p>
                            <div className="relative w-full aspect-[4/3] overflow-hidden mb-3">
                              <Image
                                src="/images/industry_cards/Healthcar and Lifesciences.webp"
                                alt="Healthcare"
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                            <p className="text-xs text-white/60">On Platform • Link Innovations</p>
                          </MegamenuColumn>

                          <MegamenuColumn title="">
                            <p className="text-base text-white leading-relaxed">
                              Industry-specific solutions tailored to your business needs. We combine deep domain expertise with cutting-edge technology to deliver platforms that transform your operations.
                            </p>
                          </MegamenuColumn>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Explore */}
              <div className="relative" onMouseEnter={() => setIsExploreOpen(true)} onMouseLeave={() => setIsExploreOpen(false)}>
                <button
                  data-menu-trigger
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-base font-normal text-white hover:text-white transition-colors",
                    isExploreOpen && "text-white"
                  )}
                >
                  Explore
                  <span className="text-xs">
                    {isExploreOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                  </span>
                </button>
                {isExploreOpen && (
                  <div
                    data-menu-content
                    className="fixed left-0 right-0 top-20 w-full z-[60]"
                    style={{ marginTop: 0 }}
                  >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10" />
                    <div className="relative w-full bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5">
                      <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 py-12">
                        <div className="grid grid-cols-4 gap-8 lg:gap-12">
                          <MegamenuColumn title="MODULES">
                            {portfolioItems.map((item) => (
                              <MegamenuLink
                                key={item.name}
                                href={item.href}
                                title={item.name}
                              />
                            ))}
                          </MegamenuColumn>

                          <MegamenuColumn title="FEATURES">
                            <MegamenuFeatureLink text="Project Showcase" />
                            <MegamenuFeatureLink text="Case Studies" />
                            <MegamenuFeatureLink text="Design Systems" />
                            <MegamenuFeatureLink text="Client Success" />
                          </MegamenuColumn>

                          <MegamenuColumn title="* SPOTLIGHT">
                            <h4 className="text-xl font-bold text-white mb-3 leading-tight">Our Work</h4>
                            <p className="text-sm text-white mb-6 leading-relaxed">
                              Discover innovative solutions we've built for clients across industries, showcasing our expertise and creativity.
                            </p>
                            <div className="relative w-full aspect-[4/3] overflow-hidden mb-3">
                              <Image
                                src="/images/aerial-view-business-team.jpg"
                                alt="Our Work"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-xs text-white/60">On Portfolio • Link Innovations</p>
                          </MegamenuColumn>

                          <MegamenuColumn title="">
                            <p className="text-base text-white leading-relaxed">
                              Explore our portfolio of successful projects and case studies. See how we've helped businesses transform and achieve their goals.
                            </p>
                          </MegamenuColumn>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <div className="relative" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
                <button
                  data-menu-trigger
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-base font-normal text-white hover:text-white transition-colors",
                    isAboutOpen && "text-white"
                  )}
                >
                  About
                  <span className="text-xs">
                    {isAboutOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                  </span>
                </button>
                {isAboutOpen && (
                  <div
                    data-menu-content
                    className="fixed left-0 right-0 top-20 w-full z-[60]"
                    style={{ marginTop: 0 }}
                  >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10" />
                    <div className="relative w-full bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5">
                      <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 py-12">
                        <div className="grid grid-cols-4 gap-8 lg:gap-12">
                          <MegamenuColumn title="MODULES">
                            {aboutItems.map((item) => (
                              <MegamenuLink
                                key={item.name}
                                href={item.href}
                                title={item.name}
                              />
                            ))}
                          </MegamenuColumn>

                          <MegamenuColumn title="FEATURES">
                            <MegamenuFeatureLink text="Our Story" />
                            <MegamenuFeatureLink text="Team" />
                            <MegamenuFeatureLink text="Values" />
                            <MegamenuFeatureLink text="Culture" />
                          </MegamenuColumn>

                          <MegamenuColumn title="* SPOTLIGHT">
                            <h4 className="text-xl font-bold text-white mb-3 leading-tight">Who We Are</h4>
                            <p className="text-sm text-white mb-6 leading-relaxed">
                              A team of passionate technologists dedicated to building innovative solutions that drive business success.
                            </p>
                            <div className="relative w-full aspect-[4/3] overflow-hidden mb-3">
                              <Image
                                src="/images/aerial-view-business-team.jpg"
                                alt="About Us"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-xs text-white/60">On Company • Link Innovations</p>
                          </MegamenuColumn>

                          <MegamenuColumn title="">
                            <p className="text-base text-white leading-relaxed">
                              Learn about our mission, values, and the team behind Link Innovations. Discover what drives us to deliver exceptional results.
                            </p>
                          </MegamenuColumn>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <div className="relative" onMouseEnter={() => setIsContactOpen(true)} onMouseLeave={() => setIsContactOpen(false)}>
                <button
                  data-menu-trigger
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-base font-normal text-white hover:text-white transition-colors",
                    isContactOpen && "text-white"
                  )}
                >
                  Contact
                  <span className="text-xs">
                    {isContactOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                  </span>
                </button>
                {isContactOpen && (
                  <div
                    data-menu-content
                    className="fixed left-0 right-0 top-20 w-full z-[60]"
                    style={{ marginTop: 0 }}
                  >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10" />
                    <div className="relative w-full bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/5">
                      <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 py-12">
                        <div className="grid grid-cols-4 gap-8 lg:gap-12">
                          <MegamenuColumn title="MODULES">
                            {contactItems.map((item) => (
                              <MegamenuLink
                                key={item.name}
                                href={item.href}
                                title={item.name}
                              />
                            ))}
                          </MegamenuColumn>

                          <MegamenuColumn title="FEATURES">
                            <MegamenuFeatureLink text="Get Quote" />
                            <MegamenuFeatureLink text="Start Project" />
                            <MegamenuFeatureLink text="Schedule Call" />
                            <MegamenuFeatureLink text="Support" />
                          </MegamenuColumn>

                          <MegamenuColumn title="* SPOTLIGHT">
                            <h4 className="text-xl font-bold text-white mb-3 leading-tight">Let's Connect</h4>
                            <p className="text-sm text-white mb-6 leading-relaxed">
                              Ready to start your next project? Get in touch and let's discuss how we can help.
                            </p>
                            <div className="relative w-full aspect-[4/3] overflow-hidden mb-3">
                              <Image
                                src="/images/cloud-computing-hero.webp"
                                alt="Contact Us"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-xs text-white/60">On Contact • Link Innovations</p>
                          </MegamenuColumn>

                          <MegamenuColumn title="">
                            <p className="text-base text-white leading-relaxed">
                              Contact us today to discuss your project needs. We're here to help you achieve your business goals with innovative technology solutions.
                            </p>
                          </MegamenuColumn>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6 z-50 relative">
            <Link
              href="#contact"
              className="text-sm font-normal text-white hover:text-white/80 transition-colors"
            >
              Get Quote
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-medium bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10 z-50 relative">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1a1a1a] border-l border-white/5 text-white p-0">
              <div className="p-6 border-b border-white/5">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logos/link_logo.jpg"
                    alt="Link Innovations"
                    width={150}
                    height={45}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
              <div className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="solutions" className="border-b border-white/5">
                    <AccordionTrigger className="text-base font-normal hover:no-underline text-white py-4">
                      Solutions
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-3 py-2">
                        {services.map((service) => (
                          <SheetClose key={service.name} asChild>
                            <Link
                              href={service.href}
                              className="block text-sm text-white/80 hover:text-white transition-colors"
                            >
                              {service.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="explore" className="border-b border-white/5">
                    <AccordionTrigger className="text-base font-normal hover:no-underline text-white py-4">
                      Explore
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-3 py-2">
                        {portfolioItems.map((item) => (
                          <SheetClose key={item.name} asChild>
                            <Link
                              href={item.href}
                              className="block text-sm text-white/80 hover:text-white transition-colors"
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="about" className="border-b border-white/5">
                    <AccordionTrigger className="text-base font-normal hover:no-underline text-white py-4">
                      About
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-3 py-2">
                        {aboutItems.map((item) => (
                          <SheetClose key={item.name} asChild>
                            <Link
                              href={item.href}
                              className="block text-sm text-white/80 hover:text-white transition-colors"
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="contact" className="border-b border-white/5">
                    <AccordionTrigger className="text-base font-normal hover:no-underline text-white py-4">
                      Contact
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-3 py-2">
                        {contactItems.map((item) => (
                          <SheetClose key={item.name} asChild>
                            <Link
                              href={item.href}
                              className="block text-sm text-white/80 hover:text-white transition-colors"
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-2 pt-6 border-t border-white/5 mt-6">
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="text-sm font-normal text-white/80 hover:text-white py-2"
                    >
                      Get Quote
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="px-6 py-2 text-sm font-medium bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-center"
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
    </>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ChevronDown, 
  Star, 
  User, 
  FileText, 
  Search,
  Globe,
  ShoppingCart,
  Zap,
  Shield,
  Database,
  Code,
  Smartphone,
  Cloud,
  BarChart3,
  Settings,
  Briefcase,
  Users,
  Building,
  Heart,
  GraduationCap,
  Package,
  Rocket,
  BookOpen,
  Video,
  FileCheck,
  Newspaper,
  Mail,
  MessageSquare,
  Brain,
  Handshake,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function DropdownV1Navbar() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Navigation items with dropdowns - expanded with 4-column data
  const navItems = [
    {
      label: "Services",
      id: "services",
      columns: {
        column1: {
          title: "SERVICES",
          items: [
            { label: "Web Development", href: "/services/web-development", icon: Globe },
            { label: "Mobile App Development", href: "/services/mobile-app-development", icon: Smartphone },
            { label: "Cloud Services", href: "/services/cloud-services", icon: Cloud },
            { label: "Data Analytics", href: "/services/data-analytics", icon: BarChart3 },
            { label: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
            { label: "AI & Machine Learning", href: "/services/ai-automation", icon: Brain },
          ],
        },
        column2: {
          title: "FEATURES",
          items: [
            { label: "Full-Stack Development", href: "/services/web-development", icon: Code },
            { label: "Cloud-Native Architecture", href: "/services/cloud-services", icon: Cloud },
            { label: "Enterprise Security", href: "/services/cybersecurity", icon: Shield },
            { label: "Business Intelligence", href: "/services/data-analytics", icon: BarChart3 },
            { label: "Cross-Platform Mobile", href: "/services/mobile-app-development", icon: Smartphone },
            { label: "API Integration", href: "/services", icon: Database },
          ],
        },
        column3: {
          title: "USE CASES",
          items: [
            { label: "Enterprise Solutions", href: "/industries", icon: Building },
            { label: "E-commerce Platforms", href: "/services/web-development", icon: ShoppingCart },
            { label: "Data Analytics Platforms", href: "/services/data-analytics", icon: Database },
            { label: "SaaS Applications", href: "/services/cloud-services", icon: Cloud },
            { label: "Mobile Applications", href: "/services/mobile-app-development", icon: Smartphone },
            { label: "Web Applications", href: "/services/web-development", icon: Globe },
          ],
        },
        column4: {
          title: "RESOURCES",
          items: [
            { label: "Service Catalog", href: "/services", icon: FileText },
            { label: "Case Studies", href: "/services", icon: BookOpen },
            { label: "Documentation", href: "/contact", icon: FileCheck },
            { label: "Support", href: "/contact", icon: Heart },
            { label: "Training", href: "/contact", icon: GraduationCap },
            { label: "Contact Sales", href: "/contact", icon: MessageSquare },
          ],
        },
      },
      cards: [
        { icon: Globe, title: "Services", link: "Browse all →", href: "/services" },
        { icon: Cloud, title: "Cloud Solutions", link: "Explore →", href: "/services/cloud-services" },
        { icon: Shield, title: "Security", link: "Learn more →", href: "/services/cybersecurity" },
        { icon: Code, title: "Development", link: "Get started →", href: "/services" },
      ],
    },
    {
      label: "Products",
      id: "products",
      columns: {
        column1: {
          title: "PRODUCTS",
          items: [
            { label: "Enterprise Platform", href: "/products", icon: Building },
            { label: "Analytics Suite", href: "/products", icon: BarChart3 },
            { label: "Security Tools", href: "/services/cybersecurity", icon: Shield },
            { label: "Cloud Infrastructure", href: "/services/cloud-services", icon: Cloud },
            { label: "Mobile SDK", href: "/services/mobile-app-development", icon: Smartphone },
            { label: "Developer Tools", href: "/products", icon: Code },
          ],
        },
        column2: {
          title: "FEATURES",
          items: [
            { label: "Scalable Architecture", href: "/products", icon: Cloud },
            { label: "Advanced Analytics", href: "/services/data-analytics", icon: BarChart3 },
            { label: "Enterprise Security", href: "/services/cybersecurity", icon: Shield },
            { label: "API Access", href: "/products", icon: Code },
            { label: "Mobile SDK", href: "/services/mobile-app-development", icon: Smartphone },
            { label: "Developer Portal", href: "/products", icon: Rocket },
          ],
        },
        column3: {
          title: "USE CASES",
          items: [
            { label: "Large Enterprises", href: "/industries", icon: Building },
            { label: "Startups", href: "/industries", icon: Rocket },
            { label: "Agencies", href: "/industries", icon: Briefcase },
            { label: "Developers", href: "/products", icon: Code },
            { label: "IT Teams", href: "/services", icon: Settings },
            { label: "Product Teams", href: "/products", icon: Package },
          ],
        },
        column4: {
          title: "RESOURCES",
          items: [
            { label: "Product Docs", href: "/products", icon: FileText },
            { label: "API Reference", href: "/products", icon: Code },
            { label: "Tutorials", href: "/contact", icon: Video },
            { label: "Pricing", href: "/contact", icon: ShoppingCart },
            { label: "Roadmap", href: "/products", icon: Rocket },
            { label: "Support", href: "/contact", icon: Heart },
          ],
        },
      },
      cards: [
        { icon: Building, title: "Products", link: "Browse all →", href: "/products" },
        { icon: BarChart3, title: "Analytics", link: "Explore →", href: "/services/data-analytics" },
        { icon: Shield, title: "Security", link: "Learn more →", href: "/services/cybersecurity" },
        { icon: Code, title: "Developer Tools", link: "Get started →", href: "/products" },
      ],
    },
    {
      label: "Solutions",
      id: "solutions",
      columns: {
        column1: {
          title: "SOLUTIONS",
          items: [
            { label: "Business Intelligence", href: "/services/data-analytics", icon: BarChart3 },
            { label: "Cloud Migration", href: "/services/cloud-services", icon: Cloud },
            { label: "Digital Transformation", href: "/services", icon: Zap },
            { label: "Process Automation", href: "/services", icon: Settings },
            { label: "AI & Machine Learning", href: "/services/ai-automation", icon: Brain },
            { label: "Enterprise Integration", href: "/services", icon: Database },
          ],
        },
        column2: {
          title: "FEATURES",
          items: [
            { label: "Data Analytics", href: "/services/data-analytics", icon: BarChart3 },
            { label: "Cloud Strategy", href: "/services/cloud-services", icon: Cloud },
            { label: "AI Integration", href: "/services/ai-automation", icon: Brain },
            { label: "Process Automation", href: "/services", icon: Settings },
            { label: "System Integration", href: "/services", icon: Database },
            { label: "Digital Consulting", href: "/services", icon: Briefcase },
          ],
        },
        column3: {
          title: "USE CASES",
          items: [],
        },
        column4: {
          title: "RESOURCES",
          items: [
            { label: "Solution Guides", href: "/contact", icon: BookOpen },
            { label: "White Papers", href: "/contact", icon: FileCheck },
            { label: "Webinars", href: "/contact", icon: Video },
            { label: "Case Studies", href: "/services", icon: FileText },
            { label: "Consulting", href: "/services", icon: Briefcase },
            { label: "Get Started", href: "/contact", icon: Rocket },
          ],
        },
      },
      cards: [
        { icon: Zap, title: "Solutions", link: "Browse all →", href: "/services" },
        { icon: Brain, title: "AI & ML", link: "Explore →", href: "/services/ai-automation" },
        { icon: Cloud, title: "Cloud", link: "Learn more →", href: "/services/cloud-services" },
        { icon: BarChart3, title: "Analytics", link: "Get started →", href: "/services/data-analytics" },
      ],
    },
    {
      label: "Company",
      id: "company",
      columns: {
        column1: {
          title: "COMPANY",
          items: [
            { label: "About Us", href: "/about", icon: Building },
            { label: "Our Team", href: "/about", icon: Users },
            { label: "Careers", href: "/careers", icon: Briefcase },
            { label: "Leadership", href: "/about", icon: User },
            { label: "Partners", href: "/partners", icon: Handshake },
            { label: "Contact", href: "/contact", icon: MessageSquare },
          ],
        },
        column2: {
          title: "FEATURES",
          items: [
            { label: "Our Story", href: "/about", icon: BookOpen },
            { label: "Culture", href: "/about", icon: Heart },
            { label: "Values", href: "/about", icon: Star },
            { label: "Mission", href: "/about", icon: Rocket },
            { label: "Press Kit", href: "/about", icon: Newspaper },
            { label: "Blog", href: "/contact", icon: FileText },
          ],
        },
        column3: {
          title: "USE CASES",
          items: [
            { label: "Join Us", href: "/careers", icon: Briefcase },
            { label: "Open Positions", href: "/careers", icon: Users },
            { label: "Life at Link", href: "/careers", icon: Heart },
            { label: "Benefits", href: "/careers", icon: Star },
            { label: "Internships", href: "/careers", icon: GraduationCap },
            { label: "Referrals", href: "/careers", icon: User },
          ],
        },
        column4: {
          title: "RESOURCES",
          items: [
            { label: "Press Releases", href: "/about", icon: Newspaper },
            { label: "Media Kit", href: "/about", icon: FileCheck },
            { label: "Events", href: "/contact", icon: Rocket },
            { label: "Newsletter", href: "/contact", icon: Mail },
            { label: "Social Media", href: "/contact", icon: Users },
            { label: "Contact", href: "/contact", icon: MessageSquare },
          ],
        },
      },
      cards: [
        { icon: Building, title: "Company", link: "Learn more →", href: "/about" },
        { icon: Briefcase, title: "Careers", link: "Browse jobs →", href: "/careers" },
        { icon: Users, title: "Team", link: "Meet us →", href: "/about" },
        { icon: MessageSquare, title: "Contact", link: "Get in touch →", href: "/contact" },
      ],
    },
  ]

  // Main dropdown menu data (Explore menu)
  const navigationData = {
    features: [
      { label: "Web Development", href: "/services/web-development", highlighted: true, icon: Globe },
      { label: "Mobile Apps", href: "/services/mobile-app-development", icon: Smartphone },
      { label: "Cloud Services", href: "/services/cloud-services", icon: Cloud },
      { label: "AI & ML Solutions", href: "/services/ai-automation", icon: Brain },
      { label: "Data Analytics", href: "/services/data-analytics", icon: BarChart3 },
      { label: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
    ],
    useCases: [],
    resources: [
      { label: "Case Studies", href: "/services", icon: FileText },
      { label: "Blog & Articles", href: "/contact", icon: Newspaper },
      { label: "Webinars", href: "/contact", icon: Video },
      { label: "White Papers", href: "/contact", icon: FileCheck },
      { label: "Tutorials", href: "/contact", icon: BookOpen },
      { label: "Newsletter", href: "/contact", icon: Mail },
    ],
    about: [
      { label: "About Link Innovations", href: "/about", icon: Building },
      { label: "Our Team", href: "/about", icon: Users },
      { label: "Leadership", href: "/about", icon: User },
      { label: "Careers", href: "/careers", icon: Briefcase },
      { label: "Partners", href: "/partners", icon: Handshake },
      { label: "Contact Us", href: "/contact", icon: MessageSquare },
    ],
    cards: [
      { icon: Globe, title: "Services", link: "Browse all →", href: "/services" },
      { icon: Building, title: "Industries", link: "Explore →", href: "/industries" },
      { icon: FileText, title: "Case Studies", link: "View cases →", href: "/services" },
      { icon: Rocket, title: "Get Started", link: "Contact us →", href: "/contact" },
    ],
  }

  const handleDropdownToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-dropdown]') && !target.closest('[data-dropdown-trigger]')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="grid grid-cols-2 gap-1.5">
                <div className="w-4 h-4 bg-purple-600 rounded-sm"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-sm"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-sm"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-purple-600" style={{ letterSpacing: '-0.02em' }}>Link Innovations</span>
            </Link>

            {/* Navigation Items with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div key={item.id} className="relative" data-dropdown>
                  <button
                    data-dropdown-trigger
                    onClick={() => handleDropdownToggle(item.id)}
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        openDropdown === item.id && "rotate-180"
                      )}
                    />
                  </button>
                </div>
              ))}
            </nav>

            {/* Right Side - Dropdown menu and button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setOpenDropdown('main')}
                className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="text-sm font-medium">Explore</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    openDropdown === 'main' && "rotate-180"
                  )}
                />
              </button>
              <Link
                href="#contact"
                className="hidden lg:inline-block px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Project
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
          <nav className="px-8 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.id} className="space-y-2">
                <button
                  onClick={() => {
                    const isOpen = openDropdown === item.id
                    setOpenDropdown(isOpen ? null : item.id)
                  }}
                  className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      openDropdown === item.id && "rotate-180"
                    )}
                  />
                </button>
                {openDropdown === item.id && (
                  <div className="pl-4 space-y-4">
                    {Object.values(item.columns).map((column, colIdx) => (
                      <div key={colIdx} className="space-y-2">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{column.title}</h4>
                        {column.items.map((dropdownItem) => {
                          const Icon = dropdownItem.icon
                          return (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              onClick={() => {
                                setOpenDropdown(null)
                                setMobileMenuOpen(false)
                              }}
                              className="flex items-center gap-3 text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5"
                            >
                              <Icon className="w-4 h-4" />
                              <span>{dropdownItem.label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Project
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Full-screen megamenus for navigation items */}
      {navItems.map((item) => (
        openDropdown === item.id && (
          <React.Fragment key={item.id}>
            {/* Dark overlay background with speckled purple */}
            <div 
              className="fixed inset-0 z-40 bg-gradient-to-br from-[#2a1b3d] to-[#1a0f2e]"
              style={{ 
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)', 
                backgroundSize: '40px 40px' 
              }}
              onClick={() => setOpenDropdown(null)}
            />
            
            {/* White container with menu */}
            <div className="fixed inset-x-0 top-20 z-50 bg-white rounded-t-2xl shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="max-w-7xl mx-auto px-8 py-8">
                {/* Main Navigation Content */}
                <div className="grid grid-cols-4 gap-12 mb-8">
                  {/* Column 1 */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wide">{item.columns.column1.title}</h3>
                    <nav className="space-y-2.5">
                      {item.columns.column1.items.map((navItem) => {
                        const Icon = navItem.icon
                        return (
                          <Link
                            key={navItem.label}
                            href={navItem.href}
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenDropdown(null)
                            }}
                            className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors leading-relaxed group"
                          >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span>{navItem.label}</span>
                          </Link>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wide">{item.columns.column2.title}</h3>
                    <nav className="space-y-2.5">
                      {item.columns.column2.items.map((navItem) => {
                        const Icon = navItem.icon
                        return (
                          <Link
                            key={navItem.label}
                            href={navItem.href}
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenDropdown(null)
                            }}
                            className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors leading-relaxed group"
                          >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span>{navItem.label}</span>
                          </Link>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wide">{item.columns.column3.title}</h3>
                    <nav className="space-y-2.5">
                      {item.columns.column3.items.map((navItem) => {
                        const Icon = navItem.icon
                        return (
                          <Link
                            key={navItem.label}
                            href={navItem.href}
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenDropdown(null)
                            }}
                            className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors leading-relaxed group"
                          >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span>{navItem.label}</span>
                          </Link>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Column 4 */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wide">{item.columns.column4.title}</h3>
                    <nav className="space-y-2.5">
                      {item.columns.column4.items.map((navItem) => {
                        const Icon = navItem.icon
                        return (
                          <Link
                            key={navItem.label}
                            href={navItem.href}
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenDropdown(null)
                            }}
                            className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors leading-relaxed group"
                          >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span>{navItem.label}</span>
                          </Link>
                        )
                      })}
                    </nav>
                  </div>
                </div>

                {/* Bottom CTA Cards */}
                <div className="grid grid-cols-4 gap-4 pt-8 border-t border-gray-200">
                  {item.cards.map((card) => {
                    const Icon = card.icon
                    return (
                      <Link
                        key={card.title}
                        href={card.href}
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenDropdown(null)
                        }}
                        className="bg-gray-100 rounded-xl p-5 hover:bg-gray-200 transition-colors group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-2.5 bg-purple-600 rounded-lg group-hover:bg-purple-700 transition-colors flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-gray-900 mb-1.5 leading-tight">
                              {card.title}
                            </h4>
                            <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                              {card.link}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      ))}

      {/* Full-screen dropdown menu */}
      {openDropdown === 'main' && (
        <>
          {/* Dark overlay background with speckled purple */}
          <div 
            className="fixed inset-0 z-40 bg-gradient-to-br from-[#2a1b3d] to-[#1a0f2e]"
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)', 
              backgroundSize: '40px 40px' 
            }}
            onClick={() => setOpenDropdown(null)}
          />
          
          {/* White container with menu */}
          <div className="fixed inset-x-0 top-20 z-50 bg-white rounded-t-2xl shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-8 py-8">
              {/* Main Navigation Content */}
              <div className="grid grid-cols-4 gap-12 mb-8">
                {/* FEATURES Column */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wide">FEATURES</h3>
                  <nav className="space-y-2.5">
                    {navigationData.features.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(null)
                          }}
                          className={cn(
                            "flex items-center gap-2.5 text-sm transition-colors leading-relaxed group",
                            item.highlighted
                              ? "text-blue-600 font-medium"
                              : "text-gray-700 hover:text-gray-900"
                          )}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </nav>
                </div>

                {/* USE CASES Column */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wide">USE CASES</h3>
                  <nav className="space-y-2.5">
                    {navigationData.useCases.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(null)
                          }}
                          className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors leading-relaxed group"
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </nav>
                </div>

                {/* RESOURCES Column */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wide">RESOURCES</h3>
                  <nav className="space-y-2.5">
                    {navigationData.resources.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(null)
                          }}
                          className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors leading-relaxed group"
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </nav>
                </div>

                {/* ABOUT Column */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wide">ABOUT</h3>
                  <nav className="space-y-2.5">
                    {navigationData.about.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(null)
                          }}
                          className="flex items-center gap-2.5 text-sm text-gray-700 hover:text-gray-900 transition-colors leading-relaxed group"
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </nav>
                </div>
              </div>

              {/* Bottom CTA Cards */}
              <div className="grid grid-cols-4 gap-4 pt-8 border-t border-gray-200">
                {navigationData.cards.map((card) => {
                  const Icon = card.icon
                  return (
                    <Link
                      key={card.title}
                      href={card.href}
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(null)
                      }}
                      className="bg-gray-100 rounded-xl p-5 hover:bg-gray-200 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-purple-600 rounded-lg group-hover:bg-purple-700 transition-colors flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 mb-1.5 leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                            {card.link}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

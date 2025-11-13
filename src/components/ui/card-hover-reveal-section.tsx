"use client"

import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from "@/components/ui/reveal-on-hover"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const industries = [
  {
    id: 1,
    name: "Healthcare",
    description: "Transforming healthcare delivery with innovative digital solutions, telemedicine platforms, and patient management systems that improve care quality and accessibility.",
    image: "/images/industry_cards/healthare.webp",
    services: ["EHR Systems", "Telemedicine", "Health Analytics"],
    technologies: ["HIPAA Compliance", "Cloud Infrastructure"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    name: "Finance & Banking",
    description: "Secure fintech solutions including payment gateways, banking platforms, and financial analytics tools that ensure compliance and enhance customer trust.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Payment Solutions", "Banking Apps", "Risk Management"],
    technologies: ["Blockchain", "Security Compliance"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    name: "E-commerce & Retail",
    description: "Complete e-commerce platforms with inventory management, order processing, and customer engagement tools that drive sales and enhance shopping experiences.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Online Stores", "Mobile Commerce", "Supply Chain"],
    technologies: ["React", "Node.js"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    name: "Education & EdTech",
    description: "Learning management systems, virtual classrooms, and educational platforms that enhance the learning experience and make education more accessible.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["LMS Platforms", "Virtual Classrooms", "Student Portals"],
    technologies: ["Vue.js", "MongoDB"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    name: "Manufacturing",
    description: "Industrial IoT solutions, production management systems, and automation tools for modern manufacturing that optimize operations and increase efficiency.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["IoT Solutions", "Production Management", "Quality Control"],
    technologies: ["Python", "IoT Platforms"],
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: 6,
    name: "Real Estate",
    description: "Property management systems, real estate platforms, and virtual property viewing solutions that streamline operations and enhance customer experiences.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Property Platforms", "Virtual Tours", "CRM Systems"],
    technologies: ["Next.js", "3D Visualization"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
]

export const CardHoverRevealSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-background-primary py-24 lg:py-32 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-primary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-20 relative z-10">
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <motion.div
            className="mb-6 inline-flex items-center rounded-full bg-background-secondary/90 backdrop-blur-xl px-4 py-2 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] border border-border-subtle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.02em] text-text-secondary">Industries We Serve</p>
          </motion.div>
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-6">
            Industries We Serve
          </h2>
          <p className="text-large-paragraph text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover how we deliver innovative solutions across diverse industries, driving digital transformation and business growth.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <CardHoverReveal
                className="h-[480px] w-full rounded-3xl overflow-visible border border-border-subtle bg-background-secondary shadow-[0px_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0px_12px_48px_rgba(0,0,0,0.15)] hover:border-border-subtle/80 transition-all duration-700 ease-out group relative"
              >
                {/* Premium glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl -z-10" />

                <CardHoverRevealMain className="relative overflow-hidden rounded-3xl h-full w-full">
                  <div className="absolute inset-0 z-0">
                    <Image
                      fill
                      alt={`${industry.name} industry`}
                      src={industry.image}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-20`} />

                  {/* Industry number badge */}
                  <div className="absolute top-6 left-6 z-30">
                    <div className="w-12 h-12 rounded-2xl bg-background-secondary/90 backdrop-blur-xl border border-border-subtle/50 shadow-[0px_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-lg font-medium text-text-primary">{String(industry.id).padStart(2, '0')}</span>
                    </div>
                  </div>
                </CardHoverRevealMain>

                <CardHoverRevealContent className="space-y-3 rounded-2xl bg-background-secondary/98 backdrop-blur-2xl border border-border-subtle/80 p-4 lg:p-5 shadow-[0px_12px_48px_rgba(0,0,0,0.15)] z-50 max-w-[90%]">
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-[24px] font-medium leading-[1.3] tracking-[-0.01em] text-text-primary group-hover:translate-x-1 transition-transform duration-500">
                          {industry.name}
                        </h3>
                      </div>
                      <div className="shrink-0 w-8 h-8 rounded-xl bg-text-primary flex items-center justify-center group-hover:rotate-90 transition-transform duration-500 shadow-[0px_2px_8px_rgba(0,0,0,0.2)]">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-sm leading-[1.6] text-text-secondary line-clamp-2">
                      {industry.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-border-subtle">
                    <div>
                      <h4 className="text-[10px] font-semibold text-text-primary uppercase tracking-[0.02em] mb-2 flex items-center gap-1.5">
                        <span className="w-0.5 h-0.5 rounded-full bg-text-primary"></span>
                        Services
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.services.map((service, idx) => (
                          <motion.div
                            key={idx}
                            className="rounded-lg bg-background-secondary px-2.5 py-1 border border-border-subtle hover:bg-background-secondary/80 transition-all duration-300 shadow-[0px_1px_4px_rgba(0,0,0,0.04)]"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="text-[10px] font-medium text-text-primary leading-normal">{service}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-semibold text-text-primary uppercase tracking-[0.02em] mb-2 flex items-center gap-1.5">
                        <span className="w-0.5 h-0.5 rounded-full bg-text-primary"></span>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.technologies.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            className="rounded-lg bg-text-primary px-2.5 py-1 hover:bg-text-primary/90 transition-all duration-300 shadow-[0px_2px_6px_rgba(0,0,0,0.15)]"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="text-[10px] font-medium text-white leading-normal">{tech}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

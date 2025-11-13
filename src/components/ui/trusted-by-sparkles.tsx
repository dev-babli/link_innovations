"use client"

import { motion } from "framer-motion"
import { Sparkles } from "@/components/ui/sparkles"
import { useEffect, useRef, useState } from "react"
import { SiNextdotjs, SiPython, SiDocker, SiGithub } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-text-primary",
    href: "https://nextjs.org"
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-yellow-400",
    href: "https://www.python.org"
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-400",
    href: "https://www.docker.com"
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-orange-400",
    href: "https://aws.amazon.com"
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-text-primary",
    href: "https://github.com"
  },
]

export function TrustedBySparkles() {
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
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-background-primary pb-16">
      <div className="container mx-auto pt-20 pb-4 w-full max-w-5xl px-6 lg:px-20">
        <div
          className={`text-center transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary">
            Technologies We Use
          </h2>

          <div className={`mt-14 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-center group cursor-pointer"
                >
                  <div className="relative w-full h-12 flex items-center justify-center">
                    <IconComponent 
                      className={`w-12 h-12 ${tech.color} filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110`}
                    />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sparkles effect that blends into footer - Reduced size */}
      <div className="relative h-[300px] w-full overflow-visible -mb-32 -mt-8">
        <div className="absolute inset-0 [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,rgba(0,0,0,0.08),transparent_70%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-text-primary/10 bg-background-primary" />
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color="#f97316"
            size={1.5}
            opacity={0.6}
            background="#F5F3EF"
          />
        </div>
      </div>
    </section>
  )
}


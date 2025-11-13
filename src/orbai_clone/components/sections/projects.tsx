"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    tabName: "PROJECT 1",
    projectNumber: "01",
    title: "Workwise — Automated HR Workflow Bot",
    description: "Developed an AI-powered workflow automation bot for onboarding, leave requests, and FAQ handling.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/images/I11kmPYZO5IptYaE3LYgilI1Xk-4.jpeg",
    stats: [
      { value: "40%", label: "Saved admin time" },
      { value: "30%", label: "Improved team output" }
    ]
  },
  {
    id: 2,
    tabName: "PROJECT 2",
    projectNumber: "02",
    title: "Insightify — Real-Time Analytics Platform",
    description: "Created a real-time data analytics dashboard with AI-driven insights to help businesses make smarter, faster decisions.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/images/I11kmPYZO5IptYaE3LYgilI1Xk-4.jpeg",
    stats: [
      { value: "55%", label: "Increased data accuracy" },
      { value: "25%", label: "Reduced reporting time" }
    ]
  },
  {
    id: 3,
    tabName: "PROJECT 3",
    projectNumber: "03",
    title: "ConnectBot — AI-Powered Customer Support",
    description: "Devised a scalable, AI-powered chatbot solution to handle customer inquiries, improving satisfaction and team efficiency.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/images/I11kmPYZO5IptYaE3LYgilI1Xk-4.jpeg",
    stats: [
      { value: "70%", label: "Faster response time" },
      { value: "45%", label: "Higher user satisfaction" }
    ]
  }
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const activeProject = projectsData[activeTab];

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
    <section ref={sectionRef} id="projects" className="w-full bg-background-primary py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-20">
        <div
          className={`mx-auto max-w-3xl text-center mb-12 lg:mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-secondary/80 backdrop-blur-md px-3.5 py-1.5 shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-secondary"><path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <p className="text-xs font-semibold uppercase tracking-[0.02em] text-text-secondary">PROJECTS</p>
            </div>
          </div>
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
            Proven Impact & Results
          </h2>
          <p className="text-large-paragraph text-text-secondary">
            Explore Projects that reflect our AI expertise & real world impact
          </p>
        </div>

        <nav
          className={`flex justify-center gap-2 sm:gap-5 mb-10 transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(index)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${activeTab === index
                  ? 'bg-background-secondary backdrop-blur-md text-text-primary shadow-[0px_2px_8px_rgba(0,0,0,0.06)] border border-border-subtle'
                  : 'bg-transparent text-text-secondary hover:bg-background-secondary/50 border border-transparent'
                }`}
            >
              {project.tabName}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-background-secondary backdrop-blur-xl rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.06)] border border-border-subtle p-6 lg:p-8 max-w-5xl mx-auto transition-all duration-1000 ease-in-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="w-full lg:w-[50%]">
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <Image
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-5">
                <p className="text-sm font-medium text-text-secondary">{activeProject.projectNumber}</p>
                <h3 className="text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-text-primary">
                  {activeProject.title}
                </h3>
                <p className="text-base leading-[1.6] text-text-secondary">
                  {activeProject.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {activeProject.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className="rounded-xl p-4 bg-background-secondary backdrop-blur-md border border-border-subtle shadow-[0px_2px_8px_rgba(0,0,0,0.06)]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    >
                      <h4 className="text-[32px] font-medium text-text-primary leading-none">
                        {stat.value}
                      </h4>
                      <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
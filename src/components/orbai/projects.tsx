"use client";

import { useState } from 'react';
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
  const activeProject = projectsData[activeTab];

  return (
    <section id="projects" className="bg-secondary-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-3.5 py-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground"><path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <p className="text-badge">PROJECTS</p>
            </div>
          </div>
          <h2 className="font-semibold tracking-tight text-primary-text text-[56px] leading-tight" style={{ letterSpacing: '-1.12px' }}>
            Proven Impact & Results
          </h2>
          <p className="mt-6 text-xl text-secondary-text">
            Explore Projects that reflect our AI expertise & real world impact
          </p>
        </motion.div>

        <nav className="flex justify-center gap-2 sm:gap-5 mb-10">
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(index)}
              className={`rounded-lg px-6 py-4 text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-white/80 backdrop-blur-md text-primary-text shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]'
                  : 'bg-transparent text-secondary-text hover:bg-white/50'
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
            className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/40 p-6 lg:p-8 max-w-6xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              <div className="w-full lg:w-[55%]">
                <div className="aspect-square relative overflow-hidden rounded-xl">
                  <Image
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[45%] flex flex-col gap-6">
                <p className="text-sm font-medium text-tertiary-text">{activeProject.projectNumber}</p>
                <h3 className="text-2xl font-semibold text-primary-text leading-tight">
                  {activeProject.title}
                </h3>
                <p className="text-base text-secondary-text leading-relaxed">
                  {activeProject.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {activeProject.stats.map((stat, i) => (
                    <motion.div 
                      key={i} 
                      className="rounded-xl p-6 bg-white/60 backdrop-blur-md border border-white/40"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    >
                      <h4 className="text-[40px] font-semibold text-primary-text leading-none">
                        {stat.value}
                      </h4>
                      <p className="mt-2 text-base text-secondary-text">{stat.label}</p>
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


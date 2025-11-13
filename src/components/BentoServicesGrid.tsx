"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Workflow, 
  BarChart3, 
  MessageCircle
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Cutting-Edge AI",
    description: "Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs.",
    icon: Brain,
    size: "large", // 2x2 - with image
    hasImage: true
  },
  {
    id: 2,
    title: "Automated Workflows",
    description: "Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects.",
    icon: Workflow,
    size: "small", // 1x1 - text only
    hasImage: false
  },
  {
    id: 3,
    title: "Insightful Analytics",
    description: "Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth.",
    icon: BarChart3,
    size: "small", // 1x1 - text only
    hasImage: false
  },
  {
    id: 4,
    title: "AI-Powered Support",
    description: "Enhance customer experience with AI-driven virtual assistants available for support and engagement.",
    icon: MessageCircle,
    size: "large", // 2x2 - with image
    hasImage: true
  }
];

const BentoServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 sm:py-32"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 shadow-sm" style={{ backgroundColor: '#f5f5f5' }}>
            <p className="text-xs font-medium" style={{ color: '#666666' }}>FEATURES</p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6" style={{ color: '#000000' }}>
            All features in 1 tool
          </h2>
          <p className="text-lg leading-8" style={{ color: '#666666' }}>
            Discover features that simplify workflows & grow your business.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`feature-card p-8 cursor-pointer group ${getGridClasses(service.size)}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {service.hasImage ? (
                  // Large card with image layout
                  <div className="flex h-full">
                    <div className="flex-1 pr-6">
                      <div className="feature-card-icon mb-6">
                        <IconComponent />
                      </div>
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                        {service.description}
                      </p>
                    </div>
                    <div className="w-1/2">
                      <div className="feature-card-image h-full min-h-[200px] flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                            <IconComponent className="w-8 h-8" style={{ color: '#666666' }} />
                          </div>
                          <p className="text-xs" style={{ color: '#999999' }}>AI Technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Small card text-only layout
                  <div>
                    <div className="feature-card-icon mb-6">
                      <IconComponent />
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#000000' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                      {service.description}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoServicesGrid;

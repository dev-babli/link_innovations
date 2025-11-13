'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './index';
import { animations } from './animations';

const TestimonialsCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: "Their AI-driven approach helped us reach 40% more customers while reducing our operational costs by 25%. The results speak for themselves.",
      author: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The automation solutions they implemented have transformed our workflow. We're now processing 3x more data with half the manual effort.",
      author: "Michael Rodriguez",
      role: "Operations Director", 
      company: "DataCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Working with LINK AI was a game-changer. Their expertise in AI strategy helped us stay ahead of the competition in our industry.",
      author: "Emily Johnson",
      role: "CTO",
      company: "InnovateLabs",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The chatbot they developed for us handles 80% of customer inquiries automatically. Our customer satisfaction scores have never been higher.",
      author: "David Park",
      role: "Head of Customer Success",
      company: "ServicePro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    animations.fadeUp(sectionRef.current);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section ref={sectionRef} className="bg-secondary py-24 sm:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
            <p className="text-badge">TESTIMONIALS</p>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-primary-text sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-body-large">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-primary-text" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary-text" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="flex justify-center">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      company={testimonial.company}
                      avatar={testimonial.avatar}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary-text w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

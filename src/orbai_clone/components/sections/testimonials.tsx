"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";

const testimonialsData = [
  {
    quote:
      "We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us",
    name: "Brendan",
    title: "Marketing Director at StratIQ",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/images/rL2mn1WNvlJqhxa5RfsgWqkaxg-6.png",
  },
  {
    quote:
      "Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We're already seeing results.",
    name: "Lena M",
    title: "Manager at NovaTech",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/images/BlgeL0EotFTQ0vq42WKucxKVO4-7.png",
  },
  {
    quote:
      "From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction",
    name: "Eli R",
    title: "COO at GridFrame",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/images/LQKuaHoocBNNOUwcuUIayGZ8z8-8.png",
  },
];

const statsData = [
  { value: "100+", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "10+", label: "Years of Experience" },
];

const StarRating = ({ rating = 4, count = 5 }: { rating: number; count?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "fill-[#ffb800] text-[#ffb800]" : "fill-gray-200 text-gray-200"
        }`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="customers" className="bg-secondary py-[100px]">
      <div className="container">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 backdrop-blur-md px-3 py-1.5">
            <Users className="h-4 w-4 text-muted-foreground" />
            <p className="text-[11px] font-medium uppercase tracking-[0.55px] text-muted-foreground">
              CUSTOMERS
            </p>
          </div>
          <h2 className="text-[50px] font-semibold leading-tight text-primary-text">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-[550px] text-lg text-secondary-text">
            Join customers who trust AI to transform their business.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 items-center gap-10 rounded-[30px] border border-white/40 bg-white/60 backdrop-blur-xl p-10 lg:grid-cols-[1fr,536px] shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex h-full flex-col justify-between">
            <h4 className="text-2xl font-normal leading-[1.5] text-[#1a1a1a]">
              Their{' '}
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                AI-driven approach
              </span>{' '}
              helped us{' '}
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                reach the right audience
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                grow faster
              </span>{' '}
              with smarter insights—streamlining our strategy, improving
              engagement, and delivering results we couldn't achieve before.
            </h4>
            <div className="-mb-4 mt-8 text-left">
              <span className="font-serif text-[80px] leading-none text-gray-200">"</span>
            </div>
          </div>
          <div className="relative aspect-[536/384] w-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e25953e-cca1-4430-a145-e4f6fdecb091-orbai-template-framer-website/assets/images/ozpQ1n5ntn1iNwWiM7StpAZO2IM-5.jpeg"
              alt="Atmospheric portrait with motion blur effect"
              fill
              className="rounded-[20px] object-cover"
            />
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col rounded-[30px] border border-white/40 bg-white/60 backdrop-blur-xl p-[30px] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <StarRating rating={4} />
              <p className="mt-5 flex-grow text-base text-secondary-text">
                {testimonial.quote}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-medium text-primary-text">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-tertiary-text">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-10 text-center md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {statsData.map((stat, index) => (
            <div key={index}>
              <p className="text-[60px] font-bold tracking-tight text-primary-text">
                {stat.value}
              </p>
              <p className="mt-1 text-base text-secondary-text">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
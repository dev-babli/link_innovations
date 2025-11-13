"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

const cardContents = [
  {
    title: "Modern Technology Stack",
    description:
      "Built with cutting-edge technologies including React, Next.js, TypeScript, and Tailwind CSS for exceptional performance and developer experience.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-blue-500/10 via-purple-500/10 to-pink-500/10",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our solutions are designed to grow with your business, ensuring scalability and performance as your needs evolve.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-green-500/10 via-teal-500/10 to-cyan-500/10",
  },
  {
    title: "Comprehensive IT Services",
    description:
      "From web development and mobile apps to cloud infrastructure, cybersecurity, and AI solutions—we provide end-to-end IT services tailored to your business needs. Our team combines expertise across multiple domains to deliver integrated solutions that drive growth, enhance security, and optimize operations.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-orange-500/10 via-red-500/10 to-pink-500/10",
  },  
  {
    title: "Expert Team",
    description:
      "Work with experienced professionals who understand your business challenges and deliver solutions that make a difference.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-indigo-500/10 via-purple-500/10 to-pink-500/10",
  },
  {
    title: "Fast Delivery",
    description:
      "We prioritize speed without compromising quality, delivering projects on time while maintaining the highest standards.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-yellow-500/10 via-orange-500/10 to-red-500/10",
  },
]

const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
  image: string
  gradient: string
  index: number
}> = ({
  className = "",
  title,
  description,
  image,
  gradient,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative group border border-gray-100 rounded-2xl p-6 md:p-8 bg-white min-h-[280px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden",
        "flex flex-col justify-between",
        className
      )}
    >
      {/* Background Image */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", gradient, "opacity-50 group-hover:opacity-100 transition-opacity duration-500")} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-[#1a1a1a] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#1a1a1a] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] group-hover:text-[#000000] transition-colors">
          {title}
        </h3>
        <p className="text-[#666666] leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  )
}

export default function RuixenBentoCards() {
  return (
    <section className="relative bg-white border-t border-gray-100 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20v1z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="mx-auto container py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div 
            className="mb-6 inline-flex items-center rounded-full bg-white px-5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-semibold text-[#000000] uppercase tracking-wider">Why Choose Us</p>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] mb-6">
            Built for <span className="bg-gradient-to-r from-[#1a1a1a] to-[#666666] bg-clip-text text-transparent">performance</span>
          </h2>
          <p className="text-lg md:text-xl text-[#666666] max-w-3xl leading-relaxed">
            Link Innovations gives you the tools to build beautiful, high-performing solutions with lightning speed. Each solution is thoughtfully designed to be flexible, scalable, and accessible.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-6">
          <PlusCard {...cardContents[0]} index={0} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} index={1} className="lg:col-span-2 lg:row-span-2" />
          <PlusCard {...cardContents[2]} index={2} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} index={3} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} index={4} className="lg:col-span-2 lg:row-span-1" />
        </div>
      </div>
    </section>
  )
}

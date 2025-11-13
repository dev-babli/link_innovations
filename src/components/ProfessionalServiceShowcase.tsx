"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Code, Smartphone, Cloud, Shield, Database, Bot } from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Custom web solutions built with cutting-edge technologies",
        category: "Development",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
        color: "from-purple-500 to-purple-600",
        iconColor: "bg-purple-500",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
        color: "from-blue-500 to-blue-600",
        iconColor: "bg-blue-500",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        color: "from-green-500 to-green-600",
        iconColor: "bg-green-500",
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Enterprise-grade security solutions and audits",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        color: "from-red-500 to-red-600",
        iconColor: "bg-red-500",
    },
    {
        icon: Database,
        title: "Data Analytics",
        description: "Business intelligence and data-driven insights",
        category: "Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        color: "from-orange-500 to-orange-600",
        iconColor: "bg-orange-500",
    },
    {
        icon: Bot,
        title: "AI Solutions",
        description: "Intelligent automation and AI-powered solutions",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-indigo-600",
        iconColor: "bg-indigo-500",
    },
];

export function ProfessionalServiceShowcase() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-black-100">
            <div className="container">
                <motion.div
                    className="mb-12 md:mb-18 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Digital Excellence
                            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Delivered
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            We deliver enterprise-grade technology solutions that drive measurable business growth.
                            From concept to deployment, we're your strategic technology partner.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {/* Featured Service - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="flex flex-col sm:col-span-2 sm:row-span-2 bg-gradient-to-br from-black-200/80 to-black-300/60 border border-white/10 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden">
                            <div className="relative flex items-center justify-center overflow-hidden">
                                <img
                                    src={services[0].image}
                                    alt={services[0].title}
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
                                        <span className="text-purple-300 font-semibold text-sm">{services[0].category}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col justify-center p-8 md:p-10 lg:p-12 relative z-10">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                        {services[0].title} for
                                        <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                            Dynamic Experiences
                                        </span>
                                    </h3>
                                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                        {services[0].description} Built with cutting-edge technologies and modern development practices.
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Button
                                        title="Explore"
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Explore Solutions
                                    </Button>
                                    <Button
                                        title="Learn more"
                                        variant="link"
                                        className="text-purple-400 hover:text-purple-300 text-lg font-semibold flex items-center gap-1"
                                    >
                                        Learn more
                                        <RxChevronRight className="inline-block" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Other Services Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        {services.slice(1).map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="flex flex-col h-full bg-gradient-to-br from-black-200/60 to-black-300/40 border border-white/10 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden">
                                    <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                                        <div>
                                            <div className="mb-4">
                                                <div className={`${service.iconColor} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <service.icon className="size-7 text-white" />
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 leading-tight">{service.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{service.description}</p>
                                        </div>
                                        <div className="mt-6 flex items-center gap-4">
                                            <Button
                                                title="Discover"
                                                variant="link"
                                                className="text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1"
                                            >
                                                Discover
                                                <RxChevronRight className="inline-block" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

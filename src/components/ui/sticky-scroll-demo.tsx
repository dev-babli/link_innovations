"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

// Link Innovations Technology Solutions Content
const technologyContent = [
    {
        title: "AI-Powered Automation",
        description:
            "Transform your business operations with intelligent automation solutions. Our AI systems learn from your data patterns, optimize workflows, and deliver unprecedented efficiency gains. From process automation to predictive analytics, we help you stay ahead of the competition.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-4">🤖</div>
                    <div className="text-xl font-semibold">AI Automation</div>
                    <div className="text-sm opacity-80 mt-2">Intelligent Solutions</div>
                </div>
            </div>
        ),
    },
    {
        title: "Cloud Infrastructure",
        description:
            "Scale your applications with enterprise-grade cloud solutions. Our cloud infrastructure ensures 99.9% uptime, automatic scaling, and robust security. From AWS to Azure, we architect solutions that grow with your business and adapt to changing demands.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Cloud infrastructure dashboard"
                />
            </div>
        ),
    },
    {
        title: "Mobile App Development",
        description:
            "Create stunning mobile experiences that users love. Our cross-platform development approach ensures your app works flawlessly on iOS and Android. From concept to deployment, we deliver apps that drive engagement and business growth.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-4">📱</div>
                    <div className="text-xl font-semibold">Mobile Apps</div>
                    <div className="text-sm opacity-80 mt-2">Cross-Platform</div>
                </div>
            </div>
        ),
    },
    {
        title: "Data Analytics & Insights",
        description:
            "Unlock the power of your data with advanced analytics and visualization tools. Our data scientists help you discover patterns, predict trends, and make data-driven decisions. Transform raw data into actionable insights that drive business success.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Data analytics dashboard"
                />
            </div>
        ),
    },
];

// Service-Specific Content for Different Pages
const webDevelopmentContent = [
    {
        title: "Modern Web Applications",
        description:
            "Build responsive, fast, and scalable web applications using the latest technologies. Our full-stack development approach ensures your web app delivers exceptional user experiences across all devices and browsers.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-4">🌐</div>
                    <div className="text-xl font-semibold">Web Development</div>
                    <div className="text-sm opacity-80 mt-2">Full-Stack Solutions</div>
                </div>
            </div>
        ),
    },
    {
        title: "Performance Optimization",
        description:
            "Achieve lightning-fast load times and optimal performance. Our optimization strategies include code splitting, lazy loading, CDN integration, and advanced caching techniques that ensure your web app performs at its best.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Team collaboration on web development"
                />
            </div>
        ),
    },
    {
        title: "Security & Compliance",
        description:
            "Protect your web applications with enterprise-grade security measures. We implement OWASP best practices, SSL encryption, secure authentication, and regular security audits to keep your data and users safe.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-4">🔒</div>
                    <div className="text-xl font-semibold">Security First</div>
                    <div className="text-sm opacity-80 mt-2">Enterprise Grade</div>
                </div>
            </div>
        ),
    },
];

const aiAutomationContent = [
    {
        title: "Intelligent Process Automation",
        description:
            "Streamline your business processes with AI-powered automation. Our solutions reduce manual work, eliminate errors, and accelerate decision-making. From document processing to customer service, AI automation transforms how you work.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-4">⚡</div>
                    <div className="text-xl font-semibold">Smart Automation</div>
                    <div className="text-sm opacity-80 mt-2">AI-Powered</div>
                </div>
            </div>
        ),
    },
    {
        title: "Machine Learning Models",
        description:
            "Deploy custom machine learning models that learn from your data. Our ML solutions provide predictive insights, pattern recognition, and automated decision-making capabilities that drive business growth and efficiency.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="AI and machine learning visualization"
                />
            </div>
        ),
    },
    {
        title: "Natural Language Processing",
        description:
            "Enhance customer interactions with advanced NLP capabilities. Our solutions include chatbots, sentiment analysis, language translation, and automated content generation that understand and respond to human language naturally.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-4">💬</div>
                    <div className="text-xl font-semibold">NLP Solutions</div>
                    <div className="text-sm opacity-80 mt-2">Human-Like AI</div>
                </div>
            </div>
        ),
    },
];

// Demo Components
export function TechnologyStickyScrollDemo() {
    return (
        <div className="p-10">
            <StickyScroll content={technologyContent} />
        </div>
    );
}

export function WebDevelopmentStickyScrollDemo() {
    return (
        <div className="p-10">
            <StickyScroll content={webDevelopmentContent} />
        </div>
    );
}

export function AIAutomationStickyScrollDemo() {
    return (
        <div className="p-10">
            <StickyScroll content={aiAutomationContent} />
        </div>
    );
}

// Generic service content generator
export function createServiceStickyContent(serviceName: string, serviceDescription: string) {
    return [
        {
            title: `${serviceName} Solutions`,
            description: serviceDescription,
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-4">🚀</div>
                        <div className="text-xl font-semibold">{serviceName}</div>
                        <div className="text-sm opacity-80 mt-2">Expert Solutions</div>
                    </div>
                </div>
            ),
        },
        {
            title: "Custom Implementation",
            description: `Tailored ${serviceName.toLowerCase()} solutions designed specifically for your business needs. Our expert team works closely with you to understand your requirements and deliver solutions that exceed expectations.`,
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt={`${serviceName} implementation`}
                    />
                </div>
            ),
        },
        {
            title: "Ongoing Support",
            description: `Comprehensive support and maintenance for your ${serviceName.toLowerCase()} solutions. We provide 24/7 monitoring, regular updates, and expert assistance to ensure your systems run smoothly and efficiently.`,
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-4">🛠️</div>
                        <div className="text-xl font-semibold">24/7 Support</div>
                        <div className="text-sm opacity-80 mt-2">Always Here</div>
                    </div>
                </div>
            ),
        },
    ];
}





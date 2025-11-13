"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function AnimatedTestimonialsDemo() {
    return (
        <AnimatedTestimonials
            title="Loved by innovative companies"
            subtitle="Don't just take our word for it. See what our clients have to say about working with Link Innovations."
            badgeText="Client Success Stories"
            testimonials={[
                {
                    id: 1,
                    name: "Sarah Johnson",
                    role: "CTO",
                    company: "TechFlow Solutions",
                    content:
                        "Link Innovations transformed our entire digital infrastructure. Their AI-powered solutions increased our operational efficiency by 300% and reduced costs significantly. The team's expertise is unmatched.",
                    rating: 5,
                    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
                },
                {
                    id: 2,
                    name: "Michael Chen",
                    role: "VP of Engineering",
                    company: "DataCore Systems",
                    content:
                        "We partnered with Link Innovations for our cloud migration and the results exceeded expectations. Zero downtime, improved performance, and a seamless transition. Their DevOps expertise is world-class.",
                    rating: 5,
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
                },
                {
                    id: 3,
                    name: "Emily Rodriguez",
                    role: "Product Director",
                    company: "HealthTech Innovations",
                    content:
                        "Our mobile app went from concept to market leader in just 6 months thanks to Link Innovations. Their agile approach and attention to detail ensured we launched a product our users love.",
                    rating: 5,
                    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
                },
                {
                    id: 4,
                    name: "David Park",
                    role: "CEO",
                    company: "FinanceHub",
                    content:
                        "Security and compliance were our top priorities. Link Innovations delivered a robust platform that not only meets but exceeds industry standards. Their cybersecurity expertise gave us complete peace of mind.",
                    rating: 5,
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
                },
                {
                    id: 5,
                    name: "Jennifer Liu",
                    role: "Head of Digital",
                    company: "RetailPro Global",
                    content:
                        "The e-commerce platform Link Innovations built for us handles millions of transactions seamlessly. Their data analytics integration provides insights we never thought possible. Truly exceptional work.",
                    rating: 5,
                    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=80",
                },
            ]}
            trustedCompanies={["Microsoft", "Google", "Amazon", "Meta", "Oracle"]}
            trustedCompaniesTitle="Trusted by industry leaders worldwide"
        />
    );
}


"use client";

import Masonry from "./Masonry";

const successStories = [
    {
        id: "healthcare-ai",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80",
        url: "/portfolio/healthcare-ai",
        height: 1200,
        title: "AI-Powered Healthcare Platform",
        category: "Healthcare"
    },
    {
        id: "fintech-banking",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&q=80",
        url: "/portfolio/fintech-banking",
        height: 800,
        title: "Secure Banking Solution",
        category: "Finance"
    },
    {
        id: "ecommerce-platform",
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=800&fit=crop&q=80",
        url: "/portfolio/ecommerce",
        height: 1600,
        title: "AI-Driven E-commerce",
        category: "Retail"
    },
    {
        id: "manufacturing-iot",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80",
        url: "/portfolio/manufacturing-iot",
        height: 1000,
        title: "IoT Manufacturing System",
        category: "Manufacturing"
    },
    {
        id: "education-lms",
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&q=80",
        url: "/portfolio/education-lms",
        height: 1200,
        title: "Learning Management Platform",
        category: "Education"
    },
    {
        id: "cloud-migration",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80",
        url: "/portfolio/cloud-migration",
        height: 800,
        title: "Enterprise Cloud Migration",
        category: "Cloud"
    },
    {
        id: "cybersecurity-suite",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=700&fit=crop&q=80",
        url: "/portfolio/cybersecurity",
        height: 1400,
        title: "Advanced Cybersecurity Suite",
        category: "Security"
    },
    {
        id: "data-analytics",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
        url: "/portfolio/data-analytics",
        height: 1000,
        title: "Real-time Analytics Dashboard",
        category: "Data"
    },
    {
        id: "mobile-app-retail",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop&q=80",
        url: "/portfolio/mobile-retail",
        height: 1600,
        title: "Retail Mobile Experience",
        category: "Mobile"
    },
    {
        id: "energy-smart-grid",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80",
        url: "/portfolio/smart-grid",
        height: 1200,
        title: "Smart Energy Grid System",
        category: "Energy"
    },
    {
        id: "ai-automation",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
        url: "/portfolio/ai-automation",
        height: 1000,
        title: "Intelligent Process Automation",
        category: "AI/ML"
    },
    {
        id: "blockchain-supply",
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=700&fit=crop&q=80",
        url: "/portfolio/blockchain",
        height: 1400,
        title: "Blockchain Supply Chain",
        category: "Blockchain"
    },
    {
        id: "agriculture-tech",
        img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80",
        url: "/portfolio/agritech",
        height: 1200,
        title: "Precision Agriculture Platform",
        category: "Agriculture"
    },
    {
        id: "telemedicine",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
        url: "/portfolio/telemedicine",
        height: 1000,
        title: "Telemedicine Solution",
        category: "Healthcare"
    },
    {
        id: "web-app-saas",
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop&q=80",
        url: "/portfolio/saas-platform",
        height: 800,
        title: "Multi-tenant SaaS Platform",
        category: "Web"
    }
];

export default function SuccessStoriesGallery() {
    return (
        <section className="relative w-full bg-gradient-to-b from-gray-950 via-gray-900 to-black py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-sm font-medium text-blue-400">Portfolio Showcase</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Success Stories
                    <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        That Transform Industries
                    </span>
                </h2>

                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                    Explore our portfolio of innovative solutions delivered across
                    <span className="text-white font-semibold"> healthcare</span>,
                    <span className="text-white font-semibold"> finance</span>,
                    <span className="text-white font-semibold"> retail</span>,
                    <span className="text-white font-semibold"> manufacturing</span>, and more.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="text-4xl font-bold text-white mb-2">200+</div>
                        <div className="text-sm text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="text-4xl font-bold text-white mb-2">50+</div>
                        <div className="text-sm text-gray-400">Enterprise Clients</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="text-4xl font-bold text-white mb-2">98%</div>
                        <div className="text-sm text-gray-400">Client Satisfaction</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="text-4xl font-bold text-white mb-2">9</div>
                        <div className="text-sm text-gray-400">Industries Served</div>
                    </div>
                </div>
            </div>

            {/* Masonry Gallery */}
            <div className="container mx-auto px-6 relative z-10" style={{ height: '1200px' }}>
                <Masonry
                    items={successStories}
                    animateFrom="random"
                    duration={0.8}
                    stagger={0.08}
                    scaleOnHover={true}
                    hoverScale={0.98}
                    blurToFocus={true}
                    colorShiftOnHover={true}
                />
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-6 mt-20 text-center relative z-10">
                <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Your Success Story?
                    </h3>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join 50+ leading enterprises who trust us to deliver innovative solutions that transform their businesses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                            View All Projects
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />
        </section>
    );
}



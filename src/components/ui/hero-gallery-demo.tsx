import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

// High-quality technology and business images for Link Innovations with text content
const IMAGES = [
    {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        title: "Team Collaboration",
        description: "Expert developers working together to deliver exceptional solutions"
    },
    {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        title: "Data Analytics",
        description: "Transform your data into actionable insights and business intelligence"
    },
    {
        url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center",
        title: "Mobile Development",
        description: "Native and cross-platform mobile apps that engage and convert users"
    },
    {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        title: "AI Solutions",
        description: "Intelligent solutions that streamline processes and boost productivity"
    },
    {
        url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center",
        title: "Cloud Infrastructure",
        description: "Scalable, secure, and cost-effective cloud solutions for modern businesses"
    }
]

const LinkInnovationsHeroDemo = () => {
    return (
        <ContainerScroll className="h-[350vh] bg-gradient-to-b from-black to-gray-900">
            <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
                {IMAGES.map((image, index) => (
                    <BentoCell
                        key={index}
                        className="overflow-hidden rounded-xl shadow-2xl border border-gray-800/50 group relative"
                    >
                        <img
                            className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            src={image.url}
                            alt={image.title}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `data:image/svg+xml;base64,${btoa(`
                                    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
                                                <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
                                            </linearGradient>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grad)"/>
                                        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em">${image.title}</text>
                                    </svg>
                                `)}`;
                            }}
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                                    {image.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                        {/* Always visible title */}
                        <div className="absolute top-4 left-4 right-4">
                            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                                <h3 className="text-white font-semibold text-sm font-orbitron">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    </BentoCell>
                ))}
            </BentoGrid>

            <ContainerScale className="relative z-10 text-center">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
                        Why Choose Us
                    </h2>
                </div>
                <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white font-orbitron">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                        Digital Innovation
                    </span>
                    <br />
                    <span className="text-white">
                        Redefined
                    </span>
                </h1>
                <p className="my-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
                    Transform your business with cutting-edge technology solutions.
                    From AI automation to cloud infrastructure, we deliver excellence
                    that drives real results. Our proven track record, expert team, and
                    commitment to innovation make us the ideal partner for your digital transformation.
                </p>

                {/* Why Choose Us Content */}
                <div className="my-12 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">Expert Team</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Our certified developers and designers bring years of experience
                                in modern technologies and industry best practices.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">Proven Results</h3>
                            <p className="text-gray-300 leading-relaxed">
                                We've delivered 200+ successful projects with measurable
                                improvements in performance, user experience, and business growth.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">24/7 Support</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Round-the-clock technical support and maintenance to ensure
                                your systems run smoothly and efficiently.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        size="lg"
                    >
                        Start Your Project
                    </Button>
                    <Button
                        variant="outline"
                        className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                        size="lg"
                    >
                        View Our Work
                    </Button>
                </div>
            </ContainerScale>
        </ContainerScroll>
    )
}

const LinkInnovationsHeroDemo2 = () => {
    return (
        <ContainerScroll className="h-[350vh] bg-gradient-to-b from-gray-900 to-black">
            <BentoGrid
                variant={"fourCells"}
                className="sticky left-0 top-0 h-svh w-full p-4"
            >
                {IMAGES.filter((_, index) => index <= 3).map((image, index) => (
                    <BentoCell
                        key={index}
                        className="overflow-hidden rounded-xl shadow-2xl border border-gray-800/50 group relative"
                    >
                        <img
                            className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            width="100%"
                            height="100%"
                            src={image.url}
                            alt={image.title}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `data:image/svg+xml;base64,${btoa(`
                                    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
                                                <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
                                            </linearGradient>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grad)"/>
                                        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em">${image.title}</text>
                                    </svg>
                                `)}`;
                            }}
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                                    {image.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                        {/* Always visible title */}
                        <div className="absolute top-4 left-4 right-4">
                            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                                <h3 className="text-white font-semibold text-sm font-orbitron">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    </BentoCell>
                ))}
            </BentoGrid>
            <ContainerScale className="text-center">
                <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white font-orbitron">
                    <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Technology
                    </span>
                    <br />
                    <span className="text-white">
                        That Works
                    </span>
                </h1>
                <p className="my-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
                    Experience the power of modern development. Our solutions are built
                    for scale, performance, and user experience that converts.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        size="lg"
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="outline"
                        className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                        size="lg"
                    >
                        Learn More
                    </Button>
                </div>
            </ContainerScale>
        </ContainerScroll>
    )
}

const LinkInnovationsHeroDemo3 = () => {
    return (
        <ContainerScroll className="h-[350vh] bg-gradient-to-b from-black via-gray-900 to-black">
            <BentoGrid
                variant={"threeCells"}
                className="sticky left-0 top-0 h-svh w-full p-4"
            >
                {IMAGES.filter((_, index) => index <= 2).map((image, index) => (
                    <BentoCell
                        key={index}
                        className="overflow-hidden rounded-xl shadow-2xl border border-gray-800/50 group relative"
                    >
                        <img
                            className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            width="100%"
                            height="100%"
                            src={image.url}
                            alt={image.title}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `data:image/svg+xml;base64,${btoa(`
                                    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
                                                <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
                                            </linearGradient>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grad)"/>
                                        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em">${image.title}</text>
                                    </svg>
                                `)}`;
                            }}
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                                    {image.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                        {/* Always visible title */}
                        <div className="absolute top-4 left-4 right-4">
                            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                                <h3 className="text-white font-semibold text-sm font-orbitron">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    </BentoCell>
                ))}
            </BentoGrid>
            <ContainerScale className="text-center">
                <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white font-orbitron">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Innovation
                    </span>
                    <br />
                    <span className="text-white">
                        Unleashed
                    </span>
                </h1>
                <p className="my-8 max-w-2xl text-lg md:text-xl text-gray-300/80 leading-relaxed">
                    Push boundaries with technology that adapts, scales, and delivers.
                    Your vision, our expertise, exceptional results.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        size="lg"
                    >
                        Start Building
                    </Button>
                    <Button
                        variant="outline"
                        className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                        size="lg"
                    >
                        Explore Solutions
                    </Button>
                </div>
            </ContainerScale>
        </ContainerScroll>
    )
}

export { LinkInnovationsHeroDemo, LinkInnovationsHeroDemo2, LinkInnovationsHeroDemo3 }




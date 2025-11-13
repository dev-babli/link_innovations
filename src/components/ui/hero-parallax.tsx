"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
            style={{ position: 'relative' }}
        >
            {/* Simplified Background */}
            <div className="absolute inset-0 z-0">
                {/* Simple dark background */}
                <div className="absolute inset-0 bg-black"></div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-accent-indigo/5 to-accent-emerald/5"></div>
            </div>

            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="relative z-10"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
                    <span className="bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-emerald bg-clip-text text-transparent">
                        Our Portfolio of <br /> Innovation
                    </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded-full mb-6"></div>
                <p className="max-w-2xl text-base md:text-lg text-white leading-relaxed font-body">
                    Delivering excellence across industries with cutting-edge technology solutions.
                    We are a team of passionate developers and designers that love to build
                    amazing products that drive real business results.
                </p>
            </motion.div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-80 w-[25rem] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl group-hover/product:shadow-blue-500/30 transition-all duration-500"
            >
                {/* Simplified card wrapper */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 group-hover/product:border-accent-cyan/50 transition-all duration-500">
                    <Image
                        src={product.thumbnail}
                        height="500"
                        width="500"
                        className="object-cover object-center h-full w-full group-hover/product:scale-105 transition-transform duration-500"
                        alt={product.title}
                    />

                    {/* Minimal overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Subtle accent on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-accent-indigo/10 to-accent-emerald/10 opacity-0 group-hover/product:opacity-100 transition-opacity duration-500"></div>
                </div>
            </Link>

            {/* Title - Always visible at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none z-10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover/product:translate-y-0 transition-transform duration-300">
                    {product.title}
                </h2>
                <div className="w-0 group-hover/product:w-24 h-1 bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-emerald rounded-full transition-all duration-500 shadow-lg shadow-accent-cyan/50"></div>
            </div>
        </motion.div>
    );
};

// Link Innovations Portfolio Data
export const portfolioProducts = [
    {
        title: "E-Commerce Platform",
        link: "/portfolio/ecommerce-platform",
        thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Healthcare Management System",
        link: "/portfolio/healthcare-system",
        thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "FinTech Mobile App",
        link: "/portfolio/fintech-app",
        thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "AI-Powered Analytics Dashboard",
        link: "/portfolio/ai-dashboard",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Real Estate Platform",
        link: "/portfolio/real-estate",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "EdTech Learning Platform",
        link: "/portfolio/edtech-platform",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Cloud Migration Solution",
        link: "/portfolio/cloud-migration",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Supply Chain Management",
        link: "/portfolio/supply-chain",
        thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "IoT Monitoring System",
        link: "/portfolio/iot-monitoring",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Blockchain Wallet",
        link: "/portfolio/blockchain-wallet",
        thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Social Media Analytics",
        link: "/portfolio/social-analytics",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Video Conferencing Platform",
        link: "/portfolio/video-conferencing",
        thumbnail: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Project Management Tool",
        link: "/portfolio/project-management",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "CRM System",
        link: "/portfolio/crm-system",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80",
    },
    {
        title: "Cybersecurity Dashboard",
        link: "/portfolio/cybersecurity-dashboard",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop&q=80",
    },
];

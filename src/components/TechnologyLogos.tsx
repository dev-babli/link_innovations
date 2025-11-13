'use client';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGit, SiGithub, SiVercel, SiFigma } from 'react-icons/si';
import LogoLoop from './LogoLoop';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const techLogos = [
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                <SiReact className="text-cyan-400" />
            </motion.div>
        ),
        title: "React",
        href: "https://react.dev"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
                <SiNextdotjs className="text-white" />
            </motion.div>
        ),
        title: "Next.js",
        href: "https://nextjs.org"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgb(96, 165, 250))" }} transition={{ duration: 0.3 }}>
                <SiTypescript className="text-blue-400" />
            </motion.div>
        ),
        title: "TypeScript",
        href: "https://www.typescriptlang.org"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={{ duration: 0.3 }}>
                <SiTailwindcss className="text-cyan-300" />
            </motion.div>
        ),
        title: "Tailwind CSS",
        href: "https://tailwindcss.com"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
                <SiNodedotjs className="text-green-400" />
            </motion.div>
        ),
        title: "Node.js",
        href: "https://nodejs.org"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.3 }}>
                <SiMongodb className="text-green-300" />
            </motion.div>
        ),
        title: "MongoDB",
        href: "https://www.mongodb.com"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgb(147, 197, 253))" }} transition={{ duration: 0.3 }}>
                <SiPostgresql className="text-blue-300" />
            </motion.div>
        ),
        title: "PostgreSQL",
        href: "https://www.postgresql.org"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, y: -8 }} transition={{ duration: 0.3, type: "spring" }}>
                <SiDocker className="text-blue-400" />
            </motion.div>
        ),
        title: "Docker",
        href: "https://www.docker.com"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                <SiGit className="text-orange-400" />
            </motion.div>
        ),
        title: "Git",
        href: "https://git-scm.com"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgb(255, 255, 255))" }} transition={{ duration: 0.3 }}>
                <SiGithub className="text-white" />
            </motion.div>
        ),
        title: "GitHub",
        href: "https://github.com"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
                <SiVercel className="text-white" />
            </motion.div>
        ),
        title: "Vercel",
        href: "https://vercel.com"
    },
    {
        node: (
            <motion.div whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px rgb(192, 132, 252))" }} transition={{ duration: 0.3 }}>
                <SiFigma className="text-purple-400" />
            </motion.div>
        ),
        title: "Figma",
        href: "https://www.figma.com"
    },
];

export default function TechnologyLogos() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="py-16 relative overflow-hidden" ref={ref}>
            {/* Background with Tech Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/98 to-background"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06),transparent_60%)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center rounded-full glass-button px-4 py-2 text-sm font-medium text-white mb-6">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse-glow"></span>
                        Technology Stack
                    </div>
                    <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl mb-4">
                        Built with{' '}
                        <span className="font-normal italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                            Modern Technologies
                        </span>
                    </h2>
                    <p className="text-white max-w-2xl mx-auto">
                        Our solutions are powered by the latest and most reliable technologies
                    </p>
                </motion.div>

                <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={80}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#0a0a0f"
                        ariaLabel="Technology stack"
                        className="dark:[--logoloop-fadeColor:#0a0a0f]"
                    />
                </div>
            </div>
        </section>
    );
}

"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * ✨ SOUMEET'S SIGNATURE MAGIC EFFECTS ✨
 * Premium animations and effects that bring designs to life
 */

// Floating Particles Background
export function MagicParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }> = [];

        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }

        function animate() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }}
        />
    );
}

// Magnetic Button Effect
export function MagneticButton({ children, className = '', ...props }: any) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={buttonRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}

// Shimmer Effect
export function ShimmerCard({ children, className = '' }: any) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {children}
        </div>
    );
}

// Glow Effect on Hover
export function GlowCard({ children, className = '', color = 'purple' }: any) {
    const colors = {
        purple: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]',
        blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
        cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]',
        pink: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]',
    };

    return (
        <motion.div
            className={`transition-all duration-500 ${colors[color as keyof typeof colors]} ${className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {children}
        </motion.div>
    );
}

// Parallax Section
export function ParallaxSection({ children, speed = 0.5, className = '' }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const [offsetY, setOffsetY] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setOffsetY(rect.top * speed);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y: offsetY }}>{children}</motion.div>
        </div>
    );
}

// Gradient Text Animation
export function AnimatedGradientText({ children, className = '' }: any) {
    return (
        <span
            className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient ${className}`}
            style={{
                animation: 'gradient 3s linear infinite',
            }}
        >
            {children}
        </span>
    );
}

// Tilt Effect
export function TiltCard({ children, className = '' }: any) {
    const [transform, setTransform] = React.useState('');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
        setTransform('');
    };

    return (
        <div
            className={`transition-transform duration-300 ${className}`}
            style={{ transform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}

// Spotlight Effect
export function SpotlightCard({ children, className = '' }: any) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={divRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
        >
            {isFocused && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity: isFocused ? 1 : 0,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
                    }}
                />
            )}
            {children}
        </div>
    );
}

// Reveal on Scroll
export function RevealOnScroll({ children, className = '', delay = 0 }: any) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}

// Floating Element
export function FloatingElement({ children, className = '', delay = 0 }: any) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [-10, 10, -10],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Ripple Effect
export function RippleButton({ children, className = '', ...props }: any) {
    const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples([...ripples, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
    };

    return (
        <button
            className={`relative overflow-hidden ${className}`}
            onClick={handleClick}
            {...props}
        >
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/30 animate-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 0,
                        height: 0,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
            {children}
        </button>
    );
}

// Glitch Effect
export function GlitchText({ children, className = '' }: any) {
    return (
        <div className={`relative ${className}`}>
            <span className="relative z-10">{children}</span>
            <span
                className="absolute top-0 left-0 -z-10 animate-glitch"
                style={{ color: 'rgba(0, 255, 255, 0.7)' }}
            >
                {children}
            </span>
            <span
                className="absolute top-0 left-0 -z-10 animate-glitch-2"
                style={{ color: 'rgba(255, 0, 255, 0.7)' }}
            >
                {children}
            </span>
        </div>
    );
}

// Add animations to globals.css
export const magicAnimations = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes ripple {
  to {
    width: 600px;
    height: 600px;
    opacity: 0;
  }
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, -2px); }
  40% { transform: translate(2px, 2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(-2px, 2px); }
}

.animate-ripple {
  animation: ripple 0.6s ease-out;
}

.animate-glitch {
  animation: glitch 0.3s infinite;
}

.animate-glitch-2 {
  animation: glitch-2 0.3s infinite;
  animation-delay: 0.15s;
}
`;


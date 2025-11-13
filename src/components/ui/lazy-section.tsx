"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    threshold?: number;
    rootMargin?: string;
}

export default function LazySection({
    children,
    fallback = <div className="h-96 bg-black/20 animate-pulse rounded-lg" />,
    threshold = 0.1,
    rootMargin = "200px"
}: LazySectionProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { ref, inView } = useInView({
        threshold,
        rootMargin,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView && !isLoaded) {
            // Add a small delay to prevent layout shift
            const timer = setTimeout(() => {
                setIsLoaded(true);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [inView, isLoaded]);

    return (
        <div ref={ref}>
            {isLoaded ? children : fallback}
        </div>
    );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface TransitionSectionProps {
    children: React.ReactNode;
    height?: string;
    background?: string;
    className?: string;
    delay?: number;
}

const TransitionSection: React.FC<TransitionSectionProps> = ({
    children,
    height = 'h-32',
    background = 'bg-gradient-to-br from-gray-900 to-gray-800',
    className = '',
    delay = 0
}) => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={`w-full ${height} ${background} flex items-center justify-center ${className}`}
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                {children}
            </div>
        </motion.section>
    );
};

export default TransitionSection;

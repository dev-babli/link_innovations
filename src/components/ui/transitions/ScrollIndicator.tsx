"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface ScrollIndicatorProps {
    position?: 'top' | 'bottom';
    showText?: boolean;
    className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
    position = 'bottom',
    showText = true,
    className = ''
}) => {
    const scrollProgress = useScrollProgress();

    return (
        <div className={`fixed ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 z-50 ${className}`}>
            {/* Progress Bar */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrollProgress }}
                transition={{ duration: 0.1 }}
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
            />

            {/* Scroll Text */}
            {showText && (
                <motion.div
                    initial={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
                    animate={{ opacity: scrollProgress > 0.1 ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                    <div className="text-white text-sm font-mono">
                        {Math.round(scrollProgress * 100)}%
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ScrollIndicator;

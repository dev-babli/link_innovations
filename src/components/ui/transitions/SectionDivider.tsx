"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
    variant?: 'gradient' | 'solid' | 'dashed' | 'dots';
    color?: string;
    height?: string;
    className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
    variant = 'gradient',
    color = 'from-blue-500 to-purple-500',
    height = 'h-px',
    className = ''
}) => {
    const renderDivider = () => {
        switch (variant) {
            case 'gradient':
                return (
                    <div className={`w-full ${height} bg-gradient-to-r ${color} ${className}`} />
                );
            case 'solid':
                return (
                    <div className={`w-full ${height} bg-gray-300 ${className}`} />
                );
            case 'dashed':
                return (
                    <div className={`w-full ${height} border-t-2 border-dashed border-gray-300 ${className}`} />
                );
            case 'dots':
                return (
                    <div className={`flex justify-center space-x-2 ${className}`}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full" />
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center py-8"
        >
            {renderDivider()}
        </motion.div>
    );
};

export default SectionDivider;

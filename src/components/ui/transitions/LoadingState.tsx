"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingStateProps {
    message?: string;
    showProgress?: boolean;
    progress?: number;
    className?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
    message = "Loading...",
    showProgress = false,
    progress = 0,
    className = ''
}) => {
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-black ${className}`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                {/* Spinner */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                />

                {/* Message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white text-lg mb-4"
                >
                    {message}
                </motion.p>

                {/* Progress Bar */}
                {showProgress && (
                    <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default LoadingState;

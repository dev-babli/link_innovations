'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

// Simple fallback animations (inline JSON)
const aiAnimation = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 100,
    "h": 100,
    "nm": "AI Icon",
    "ddd": 0,
    "assets": [],
    "layers": [
        {
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "AI Brain",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100 },
                "r": {
                    "a": 1, "k": [
                        { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0] },
                        { "t": 60, "s": [360] }
                    ]
                },
                "p": { "a": 0, "k": [50, 50, 0] },
                "a": { "a": 0, "k": [0, 0, 0] },
                "s": { "a": 0, "k": [100, 100, 100] }
            },
            "ao": 0,
            "shapes": [
                {
                    "ty": "gr",
                    "it": [
                        {
                            "d": 1,
                            "ty": "el",
                            "s": { "a": 0, "k": [40, 40] },
                            "p": { "a": 0, "k": [0, 0] },
                            "nm": "Ellipse Path 1",
                            "mn": "ADBE Vector Shape - Ellipse",
                            "hd": false
                        },
                        {
                            "ty": "st",
                            "c": { "a": 0, "k": [0.2, 0.6, 1, 1] },
                            "o": { "a": 0, "k": 100 },
                            "w": { "a": 0, "k": 3 },
                            "lc": 1,
                            "lj": 1,
                            "ml": 4,
                            "bm": 0,
                            "d": [{ "n": "d", "nm": "d", "v": { "a": 0, "k": 0 } }],
                            "nm": "Stroke 1",
                            "mn": "ADBE Vector Graphic - Stroke",
                            "hd": false
                        },
                        {
                            "ty": "tr",
                            "p": { "a": 0, "k": [0, 0], "ix": 2 },
                            "a": { "a": 0, "k": [0, 0], "ix": 1 },
                            "s": { "a": 0, "k": [100, 100], "ix": 3 },
                            "r": { "a": 0, "k": 0, "ix": 6 },
                            "o": { "a": 0, "k": 100, "ix": 7 },
                            "sk": { "a": 0, "k": 0, "ix": 4 },
                            "sa": { "a": 0, "k": 0, "ix": 5 },
                            "nm": "Transform"
                        }
                    ],
                    "nm": "AI Brain",
                    "np": 2,
                    "cix": 2,
                    "bm": 0,
                    "ix": 1,
                    "mn": "ADBE Vector Group",
                    "hd": false
                }
            ],
            "ip": 0,
            "op": 60,
            "st": 0,
            "bm": 0
        }
    ],
    "markers": []
};

const certifiedAnimation = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 100,
    "h": 100,
    "nm": "Certified Icon",
    "ddd": 0,
    "assets": [],
    "layers": [
        {
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "Checkmark",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100 },
                "r": { "a": 0, "k": 0 },
                "p": { "a": 0, "k": [50, 50, 0] },
                "a": { "a": 0, "k": [0, 0, 0] },
                "s": { "a": 0, "k": [100, 100, 100] }
            },
            "ao": 0,
            "shapes": [
                {
                    "ty": "gr",
                    "it": [
                        {
                            "d": 1,
                            "ty": "rc",
                            "s": { "a": 0, "k": [60, 60] },
                            "p": { "a": 0, "k": [0, 0] },
                            "r": { "a": 0, "k": 30 },
                            "nm": "Rectangle Path 1",
                            "mn": "ADBE Vector Shape - Rect",
                            "hd": false
                        },
                        {
                            "ty": "st",
                            "c": { "a": 0, "k": [0, 0.8, 0, 1] },
                            "o": { "a": 0, "k": 100 },
                            "w": { "a": 0, "k": 3 },
                            "lc": 1,
                            "lj": 1,
                            "ml": 4,
                            "bm": 0,
                            "d": [{ "n": "d", "nm": "d", "v": { "a": 0, "k": 0 } }],
                            "nm": "Stroke 1",
                            "mn": "ADBE Vector Graphic - Stroke",
                            "hd": false
                        },
                        {
                            "ty": "tr",
                            "p": { "a": 0, "k": [0, 0], "ix": 2 },
                            "a": { "a": 0, "k": [0, 0], "ix": 1 },
                            "s": { "a": 0, "k": [100, 100], "ix": 3 },
                            "r": { "a": 0, "k": 0, "ix": 6 },
                            "o": { "a": 0, "k": 100, "ix": 7 },
                            "sk": { "a": 0, "k": 0, "ix": 4 },
                            "sa": { "a": 0, "k": 0, "ix": 5 },
                            "nm": "Transform"
                        }
                    ],
                    "nm": "Certified Badge",
                    "np": 2,
                    "cix": 2,
                    "bm": 0,
                    "ix": 1,
                    "mn": "ADBE Vector Group",
                    "hd": false
                }
            ],
            "ip": 0,
            "op": 60,
            "st": 0,
            "bm": 0
        }
    ],
    "markers": []
};

const crmAnimation = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 100,
    "h": 100,
    "nm": "CRM Icon",
    "ddd": 0,
    "assets": [],
    "layers": [
        {
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "Users",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100 },
                "r": { "a": 0, "k": 0 },
                "p": { "a": 0, "k": [50, 50, 0] },
                "a": { "a": 0, "k": [0, 0, 0] },
                "s": { "a": 0, "k": [100, 100, 100] }
            },
            "ao": 0,
            "shapes": [
                {
                    "ty": "gr",
                    "it": [
                        {
                            "d": 1,
                            "ty": "el",
                            "s": { "a": 0, "k": [30, 30] },
                            "p": { "a": 0, "k": [-10, 0] },
                            "nm": "Ellipse Path 1",
                            "mn": "ADBE Vector Shape - Ellipse",
                            "hd": false
                        },
                        {
                            "ty": "st",
                            "c": { "a": 0, "k": [0.2, 0.6, 1, 1] },
                            "o": { "a": 0, "k": 100 },
                            "w": { "a": 0, "k": 3 },
                            "lc": 1,
                            "lj": 1,
                            "ml": 4,
                            "bm": 0,
                            "d": [{ "n": "d", "nm": "d", "v": { "a": 0, "k": 0 } }],
                            "nm": "Stroke 1",
                            "mn": "ADBE Vector Graphic - Stroke",
                            "hd": false
                        },
                        {
                            "ty": "tr",
                            "p": { "a": 0, "k": [0, 0], "ix": 2 },
                            "a": { "a": 0, "k": [0, 0], "ix": 1 },
                            "s": { "a": 0, "k": [100, 100], "ix": 3 },
                            "r": { "a": 0, "k": 0, "ix": 6 },
                            "o": { "a": 0, "k": 100, "ix": 7 },
                            "sk": { "a": 0, "k": 0, "ix": 4 },
                            "sa": { "a": 0, "k": 0, "ix": 5 },
                            "nm": "Transform"
                        }
                    ],
                    "nm": "User 1",
                    "np": 2,
                    "cix": 2,
                    "bm": 0,
                    "ix": 1,
                    "mn": "ADBE Vector Group",
                    "hd": false
                }
            ],
            "ip": 0,
            "op": 60,
            "st": 0,
            "bm": 0
        }
    ],
    "markers": []
};

const growthAnimation = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 100,
    "h": 100,
    "nm": "Growth Icon",
    "ddd": 0,
    "assets": [],
    "layers": [
        {
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "Chart",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100 },
                "r": { "a": 0, "k": 0 },
                "p": { "a": 0, "k": [50, 50, 0] },
                "a": { "a": 0, "k": [0, 0, 0] },
                "s": { "a": 0, "k": [100, 100, 100] }
            },
            "ao": 0,
            "shapes": [
                {
                    "ty": "gr",
                    "it": [
                        {
                            "d": 1,
                            "ty": "rc",
                            "s": { "a": 0, "k": [40, 40] },
                            "p": { "a": 0, "k": [0, 0] },
                            "r": { "a": 0, "k": 5 },
                            "nm": "Rectangle Path 1",
                            "mn": "ADBE Vector Shape - Rect",
                            "hd": false
                        },
                        {
                            "ty": "st",
                            "c": { "a": 0, "k": [0, 0.8, 0, 1] },
                            "o": { "a": 0, "k": 100 },
                            "w": { "a": 0, "k": 3 },
                            "lc": 1,
                            "lj": 1,
                            "ml": 4,
                            "bm": 0,
                            "d": [{ "n": "d", "nm": "d", "v": { "a": 0, "k": 0 } }],
                            "nm": "Stroke 1",
                            "mn": "ADBE Vector Graphic - Stroke",
                            "hd": false
                        },
                        {
                            "ty": "tr",
                            "p": { "a": 0, "k": [0, 0], "ix": 2 },
                            "a": { "a": 0, "k": [0, 0], "ix": 1 },
                            "s": { "a": 0, "k": [100, 100], "ix": 3 },
                            "r": { "a": 0, "k": 0, "ix": 6 },
                            "o": { "a": 0, "k": 100, "ix": 7 },
                            "sk": { "a": 0, "k": 0, "ix": 4 },
                            "sa": { "a": 0, "k": 0, "ix": 5 },
                            "nm": "Transform"
                        }
                    ],
                    "nm": "Growth Chart",
                    "np": 2,
                    "cix": 2,
                    "bm": 0,
                    "ix": 1,
                    "mn": "ADBE Vector Group",
                    "hd": false
                }
            ],
            "ip": 0,
            "op": 60,
            "st": 0,
            "bm": 0
        }
    ],
    "markers": []
};

interface LottieIconProps {
    className?: string;
    size?: number;
    loop?: boolean;
    autoplay?: boolean;
    speed?: number;
    style?: React.CSSProperties;
}

// AI/Artificial Intelligence Icon
export const AIIcon = ({
    className = "",
    size = 48,
    loop = true,
    autoplay = true,
    speed = 1,
    style = {}
}: LottieIconProps) => (
    <motion.div
        className={className}
        style={{
            width: size,
            height: size,
            ...style
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Lottie
            animationData={aiAnimation}
            loop={loop}
            autoplay={autoplay}
            // speed={speed}
            style={{ width: '100%', height: '100%' }}
        />
    </motion.div>
);

// Certified/Quality Icon
export const CertifiedIcon = ({
    className = "",
    size = 48,
    loop = true,
    autoplay = true,
    speed = 1,
    style = {}
}: LottieIconProps) => (
    <motion.div
        className={className}
        style={{
            width: size,
            height: size,
            ...style
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Lottie
            animationData={certifiedAnimation}
            loop={loop}
            autoplay={autoplay}
            // speed={speed}
            style={{ width: '100%', height: '100%' }}
        />
    </motion.div>
);

// CRM/Customer Management Icon
export const CRMIcon = ({
    className = "",
    size = 48,
    loop = true,
    autoplay = true,
    speed = 1,
    style = {}
}: LottieIconProps) => (
    <motion.div
        className={className}
        style={{
            width: size,
            height: size,
            ...style
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Lottie
            animationData={crmAnimation}
            loop={loop}
            autoplay={autoplay}
            // speed={speed}
            style={{ width: '100%', height: '100%' }}
        />
    </motion.div>
);

// Growth/Analytics Icon
export const GrowthIcon = ({
    className = "",
    size = 48,
    loop = true,
    autoplay = true,
    speed = 1,
    style = {}
}: LottieIconProps) => (
    <motion.div
        className={className}
        style={{
            width: size,
            height: size,
            ...style
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Lottie
            animationData={growthAnimation}
            loop={loop}
            autoplay={autoplay}
            // speed={speed}
            style={{ width: '100%', height: '100%' }}
        />
    </motion.div>
);

// Generic Lottie Icon Component for custom animations
export const LottieIcon = ({
    animationData,
    className = "",
    size = 48,
    loop = true,
    autoplay = true,
    speed = 1,
    style = {}
}: LottieIconProps & { animationData: any }) => (
    <motion.div
        className={className}
        style={{
            width: size,
            height: size,
            ...style
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Lottie
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            // speed={speed}
            style={{ width: '100%', height: '100%' }}
        />
    </motion.div>
);

// Icon mapping for easy access
export const LottieIcons = {
    ai: AIIcon,
    certified: CertifiedIcon,
    crm: CRMIcon,
    growth: GrowthIcon,
};

// Service-specific icon mapping
export const ServiceIcons = {
    'artificial-intelligence': AIIcon,
    'ai': AIIcon,
    'machine-learning': AIIcon,
    'certified': CertifiedIcon,
    'quality': CertifiedIcon,
    'crm': CRMIcon,
    'customer-management': CRMIcon,
    'growth': GrowthIcon,
    'analytics': GrowthIcon,
    'business-growth': GrowthIcon,
};


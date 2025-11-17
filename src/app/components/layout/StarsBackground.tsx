"use client";
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface StarBackgroundProps {
    children: React.ReactNode;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ children }) => {
    const stars = useMemo(() => Array.from({ length: 300 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.5 + 0.2,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
    })), []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Render stars */}
            <div className="absolute inset-0">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute text-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            fontSize: `${star.size * 8}px`,
                        }}
                        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.5, 0.8] }}
                        transition={{
                            delay: star.delay,
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        ★
                    </motion.div>
                ))}
            </div>
            {/* Render children content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export default StarBackground;

            

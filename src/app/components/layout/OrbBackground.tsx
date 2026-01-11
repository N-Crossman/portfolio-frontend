"use client";
import React, { useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface OrbBackgroundProps {
    children: React.ReactNode;
}

export default function OrbBackground({ children }: OrbBackgroundProps) {
    const [sizeMultiplier, setSizeMultiplier] = useState(1);
    const [opacityMultiplier, setOpacityMultiplier] = useState(1);

    useEffect(() => {
        const width = window.innerWidth;
        if (width >= 2560) {
            setSizeMultiplier(1.8);
            setOpacityMultiplier(2);
        } else if (width >= 1920) {
            setSizeMultiplier(1.5);
            setOpacityMultiplier(1.8);
        } else if (width < 768) {
            setSizeMultiplier(1.6);
            setOpacityMultiplier(2.5);
        } else {
            setSizeMultiplier(1);
            setOpacityMultiplier(1);
        }
    }, []);

    const orbs = useMemo(() => Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 200 - 50,
        baseSize: Math.random() * 6 + 3,
        duration: Math.random() * 10 + 15, 
        delay: 0,
        baseOpacity: Math.random() * 0.4 + 0.3,
        color: [
            "rgb(100, 150, 255)", 
            "rgb(120, 140, 200)",
            "rgb(130, 180, 170)",
            "rgb(180, 150, 200)",
        ][i % 4],
    })), []); 

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-stone-200">
            <div className="absolute inset-0">
                {orbs.map((orb) => (
                    <motion.div
                        key={orb.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${orb.x}%`,
                            top: `${orb.y}%`,
                            width: orb.baseSize * sizeMultiplier,
                            height: orb.baseSize * sizeMultiplier,
                            backgroundColor: orb.color,
                            opacity: orb.baseOpacity * opacityMultiplier,
                        }}
                        animate={{
                            y: [0, -150, -300, -450, -600],
                            x: [0, Math.random() * 15 - 7.5, Math.random() * 15 - 7.5, 0, 0],
                            opacity: [
                                orb.baseOpacity * opacityMultiplier, 
                                orb.baseOpacity * opacityMultiplier, 
                                orb.baseOpacity * opacityMultiplier * 0.8, 
                                orb.baseOpacity * opacityMultiplier * 0.5,
                                0
                            ],
                        }}
                        transition={{
                            duration: orb.duration,
                            delay: orb.delay,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">{children}</div>
        </div>
    );
}
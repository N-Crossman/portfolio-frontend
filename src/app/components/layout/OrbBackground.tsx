"use client";
import React, { useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface OrbBackgroundProps {
    children: React.ReactNode;
}

export default function OrbBackground({ children }: OrbBackgroundProps) {
    const [opacityMultiplier, setOpacityMultiplier] = useState(1);

    useEffect(() => {
        const width = window.innerWidth;
        if (width >= 2560) {
            setOpacityMultiplier(1.8); 
        } else if (width >= 1920) {
            setOpacityMultiplier(1.5); 
        } else {
            setOpacityMultiplier(1);
        }
    }, []);

    const orbs = useMemo(() => Array.from({ length: 20 }, (_, i) => {
        const patterns = [
            { x: ["-40%", "40%", "-40%"], y: ["-30%", "30%", "-30%"] },
            { x: ["-30%", "50%", "-30%"], y: ["-40%", "20%", "-40%"] },
            { x: ["-50%", "30%", "-50%"], y: ["-20%", "40%", "-20%"] },
            { x: ["-35%", "35%", "-35%"], y: ["-35%", "35%", "-35%"] },
        ];
        
        return {
            id: i,
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
            sizeVw: Math.random() * 20 + 25,
            duration: Math.random() * 3 + 4, 
            delay: Math.random() * 2,
            baseOpacity: [0.22, 0.22, 0.22, 0.22][i % 4],
            colorBase: [
                "100, 150, 255", 
                "150, 120, 255",
                "100, 200, 180",
                "255, 160, 120",
            ][i % 4],
            pattern: patterns[i % 4],
        };
    }), []); 

    return (
     <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-visible">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.sizeVw}vw`,
              height: `${orb.sizeVw}vw`,
              background: `radial-gradient(circle, rgba(${orb.colorBase}, ${orb.baseOpacity * opacityMultiplier}) 0%, transparent 70%)`,
              filter: "blur(60px)",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: orb.pattern.x, 
              y: orb.pattern.y,
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
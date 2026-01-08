"use client";
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface OrbBackgroundProps {
    children: React.ReactNode;
}

export default function OrbBackground({ children }: OrbBackgroundProps) {
    const orbs = useMemo(() => Array.from({ length: 20 }, (_, i) => {
        const patterns = [
            { x: ["-40%", "40%", "-40%"], y: ["-30%", "30%", "-30%"] },
            { x: ["-30%", "50%", "-30%"], y: ["-40%", "20%", "-40%"] },
            { x: ["-50%", "30%", "-50%"], y: ["-20%", "40%", "-20%"] },
            { x: ["-35%", "35%", "-35%"], y: ["-35%", "35%", "-35%"] },
        ];
        
        return {
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 400 + 300,
            duration: Math.random() * 3 + 4, 
            delay: Math.random() * 2,
            color: [
                "rgba(100, 150, 255, 0.27)", 
                "rgba(150, 120, 255, 0.27)",
                "rgba(100, 200, 180, 0.27)",
                "rgba(255, 160, 120, 0.27)",
            ][i % 4],
            pattern: patterns[i % 4],
        };
    }), []); 

    return (
     <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              filter: "blur(60px)", 
            }}
            animate={{
              x: orb.pattern.x, 
              y: orb.pattern.y,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import OrbBackground from "./OrbBackground";
import StarsBackground from "./StarsBackground";

export default function BackgroundSwitcher({ children }: { children: React.ReactNode }) {

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return resolvedTheme === "dark" ? (
        <StarsBackground>
            {children}
        </StarsBackground>
    ) : (
        <OrbBackground>
            {children}
        </OrbBackground>
    );
}
    
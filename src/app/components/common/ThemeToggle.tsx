"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => 
        setMounted(true), []);

    if (!mounted) return null;

    const isDark = theme === "dark";

return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <FaLightbulb className="w-5 h-5 text-yellow-400" />
      ) : (
        <FaLightbulb className="w-5 h-5 text-gray-700" />
      )}
    </motion.button>
  );
}
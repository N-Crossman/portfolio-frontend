export interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    demo?: string;
    repo?: string;
    repos?: string[];
    type?: string;
}

export const projects: Project[] = [
    {
    title: "AGInfrastructure",
    description: "Active contributor driving quality improvements across AGI-X framework. Shipped frontend features for timezone and user management, implemented comprehensive test suites, and resolved blocking issues affecting developer experience.",
    image: "/images/projects/placeholder.png",
    tech: ["Next.js", "React", "TypeScript", "Python", "Tailwind", "FastAPI"],
    repos: [
        "https://github.com/JamesonRGrieve/ClientFramework",
        "https://github.com/JamesonRGrieve/ServerFramework"
    ],
    type: "opensource",
  },
  {
    title: "Coming Soon",
    description: "Exciting things are on the way 🚀",
    image: "/images/projects/placeholder.png",
    tech: ["React", "Framer Motion"],
  },
  {
    title: "Coming Soon",
    description: "More projects coming soon 👨‍💻",
    image: "/images/projects/placeholder.png",
    tech: ["JavaScript", "Node.js"],
  },
];
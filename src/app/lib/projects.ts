export interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    demo?: string;
    repo?: string;
}

export const projects: Project[] = [
    {
    title: "Coming Soon",
    description: "This project is under construction. Stay tuned!",
    image: "/images/projects/placeholder.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
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
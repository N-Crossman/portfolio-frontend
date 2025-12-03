import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDotnet,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-5xl text-orange-600" /> },
    { name: "CSS3", icon: <SiCss3 className="text-5xl text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-5xl text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-700" /> },
    { name: "Python", icon: <SiPython className="text-5xl text-yellow-400" /> },
    { name: "C#", icon: <SiDotnet className="text-5xl text-purple-600" /> },
    { name: "Django", icon: <SiDjango className="text-5xl text-green-800" /> },
    { name: "React", icon: <SiReact className="text-5xl text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-black dark:text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-5xl text-green-600" /> },
    { name: "Docker", icon: <SiDocker className="text-5xl text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-teal-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-5xl text-blue-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-blue-800" /> },
    { name: "Git", icon: <SiGit className="text-5xl text-red-600" /> },
    { name: "GitHub", icon: <SiGithub className="text-5xl text-black dark:text-white" /> },
  ];

  return (
    <section id="skills" className="w-full max-w-4xl mx-auto text-center mt-8 px-4">
      <h2 className="text-black dark:text-white text-3xl sm:text-4xl md:text-4xl font-extrabold mb-10">Skills</h2>

      <div className="grid grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-2 hover:scale-110 transition-transform"
          >
            {skill.icon}
            <p className="mt-1 text-sm text-black dark:text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
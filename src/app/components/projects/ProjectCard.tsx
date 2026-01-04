import Image from "next/image";
import { Project } from "../../lib/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index}: ProjectCardProps){
    return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2, 
        ease: "easeOut",
      }}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      <div className="relative w-full h-48">
        <Image
          src={project.image || "/images/projects/placeholder.png"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm flex-grow">{project.description}</p>

        {project.tech && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-neutral-800 text-gray-300 text-xs px-2 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-4 items-center">
          {project.repos && project.repos.length > 0 ? (
            <div className="flex gap-4">
              {project.repos.map((repoUrl: string, idx: number) => (
                <a
                  key={idx}
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 dark:hover-text-green-400 transition-colors duration-300 text-lg flex items-center gap-1"
                  title={repoUrl.includes('Client') ? 'Client Repo' : 'Server Repo'}
                >
                  <FaGithub />
                  <span className="text-xs text-gray-500">
                    {repoUrl.includes('Client') ? 'Client' : 'Server'}
                  </span>
                </a>
              ))}
            </div>
          ) : project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-lg"
              title="GitHub Repo"
            >
              <FaGithub />
            </a>
          ) : null}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-lg"
              title="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
"use client";
import { motion } from "framer-motion";
import Heading from "./Heading";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript, SiDocker, SiShadcnui  } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/mockdata";


const Projects = () => {
  return (
    <section id="projects" className="relative flex flex-col py-20 md:py-28">
      <Heading data="PORTFOLIO" />
      <div className="flex justify-between">
        <motion.div
          className="flex flex-col  lg:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h3 className="mb-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="projects_heading">Projects</span>
          </h3>
          <p className="text-white/40 text-lg md:text-base cursor-default">
            A showcase of production-grade apps and platforms I've engineered.
          </p>
        </motion.div>
      </div>
      <div className="gap-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

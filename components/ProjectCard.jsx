"use client";
import { motion } from "framer-motion";
import { FaNetworkWired } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const BackgroundIcon = project.image;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        rotateX: 4,
        rotateY: 4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      viewport={{
        once: true,
        amount: 0.8,
      }}
      
      className="projectCard p-6 flex flex-col group border border-transparent hover:border-blue-400/30 transition-colors duration-300"
    >
      <div className="absolute -bottom-6 -right-6 text-[12rem] text-white opacity-[0.03] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-700 pointer-events-none z-0">
        <BackgroundIcon />
      </div>

      <div className="absolute -bottom-20 -right-2 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="flex justify-between items-start mb-6 relative">
        <div className="flex gap-2 items-center  ">
          {project?.technologies?.map(({ Icon, color }, index) => (
            <Icon key={index} size={32} color={color} className="px-1" />
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 border border-white/10 px-2.5 py-1 rounded-full">
          {project?.type}
        </span>
      </div>

      <h4 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-blue-400">
        {project?.title}
      </h4>

      <p className="text-white/50  leading-relaxed mb-6 font-medium">
        {project?.description}
      </p>
      <div className="relative z-10 mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors flex items-center justify-between gap-3">
        <a
          href={project?.githubLink}
          target="_blank"
          rel="noreferrer"
          className=" inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold"
          aria-label={project?.title}
        >
          <span>Github</span>
          <div className=" h-8  flex items-center justify-center  text-white ">
            <FiArrowUpRight />
          </div>
        </a>
        <a
          href={project?.link}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold"
          aria-label={project?.title}
        >
          <span>Live</span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center  text-white ">
            <FiArrowUpRight />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

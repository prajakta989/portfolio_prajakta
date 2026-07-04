"use client";
import { motion } from "framer-motion";
import Heading from "./Heading";
import { SiReact } from "react-icons/si";
import { icons } from "@/data/mockdata";

const Skills = () => {
  return (
    <section id="projects" className="relative flex flex-col py-20 md:py-28">
      <Heading data="SKILLS" />
      <div className="grid lg:grid-cols-5 gap-6 py-4">
        <div className="lg:col-span-2  flex flex-col justify-between">
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
              Expertise & <span className="projects_heading">Tech Stack</span>
            </h3>
            <p className="text-white/40 text-lg md:text-base cursor-default">
              These are the tools and technologies that I use daily to develop
              web applications. With a strong foundation in frontend. I focus on
              delivering clean, maintainable code and intuitive user
              experiences.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="lg:col-span-3  grid grid-cols-3 gap-6 place-items-center lg:pl-20"
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
          {icons.map(({ Icon, color }, index) => (
            <Icon key={index} size={50} color={color} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

"use client";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiDocker,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { Button } from "@/components/ui/button";

const icons = [
  { Icon: SiJavascript, color: "#47A248" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiExpress, color: "#FFFFFF" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiDocker, color: "#4479A1" },
  { Icon: SiMysql, color: "#61DAFB" },
  { Icon: SiPython, color: "#3776AB" },
];

const About = () => {
  return (
    <section id="about" className="relative flex flex-col  md:mt-2">
      <div className="relative z-10 max-w-7xl mx-auto  w-full">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-20 h-1.25 rounded-full mb-4 bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-400 origin-left"
        />
        <motion.h1
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
          className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent uppercase mb-3 tracking-[0.3em]   text-2xl font-bold text-xs md:text-2xl"
        >
          About Me
        </motion.h1>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 py-4">
        <div className="lg:col-span-3  flex flex-col justify-between ">
          <motion.div
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
            className="card card-glow lg:col-span-3 py-10 flex flex-col justify-between min-h-[420px]"
          >
            {/* Top */}
            <div className="flex px-6 flex-col">
              <h1
                className="font-display mb-4 text-2xl font-bold text-white"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  lineHeight: 1.1,
                }}
              >
                I build responsive and user-focused web experience.
              </h1>
              <p className="leading-relaxed mb-8 max-w-md text-white/70 text-base">
                I'm&apos; a{" "}
                <strong className="font-extrabold">Frontend Engineer </strong>
                passionate about creating modern, performant, and visually
                engaging web applications. My expertise lies in React, Next.js,
                TypeScript, and Tailwind CSS, where I focus on transforming
                ideas into intuitive digital experiences.<br></br>
                Over the past year, I've built projects ranging from business
                websites to full-stack web applications, emphasizing clean code,
                responsive design, and seamless user experiences. I enjoy
                solving UI challenges, optimizing performance, and crafting
                interfaces that feel both functional and polished.<br></br> As a
                developer, I'm constantly learning new technologies and refining
                my skills to stay aligned with modern web development practices.
                My goal is to build products that not only look great but also
                deliver real value to users.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2 flex  flex-1 items-start">
          <motion.div
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
            className="card card-glow p-7 "
          >
            <div className="flex items-center justify-between mb-4 py-6">
              <div className="overflow-hidden w-full">
                <motion.div
                  className="flex gap-8 w-max"
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {icons.map(({ Icon, color }, index) => (
                    <Icon key={index} size={32} color={color} />
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="flex items-center justify-center pt-4">
              <Button
                variant="outline"
                className="text-white text-center px-6  rounded-full "
              >
                <span className="text-bold text-2xl">Core Stack</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

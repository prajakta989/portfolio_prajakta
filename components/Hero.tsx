"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const stats = [
  { val: "1+", label: "Years Exp." },
  { val: "12+", label: "Projects" },
  { val: "5+", label: "Technologies" },
  { val: "10+", label: "Happy Clients" },
];

const techIcons = [
  { src: "/icons/react.svg", x: "45%", y: "-10%" },
  { src: "/icons/next.svg", x: "20%", y: "-8%" },
  { src: "/icons/tailwind.svg", x: "70%", y: "-8%" },
  { src: "/icons/typescript.svg", x: "5%", y: "10%" },
  { src: "/icons/javascript.svg", x: "85%", y: "10%" },
  // { src: "/icons/framer.svg", x: "50%", y: "80%" },
];

const Hero = () => {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" className="relative min-h-screen flex items-center ">
      <div className="relative z-10 max-w-7xl mx-auto  w-full">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* main hero card col span 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            // className="card card-glow  lg:col-span-3 p-10 flex flex-col justify-between min-h-[420px]"
            className="lg:col-span-3  flex flex-col justify-between min-h-[420px]"
          >
            <div>
              <h1
                className="font-display mb-6"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                <span className="text-white">Hi! I'm Prajakta</span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                  Frontend Engineer
                </span>
                <br />
              </h1>
              <p
                className="text-sm leading-relaxed mb-8 max-w-md"
                style={{ color: "var(--muted)" }}
              >
                I&apos;m a Frontend Engineer specializing in building modern,
                responsive and performant web applications with React, Next.js
                and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => go("projects")}
                  className="btn btn-purple"
                >
                  View My Work <ArrowRight size={15} />
                </button>
                <div className="flex gap-4 items-center px-4">
                  {/* <FaGithub className="hover:text-blue-500 transition-colors cursor-pointer" size={30} /> */}
                  <a
                    href="https://github.com/prajakta989/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors cursor-pointer">
                    <FaGithub size={30} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prajakta-naik-317760144/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors cursor-pointer">
                    <FaLinkedin size={30} />
                  </a>
                  <CiMail
                    className="hover:text-red-500 transition-colors cursor-pointer"
                    size={30}
                  />
                </div>
              </div>
            </div>
            <motion.button
              onClick={() => go("about")}
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-2 mt-10"
              style={{ color: "var(--muted2)", fontSize: "0.75rem" }}
            >
              <ChevronDown size={14} /> Scroll Down
            </motion.button>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-6 relative">
            {/* Glow layer — same animation as the image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                inset: "-200px -120px 40px -120px",
                // background: `
                //   radial-gradient(
                //     ellipse 120% 55% at 50% 50%,
                //     rgba(91,84,255,0.25) 0%,
                //     transparent 70%
                //   ),
                //   radial-gradient(
                //     ellipse 180% 80% at 50% 50%,
                //     rgba(91,84,255,0.12) 0%,
                //     transparent 85%
                //   )
                // `,
              }}
            />

            {/* Image layer */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1 relative z-10 "
            >
              <Image
                src="/hero_image4.png"
                alt="Frontend Developer"
                width={800}
                height={800}
                className="max-w-full h-auto"
                priority
              />
            </motion.div>

            {/* floating icons */}
            {techIcons.map((icon, index) => (
              <motion.div
                key={icon.src}
                className="absolute"
                style={{
                  left: icon.x,
                  top: icon.y,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  opacity: {
                    delay: index * 0.3,
                    duration: 0.5,
                  },
                  scale: {
                    delay: index * 0.3,
                    duration: 0.5,
                  },
                  // y: {
                  //   delay: index * 0.3,
                  //   duration: 3,
                  //   repeat: Infinity,
                  //   ease: "easeInOut",
                  // },
                }}
              >
                <Image
                  src={icon.src}
                  alt=""
                  width={40}
                  height={40}
                  className="drop-shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client"
import { motion } from "framer-motion";

const Heading = ({data}) => {
  return (
    <div>
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
          {data}
        </motion.h1>
      </div>
    </div>
  );
};

export default Heading;

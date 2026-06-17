"use client";
import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { timelineData } from "@/data/mockdata";

const Timelinesection = () => {
  return (
    <section
      id="experience"
      className="relative flex flex-col  md:mt-2"
      style={{ opacity: "1" }}
    >
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
          className="w-[80px] h-[5px] rounded-full mb-4 bg-gradient-to-b
               from-yellow-400
               via-orange-500
               to-yellow-400"
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
          className="bg-gradient-to-b
               from-yellow-400
               via-orange-500
               to-yellow-400 bg-clip-text text-transparent uppercase mb-3 tracking-[0.3em]   text-xl font-bold text-xs md:text-2xl"
        >
          Timeline
        </motion.h1>
      </div>
      <div className="w-full  sticky top-32">
        <div className="flex flex-col lg:flex-row gap-12 ">
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
              Experience &{" "}
              <span
                className="bg-gradient-to-b
               from-yellow-400
               via-orange-500
               to-yellow-400 bg-clip-text text-transparent"
              >
                Education
              </span>
            </h3>
            <p className="text-white/40 text-lg md:text-base cursor-default">
              My formal path in professional tech roles and computer science.
            </p>
          </motion.div>

          <div className="w-full md:w-2/3 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-white/10 before:rounded-full py-4">
            <div className="absolute top-0 left-5 md:left-1/2 w-1.5 bg-gradient-to-b from-amber-400 via-orange-500 to-yellow-500 -translate-x-[2.5px] md:-translate-x-1/2 z-0 rounded-full"></div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute top-0 left-5 md:left-1/2 w-1.5 bg-gradient-to-b from-amber-400 via-orange-500 to-yellow-500 -translate-x-[2.5px] md:-translate-x-1/2 z-0 rounded-full"
            />
            {timelineData.map((item, index) => (
              <TimelineCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timelinesection;

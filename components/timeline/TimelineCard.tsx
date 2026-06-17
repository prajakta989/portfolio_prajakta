// "use client";
// import { PiBagSimple } from "react-icons/pi";

// const TimelineCard = () => {
//   return (
//     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group z-10 w-full mb-8">
//       <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(251,146,60,0.5)] group-hover:bg-amber-500/20 group-hover:shadow-[0_0_25px_rgba(251,146,60,0.8)] bg-[#050505] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 relative z-20">
//         <PiBagSimple />
//       </div>
//       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-5 md:p-6 rounded-[8px] relative border-l-2 border-l-transparent group-hover:border-l-amber-400 transition-all duration-500 shadow-xl ">
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[8px] duration-500 "></div>
//         <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-3xl "></div>
//         <span className="font-mono text-xs md:text-sm text-amber-400 mb-2 block relative z-10 font-bold tracking-wide">
//           May 2026 – Present
//         </span>
//         <h4 className="text-lg md:text-xl font-bold text-white mb-2 relative z-10">
//           Elite Project Analyst — Instat Ice Hockey
//         </h4>
//         <span className="text-sm text-white/70 block mb-3 relative z-10 font-medium">
//           Hudl · Sports Analytics
//         </span>
//         <p className="text-xs md:text-sm text-white/50 leading-relaxed relative z-10">
//           Analyze and tag professional ice hockey matches using Hudl Instat
//           methodologies, delivering accurate event and performance data for
//           teams, coaches, and analysts. Maintain strict quality, consistency,
//           and data accuracy that feed performance analysis and decision-making.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TimelineCard;

"use client";

import { PiBagSimple } from "react-icons/pi";
import { motion } from "framer-motion";
import { TimelineItem } from "@/types/index";

interface TimelineCardProps {
  item: TimelineItem;
}

const TimelineCard = ({ item }: TimelineCardProps) => {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group z-10 w-full mb-8">
      {/* Timeline Icon */}
      <div
        className="
          flex items-center justify-center
          w-12 h-12
          rounded-full
          border-2 border-amber-500/50
          text-amber-400
          bg-[#050505]
          shadow-[0_0_15px_rgba(251,146,60,0.5)]
          group-hover:bg-amber-500/20
          group-hover:shadow-[0_0_25px_rgba(251,146,60,0.8)]
          transition-all duration-300
          shrink-0
          md:order-1
          md:group-odd:-translate-x-1/2
          md:group-even:translate-x-1/2
          relative
          z-20
        "
      >
        <PiBagSimple size={20} />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="
          w-[calc(100%-5rem)
          md:w-[277px]
          relative
          overflow-hidden
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-5 md:p-6
          transition-all duration-500
          group-hover:border-amber-400/50
          group-hover:shadow-[0_0_30px_rgba(251,191,36,0.20)]
        "
      >
        {/* Glow Overlay */}
        <div
          className="
            absolute inset-0
            rounded-2xl
            bg-gradient-to-r
            from-amber-500/0
            via-amber-500/5
            to-amber-500/10
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
        />

        {/* Orb Glow */}
        <div
          className="
            absolute
            -top-10
            -right-10
            w-28
            h-28
            rounded-full
            bg-amber-500/20
            blur-[50px]
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-700
            pointer-events-none
          "
        />

        {/* Shine Sweep */}
        <div
          className="
            absolute inset-0
            rounded-2xl
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            -translate-x-full
            group-hover:translate-x-full
            transition-transform duration-1000 ease-in-out
            pointer-events-none
          "
        />

        {/* Content */}
        <span className="font-mono text-xs md:text-sm text-amber-400 font-bold tracking-wide block mb-2 relative z-10">
          {item.date} – Present
        </span>

        <h4 className="text-lg md:text-xl font-bold text-white mb-2 relative z-10">
          {item.title}
        </h4>

        <span className="text-sm text-white/70 font-medium block mb-3 relative z-10">
          {item.company}
        </span>

        <p className="text-sm text-white/50 leading-relaxed relative z-10">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export default TimelineCard;

"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "DEVELOP",
  "CREATE",
  "ARCHITECTURE",
  "BUILD",
  "DESIGN",
  "SCALE",
];

export default function Marquee() {
  return (
    <div className="py-10 bg-slate-200/60 dark:bg-white/[0.02] border-y border-slate-300/60 dark:border-white/10 overflow-hidden select-none transition-colors duration-300">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="flex items-center gap-12 whitespace-nowrap w-max"
      >
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="text-4xl sm:text-6xl font-black tracking-tighter text-slate-400/80 dark:text-white/20 uppercase">
              {item}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
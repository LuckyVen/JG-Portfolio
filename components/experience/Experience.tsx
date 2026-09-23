"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2026 - PRESENT",
    title: "Specializing in Cloud Architecture & Full-Stack Systems",
    role: "IT STUDENT & SOFTWARE DEVELOPER",
    description: "Deepening expertise in distributed systems, modern web frameworks, and cloud application design.",
  },
  {
    period: "2025",
    title: "Engineered Restaurant & Administrative Systems",
    role: "FULL-STACK PROJECT LEAD",
    description: "Built end-to-end full-stack software including Wawek's Crispy Pata ordering system using React, C#, and SQL databases.",
  },
  {
    period: "2024",
    title: "Explored Game Mechanics & Systems Programming",
    role: "INDIE GAME DEVELOPER",
    description: "Designed procedural algorithms and inventory mechanics in Godot Engine using C#.",
  },
  {
    period: "2022 - 2023",
    title: "Foundations in Programming & Logic",
    role: "BEGINNER / STUDENT",
    description: "Started coding fundamentals, object-oriented principles, and basic web development.",
  },
];

export default function Experience() {
  return (
    <section
      id="journey"
      className="py-24 lg:py-36 px-6 lg:px-12 bg-slate-50 dark:bg-[#080808] transition-colors duration-300 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
            03 / EXPERIENCE & JOURNEY
          </span>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1" />
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 sm:ml-8 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-neutral-600 group-hover:bg-emerald-500 transition-colors" />

              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase block mb-2">
                {exp.period}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase mb-1">
                {exp.title}
              </h3>

              <p className="text-[11px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-wider mb-3">
                {exp.role}
              </p>

              <p className="text-slate-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
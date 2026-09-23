"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      "HTML5",
      "CSS3 / SCSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "BACKEND & DATABASE",
    skills: [
      "C#",
      "ASP.NET Core",
      "Node.js",
      "REST APIs",
      "SQL / PostgreSQL",
      "Entity Framework",
    ],
  },
  {
    title: "GAME DEV & OTHER",
    skills: [
      "Godot Engine",
      "C# for Games",
      "Git / GitHub",
      "VS Code",
      "Visual Studio",
      "Figma",
    ],
  },
  {
    title: "EXPLORING & CLOUD",
    skills: [
      "AWS Basics",
      "Docker",
      "Cloud Architecture",
      "CI/CD Pipelines",
      "Serverless Functions",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="stack"
      className="py-24 lg:py-36 px-6 lg:px-12 bg-slate-50 dark:bg-[#080808] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
            04 / SKILLS & TECHNOLOGIES
          </span>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1" />
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono tracking-widest text-slate-400 dark:text-neutral-500 uppercase mb-6 pb-3 border-b border-slate-100 dark:border-white/10">
                  {category.title}
                </h3>

                <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-800 dark:text-neutral-200">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-slate-50 dark:bg-[#080808] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-slate-200 dark:border-white/10 pb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase block mb-1">
              02 / SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              FEATURED PROJECTS
            </h2>
          </div>
        </div>

        {/* Projects Stack */}
        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              data-cursor="VIEW"
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* LEFT COLUMN: Project Information */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-neutral-400 mb-4">
                    <span>{project.number} / 0{PROJECTS.length}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* HOVER TITLE */}
                  <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 tracking-tight uppercase leading-none mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400/90 tracking-widest uppercase mb-6">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-3.5 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 text-slate-800 dark:text-neutral-300 border border-slate-300 dark:border-white/10 group-hover:border-emerald-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 group-hover:text-slate-900 dark:group-hover:text-white uppercase transition-colors"
                  >
                    <span>EXPLORE CASE STUDY</span>
                    <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive Card Preview */}
              <div 
                className="lg:col-span-7 relative rounded-2xl bg-gradient-to-br from-emerald-50/50 via-slate-100 to-slate-200 dark:from-[#0c1a16] dark:via-[#07100e] dark:to-[#040706] border border-slate-300 dark:border-emerald-500/20 group-hover:border-emerald-500/60 transition-all duration-500 overflow-hidden shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] h-[360px] sm:h-[420px] flex flex-col justify-between p-6 sm:p-8"
              >
                {/* Card Top Header */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-[#051410] border border-slate-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-neutral-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                    <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </div>
                </div>

                {/* Card Center: Image or Terminal Preview Box */}
                <div className="absolute inset-0 flex items-center justify-center p-6 z-0 overflow-hidden">
                  {project.image && !imageErrors[project.id] ? (
                    <div className="absolute inset-4 sm:inset-6 rounded-xl overflow-hidden border border-slate-300 dark:border-white/10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => handleImageError(project.id)}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-slate-200/80 dark:bg-[#0a1f18] border border-slate-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
                        <span className="font-mono font-bold text-lg">&gt;_</span>
                      </div>
                      <span className="text-xs sm:text-sm font-mono tracking-widest text-emerald-600 dark:text-emerald-400/80 uppercase">
                        [ {project.title} INTERFACE PREVIEW ]
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Footer inside preview container */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-neutral-400 border-t border-slate-300/80 dark:border-white/10 pt-4 relative z-10">
                  <div className="truncate max-w-[70%]">
                    {project.technologies.join(" / ")}
                  </div>
                  <div className="text-emerald-600 dark:text-emerald-400 group-hover:underline">
                    CLICK TO OPEN CASE STUDY
                  </div>
                </div>

                {/* Subtle Hover Glow Background Effect */}
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 dark:bg-[#0d0d0d] dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-slate-900 dark:text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:bg-white/5 dark:border-white/10 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              {project.category} — {project.year}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 uppercase">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-slate-600 dark:text-neutral-400 mt-1 uppercase">
              {project.subtitle}
            </p>
          </div>

          {/* Image Container with Fallback */}
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#121212]">
            
            {/* Pattern / Text Fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-[#181818] dark:via-[#0d0d0d] dark:to-[#050505] flex items-center justify-center p-6 z-0">
              <div className="text-center">
                <span className="text-3xl font-black font-mono tracking-tighter text-slate-900/10 dark:text-white/20 uppercase">
                  {project.title}
                </span>
              </div>
            </div>

            {/* Image (Displays if valid) */}
            {project.image && !imageError && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover relative z-10"
                onError={() => setImageError(true)}
              />
            )}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xs font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest mb-2">The Challenge</h3>
              <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest mb-2">The Solution</h3>
              <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8 pt-6 border-t border-slate-200 dark:border-white/10">
            <h3 className="text-xs font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-emerald-700 dark:bg-white/5 dark:border-white/10 dark:text-emerald-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons (Source Code & Live Demo) */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>SOURCE CODE</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LIVE"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-transparent border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-mono text-xs font-medium tracking-widest uppercase hover:border-slate-800 dark:hover:border-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>LIVE DEMO</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
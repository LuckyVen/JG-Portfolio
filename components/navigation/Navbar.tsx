"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "JOURNEY", href: "#journey" },
    { name: "STACK", href: "#stack" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 px-6 lg:px-12 py-6 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="#"
            data-cursor="HOME"
            className="pointer-events-auto text-xl font-black tracking-tighter text-slate-900 dark:text-white group flex items-center gap-1"
          >
            <span>JG</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
          </a>

          <nav
            className={`pointer-events-auto hidden md:flex items-center gap-8 px-6 py-3 rounded-full border transition-all duration-300 ${
              scrolled
                ? "bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl dark:shadow-black/80"
                : "bg-transparent border-transparent"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor="GO"
                className="text-xs font-mono tracking-widest text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pointer-events-auto hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              data-cursor="TALK"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white dark:text-black bg-slate-900 dark:bg-white px-5 py-2.5 rounded-full font-bold hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors"
            >
              LET'S TALK ↗
            </a>
          </div>

          <div className="pointer-events-auto md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-xs font-mono text-slate-800 dark:text-white tracking-widest bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-slate-50 dark:bg-[#080808] flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <p className="text-xs font-mono text-slate-500 dark:text-neutral-500 tracking-widest mb-4">NAVIGATION</p>
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-slate-400 dark:text-neutral-500">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-slate-500 dark:text-neutral-500">LOCATION</span>
              <span className="text-sm font-mono text-slate-700 dark:text-neutral-300">Philippines (GMT+8)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
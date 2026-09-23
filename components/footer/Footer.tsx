"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-6 lg:px-12 bg-slate-100 dark:bg-[#050505] border-t border-slate-200 dark:border-white/5 text-xs font-mono text-slate-500 dark:text-neutral-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-slate-900 dark:text-white uppercase">
            JOHN GABRIEL
          </span>{" "}
          — FULL-STACK DEVELOPER
        </div>

        <div>DESIGNED & ENGINEERED IN PHILIPPINES © 2026</div>

        <button
          onClick={scrollToTop}
          className="hover:text-slate-900 dark:hover:text-white transition-colors uppercase cursor-pointer"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}
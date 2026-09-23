"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36 px-6 lg:px-12 bg-slate-50 dark:bg-[#080808] border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">05 / CONTACT</span>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-mono text-slate-500 dark:text-neutral-400 tracking-widest uppercase mb-4">HAVE A PROJECT OR COLLABORATION IN MIND?</p>
            <h2 className="text-4xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">
              LET'S BUILD <br />
              <span className="text-transparent [-webkit-text-stroke:1.5px_#0f172a] dark:[-webkit-text-stroke:1.5px_#ffffff] cursor-pointer hover:[-webkit-text-stroke:1.5px_#10b981] hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300">SOMETHING</span> <br />
              GREAT.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col space-y-6">
            <a
              href="mailto:johngabriel.dev@example.com"
              data-cursor="EMAIL"
              className="w-full py-4 text-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:text-slate-950 dark:hover:text-black transition-colors shadow-sm dark:shadow-none"
            >
              GET IN TOUCH ↗
            </a>

            <div className="flex justify-between items-center text-xs font-mono text-slate-500 dark:text-neutral-400 pt-6 border-t border-slate-200 dark:border-white/10">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">GITHUB</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">LINKEDIN</a>
              <a href="mailto:johngabriel.dev@example.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">EMAIL</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#080808] dark:text-white transition-colors duration-300">
      {/* Background Ambient Glow (Static) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] bg-emerald-400/30 dark:bg-emerald-500/15 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col justify-between flex-1">
        {/* Top Status Bar Header */}
        <div className="flex items-center justify-between text-xs font-mono tracking-widest text-slate-500 dark:text-neutral-400 mb-6 sm:mb-0">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#121212] border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-inner backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-700 dark:text-neutral-300 font-mono tracking-wider text-[11px]">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <div className="hidden sm:block font-mono text-[11px] tracking-widest">
            BASED IN PHILIPPINES
          </div>
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="relative my-auto py-6 sm:py-8 flex flex-col items-center justify-center">
          {/* Background Text Layer (Static) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 opacity-15 dark:opacity-20">
            <h1 className="text-[14vw] font-black leading-none tracking-tighter text-slate-900 dark:text-white uppercase text-center">
              JOHN
            </h1>
            <h1 className="text-[14vw] font-black leading-none tracking-tighter text-slate-900 dark:text-white uppercase text-center">
              GABRIEL
            </h1>
          </div>

          {/* CREATIVE DEVELOPER WORKSTATION / SCREEN MOCKUP (Static / No Animation) */}
          <div className="relative z-10 w-full max-w-3xl md:max-w-4xl rounded-2xl bg-white/70 dark:bg-[#0c0d0e]/95 border border-slate-300/80 dark:border-white/15 shadow-[0_20px_50px_rgba(16,185,129,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-xl overflow-hidden my-2">
            {/* Ambient Inner Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12)_0%,transparent_75%)] pointer-events-none z-0" />

            {/* Screen Top Title Bar */}
            <div className="relative z-10 flex items-center justify-between px-4 py-2.5 bg-slate-100/90 dark:bg-[#141618] border-b border-slate-200 dark:border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-slate-600 dark:text-neutral-400 text-[11px] ml-2 font-mono">
                  ~/gabriel-dev-os/profile.tsx
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-500 dark:text-neutral-400 text-[11px]">
                <span className="hidden md:inline-block text-slate-400 dark:text-neutral-500 font-mono">
                  UTF-8
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  SYSTEM ONLINE
                </span>
              </div>
            </div>

            {/* SCREEN CANVAS AREA */}
            <div className="relative min-h-[340px] sm:min-h-[400px] md:min-h-[440px] grid grid-cols-1 md:grid-cols-12 overflow-hidden bg-slate-100/80 dark:bg-[#070908] p-4 sm:p-6 gap-4">
              {/* Visible Tech Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#059669_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#10b981_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-20 dark:opacity-15 pointer-events-none" />

              {/* LEFT WIDGET: Code Editor Snippet (Walang galaw) */}
              <div className="col-span-1 md:col-span-4 flex flex-col justify-between bg-white/95 dark:bg-[#0e1110]/85 border border-slate-200 dark:border-white/10 rounded-xl p-4 backdrop-blur-md relative z-20 text-left font-mono text-[11px] leading-relaxed text-slate-800 dark:text-neutral-300 shadow-lg dark:shadow-xl order-2 md:order-1">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 dark:text-neutral-500 text-[10px] mb-3 pb-2 border-b border-slate-200/60 dark:border-white/5">
                    <span className="text-emerald-600 dark:text-emerald-400">⚡</span> DEVELOPER_STATE
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">
                    <span className="text-red-500 dark:text-red-400">const</span> developer{" "}
                    <span className="text-red-500 dark:text-red-400">=</span> &#123;
                  </p>
                  <p className="pl-3 text-slate-700 dark:text-neutral-300">
                    name:{" "}
                    <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                      &quot;John Gabriel&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-3 text-slate-700 dark:text-neutral-300">
                    role:{" "}
                    <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                      &quot;Full-Stack&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-3 text-slate-700 dark:text-neutral-300">
                    cloud:{" "}
                    <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                      &quot;AWS / Azure&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-3 text-slate-700 dark:text-neutral-300">
                    status:{" "}
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      &quot;Ready&quot;
                    </span>
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">
                    &#125;;
                    <span className="inline-block w-1.5 h-3 bg-emerald-500 dark:bg-emerald-400 ml-1 align-middle" />
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-white/5 text-[10px] text-slate-400 dark:text-neutral-500 flex items-center justify-between">
                  <span>LN 14, COL 2</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">React + Next.js</span>
                </div>
              </div>

              {/* CENTER STAGE: Portrait Centerpiece (Walang hover/movement) */}
              <div className="col-span-1 md:col-span-4 relative flex items-end justify-center z-10 pt-4 order-1 md:order-2">
                {/* Glowing Aura behind portrait (Static) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-400/40 dark:bg-emerald-500/35 rounded-full blur-3xl pointer-events-none" />

                {/* Portrait Image */}
                <div className="relative w-48 sm:w-64 md:w-72 h-56 sm:h-80 md:h-96 z-10 filter drop-shadow-[0_15px_30px_rgba(16,185,129,0.25)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]">
                  <Image
                    src="/images/portrait.png"
                    alt="John Gabriel"
                    fill
                    priority
                    className="object-contain object-bottom scale-125 sm:scale-135 md:scale-145 origin-bottom"
                    sizes="(max-width: 768px) 350px, 450px"
                  />
                </div>
              </div>

              {/* RIGHT WIDGET: Tech Metrics (Walang galaw/hover) */}
              <div className="col-span-1 md:col-span-4 flex flex-col justify-between gap-3 relative z-20 font-mono text-left order-3">
                {/* Metric Card 1 */}
                <div className="bg-white/95 dark:bg-[#0e1110]/85 border border-slate-200 dark:border-white/10 rounded-xl p-3.5 backdrop-blur-md shadow-lg dark:shadow-xl">
                  <span className="text-[10px] text-slate-400 dark:text-neutral-500 uppercase block mb-1 font-semibold">
                    CURRENT FOCUS
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-800 dark:text-white font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                    Cloud Architecture & Microservices
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="bg-white/95 dark:bg-[#0e1110]/85 border border-slate-200 dark:border-white/10 rounded-xl p-3.5 backdrop-blur-md shadow-lg dark:shadow-xl">
                  <span className="text-[10px] text-slate-400 dark:text-neutral-500 uppercase block mb-2 font-semibold">
                    CORE TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "React",
                      "Next.js",
                      "C#",
                      ".NET",
                      "SQL",
                      "Tailwind",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-[10px] text-emerald-800 dark:text-emerald-300 font-semibold cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="bg-white/95 dark:bg-[#0e1110]/85 border border-slate-200 dark:border-white/10 rounded-xl p-3 backdrop-blur-md flex items-center justify-between text-[10px] text-slate-500 dark:text-neutral-400 shadow-lg dark:shadow-xl">
                  <span>RESPONSE TIME</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">&lt; 24 HOURS</span>
                </div>
              </div>

              {/* Screen Bottom Bar Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-200/90 dark:from-[#070908] via-transparent to-transparent h-14 pointer-events-none z-10" />
            </div>
          </div>

          {/* Foreground Headline + Badge */}
          <div className="relative z-20 flex flex-col items-center text-center mt-3 sm:mt-5">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white uppercase drop-shadow-sm dark:drop-shadow-md mb-3">
              FULL-STACK DEVELOPER
            </h2>

            {/* Sparkle Pill Badge (Walang animation) */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-100/80 dark:bg-[#031A14]/90 border border-emerald-500/40 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-400 shadow-md dark:shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
              <svg
                className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold">
                ASPIRING CLOUD ENGINEER
              </span>
            </div>
          </div>
        </div>

        {/* Footer Info inside Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 pt-6 border-t border-slate-200 dark:border-white/10">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-light leading-relaxed max-w-sm">
            I craft modern digital experiences, robust backend workflows, and scalable web solutions while continuously expanding into cloud technologies.
          </p>

          <div className="flex items-center justify-start md:justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-black font-mono text-xs font-bold tracking-widest hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:text-slate-950 dark:hover:text-black transition-colors shadow-md"
            >
              VIEW MY WORK ↓
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-mono text-xs tracking-widest hover:border-slate-800 dark:hover:border-white transition-colors"
            >
              ABOUT ME
            </a>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-neutral-500 block">
              SCROLL TO DISCOVER
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-neutral-300">© 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
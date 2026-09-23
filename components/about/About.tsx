"use client";

import TextReveal from "../effects/TextReveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-36 px-6 lg:px-12 bg-slate-50 dark:bg-[#080808] border-t border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
            01 / ABOUT ME
          </span>
          <div className="h-px bg-slate-200 dark:bg-white/10 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">
            <TextReveal className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight uppercase">
              I CREATE DIGITAL EXPERIENCES THROUGH DESIGN + CLEAN CODE.
            </TextReveal>

            <div className="mt-8 sm:mt-12 space-y-6 text-slate-600 dark:text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
              <p>
                I am an IT student and full-stack software developer with a
                relentless curiosity for how modern web platforms and distributed
                software function under high load.
              </p>
              <p>
                My work spans designing interactive frontends using React and Next.js,
                building reliable backend architectures with C# and ASP.NET Core,
                and exploring dynamic mechanics in game engines like Godot.
              </p>
              <p>
                Currently, I am actively expanding my capabilities toward cloud
                engineering—aiming to architect cloud-native infrastructure that
                powers seamless user experiences worldwide.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 border-l border-slate-200 dark:border-white/10 pl-6 lg:pl-12">
            <div>
              <h4 className="text-xs font-mono tracking-widest text-slate-400 dark:text-neutral-500 mb-2">
                CORE FOCUS
              </h4>
              <p className="text-sm font-mono text-slate-900 dark:text-white">
                Full-Stack Development, API Engineering, Cloud Integration
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-widest text-slate-400 dark:text-neutral-500 mb-2">
                PHILOSOPHY
              </h4>
              <p className="text-sm font-mono text-slate-900 dark:text-white">
                Performant execution, intentional typography, zero unnecessary
                fluff.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-widest text-slate-400 dark:text-neutral-500 mb-2">
                STATUS
              </h4>
              <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400">
                Open for internships, projects & technical collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
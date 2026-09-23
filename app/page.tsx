import CustomCursor from "@/components/effects/CustomCursor";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Marquee from "@/components/effects/Marquee";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-[#F3F3F1] min-h-screen selection:bg-emerald-400 selection:text-black transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
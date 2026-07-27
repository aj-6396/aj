"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail, GraduationCap, Briefcase, Code2, User, Trophy } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { SpidermanHeroShooting } from "@/components/ui/SpidermanTheme";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full overflow-hidden">
      <section className="relative flex flex-col items-center justify-start md:justify-center min-h-[calc(100vh-5rem)] pt-6 pb-12 md:py-0 w-full">
        {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Spiderman Theme Elements */}
      <SpidermanHeroShooting />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 relative shrink-0"
        >
          {/* Professional Portrait */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 glass-card p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden relative">
              <img src="/profile.png" alt="Ambuj Singh" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/10">
            Available
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">digital experiences</span> that matter.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            {PERSONAL_INFO.bio.split(". ")[0]}. {PERSONAL_INFO.bio.split(". ")[1]}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-4"
        >
          <Link 
            href="/projects" 
            className="group flex items-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-slate-200 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/contact" 
            className="flex items-center glass px-6 py-3 rounded-full font-medium text-white hover:bg-white/10 transition-all duration-300"
          >
            <Mail size={18} className="mr-2" />
            Contact Me
          </Link>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center text-slate-400 hover:text-white px-4 py-3 font-medium transition-colors"
          >
            <Download size={18} className="mr-2" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center gap-6"
        >
          <a 
            href={PERSONAL_INFO.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="GitHub"
          >
            <GithubIcon size={24} />
          </a>
          <a 
            href={PERSONAL_INFO.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={24} />
          </a>
          <a 
            href={PERSONAL_INFO.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Instagram"
          >
            <InstagramIcon size={24} />
          </a>
        </motion.div>
      </div>
      </section>

      {/* Short Intro Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 z-10 relative">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium mb-6">
              <User size={14} className="text-accent" />
              <span>Who I Am</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              Driven by <span className="text-accent">Purpose</span>. Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">Technology</span>.
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I am a Math & Computer Science undergraduate at <strong className="text-white font-medium">Banaras Hindu University (BHU)</strong>, currently serving as the <strong className="text-white font-medium">IT Head @ Kalki Foundation</strong> and <strong className="text-white font-medium">Founder & Secretary @ The Debuggers BHU</strong>. I bridge computational mathematics with modern frontend engineering to build impactful, high-performance web solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2.5 bg-accent/10 rounded-lg text-accent mr-3.5">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Education</div>
                  <div className="text-sm text-white font-semibold">B.Sc. Math & CS @ BHU</div>
                </div>
              </div>

              <div className="flex items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 mr-3.5">
                  <Briefcase size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Leadership</div>
                  <div className="text-sm text-white font-semibold">IT Head @ Kalki</div>
                </div>
              </div>

              <div className="flex items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-400 mr-3.5">
                  <Trophy size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Global Honor</div>
                  <div className="text-sm text-white font-semibold">ICSC 2026 Pre-Finalist</div>
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center text-accent hover:text-white font-medium transition-colors group"
            >
              Read full story & background
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 z-10 relative">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected <span className="text-slate-500">Work</span></h2>
            <p className="text-slate-400 max-w-xl">A glimpse into some of my recent projects. Check out the full portfolio for more.</p>
          </div>
          <Link href="/projects" className="hidden md:flex items-center text-slate-400 hover:text-white transition-colors">
            View all projects <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 2).map((project: any, i: number) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="group glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                <ArrowRight className="text-slate-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
              </div>
              <p className="text-slate-400 mb-6">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {(project.techStack || []).slice(0, 3).map((tech: string) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Link href="/projects" className="flex items-center justify-center w-full glass py-4 rounded-xl text-slate-300 hover:text-white transition-colors">
            View all projects <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}

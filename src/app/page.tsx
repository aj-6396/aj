"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Professional Portrait Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 glass-card p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden relative">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-700" />
              <span className="text-4xl text-slate-500 font-bold z-10">AS</span>
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
        </motion.div>
      </div>
    </div>
  );
}

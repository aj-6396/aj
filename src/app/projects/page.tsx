"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Works</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A collection of projects showcasing product thinking, performance optimization, and premium design.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group h-full">
              <Link href={`/projects/${project.id}`} className="block h-full">
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col glass-hover border border-white/5 transition-all duration-300">
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    {/* Fallback image style since actual image URLs might be placeholders */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                        <ArrowUpRight size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium px-2 py-1 bg-white/5 rounded-full text-slate-300 border border-white/10 whitespace-nowrap ml-2">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs text-slate-500">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

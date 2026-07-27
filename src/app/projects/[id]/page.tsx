"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS } from "@/data/portfolioData";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = PROJECTS.find(p => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link 
          href="/projects"
          className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>

        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-400">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass border border-white/10">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Links & Tech Stack */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
                >
                  <GithubIcon size={16} className="mr-2" />
                  Source Code
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-black bg-white hover:bg-slate-200 px-4 py-2 rounded-full transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Case Study Content */}
          {project.fullCaseStudy && (
            <div className="space-y-12 py-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {project.fullCaseStudy.overview}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Architecture & Engineering</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {project.fullCaseStudy.architecture}
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-4 text-accent">Challenges</h3>
                  <ul className="space-y-3">
                    {project.fullCaseStudy.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <span className="mr-3 text-accent mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-4 text-emerald-400">Solutions</h3>
                  <ul className="space-y-3">
                    {project.fullCaseStudy.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <CheckCircle2 className="mr-3 text-emerald-400 shrink-0 mt-0.5" size={18} />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Key Metrics & Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.fullCaseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                      <p className="text-sm md:text-base font-medium text-slate-200">{metric}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

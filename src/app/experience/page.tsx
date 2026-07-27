"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Experience</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            My professional timeline, internships, education, and volunteer leadership roles.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative border-l-2 border-white/10 ml-4 md:ml-8"
        >
          {TIMELINE.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants} className="mb-12 relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-[-21px] md:left-[-25px] top-1 h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#07070C] border-2 border-accent flex items-center justify-center z-10 shadow-[0_0_15px_rgba(225,29,72,0.5)]">
                {item.type === 'experience' ? (
                  <Briefcase size={16} className="text-white md:w-5 md:h-5" />
                ) : (
                  <GraduationCap size={16} className="text-white md:w-5 md:h-5" />
                )}
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 relative group hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-accent bg-accent/10 px-3 py-1 rounded-full text-sm font-medium w-fit border border-accent/20">
                    <Calendar size={14} className="mr-2" />
                    {item.period}
                  </div>
                </div>

                <div className="mb-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-slate-300 font-medium">
                  <span className="text-lg">{item.organization}</span>
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="flex items-center text-slate-400 text-sm">
                    <MapPin size={14} className="mr-1" />
                    {item.location}
                  </span>
                </div>

                <ul className="space-y-3">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start text-slate-400 leading-relaxed">
                      <span className="text-accent mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {item.details && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    {item.details.cgpa && (
                      <div className="mb-4 text-slate-300">
                        <span className="font-semibold text-white mr-2">CGPA:</span> {item.details.cgpa}
                      </div>
                    )}
                    
                    {item.details.subjects && (
                      <div className="mb-4">
                        <span className="block font-semibold text-white mb-2">Key Subjects:</span>
                        <div className="flex flex-wrap gap-2">
                          {item.details.subjects.map(subject => (
                            <span key={subject} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {item.details.highlights && (
                      <div>
                        <span className="block font-semibold text-white mb-2">Highlights:</span>
                        <div className="flex flex-wrap gap-2">
                          {item.details.highlights.map(highlight => (
                            <span key={highlight} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { SKILL_NODES } from "@/data/portfolioData";
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Wrench,
  Globe
} from "lucide-react";

export default function Skills() {
  // Group skills by category
  const groupedSkills = SKILL_NODES.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILL_NODES>);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Layout className="text-accent" size={24} />;
      case 'Backend': return <Terminal className="text-blue-400" size={24} />;
      case 'Languages': return <Code2 className="text-purple-400" size={24} />;
      case 'Database': return <Database className="text-emerald-400" size={24} />;
      case 'Tools': return <Wrench className="text-orange-400" size={24} />;
      default: return <Globe className="text-slate-400" size={24} />;
    }
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Arsenal</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A comprehensive overview of my technical capabilities and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants} className="glass-card rounded-2xl p-6 h-full border border-white/5">
              <div className="flex items-center mb-6 border-b border-white/5 pb-4">
                <div className="p-3 bg-white/5 rounded-xl mr-4">
                  {getCategoryIcon(category)}
                </div>
                <h2 className="text-2xl font-bold text-white">{category}</h2>
              </div>
              
              <ul className="space-y-4">
                {skills.map(skill => (
                  <li key={skill.id} className="group">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      {skill.level >= 95 && (
                        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-accent/20 text-accent rounded-full border border-accent/30">
                          Expert
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

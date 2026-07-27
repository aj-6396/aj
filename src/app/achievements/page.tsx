"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS, CERTIFICATES } from "@/data/portfolioData";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";

export default function Achievements() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Certifications</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Recognitions, hackathons, and professional certifications.
          </p>
        </motion.div>

        {/* Achievements Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Award className="text-accent mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Achievements</h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {ACHIEVEMENTS.map((item) => (
              <motion.div key={item.id} variants={itemVariants} className="glass-card rounded-2xl p-6 border border-white/5 flex gap-4">
                <div className="text-4xl flex-shrink-0">{item.badge}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{item.issuer} • {item.year}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center mb-8">
            <ShieldCheck className="text-emerald-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CERTIFICATES.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants} className="glass-card rounded-2xl overflow-hidden border border-white/5 group">
                <div className="h-40 w-full overflow-hidden relative bg-slate-800">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent" />
                </div>
                
                <div className="p-6 relative">
                  <div className="absolute -top-6 right-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-bold text-white">
                    {cert.date}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                  
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    Verify Credential
                    <ExternalLink size={14} className="ml-1.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

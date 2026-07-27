"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Me</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I am Ambuj Singh, a Frontend Engineer and Creative Developer driven by purpose and powered by tech. 
              Currently, I am pursuing my B.Sc. in Mathematics and Computer Science at the Institute of Science, 
              Banaras Hindu University (BHU).
            </p>
            <p>
              My journey combines the analytical rigor of computational mathematics with the boundless creativity of 
              modern web development. I believe in <strong>Vibe Coding</strong>—building digital experiences that are not 
              only highly performant but also deeply engaging and intuitive.
            </p>
            <p>
              As the IT Head at Kalki Foundation and the Founder of The Debuggers (BHU's premier coding club), 
              I focus on leveraging technology to amplify social impact and foster communities of innovation. 
              Whether it's automating e-certificate infrastructures or engineering anti-proxy attendance systems, 
              I build products that solve real problems.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-slate-400">
              "{PERSONAL_INFO.quotes[2]}"
            </blockquote>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-accent shrink-0 mt-1" size={20} />
                  <span className="text-slate-300">{PERSONAL_INFO.location}</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="mr-3 text-accent shrink-0 mt-1" size={20} />
                  <span className="text-slate-300">{PERSONAL_INFO.role.split(" || ")[0]}</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="mr-3 text-accent shrink-0 mt-1" size={20} />
                  <span className="text-slate-300">{PERSONAL_INFO.education}</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Core Philosophy</h3>
              <div className="flex flex-wrap gap-2">
                {["Vibe Coding", "Pixel Perfect", "Performance First", "Accessibility", "Product Thinking", "Design Engineering"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

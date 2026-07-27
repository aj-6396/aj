"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, ArrowRight, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SpidermanCrouching } from "@/components/ui/SpidermanTheme";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 relative">
      <SpidermanCrouching />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Connect</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind, want to discuss opportunities, or collaborate? Reach out directly via email or social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Direct Channels</h3>
              
              <div className="space-y-6">
                <a 
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  className="flex items-start group p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors">
                    <Mail className="text-slate-300 group-hover:text-accent transition-colors" size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-slate-400 text-sm font-medium mb-1">Email Address</h4>
                    <p className="text-white font-medium break-all">{PERSONAL_INFO.socials.email}</p>
                  </div>
                </a>

                <div className="flex items-start p-3 rounded-xl">
                  <div className="p-3 bg-white/5 rounded-xl mr-4">
                    <MapPin className="text-slate-300" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-medium mb-1">Location</h4>
                    <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start p-3 rounded-xl">
                  <div className="p-3 bg-white/5 rounded-xl mr-4">
                    <MessageSquare className="text-slate-300" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-medium mb-1">Response Time</h4>
                    <p className="text-white font-medium">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <h4 className="text-slate-400 text-sm font-medium mb-4">Find Me Online</h4>
              <div className="flex space-x-3">
                <a 
                  href={PERSONAL_INFO.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a 
                  href={PERSONAL_INFO.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a 
                  href={PERSONAL_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Direct Action Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-4">
                Fastest Response
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Send an Email</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Click below to send a direct message straight to my BHU inbox via your default mail client.
              </p>

              <div className="space-y-4">
                <a 
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  className="w-full flex items-center justify-center bg-white text-black py-4 px-6 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300 group shadow-lg"
                >
                  <Mail className="mr-2" size={20} />
                  Compose Email Now
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center glass py-4 px-6 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 group border border-white/10"
                >
                  <LinkedinIcon className="mr-2" size={20} />
                  Message on LinkedIn
                  <ExternalLink size={16} className="ml-2 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-slate-500">
              Ambuj Singh • IT Head @ Kalki Foundation & Secretary @ The Debuggers BHU
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

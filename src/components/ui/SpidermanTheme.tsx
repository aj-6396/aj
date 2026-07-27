"use client";

import { motion } from "framer-motion";

export const SpidermanGlobalWebs = () => (
  <>
    {/* Top Left Web */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-[70vw] md:w-[40vw] max-w-[500px] pointer-events-none -z-20 opacity-20 invert grayscale"
    >
      <img src="/spiderman/web-transparent.png" alt="Spider Web" className="w-full h-full object-contain -translate-x-1/4 -translate-y-1/4" />
    </motion.div>
    
    {/* Bottom Right Web */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-0 right-0 w-[60vw] md:w-[30vw] max-w-[400px] pointer-events-none -z-20 opacity-20 invert grayscale rotate-180"
    >
      <img src="/spiderman/web-transparent.png" alt="web pattern" className="w-full h-full object-contain translate-x-1/4 translate-y-1/4 rotate-180" />
    </motion.div>
  </>
);

export const SpidermanHeroShooting = () => (
  <motion.div
    initial={{ opacity: 0, x: -50, y: 50 }}
    animate={{ opacity: 0.8, x: 0, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
    className="absolute bottom-[-5%] md:bottom-[-10%] left-[-10%] md:left-[-5%] w-[320px] sm:w-[400px] md:w-[600px] pointer-events-none z-0"
  >
    <img src="/spiderman/new-shooting.png" alt="Spiderman" className="w-full h-full object-contain opacity-40 hover:opacity-100 transition-opacity duration-700" />
  </motion.div>
);

export const SpidermanCrouching = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 0.6, y: 0 }}
    transition={{ duration: 1 }}
    className="fixed bottom-[-30px] md:bottom-[-50px] right-[-30px] md:right-[-50px] w-[200px] sm:w-[250px] md:w-[500px] pointer-events-none -z-10"
  >
    <img src="/spiderman/crouching.png" alt="Spiderman Crouching" className="w-full h-full object-contain" />
  </motion.div>
);

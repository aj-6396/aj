import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#07070C] mt-24">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-white inline-block mb-4">
              Ambuj Singh
            </Link>
            <p className="text-slate-400 max-w-sm">
              {PERSONAL_INFO.quotes[0]}
              <br />
              Building high-performance, premium web applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors">
                <GithubIcon size={18} className="mr-2" /> GitHub
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors">
                <LinkedinIcon size={18} className="mr-2" /> LinkedIn
              </a>
              <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="flex items-center text-slate-400 hover:text-white transition-colors">
                <Mail size={18} className="mr-2" /> Email
              </a>
              <div className="flex items-center text-slate-400">
                <MapPin size={18} className="mr-2" /> Varanasi, India
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {currentYear} Ambuj Singh. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


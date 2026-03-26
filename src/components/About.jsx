import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { userData } from '../data';

const About = () => {
  return (
    <section id="about" className="section-container border-t border-black/5 dark:border-white/5 py-24">
      <div className="flex flex-col items-start w-full max-w-6xl mx-auto">
        
        {/* Top Section - Bio Card */}
        <div className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-8 md:p-12 lg:p-16 rounded-[2.5rem] relative overflow-hidden group">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-text">
            About <span className="text-text/30 italic">Me</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-text/80 font-light tracking-wide mb-12">
            {userData.about}
          </p>

          {/* Social Box */}
          <div className="mt-4 bg-black/10 dark:bg-black/30 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-black/5 dark:border-white/5">
            <span className="font-serif text-3xl md:text-4xl font-bold text-text">Let's Connect</span>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={userData.github || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 md:px-8 bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-transform rounded-full uppercase tracking-widest text-xs md:text-sm font-bold flex items-center gap-3 shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                <Github size={20} /> Github
              </a>
              <a 
                href={userData.linkedin || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 md:px-8 bg-accent text-white hover:scale-105 transition-transform rounded-full uppercase tracking-widest text-xs md:text-sm font-bold flex items-center gap-3 shadow-lg shadow-accent/20"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 md:px-8 border border-black/20 dark:border-white/20 text-text hover:border-accent hover:text-accent hover:scale-105 transition-all rounded-full uppercase tracking-widest text-xs md:text-sm font-bold flex items-center gap-3"
              >
                Show CV
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { userData } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-container pt-32 lg:pt-48 pb-20 min-h-[90vh]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-accent font-medium tracking-wide uppercase">Hello there, I am</h2>
            <h1 className="text-5xl md:text-[5rem] lg:text-[6rem] font-serif font-bold leading-[1.1] tracking-tight">
              {userData.name.split(' ')[0]}<br />
              <span className="text-text/70">{userData.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-text/80 max-w-xl font-light leading-relaxed pt-4">
              A {userData.role} building intelligent models and robust applications.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-6 mt-6">
            <a href="#projects" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:scale-105 transition-transform shadow-lg shadow-black/10 dark:shadow-white/10">
              View Projects
            </a>
            <a href={`mailto:${userData.email}`} className="px-8 py-4 border border-black/20 dark:border-white/20 rounded-full hover:border-accent hover:text-accent hover:scale-105 transition-all flex items-center gap-2 font-medium">
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="flex items-center gap-8 pt-10">
            <a href={userData.github} target="_blank" rel="noreferrer" className="text-text/60 hover:text-accent hover:-translate-y-1 transition-all duration-300">
              <Github size={28} />
            </a>
            <a href={userData.linkedin} target="_blank" rel="noreferrer" className="text-text/60 hover:text-accent hover:-translate-y-1 transition-all duration-300">
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end relative">
          
          {/* Aura Pulse Behind Profile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-accent/20 blur-[60px] rounded-full animate-pulse-glow pointer-events-none"></div>
          
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] animate-float">
            {/* The abstract shape / border representing the profile */}
            <div className="absolute inset-0 border-[1px] border-accent rounded-full animate-[spin_20s_linear_infinite] border-dashed opacity-50 scale-105"></div>
            <div className="absolute inset-0 border-[1px] border-text/20 rounded-full animate-[spin_15s_linear_infinite_reverse] scale-95"></div>
            
            <div className="absolute inset-6 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent rounded-full flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10">
              {userData.profileImage ? (
                <img 
                  src={userData.profileImage} 
                  alt={userData.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              ) : (
                <div className="text-center p-8 opacity-20 transform hover:scale-110 transition-transform duration-700">
                  <span className="font-serif text-[10rem] font-bold">{userData.name.charAt(0)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

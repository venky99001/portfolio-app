import React from 'react';
import { userData } from '../data';
import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const initials = userData.name.split(' ').map(n => n[0]).join('. ') + '.';

  return (
    <footer className="section-container pt-20 pb-12 border-t border-black/5 dark:border-white/10 relative mt-20">
      
      {/* Scroll to Top Floating Button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-8 md:right-16 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 transition-all z-20 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
        
        {/* Column 1: Logo & Bio */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-accent tracking-tighter">
            {initials}
          </h2>
          <p className="text-text/60 text-sm leading-relaxed max-w-xs font-medium">
            Aspiring AI Engineer specializing in Machine Learning, NLP, and intelligent system development.
          </p>
          <div className="flex gap-4 pt-2">
            <a href={userData.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-text/60 hover:bg-accent hover:text-white transition-all duration-300">
              <Github size={18} />
            </a>
            <a href={userData.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-text/60 hover:bg-accent hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-text/40">Navigation</h3>
          <ul className="space-y-4">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-text/70 hover:text-accent font-medium text-sm transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-text/40">Connect</h3>
          <ul className="space-y-4">
            <li>
              <a href={`mailto:${userData.email}`} className="flex items-center gap-3 text-text/70 hover:text-accent font-medium text-sm transition-colors group">
                <div className="text-accent/40 group-hover:text-accent transition-colors">
                  <Mail size={16} />
                </div>
                {userData.email}
              </a>
            </li>
            <li>
              <a href={`tel:${userData.phone}`} className="flex items-center gap-3 text-text/70 hover:text-accent font-medium text-sm transition-colors group">
                <div className="text-accent/40 group-hover:text-accent transition-colors">
                  <Phone size={16} />
                </div>
                {userData.phone}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Availability */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-text/40">Availability</h3>
          <div className="bg-accent/5 border border-accent/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-bold text-text">Available for hire</span>
            </div>
            <p className="text-xs text-text/50 leading-relaxed font-medium">
              Open for high-impact roles or projects. Let's build something great together.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mt-20 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-center items-center text-text/30 text-[10px] font-bold tracking-[0.1em] uppercase">
        <p>© 2026 Developed by <span className="text-text/50">{userData.name}</span>.</p>
      </div>
    </footer>
  );
};

export default Footer;

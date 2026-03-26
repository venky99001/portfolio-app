import React from 'react';
import { Award, Image as ImageIcon } from 'lucide-react';
import { userData } from '../data';
import ScrollReveal from './ScrollReveal';

const Certifications = () => {
  return (
    <section id="certifications" className="section-container border-t border-black/5 dark:border-white/5 py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-text uppercase tracking-tight mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-accent/60"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {userData.certifications.map((cert, index) => {
            const displayIndex = (index + 1).toString().padStart(2, '0');
            
            return (
              <ScrollReveal 
                key={index} 
                direction="up" 
                className="h-full"
              >
                <div className="group relative flex flex-col h-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(181,133,82,0.1)] overflow-hidden">
                  
                  {/* Backdrop Index Number */}
                  <span className="absolute top-4 left-6 text-7xl font-serif font-bold text-black/5 dark:text-white/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors duration-500">
                    {displayIndex}
                  </span>

                  {/* Image Holder */}
                  <div className="relative w-full aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-[1.5rem] mb-8 flex items-center justify-center border border-black/5 dark:border-white/10 overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center text-text/20 group-hover:text-accent/40 shadow-sm transition-all duration-500 group-hover:scale-110">
                        <ImageIcon size={32} />
                      </div>
                    )}
                    
                    <p className="absolute bottom-4 text-[10px] uppercase tracking-widest text-text/30 font-bold group-hover:text-accent/60 transition-colors duration-300">
                      {cert.image ? 'Enlarge View' : 'View Certificate'}
                    </p>
                  </div>

                  {/* Certification Details */}
                  <div className="mt-auto relative z-10 space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-text leading-tight group-hover:text-accent transition-colors duration-300">
                      {cert.title}
                    </h3>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">
                        {cert.issuer}
                      </span>
                      {cert.date && (
                        <span className="text-xs text-text/40 font-medium italic">
                          {cert.date}
                        </span>
                      )}
                    </div>

                    {/* View Button */}
                    <div className="pt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <a 
                        href={cert.pdf || cert.image || "#"} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-[0.25em] rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>

                  {/* Subtle Corner Icon */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-accent/40">
                    <Award size={24} />
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

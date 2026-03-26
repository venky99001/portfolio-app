import React from 'react';
import { GraduationCap } from 'lucide-react';
import { userData } from '../data';

const Education = () => {
  return (
    <section id="education" className="section-container border-t border-black/5 dark:border-white/5 py-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-text">Education</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 to-transparent dark:from-white/10"></div>
        </div>
        
        <div className="relative border-l border-black/10 dark:border-white/10 ml-6 md:ml-8 space-y-16 pb-12">
          {userData.education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Circular Marker on the line */}
              <div className="absolute -left-[28px] top-6 w-14 h-14 rounded-full border border-black/10 dark:border-white/10 bg-background flex items-center justify-center text-accent z-10 transition-transform duration-500 group-hover:scale-110 shadow-sm">
                <GraduationCap size={24} />
              </div>
              
              {/* Timeline Card */}
              <div className="ml-12 md:ml-16 p-8 lg:p-12 rounded-[2.5rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover:border-accent/30 transition-all duration-500">
                
                {/* Card Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl lg:text-4xl font-serif font-bold text-text mb-4 lg:mb-0">
                    {edu.institution}
                  </h3>
                  <span className="px-5 py-2 bg-black/5 dark:bg-white/10 rounded-full text-xs font-semibold text-text/60 whitespace-nowrap self-start">
                    {edu.duration} {edu.location ? `• ${edu.location}` : ''}
                  </span>
                </div>

                {/* Degree Type */}
                <div className="flex items-center gap-3 text-accent font-semibold tracking-widest text-sm uppercase">
                  <GraduationCap size={18} />
                  {edu.degree}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React, { useState, useRef } from 'react';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { userData } from '../data';
import ScrollReveal from './ScrollReveal';

// Custom physics wrapper for 3D mouse-tracking tilt
const Hover3DCard = ({ children, className }) => {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt: maximum 5 degrees rotation
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    // Slight scale bump on hover
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly snap back to center
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform, 
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out' 
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container border-t border-black/5 dark:border-white/5 py-24">
      <div className="flex items-center gap-6 mb-20 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-text">Projects</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 to-transparent dark:from-white/10"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {userData.projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={index} 
              className={`flex flex-col ${isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'} gap-12 xl:gap-20 items-stretch group/layout relative z-10`}
            >
              
              {/* Text Side Wrapped in 3D Card */}
              <ScrollReveal direction={isEven ? 'left' : 'right'} className="flex-1 flex flex-col lg:min-w-[500px] z-20">
                <Hover3DCard className="flex-1 flex flex-col h-full">
                <div className="flex-1 h-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[3rem] p-10 lg:p-14 flex flex-col justify-center hover:border-accent/40 hover:shadow-[0_0_40px_rgba(181,133,82,0.15)] transition-all duration-300 shadow-sm relative overflow-hidden group/textcard">
                  
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover/textcard:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-text mb-6 tracking-tight relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl leading-relaxed text-text/70 font-light max-w-lg mb-10 relative z-10">
                    {project.description}
                  </p>

                  <div className="w-full border border-black/10 dark:border-white/10 rounded-2xl p-6 mb-12 bg-background/50 backdrop-blur-sm relative z-10 group-hover/textcard:border-accent/20 transition-colors duration-300">
                    <p className="text-sm font-bold text-accent tracking-widest leading-relaxed uppercase">
                      TECHSTACK : {project.techStack.join(', ')}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto relative z-10">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold flex items-center gap-3 shadow-lg shadow-black/10 dark:shadow-white/10"
                      >
                        <Github size={20} /> Github
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-[#B58552] dark:bg-[#d49a5b] text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-bold flex items-center gap-3 shadow-lg shadow-accent/30"
                      >
                        <ExternalLink size={20} /> Live Link
                      </a>
                    )}
                  </div>
                </div>
                </Hover3DCard>
              </ScrollReveal>

              {/* Image Side Wrapped in 3D Card */}
              <ScrollReveal direction={isEven ? 'right' : 'left'} className="w-full xl:w-[50%] flex-shrink-0 flex items-stretch z-10">
                <Hover3DCard className="w-full h-full flex items-stretch">
                <div className="w-full h-full border border-black/5 dark:border-white/5 rounded-[3rem] p-8 lg:p-12 flex items-center justify-center bg-transparent hover:border-accent/40 hover:shadow-[0_0_50px_rgba(181,133,82,0.1)] transition-all duration-300 relative overflow-hidden group/imagecard">
                  
                  <div className="w-full aspect-[16/9] bg-black/5 dark:bg-white/5 rounded-[2rem] border border-black/10 dark:border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-sm group-hover/imagecard:border-accent/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none opacity-50 group-hover/imagecard:opacity-100 transition-opacity duration-300"></div>
                    
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/imagecard:scale-110"
                      />
                    ) : (
                      <>
                        <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm text-text/30 group-hover/imagecard:scale-125 group-hover/imagecard:text-accent group-hover/imagecard:shadow-accent/20 transition-all duration-500">
                          <ImageIcon size={32} className="group-hover/imagecard:animate-pulse" />
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-text mb-2 text-center px-4">Project Preview</h4>
                        <p className="text-text/50 font-light text-center px-4">Image will be added later</p>
                      </>
                    )}
                  </div>

                </div>
                </Hover3DCard>
              </ScrollReveal>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

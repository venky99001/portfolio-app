import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { userData } from '../data';

const TrainingCard = ({ train }) => {
  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = (e) => {
    if (!e.currentTarget) return;
    
    // Calculate cursor position within the target box
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Map position to a -12deg to +12deg rotation range for organic 3D tilt
    const rotateY = -12 + (x / rect.width) * 24;
    const rotateX = 12 - (y / rect.height) * 24;
    
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
  };

  const handleMouseLeave = () => {
    // Graceful organic reset
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[2rem] p-8 md:p-12 lg:p-14 flex flex-col xl:flex-row gap-12 xl:gap-20 hover:border-accent/30 transition-all duration-500 group relative">
      
      {/* Left Column: Details */}
      <div className="flex-1 flex flex-col items-start z-10 perspective-[1000px]">
        <h3 className="text-3xl lg:text-4xl font-serif font-bold text-text mb-4 leading-tight">
          {train.role}
        </h3>
        <div className="text-accent uppercase tracking-widest text-sm font-bold mb-2">
          {train.company}
        </div>
        <div className="text-text/50 font-medium mb-12">
          {train.duration}
        </div>

        <div className="text-xs uppercase tracking-widest text-text/40 font-bold mb-8">
          Program Highlights
        </div>
        
        <ul className="space-y-6 mb-12">
          {train.description.map((item, i) => (
            <li key={i} className="flex items-start gap-5 text-text/80 text-lg leading-relaxed font-light">
              <span className="text-accent mt-2 block w-4 flex-shrink-0">—</span>
              <span className="flex-1 block">{item}</span>
            </li>
          ))}
        </ul>

        {/* Download/View Button */}
        {(train.certificatePdf || train.certificateImage) ? (
          <a 
            href={train.certificatePdf || train.certificateImage} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto px-8 py-4 rounded-xl border border-accent text-accent uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-white dark:hover:text-background transition-colors duration-300"
          >
            <Download size={20} />
            View Certificate
          </a>
        ) : (
          <button disabled className="mt-auto px-8 py-4 rounded-xl border border-accent text-accent uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-3 opacity-60 cursor-not-allowed">
            <Download size={20} />
            View Certificate
          </button>
        )}
      </div>

      {/* Right Column: 3D Certificate Preview */}
      <div 
        className="w-full xl:w-[45%] flex-shrink-0 z-10 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* The 3D Animated Box */}
        <div 
          style={{ transform: transformStyle || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' }}
          className="w-full aspect-[4/3] rounded-3xl bg-black/5 dark:bg-black/40 border-[4px] border-black/10 dark:border-white/10 hover:border-solid hover:border-accent hover:shadow-[0_20px_50px_rgba(255,69,0,0.25)] flex flex-col items-center justify-center relative overflow-hidden transition-all duration-200 ease-out will-change-transform group"
        >
          {train.certificateImage ? (
            <img 
              src={train.certificateImage} 
              alt={`${train.role} Certificate`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          
          <div className={`relative text-center p-8 flex flex-col items-center justify-center pointer-events-none ${train.certificateImage ? 'hidden' : 'flex'}`}>
            <div className="w-20 h-20 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110">
              <Download size={32} className="text-text/30" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-text mb-3">Certificate Preview</h4>
            <p className="text-text/50 font-light max-w-[200px]">Image will be uploaded shortly</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
        </div>
      </div>

    </div>
  );
};

const Training = () => {
  return (
    <section id="training" className="section-container border-t border-black/5 dark:border-white/5 py-24">
      <div className="flex items-center gap-6 mb-16 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-text">Training</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-black/10 to-transparent dark:from-white/10"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {userData.experience.map((train, idx) => (
          <TrainingCard key={idx} train={train} />
        ))}
      </div>
    </section>
  );
};

export default Training;

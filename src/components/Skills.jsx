import React from 'react';
import { userData } from '../data';
import { 
  SiCplusplus, 
  SiPython, 
  SiPandas, 
  SiNumpy, 
  SiOpencv, 
  SiScikitlearn,
  SiMysql, 
  SiGit, 
  SiLinux, 
  SiTailwindcss 
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';

// Map skill names to their respective icons
const iconMap = {
  "C++": SiCplusplus,
  "Java": FaJava,
  "Python": SiPython,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "OpenCV": SiOpencv,
  "Matplotlib": SiPython, // Fallback for matplotlib usually
  "scikit-learn": SiScikitlearn,
  "MySQL": SiMysql,
  "Git": SiGit,
  "Linux": SiLinux,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "React": FaReact,
  "Tailwind CSS": SiTailwindcss
};

// Map skill names to their official brand colors
const iconColorMap = {
  "C++": "#00599C",
  "Java": "#f89820",
  "Python": "#3776AB",
  "Pandas": "#150458",
  "NumPy": "#013243",
  "OpenCV": "#5C3EE8",
  "Matplotlib": "#11557c",
  "scikit-learn": "#F7931E",
  "MySQL": "#4479A1",
  "Git": "#F05032",
  "Linux": "#FCC624",
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  "React": "#61DAFB",
  "Tailwind CSS": "#06B6D4"
};

const Skills = () => {
  // Combine languages and web for a 3-column layout as planned
  const coreLanguages = [...userData.skills.languages, ...userData.skills.web];
  const architectures = userData.skills.frameworks;
  const tools = userData.skills.tools;

  const renderSkill = (skill) => {
    const Icon = iconMap[skill] || SiPython; // Fallback icon
    const iconColor = iconColorMap[skill] || "currentColor";
    return (
      <div key={skill} className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-md transition-all">
          <Icon className="text-3xl" style={{ color: iconColor }} />
        </div>
        <span className="text-[10px] font-sans font-semibold text-text/60 tracking-wider uppercase text-center">{skill}</span>
      </div>
    );
  };

  return (
    <section id="skills" className="section-container border-t border-black/5 dark:border-white/5 py-24">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mb-3">Technical Proficiency</h2>
          <div className="w-16 h-1.5 bg-accent rounded-full"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-10 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b735b] dark:text-accent mb-10">
              Core Languages & Web
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-y-8 gap-x-4">
              {coreLanguages.map(renderSkill)}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-10 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b735b] dark:text-accent mb-10">
              Architecture & Frameworks
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-y-8 gap-x-4">
              {architectures.map(renderSkill)}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-10 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b735b] dark:text-accent mb-10">
              Tools & Ecosystem
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-y-8 gap-x-4">
              {tools.map(renderSkill)}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;

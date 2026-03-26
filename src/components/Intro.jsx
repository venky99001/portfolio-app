import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { userData } from '../data';

const Intro = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // 3.5 seconds for the full animation
    return () => clearTimeout(timer);
  }, [onComplete]);

  const firstName = userData.name.split(' ')[0];
  const lastName = userData.name.split(' ').slice(1).join(' ');

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
          }}
          className="flex flex-col items-center"
        >
          {/* Initial Letter Animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 0.1,
              transition: { delay: 0.2, duration: 1.5 }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <span className="text-[15rem] md:text-[25rem] font-serif font-bold text-accent select-none">
              {firstName.charAt(0)}
            </span>
          </motion.div>

          {/* Name Reveal */}
          <div className="overflow-hidden py-2 px-4 relative z-10">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.6, 0.01, -0.05, 0.9],
                  delay: 0.5 
                }
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-center"
            >
              <span className="text-text">{firstName}</span>{" "}
              <span className="text-text/60">{lastName}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ 
              width: "100%",
              transition: { delay: 1.2, duration: 1, ease: "easeInOut" }
            }}
            className="h-[1px] bg-accent/40 mt-4 max-w-xs md:max-w-md mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 1.8, duration: 0.5 }
            }}
            className="mt-4 text-accent/80 font-medium tracking-[0.3em] uppercase text-xs md:text-sm"
          >
            Portfolio
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0, 0.2, 0],
          scale: [0.8, 1.2, 1.5],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute w-[500px] h-[500px] bg-accent blur-[100px] rounded-full pointer-events-none opacity-10"
      />
    </motion.div>
  );
};

export default Intro;

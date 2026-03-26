import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Particles from './components/Particles';
import ScrollReveal from './components/ScrollReveal';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  // Prevent scroll during intro
  useEffect(() => {
    if (!isIntroComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isIntroComplete]);

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white relative bg-background overflow-hidden px-1">
      <AnimatePresence mode="wait">
        {!isIntroComplete && (
          <Intro onComplete={() => setIsIntroComplete(true)} key="intro" />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isIntroComplete && (
          <div className="relative z-10">
            {/* Background Layer */}
            <div className="grain-bg pointer-events-none"></div>
            <Particles />
            
            {/* Ambient Radial Glows */}
            <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/10 dark:bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/10 dark:bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <Navbar />

            <main>
              <ScrollReveal><Hero /></ScrollReveal>
              <ScrollReveal><About /></ScrollReveal>
              <Projects />
              <ScrollReveal><Skills /></ScrollReveal>
              <ScrollReveal><Training /></ScrollReveal>
              <Certifications />
              <ScrollReveal><Education /></ScrollReveal>
              <ScrollReveal><Contact /></ScrollReveal>
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

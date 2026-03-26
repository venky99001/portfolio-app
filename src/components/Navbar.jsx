import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar shadow/blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'TRAINING', href: '#training' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-serif font-bold tracking-tight text-text">
          {/* Logo removed as requested */}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-text hover:text-accent transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} className="text-text" /> : <Moon size={18} className="text-text" />}
            </button>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white dark:hover:text-background transition-all text-sm font-medium"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun size={18} className="text-text" /> : <Moon size={18} className="text-text" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-text">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-black/10 dark:border-white/10 shadow-lg">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-text font-medium text-lg hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

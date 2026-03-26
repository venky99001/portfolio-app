import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getHiddenTransform = () => {
    switch(direction) {
      case 'left': return '-translate-x-[150px]';
      case 'right': return 'translate-x-[150px]';
      case 'up': default: return 'translate-y-[120px]';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 scale-[0.98] ${getHiddenTransform()}`
      } ${className || 'w-full'}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

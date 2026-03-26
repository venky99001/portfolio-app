import React, { useEffect, useState } from 'react';

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random square particles to float in the background
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // horizontal start
      y: Math.random() * 100, // vertical start
      size: Math.random() * 10 + 4, // 4px to 14px size
      duration: Math.random() * 20 + 20, // 20s to 40s duration
      delay: Math.random() * 15 // staggering start
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-accent/40 dark:bg-accent/20 rounded-sm animate-particle-float"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;

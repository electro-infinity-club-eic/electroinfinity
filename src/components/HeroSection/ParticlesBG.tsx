import React from "react";

const ParticlesBG = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 4;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400 opacity-70 animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              boxShadow: `0 0 10px 2px rgba(0,247,255,0.8)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticlesBG;

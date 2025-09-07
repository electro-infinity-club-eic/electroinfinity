import React from "react";

const CircuitBG = () => {
  return (
    <svg
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-30"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Vertical lines */}
      {[...Array(12)].map((_, i) => (
        <line
          key={`v-${i}`}
          className="circuit-line"
          x1={`${(i / 11) * 100}%`}
          y1="0"
          x2={`${(i / 11) * 100}%`}
          y2="100%"
          strokeDashoffset={i * 80}
        />
      ))}
      {/* Horizontal lines */}
      {[...Array(8)].map((_, i) => (
        <line
          key={`h-${i}`}
          className="circuit-line"
          x1="0"
          y1={`${(i / 7) * 100}%`}
          x2="100%"
          y2={`${(i / 7) * 100}%`}
          strokeDashoffset={i * 120}
        />
      ))}
    </svg>
  );
};

export default CircuitBG;

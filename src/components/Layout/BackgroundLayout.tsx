import React from "react";
import CircuitBG from "../HeroSection/CircuitBG";
import ParticlesBG from "../HeroSection/ParticlesBG";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#0f1f3d] overflow-hidden">
      {/* Background */}
      <CircuitBG />
      <ParticlesBG />

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;

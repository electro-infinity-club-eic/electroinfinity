import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import ParticlesBG from "../components/HeroSection/ParticlesBG";
import CircuitBG from "../components/HeroSection/CircuitBG";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0f1f3d] overflow-hidden">
      
      {/* Background */}
      <CircuitBG />
      <ParticlesBG />

      {/* Content */}
      <HeroSection />
      
    </div>
  );
};

export default Home;
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import UpcomingEvents from "../components/UpcomingEvents";
import ParticlesBG from "../components/HeroSection/ParticlesBG";
import CircuitBG from "../components/HeroSection/CircuitBG";

const Home: React.FC = () => {
  return (
    <div className="relative bg-[#0f1f3d] min-h-screen overflow-hidden">
      {/* Background */}
      <CircuitBG />
      <ParticlesBG />

      {/* Page Sections */}
      <HeroSection />
      <UpcomingEvents />
    </div>
  );
};

export default Home;

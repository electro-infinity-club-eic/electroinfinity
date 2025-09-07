import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import UpcomingEvents from "../components/UpcomingEvents";
import ParticlesBG from "../components/HeroSection/ParticlesBG";
import CircuitBG from "../components/HeroSection/CircuitBG";

const Home: React.FC = () => {
  const [showEvents, setShowEvents] = useState(false);

  const handleViewEvents = () => {
    setShowEvents((prev) => !prev);
    setTimeout(() => {
      const eventsSection = document.getElementById("events");
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="relative bg-[#0f1f3d] min-h-screen overflow-hidden">
      {/* Background */}
      <CircuitBG />
      <ParticlesBG />

      {/* Content */}
      <HeroSection onViewEvents={handleViewEvents} />
      {showEvents && <UpcomingEvents />}
    </div>
  );
};

export default Home;

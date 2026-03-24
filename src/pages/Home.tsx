import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import UpcomingEvents from "../components/UpcomingEvents";

const Home: React.FC = () => {
  const [showEvents, setShowEvents] = useState(false);

  const handleViewEvents = () => {
    setShowEvents(true);
  };

  useEffect(() => {
    if (showEvents) {
      const section = document.getElementById("events");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEvents]);

  return (
    <div className="bg-[#0f1f3d] min-h-screen">
      <HeroSection onViewEvents={handleViewEvents} />
      {showEvents && <UpcomingEvents />}
    </div>
  );
};

export default Home;
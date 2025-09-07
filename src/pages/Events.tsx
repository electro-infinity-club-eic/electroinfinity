// src/pages/Events.tsx

import React from "react";
import EventCard from "../components/events/EventCard";
import events from "../data/events";

const Events: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-[#0f1f3d] min-h-screen px-6">
      <h1 className="text-4xl md:text-5xl text-center text-cyan-300 font-bold mb-12">
        Past Events
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;

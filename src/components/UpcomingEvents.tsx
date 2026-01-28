import React from "react";
import { motion } from "framer-motion";

const UpcomingEvents: React.FC = () => {
  return (
    <section
      id="events"
      className="w-full bg-[#0f1f3d] py-20 px-4 sm:px-8 md:px-20 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300 mb-12 text-center">
        Upcoming Events
      </h2>

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        className="relative w-full sm:w-[320px] md:w-[350px] 
                   rounded-2xl bg-white shadow-lg hover:shadow-2xl 
                   transition-all duration-300 overflow-hidden"
      >
        {/* Event Image */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src="/event-images/event-21.png"
            alt="EV Unplugged Workshop"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Event Info */}
        <div className="p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            EV-UNPLUGGED
          </h3>
          <p className="text-sm font-medium text-gray-500 mb-4 text-center">
            30th January 2026
          </p>

          <a
            href="https://forms.gle/4eq6S5KnHYhLGY4M9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-3 rounded-xl 
                       bg-cyan-500 text-white font-bold 
                       hover:bg-cyan-600 transition-colors shadow-md"
          >
            Register Now
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default UpcomingEvents;

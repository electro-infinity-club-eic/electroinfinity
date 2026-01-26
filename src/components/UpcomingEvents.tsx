import React from "react";
import { motion } from "framer-motion";

const UpcomingEvents: React.FC = () => {
  return (
    <section
      id="events"
      className="w-full bg-[#0f1f3d] py-16 px-4 sm:px-8 md:px-20 flex flex-col items-center"
    >
      {/*
        ===============================
        ❌ OPTION 1: SHOW EVENT CARDS
        Uncomment this block when events exist
        ===============================
      */}

      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300 mb-8 text-center">
        Upcoming Events
      </h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="event-card-wrapper relative w-full sm:w-[300px] md:w-[340px] lg:w-[360px] 
                   rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 
                   hover:-translate-y-2 overflow-hidden"
      >
        <div className="overflow-hidden">
          <img
            src="/event-images/event-21.png"
            alt="Tech Workshop 2025"
            className="w-full aspect-square object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-2">EV-UNPLUGGED</h3>
          <p className="text-sm text-gray-500 mb-1">8th August 2025</p>
          <p className="text-sm text-gray-700 mb-3 line-clamp-3">
            
          </p>
         <a
        href="https://forms.gle/4eq6S5KnHYhLGY4M9"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block w-full text-center px-4 py-2 
             rounded-lg bg-cyan-500 text-white font-semibold 
             hover:bg-cyan-600 transition"
>
  Register Now
</a>
 
        </div>
      </motion.div>
     

      {/*
        ===============================
        ✅ OPTION 2: EMPTY STATE (NO EVENTS)
        Currently Active
        ===============================
      */}

      {/*<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-3">
          No Upcoming Events
        </h3>
        <p className="text-base sm:text-lg text-gray-400 max-w-lg">
          We’re preparing something amazing. Stay tuned for updates from{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-semibold">
            Electro Infinity Club
          </span>
          !
        </p>
      </motion.div>*/}
    </section>
  );
};

export default UpcomingEvents;

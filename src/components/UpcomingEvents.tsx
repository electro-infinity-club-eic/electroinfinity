import React from "react";
import { motion } from "framer-motion";

const UpcomingEvents: React.FC = () => {
  return (
    <section
      id="events"
      className="w-full bg-[#0f1f3d] py-20 px-4 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-xl"
      >
        {/* Poster */}
        <img
          src="/event-22.jpg"
          alt="EV Unplugged Poster"
          className="w-full h-[420px] object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x400?text=Poster+Not+Found";
          }}
        />

        {/* Event Details */}
        <div className="p-5 text-left">
          <h2 className="text-2xl font-bold text-[#0f1f3d]">
            EV-Unplugged
          </h2>

          <p className="text-gray-500 mt-1">
            30th January 2026
          </p>

          <p className="text-gray-700 mt-3 text-sm leading-relaxed">
            EIC organizes EV Unplugged, a session introducing electric vehicle
            technology, e-mobility trends, and future opportunities in the EV domain.
          </p>

          {/* Register Button */}
          <div className="mt-5 text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScUOTWFavPq8bqxcfC0tV9h2XOLG8KKhuc7MXW7yxJup31f_w/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition inline-block"
            >
              Register Now
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UpcomingEvents;
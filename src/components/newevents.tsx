import React from "react";
import { motion } from "framer-motion";

const NewEvents: React.FC = () => {
  return (
    <section className="w-full bg-[#0f1f3d] py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        New Events
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full rounded-2xl overflow-hidden shadow-lg flex flex-col"
      >
        <img
          src="/event-22.jpg" // Make sure the image is in public/
          alt="Event Poster"
          className="w-full h-80 object-cover block"
        />
        <div className="p-5 text-center bg-[#132a52]">
          <span className="bg-cyan-400 text-[#0f1f3d] px-6 py-2 rounded-lg font-semibold inline-block">
            Register Now
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default NewEvents;
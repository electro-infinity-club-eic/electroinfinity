import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onViewEvents?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onViewEvents }) => {
  const cardData = [
    {
      title: "Mission",
      text: "To create a vibrant community of electronics enthusiasts who learn, innovate, and build real-world projects.",
    },
    {
      title: "Objective",
      text: "To organize workshops, events, and hands-on sessions that enhance students’ technical knowledge and skills.",
    },
    {
      title: "Vision",
      text: "To become a hub for innovation, bridging the gap between industry and academia in electronics and tech.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0f1f3d] flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 pt-28 md:pt-36">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:justify-center gap-12 md:gap-20 max-w-7xl w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-300 shadow-md hover:scale-105 transition-transform duration-500">
            <img
              src="/logo.png"
              alt="Club Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl px-2 sm:px-0"
        >
          {/* <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-200 border-b-4 border-cyan-400 pb-2 whitespace-nowrap">
            ELECTRO INFINITY CLUB
          </h1>
          <p className="text-xl sm:text-xl md:text-xl">Building Tomorrow Together</p> */}

<div className="flex flex-col items-center text-center">
  {/* Club Name */}
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-200 whitespace-nowrap">
    ELECTRO INFINITY CLUB
  </h1>

  {/* Tagline */}
  <p className="text-sm sm:text-base md:text-lg text-cyan-100 mt-1">
    Building Tomorrow Together
  </p>

  {/* Underline */}
  <div className="w-80 sm:w-[28rem] md:w-[40rem] border-b-4 border-cyan-400 mt-2"></div>
</div>






          <h2 className="mt-4 text-base sm:text-lg md:text-2xl font-semibold">
            <span className="neon-yellow">OFFICIAL CLUB OF</span>
            <br />
            <span className="text-blue-200">
              M.E.S WADIA COLLEGE OF ENGINEERING, PUNE
            </span>
          </h2>

          <p className="mt-6 text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg">
            We foster innovation and technical excellence through workshops,
            events, and collaborative projects for students.
          </p>
        </motion.div>
      </div>

      {/* Mission, Objective, Vision Cards */}
      <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-cyan-400 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-cyan-400/40 transition duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-3">
              {card.title}
            </h3>
            <p className="text-blue-100 text-sm sm:text-base">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Events Button */}
      <div className="relative z-10 mt-10 sm:mt-14">
        <button
          onClick={onViewEvents}
          className="px-5 sm:px-6 py-2 sm:py-3 bg-cyan-400 text-[#0f1f3d] font-semibold rounded-lg shadow-md hover:bg-cyan-300 transition duration-300 text-sm sm:text-base"
        >
          View Upcoming Events
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

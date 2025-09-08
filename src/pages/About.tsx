import React from "react";
import { motion } from "framer-motion";

const AboutClub: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-[#0a1529] to-[#0f1f3d] py-28 px-6 sm:px-12 md:px-20"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
          About
        </span>{" "}
        <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-200 whitespace-nowrap">
          Electro Infinity Club
        </span>
      </motion.h2>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed hover:scale-[1.01] hover:text-cyan-200 transition duration-300">
            In an era of rapid technological advancement, {" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text font-semibold">
              Electro Infinity Club (EIC)
            </span>{" "}
            stands as a vibrant, student-driven hub for aspiring engineers,
            innovators, and problem-solvers.
          </p>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed hover:scale-[1.01] hover:text-cyan-200 transition duration-300">
            More than just a club, EIC is a thriving technical community
            committed to bridging the gap between classroom learning and{" "}
            <span className="text-cyan-300 font-semibold">
              real-world industry demands
            </span>
            .
          </p>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed hover:scale-[1.01] hover:text-cyan-200 transition duration-300">
            Through{" "}
            <span className="text-cyan-300 font-semibold">
              workshops, hackathons, competitions, and projects
            </span>
            , we empower students to transform theoretical knowledge into
            practical skills while fostering teamwork and creativity.
          </p>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed hover:scale-[1.01] hover:text-cyan-200 transition duration-300">
            Our vision is to create{" "}
            <span className="text-cyan-300 font-semibold">
              future-ready engineers
            </span>{" "}
            who excel in innovation and impactful projects, while our mission is
            to nurture leaders who will shape tomorrow’s technology.
          </p>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed hover:scale-[1.01] hover:text-cyan-200 transition duration-300">
            Whether you are here to{" "}
            <span className="text-cyan-300 font-semibold">
              explore, innovate, or excel
            </span>
            —Electro Infinity Club is your platform to discover, create, and
            grow.
          </p>
        </motion.div>

        {/* Right Side (Accent / Visual Block) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 flex items-center justify-center">
            <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-4">
              Empowering Students to Innovate & Lead
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutClub;

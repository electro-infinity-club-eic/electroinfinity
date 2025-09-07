import React from "react";
import { motion } from "framer-motion";

const TeamAviate: React.FC = () => {
  return (
    <section
      id="team-aviate"
      className="relative w-full bg-gradient-to-b from-[#0f1f3d] to-[#0a1529] py-24 px-6 sm:px-12 md:px-26"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl hover:scale-105 transition-transform duration-500 overflow-hidden">
            <img
              src="/Team Aviate Logo.jpg"
              alt="Team Aviate Logo"
              className="w-64 h-64 object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 text-blue-100"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
    Team Aviate
  </span>{" "}
  –{" "}
  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">
    AEROTHON by SAE INDIA
  </span>
</h2>


          {/* Intro */}
          <p className="text-base sm:text-lg leading-relaxed">
            Aerothon, organized by the{" "}
            <span className="font-semibold text-cyan-300">SAEINDIA Aerospace Forum</span>,
            is a premier national-level competition pushing the frontiers of{" "}
            <span className="font-semibold text-amber-400">Uncrewed Aircraft Systems (UAS)</span>.
            It is a platform where innovation takes flight, and the future of aerospace is redefined.
          </p>

          {/* Objectives */}
          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Objectives</h3>
            <ul className="list-disc list-inside space-y-1 text-base sm:text-lg">
              <li>Ignite Innovation – Fuel cutting-edge UAV designs.</li>
              <li>Cultivate Expertise – Advance aero design & self-reliance.</li>
              <li>Showcase Brilliance – Exhibit UAV mastery on a national stage.</li>
              <li>Empower Leaders – Inspire future aerospace entrepreneurs.</li>
            </ul>
          </div>

          {/* Phases */}
          <div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Competition Phases</h3>
            <p className="mb-2">
              <span className="font-semibold text-amber-400">PHASE 1:</span> Conceptualization & Technical Acumen – 
              Innovative UAV designs, evaluated by industry leaders.  
            </p>
            <p>
              <span className="font-semibold text-amber-400">PHASE 2:</span> Prototyping & Flight Validation – 
              Building UAV prototypes, followed by rigorous flight testing.
            </p>
          </div>

          {/* Achievement */}
          <div className="border-l-4 border-amber-400 pl-4">
            <h3 className="text-xl font-bold text-amber-400 mb-2">Our Triumph</h3>
            <p className="text-base sm:text-lg">
              Team Aviate, representing{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-semibold">
                Electro Infinity Club
              </span>
              , has made us proud by securing{" "}
              <span className="text-amber-400 font-bold">AIR 1 in Phase 1</span> of Aerothon 2025.  
              Their achievement is a shining example of innovation, precision, and passion for aerospace excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamAviate;

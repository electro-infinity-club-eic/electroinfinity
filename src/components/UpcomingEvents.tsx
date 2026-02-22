import React from "react";
import { motion } from "framer-motion";

const UpcomingEvents: React.FC = () => {
  return (
    <section
      id="events"
      className="w-full bg-[#0f1f3d] py-20 px-4 sm:px-8 md:px-20 flex flex-col items-center"
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center max-w-xl space-y-6"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        We're Cooking Something. Stay tuned!
        </span>
        </h3>
        
        {/* <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200">
          We're Cooking Something. Stay tuned!
        </h3> */}

        <p className="text-base sm:text-lg text-gray-400">
          For more information Join our WhatsApp group.
        </p>

        {/* whatsapp grp link */}

        <a
          href="https://chat.whatsapp.com/HOK1JHloSsQBeA9nOdPy3B?mode=gi_c"
          target="_blank"
          rel="noopener noreferrer"
          className="
          bg-cyan-400
          hover:bg-cyan-500
          text-[#0f1f3d]
          font-semibold
           px-10
           py-3
           rounded-xl
          shadow-md
          transition
          duration-300
          "
        >
  Join WhatsApp Group
</a>

      </motion.div>

    </section>
  );
};

export default UpcomingEvents;
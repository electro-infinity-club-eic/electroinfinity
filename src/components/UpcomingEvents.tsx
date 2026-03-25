import React from "react";
import { motion } from "framer-motion";

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      title: "Liftoff",
      date: "Thursday-2nd April",
      image: "/event-images/event-22.jpg",
      footnote: "Registrations are open. Limited seats available!", // 👈 edit this anytime
    },
  ];

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScUOTWFavPq8bqxcfC0tV9h2XOLG8KKhuc7MXW7yxJup31f_w/viewform?usp=publish-editor";

  return (
    <section
      id="events"
      className="relative z-10 py-20 px-4 sm:px-8 md:px-20 bg-[#0f1f3d]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-200 mb-12">
        Upcoming Events
      </h2>

      <div className="flex justify-center max-w-4xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-cyan-400 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-400/40 transition duration-300 flex flex-col w-full sm:w-[28rem]"
          >
            {/* Poster */}
            <div className="w-full aspect-video bg-[#0f1f3d] flex items-center justify-center">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-cyan-300 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-blue-200 mb-4">{event.date}</p>

              {/* ✅ Footnote */}
              <p className="text-xs sm:text-sm text-cyan-100 italic mb-6">
                {event.footnote}
              </p>

              {/* Register Button */}
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center px-5 py-3 bg-cyan-400 text-[#0f1f3d] font-semibold rounded-lg hover:bg-cyan-300 transition duration-300"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
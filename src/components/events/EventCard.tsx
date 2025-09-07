import React from "react";

interface EventProps {
  title: string;
  date: string;
  info: string;
  img: string;
  open: boolean;
  link?: string;
}

const EventCard: React.FC<{ event: EventProps }> = ({ event }) => {
  return (
    <>      
      <div className="event-card-wrapper relative w-full sm:w-[300px] md:w-[340px] lg:w-[360px] rounded-2xl">
        <div className="w-full h-full bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="overflow-hidden">
            <img
              src={event.img}
              alt={event.title}
              className="w-full aspect-square object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{event.date}</p>
            <p className="text-sm text-gray-700 mb-3 line-clamp-3">{event.info}</p>
            {/* {event.open && event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 mt-2 text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out"
              >
                Register
              </a>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
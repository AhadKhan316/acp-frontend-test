import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import posterImg1 from "/src/assets/Upcoming-events-img/alumni-2025.jpeg";
import posterImg3 from "/src/assets/Upcoming-events-img/admission-suvapa-2025.jpeg";

const UpcomingEventsPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Sukkur Chapter 2",
      date: "2025-05-15",
      location: "Sukkur IBA University, Sukkur, Pakistan",
      image: posterImg1,
      infoLink: "/info/sukkur-chapter-2",
      ticketsLink: "/tickets/sukkur-chapter-2",
    },
    {
      id: 3,
      title: "Admission Open 2025-26",
      date: "2025-07-20",
      location: "School of Visual & Performing Arts, Karachi, Pakistan",
      image: posterImg3,
      infoLink: "/info/admission-2025",
      ticketsLink: "/tickets/admission-2025",
    },
  ]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 0.98,
      transition: { duration: 0.3 },
    },
  };

  // Fetch events from backend (replace with your API endpoint)
  useEffect(() => {
    fetch("/api/events/upcoming")
      .then((res) => res.json())
      .then((data) =>
        setEvents(
          data
            .filter((event) => new Date(event.date) >= new Date())
            .slice(0, 2)
        )
      )
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <motion.section
      className="py-6 sm:py-8 bg-white text-black"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12">
          Upcoming Events
        </h2>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="flex flex-col"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >

                <div className="w-full mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full max-h-[400px] object-contain rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                    {event.title.toUpperCase()}
                  </h3>
                  <div className="flex items-center text-sm sm:text-base mb-4">
                    <span className="mr-2">📅</span>
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="mr-2">📍</span>
                    <span>{event.location}</span>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={event.infoLink}
                      className="px-8 py-2 bg-red-700 border border-white text-white font-semibold text-sm rounded-full hover:bg-red-700 hover:text-white transition duration-300"
                    >
                      INFO
                    </a>
                    <a
                      href={event.ticketsLink}
                      className="px-8 py-2 bg-red-700 border border-white text-white font-semibold text-sm rounded-full hover:bg-red-700 hover:text-white transition duration-300"
                    >
                      TICKETS
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">
            No upcoming events at this time.
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default UpcomingEventsPage;
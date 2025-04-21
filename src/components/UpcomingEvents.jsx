import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import posterImg1 from "../assets/poster-images/sukkur-chapter-2.png";
import posterImg2 from "../assets/poster-images/sukkur-chapter-2.png";
import posterImg3 from "../assets/poster-images/sukkur-chapter-2.png";

// Import arrow icons (you can replace these with your preferred icons)
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Sukkur Chapter 2",
      date: "May 15, 2025",
      description: "Join us for the second chapter of our cultural event in Sukkur, featuring workshops and performances.",
      image: posterImg1,
    },
    {
      id: 2,
      title: "Cultural Festival 2025",
      date: "June 10, 2025",
      description: "A celebration of art and culture with performances, exhibitions, and more.",
      image: posterImg2,
    },
    {
      id: 3,
      title: "Art Workshop Series",
      date: "July 20, 2025",
      description: "Learn from experts in our series of art workshops, open to all ages.",
      image: posterImg3,
    },
  ]);

  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Framer Motion variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 0.95,
      boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-white text-2xl" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-white text-2xl" />
    </button>
  );

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableHeight: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ padding: "10px" }}>
        <ul style={{ margin: "0px" }} className="flex justify-center space-x-2">
          {dots.map((dot, index) => (
            <li key={index} className={dot.props.className}>
              <span
                className={`block w-3 h-3 rounded-full ${dot.props.className.includes("slick-active")
                  ? "bg-white"
                  : "bg-gray-800"
                  }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <motion.section
      className="py-6 sm:py-6 bg-white relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="mx-4 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Upcoming Events
          </motion.h2>
        </div>

        {/* Event Slider */}
        <Slider {...sliderSettings} className="pb-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="px-3"
              custom={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col">
                {/* Event Image */}
                <div className="w-full mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                {/* Event Details */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                    {event.title.toUpperCase()}
                  </h3>
                  <p className="text-black text-sm sm:text-base flex items-center justify-center mb-4">
                    {event.date}
                    <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mx-2"></span>
                    2025
                  </p>
                  {/* Registration Button */}
                  <motion.button
                    className="px-4 py-3 bg-[#B90602] text-white font-semibold text-sm rounded-xl shadow-md hover:bg-black/80 to-black/90 hover:shadow-lg transition duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <motion.button
            className="px-6 py-4 bg-[#B90602] text-white font-semibold text-sm sm:text-base rounded-xl shadow-md hover:bg-black/80 to-black/90 hover:shadow-lg transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get Involved"
          >
            View All Events
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingEvents;





// Fetch events on component mount and periodically check for updates
// useEffect(() => {
//   const fetchEvents = () => {
//     fetch("http://10.10.10.231:5000/get_events")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setEvents(data);
//       })
//       .catch((error) => console.error("Error fetching events:", error));
//   };

//   // Initial fetch and polling for real-time updates every 10 seconds
//   const intervalId = setInterval(fetchEvents, 10000);
//   fetchEvents();

//   // Cleanup interval on component unmount
//   return () => clearInterval(intervalId);
// }, []);



// <section className="py-10 bg-[#111827] text-center">
//   <div className="mx-4 px-4 bg-[#1F2937] rounded-lg sm:px-6 lg:px-8">
//     <div className="grid grid-cols-3 gap-8 py-4 px-2">
//       <div className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
//         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
//         <p className="text-gray-400">
//           Stay updated with our latest events. Participate in workshops,
//           enjoy cultural festivals, and more. Be part of our vibrant
//           community!
//         </p>
//       </div>
//       <div className="col-span-4 md:col-span-2 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
//         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
//         <p className="text-gray-400">
//           Stay updated with our latest events. Participate in workshops,
//           enjoy cultural festivals, and more. Be part of our vibrant
//           community!
//         </p>
//       </div>
//       <div className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
//         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
//         <p className="text-gray-400">
//           Stay updated with our latest events. Participate in workshops,
//           enjoy cultural festivals, and more. Be part of our vibrant
//           community!
//         </p>
//       </div>

//       {/* {events.length > 0 ? (
//         events.slice(0, 2).map((event, index) => (
//           <div
//             key={event.id}
//             className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg"
//           >
//             <h3 className="text-[#F5F1E1] text-xl font-semibold mb-4">
//               {index === 0 ? "Nearest Event" : "Next Event"}
//             </h3>
//             <div className="bg-black w-full h-40 mb-4 flex items-center justify-center text-[#F5F1E1]">
//               <img
//                 src={event.poster}
//                 alt={event.eventName}
//                 className="w-full h-full object-cover rounded"
//               />
//             </div>
//             <h4 className="text-lg font-bold text-[#F5F1E1] mb-2">
//               {event.eventName}
//             </h4>
//             <p className="text-gray-400 mb-1">
//               <strong>Date:</strong>{" "}
//               {new Date(event.startDate).toDateString()}
//             </p>
//             <p className="text-gray-400 mb-4">
//               <strong>Venue:</strong> {event.venue}
//             </p>
//             <button
//               className={`w-full py-2 rounded-lg ${
//                 event.eventType === "Free"
//                   ? "bg-green-600 text-[#F5F1E1] hover:bg-green-700"
//                   : "bg-red-600 text-[#F5F1E1] hover:bg-red-700"
//               } transition`}
//             >
//               {event.eventType === "Free" ? "Register Now" : "Buy Ticket"}
//             </button>
//           </div>
//         ))
//       ) : (
//         <div className="col-span-4 text-[#F5F1E1]">
//           <p>No upcoming events available.</p>
//         </div>
//       )} */}

//       <div className="hidden md:block md:col-span-1"></div>
//     </div>
//   </div>
// </section>
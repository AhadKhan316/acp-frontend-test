import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Main Image
import posterImgMain from "/src/assets/ArtsAlumniAssets/alumni-main-poster-2025.jpeg";

// Segments Images
import posterImg1 from "/src/assets/ArtsAlumniAssets/an-Innocent-Murder-segment1.jpg";
import posterImg2 from "/src/assets/ArtsAlumniAssets/Kathak-Workshop-by-Nighat-Chaudhry-segment2.jpg";
import posterImg3 from "/src/assets/ArtsAlumniAssets/Salgirah-segment3.jpg";
import posterImg4 from "/src/assets/ArtsAlumniAssets/Glass-Menagerie-segment4.jpg";
import posterImg5 from "/src/assets/ArtsAlumniAssets/bharatanatyam-workshop-segment5.jpg";
import posterImg6 from "/src/assets/ArtsAlumniAssets/double-Bill-segment6.jpg";
import posterImg7 from "/src/assets/ArtsAlumniAssets/Voice-Workshop-Khalid-Ahmed-segment7.jpg";
import posterImg8 from "/src/assets/ArtsAlumniAssets/daastangoi-segment8.png";
import posterImg9 from "/src/assets/ArtsAlumniAssets/block-Printing-Workshop-segment9.jpg";
import posterImg10 from "/src/assets/ArtsAlumniAssets/alumni-Art-Exhibition-segment10.jpg";

// Schedule Posters
import day1Poster from "/src/assets/ArtsAlumniAssets/schedule-day1.jpg";
import day2Poster from "/src/assets/ArtsAlumniAssets/schedule-day2.jpg";
import day3Poster from "/src/assets/ArtsAlumniAssets/schedule-day3.jpg";

const AlumniPage = () => {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState("Day 1");

  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const segments = [
    { title: "An Innocent Little Murder", image: posterImg1 },
    { title: "Kathak Workshop by Nighat Chaudhry", image: posterImg2 },
    { title: "Salgirah", image: posterImg3 },
    { title: "Glass Menagerie", image: posterImg4 },
    { title: "Double Bill", image: posterImg6 },
    { title: "Voice Workshop by Khalid Ahmed", image: posterImg7 },
    { title: "Daastangoi", image: posterImg8 },
    { title: "Block Printing Workshop", image: posterImg9 },
    { title: "Alumni Art Exhibition", image: posterImg10 },
  ];

  const handleRegisterClick = () => {
    navigate("/alumni/register");
  };

  // Schedule Data for Day 1, Day 2, and Day 3
  const schedules = {
    "Day 1": [
      {
        title: "Opening Ceremony | Art Exhibition",
        time: "4:00 PM",
        details: "By Arts Council - Directed (Sheikh Qasim - President)",
      },
      {
        title: "Theatre Play (Dark Comedy): An Innocent Murder",
        time: "7:00 PM",
        details: "Director: Alumni Voices | Cast: Sarah, Tariq, Ahmed, Ali",
      },
      {
        title: "Kathak Dance Workshop",
        time: "2:00 PM",
        details: [
          "Main Performance",
          "Theatre Play (Family Drama) Salgirah",
          "8:00 PM",
          "Director: Fatima Jaffar",
        ],
      },
      {
        title: "Exhibitions",
        details: ["Art Gallery & Dance Art", "Exhibition by Focal Panel"],
      },
      {
        title: "Engage & Learn",
        time: "8:00 PM",
        details: ["Block & Screen Printing - Introduce Old & New Exhibits"],
      },
    ],
    "Day 2": [
      {
        title: "Voice Workshop by Khalid Ahmed",
        time: "10:00 AM",
        details: "Enhance your vocal skills with expert guidance.",
      },
      {
        title: "Theatre Play: Glass Menagerie",
        time: "3:00 PM",
        details: "Director: Alumni Group | Cast: Ayesha, Imran, Zain",
      },
      {
        title: "Daastangoi Performance",
        time: "6:00 PM",
        details: "Traditional storytelling by renowned artists.",
      },
    ],
    "Day 3": [
      {
        title: "Block Printing Workshop",
        time: "11:00 AM",
        details: "Learn the art of block printing with hands-on experience.",
      },
      {
        title: "Double Bill Theatre Plays",
        time: "4:00 PM",
        details: "Two short plays performed by alumni artists.",
      },
      {
        title: "Closing Ceremony | Alumni Art Exhibition",
        time: "7:00 PM",
        details: "Celebrate the festival's conclusion with an art showcase.",
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <img
          src={posterImgMain}
          alt="Arts Alumni Festival 2025"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          {/* <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4 drop-shadow-lg">
            Arts Alumni Festival 2025
          </h1> */}
          {/* <p className="text-lg sm:text-xl lg:text-2xl mb-8 drop-shadow-md">9-11 May</p> */}
          {/* <motion.button
            className="px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRegisterClick}
          >
            Register
          </motion.button> */}
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          Arts Alumni Festival
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-center">
          The Arts Council of Pakistan presents the Arts Alumni Festival 2025. A
          spectacular three-day celebration hosted by the School of E & Performing Arts.
          Join us for a vibrant gathering of past students and art enthusiasts for an
          exhilarating experience.
        </p>
      </motion.section>

      {/* Segments Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center uppercase tracking-wider">
            Segments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-64 sm:h-72 lg:h-80 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                    {segment.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Schedule Section */}
      <motion.section
        className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center uppercase tracking-wider">
          Schedule
        </h2>
        <div className="flex justify-center space-x-4 mb-12">
          {["Day 1", "Day 2", "Day 3"].map((day) => (
            <motion.button
              key={day}
              className={`px-6 py-3 font-semibold text-base rounded-full shadow-md transition duration-300 ${activeDay === day
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDay(day)}
            >
              {day} - May {8 + parseInt(day.split(" ")[1])}
            </motion.button>
          ))}
        </div>
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {schedules[activeDay].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              {item.time && (
                <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2">
                  {item.time}
                </p>
              )}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              {Array.isArray(item.details) ? (
                item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm sm:text-base">
                    {detail}
                  </p>
                ))
              ) : (
                <p className="text-gray-600 text-sm sm:text-base">{item.details}</p>
              )}
            </div>
          ))}
        </motion.div>
        <div className="flex justify-center gap-6 mt-12">
          <img
            src={day1Poster}
            alt="Day 1 Poster"
            className="w-full h-64 sm:h-72 lg:h-80 object-contain rounded-lg shadow-md max-w-[200px] sm:max-w-[250px]"
          />
          <img
            src={day2Poster}
            alt="Day 2 Poster"
            className="w-full h-64 sm:h-72 lg:h-80 object-contain rounded-lg shadow-md max-w-[200px] sm:max-w-[250px]"
          />
          <img
            src={day3Poster}
            alt="Day 3 Poster"
            className="w-full h-64 sm:h-72 lg:h-80 object-contain rounded-lg shadow-md max-w-[200px] sm:max-w-[250px]"
          />
        </div>
      </motion.section>

      {/* Tickets Section */}
      <motion.section
        className="py-16 bg-blue-600 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Get Your Tickets Now
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
          Don’t miss this three-day celebration of creativity! Secure your
          tickets today for the Arts Alumni Festival 2025 to be part of this unforgettable
          experience showcasing performances, workshops, art exhibitions.
        </p>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 italic">
          * Single Day: Rs. 2000 | 3 Days: Rs. 5000 (all events at choice)
        </p>
        <motion.button
          className="px-10 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRegisterClick}
        >
          Buy Tickets
        </motion.button>
      </motion.section>
    </div>
  );
};

export default AlumniPage;
import React, { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const segments = [
    {
      title: "An Innocent Little Murder",
      image: posterImg1,
      description: "A dark comedy exploring the unexpected consequences of a seemingly harmless act."
    },
    {
      title: "Kathak Workshop by Nighat Chaudhry",
      image: posterImg2,
      description: "Learn the intricate footwork and expressive gestures of Kathak from a master."
    },
    {
      title: "Salgirah",
      image: posterImg3,
      description: "A heartwarming family drama celebrating cultural traditions and relationships."
    },
    {
      title: "Glass Menagerie",
      image: posterImg4,
      description: "Tennessee Williams' classic play about family, fragility, and the pursuit of dreams."
    },
    {
      title: "Double Bill",
      image: posterImg6,
      description: "Two compelling short plays showcasing diverse theatrical styles in one evening."
    },
    {
      title: "Voice Workshop by Khalid Ahmed",
      image: posterImg7,
      description: "Develop your vocal presence and projection with techniques from a seasoned performer."
    },
    {
      title: "Daastangoi",
      image: posterImg8,
      description: "Experience the ancient art of Urdu storytelling with contemporary narratives."
    },
    {
      title: "Block Printing Workshop",
      image: posterImg9,
      description: "Create beautiful patterns using traditional block printing techniques."
    },
    {
      title: "Alumni Art Exhibition",
      image: posterImg10,
      description: "A curated collection of visual artworks by talented alumni artists."
    },
  ];

  const handleRegisterClick = () => {
    navigate("/alumni/register");
  };

  const schedules = {
    "Day 1": [
      {
        title: "Opening Ceremony | Art Exhibition",
        time: "4:00 PM",
        location: "Main Auditorium",
        details: "By Arts Council - Directed (Sheikh Qasim - President)",
        highlight: true
      },
      {
        title: "Theatre Play (Dark Comedy): An Innocent Murder",
        time: "7:00 PM",
        location: "Theatre Hall 1",
        details: "Director: Alumni Voices | Cast: Sarah, Tariq, Ahmed, Ali",
      },
      {
        title: "Kathak Dance Workshop",
        time: "2:00 PM",
        location: "Dance Studio A",
        details: [
          "Main Performance",
          "Theatre Play (Family Drama) Salgirah",
          "8:00 PM",
          "Director: Fatima Jaffar",
        ],
      },
      {
        title: "Exhibitions",
        time: "All Day",
        location: "Gallery Wing",
        details: ["Art Gallery & Dance Art", "Exhibition by Focal Panel"],
      },
      {
        title: "Engage & Learn",
        time: "8:00 PM",
        location: "Workshop Room 3",
        details: ["Block & Screen Printing - Introduce Old & New Exhibits"],
      },
    ],
    "Day 2": [
      {
        title: "Voice Workshop by Khalid Ahmed",
        time: "10:00 AM",
        location: "Workshop Room 2",
        details: "Enhance your vocal skills with expert guidance.",
      },
      {
        title: "Theatre Play: Glass Menagerie",
        time: "3:00 PM",
        location: "Theatre Hall 2",
        details: "Director: Alumni Group | Cast: Ayesha, Imran, Zain",
        highlight: true
      },
      {
        title: "Daastangoi Performance",
        time: "6:00 PM",
        location: "Outdoor Amphitheatre",
        details: "Traditional storytelling by renowned artists.",
      },
    ],
    "Day 3": [
      {
        title: "Block Printing Workshop",
        time: "11:00 AM",
        location: "Arts & Crafts Room",
        details: "Learn the art of block printing with hands-on experience.",
      },
      {
        title: "Double Bill Theatre Plays",
        time: "4:00 PM",
        location: "Theatre Hall 1",
        details: "Two short plays performed by alumni artists.",
      },
      {
        title: "Closing Ceremony | Alumni Art Exhibition",
        time: "7:00 PM",
        location: "Main Auditorium",
        details: "Celebrate the festival's conclusion with an art showcase.",
        highlight: true
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Floating Register Button */}
      {isScrolled && (
        <motion.button
          className="fixed right-6 bottom-6 z-50 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRegisterClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          Register Now
        </motion.button>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] sm:h-[70vh] lg:h-[90vh] flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={posterImgMain}
            alt="Arts Alumni Festival 2025"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 w-full max-w-6xl">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Arts Alumni Festival
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl mb-8 drop-shadow-md font-light tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            May 9-11, 2025 | School of E & Performing Arts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRegisterClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Register Now
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        className="py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Celebrating Creative Excellence
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            The Arts Council of Pakistan proudly presents the <span className="font-semibold text-blue-600">Arts Alumni Festival 2025</span>.
            This spectacular three-day celebration hosted by the School of E & Performing Arts brings together
            generations of talented artists for a vibrant reunion of creativity, learning, and performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              ),
              title: "Performances",
              description: "Experience captivating theatre, dance, and storytelling performances by talented alumni."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              title: "Workshops",
              description: "Learn from masters in voice, dance, and visual arts through interactive sessions."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              ),
              title: "Exhibitions",
              description: "Explore stunning visual art displays showcasing alumni creativity across mediums."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Segments Section */}
      <motion.section
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Festival Highlights
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.p
              className="text-gray-600 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Discover the diverse range of performances, workshops, and exhibitions that make this festival unforgettable.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                onClick={() => setActiveSegment(activeSegment === index ? null : index)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">
                    {segment.title}
                  </h3>
                </div>
                <motion.div
                  className={`p-6 ${activeSegment === index ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <p className="text-gray-600 mb-4">{segment.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                    Learn more →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Schedule Section */}
      <motion.section
        className="py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Festival Schedule
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Plan your festival experience with our detailed schedule of events across three exciting days.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-12 bg-gray-100 p-2 rounded-full">
          {["Day 1", "Day 2", "Day 3"].map((day) => (
            <motion.button
              key={day}
              className={`px-6 py-3 font-semibold text-base rounded-full transition duration-300 flex-1 text-center ${activeDay === day
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-800 hover:bg-gray-200"
                }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
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
          className="space-y-6"
        >
          {schedules[activeDay].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${item.highlight ? 'border-blue-600' : 'border-gray-200'} hover:shadow-md transition-shadow`}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  {item.time && (
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-blue-600 font-medium">{item.time}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">{item.location}</span>
                    </div>
                  )}
                  <h3 className={`text-xl font-semibold ${item.highlight ? 'text-blue-600' : 'text-gray-800'}`}>
                    {item.title}
                  </h3>
                  {Array.isArray(item.details) ? (
                    <ul className="mt-2 space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 mt-2">{item.details}</p>
                  )}
                </div>
                {item.highlight && (
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition whitespace-nowrap">
                    Get Tickets
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Schedule Posters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { day: "Day 1", image: day1Poster },
              { day: "Day 2", image: day2Poster },
              { day: "Day 3", image: day3Poster }
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={`${item.day} Schedule`}
                  className="w-full h-64 object-contain"
                />
                <div className="p-4 text-center">
                  <h4 className="font-medium text-gray-800">{item.day} Schedule</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tickets Section */}
      <motion.section
        className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Secure Your Festival Pass
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-white mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-lg sm:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Don't miss this extraordinary celebration of artistic excellence. Register now to guarantee your
            access to all performances, workshops, and exhibitions across three inspiring days.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-2">Single Day Pass</h3>
              <p className="text-3xl font-bold mb-2">Rs. 2,000</p>
              <p className="text-blue-100">Access to all events on your chosen day</p>
            </motion.div>
            <motion.div
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border-2 border-yellow-400"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-2">Full Festival Pass</h3>
              <p className="text-3xl font-bold mb-2">Rs. 5,000</p>
              <p className="text-blue-100">Access to all three days of the festival</p>
              <div className="mt-3 text-yellow-300 font-medium">Save Rs. 1,000</div>
            </motion.div>
          </div>

          <motion.button
            className="px-10 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-100 transition duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRegisterClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Buy Tickets Now
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
};

export default AlumniPage;
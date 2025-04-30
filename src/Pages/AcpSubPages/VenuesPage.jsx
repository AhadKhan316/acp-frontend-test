import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaCheckCircle } from "react-icons/fa";

// Placeholder images for the hero section
const placeholderImage = "https://via.placeholder.com/400x300";

// Import venue images
import venueImg1 from "/src/assets/venues/audi1.png";
import venueImg2 from "/src/assets/venues/audi2.png";
import venueImg3 from "/src/assets/venues/studio1.png";
import venueImg4 from "/src/assets/venues/studio2.png";
import venueImg5 from "/src/assets/venues/haseena-moin.png";
import venueImg6 from "/src/assets/venues/jaun-elia.png";
import venueImg7 from "/src/assets/venues/ampitheatre.png";
import venueImg8 from "/src/assets/venues/cafe.png";
import venueImg9 from "/src/assets/venues/art-gallery.png";
import venueImg10 from "/src/assets/venues/library.png";
import venueImg11 from "/src/assets/venues/rooftop.png";
import venueImg12 from "/src/assets/venues/lobby.png";
import venueImg13 from "/src/assets/venues/gulrang.png";
import venueImg14 from "/src/assets/venues/audio-studio.png";
import venueImg15 from "/src/assets/venues/parking.png";

const VenueSubPage = () => {
  const { venueId } = useParams();

  const venueData = {
    audi1: {
      name: "Auditorium 1",
      mainImage: venueImg1,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "50 sq.ft conference room",
        "High-speed Wi-Fi",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "500 sq.ft",
        "Capacity": "300 people",
        "Type": "Indoor",
      },
      description: "Auditorium 1 is a spacious venue perfect for large-scale events, conferences, and performances. Equipped with state-of-the-art sound and lighting systems, it offers an immersive experience for both performers and audiences.",
    },
    audi2: {
      name: "Auditorium 2",
      mainImage: venueImg2,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "40 sq.ft conference room",
        "High-speed Wi-Fi",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "450 sq.ft",
        "Capacity": "250 people",
        "Type": "Indoor",
      },
      description: "Auditorium 2 is ideal for mid-sized events, offering a comfortable setting with excellent acoustics and modern amenities for a seamless experience.",
    },
    studio1: {
      name: "Studio 1",
      mainImage: venueImg3,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Recording equipment",
        "Soundproof walls",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "200 sq.ft",
        "Capacity": "50 people",
        "Type": "Indoor",
      },
      description: "Studio 1 is a professional recording space designed for music, podcasts, and small performances, featuring soundproofing and high-quality equipment.",
    },
    studio2: {
      name: "Studio 2",
      mainImage: venueImg4,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Recording equipment",
        "Soundproof walls",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "180 sq.ft",
        "Capacity": "40 people",
        "Type": "Indoor",
      },
      description: "Studio 2 offers a cozy environment for intimate recordings and small gatherings, with top-notch audio equipment and a professional setup.",
    },
    "haseena-moin-hall": {
      name: "Haseena Moin Hall",
      mainImage: venueImg5,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Stage setup",
        "Lighting grid",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "600 sq.ft",
        "Capacity": "400 people",
        "Type": "Indoor",
      },
      description: "Haseena Moin Hall is a grand venue for theatrical performances and large events, offering a spacious stage and modern lighting systems.",
    },
    "jaun-elia-lawn": {
      name: "Jaun Elia Lawn",
      mainImage: venueImg6,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Open-air seating",
        "Lighting setup",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "1000 sq.ft",
        "Capacity": "500 people",
        "Type": "Outdoor",
      },
      description: "Jaun Elia Lawn is an open-air venue perfect for outdoor concerts, weddings, and cultural events, with beautiful landscaping and ample space.",
    },
    "za-bukhari-amphitheatre": {
      name: "Z.A Bukhari Amphitheatre",
      mainImage: venueImg7,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Tiered seating",
        "Lighting setup",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "800 sq.ft",
        "Capacity": "350 people",
        "Type": "Outdoor",
      },
      description: "Z.A Bukhari Amphitheatre offers a unique outdoor setting for performances and events, with tiered seating and excellent acoustics.",
    },
    "cafe-d-art": {
      name: "Café D' Art",
      mainImage: venueImg8,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Seating for 50",
        "Coffee bar",
        "Wi-Fi",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "150 sq.ft",
        "Capacity": "50 people",
        "Type": "Indoor",
      },
      description: "Café D' Art is a cozy space for casual gatherings, art discussions, and small events, with a warm ambiance and excellent coffee.",
    },
    "ahmed-pervez-art-gallery": {
      name: "Ahmed Pervez Art Gallery",
      mainImage: venueImg9,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Exhibition space",
        "Lighting grid",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "300 sq.ft",
        "Capacity": "100 people",
        "Type": "Indoor",
      },
      description: "Ahmed Pervez Art Gallery is a dedicated space for art exhibitions, showcasing local and international artists in a beautifully curated environment.",
    },
    "josh-malihabadi-library": {
      name: "Josh Malihabadi Library",
      mainImage: venueImg10,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Reading rooms",
        "Wi-Fi",
        "Quiet zones",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "250 sq.ft",
        "Capacity": "80 people",
        "Type": "Indoor",
      },
      description: "Josh Malihabadi Library is a serene space for reading and research, with a vast collection of books and a quiet atmosphere.",
    },
    "360-rooftop-lounge": {
      name: "360° Rooftop Lounge",
      mainImage: venueImg11,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Panoramic views",
        "Seating for 100",
        "Lighting setup",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "700 sq.ft",
        "Capacity": "150 people",
        "Type": "Outdoor",
      },
      description: "360° Rooftop Lounge offers stunning views and a relaxed setting for events, parties, and gatherings, with a modern rooftop design.",
    },
    "lobby-area": {
      name: "Lobby Area",
      mainImage: venueImg12,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Seating area",
        "Wi-Fi",
        "Reception desk",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "400 sq.ft",
        "Capacity": "120 people",
        "Type": "Indoor",
      },
      description: "The Lobby Area is a welcoming space for guests, ideal for receptions, meet-and-greets, and casual gatherings.",
    },
    "gulrang-cafe": {
      name: "Gulrang Café",
      mainImage: venueImg13,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Seating for 40",
        "Coffee bar",
        "Wi-Fi",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "120 sq.ft",
        "Capacity": "40 people",
        "Type": "Indoor",
      },
      description: "Gulrang Café is a quaint space for coffee lovers, offering a cozy environment for small meetings and casual hangouts.",
    },
    "audio-studio": {
      name: "Audio Studio",
      mainImage: venueImg14,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Recording equipment",
        "Soundproof walls",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "180 sq.ft",
        "Capacity": "30 people",
        "Type": "Indoor",
      },
      description: "The Audio Studio is a professional space for audio recordings, equipped with soundproofing and high-quality equipment.",
    },
    "parking-area": {
      name: "Parking Area",
      mainImage: venueImg15,
      heroImages: Array.from({ length: 3 }, (_, i) => placeholderImage),
      facilities: [
        "Space for 200 vehicles",
        "Security cameras",
        "Lighting",
        "Backup power supply",
        "Easy access",
      ],
      details: {
        "Area": "2000 sq.ft",
        "Capacity": "200 vehicles",
        "Type": "Outdoor",
      },
      description: "The Parking Area provides ample space for vehicles, ensuring safety and convenience for all visitors.",
    },
  };

  const [currentVenue, setCurrentVenue] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const loadData = () => {
      const data = venueData[venueId] || venueData["studio1"];
      if (data) {
        setCurrentVenue(data);
      } else {
        console.error("No data found for venue:", venueId);
      }
    };
    loadData();
  }, [venueId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isSidebarOpen) {
      setIsSidebarOpen(false); // Close sidebar on mobile after clicking
    }
  };

  if (!currentVenue) {
    return (
      <div className="text-center py-10 text-black">
        Loading venue data...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <section className="relative mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentVenue.heroImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Venue ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                  style={{ backgroundColor: "#e5e7eb" }}
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 to-red-600/40">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentVenue.name}
            </motion.h1>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-24">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("images")}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Images
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("facilities")}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("details")}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Details
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("description")}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Description
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Booking
                </button>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Images Section */}
            <section id="images" className="mb-12">
              <motion.div
                className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <img
                  src={currentVenue.mainImage}
                  alt={`${currentVenue.name} Main Image`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  style={{ backgroundColor: "#e5e7eb" }}
                />
              </motion.div>
            </section>

            {/* Facilities Section */}
            <section id="facilities" className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Facilities
              </h2>
              <ul className="space-y-3">
                {currentVenue.facilities.map((facility, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="text-red-600 mr-3" />
                    {facility}
                  </motion.li>
                ))}
              </ul>
            </section>

            {/* Details Section */}
            <section id="details" className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Details
              </h2>
              <div className="space-y-3">
                {Object.entries(currentVenue.details).map(([key, value], index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between border-b border-gray-200 py-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-semibold text-gray-900">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Description Section */}
            <section id="description" className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Description
              </h2>
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {currentVenue.description}
              </motion.p>
            </section>

            {/* Booking Section */}
            <section id="booking" className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Booking
              </h2>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-900 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-900 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your email"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-900 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your phone number"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-900 font-semibold mb-2">Select Venue</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    defaultValue={venueId}
                  >
                    {Object.keys(venueData).map((key) => (
                      <option key={key} value={key}>{venueData[key].name}</option>
                    ))}
                  </select>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-900 font-semibold mb-2">Date of Event</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-900 font-semibold mb-2">Start Time</label>
                  <input
                    type="time"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-900 font-semibold mb-2">End Time</label>
                  <input
                    type="time"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-900 font-semibold mb-2">Message</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </motion.div>
                <motion.button
                  className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Submit
                </motion.button>
              </div>
            </section>
          </main>
        </div>
      </div>

    </div>
  );
};

export default VenueSubPage;
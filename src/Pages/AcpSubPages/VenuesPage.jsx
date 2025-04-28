import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow for Slider
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-white text-2xl" />
  </button>
);

// Custom Prev Arrow for Slider
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-white text-2xl" />
  </button>
);

const placeholderImages = {
  audi1: [
    "/src/assets/venues/audi1.png",
    "/src/assets/venues/Audi1/audi1.1jpg",
    "https://via.placeholder.com/400x300?text=Audi1-Image3",
    "https://via.placeholder.com/400x300?text=Audi1-Image4",
    "https://via.placeholder.com/400x300?text=Audi1-Image5",
  ],
  audi2: [
    "/src/assets/venues/audi2.png",
    "https://via.placeholder.com/400x300?text=Audi2-Image2",
    "https://via.placeholder.com/400x300?text=Audi2-Image3",
    "https://via.placeholder.com/400x300?text=Audi2-Image4",
    "https://via.placeholder.com/400x300?text=Audi2-Image5",
  ],
  studio1: [
    "/src/assets/venues/studio1.png",
    "https://via.placeholder.com/400x300?text=Studio1-Image2",
    "https://via.placeholder.com/400x300?text=Studio1-Image3",
    "https://via.placeholder.com/400x300?text=Studio1-Image4",
    "https://via.placeholder.com/400x300?text=Studio1-Image5",
  ],
  studio2: [
    "/src/assets/venues/studio2.png",
    "https://via.placeholder.com/400x300?text=Studio2-Image2",
    "https://via.placeholder.com/400x300?text=Studio2-Image3",
    "https://via.placeholder.com/400x300?text=Studio2-Image4",
    "https://via.placeholder.com/400x300?text=Studio2-Image5",
  ],
  "haseena-moin-hall": [
    "/src/assets/venues/haseena-moin.png",
    "https://via.placeholder.com/400x300?text=HaseenaMoin-Image2",
    "https://via.placeholder.com/400x300?text=HaseenaMoin-Image3",
    "https://via.placeholder.com/400x300?text=HaseenaMoin-Image4",
    "https://via.placeholder.com/400x300?text=HaseenaMoin-Image5",
  ],
  "jaun-elia-lawn": [
    "/src/assets/venues/jaun-elia.png",
    "https://via.placeholder.com/400x300?text=JaunElia-Image2",
    "https://via.placeholder.com/400x300?text=JaunElia-Image3",
    "https://via.placeholder.com/400x300?text=JaunElia-Image4",
    "https://via.placeholder.com/400x300?text=JaunElia-Image5",
  ],
  "za-bukhari-amphitheatre": [
    "/src/assets/venues/ampitheatre.png",
    "https://via.placeholder.com/400x300?text=ZABukhari-Image2",
    "https://via.placeholder.com/400x300?text=ZABukhari-Image3",
    "https://via.placeholder.com/400x300?text=ZABukhari-Image4",
    "https://via.placeholder.com/400x300?text=ZABukhari-Image5",
  ],
  "cafe-d-art": [
    "/src/assets/venues/cafe.png",
    "https://via.placeholder.com/400x300?text=CafeDArt-Image2",
    "https://via.placeholder.com/400x300?text=CafeDArt-Image3",
    "https://via.placeholder.com/400x300?text=CafeDArt-Image4",
    "https://via.placeholder.com/400x300?text=CafeDArt-Image5",
  ],
  "ahmed-pervez-art-gallery": [
    "/src/assets/venues/art-gallery.png",
    "https://via.placeholder.com/400x300?text=AhmedPervez-Image2",
    "https://via.placeholder.com/400x300?text=AhmedPervez-Image3",
    "https://via.placeholder.com/400x300?text=AhmedPervez-Image4",
    "https://via.placeholder.com/400x300?text=AhmedPervez-Image5",
  ],
  "josh-malihabadi-library": [
    "/src/assets/venues/library.png",
    "https://via.placeholder.com/400x300?text=JoshMalihabadi-Image2",
    "https://via.placeholder.com/400x300?text=JoshMalihabadi-Image3",
    "https://via.placeholder.com/400x300?text=JoshMalihabadi-Image4",
    "https://via.placeholder.com/400x300?text=JoshMalihabadi-Image5",
  ],
  "360-rooftop-lounge": [
    "/src/assets/venues/rooftop.png",
    "https://via.placeholder.com/400x300?text=360Rooftop-Image2",
    "https://via.placeholder.com/400x300?text=360Rooftop-Image3",
    "https://via.placeholder.com/400x300?text=360Rooftop-Image4",
    "https://via.placeholder.com/400x300?text=360Rooftop-Image5",
  ],
  "lobby-area": [
    "/src/assets/venues/lobby.png",
    "https://via.placeholder.com/400x300?text=LobbyArea-Image2",
    "https://via.placeholder.com/400x300?text=LobbyArea-Image3",
    "https://via.placeholder.com/400x300?text=LobbyArea-Image4",
    "https://via.placeholder.com/400x300?text=LobbyArea-Image5",
  ],
  "gulrang-cafe": [
    "/src/assets/venues/gulrang.png",
    "https://via.placeholder.com/400x300?text=GulrangCafe-Image2",
    "https://via.placeholder.com/400x300?text=GulrangCafe-Image3",
    "https://via.placeholder.com/400x300?text=GulrangCafe-Image4",
    "https://via.placeholder.com/400x300?text=GulrangCafe-Image5",
  ],
  "audio-studio": [
    "/src/assets/venues/audio-studio.png",
    "https://via.placeholder.com/400x300?text=AudioStudio-Image2",
    "https://via.placeholder.com/400x300?text=AudioStudio-Image3",
    "https://via.placeholder.com/400x300?text=AudioStudio-Image4",
    "https://via.placeholder.com/400x300?text=AudioStudio-Image5",
  ],
  "parking-area": [
    "/src/assets/venues/parking.png",
    "https://via.placeholder.com/400x300?text=ParkingArea-Image2",
    "https://via.placeholder.com/400x300?text=ParkingArea-Image3",
    "https://via.placeholder.com/400x300?text=ParkingArea-Image4",
    "https://via.placeholder.com/400x300?text=ParkingArea-Image5",
  ],
};


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
      heroImages: placeholderImages.audi1,
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
      heroImages: placeholderImages.audi2,
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
      heroImages: placeholderImages.studio1,
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
      heroImages: placeholderImages.studio2,
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
      heroImages: placeholderImages["haseena-moin-hall"],
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
      heroImages: placeholderImages["jaun-elia-lawn"],
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
      heroImages: placeholderImages["za-bukhari-amphitheatre"],
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
      heroImages: placeholderImages["cafe-d-art"],
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
      heroImages: placeholderImages["ahmed-pervez-art-gallery"],
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
      heroImages: placeholderImages["josh-malihabadi-library"],
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
      heroImages: placeholderImages["360-rooftop-lounge"],
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
      heroImages: placeholderImages["lobby-area"],
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
      heroImages: placeholderImages["gulrang-cafe"],
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
      heroImages: placeholderImages["audio-studio"],
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
      heroImages: placeholderImages["parking-area"],
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
  const [activeTab, setActiveTab] = useState("facilities");

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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (!currentVenue) {
    return (
      <div className="text-center py-10 text-black">
        Loading venue data...
      </div>
    );
  }

  return (
    <div className="bg-white text-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">

            <div className="lg:w-2/3">
              <Slider {...sliderSettings}>
                {currentVenue.heroImages.map((image, index) => (
                  <div key={index} className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Venue Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ backgroundColor: "#e5e7eb" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Description */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About the Venue
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {currentVenue.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Tabbed Content */}
        <section>

          <div className="mb-12 flex flex-col sm:flex-row gap-2 sm:gap-4">
            {["facilities", "details", "booking"].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-3 rounded-xl text-lg font-semibold capitalize transition-colors duration-300 ${activeTab === tab
                  ? "bg-[#B90602] text-white shadow-md cursor-pointer"
                  : "bg-[#B90602] text-white cursor-pointer hover:bg-black/80 hover:shadow-lg"
                  }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === "facilities" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Facilities
                </h2>
                <ul className="space-y-3">
                  {currentVenue.facilities.map((facility, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-600 mr-3" />
                      {facility}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === "details" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Details
                </h2>
                <div className="space-y-3">
                  {Object.entries(currentVenue.details).map(([key, value], index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between border-b border-gray-200 py-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="font-semibold text-gray-900">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "booking" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Booking
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Select Venue</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      defaultValue={venueId}
                    >
                      {Object.keys(venueData).map((key) => (
                        <option key={key} value={key}>{venueData[key].name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Date of Event</label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Start Time</label>
                    <input
                      type="time"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">End Time</label>
                    <input
                      type="time"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Message</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <motion.button
                    className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VenueSubPage;
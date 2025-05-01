<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import SponsorLogo1 from '../assets/wcf-assets/sponsor1.png'
import SponsorLogo2 from '../assets/wcf-assets/sponsor2.png'
import SponsorLogo3 from '../assets/wcf-assets/sponsor3.png'
import SponsorLogo4 from '../assets/wcf-assets/sponsor1.png'
import SponsorLogo5 from '../assets/wcf-assets/sponsor3.png'

const ACPSponsors = () => {
  const sponsors = [
    { id: 1, name: 'InnovateCorp', logo: SponsorLogo1 },
    { id: 2, name: 'EcoSystems', logo: SponsorLogo2 },
    { id: 3, name: 'GlobalNet', logo: SponsorLogo3 },
    { id: 4, name: 'VisionLabs', logo: SponsorLogo4 },
    { id: 5, name: 'PeakPulse', logo: SponsorLogo5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive item count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleItems(4);
      else if (window.innerWidth >= 768) setVisibleItems(3);
      else setVisibleItems(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(sponsors.length - visibleItems, 0);

  // Auto-play logic
  useEffect(() => {
    if (!isPaused && sponsors.length > visibleItems) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, maxIndex, sponsors.length, visibleItems]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => goToSlide(currentIndex === 0 ? maxIndex : currentIndex - 1);
  const nextSlide = () => goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1);

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-4">
            Our Sponsors
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div> */}
        </motion.div>

        {/* Modern Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Track */}
          <div className="overflow-hidden px-2">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <motion.div
                    className="h-48 bg-white rounded-2xl flex items-center justify-center p-8 border border-gray-200 hover:border-black transition-all duration-300"
                    whileHover={{ y: -8, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
=======
import React from "react";
import { motion } from "framer-motion";

// Import your sponsor logos - replace these with your actual imports
import MainSponsor1 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import MainSponsor2 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import MainSponsor3 from "../assets/wcf-assets/wcf-sponsors/sponsor2.png";
import MainSponsor4 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import NormalSponsor1 from "../assets/wcf-assets/wcf-sponsors/sponsor3.png";
import NormalSponsor2 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import NormalSponsor3 from "../assets/wcf-assets/wcf-sponsors/sponsor3.png";
import NormalSponsor4 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import NormalSponsor5 from "../assets/wcf-assets/wcf-sponsors/sponsor2.png";
import BasicSponsor1 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import BasicSponsor2 from "../assets/wcf-assets/wcf-sponsors/sponsor3.png";
import BasicSponsor3 from "../assets/wcf-assets/wcf-sponsors/sponsor2.png";
import BasicSponsor4 from "../assets/wcf-assets/wcf-sponsors/sponsor3.png";
import BasicSponsor5 from "../assets/wcf-assets/wcf-sponsors/sponsor1.png";
import BasicSponsor6 from "../assets/wcf-assets/wcf-sponsors/sponsor2.png";

const SponsorsSection = () => {
  const mainSponsors = [
    [
      { id: 1, name: "Premium Partner", logo: MainSponsor1 },
      { id: 2, name: "Gold Sponsor", logo: MainSponsor2 },
      { id: 3, name: "Silver Sponsor", logo: MainSponsor3 },
      { id: 4, name: "Technology Partner", logo: MainSponsor4 }
    ],
    [
      { id: 5, name: "Partner A", logo: NormalSponsor1 },
      { id: 6, name: "Partner B", logo: NormalSponsor2 },
      { id: 7, name: "Partner C", logo: NormalSponsor3 }
    ],
    [
      { id: 8, name: "Partner X", logo: NormalSponsor4 },
      { id: 9, name: "Partner Y", logo: NormalSponsor5 }
    ],
    [
      { id: 10, name: "Primary", logo: BasicSponsor1 }
    ]
  ];

  const normalSponsors = [
    [
      { id: 11, name: "Supporter 1", logo: BasicSponsor1 },
      { id: 12, name: "Supporter 2", logo: BasicSponsor2 },
      { id: 13, name: "Supporter 3", logo: BasicSponsor3 },
      { id: 14, name: "Supporter 4", logo: BasicSponsor4 }
    ],
    [
      { id: 15, name: "Supporter A", logo: BasicSponsor5 },
      { id: 16, name: "Supporter B", logo: BasicSponsor6 },
      { id: 17, name: "Supporter C", logo: BasicSponsor1 }
    ],
    [
      { id: 18, name: "Supporter X", logo: BasicSponsor2 },
      { id: 19, name: "Supporter Y", logo: BasicSponsor3 }
    ],
    [
      { id: 20, name: "Basic", logo: BasicSponsor4 }
    ]
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const getGridCols = (length) => {
    if (length === 4) return "md:grid-cols-4";
    if (length === 3) return "md:grid-cols-3";
    if (length === 2) return "md:grid-cols-2";
    return "md:grid-cols-1";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Sponsors
        </motion.h2>

        {/* Top Sponsors */}
        <motion.div
          className="mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Main Sponsors</h3> */}
          <div className="space-y-8">
            {mainSponsors.map((row, rowIndex) => (
              <div
                key={`main-row-${rowIndex}`}
                className={`grid grid-cols-1 ${getGridCols(row.length)} gap-6 justify-center`}
              >
                {row.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    className=" flex items-center justify-center"
                    variants={itemVariants}
                    whileHover="hover"
                    custom={index}
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
<<<<<<< HEAD
                      className="max-h-40 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {sponsors.length > visibleItems && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-black transition-all z-10"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 transition-all z-10"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Modern Pagination */}
          {sponsors.length > visibleItems && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx ? 'bg-gradient-to-r from-red-700 to-red-500 w-8' : 'bg-gray-200'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
=======
                      className="w-full h-auto max-h-35 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>



        {/* Mid Sponsors*/}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Partners</h3> */}
          <div className="space-y-8">
            {normalSponsors.map((row, rowIndex) => (
              <div
                key={`normal-row-${rowIndex}`}
                className={`grid grid-cols-1 ${getGridCols(row.length)} gap-6 justify-center`}
              >
                {row.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    className="p-4 flex items-center justify-center"
                    variants={itemVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-auto max-h-25 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>


        {/* Last Sponsors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Supporters</h3> */}
          <div className="space-y-8">
            {normalSponsors.map((row, rowIndex) => (
              <div
                key={`basic-row-${rowIndex}`}
                className={`grid grid-cols-1 ${getGridCols(row.length)} gap-4 justify-center`}
              >
                {row.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    className="p-3 flex items-center justify-center"
                    variants={itemVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-auto max-h-15 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default ACPSponsors;
=======
export default SponsorsSection;
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import SponsorLogo1 from '../assets/wcf-assets/wcf-sponsors/sponsor1.png';
import SponsorLogo2 from '../assets/wcf-assets/wcf-sponsors/sponsor2.png';
import SponsorLogo3 from '../assets/wcf-assets/wcf-sponsors/sponsor3.png';
import SponsorLogo4 from '../assets/wcf-assets/wcf-sponsors/sponsor1.png';
import SponsorLogo5 from '../assets/wcf-assets/wcf-sponsors/sponsor3.png';
import SponsorLogo6 from '../assets/wcf-assets/wcf-sponsors/sponsor1.png';
import SponsorLogo7 from '../assets/wcf-assets/wcf-sponsors/sponsor2.png';
import SponsorLogo8 from '../assets/wcf-assets/wcf-sponsors/sponsor3.png';
import SponsorLogo9 from '../assets/wcf-assets/wcf-sponsors/sponsor1.png';
import SponsorLogo10 from '../assets/wcf-assets/wcf-sponsors/sponsor2.png';
import SponsorLogo11 from '../assets/wcf-assets/wcf-sponsors/sponsor3.png';
import SponsorLogo12 from '../assets/wcf-assets/wcf-sponsors/sponsor1.png';
import SponsorLogo13 from '../assets/wcf-assets/wcf-sponsors/sponsor2.png';
import SponsorLogo14 from '../assets/wcf-assets/wcf-sponsors/sponsor3.png';
import SponsorLogo15 from '../assets/wcf-assets/wcf-sponsors/sponsor1.png';
import SponsorLogo16 from '../assets/wcf-assets/wcf-sponsors/sponsor2.png';
import SponsorLogo17 from '../assets/wcf-assets/wcf-sponsors/sponsor3.png';
import SponsorLogo18 from '../assets/wcf-assets/wcf-sponsors/sponsor1.png';
import SponsorLogo19 from '../assets/wcf-assets/wcf-sponsors/sponsor2.png';
import SponsorLogo20 from '../assets/wcf-assets/wcf-sponsors/sponsor3.png';
import SponsorLogo21 from '../assets/wcf-assets/wcf-sponsors/sponsor1.png';
import SponsorLogo22 from '../assets/wcf-assets/wcf-sponsors/sponsor2.png';
import SponsorLogo23 from '../assets/wcf-assets/wcf-sponsors/sponsor3.png';

const ACPSponsors = () => {
  const topSponsors = [
    { id: 1, name: 'TopSponsor1', logo: SponsorLogo1, size: 'large', position: { top: '5%', left: '5%' } },
    { id: 2, name: 'TopSponsor2', logo: SponsorLogo2, size: 'large', position: { top: '5%', left: '25%' } },
    { id: 3, name: 'TopSponsor3', logo: SponsorLogo3, size: 'large', position: { top: '5%', left: '45%' } },
    { id: 4, name: 'TopSponsor4', logo: SponsorLogo4, size: 'large', position: { top: '5%', right: '25%' } },
    { id: 5, name: 'TopSponsor5', logo: SponsorLogo5, size: 'large', position: { top: '5%', right: '5%' } },
  ];

  const normalSponsors = [
    { id: 6, name: 'NormalSponsor1', logo: SponsorLogo6, size: 'medium', position: { top: '30%', left: '5%' } },
    { id: 7, name: 'NormalSponsor2', logo: SponsorLogo7, size: 'medium', position: { top: '30%', left: '20%' } },
    { id: 8, name: 'NormalSponsor3', logo: SponsorLogo8, size: 'medium', position: { top: '30%', left: '35%' } },
    { id: 9, name: 'NormalSponsor4', logo: SponsorLogo9, size: 'medium', position: { top: '30%', left: '50%' } },
    { id: 10, name: 'NormalSponsor5', logo: SponsorLogo10, size: 'medium', position: { top: '30%', right: '35%' } },
    { id: 11, name: 'NormalSponsor6', logo: SponsorLogo11, size: 'medium', position: { top: '30%', right: '20%' } },
    { id: 12, name: 'NormalSponsor7', logo: SponsorLogo12, size: 'medium', position: { top: '40%', left: '15%' } },
    { id: 13, name: 'NormalSponsor8', logo: SponsorLogo13, size: 'medium', position: { top: '40%', right: '15%' } },
  ];

  const basicSponsors = [
    { id: 14, name: 'BasicSponsor1', logo: SponsorLogo14, size: 'small', position: { top: '55%', left: '5%' } },
    { id: 15, name: 'BasicSponsor2', logo: SponsorLogo15, size: 'small', position: { top: '55%', left: '15%' } },
    { id: 16, name: 'BasicSponsor3', logo: SponsorLogo16, size: 'small', position: { top: '55%', left: '25%' } },
    { id: 17, name: 'BasicSponsor4', logo: SponsorLogo17, size: 'small', position: { top: '55%', left: '35%' } },
    { id: 18, name: 'BasicSponsor5', logo: SponsorLogo18, size: 'small', position: { top: '55%', left: '45%' } },
    { id: 19, name: 'BasicSponsor6', logo: SponsorLogo19, size: 'small', position: { top: '55%', right: '35%' } },
    { id: 20, name: 'BasicSponsor7', logo: SponsorLogo20, size: 'small', position: { top: '55%', right: '25%' } },
    { id: 21, name: 'BasicSponsor8', logo: SponsorLogo21, size: 'small', position: { top: '55%', right: '15%' } },
    { id: 22, name: 'BasicSponsor9', logo: SponsorLogo22, size: 'small', position: { top: '55%', right: '5%' } },
    { id: 23, name: 'BasicSponsor10', logo: SponsorLogo23, size: 'small', position: { top: '65%', left: '40%' } },
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Responsive layout adjustment
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 1.1,
      filter: "brightness(1.2) grayscale(0%)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="py-6 sm:py-8 bg-white text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-gold-400 uppercase tracking-wider">
          Our Sponsors
        </h2>

        <div className="relative bg-white rounded-lg">
          <div className={`relative ${isMobile ? 'space-y-8' : 'h-[130vh]'}`}>
            {/* Top Sponsors */}
            <div className={isMobile ? 'flex flex-col items-center space-y-4' : ''}>
              {topSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  className={`${isMobile ? 'w-full max-w-[200px]' : 'absolute'
                    } flex items-center justify-center`}
                  style={
                    isMobile
                      ? {}
                      : {
                        top: sponsor.position.top,
                        left: sponsor.position.left,
                        right: sponsor.position.right,
                        bottom: sponsor.position.bottom,
                      }
                  }
                  custom={index}
                  variants={logoVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`object-contain w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 opacity-80 transition-opacity duration-300`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Normal Sponsors */}
            <div className={isMobile ? 'flex flex-col items-center space-y-4 mt-8' : ''}>
              {normalSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  className={`${isMobile ? 'w-full max-w-[150px]' : 'absolute'
                    } flex items-center justify-center`}
                  style={
                    isMobile
                      ? {}
                      : {
                        top: sponsor.position.top,
                        left: sponsor.position.left,
                        right: sponsor.position.right,
                        bottom: sponsor.position.bottom,
                      }
                  }
                  custom={index + topSponsors.length}
                  variants={logoVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`object-contain w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-80 hover:opacity-100 transition-opacity duration-300`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Basic Sponsors */}
            <div className={isMobile ? 'flex flex-col items-center space-y-4 mt-8' : ''}>
              {basicSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  className={`${isMobile ? 'w-full max-w-[100px]' : 'absolute'
                    } flex items-center justify-center`}
                  style={
                    isMobile
                      ? {}
                      : {
                        top: sponsor.position.top,
                        left: sponsor.position.left,
                        right: sponsor.position.right,
                        bottom: sponsor.position.bottom,
                      }
                  }
                  custom={index + topSponsors.length + normalSponsors.length}
                  variants={logoVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`object-contain w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 opacity-80 hover:opacity-100 transition-opacity duration-300`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Subtle crowd silhouette at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ACPSponsors;
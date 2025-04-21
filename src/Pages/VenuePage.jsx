// src/pages/VenuesPage.jsx
// import React, { Suspense, lazy } from "react";
// import { Link } from "react-router-dom";
import SectionWithSwiper from "../reusableComponents/ReusableCarouselOfAboutUs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Lazy-load the Cards component
import Cards from "../components/Cards";

// Import images for the slider
import venueImg1 from "../assets/venues/audi1.png";
import venueImg2 from "../assets/venues/audi2.png";
import venueImg3 from "../assets/venues/studio1.png";
import venueImg4 from "../assets/venues/studio2.png";
import venueImg5 from "../assets/venues/haseena-moin.png";
import venueImg6 from "../assets/venues/jaun-elia.png";
import venueImg7 from "../assets/venues/ampitheatre.png";
import venueImg8 from "../assets/venues/cafe.png";
import venueImg9 from "../assets/venues/art-gallery.png";
import venueImg10 from "../assets/venues/library.png";
import venueImg11 from "../assets/venues/rooftop.png";
import venueImg12 from "../assets/venues/lobby.png";
import venueImg13 from "../assets/venues/gulrang.png";
import venueImg14 from "../assets/venues/audio-studio.png";
import venueImg15 from "../assets/venues/parking.png";

const VenuesPage = () => {
  const venueData = [
    {
      id: 1,
      name: "Auditorium 1",
      image: venueImg1,
      // buttonText: "Learn More"
      // description:
      //   "",
    },
    {
      id: 2,
      name: "Auditorium 2",
      image: venueImg2,
      // description:
      //   "",
    },
    {
      id: 3,
      name: "Studio 1",
      image: venueImg3,
      // description:
      //   "",
    },
    {
      id: 4,
      name: "Studio 2",
      image: venueImg4,
      // description:
      //   "",
    },
    {
      id: 5,
      name: "Haseena Moin Hall",
      image: venueImg5,
      // description:
      //   "",
    },
    {
      id: 6,
      name: "Jaun Elia Lawn",
      image: venueImg6,
      // description:
      //   "",
    },
    {
      id: 7,
      name: "Z.A Bukhari Amphitheatre",
      image: venueImg7,
      // description:
      //   "",
    },
    {
      id: 8,
      name: "Café D' Art",
      image: venueImg8,
      // description:
      //   "",
    },
    {
      id: 9,
      name: "Ahmed Pervez Art Gallery",
      image: venueImg9,
      // description:
      //   "",
    },
    {
      id: 10,
      name: "Josh Malihabadi Library",
      image: venueImg10,
      // description:
      //   "",
    },
    {
      id: 11,
      name: "360° Rooftop Lounge",
      image: venueImg11,
      // description:
      //   "",
    },
    {
      id: 12,
      name: "Lobby Area",
      image: venueImg12,
      // description:
      //   "",
    },
    {
      id: 13,
      name: "Gulrang Café",
      image: venueImg13,
      // description:
      //   "",
    },
    {
      id: 14,
      name: "Audio Studio",
      image: venueImg14,
      // description:
      //   "",
    },
    {
      id: 15,
      name: "Parking Area",
      image: venueImg15,
      // description:
      //   "",
    },
  ];

  // Transform venueData into the format expected by SectionWithSwiper
  const swiperImages = venueData.map((venue) => ({
    src: venue.image,
    alt: venue.name,
  }));

  return (
    <div className="bg-white text-black py-6 sm:px-6 lg:px-8">
      <div className="mx-4">
        {/* Slider Section using SectionWithSwiper */}
        <SectionWithSwiper
          title="Our Venues"
          description="The Arts Council of Pakistan Karachi is a hub of cultural and artistic activities, offering a range of venues for various events. From grand auditoriums to intimate studios, our spaces are designed to inspire creativity and foster collaboration."
          images={swiperImages}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={false}
          autoplay={true}
          autoplayDelay={2500}
        />

        <Cards title="Venues" items={venueData} showButton={true} />
      </div>
    </div>
  );
};

export default VenuesPage;
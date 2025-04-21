// src/pages/AcademiesPage.jsx
import React from "react";
import SectionWithSwiper from "../reusableComponents/ReusableCarouselOfAboutUs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Cards from "../components/Cards";

import departmentImg1 from "../assets/academies/communication-design.png";
import departmentImg2 from "../assets/academies/textile-design.png";
import departmentImg3 from "../assets/academies/textile-design.png";
import sliderImg1 from "../assets/academies/acp-drone-2023.png";
import sliderImg2 from "../assets/academies/music.png";
// import academicImg from "../assets/academies/dance.webp";

const AcademiesPage = () => {
  const academyData = [
    { id: 1, name: "Graphic Design", image: departmentImg1 },
    { id: 2, name: "Dance", image: departmentImg2 },
    { id: 3, name: "Fine Arts", image: departmentImg3 },
    { id: 4, name: "Textile Design", image: departmentImg1 },
    { id: 5, name: "Theatre", image: departmentImg2 },
    { id: 6, name: "Music", image: departmentImg3 },
  ];

  const swiperImages = [
    { src: sliderImg1, alt: "Slider 1" },
    { src: sliderImg2, alt: "Slider 2" },
  ];

  return (
    <div className="py-6 min-h-screen bg-white text-black">
      <div className="mx-4 px-4 sm:px-6 lg:px-8">

        <SectionWithSwiper
          title="Arts Council Academies Where Artists Thrive"
          description="Since 1954, the Arts Council of Pakistan Academies have been the perfect place to nurture your creativity. Our Performing Arts Academy & Visual Arts Academy boast of highly qualified faculty in their respective disciplines. Join us to kickstart your artistic career."
          images={swiperImages}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={false}
          autoplay={true}
          autoplayDelay={2500}
        />

        {/* Departments Section */}
        <Cards title="Departments" items={academyData} showButton={true} />
      </div>
    </div>
  );
};

export default AcademiesPage;
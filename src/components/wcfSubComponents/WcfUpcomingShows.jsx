import React, { useState } from "react";
import StepCarousel from "../wcfReusableComponents/WcfLandingPageStepCarousel";

// Show images
import internationalShow1 from "/src/assets/wcf-assets/wcf-upcomingShows/Road-show.jpg";
import internationalShow2 from "/src/assets/wcf-assets/wcf-upcomingShows/Berlin-nach-Lahore-Poster.jpg";
import localShow1 from "/src/assets/wcf-assets/wcf-upcomingShows/Berlin-nach-Lahore-Poster.jpg";
import localShow2 from "/src/assets/wcf-assets/wcf-upcomingShows/Road-show.jpg";

// Category data
const showCategories = [
  {
    id: "international",
    name: "International Plays",
    shows: [
      {
        id: 1,
        title: "The Road Show",
        date: "Nov 15, 2023",
        venue: "National Theatre",
        price: "From $45",
        image: internationalShow1,
      },
      {
        id: 2,
        title: "Berlin to Lahore",
        date: "Dec 5, 2023",
        venue: "Royal Opera House",
        price: "From $35",
        image: internationalShow2,
      },
      {
        id: 3,
        title: "Cultural Crossroads",
        date: "Jan 12, 2024",
        venue: "Global Arts Center",
        price: "From $40",
        image: internationalShow1,
      }
    ]
  },
  {
    id: "local",
    name: "Local Productions",
    shows: [
      {
        id: 4,
        title: "City Lights",
        date: "Nov 20, 2023",
        venue: "Community Theater",
        price: "From $20",
        image: localShow1,
      },
      {
        id: 5,
        title: "Roots & Rhythms",
        date: "Dec 10, 2023",
        venue: "Cultural Center",
        price: "From $15",
        image: localShow2,
      },
      {
        id: 6,
        title: "Voices of the Valley",
        date: "Jan 18, 2024",
        venue: "Heritage Hall",
        price: "From $25",
        image: localShow1,
      }
    ]
  }
];

function WcfUpcomingShows() {
  const [activeCategory, setActiveCategory] = useState('international');

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Upcoming Shows & Events
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class performances from international and local productions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full shadow-md bg-white p-1" role="group">
            {showCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm font-medium rounded-full mx-1 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Shows Carousel */}
        <div className="relative">
          <StepCarousel
            steps={showCategories.find(c => c.id === activeCategory).shows}
            title=""
            slidesPerView={1}
            spaceBetween={30}
            autoplayDelay={5000}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            pagination={true}
            imageAspectRatio="3/4"
            cardClassName="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 group"
            imageContainerClassName="relative w-full h-72 overflow-hidden"
            imageClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            contentClassName="p-5"
            showNavigation={true}
            showPagination={false}
            additionalContent={(show) => (
              <div className="mt-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{show.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {show.price}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {show.date}
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {show.venue}
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center">
                  Book Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            )}
          />
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
            View All Upcoming Shows
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default WcfUpcomingShows;
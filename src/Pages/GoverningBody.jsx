import React, { useState } from "react";
import { motion } from "framer-motion";
import Cards from "../components/Cards";

// Importing images
import presidentImg from "../assets/governing-body-new/ahmed-shah.png";
import img1 from "../assets/governing-body-new/munawar-saeed.png";
import img2 from "../assets/governing-body-new/ejaz-farooqi.png";
import img3 from "../assets/governing-body-new/noorul-huda-shah.png";

// Governing Body
import img5 from "../assets/governing-body-new/huma-mir.png";
import img6 from "../assets/governing-body-new/s-m-qaiser-sajjad.png";
import img7 from "../assets/governing-body-new/syed-asjad-hussain-bukhari.png";
import img8 from "../assets/governing-body-new/farrukh-tanveer-shahab.png";
import img9 from "../assets/governing-body-new/syed-shahzad-raza-naqvi.png";
import img10 from "../assets/governing-body-new/ambreen-haseeb-amber.png";
import img11 from "../assets/governing-body-new/akhlaq-ahmed-khan.png";
import img12 from "../assets/governing-body-new/ghazi-salah-uddin.png";
import img13 from "../assets/governing-body-new/muhammad-ayoub-shaikh.png";
import img14 from "../assets/governing-body-new/Abdullah-Sultan.webp";
import img15 from "../assets/governing-body-new/amjad-hussain-shah.png";
import img16 from "../assets/governing-body-new/syed-sajid-hassan.png";

// Co-Opted Members
import img17 from "../assets/governing-body-new/co-opted-member1.png";
import img18 from "../assets/governing-body-new/co-opted-member2.png";
import img19 from "../assets/governing-body-new/co-opted-member3.png";
import img20 from "../assets/governing-body-new/co-opted-member4.png";
import img21 from "../assets/governing-body-new/co-opted-member5.png";

const GoverningBody = () => {
  const [activeTab, setActiveTab] = useState("Office Bearers");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const members = {
    "Office Bearers": [
      { id: 1, name: "Munawar Saeed", description: "Vice President", image: img1, buttonText: "Learn More" },
      { id: 2, name: "Ejaz Farooqi", description: "Secretary", image: img2, buttonText: "Learn More" },
      { id: 3, name: "Noor Ul Huda Shah", description: "Joint Secretary", image: img3, buttonText: "Learn More" },
    ],
    "Governing Body": [
      { id: 1, name: "Huma Mir", description: "Member", image: img5, buttonText: "Learn More" },
      { id: 2, name: "S.M Qaiser Sajjad", description: "Member", image: img6, buttonText: "Learn More" },
      { id: 3, name: "Syed Asjad Hussain Bukhari", description: "Member", image: img7, buttonText: "Learn More" },
      { id: 4, name: "Farrukh Tanveer Shahab", description: "Member", image: img8, buttonText: "Learn More" },
      { id: 5, name: "Syed Shahzad Raza Naqvi", description: "Member", image: img9, buttonText: "Learn More" },
      { id: 6, name: "Ambreen Haseeb Amber", description: "Member", image: img10, buttonText: "Learn More" },
      { id: 7, name: "Akhlaq Ahmed Khan", description: "Member", image: img11, buttonText: "Learn More" },
      { id: 8, name: "Ghazi Salah Uddin", description: "Member", image: img12, buttonText: "Learn More" },
      { id: 9, name: "Muhammad Ayoub Shaikh", description: "Member", image: img13, buttonText: "Learn More" },
      { id: 10, name: "Abdullah Sultan", description: "Member", image: img14, buttonText: "Learn More" },
      { id: 11, name: "Amjad Hussain Shah", description: "Member", image: img15, buttonText: "Learn More" },
      { id: 12, name: "Syed Sajid Hassan", description: "Member", image: img16, buttonText: "Learn More" },
    ],
    "Co-opted Members": [
      { id: 1, name: "Mr. Waseem Badami", description: "Co-Opted Member", image: img17, buttonText: "Learn More" },
      { id: 2, name: "Dr. Jaffer Ahmed", description: "Co-Opted Member", image: img18, buttonText: "Learn More" },
      { id: 3, name: "Mr. Ghous Akbar", description: "Co-Opted Member", image: img19, buttonText: "Learn More" },
      { id: 4, name: "Miss Chand Gul Shah", description: "Co-Opted Member", image: img21, buttonText: "Learn More" },
      { id: 5, name: "Miss Aliya Iqbal Naqvi", description: "Co-Opted Member", image: img20, buttonText: "Learn More" },
    ],
  };

  return (
    <div className="bg-white text-black py-6 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-4">
        {/* President's Message Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          // variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/6 relative">
                <div className="aspect-square lg:aspect-auto lg:h-full">
                  <img
                    src={presidentImg}
                    alt="President"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 lg:w-3/5">
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    President's Message
                  </span>
                </div>

                <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                  Mohammad Ahmed Shah
                </h2>

                <div className="text-gray-600">
                  <p>
                    The Arts Council of Pakistan endeavors to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage. Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections, and collaboration among communities not only within Pakistan but across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tabs */}
        <div className="mb-8 sm:mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {["Office Bearers", "Governing Body", "Co-opted Members"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 ${activeTab === tab
                  ? "bg-[#B90602] text-white shadow-md cursor-pointer"
                  : "bg-[#B90602] text-white curdor-pointer hover:bg-black/80 to-black/90 hover:shadow-lg cursor-pointer"
                  }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Members Section (Using Reusable Cards) */}
        <Cards title={activeTab} items={members[activeTab]} />
      </div>
    </div>
  );
};

export default GoverningBody;
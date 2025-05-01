import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const placeholderPosterImage = "https://acpkhi.com/imgs/academies.webp";

const CoursePage = () => {
  const { department } = useParams();

  const courseData = {
    "graphic-design": {
      name: "Communication Design Department",
      heroImages: placeholderPosterImage,
      details: {
        "1-Year Diploma": [
          "Students will get a comprehensive understanding of:",
          "Drawing",
          "Basic Design",
          "Computer Graphics",
          "History of Graphic Design",
          "Calligraphy",
          "Introduction to Photography",
          "Advertising Design",
          "Basic Design",
        ],
        "3-Month Certificate Course (Morning Shift / Weekend Classes)": [
          "Students will get a basic understanding of:",
          "Drawing",
          "History of Graphic Design",
          "Multimedia Advertisement",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 18 - 30 years (for this course)",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 10,000",
          "Monthly Fee for the course: Rs. 8,000",
        ],
      },
      faculty: [
        { name: "Muhammad Ali", title: "Head of Department", image: "https://via.placeholder.com/150" },
        { name: "Sachindar", title: "Graphic Design Teacher", image: "https://via.placeholder.com/150" },
        { name: "Muhammad Owais", title: "UX/UI & 3D Graphic Designer", image: "https://via.placeholder.com/150" },
        { name: "Muhammad Owais", title: "UX/UI & 3D Graphic Designer", image: "https://via.placeholder.com/150" },
        { name: "Muhammad Owais", title: "UX/UI & 3D Graphic Designer", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/graphic-design/register",
    },
    "dance": {
      name: "Dance Department",
      heroImages: placeholderPosterImage,
      details: {
        "1-Year Diploma": [
          "Students will master the following disciplines:",
          "Classical Dance",
          "Contemporary Dance",
          "Dance History",
          "Choreography Techniques",
        ],
        "3-Month Certificate Course (Evening Classes)": [
          "Students will learn the basics of:",
          "Choreography Basics",
          "Dance Movement",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 16 - 28 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 8,000",
          "Monthly Fee for the course: Rs. 6,000",
        ],
      },
      faculty: [
        { name: "Aisha Khan", title: "Lead Choreographer", image: "https://via.placeholder.com/150" },
        { name: "Rahul Sharma", title: "Dance Instructor", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/dance/register",
    },
    "fine-arts": {
      name: "Fine Arts Department",
      heroImages: placeholderPosterImage,
      details: {
        "1-Year Diploma": [
          "Students will explore:",
          "Painting Techniques",
          "Sculpture",
          "Art History",
          "Color Theory",
        ],
        "3-Month Certificate Course (Morning Shift)": [
          "Students will gain an understanding of:",
          "Art History",
          "Basic Sketching",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 18 - 32 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 12,000",
          "Monthly Fee for the course: Rs. 9,000",
        ],
      },
      faculty: [
        { name: "Sara Ahmed", title: "Head of Fine Arts", image: "https://via.placeholder.com/150" },
        { name: "Bilal Hassan", title: "Painting Instructor", image: "https://via.placeholder.com/150" },
        { name: "Nadia Malik", title: "Sculpture Teacher", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/fine-arts/register",
    },
    "music": {
      name: "Music Department",
      heroImages: placeholderPosterImage,
      details: {
        "1-Year Diploma": [
          "Students will develop skills in:",
          "Vocal Training",
          "Instrument Mastery (Piano/Guitar)",
          "Music Theory",
          "Music Composition",
        ],
        "3-Month Certificate Course (Weekend Classes)": [
          "Students will learn:",
          "Music Theory Basics",
          "Vocal Exercises",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 16 - 30 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 10,000",
          "Monthly Fee for the course: Rs. 7,000",
        ],
      },
      faculty: [
        { name: "Zainab Raza", title: "Vocal Coach", image: "https://via.placeholder.com/150" },
        { name: "Omar Farooq", title: "Instrument Instructor", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/music/register",
    },
    "textile-design": {
      name: "Textile Design Department",
      heroImages: placeholderPosterImage,
      details: {
        "1-Year Diploma": [
          "Students will specialize in:",
          "Textile Printing",
          "Fabric Design",
          "Pattern Making",
          "Textile History",
        ],
        "3-Month Certificate Course (Evening Classes)": [
          "Students will learn the basics of:",
          "Pattern Making",
          "Textile Techniques",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 18 - 30 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 11,000",
          "Monthly Fee for the course: Rs. 8,500",
        ],
      },
      faculty: [
        { name: "Fatima Noor", title: "Head of Textile Design", image: "https://via.placeholder.com/150" },
        { name: "Ali Raza", title: "Textile Designer", image: "https://via.placeholder.com/150" },
        { name: "Hina Khan", title: "Pattern Making Expert", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/textile-design/register",
    },
    "theatre": {
      name: "Theatre Department",
      heroImages: placeholderPosterImage,
      details: {
        "1-Year Diploma": [
          "Students will master:",
          "Acting Techniques",
          "Stage Direction",
          "Theatre History",
          "Stage Design",
        ],
        "3-Month Certificate Course (Morning Shift)": [
          "Students will learn the basics of:",
          "Script Writing",
          "Acting Basics",
        ],
      },
      howToApply: {
        "Requirements": [
          "Matric/Intermediate",
          "Age: 18 - 28 years",
        ],
        "Documents": [
          "2 passport size photos",
          "Educational Documents",
          "Parent/Guardian CNIC",
        ],
        "Fee Structure": [
          "Admission Fee for Diploma: Rs. 9,000",
          "Monthly Fee for the course: Rs. 6,500",
        ],
      },
      faculty: [
        { name: "Khalid Mehmood", title: "Theatre Director", image: "https://via.placeholder.com/150" },
        { name: "Sana Javed", title: "Acting Coach", image: "https://via.placeholder.com/150" },
      ],
      registerLink: "/academies/theatre/register",
    },
  };

  const [currentCourse, setCurrentCourse] = useState(null);
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    const loadData = () => {
      const data = courseData[department] || courseData["graphic-design"];
      if (data) {
        setCurrentCourse(data);
      } else {
        console.error("No data found for department:", department);
      }
    };
    loadData();
  }, [department]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!currentCourse) {
    return (
      <div className="text-center py-10 text-black">
        Loading course data...
      </div>
    );
  }

  return (
    <div className="bg-white text-black py-6 sm:px-6 lg:px-8 min-h-screen">
      <div className="mx-4">

        <Link to="/academies" className="inline-block mb-6">
          <motion.button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-300 flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: "#c53030" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ← Back to Academies
          </motion.button>
        </Link>


        <section className="relative mb-12">
          <motion.div
            className="relative w-full aspect-[16/9] overflow-hidden rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={currentCourse.heroImages}
              alt={`${currentCourse.name} Poster`}
              className="w-full h-full object-cover rounded-md"
              loading="lazy"
              style={{ backgroundColor: "#e5e7eb" }}
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentCourse.name}
            </motion.h1>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
            Courses Offered
          </h2>
          <div className="space-y-4">
            {Object.entries(currentCourse.details).map(([section, items], index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full flex justify-between items-center p-4 bg-red-50 text-left text-lg sm:text-xl font-semibold text-red-600 hover:bg-red-100 transition-colors"
                >
                  {section}
                  <svg
                    className={`w-6 h-6 transform transition-transform ${openSections[section] ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openSections[section] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white"
                  >
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* How to Apply, Cards */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
            How to Apply
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(currentCourse.howToApply).map(([section, items], index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{section}</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Register Now Section */}
        <section className="mb-12 text-center">
          <Link to={currentCourse.registerLink}>
            <motion.button
              className="px-8 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full shadow-sm transition-colors duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#c53030" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Register Now
            </motion.button>
          </Link>
        </section>

        {/* Faculty Section */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
            {currentCourse.name.split(" ")[0]} Faculty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourse.faculty.map((faculty, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-white to-red-50 rounded-lg shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-48 sm:h-56 mb-4 overflow-hidden rounded-md border-2 border-red-600 shadow-md">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    style={{ backgroundColor: "#e5e7eb" }}
                  />
                </div>
                <div className="border-t-2 border-red-600 w-16 mx-auto mb-3"></div>
                <h3 className="text-lg font-semibold text-gray-900">{faculty.name}</h3>
                <p className="text-sm text-gray-600">{faculty.title}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursePage;
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

import PyfLogo from "/src/assets/pyf-assets/pyf-logo.png"

const PyfNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle events dropdown (keeping this functionality in case you want to add dropdowns later)
  const toggleEvents = () => setIsEventsOpen(!isEventsOpen);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsEventsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsEventsOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/pyf" },
    { name: "About Season", href: "/pyf/about-season" },
    { name: "Artists", href: "/pyf/artists" },
    { name: "Contact", href: "/pyf/contact" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="bg-green-900 text-white shadow-lg sticky top-0 z-50 py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/pyf" className="flex items-center">
                <img
                  src={PyfLogo}
                  alt="PYF Logo"
                  className="w-30 h-25 transform hover:scale-110 transition duration-300"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.href}
                    className={`hover:text-green-400 transition duration-300 font-bold ${location.pathname === link.href ? "text-green-800" : ""
                      }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition duration-300">
                Register Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-800 transform transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`block px-3 py-2 text-white hover:bg-green-400 rounded-md ${location.pathname === link.href ? "bg-green-800" : ""
                      }`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-400 hover:text-black  transition duration-300 w-full">
                Register Now
              </button>

              {/* Social Media Icons in Mobile Menu */}
              <div className="flex justify-center space-x-4 mt-4">
                {[
                  {
                    href: "#", // Replace with actual PYF social media links
                    icon: <FaInstagram className="h-6 w-6" />,
                    alt: "Instagram",
                  },
                  {
                    href: "#",
                    icon: <FaFacebookF className="h-6 w-6" />,
                    alt: "Facebook",
                  },
                  {
                    href: "#",
                    icon: <FaTiktok className="h-6 w-6" />,
                    alt: "TikTok",
                  },
                  {
                    href: "#",
                    icon: <FaYoutube className="h-6 w-6" />,
                    alt: "YouTube",
                  },
                ].map((item) => (
                  <a
                    key={item.alt}
                    href={item.href}
                    className="text-white hover:text-green-400 transition duration-300"
                    aria-label={item.alt}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Social Media Sidebar (Desktop Only) */}
      <div className="hidden md:block fixed top-1/2 transform -translate-y-1/2 right-0 z-50">
        <div className="bg-green-900 text-white p-2 rounded-l-lg shadow-lg">
          <div className="space-y-4">
            {[
              {
                href: "#", // Replace with actual PYF social media links
                icon: <FaInstagram className="h-6 w-6" />,
                alt: "Instagram",
              },
              {
                href: "#",
                icon: <FaFacebookF className="h-6 w-6" />,
                alt: "Facebook",
              },
              {
                href: "#",
                icon: <FaTiktok className="h-6 w-6" />,
                alt: "TikTok",
              },
              {
                href: "#",
                icon: <FaYoutube className="h-6 w-6" />,
                alt: "YouTube",
              },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                className="block text-white hover:text-green-400 transition duration-300"
                aria-label={item.alt}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyfNavbar;
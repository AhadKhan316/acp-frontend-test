import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

import PtfLogo from "/src/assets/ptf-assets/ptf-logo.png";

const PtfNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu on route change and outside clicks
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if link is active
  const isActiveLink = (path) => location.pathname === path;

  // NavLink component
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`block py-2 px-4 text-white hover:text-white hover:bg-red-800 rounded-md transition-colors duration-200 ${
        isActiveLink(to) ? "text-white font-semibold bg-red-700" : "font-medium"
      }`}
    >
      {children}
    </Link>
  );

  // Menu items array
  const menuItems = [
    { to: "/festival/ptf", label: "Home" },
    { to: "/festival/ptf/about", label: "About" },
    { to: "/festival/ptf/artists", label: "Artists" },
    { to: "/festival/ptf/shows", label: "Shows" },
    { to: "/festival/ptf/media-courage", label: "Media Courage" },
    { to: "/festival/ptf/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="bg-gradient-to-r from-black/80 to-black/90 sticky top-0 z-50 shadow-md">
      <nav
        className="h-[130px] max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8"
        ref={navRef}
      >
        {/* Logo */}
        <Link to="/festival/ptf" className="flex items-center h-full">
          <img
            src={PtfLogo}
            alt="PTF Logo"
            className="object-contain w-auto max-h-[150px] max-w-[200px] sm:max-h-[150px] lg:max-h-[150px]"
          />
        </Link>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-white lg:hidden">
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-0.5 items-center ms-2">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
          <li>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition duration-300">
              Register Now
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-black/95 z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button onClick={toggleMenu} className="text-white">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-2 text-white">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
          <li>
            <button className="bg-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-800 transition duration-300 w-full">
              Register Now
            </button>
          </li>
          {/* Social Media Icons in Mobile Menu */}
          <li>
            <div className="flex justify-center space-x-4 mt-4">
              {[
                { href: "#", icon: <FaInstagram className="h-6 w-6" />, alt: "Instagram" },
                { href: "#", icon: <FaFacebookF className="h-6 w-6" />, alt: "Facebook" },
                { href: "#", icon: <FaTiktok className="h-6 w-6" />, alt: "TikTok" },
                { href: "#", icon: <FaYoutube className="h-6 w-6" />, alt: "YouTube" },
              ].map((item) => (
                <a
                  key={item.alt}
                  href={item.href}
                  className="text-white hover:text-red-700 transition duration-300"
                  aria-label={item.alt}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>

      {/* Social Media Sidebar (Desktop Only) */}
      <div className="hidden md:block fixed top-1/2 transform -translate-y-1/2 right-0 z-50">
        <div className="bg-black text-white p-2 rounded-l-lg shadow-lg">
          <div className="space-y-4">
            {[
              { href: "#", icon: <FaInstagram className="h-6 w-6" />, alt: "Instagram" },
              { href: "#", icon: <FaFacebookF className="h-6 w-6" />, alt: "Facebook" },
              { href: "#", icon: <FaTiktok className="h-6 w-6" />, alt: "TikTok" },
              { href: "#", icon: <FaYoutube className="h-6 w-6" />, alt: "YouTube" },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                className="block text-white hover:text-red-700 transition duration-300"
                aria-label={item.alt}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PtfNavbar;
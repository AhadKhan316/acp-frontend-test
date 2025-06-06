import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

<<<<<<< HEAD
=======
// ACP Logo
import acpLogo from '/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png';

// WC Logo
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
import WcLogo from "/src/assets/wc-assets/wc-logo.png";

const WcNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close mobile menu and dropdown on route change and outside clicks
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
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
      className={`block py-2 px-4 text-white hover:text-white hover:bg-pink-400 rounded-md transition-colors duration-200 ${isActiveLink(to) ? "text-white font-semibold bg-pink-500" : "font-medium"
        }`}
    >
      {children}
    </Link>
  );

  // Menu items array
  const menuItems = [
<<<<<<< HEAD
    { to: "/wc", label: "Home" },
    { to: "/wc/about", label: "About" },
    { to: "/wc/speakers", label: "Speakers" },
=======
    { to: "/festival/wc", label: "Home" },
    { to: "/festival/wc/about", label: "About" },
    { to: "/festival/wc/speakers", label: "Speakers" },
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
    {
      label: "Events",
      dropdown: [
        { to: "/wc/events/keynotes", label: "Keynotes" },
        { to: "/wc/events/workshops", label: "Workshops" },
        { to: "/wc/events/panels", label: "Panels" },
      ],
    },
<<<<<<< HEAD
    { to: "/wc/contact", label: "Contact" },
=======
    { to: "/festival/wc/contact", label: "Contact" },
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900/90 to-gray-900 sticky top-0 z-50 shadow-md">
      <nav
        className="h-[100px] max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8"
        ref={navRef}
      >
<<<<<<< HEAD
        {/* Logo */}
        <Link to="/wc" className="flex items-center h-full">
          <img
            src={WcLogo}
            alt="WC Logo"
            className="object-contain w-auto max-h-[80px] max-w-[200px] sm:max-h-[80px] lg:max-h-[80px]"
          />
        </Link>
=======
        {/* ACP X WC Logo */}
        <div className="flex items-center gap-2 h-full">
          <Link to="/" className="h-full flex items-center">
            <img
              src={acpLogo}
              alt="ACP Logo"
              className="object-contain w-auto max-h-[150px] max-w-[200px] sm:max-h-[150px] lg:max-h-[150px]"
            />
          </Link>

          <span className="text-white text-xl font-bold">X</span>

          <Link to="/festival/wc" className="h-full flex items-center">
            <img
              src={WcLogo}
              alt="WC Logo"
              className="object-contain w-auto max-h-[80px] max-w-[200px] sm:max-h-[80px] lg:max-h-[80px]"
            />
          </Link>
        </div>


>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-white lg:hidden">
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-0.5 items-center ms-2">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <li key={index} className="relative group">
                <button className="block py-2 px-4 text-white hover:text-white hover:bg-pink-400 rounded-md transition-colors duration-200 font-medium">
                  {item.label}
                </button>
                <ul className="absolute left-0 mt-0 w-48 bg-gray-900 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.to}>
                      <NavLink to={subItem.to}>{subItem.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            )
          )}
          <li>
<<<<<<< HEAD
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-300">
              Register Now
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-gray-900/95 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button onClick={toggleMenu} className="text-white">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-2 text-white">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <li key={index}>
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left py-2 px-4 text-white hover:bg-pink-400 rounded-md flex justify-between items-center"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.to}>
                        <NavLink to={subItem.to}>{subItem.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            )
          )}
          <li>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 w-full">
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
                  className="text-white hover:text-pink-400 transition duration-300"
                  aria-label={item.alt}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>
=======
            {/* <button className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-300">
              Register Now
            </button> */}
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-gray-900/95 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button onClick={toggleMenu} className="text-white">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-2 text-white">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <li key={index}>
                  <button
                    onClick={toggleDropdown}
                    className="w-full text-left py-2 px-4 text-white hover:bg-pink-400 rounded-md flex justify-between items-center"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <ul className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.to}>
                          <NavLink to={subItem.to}>{subItem.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              )
            )}
            <li>
              {/* <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 w-full">
              Register Now
            </button> */}
              <Link
                to="/"
                className="block w-full text-center px-4 py-2 mt-2 text-white bg-pink-500 rounded-md hover:bg-pink-600 transition duration-200"
              >
                Back to ACP Home
              </Link>
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
                    className="text-white hover:text-pink-400 transition duration-300"
                    aria-label={item.alt}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad

      {/* Social Media Sidebar (Desktop Only) */}
      <div className="hidden md:block fixed top-1/2 transform -translate-y-1/2 right-0 z-50">
        <div className="bg-gray-800 text-white p-2 rounded-l-lg shadow-lg">
          <div className="space-y-4">
            {[
<<<<<<< HEAD
              { href: "#", icon: <FaInstagram className="h-6 w-6" />, alt: "Instagram" },
              { href: "#", icon: <FaFacebookF className="h-6 w-6" />, alt: "Facebook" },
              { href: "#", icon: <FaTiktok className="h-6 w-6" />, alt: "TikTok" },
              { href: "#", icon: <FaYoutube className="h-6 w-6" />, alt: "YouTube" },
=======
              {
                href: "https://www.instagram.com/acpkhiofficial",
                icon: <FaInstagram className="h-6 w-6" />,
                alt: "Instagram",

              },
              {
                href: "https://www.facebook.com/ACPKHI/", icon: <FaFacebookF className="h-6 w-6" />,
                alt: "Facebook",
              },
              {
                href: "https://www.tiktok.com/@acpkhi", icon: <FaTiktok className="h-6 w-6" />,
                alt: "TikTok",
              },
              {
                href: "https://youtube.com/@acpkhi", icon: <FaYoutube className="h-6 w-6" />,
                alt: "YouTube",
              },
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                className="block text-white hover:text-pink-400 transition duration-300"
                aria-label={item.alt}
<<<<<<< HEAD
=======
                target="_blank"
                rel="noopener noreferrer"
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
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

export default WcNavbar;
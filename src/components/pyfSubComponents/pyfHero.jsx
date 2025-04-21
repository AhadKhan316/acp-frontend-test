import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import HeroImg1 from "/src/assets/pyf-assets/pyf-hero-img1.jpg"
import HeroImg2 from "/src/assets/pyf-assets/pyf-hero-img2.jpg"
import HeroImg3 from "/src/assets/pyf-assets/pyf-hero-img3.jpg"

const PyfHero = () => {
  const canvasRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background images for PYF
  const slides = [
    HeroImg1,
    HeroImg2,
    HeroImg3,
    // "../src/assets/pyf-assets/pyf-hero4.jpg",
  ];

  // Auto-slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Lantern Animation Logic (commented out as in your code)
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   const lanterns = [];
  //   const lanternCount = 20;

  //   class Lantern {
  //     constructor() {
  //       this.x = Math.random() * canvas.width;
  //       this.y = canvas.height + Math.random() * 100;
  //       this.radius = Math.random() * 10 + 5;
  //       this.speed = Math.random() * 1 + 0.5;
  //       this.opacity = Math.random() * 0.5 + 0.5;
  //     }

  //     draw() {
  //       ctx.beginPath();
  //       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //       ctx.fillStyle = `rgba(193, 0, 7, ${this.opacity})`;
  //       ctx.shadowBlur = 20;
  //       ctx.shadowColor = "rgba(193, 0, 7, 0.8)";
  //       ctx.fill();
  //       ctx.closePath();
  //     }

  //     update() {
  //       this.y -= this.speed;
  //       this.x += Math.sin(this.y * 0.01) * 0.5; // Gentle sway
  //       if (this.y < -this.radius) {
  //         this.y = canvas.height + this.radius;
  //         this.x = Math.random() * canvas.width;
  //       }
  //       this.draw();
  //     }
  //   }

  //   for (let i = 0; i < lanternCount; i++) {
  //     lanterns.push(new Lantern());
  //   }

  //   const animate = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     lanterns.forEach((lantern) => lantern.update());
  //     requestAnimationFrame(animate);
  //   };

  //   animate();

  //   const handleResize = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // Framer Motion Variants
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 0.9,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(13, 84, 43, 0.7)",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <section className="relative w-full h-[80vh] sm:h-[70vh] md:h-[100vh] lg:h-[100vh] text-white flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>

      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 via-gray-900/80 to-gray-900/70 pointer-events-none z-10"></div>

      {/* Canvas for Lantern Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20"
      />

      {/* Content with Framer Motion */}
      <motion.div
        className="relative z-30 text-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.h1
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight"
          variants={titleVariants}
        >
          <span className="block">Welcome to</span>
          <span className="text-green-400 inline-block overflow-hidden whitespace-nowrap">
            Pakistan Youth Festival
          </span>
        </motion.h1>
        <motion.p
          className="mt-2 sm:mt-3 text-1xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl tracking-tight opacity-90"
          variants={subtitleVariants}
        >
          Unleash your potential and celebrate youth spirit across Pakistan.
        </motion.p>
        <motion.button
          className="mt-4 sm:mt-6 bg-green-600 text-white px-10 sm:px-14 py-4 rounded-full font-semibold hover:bg-green-400 hover:text-black transition duration-300 text-xs sm:text-sm md:text-base"
          variants={buttonVariants}
          whileHover="hover"
        >
          Join Us Now
        </motion.button>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentSlide ? "bg-green-800" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PyfHero;
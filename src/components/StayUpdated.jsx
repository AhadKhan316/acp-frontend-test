import React, { useState } from "react";
import { motion } from "framer-motion";

const StayUpdated = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const response = await fetch("http://localhost/organization-website/backend/save_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        setMessage({ type: "success", content: data.message });
        setEmail("");
      } else {
        setMessage({ type: "error", content: data.message });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: "error", content: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  // Framer Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Framer Motion variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Button pulse animation
  const buttonVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className=" bg-white relative"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Subtle Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black-900/20 to-black pointer-events-none"></div> */}

      <div className="mx-4 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="bg-gradient-to-b from-white/25 to-gray rounded-xl overflow-hidden mx-auto group  transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="p-6 sm:p-8 md:p-6 lg:p-8 text-center">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-3"
              custom={0}
              variants={childVariants}
            >
              Stay Updated
            </motion.h2>
            <motion.p
              className="text-black italic text-sm sm:text-base mb-6 sm:mb-8"
              custom={1}
              variants={childVariants}
            >
              Get the Latest Updates and Offers
            </motion.p>
            <motion.div
              // className="h-1 w-30 bg-black mx-auto mb-8 sm:mb-10 rounded"
              custom={2}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            ></motion.div>
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              custom={3}
              variants={childVariants}
            >
              <div className="relative w-full sm:w-auto">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="p-3 bg-transparent border-b-2 border-gray-600 text-white text-base sm:text-lg w-full sm:w-92 focus:outline-none focus:border-white transition-all duration-300 placeholder-gray-400"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full sm:w-auto bg-[#B90602] text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-black/80 to-black/90 hover:shadow-lg transition duration-300 cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                whileHover={isLoading ? {} : { scale: 1.05 }}
                whileTap={isLoading ? {} : { scale: 0.95 }}
                animate={isLoading ? {} : "pulse"}
                variants={buttonVariants}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </motion.form>
            {message.content && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`mt-6 text-sm px-4 py-2 rounded-lg ${message.type === 'success'
                  ? 'bg-gray-800 text-gray-300'
                  : 'bg-gray-800 text-gray-400'
                  }`}
              >
                {message.content}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StayUpdated;
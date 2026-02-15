import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp Settings
  const phoneNumber = "923069873752";
  const message =
    "Hello Leathers Step, I am interested in your premium leather products. Please guide me.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex items-center">

      {/* HOVER LABEL */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="ml-4 px-4 py-2 bg-green-700 text-white rounded-lg shadow-lg hidden md:block"
          >
            <p className="text-sm font-medium">
              Chat with us on WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

        /* FLOATING ANIMATION (NO POSITION SHIFT) */
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}

        className="relative flex items-center justify-center
        w-16 h-16 rounded-full
        bg-green-500
        shadow-[0_0_25px_rgba(34,197,94,0.8)]
        border border-green-400
        cursor-pointer"
        style={{ willChange: "transform" }}
      >
        {/* ICON */}
        <FaWhatsapp
          className="text-white text-3xl z-10"
        />

        {/* GLOW EFFECT */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 blur-md"></div>

        {/* LIGHT SWEEP */}
        <motion.div
          animate={{ x: ["-120%", "200%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          className="absolute top-0 left-0 w-1/2 h-full
          bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
        />
      </motion.a>

      {/* ONLINE DOT */}
      <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full border border-green-500 flex items-center justify-center">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
        </span>
      </div>
    </div>
  );
};

export default WhatsAppFloat;

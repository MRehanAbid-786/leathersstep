import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "923069873752";
  const message = "Hello Leathers Step, I am interested in your premium leather products. Please guide me.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex items-center">
      {/* MAIN BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-xl cursor-pointer group"
      >
        {/* PULSE RINGS (Professional Depth) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <span className="absolute inset-[-4px] rounded-full border border-[#25D366]/30"></span>

        {/* WHATSAPP ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 text-white z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.1-.47-.149-.668.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.1-.198.05-.372-.025-.521-.074-.149-.668-1.611-.916-2.207-.242-.579-.487-.5-.668-.51-.173-.007-.372-.009-.571-.009s-.521.074-.793.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.261.489 1.692.625.711.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.571-.347z" />
          <path d="M12 2C6.486 2 2 6.486 2 12c0 2.113.551 4.084 1.513 5.784L2 22l4.335-1.423A9.954 9.954 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z" />
        </svg>

        {/* ONLINE STATUS DOT (Anchored to button) */}
        <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm z-20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
        </div>
      </motion.a>

      {/* HOVER LABEL - Positioned Absolute to prevent layout shift */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 20 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute left-full whitespace-nowrap hidden md:block"
          >
            <div className="relative bg-white text-gray-800 px-4 py-2 rounded-xl shadow-2xl border border-gray-100">
              {/* Little Arrow */}
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-gray-100 rotate-45"></div>
              
              <p className="text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Chat with Leathers Step
              </p>
              <p className="text-[10px] text-gray-400 leading-tight">Usually replies in minutes</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppFloat;

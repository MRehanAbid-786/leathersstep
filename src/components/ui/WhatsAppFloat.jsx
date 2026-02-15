import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Sparkles } from "lucide-react";
import { useState } from "react";

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
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="ml-5 px-6 py-3 bg-gradient-to-br from-green-700/90 to-emerald-900/90 backdrop-blur-xl border border-green-400/40 rounded-xl shadow-2xl hidden md:block"
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3 h-3 text-green-300" />
                <span className="text-[9px] font-bold text-green-200 uppercase tracking-widest">
                  Live Support
                </span>
              </div>

              <p className="text-[12px] italic text-green-50 tracking-wide">
                "Chat with Our Expert"
              </p>
            </div>
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
        animate={{
          y: [0, -10, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-20 h-20 rounded-full shadow-[0_0_40px_rgba(34,197,94,0.8)] border border-green-400/50 overflow-hidden group"
      >
        {/* BRIGHT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-green-700" />

        {/* INNER RING */}
        <div className="absolute inset-1 rounded-full border border-white/40" />

        {/* GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.4),_transparent_70%)] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        {/* ICON */}
        <MessageSquareText
          className="w-9 h-9 relative z-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
          strokeWidth={1.3}
        />

        {/* FLOATING SPARKLES */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] bg-white rounded-full"
              initial={{ x: "50%", y: "50%", opacity: 0 }}
              animate={{
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* LIGHT SWEEP */}
        <motion.div
          animate={{ x: ["-120%", "200%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
      </motion.a>

      {/* ONLINE DOT */}
      <div className="absolute top-1 left-1 flex items-center justify-center w-5 h-5 bg-white rounded-full border border-green-500 z-20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
        </span>
      </div>
    </div>
  );
};

export default WhatsAppFloat;

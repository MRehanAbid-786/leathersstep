import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Sparkles } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "923069873752";
  const message =
    "Greetings Leathersstep, I am interested in your artisanal leather collection.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex items-center">
      {/* LUXURY CONCIERGE LABEL */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="mr-5 px-7 py-4 bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-3xl border border-amber-500/30 rounded-lg shadow-[0_35px_70px_rgba(0,0,0,0.6)] hidden md:block"
          >
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span className="text-[8px] font-black text-amber-400 uppercase tracking-[0.5em]">
                  Concierge Live
                </span>
                <Sparkles className="w-3 h-3 text-amber-400" />
              </div>
              <p className="text-[11px] font-serif italic text-amber-100 tracking-wider">
                "Speak with the Master Artisan"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN LUXURY BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          y: [0, -12, 0],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-20 h-20 rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border border-amber-500/20 overflow-hidden group"
      >
        {/* GOLD GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-black to-black" />

        {/* GOLD RING EFFECT */}
        <div className="absolute inset-0 rounded-full border border-amber-500/30 group-hover:border-amber-400/50 transition-all duration-500" />
        <div className="absolute inset-[3px] rounded-full border border-amber-600/20" />

        {/* METALLIC GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(245,158,11,0.25),_transparent_70%)] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

        {/* ICON WITH GOLD EFFECT */}
        <MessageSquareText
          className="w-8 h-8 relative z-10 text-amber-500/90 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.7)] transition-all duration-500"
          strokeWidth={1.2}
        />

        {/* SPARKLE PARTICLES */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-amber-300 rounded-full"
              initial={{ x: "50%", y: "50%", opacity: 0 }}
              animate={{
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* LUXURY LIGHT REFLECTION */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 3,
          }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-100/10 to-transparent skew-x-12"
        />
      </motion.a>

      {/* LIVE STATUS INDICATOR */}
      <div className="absolute top-1 right-1 flex items-center justify-center w-5 h-5 bg-black rounded-full border border-amber-500/40 z-20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-amber-500 to-yellow-500"></span>
        </span>
      </div>
    </div>
  );
};

export default WhatsAppFloat;

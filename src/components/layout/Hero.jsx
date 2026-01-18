import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import shoes from "../../assets/images/shoes.png";
import bag from "../../assets/images/bag.png";
const HERO_PRODUCTS = [
  {
    id: 9,
    name: "Executive Briefcase",
    stat: "99.8% Precision",
    image: shoes,
    bg: "https://www.hushpuppies.com.pk/cdn/shop/files/Shop_The_Look_1_-_1200x1200_44014f91-0434-412d-a487-9e5a870d19d0.png?v=1761044068&width=1200",
  },
  {
    id: 1,
    name: "Heritage Boots",
    stat: "48hr Craft Cycle",
    image: bag,
    bg: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=735&auto=format&fit=crop",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center">
      {/* 1. FULL WIDTH BACKGROUND - Optimized */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={HERO_PRODUCTS[index].bg}
            className="w-full h-full object-cover grayscale"
            alt="Atelier Background"
          />
          {/* High-Performance Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
        </motion.div>
      </AnimatePresence>

      {/* 2. GEOMETRIC GRID & ACCENTS */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* 3. AI STATISTICS (Staggered Animation) */}
      <div className="absolute left-10 bottom-20 z-30 space-y-4 hidden lg:block">
        {[
          { icon: Cpu, label: "Neural Design", val: HERO_PRODUCTS[index].stat },
          { icon: ShieldCheck, label: "Heritage", val: "A+ Grade" },
        ].map((stat, i) => (
          <motion.div
            key={`${index}-${i}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-lg w-56"
          >
            <stat.icon className="w-4 h-4 text-orange-600 mb-2" />
            <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em] font-bold">
              {stat.label}
            </p>
            <p className="text-white text-sm font-medium">{stat.val}</p>
          </motion.div>
        ))}
      </div>

      {/* 4. PRODUCT CAROUSEL CONTAINER */}
      <div className="relative z-20 flex flex-col items-center max-w-7xl w-full px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative flex flex-col md:flex-row items-center gap-10 md:gap-20"
          >
            {/* Product Image */}
            <div className="w-[280px] md:w-[450px] aspect-square relative group">
              <div className="absolute inset-0 bg-orange-600/10 rounded-full blur-[60px] animate-pulse" />
              <img
                src={HERO_PRODUCTS[index].image}
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                alt="Leather Product"
              />
            </div>

            {/* Product Text */}
            <div className="text-center md:text-left space-y-6 max-w-lg">
              <motion.span className="text-orange-500 text-xs font-bold uppercase tracking-[0.6em] block">
                Featured Collection
              </motion.span>
              <h1
                className="text-5xl md:text-8xl text-white font-serif leading-none italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {HERO_PRODUCTS[index].name}
              </h1>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                Digitally optimized tanning and precision-cut hides meet
                centuries of tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center md:justify-start">
                <Link
                  to="/shop"
                  className="bg-white text-black px-10 py-4 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Shop Piece <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 5. INTERACTIVE NAVIGATION DOTS */}
        <div className="mt-16 flex gap-3">
          {HERO_PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative h-10 w-1 overflow-hidden bg-white/10 rounded-full"
            >
              {index === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-orange-600"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Luxury Corner Frame */}
      <div className="absolute top-10 right-10 flex gap-4">
        <div className="flex flex-col items-end">
          <span className="text-white/20 text-[10px] uppercase tracking-widest">
            Model 7.24
          </span>
          <span className="text-white/50 text-[10px] font-bold">
            V-SYNC READY
          </span>
        </div>
        <div className="w-px h-10 bg-white/20" />
      </div>
    </section>
  );
};

export default Hero;

import { Link } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection.jsx";
import VideoShowcase from "../components/sections/VideoShowcase";
import { motion } from "framer-motion";
import Testimonials from "../components/sections/Testimonials.jsx";
const Home = () => {
  const categoriesData = [
    {
      name: "The Footwear",
      image:
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800",
      description: "Hand-stitched heritage",
    },
    {
      name: "The Essentials",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800",
      description: "Accessories for life",
    },
    {
      name: "The Travel Bag",
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800",
      description: "Crafted for the journey",
    },
  ];

  return (
    <div className="flex flex-col bg-[#FAF9F6]">
      {" "}
      {/* Luxury Bone Background */}
      <Hero />
      {/* 1. ELEGANT FEATURES BAR */}
      <section className="py-16 border-y border-zinc-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <Truck
              className="text-zinc-400 w-6 h-6 mb-4 group-hover:text-orange-800 transition-colors duration-500"
              strokeWidth={1}
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800">
              Complimentary Shipping
            </span>
            <p className="text-[10px] text-zinc-400 mt-2 italic">
              On all premium orders worldwide
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <ShieldCheck
              className="text-zinc-400 w-6 h-6 mb-4 group-hover:text-orange-800 transition-colors duration-500"
              strokeWidth={1}
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800">
              Lifetime Assurance
            </span>
            <p className="text-[10px] text-zinc-400 mt-2 italic">
              Craftsmanship guaranteed for generations
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <Star
              className="text-zinc-400 w-6 h-6 mb-4 group-hover:text-orange-800 transition-colors duration-500"
              strokeWidth={1}
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800">
              The Gold Standard
            </span>
            <p className="text-[10px] text-zinc-400 mt-2 italic">
              Rated 4.9/5 by our global patrons
            </p>
          </div>
        </div>
      </section>
      {/* 2. EDITORIAL CATEGORY SECTION */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold text-orange-800 uppercase tracking-[0.4em] mb-4 block">
              Our Collections
            </span>
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-[0.9] tracking-tighter"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Curation of <br /> <span className="italic">Excellence</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="group flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 border-b border-zinc-900 pb-2 transition-all hover:text-orange-800 hover:border-orange-800"
          >
            Explore All Pieces{" "}
            <ArrowRight className="ml-3 w-3 h-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* LUXURY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categoriesData.map((cat, index) => (
            <Link
              key={cat.name}
              to="/shop"
              className={`group relative flex flex-col ${index === 1 ? "md:-translate-y-12" : ""} transition-transform duration-700`}
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-zinc-100 rounded-sm">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
              </div>

              <div className="mt-8 text-center md:text-left">
                <h3
                  className="text-3xl text-zinc-900 mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {cat.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 group-hover:text-orange-800 transition-colors">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* 3. THE PHILOSOPHY (Brand Moment) */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
        {/* Subtle motion background */}
        <div className="absolute inset-0 opacity-20 scale-110 animate-[pulse_8s_infinite]">
          <img
            src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2000"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-10 flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-orange-800 mb-12" />
          <h2
            className="text-4xl md:text-6xl text-stone-200 font-light text-center leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "In every hide, we find a soul. In every stitch, we <br />
            <span className="italic text-orange-500/80">preserve a legacy</span>
            ."
          </h2>
          <Link to="/shop" className="mt-16 group flex flex-col items-center">
            <span className="text-white text-[9px] font-bold uppercase tracking-[0.6em] mb-2">
              Discover the Atelier
            </span>
            <ArrowRight className="text-white w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700" />
          </Link>
        </div>
      </section>
      {/* 4. NEW VIDEO SHOWCASE SECTION */}
      <VideoShowcase />
      {/* ADD TESTIMONIALS HERE */}
      <Testimonials />
      {/* LUXURY CENTERED HEADING */}
      <section className="bg-white pt-32 pb-10 flex flex-col items-center text-center px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] font-bold text-orange-900 uppercase tracking-[0.8em] mb-6 block"
        >
          Stay Connected
        </motion.span>

        <h2
          className="text-6xl md:text-8xl text-zinc-900 tracking-tighter"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Get in <span className="italic font-light text-zinc-400">Touch</span>
        </h2>

        {/* The Luxury Vertical Divider */}
        <div className="w-px h-14 bg-gradient-to-b from-zinc-200 to-transparent mt-4" />
      </section>
      <ContactSection />
    </div>
  );
};

export default Home;

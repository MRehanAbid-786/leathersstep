import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// 1. IMPORT the image here (Make sure the path is correct relative to this file)
import luxuryImage from "../assets/images/image.jpg";

const About = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-zinc-900">
        <img
          src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110 grayscale"
          alt="Leather workshop"
        />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.8em] mb-6 block"
          >
            Since 2024
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] text-white leading-[0.8] tracking-tighter"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The <span className="italic">Atelier</span> <br />
            of <span className="text-stone-500">Hide</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY (Asymmetric Editorial) */}
      <section className="max-w-screen-xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5 space-y-8">
          <span className="text-[10px] font-bold text-orange-900 uppercase tracking-[0.4em]">
            Our Purpose
          </span>
          <h2
            className="text-5xl text-zinc-900 leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Every piece is a <span className="italic">dialogue</span> between
            nature and craft.
          </h2>
          <p className="text-zinc-500 font-serif italic text-lg leading-relaxed">
            "We do not mass-produce. We curate. Each hide is selected for its
            unique story, preserved through traditional tanning methods that
            respect the character of the animal."
          </p>
          <div className="w-20 h-px bg-zinc-300" />
        </div>
        <div className="md:col-span-7 relative">
          {/* 2. USE the imported variable here */}
          <img
            src={luxuryImage}
            className="w-full aspect-[4/5] object-cover grayscale-[20%] rounded-sm shadow-2xl"
            alt="Crafting detail"
          />
          <div className="absolute -bottom-10 -left-10 hidden md:block w-64 h-64 border-l border-b border-zinc-200 pointer-events-none" />
        </div>
      </section>

      {/* 3. THE VALUES (Minimalist) */}
      <section className="bg-white py-32">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24">
          {[
            {
              title: "Bespoke Hides",
              desc: "Sourced exclusively from certified sustainable tanneries in Tuscany.",
            },
            {
              title: "Saddle Stitched",
              desc: "A method of hand-stitching that ensures a lifetime of structural integrity.",
            },
            {
              title: "Living Patina",
              desc: "Our leather leather ages with you, developing a rich history with every use.",
            },
          ].map((value, i) => (
            <div key={i} className="text-center">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 text-zinc-800">
                {value.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light px-4">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

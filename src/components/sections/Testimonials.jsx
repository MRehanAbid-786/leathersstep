import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    text: "The patina on my Weekender Bag is developing beautifully. It's not just a piece of luggage; it's a legacy that travels with me.",
    author: "Alexander Rossi",
    location: "Milan, Italy",
    product: "The Duffle Anthology",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=400",
  },
  {
    id: 2,
    text: "Rarely do you find this level of hand-stitching in the modern age. Leathersstep is a masterclass in artisanal integrity.",
    author: "Elena Vostok",
    location: "London, UK",
    product: "Classic Heritage Boots",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=400",
  },
  {
    id: 3,
    text: "The minimalist design hides a complex architecture of quality. It is the only briefcase I will ever need for the rest of my career.",
    author: "Julian Chen",
    location: "Singapore",
    product: "Executive Briefcase",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-32 px-6 overflow-hidden border-y border-zinc-100">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-[10px] font-bold text-orange-800 uppercase tracking-[0.6em] mb-4 block">
            Patron Voices
          </span>
          <h2
            className="text-4xl md:text-5xl text-zinc-900 font-serif italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The <span className="text-zinc-400">Legacy</span> of Satisfaction
          </h2>
        </div>

        <div className="relative min-h-[400px] flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* LARGE QUOTE ICON */}
              <Quote
                className="w-12 h-12 text-orange-100 mb-10"
                strokeWidth={1}
              />

              {/* THE TESTIMONIAL TEXT */}
              <blockquote
                className="text-3xl md:text-5xl text-zinc-800 leading-[1.2] tracking-tight max-w-4xl font-light mb-12"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{REVIEWS[index].text}"
              </blockquote>

              {/* AUTHOR BOX */}
              <div className="flex items-center gap-6 text-left border-t border-zinc-100 pt-10 w-full justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden grayscale bg-zinc-100">
                  <img
                    src={REVIEWS[index].image}
                    className="w-full h-full object-cover"
                    alt="Product"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900">
                      {REVIEWS[index].author}
                    </h4>
                    <CheckCircle2 className="w-3 h-3 text-orange-700" />
                    <span className="text-[9px] text-zinc-400 uppercase font-medium">
                      Verified Patron
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
                    {REVIEWS[index].location} — {REVIEWS[index].product}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* MINIMALIST NAVIGATION */}
          <div className="flex gap-12 mt-20">
            <button
              onClick={prev}
              className="group p-2 text-zinc-300 hover:text-zinc-900 transition-colors"
            >
              <ChevronLeft
                className="w-6 h-6 group-hover:-translate-x-2 transition-transform"
                strokeWidth={1}
              />
            </button>

            {/* PROGRESS DOTS */}
            <div className="flex items-center gap-3">
              {REVIEWS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-700 ${index === i ? "w-8 bg-orange-800" : "w-2 bg-zinc-200"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="group p-2 text-zinc-300 hover:text-zinc-900 transition-colors"
            >
              <ChevronRight
                className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                strokeWidth={1}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

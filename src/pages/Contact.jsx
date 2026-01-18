import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, ArrowRight } from "lucide-react";
import ContactSection from "../components/sections/ContactSection.jsx";
const Contact = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* HEADER */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-zinc-200 pb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold text-orange-900 uppercase tracking-[0.6em] mb-6 block">
              Concierge
            </span>
            <h1
              className="text-6xl md:text-[100px] text-zinc-900 leading-[0.8] tracking-tighter"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The <span className="italic">Patron</span> <br />
              Connection
            </h1>
          </div>
          <p className="text-zinc-400 font-serif italic text-xl mt-8 md:mt-0">
            "Speak with the Atelier"
          </p>
        </header>

        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white    relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: LUXURY INVITE */}
          <div className="space-y-10">
            <div>
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight tracking-tighter"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Let’s Discuss Your <br />{" "}
                <span className="italic text-zinc-400">Next Masterpiece</span>
              </h2>
            </div>

            <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
              Whether you are inquiring about a bespoke commission or have
              questions about our heritage collection, our concierge is here to
              assist.
            </p>

            <div className="flex flex-col gap-6 pt-4">
              <div className="group cursor-pointer">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">
                  Direct Correspondence
                </p>
                <p className="text-xl font-medium text-zinc-800 group-hover:text-orange-800 transition-colors underline underline-offset-4 decoration-zinc-200">
                  concierge@leathersstep.com
                </p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">
                  WhatsApp Concierge
                </p>
                <p className="text-xl font-medium text-zinc-800">
                  +92 306 9873752
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: USER-FRIENDLY FORM */}
          <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-100">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="flex flex-col gap-2 group">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 group-focus-within:text-orange-800 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-white border border-zinc-200 rounded-lg py-4 px-5 outline-none focus:border-orange-800 focus:ring-1 focus:ring-orange-800/20 transition-all text-zinc-800 placeholder:text-zinc-300"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col gap-2 group">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 group-focus-within:text-orange-800 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@luxury.com"
                    className="bg-white border border-zinc-200 rounded-lg py-4 px-5 outline-none focus:border-orange-800 focus:ring-1 focus:ring-orange-800/20 transition-all text-zinc-800 placeholder:text-zinc-300"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2 group">
                <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 group-focus-within:text-orange-800 transition-colors">
                  Your Inquiry
                </label>
                <textarea
                  rows="4"
                  placeholder="How can our artisans assist you?"
                  className="bg-white border border-zinc-200 rounded-lg py-4 px-5 outline-none focus:border-orange-800 focus:ring-1 focus:ring-orange-800/20 transition-all text-zinc-800 placeholder:text-zinc-300 resize-none"
                />
              </div>

              {/* High-End Button */}
              <button className="w-full bg-zinc-900 text-white py-5 rounded-xl font-bold uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-orange-800 transition-all shadow-xl active:scale-95">
                Send Correspondence
                <Send className="w-4 h-4" />
              </button>

              <p className="text-center text-[10px] text-zinc-400 italic">
                Our team usually responds within 24 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

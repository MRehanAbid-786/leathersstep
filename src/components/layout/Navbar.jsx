import { useState } from "react"; // 1. Added useState
import { ShoppingCart, Search, User, Menu, X } from "lucide-react"; // Added X icon
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { useCart } from "../../store/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // 2. State for mobile menu

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white backdrop-blur-md border-b border-zinc-200">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-zinc-950 py-2.5 px-4 text-center">
        <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">
          Complimentary Worldwide Shipping on all Premium Orders
        </p>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT: DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative pb-1 group ${
                  isActive(link.path) ? "text-orange-800" : "text-zinc-600 hover:text-black"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-px bg-orange-800 transition-all duration-500 ${
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* CENTER: LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link 
              to="/" 
              className="text-2xl md:text-4xl font-black tracking-tight text-zinc-950 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              LEATHERS<span className="italic text-orange-800 font-light">STEP</span>
            </Link>
          </div>

          {/* RIGHT: ICONS & CART */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="group cursor-pointer hidden md:block">
              <Search className="w-5 h-5 text-zinc-800 hover:text-orange-800 transition-colors" strokeWidth={1.5} />
            </div>

            <Link to="/cart" className="relative group flex items-center gap-3">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-zinc-950 group-hover:text-orange-800 transition-colors" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-800 text-white text-[8px] font-bold flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none text-zinc-900">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">My Bag</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU OVERLAY (Luxury Slide-down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="lg:hidden fixed inset-x-0 top-[112px] bg-white z-[90] overflow-hidden"
          >
            <div className="flex flex-col items-center pt-20 gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)} // Close menu on click
                    className={`text-4xl font-light tracking-tighter ${
                      isActive(link.path) ? "text-orange-800" : "text-zinc-900"
                    }`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Extra Mobile Actions */}
              <div className="mt-10 pt-10 border-t border-zinc-100 w-full flex justify-center gap-8">
                 <User className="w-6 h-6 text-zinc-400" />
                 <Search className="w-6 h-6 text-zinc-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

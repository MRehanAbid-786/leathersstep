import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../store/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white backdrop-blur-md border-b border-zinc-200">
      {/* 1. TOP ANNOUNCEMENT BAR (High Contrast) */}
      <div className="bg-zinc-950 py-2.5 px-4 text-center">
        <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">
          Complimentary Worldwide Shipping on all Premium Orders
        </p>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          {/* LEFT: NAVIGATION (Darker text for visibility) */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                // Changed text-zinc-400 to text-zinc-600 for better visibility
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative pb-1 group ${
                  isActive(link.path)
                    ? "text-orange-800"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-orange-800 transition-all duration-500 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <Menu className="w-6 h-6 text-zinc-900" strokeWidth={1.5} />
          </div>

          {/* CENTER: LOGO (High Contrast Black) */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link
              to="/"
              className="text-2xl md:text-4xl font-black tracking-tight text-zinc-950 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              LEATHERS
              <span className="italic text-orange-800 font-light">STEP</span>
            </Link>
          </div>

          {/* RIGHT: ICONS & CART */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="group cursor-pointer hidden md:block">
              <Search
                className="w-5 h-5 text-zinc-800 hover:text-orange-800 transition-colors"
                strokeWidth={1.5}
              />
            </div>

            <div className="group cursor-pointer hidden md:block">
              <User
                className="w-5 h-5 text-zinc-800 hover:text-orange-800 transition-colors"
                strokeWidth={1.5}
              />
            </div>

            {/* SHOPPING BAG */}
            <Link to="/cart" className="relative group flex items-center gap-3">
              <div className="relative">
                <ShoppingCart
                  className="w-5 h-5 text-zinc-950 group-hover:text-orange-800 transition-colors"
                  strokeWidth={1.5}
                />
                {/* Mobile Notification Dot */}
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-700 rounded-full lg:hidden" />
                )}
              </div>

              {/* Text Label for Bag (Darkened for visibility) */}
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-900 transition-colors">
                  My Bag
                </span>
                <span className="text-[11px] font-black text-orange-900 mt-0.5">
                  ({cartCount})
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

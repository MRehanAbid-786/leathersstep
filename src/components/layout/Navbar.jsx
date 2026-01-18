import { ShoppingCart, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

import { useCart } from "../../store/CartContext"; // Import the hook

const Navbar = () => {
  const { cartCount } = useCart(); // Get the count from context
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-black">
            LEATHERS<span className="text-orange-700">STEP</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="hover:text-orange-700 transition">
              Home
            </Link>
            <Link to="/shop" className="hover:text-orange-700 transition">
              Shop
            </Link>
            <Link to="/about" className="hover:text-orange-700 transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-orange-700 transition">
              Contact us
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <Search className="w-5 h-5 cursor-pointer hover:text-orange-700" />
            <User className="w-5 h-5 cursor-pointer hover:text-orange-700" />
            <div className="relative cursor-pointer group">
              <Link to="/cart" className="relative cursor-pointer group">
                <ShoppingCart className="w-5 h-5 group-hover:text-orange-700" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ... inside your JSX, change the 0 to {cartCount}

export default Navbar;

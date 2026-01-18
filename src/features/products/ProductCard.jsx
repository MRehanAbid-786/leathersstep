import { useCart } from "../../store/CartContext";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col bg-transparent">
      {/* 1. IMAGE SECTION: Editorial Portrait Layout */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F3]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-110"
          />
        </Link>

        {/* Wishlist Button (Minimalist) */}
        <button className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Heart className="w-5 h-5 text-zinc-800 font-light hover:fill-zinc-800 transition-all" />
        </button>

        {/* Floating Quick Add Button (The one you liked) */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center z-20 px-6">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-white/80 backdrop-blur-md text-zinc-900 py-4 text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center justify-center gap-3 hover:bg-zinc-900 hover:text-white border border-white/20"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>

        {/* Category Label - Vertical or Corner */}
        <div className="absolute top-4 left-4">
          <span className="text-[9px] tracking-[0.3em] font-bold text-zinc-400 uppercase">
            {product.category}
          </span>
        </div>
      </div>

      {/* 2. TEXT SECTION: Sophisticated & Centered */}
      <div className="flex flex-col items-center pt-8 pb-4">
        <Link
          to={`/product/${product.id}`}
          className="text-center group-hover:opacity-70 transition-opacity"
        >
          <h3
            className="text-xl md:text-2xl text-zinc-900 font-medium leading-tight mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-4">
          <div className="h-[1px] w-4 bg-zinc-200" />
          <span className="text-sm font-light text-zinc-600 tracking-[0.2em]">
            ${product.price}.00
          </span>
          <div className="h-[1px] w-4 bg-zinc-200" />
        </div>

        {/* Subtle Luxury Detail: Color Dots */}
        <div className="mt-4 flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3D2B1F] ring-1 ring-offset-2 ring-zinc-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] ring-1 ring-offset-2 ring-zinc-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#966F33] ring-1 ring-offset-2 ring-zinc-200" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

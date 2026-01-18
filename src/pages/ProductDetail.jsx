import { useParams, useNavigate } from "react-router-dom";
import { products } from "../utils/products";
import { useCart } from "../store/CartContext";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  ShieldCheck,
  Truck,
  ShoppingBag,
  Heart,
  Globe,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <h2 className="text-2xl font-serif italic text-zinc-400">
          Object not found.
        </h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#FAF9F6] min-h-screen pb-20"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-10">
        {/* 1. MINIMAL NAVIGATION */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-orange-900 transition-colors mb-16"
        >
          <ArrowLeft className="w-3 h-3 mr-3 group-hover:-translate-x-2 transition-transform" />
          Back to Anthology
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* 2. IMAGE SECTION (Takes 7 columns for a wide cinematic look) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="bg-white p-4 md:p-12 rounded-sm shadow-sm"
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[2s] hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* 3. INFORMATION SECTION (Takes 5 columns) */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <span className="text-[10px] font-bold text-orange-800 uppercase tracking-[0.4em] mb-4 block">
                {product.category}
              </span>

              <h1
                className="text-5xl md:text-7xl text-zinc-900 leading-[0.9] tracking-tighter mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {product.name}
              </h1>

              <div className="flex items-center gap-6 mb-10">
                <span className="text-2xl font-light text-zinc-900 tracking-tighter">
                  ${product.price}.00
                </span>
                <div className="h-px w-12 bg-zinc-200" />
                <div className="flex text-orange-600 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>

              <div className="space-y-6 text-zinc-500 leading-relaxed font-serif italic text-lg mb-12">
                <p>
                  "A masterwork of leathercraft, specifically curated for the
                  discerning patron. Every hide is hand-selected and treated
                  with organic tannins to ensure a patina that tells your unique
                  story over time."
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-zinc-900 text-white py-5 px-10 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-orange-950 transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Collection
                </button>
                <button className="p-5 border border-zinc-200 hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-zinc-400 hover:text-zinc-900" />
                </button>
              </div>

              {/* LUXURY TRUST BADGES */}
              <div className="grid grid-cols-1 gap-y-8 border-t border-zinc-200 pt-10">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white rounded-full">
                    <Truck className="w-5 h-5 text-zinc-400" strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-1">
                      Global Concierge
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      Complimentary priority shipping to over 120 nations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white rounded-full">
                    <ShieldCheck
                      className="w-5 h-5 text-zinc-400"
                      strokeWidth={1}
                    />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-1">
                      Lifetime Patronage
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      Full restoration and craftsmanship warranty included.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white rounded-full">
                    <Globe className="w-5 h-5 text-zinc-400" strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-1">
                      Ethical Sourcing
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      Traceable hides from certified sustainable tanneries.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;

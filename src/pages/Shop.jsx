import { useState } from "react";
import { products } from "../utils/products";
import ProductCard from "../features/products/ProductCard";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/layout/Footer";

const Shop = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = ["All", "Footwear", "Apparel", "Accessories", "Bags"];

  // Logic remains the same, but the UI is transformed
  let filteredProducts = products
    .filter((p) => (filter === "All" ? true : p.category === filter))
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (sortBy === "low") filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === "high") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-20">
        {/* 1. EDITORIAL HEADER */}
        <header className="flex flex-col items-center mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold text-orange-800 uppercase tracking-[0.5em] mb-6"
          >
            The Full Curation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-[100px] text-zinc-900 leading-[0.8] tracking-tighter mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The{" "}
            <span className="italic text-zinc-300 font-light">Anthology</span>
          </motion.h1>
          <div className="w-px h-16 bg-zinc-200" />
        </header>

        {/* 2. LUXURY TOOLBAR */}
        <div className="sticky top-0 z-40 bg-[#FAF9F6]/80 backdrop-blur-md border-y border-zinc-200 mb-20 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center h-auto md:h-20 py-6 md:py-0 gap-8">
            {/* Category Navigation (Minimalist) */}
            <nav className="flex items-center gap-8 overflow-x-auto w-full md:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative pb-2 whitespace-nowrap ${
                    filter === cat
                      ? "text-zinc-900"
                      : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  {cat}
                  {filter === cat && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-px bg-orange-800"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Functional Icons */}
            <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-zinc-100 pt-6 md:pt-0">
              {/* Refined Search Trigger */}
              <div
                className="flex items-center gap-4 group cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search
                  className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors"
                  strokeWidth={1.5}
                />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900">
                  Search
                </span>
              </div>

              {/* Sophisticated Sort */}
              <div className="flex items-center gap-3">
                <SlidersHorizontal
                  className="w-4 h-4 text-zinc-400"
                  strokeWidth={1.5}
                />
                <select
                  className="bg-transparent border-none text-[10px] font-bold uppercase tracking-widest text-zinc-900 outline-none cursor-pointer focus:ring-0"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="low">Price: Low</option>
                  <option value="high">Price: High</option>
                </select>
              </div>
            </div>
          </div>

          {/* Expanded Search Bar (AnimatePresence) */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "80px", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-zinc-100"
              >
                <div className="h-full flex items-center max-w-4xl mx-auto px-4">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search by name, category, or color..."
                    className="w-full bg-transparent text-xl font-serif italic outline-none text-zinc-800"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <X
                    className="w-5 h-5 cursor-pointer text-zinc-400"
                    onClick={() => setIsSearchOpen(false)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. PRODUCT GRID (Wide & Airy) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24 mb-32"
        >
          <AnimatePresence>
            {filteredProducts.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                key={item.id}
              >
                <ProductCard product={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-40 border-t border-zinc-100">
            <h2 className="text-3xl font-serif italic text-zinc-300">
              No objects match your criteria.
            </h2>
            <button
              onClick={() => {
                setFilter("All");
                setSearchTerm("");
              }}
              className="mt-6 text-[10px] font-bold uppercase tracking-widest text-orange-800 underline"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;

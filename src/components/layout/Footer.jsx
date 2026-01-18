const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div>
          <h2 className="text-white text-2xl font-black tracking-tighter mb-4">
            LEATHERSSTEP
          </h2>
          <p className="text-sm leading-relaxed">
            Handcrafting premium leather goods since 2024. Quality you can feel,
            durability you can trust.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
            Shop
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="/shop" className="hover:text-orange-500 transition">
                Footwear
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-orange-500 transition">
                Accessories
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-orange-500 transition">
                Bags
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
            Support
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
            Newsletter
          </h3>
          <p className="text-xs mb-4">Get 10% off your first order.</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email"
              className="bg-zinc-900 border border-zinc-800 px-4 py-2 w-full rounded-l-md outline-none focus:border-orange-600 transition"
            />
            <button className="bg-orange-600 text-white px-4 py-2 rounded-r-md font-bold">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-16 pt-8 text-[10px] text-center uppercase tracking-widest">
        © 2026 Leathersstep. Built with Passion & Leather.
      </div>
    </footer>
  );
};

export default Footer;

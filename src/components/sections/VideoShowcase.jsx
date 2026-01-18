import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VIDEO_DATA = [
  {
    id: 1,
    title: "AW25 Anthology",
    link: "/shop",
    video:
      "https://www.hushpuppies.com.pk/cdn/shop/videos/c/vp/fcef470dfcf841a3a8ca53d0e48b60a0/fcef470dfcf841a3a8ca53d0e48b60a0.HD-1080p-2.5Mbps-63023769.mp4",
  },
  {
    id: 2,
    title: "Men's Collection",
    link: "/shop",
    video:
      "https://www.hushpuppies.com.pk/cdn/shop/videos/c/vp/b69e6fc7da51448e90803243f0b3af17/b69e6fc7da51448e90803243f0b3af17.HD-1080p-2.5Mbps-63023771.mp4",
  },
  {
    id: 3,
    title: "Women's Edit",
    link: "/shop",
    video:
      "https://www.hushpuppies.com.pk/cdn/shop/videos/c/vp/e28e0863a66647338232968c6e36c1cb/e28e0863a66647338232968c6e36c1cb.HD-1080p-2.5Mbps-63023770.mp4",
  },
  {
    id: 4,
    title: "Casual Heritage",
    link: "/shop",
    video:
      "https://www.hushpuppies.com.pk/cdn/shop/videos/c/vp/a197001501df4be1a07295454a7e76e3/a197001501df4be1a07295454a7e76e3.HD-1080p-2.5Mbps-63023767.mp4",
  },
  {
    id: 5,
    title: "Modern Minimal",
    link: "/shop",
    video:
      "https://www.hushpuppies.com.pk/cdn/shop/videos/c/vp/f386cd0023884dc782945493239073f5/f386cd0023884dc782945493239073f5.HD-1080p-2.5Mbps-63023768.mp4",
  },
];

const VideoShowcase = () => {
  return (
    <section className="bg-[#f4f4f4] py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-20 text-center">
          <span className="text-[10px] font-bold text-orange-800 uppercase tracking-[0.6em] mb-4 block">
            Cinematic Focus
          </span>
          <h2
            className="text-5xl md:text-7xl text-zinc-900 font-serif italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our <span className="text-zinc-400">Craft</span> in Motion
          </h2>
          <div className="w-px h-12 bg-zinc-300 mx-auto mt-8" />
        </header>

        {/* ELEGANT GRID LAYOUT (3 columns on top, 2 on bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {VIDEO_DATA.map((item, index) => (
            <Link
              key={item.id}
              to={item.link}
              // This logic makes the first 3 items take 2 columns each,
              // and the last 2 items take 3 columns each (to center them)
              className={`group relative overflow-hidden rounded-sm bg-zinc-200 shadow-sm 
                ${index < 3 ? "md:col-span-2 aspect-[9/16]" : "md:col-span-3 aspect-[16/9] md:aspect-[9/10]"}`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
              >
                <source src={item.video} type="video/mp4" />
              </video>

              {/* Luxury Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
                <span className="text-[9px] font-bold text-orange-400 uppercase tracking-[0.4em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Anthology
                </span>
                <h3
                  className="text-white text-3xl font-serif italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Sophisticated border appearing on hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;

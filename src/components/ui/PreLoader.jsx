import { useEffect, useState } from "react";

const PreLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // INCREASED TIME: Stays for 4 seconds (4000ms)
    // 1.5s for text reveal + 1.5s for line + 1s for the exit
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center   overflow-hidden">
      {/* BACKGROUND REMOVED: Texture div deleted for a clean solid look */}

      <div className="relative flex flex-col items-center z-20">
        {/* Animated Brand Name */}
        <div className="flex space-x-2 overflow-hidden">
          {"LEATHERS STEP".split("").map((char, index) => (
            <span
              key={index}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter animate-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* The "Stitched" Line Animation */}
        <div className="mt-4 w-0 h-1 bg-orange-600 animate-expand"></div>

        <p className="mt-6 text-orange-600/60 text-[10px] font-bold tracking-[0.5em] uppercase animate-pulse">
          Crafting Excellence
        </p>
      </div>

      {/* Sliding Curtains (The exit animation starts at 3.2s) */}
      <div className="absolute inset-0 flex flex-col pointer-events-none z-10">
        <div className="flex-1 bg-zinc-950 animate-slide-up"></div>
        <div className="flex-1 bg-zinc-950 animate-slide-down"></div>
      </div>
    </div>
  );
};

export default PreLoader;

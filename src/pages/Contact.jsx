import React from "react";
import DrawSvg from "../components/DrawSvg";

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[75%] left-[55%] w-150 h-150 -translate-x-1/2 -translate-y-1/2 bg-[#FC2207]/10 blur-[160px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light">
        <svg className="w-full h-full scale-[1.4]">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.2"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center z-10 px-6">
        <DrawSvg />

        <p className="mt-20 max-w-xl text-center text-white/60 text-sm md:text-lg tracking-wide">
          Available for <span className="text-white">freelance</span>,
          collaborations and long-term partnerships.
        </p>

        <div className="mt-16">
          <button className="relative flex justify-center overflow-hidden border border-[#FC2207] md:px-10 px-6 py-4 uppercase tracking-widest text-white group hover:scale-[1.03] transition-transform">
            <span className="relative z-10 group-hover:text-black transition text-white text-xs md:text-base">
              Send message
            </span>
            <span className="absolute inset-0 bg-[#FC2207] translate-y-full group-hover:translate-y-0 transition-transform" />
          </button>
        </div>
        <div className="relative">
          <p className="mt-10 text-xs tracking-[0.3em] text-white/30 uppercase animate-[breathe_6s_ease-in-out_infinite]">
            Currently open to new projects
          </p>
          <div className="pointer-events-none absolute top-9 -left-2 h-5 w-5 border-l border-t border-white/30 animate-[breathe_6s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -bottom-1 -right-1 h-5 w-5 border-r border-b border-white/30 animate-[breathe_6s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

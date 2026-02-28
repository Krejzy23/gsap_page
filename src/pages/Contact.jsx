import React from "react";
import DrawSvg from "../components/DrawSvg";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-150 h-150
    -translate-x-1/2 -translate-y-1/2
    bg-[#FC2207]/10 blur-[160px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center z-10 px-6">
        <DrawSvg />

        <p className="mt-20 max-w-xl text-center text-white/60 text-sm md:text-lg tracking-wide">
          Available for <span className="text-white">freelance</span>,
          collaborations and long-term partnerships.
        </p>

        <div className="mt-16">
          <button className="relative overflow-hidden font-semibold border border-[#FC2207] px-10 py-4 uppercase tracking-widest text-white group">
            <span className="relative z-10 group-hover:text-black transition text-[#FC2207]">
              Send message
            </span>
            <span
              className="absolute inset-0 bg-[#FC2207]
    translate-y-full group-hover:translate-y-0 transition-transform"
            />
          </button>
        </div>
        <p className="mt-10 text-xs tracking-[0.3em] text-white/30 uppercase">
          Currently open to new projects
        </p>
      </div>
    </section>
  );
};

export default Contact;

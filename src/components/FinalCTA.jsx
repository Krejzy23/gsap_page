import React from "react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative min-h-[80vh] bg-black flex items-center justify-center overflow-hidden">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[70%] left-1/2 w-150 h-150
          -translate-x-1/2 -translate-y-1/2
          bg-[#FC2207]/10 blur-[180px]"
        />
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="text-xs tracking-[0.35em] uppercase text-white/40 mb-6">
          Final step
        </p>

        <h2 className="font-playfair text-[clamp(3.5rem,6vw,4.5rem)] leading-tight text-white mb-6">
          Let’s work together.
        </h2>

        <p className="max-w-md text-white/60 text-sm md:text-base mb-14">
          Have a project, idea or collaboration in mind? I’m always open to
          meaningful conversations.
        </p>

        <Link
          to="/contact"
          className="relative inline-flex items-center justify-center px-12 py-4 bg-black/60 hover:bg-[#FC2207]/80 font-roboto font-semibold uppercase tracking-widest text-sm md:text-base text-white/80 hover:text-black transition-colors duration-300 before:content-[''] before:absolute before:-top-2 before:-left-2 before:w-[10%] before:h-[25%] before:border-l before:border-t before:border-[#FC2207]/80 before:transition-all before:duration-300 
          
          after:content-[''] after:absolute after:-bottom-2 after:-right-2 after:w-[10%] after:h-[25%] after:border-r after:border-b after:border-[#FC2207]/80 after:transition-all after:duration-300
          
          hover:before:w-[109%] hover:before:h-[129%] hover:after:w-[109%] hover:after:h-[129%]"
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;

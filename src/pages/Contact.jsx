import React from "react";
import DrawSvg from "../components/DrawSvg";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center z-10 px-6">
        <div className="">
          <DrawSvg />
        </div>

        <p className="mt-20 max-w-xl text-white/70 mx-auto">
          Available for freelance, collaborations and long-term partnerships.
        </p>

        <a
          href="mailto:alex@yourdomain.com"
          className="mt-12 inline-block text-xl text-white/50 md:text-3xl font-mono"
        >
          alex@yourdomain.com
        </a>

        <div className="mt-16">
          <button className="magnetic-inner border text-white border-white/40 px-8 py-4 uppercase tracking-widest hover:text-[#FC2207] hover:border-[#FC2207] transition">
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import { navItems, footerSocials } from "../constants";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="relative">
      {/* scanline */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#FC2207] to-transparent" />

      <div className="bg-black backdrop-blur-lg border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-start">
            {/* COLUMN 1 — HEADER */}
            <div className="font-roboto tracking-widest select-none">
              <p className="text-white/80 text-sm md:text-base uppercase mb-10">
                <span className="text-[#FC2207] text-lg">#</span>Get in touch
              </p>
              <p className="text-white text-lg">
                <span className="text-red-500">AK</span>
                <span className="text-white/70">_PORTFOLIO</span>
              </p>
              <p className="text-white/40 text-xs mt-4 max-w-xs">
                Building modern, expressive and meaningful digital experiences.
              </p>
            </div>

            {/* COLUMN 2 — NAV */}
            <nav className="flex flex-col px-5 gap-4 uppercase text-xs tracking-[0.25em] font-roboto">
              <p className="text-white/80 text-sm md:text-base uppercase mb-2">
                <span className="text-[#FC2207] text-lg">#</span>Navigations
              </p>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className={`nav-glitch relative transition-colors duration-150 w-fit text-sm md:text-base
                  ${
                    location.pathname === item.to
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                  data-text={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* COLUMN 3 — SOCIALS */}
            <div className="flex flex-col gap-4">
              <p className="uppercase text-sm md:text-base tracking-[0.25em] text-white/80">
                <span className="text-[#FC2207] text-lg">#</span>Links
              </p>

              <div className="flex gap-5 ">
                {footerSocials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-6 md:w-8 h-6 md:h-8 opacity-70 group-hover:opacity-100 hover:scale-110 transition "
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/50 text-[10px] md:text-sm tracking-[0.3em] uppercase">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#FC2207]">AK</span>
            <span className="text-white/80">_Portfolio</span> · All rights
            reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
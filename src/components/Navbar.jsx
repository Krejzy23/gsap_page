import React from "react";
import { navItems } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* scanline */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-red-500/70 to-transparent" />

      <nav className="bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* malé logo */}
          <div className="hidden md:flex font-roboto text-white tracking-widest text-sm select-none">
            <span className="text-red-500">AK</span>
            <span className="text-white/70">_PORTFOLIO</span>
          </div>

          {/* navigace */}
          <div className="flex gap-7 uppercase text-xs md:text-sm tracking-[0.25em] font-roboto">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={item.label === "Home" ? handleHomeClick : undefined}
                className="nav-glitch relative text-white/70 hover:text-white transition-colors duration-150"
                data-text={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

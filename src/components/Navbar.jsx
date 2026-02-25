import React from "react";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <main className="max-w-full h-full">
      <div className="bg-black p-5">
        <div className="flex flex-col justify-center">
          <div className="flex justify-around">
            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-white/90 uppercase">
              Project
            </h2>
            <div className="flex items-center justify-center mt-5 md:mt-10 lg:mt-20">
              <h3 className="text-xs md:text-sm lg:text-xl text-white/90 frame-label uppercase">
                portfolio
              </h3>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-white/90 uppercase">
              reviews
            </h2>
          </div>
          {/* DESKTOP MENU */}
          <div className="flex px-10 md:flex-row flex-col justify-between">
            <div className="flex items-center gap-6 uppercase text-white/80 text-sm font-roboto tracking-widest">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={item.label === "Home" ? handleHomeClick : undefined}
                  className="relative group hover:text-white/50"
                >
                  {item.label}

                  <span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0 bg-[#FC2207] transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="flex justify-end items-end text-white/70 uppercase text-[0.5rem]">
              <h4>Last updated: 14.2. 2026 // by AK</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;

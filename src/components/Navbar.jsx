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
      <div className="bg-black px-10">
        <div className="flex flex-col justify-center">
          <div className="flex justify-around">
            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-white uppercase">
              Project
            </h2>
            <div className="flex items-center justify-center mt-5 md:mt-10 lg:mt-20">
              <h3 className="text-xs md:text-sm lg:text-xl text-white frame-label uppercase">
                portfolio
              </h3>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-white uppercase">
              reviews
            </h2>
          </div>
          {/* DESKTOP MENU */}
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex items-center gap-6 uppercase text-white text-sm font-roboto">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={item.label === "Home" ? handleHomeClick : undefined}
                  className="nav-hover-btn"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex justify-end items-end text-white uppercase text-xs">
              <h4>Last updated: 14.2. 2026 // by AK</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;

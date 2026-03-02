// Home.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Statement from "../components/Statement";
import Focus from "../components/Focus";
import FinalCTA from "../components/FinalCTA";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Pokud jsme přišli z jiné stránky → scroll na top
    window.scrollTo({ top: 0, behavior: "auto" });

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <main className="relative">
      <section className="panel">
        <Hero />
      </section>

      <section className="panel">
        <Review />
      </section>

      <section className="panel">
        <Focus />
      </section>

      <Statement />
      <FinalCTA />
    </main>
  );
};

export default Home;
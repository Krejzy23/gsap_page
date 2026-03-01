import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Statement from "../components/Statement";
import Focus from "../components/Focus";
import FinalCTA from "../components/FinalCTA";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
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
  }, []);

  return (
    <>
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
    </>
  );
};

export default Home;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Bridge from "../components/Bridge";
import Statement from "../components/Statement";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {

    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    // fix po načtení
    ScrollTrigger.refresh();

    return () => ScrollTrigger.getAll().forEach(t => t.kill());

  }, []);

  return (
    <>
      <Navbar />

      <main className="relative">

        <section className="panel">
          <Hero />
        </section>

        <section className="panel">
          <Review />
        </section>

        <section className="panel">
          <Statement />
        </section>
        
        <section className="panel">
          <Bridge />
        </section>


      </main>
    </>
  );
};

export default Home;

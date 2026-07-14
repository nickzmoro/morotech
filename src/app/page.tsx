"use client";

import About from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Method from "@/components/sections/method";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <div
        id="inicio"
        className="bg-site-bg relative flex min-h-screen flex-col overflow-hidden text-white"
      >
        <Hero />
      </div>
      <About />
      <Services />
      <Method />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

"use client";

import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Method from "@/components/sections/method";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-site-bg relative flex min-h-screen flex-col overflow-hidden text-white">
        {/* Hero Content Section */}
        <Hero />
      </div>
      <About />
      <Services />
      <Method />
      <Projects />
      <Testimonials />
    </>
  );
}

"use client";

import dynamic from "next/dynamic";

import Hero from "@/components/sections/hero";

const About = dynamic(() => import("@/components/sections/about"));
const Services = dynamic(() => import("@/components/sections/services"));
const Method = dynamic(() => import("@/components/sections/method"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Testimonials = dynamic(
  () => import("@/components/sections/testimonials"),
);
const FAQ = dynamic(() => import("@/components/sections/faq"));
const CTA = dynamic(() => import("@/components/sections/cta"));

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

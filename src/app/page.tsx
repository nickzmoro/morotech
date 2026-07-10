"use client";

import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <div className="bg-site-bg relative flex min-h-screen flex-col overflow-hidden text-white">
        {/* Hero Content Section */}
        <Hero />
      </div>
      <div>Olá!</div>
    </>
  );
}

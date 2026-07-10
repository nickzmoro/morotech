"use client";

import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <>
      <div className="bg-site-bg relative flex min-h-screen flex-col overflow-hidden text-white">
        {/* Header / Navigation Bar */}
        <BlurFade delay={1.5} className="z-20">
          <Header />
        </BlurFade>

        {/* Hero Content Section */}
        <Hero />
      </div>
    </>
  );
}

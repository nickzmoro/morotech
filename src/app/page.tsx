"use client";

import Header from "@/components/common/header";
import Hero from "@/components/common/hero";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <>
      <div className="bg-site-bg relative flex min-h-screen flex-col overflow-hidden text-white">
        {/* Hero Background */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full bg-cover bg-right bg-no-repeat max-sm:hidden md:bg-right"
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full bg-cover bg-right bg-no-repeat sm:hidden md:bg-right"
          style={{
            backgroundImage: "url('/hero-background-mobile.png')",
          }}
        />
        <div className="from-site-bg/85 md:via-site-bg/70 lg:via-site-bg/45 pointer-events-none absolute inset-0 z-0 bg-linear-to-r to-transparent" />

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

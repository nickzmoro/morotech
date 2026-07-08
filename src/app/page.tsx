"use client";

import MoroLogo from "@public/logo.svg";
import Image from "next/image";

import StarIcon from "@/assets/icons/star-icon.svg";
import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { GlareHover } from "@/components/ui/glare-hover";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020202] text-white">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full bg-cover bg-right bg-no-repeat md:bg-right"
        style={{
          backgroundImage: "url('/hero-background.png')",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#020202]/85 to-transparent md:via-[#020202]/70 lg:via-[#020202]/45" />

      {/* Header / Navigation Bar */}
      <BlurFade delay={1.5}>
        <header className="fixed top-0 z-20 w-full">
          <div className="mx-auto flex h-24 max-w-[100rem] items-center justify-between px-6 md:px-12 lg:px-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center select-none"
              aria-label="Moro Logo"
            >
              <Image
                src={MoroLogo}
                alt="Moro Logo"
                className="mt-4 h-[130px] w-auto"
                priority
              />
            </a>

            {/* Navigation Links */}
            <nav className="hidden items-center gap-9 md:flex lg:gap-10">
              <a
                href="#"
                className="font-sans text-base font-medium tracking-wide text-white transition-colors"
              >
                Início
              </a>
              <a
                href="#"
                className="font-sans text-base font-medium tracking-wide text-white/70 transition-colors hover:text-white"
              >
                Sobre
              </a>
              <a
                href="#"
                className="font-sans text-base font-medium tracking-wide text-white/70 transition-colors hover:text-white"
              >
                Serviços
              </a>
              <a
                href="#"
                className="font-sans text-base font-medium tracking-wide text-white/70 transition-colors hover:text-white"
              >
                Projetos
              </a>
              <a
                href="#"
                className="font-sans text-base font-medium tracking-wide text-white/70 transition-colors hover:text-white"
              >
                Depoimentos
              </a>
            </nav>

            {/* Fale Comigo CTA */}
            <div>
              <GlareHover className="rounded-full">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading flex items-center gap-2 rounded-full bg-[#2563EB] px-6.5 py-3 text-base font-semibold tracking-[-1.5%] text-white transition-all duration-200 hover:bg-blue-700"
                >
                  Fale comigo
                  <Image
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    className="h-5 w-5"
                  />
                </a>
              </GlareHover>
            </div>
          </div>
        </header>
      </BlurFade>

      {/* Hero Content Section */}
      <main className="relative z-10 flex w-full flex-grow items-center">
        <div className="mx-auto flex w-full max-w-[100rem] flex-col justify-center px-6 pt-12 pb-24 md:px-12 md:py-28 lg:px-20">
          {/* Badge */}
          <BlurFade direction="up">
            <div className="mb-8 flex w-fit items-center gap-2.5 rounded-full border border-[#FFFFFF]/[0.08] bg-[#FFFFFF]/[0.05] py-1.5 pr-3.5 pl-2 backdrop-blur-lg select-none">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFFFFF]/[0.08]">
                <Image src={StarIcon} alt="Star" className="h-4 w-4" />
              </div>
              <AnimatedShinyText className="font-heading text-sm font-normal tracking-[-1.5%] text-white/60">
                Especialista em Websites
              </AnimatedShinyText>
            </div>
          </BlurFade>

          {/* H1 Heading */}
          <DiaTextReveal
            as="h1"
            className="font-heading text-6xl leading-[1.12] font-bold tracking-[-4.5%] text-white sm:text-6xl md:text-7xl lg:text-[80px]"
            colors={["#fff", "#2563EB", "#3B82F6", "#60A5FA", "#38BDF8"]}
            duration={1.5}
            startOnView={true}
            once={true}
          >
            <DiaTextReveal.Line textColor="#ffffff">
              Tecnologia
            </DiaTextReveal.Line>
            <br />
            <DiaTextReveal.Line
              textColor="#2563EB"
              className="font-medium italic"
            >
              pensada para o
            </DiaTextReveal.Line>{" "}
            <br />
            <DiaTextReveal.Line textColor="#ffffff">
              seu negócio.
            </DiaTextReveal.Line>
          </DiaTextReveal>

          <TextAnimate
            as="p"
            className="mt-8 max-w-[500px] font-sans text-lg leading-[1.6] font-normal text-white/75 md:text-[18px]"
            animation="blurInUp"
            delay={0.8}
          >
            Sites, lojas e sistemas sob medida — com SEO, automação e IA para
            sua empresa vender mais.
          </TextAnimate>

          {/* CTA Button */}
          <BlurFade delay={1.2} direction="up">
            <div className="mt-10">
              <GlareHover className="rounded-full">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/50 bg-[#2563EB] px-8 py-4 text-base font-semibold tracking-[-1.5%] text-white shadow-[0_0_20px_rgba(256,256,256,0.25)] transition-all duration-300 md:text-[17px]"
                >
                  Solicitar orçamento
                  <Image
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    className="h-5 w-5"
                  />
                </a>
              </GlareHover>
            </div>
          </BlurFade>
        </div>
      </main>
    </div>
  );
}

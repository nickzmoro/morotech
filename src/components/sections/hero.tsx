import Image from "next/image";

import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg";

import Badge from "../ui/badge";
import { BlurFade } from "../ui/blur-fade";
import { DiaTextReveal } from "../ui/dia-text-reveal";
import { GlareHover } from "../ui/glare-hover";
import { TextAnimate } from "../ui/text-animate";

export default function Hero() {
  return (
    <>
      {/* Hero Background */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full bg-cover bg-right bg-no-repeat max-sm:hidden md:bg-right"
        style={{
          backgroundImage: "url('/hero-background.webp')",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full bg-cover bg-right bg-no-repeat sm:hidden md:bg-right"
        style={{
          backgroundImage: "url('/hero-background-mobile.webp')",
        }}
      />
      <div className="from-site-bg/85 md:via-site-bg/70 lg:via-site-bg/45 pointer-events-none absolute inset-0 z-0 bg-linear-to-r to-transparent" />
      <div className="from-site-bg md:via-site-bg lg:via-site-bg/50 pointer-events-none absolute bottom-0 left-0 z-0 h-[150px] w-full bg-linear-to-t to-transparent" />

      <main className="relative z-10 flex w-full grow items-center">
        <div className="mx-auto flex w-full max-w-[100rem] flex-col justify-center px-4 pt-24 pb-24 max-sm:pb-12 md:px-12 md:py-28 lg:px-20">
          {/* Badge */}
          <Badge text="Especialista em Websites" />

          {/* H1 Heading */}
          <DiaTextReveal
            as="h1"
            className="font-heading text-5xl leading-[1.12] font-bold tracking-[-4.5%] text-white sm:text-6xl md:text-7xl lg:text-[80px]"
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
            className="mt-8 max-w-[500px] font-sans text-base leading-[1.6] font-normal text-white/75 sm:text-lg md:text-[18px]"
            animation="blurInUp"
            delay={0.8}
            startOnView
            once
          >
            Sites, lojas e sistemas sob medida — com SEO, automação e IA para
            sua empresa vender mais.
          </TextAnimate>

          {/* CTA Button */}
          <BlurFade delay={1.2} direction="up">
            <div className="mt-10">
              <GlareHover className="rounded-full">
                <a
                  href={`https://wa.me/5514991459254?text=${encodeURIComponent(
                    "Olá! Vi o site de vocês e gostaria de solicitar um orçamento.",
                  )}`}
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
    </>
  );
}

"use client";

import Image from "next/image";

import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg";

import { BlurFade } from "../ui/blur-fade";
import { DiaTextReveal } from "../ui/dia-text-reveal";
import { GlareHover } from "../ui/glare-hover";
import { RetroGrid } from "../ui/retro-grid";

export default function CTA() {
  return (
    <section
      id="orcamento"
      className="bg-site-bg relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden py-24 md:py-36"
    >
      {/* Retro Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <RetroGrid
          angle={65}
          cellSize={60}
          opacity={100}
          darkLineColor="rgba(255, 255, 255, 0.2)"
          lightLineColor="rgba(255, 255, 255, 0.08)"
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-5 mx-auto flex w-full max-w-[100rem] flex-col items-center justify-center px-4 text-center">
        {/* Title inspired by Hero */}
        <DiaTextReveal
          as="h2"
          className="font-heading text-center text-5xl leading-[1.12] font-bold tracking-[-4.5%] text-white sm:text-5xl md:text-6xl lg:text-[72px]"
          colors={["#fff", "#2563EB", "#3B82F6", "#60A5FA", "#38BDF8"]}
          duration={1.5}
          startOnView={true}
          once={true}
        >
          <DiaTextReveal.Line textColor="#ffffff">
            Tenha um site
          </DiaTextReveal.Line>
          <br />
          <DiaTextReveal.Line
            textColor="#2563EB"
            className="font-medium italic"
          >
            com a cara da
          </DiaTextReveal.Line>{" "}
          <br />
          <DiaTextReveal.Line textColor="#ffffff">
            sua marca.
          </DiaTextReveal.Line>
        </DiaTextReveal>

        {/* Subtitle / Paragraph */}
        <BlurFade delay={0.6} direction="up" inView>
          <p className="mt-8 max-w-[650px] font-sans text-[15px] leading-[1.6] font-normal tracking-wide text-white/75 sm:text-base md:text-[16px]">
            Desenvolvemos sistemas exclusivos para o seu negócio,
            <br className="hidden sm:block" /> com tecnologia de ponta, alta
            performance e segurança
            <br className="hidden sm:block" /> para você{" "}
            <strong className="font-bold text-white">
              escalar sem limites.
            </strong>
          </p>
        </BlurFade>

        {/* CTA Button */}
        <BlurFade delay={1.0} direction="up" inView>
          <div className="mt-10">
            <GlareHover className="rounded-full">
              <a
                href={`https://wa.me/5514991459254?text=${encodeURIComponent(
                  "Olá! Vi o site de vocês e gostaria de solicitar um orçamento.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/50 bg-[#2563EB] px-8 py-4 text-base font-semibold tracking-[-1.5%] text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 md:text-[17px]"
              >
                Faça seu orçamento
                <Image src={WhatsAppIcon} alt="WhatsApp" className="h-5 w-5" />
              </a>
            </GlareHover>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

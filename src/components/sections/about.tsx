"use client";

import AboutImage from "@public/about-image.png";
import Image from "next/image";

import DolcciB from "@/assets/carousel/dolcci-b.png";
import GLine from "@/assets/carousel/g-line.png";
import HdInox from "@/assets/carousel/hd-inox.png";
import MaqSoft from "@/assets/carousel/maq-soft.png";
import Markvora from "@/assets/carousel/markvora.png";
import N2Commerce from "@/assets/carousel/n2commerce.png";
import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg";

import Badge from "../ui/badge";
import { BlurFade } from "../ui/blur-fade";
import { GlareHover } from "../ui/glare-hover";
import { Marquee } from "../ui/marquee";

export default function About() {
  const logos = [
    { src: Markvora, alt: "Markvora" },
    { src: GLine, alt: "G-Line" },
    { src: N2Commerce, alt: "N2 Commerce" },
    { src: MaqSoft, alt: "MaqSoft" },
    { src: HdInox, alt: "HD Inox" },
    { src: DolcciB, alt: "Dolcci B" },
  ];

  return (
    <section
      id="sobre"
      className="bg-site-bg relative w-full overflow-hidden py-16 text-white md:py-24"
    >
      {/* Logos Marquee Carousel */}
      <BlurFade inView delay={0.1} direction="up">
        <div className="relative mx-auto flex max-w-[100rem] flex-col items-center justify-center overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] pb-16 md:pb-24">
          <Marquee
            className="[--duration:40s] [--gap:3rem] md:[--gap:6rem]"
            pauseOnHover
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto cursor-pointer object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-14"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </BlurFade>

      {/* Main Content Layout */}
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Image with Experience Badge & SOBRE vertical text */}
          <div className="flex justify-start lg:col-span-7">
            <BlurFade
              inView
              direction="right"
              delay={0.2}
              className="w-full max-w-[500px]"
            >
              <div className="relative w-full overflow-visible rounded-[32px]">
                <Image
                  src={AboutImage}
                  alt="Nicolas Moro"
                  placeholder="blur"
                  className="h-auto w-full rounded-[32px] object-contain select-none"
                  priority
                />

                <div className="absolute top-[25%] left-[70%] z-10 hidden -translate-y-1/2 lg:block xl:left-[80%]">
                  <BlurFade
                    inView
                    direction="up"
                    delay={0.3}
                    className="absolute origin-center -rotate-90 whitespace-nowrap"
                  >
                    <span className="font-heading from-site-bg bg-linear-to-t to-white bg-clip-text text-8xl leading-none font-light tracking-wider text-transparent uppercase xl:text-9xl">
                      SOBRE
                    </span>
                  </BlurFade>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column: Text content */}
          <div className="flex flex-col justify-center text-left lg:col-span-5">
            {/* Badge */}
            <div className="w-fit">
              <Badge text="Quem está por trás da Moro Tech" inView={true} />
            </div>

            {/* Heading */}
            <BlurFade inView direction="up" delay={0.4}>
              <h2 className="font-heading mb-8 text-3xl font-normal tracking-[-3%] text-white sm:text-4xl lg:text-5xl lg:leading-[1.3]">
                Transformo negócios em presenças digitais que vendem.
              </h2>
            </BlurFade>

            {/* Paragraphs */}
            <BlurFade inView direction="up" delay={0.5}>
              <p className="mb-8 font-sans text-base leading-[1.6] font-normal text-white/75 sm:text-lg">
                Sou{" "}
                <strong className="font-semibold text-white">
                  Nicolas Moro
                </strong>
                , e transformo negócios em presenças digitais que impressionam.
              </p>
            </BlurFade>

            <BlurFade inView direction="up" delay={0.6}>
              <p className="mb-8 font-sans text-base leading-[1.6] font-normal text-white/75 sm:text-lg">
                A Moro Tech nasceu com um propósito claro:{" "}
                <strong className="font-semibold text-white">
                  ser o braço direito de quem quer mostrar o que faz na internet
                </strong>{" "}
                — com excelência, design premium e tecnologia que reflete de
                verdade a sua marca. Nada de templates genéricos. Aqui o seu
                negócio será único.
              </p>
            </BlurFade>

            {/* Button */}
            <BlurFade inView direction="up" delay={0.7}>
              <div className="w-fit">
                <GlareHover
                  className="rounded-full"
                  background="#ffffff"
                  color="#2563EB"
                  opacity={0.2}
                >
                  <a
                    href={`https://wa.me/5514991459254?text=${encodeURIComponent(
                      "Olá! Vi o seu site e gostaria de conversar sobre um projeto.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-site-bg font-heading inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-semibold tracking-[-1.5%] shadow-[0_4px_24px_rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-white/95"
                  >
                    Fale comigo
                    <Image
                      src={WhatsAppIcon}
                      alt="WhatsApp"
                      className="h-5 w-5 brightness-0"
                    />
                  </a>
                </GlareHover>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}

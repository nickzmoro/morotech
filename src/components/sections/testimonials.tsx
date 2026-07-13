"use client";

import Image from "next/image";

import StarBlueIcon from "@/assets/icons/star-blue-icon.svg";
import DolcciB from "@/assets/testimonials/dolcci-b.webp";
import GLine from "@/assets/testimonials/g-line.webp";
import HdInox from "@/assets/testimonials/hd-inox.webp";
import MaqSoft from "@/assets/testimonials/maq-soft.webp";
import N2Commerce from "@/assets/testimonials/n2commerce.webp";

import { BlurFade } from "../ui/blur-fade";
import { GlareHover } from "../ui/glare-hover";
import { Marquee } from "../ui/marquee";

function VerifiedIcon() {
  return (
    <svg
      className="h-[18px] w-[18px] shrink-0 fill-current text-[#2563EB]"
      viewBox="0 0 24 24"
    >
      <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      id: "dolcci-b",
      textPre: "Ficou muito legal! Já testamos e o ",
      textHighlight: "resultado ficou do jeito que eu imaginava",
      textPost:
        ". Muito obrigada pelo carinho e atenção em cada detalhe! Agora a Dolcci B' está chique!",
      author: "Suelen Medeiros",
      role: "Dolcci B'",
      logo: DolcciB,
      delay: 0.15,
    },
    {
      id: "n2commerce",
      textPre:
        "O site ficou perfeito! O design ficou incrível, totalmente responsivo e com um ",
      textHighlight: "resultado muito profissional",
      textPost: ". Meus parabéns pelo trabalho!",
      author: "Saraiva",
      role: "N2 Commerce",
      logo: N2Commerce,
      delay: 0.2,
    },
    {
      id: "hd-inox",
      textPre:
        "O design da minha loja ficou exatamente como imaginava. As artes ficaram muito bem feitas e o resultado final ",
      textHighlight: "superou minhas expectativas",
      textPost: ". Recomendo!",
      author: "Deivid Luise",
      role: "HD Inox",
      logo: HdInox,
      delay: 0.25,
    },
    {
      id: "maq-soft",
      textPre:
        "Ficou muito lindo! Todos gostaram do seu trabalho, só elogios. Fiquei ",
      textHighlight: "muito feliz com o resultado",
      textPost: ". Obrigada por toda a dedicação e paciência que teve comigo!",
      author: "Nereide",
      role: "Maq Soft",
      logo: MaqSoft,
      delay: 0.3,
    },
    {
      id: "g-line",
      textPre: "Está bom demais! O site ficou ",
      textHighlight: "muito profissional",
      textPost:
        " e transmitiu exatamente a imagem que eu queria para a minha marca. Parabéns de verdade!",
      author: "Gustavo",
      role: "G-Line",
      logo: GLine,
      delay: 0.35,
    },
  ];

  return (
    <section
      id="depoimentos"
      className="relative mt-15 w-full overflow-hidden bg-[#020202] py-16 text-white md:py-24"
    >
      <div className="mx-auto w-full max-w-[100rem]">
        {/* Section Title */}
        <div className="z-10 mb-16 flex justify-center px-4 md:mb-24 md:px-12 lg:px-20">
          <BlurFade inView direction="up" delay={0.1}>
            <h2 className="font-heading bg-linear-to-t from-transparent from-15% to-white to-80% bg-clip-text text-center text-6xl leading-none font-light tracking-[-1.5%] text-transparent uppercase md:text-8xl lg:text-9xl">
              DEPOIMENTOS
            </h2>
          </BlurFade>
        </div>

        {/* Carousel of Testimonial Cards */}
        <BlurFade inView delay={0.2} direction="up">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] pb-8">
            <Marquee
              className="py-4 [--duration:50s] [--gap:1.5rem] md:[--gap:2.5rem]"
              pauseOnHover
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="relative h-full w-[320px] shrink-0 py-6 md:w-[450px]"
                >
                  {/* Rating Stars Pill */}
                  <div className="bg-card-bg absolute top-6 left-8 z-20 flex -translate-y-1/2 items-center gap-1 rounded-full border border-white/10 px-5 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.5)] select-none">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={StarBlueIcon}
                        alt="Star Rating"
                        className="h-4.5 w-4.5"
                      />
                    ))}
                  </div>

                  <GlareHover
                    width="100%"
                    background="#060606"
                    color="#fff"
                    opacity={0.05}
                    className="group relative flex h-full w-full flex-col items-start rounded-[32px] border border-white/10 bg-[#060606] p-8 text-left transition-all duration-300 hover:border-white/15 md:p-10"
                  >
                    {/* Glow behind card on hover */}
                    <div className="pointer-events-none absolute -bottom-20 left-0 h-[200px] w-full bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.1),transparent_70%)]" />

                    {/* Author Profile Row */}
                    <div className="mt-2 mb-6 flex w-full items-center gap-4">
                      {/* Avatar Circle */}
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/[0.02] md:h-[72px] md:w-[72px]">
                        <Image
                          src={t.logo}
                          alt={t.author}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Author Details */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-heading text-lg leading-tight font-normal text-white md:text-xl">
                            {t.author}
                          </h4>
                          <VerifiedIcon />
                        </div>
                        <p className="mt-1 font-sans text-sm font-light text-neutral-400 md:text-base">
                          {t.role}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="flex-1 font-sans text-base leading-relaxed text-neutral-300 md:text-lg">
                      {t.textPre}
                      <span className="font-medium text-[#2563EB]">
                        {t.textHighlight}
                      </span>
                      {t.textPost}
                    </p>
                  </GlareHover>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

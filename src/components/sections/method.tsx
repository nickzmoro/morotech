"use client";

import Image from "next/image";

import BriefingIcon from "@/assets/icons/method-briefing.svg";
import DevIcon from "@/assets/icons/method-dev.svg";
import SupportIcon from "@/assets/icons/method-support.svg";

import { BlurFade } from "../ui/blur-fade";
import { GlareHover } from "../ui/glare-hover";

interface MethodCardProps {
  number: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
  items: string[];
  delay: number;
}

function MethodCard({
  number,
  icon,
  title,
  description,
  items,
  delay,
}: MethodCardProps) {
  return (
    <BlurFade inView direction="up" delay={delay} className="relative w-full">
      <GlareHover
        width="100%"
        background="rgba(6, 6, 6, 0.5)"
        color="#2563EB"
        opacity={0.12}
        className="group relative flex h-full w-full flex-col items-start overflow-hidden rounded-[32px] border border-white/10 p-8 text-left backdrop-blur-md transition-all duration-300 hover:border-white/10 md:p-10"
      >
        {/* Subtle glow behind the card on hover */}
        <div className="pointer-events-none absolute top-0 left-0 h-[200px] w-full bg-[radial-gradient(at_left_top,rgba(37,99,235,0.3),transparent_70%)]" />

        {/* Card Header (Icon & Number Badge) */}
        <div className="mb-4 flex w-full items-start justify-between md:mb-8">
          <Image
            src={icon}
            alt={`${title} Icon`}
            className="h-18 w-18 select-none"
          />
          <div className="border-primary bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full border text-base font-bold select-none">
            {number}
          </div>
        </div>

        {/* Card Title */}
        <h3 className="font-heading mb-4 text-2xl leading-tight font-normal tracking-[-3%] text-white md:text-[26px]">
          {title}
        </h3>

        {/* Card Description */}
        <p className="mb-4 flex-1 font-sans text-base leading-relaxed text-white/75 md:mb-6 md:min-h-[72px]">
          {description}
        </p>

        {/* Divider Line */}
        <div className="mb-4 w-full border-t border-white/6 md:mb-6" />

        {/* List of items */}
        <ul className="w-full space-y-3.5">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2.5 font-sans text-[15px] text-white/75"
            >
              <span className="text-primary text-lg leading-none font-light select-none">
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlareHover>
    </BlurFade>
  );
}

export default function Method() {
  const steps = [
    {
      number: "01",
      icon: BriefingIcon,
      title: "Briefing",
      description:
        "Entendemos seu negócio, objetivos e necessidades para criar a melhor estratégia.",
      items: [
        "Alinhamento de ideias",
        "Análise da marca",
        "Análise do público e mercado",
      ],
      delay: 0.15,
    },
    {
      number: "02",
      icon: DevIcon,
      title: "Desenvolvimento",
      description:
        "Transformamos o planejamento em um projeto moderno, rápido, otimizado e estratégico.",
      items: [
        "Design estratégico para aprovação",
        "Desenvolvimento de alto nível",
        "Testes e otimizações completas",
      ],
      delay: 0.25,
    },
    {
      number: "03",
      icon: SupportIcon,
      title: "Entrega & Suporte",
      description:
        "Entregamos o projeto pronto para gerar resultados e seguimos ao seu lado sempre que precisar.",
      items: [
        "Entrega final e site no ar",
        "Suporte incluso e contínuo",
        "Feedback final",
      ],
      delay: 0.35,
    },
  ];

  return (
    <section
      id="metodo"
      className="bg-site-bg relative min-h-screen w-full overflow-hidden py-24 text-white md:py-32"
    >
      {/* Background image overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat max-sm:hidden md:bg-size-[100%_100%]"
        style={{
          backgroundImage: "url('/method-background.png')",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat max-sm:block md:hidden"
        style={{
          backgroundImage: "url('/method-background-mobile.png')",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[100rem] flex-col justify-center px-4 md:absolute md:inset-0 md:px-12 lg:px-20">
        {/* Section Title overlapping background */}
        <div className="relative z-0 flex justify-center max-sm:mb-6">
          <BlurFade inView direction="up" delay={0.1}>
            <h2 className="font-heading bg-linear-to-t from-transparent from-20% to-white to-70% bg-clip-text text-center text-7xl leading-snug font-light tracking-[-1.5%] text-transparent uppercase md:text-8xl lg:text-[140px]">
              MÉTODO
            </h2>
          </BlurFade>
        </div>

        {/* Method Steps Grid */}
        <div className="relative z-10 mx-auto grid max-w-300 grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <MethodCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

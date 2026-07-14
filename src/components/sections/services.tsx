"use client";

import CenterBottomIllustration from "@public/services-center-bottom.svg";
import Image from "next/image";

import AiIcon from "@/assets/icons/services-ai.svg";
import LandingIcon from "@/assets/icons/services-landing.svg";
import SeoIcon from "@/assets/icons/services-seo.svg";
import ShopIcon from "@/assets/icons/services-shop.svg";
import SystemsIcon from "@/assets/icons/services-systems.svg";
import WebsitesIcon from "@/assets/icons/services-websites.svg";

import { BlurFade } from "../ui/blur-fade";
import { GlareHover } from "../ui/glare-hover";
import { WarpBackground } from "../ui/warp-background";

interface ServiceCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string | React.ReactNode;
  description: string;
  delay: number;
  className?: string;
}

function ServiceCard({
  icon,
  title,
  description,
  delay,
  className,
}: ServiceCardProps) {
  return (
    <BlurFade
      inView
      direction="up"
      delay={delay}
      className={`relative ${className}`}
    >
      <GlareHover
        width="100%"
        background="#060606"
        color="#fff"
        opacity={0.05}
        className="group relative flex h-full w-full flex-col items-start overflow-hidden rounded-[32px] border border-white/5 p-8 text-left transition-all duration-300 hover:border-white/10 md:p-10"
      >
        {/* Card Header (Icon & Button) */}
        <div className="mb-8 flex w-full items-start justify-between">
          <Image
            src={icon}
            alt={typeof title === "string" ? `Ícone representativo de ${title}` : "Ícone de serviço"}
            className="h-[74px] w-[81px] select-none"
          />
        </div>

        {/* Card Title */}
        <h3 className="font-heading mb-4 text-2xl leading-tight font-normal tracking-[-3%] text-white md:text-[26px]">
          {title}
        </h3>

        {/* Card Description */}
        <p className="flex-1 font-sans text-base leading-relaxed text-white/85">
          {description}
        </p>

        {/* Bottom Line */}
        <div className="via-site-bg from-primary mt-6 h-[2px] w-30 rounded-full bg-linear-to-r to-transparent" />
      </GlareHover>
    </BlurFade>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-site-bg relative w-full overflow-hidden text-white"
    >
      <WarpBackground
        beamSize={4}
        perspective={150}
        gridColor="rgba(255, 255, 255, 0.03)"
        className="w-full rounded-none border-none bg-transparent p-0 px-4 py-24 md:mask-[linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)] md:px-12 lg:px-20"
      >
        <div className="mx-auto w-full max-w-[100rem]">
          {/* Section Title */}
          <div className="z-10 flex justify-center max-sm:mb-10">
            <BlurFade inView direction="up" delay={0.1}>
              <h2 className="font-heading bg-linear-to-t from-transparent from-15% to-white to-80% bg-clip-text text-center text-6xl leading-none font-light tracking-[-1.5%] text-transparent uppercase md:text-8xl lg:text-9xl">
                SERVIÇOS
              </h2>
            </BlurFade>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Desenvolvimento de Websites */}
            <ServiceCard
              icon={WebsitesIcon}
              title={
                <>
                  Desenvolvimento
                  <br />
                  de Websites
                </>
              }
              description="Websites rápidos, modernos e totalmente personalizados para fortalecer sua presença digital."
              delay={0.15}
              className="order-1"
            />

            {/* Card 2: Landing Pages */}
            <ServiceCard
              icon={LandingIcon}
              title="Landing Pages"
              description="Páginas de alta conversão desenvolvidas para campanhas, lançamentos e captação de clientes. Design pensado para conversão."
              delay={0.2}
              className="order-2"
            />

            {/* Card 3: Loja Online */}
            <ServiceCard
              icon={ShopIcon}
              title="Loja Online"
              description="Lojas virtuais completas com integração de pagamentos, estoque e automações. Design de luxo que chama atenção para vender mais."
              delay={0.25}
              className="order-3"
            />

            {/* Card 4: SEO & Manutenção */}
            <ServiceCard
              icon={SeoIcon}
              title={
                <>
                  SEO &
                  <br />
                  Manutenção
                </>
              }
              description="Estratégias para melhorar o posicionamento da empresa nos mecanismos de buscas."
              delay={0.3}
              className="order-4"
            />

            {/* Card 5: Sistemas Sob Medida */}
            <ServiceCard
              icon={SystemsIcon}
              title={
                <>
                  Sistemas Sob
                  <br />
                  Medida
                </>
              }
              description="Sistemas personalizados para automatizar processos internos e aumentar a produtividade."
              delay={0.35}
              className="order-5"
            />

            {/* Card 6 (Center Bottom Diagram): Large Illustration widget */}
            <BlurFade
              inView
              direction="up"
              delay={0.4}
              className="order-6 flex h-[160px] items-center justify-center rounded-[32px] p-6 max-sm:order-0 md:col-span-2 md:h-[380px]"
            >
              <div className="relative flex h-full w-full max-w-[500px] items-center justify-center">
                <Image
                  src={CenterBottomIllustration}
                  alt="Fluxo de Serviços"
                  className="pointer-events-none h-auto w-full object-contain select-none"
                  priority
                />
              </div>
            </BlurFade>

            {/* Card 7: IA & Automação Eficiente */}
            <ServiceCard
              icon={AiIcon}
              title={
                <>
                  IA & Automação
                  <br />
                  Eficiente
                </>
              }
              description="Implementação de Inteligência Artificial e automações para otimizar tarefas repetitivas."
              delay={0.45}
              className="order-7"
            />
          </div>
        </div>
      </WarpBackground>
    </section>
  );
}

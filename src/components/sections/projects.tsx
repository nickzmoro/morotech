"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

import N2CommerceImage from "@/assets/projects/n2commerce.png";

import Badge from "../ui/badge";
import { BlurFade } from "../ui/blur-fade";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: string;
  badgeText: string;
  title: string;
  description: string;
  bullets: string[];
  service: string;
  objective: string;
  image: StaticImageData;
  link: string;
}

const projects: Project[] = [
  {
    id: "n2commerce",
    badgeText: "Landing Page",
    title: "N2 Commerce",
    description:
      "Landing page estratégica desenvolvida para apresentar a plataforma e aumentar a conversão em campanhas de tráfego pago.",
    bullets: [
      "Design moderno e focado em conversão",
      "Estrutura otimizada para performance",
      "Seções pensadas para gerar autoridade",
      "Totalmente responsivo e animado",
    ],
    service: "Landing Page",
    objective: "Gerar mais vendas",
    image: N2CommerceImage,
    link: "https://n2commerce.com.br",
  },
  {
    id: "dolcci-b",
    badgeText: "E-commerce",
    title: "Dolcci B",
    description:
      "E-commerce premium de doces gourmet com painel de vendas e checkout de alta conversão integrado.",
    bullets: [
      "Checkout transparente integrado",
      "Painel administrativo personalizado",
      "Design sofisticado e atraente",
      "Gestão automática de estoque",
    ],
    service: "E-commerce",
    objective: "Vender online",
    image: N2CommerceImage,
    link: "https://dolccib.com.br",
  },
  {
    id: "markvora",
    badgeText: "Website",
    title: "Markvora",
    description:
      "Site institucional dinâmico para agência de marketing, focado em atração de novos leads e autoridade no mercado.",
    bullets: [
      "Design futurista e dinâmico",
      "Carregamento em milissegundos",
      "Blog otimizado para SEO",
      "Captura inteligente de contatos",
    ],
    service: "Website Institucional",
    objective: "Atrair leads qualificados",
    image: N2CommerceImage,
    link: "https://markvora.com.br",
  },
  {
    id: "markvora",
    badgeText: "Website",
    title: "Markvora",
    description:
      "Site institucional dinâmico para agência de marketing, focado em atração de novos leads e autoridade no mercado.",
    bullets: [
      "Design futurista e dinâmico",
      "Carregamento em milissegundos",
      "Blog otimizado para SEO",
      "Captura inteligente de contatos",
    ],
    service: "Website Institucional",
    objective: "Atrair leads qualificados",
    image: N2CommerceImage,
    link: "https://markvora.com.br",
  },
  {
    id: "markvora",
    badgeText: "Website",
    title: "Markvora",
    description:
      "Site institucional dinâmico para agência de marketing, focado em atração de novos leads e autoridade no mercado.",
    bullets: [
      "Design futurista e dinâmico",
      "Carregamento em milissegundos",
      "Blog otimizado para SEO",
      "Captura inteligente de contatos",
    ],
    service: "Website Institucional",
    objective: "Atrair leads qualificados",
    image: N2CommerceImage,
    link: "https://markvora.com.br",
  },
  {
    id: "markvora",
    badgeText: "Website",
    title: "Markvora",
    description:
      "Site institucional dinâmico para agência de marketing, focado em atração de novos leads e autoridade no mercado.",
    bullets: [
      "Design futurista e dinâmico",
      "Carregamento em milissegundos",
      "Blog otimizado para SEO",
      "Captura inteligente de contatos",
    ],
    service: "Website Institucional",
    objective: "Atrair leads qualificados",
    image: N2CommerceImage,
    link: "https://markvora.com.br",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const cards = cardsRef.current;

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndex(index);
            }
          },
        });

        if (index === 0) return;

        const prevCard = cards[index - 1];
        const currentCardInner = card.querySelector(".project-card-inner");
        const prevCardInner = prevCard?.querySelector(".project-card-inner");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top top",
            scrub: 0.8,
          },
        });

        if (currentCardInner) {
          tl.fromTo(
            currentCardInner,
            {
              y: 120,
              scale: 0.96,
              opacity: 0.6,
            },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
            },
            0,
          );
        }

        if (prevCardInner) {
          tl.fromTo(
            prevCardInner,
            {
              scale: 1,
              filter: "brightness(1) blur(0px)",
            },
            {
              scale: 0.94,
              filter: "brightness(0.55) blur(2px)",
              ease: "power2.out",
            },
            0,
          );
        }
      });
    },
    { scope: containerRef },
  );

  const scrollToProject = (index: number) => {
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const targetScroll = containerTop + index * window.innerHeight;
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="projetos"
      className="bg-site-bg relative w-full text-white"
    >
      {/* Title block - sticky for desktop, normal flow for mobile */}
      <div className="pointer-events-none sticky top-12 z-0 flex w-full justify-center pt-16 max-sm:relative max-sm:top-0 max-sm:pt-24 max-sm:pb-8">
        <BlurFade inView direction="up" delay={0.1}>
          <h2 className="font-heading bg-linear-to-t from-transparent from-15% to-white to-80% bg-clip-text text-center text-6xl leading-none font-light tracking-[-1.5%] text-transparent uppercase md:text-8xl lg:text-9xl">
            PROJETOS
          </h2>
        </BlurFade>
      </div>

      {/* Side Dots pagination - sticky container */}
      <div
        className={`pointer-events-none absolute inset-y-0 right-6 z-50 flex items-start justify-center transition-opacity duration-300 max-md:hidden md:right-10 lg:right-16 ${
          activeIndex === 0 ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="pointer-events-auto sticky top-1/2 flex -translate-y-1/2 flex-col gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProject(index)}
              className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-2.5 scale-125 bg-white shadow-[0_0_8px_#ffffff]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Ver projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Cards stack */}
      <div className="relative mx-auto -mt-16 w-full max-w-[100rem] px-6 max-sm:mt-0 md:-mt-24 md:px-12 lg:px-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="relative sticky top-0 flex h-screen w-full items-center justify-center overflow-visible py-8 md:py-12"
            style={{ zIndex: index + 1 }}
          >
            {/* The main card container */}
            <div className="project-card-inner bg-card-bg relative flex w-full flex-col items-center justify-between overflow-hidden rounded-[32px] border border-white/5 p-8 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.8)] md:p-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:p-14">
              {/* Left Column: Image mockup */}
              <div className="relative flex w-full items-center justify-center overflow-hidden select-none lg:col-span-7">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full max-w-[450px] object-contain transition-transform duration-500 hover:scale-102 lg:max-w-none"
                  priority={index === 0}
                />
              </div>

              {/* Right Column: Project details */}
              <div className="mt-8 flex w-full flex-col text-left lg:col-span-5 lg:mt-0">
                {/* Badge component */}
                <div className="mb-6">
                  <Badge
                    text={project.badgeText}
                    variant="blue"
                    inView={true}
                  />
                </div>

                {/* Project Title */}
                <h3 className="font-heading mb-4 text-3xl font-normal tracking-[-2.5%] text-white md:text-4xl">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mb-8 font-sans text-base leading-relaxed text-white/75">
                  {project.description}
                </p>

                {/* Project Custom Bullet points */}
                <ul className="mb-8 space-y-4">
                  {project.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-center gap-3">
                      <div className="relative flex h-5 w-8 shrink-0 items-center justify-center">
                        {/* Horizontal gradient line */}
                        <span className="h-[2px] w-8 rounded-full bg-linear-to-r from-transparent via-blue-600 to-blue-400" />
                        {/* Small glowing dot at the end */}
                        <span className="absolute right-0 h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_#2563eb]" />
                      </div>
                      <span className="text-[15px] leading-relaxed font-medium tracking-wide text-white/80">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="mb-6 h-px w-full bg-white/10" />

                {/* Service & Objective metadata */}
                <div className="mb-8 grid grid-cols-2 gap-6">
                  <div>
                    <span className="mb-1.5 block text-[11px] font-semibold tracking-widest text-white/40 uppercase">
                      SERVIÇO
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {project.service}
                    </span>
                  </div>
                  <div>
                    <span className="mb-1.5 block text-[11px] font-semibold tracking-widest text-white/40 uppercase">
                      OBJETIVO
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {project.objective}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-site-bg inline-flex w-fit cursor-pointer items-center gap-2.5 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white"
                >
                  Ver projeto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

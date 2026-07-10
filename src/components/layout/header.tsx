"use client";

import MoroLogo from "@public/logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg";
import { cn } from "@/lib/utils";

import { BlurFade } from "../ui/blur-fade";
import { GlareHover } from "../ui/glare-hover";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BlurFade
      delay={1.5}
      className={cn(
        "fixed left-1/2 z-20 mx-auto w-full -translate-x-1/2 transition-all duration-300 ease-in-out",
        isScrolled
          ? "top-0 max-w-[100rem] border border-white/5 bg-black/10 backdrop-blur-lg backdrop-saturate-0 md:top-2 md:rounded-full"
          : "top-0 max-w-[100rem] rounded-none border border-transparent bg-transparent backdrop-blur-none",
      )}
    >
      <header className="">
        <div
          className={cn(
            "mx-auto flex max-w-[100rem] items-center justify-between px-6 transition-all duration-300 ease-in-out md:px-12 lg:px-20",
            isScrolled ? "h-18 md:h-20" : "h-22 md:h-24",
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="pointer-events-auto flex items-center select-none"
            aria-label="Moro Logo"
          >
            <Image
              src={MoroLogo}
              alt="Moro Logo"
              className="h-[30px] w-auto"
              priority
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-9 lg:gap-10">
              <li>
                <a
                  href="#"
                  className="font-sans text-base font-medium tracking-wide text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="font-sans text-base font-medium tracking-wide text-white/70 transition-colors hover:text-white"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-base font-medium tracking-wide text-white/70 transition-colors hover:text-white"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-base font-medium tracking-wide text-white/70 transition-colors hover:text-white"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-base font-medium tracking-wide text-white/70 transition-colors hover:text-white"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </nav>

          {/* Fale Comigo CTA */}
          <div>
            <GlareHover className="rounded-full">
              <a
                href={`https://wa.me/5514991459254?text=${encodeURIComponent(
                  "Olá! Vi o site de vocês e gostaria de conversar sobre um projeto.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading flex items-center gap-2 rounded-full bg-[#2563EB] px-6.5 py-3 text-base font-semibold tracking-[-1.5%] text-white transition-all duration-200 hover:bg-blue-700"
              >
                Fale comigo
                <Image src={WhatsAppIcon} alt="WhatsApp" className="h-5 w-5" />
              </a>
            </GlareHover>
          </div>
        </div>
      </header>
    </BlurFade>
  );
}

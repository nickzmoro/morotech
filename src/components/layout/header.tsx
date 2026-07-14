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
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#", id: "inicio" },
    { label: "Sobre", href: "#sobre", id: "sobre" },
    { label: "Serviços", href: "#servicos", id: "servicos" },
    { label: "Projetos", href: "#projetos", id: "projetos" },
    { label: "Resultados", href: "#resultados", id: "resultados" },
  ];

  useEffect(() => {
    const sections = [
      "inicio",
      "sobre",
      "servicos",
      "metodo",
      "projetos",
      "resultados",
      "faq",
      "orcamento",
    ];

    const sectionMapping: Record<string, string> = {
      inicio: "inicio",
      sobre: "sobre",
      servicos: "servicos",
      metodo: "servicos",
      projetos: "projetos",
      resultados: "resultados",
      faq: "resultados",
      orcamento: "resultados",
    };

    let cachedSections: Array<{ id: string; top: number; bottom: number }> = [];

    const updateSectionCache = () => {
      cachedSections = sections
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          return { id, top, bottom };
        })
        .filter((item): item is { id: string; top: number; bottom: number } => item !== null);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      if (window.scrollY < 120) {
        setActiveSection("inicio");
        return;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection("resultados");
        return;
      }

      const scrollPosition = window.scrollY + 200;
      let currentSection = "inicio";

      for (const section of cachedSections) {
        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          currentSection = section.id;
          break;
        }
      }

      const mappedSection = sectionMapping[currentSection] || "inicio";
      setActiveSection(mappedSection);
    };

    updateSectionCache();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateSectionCache);

    // Also update cache after a brief delay to ensure images/layouts are fully loaded
    const timeoutId = setTimeout(updateSectionCache, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSectionCache);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <>
      <BlurFade
        delay={1.5}
        className={cn(
          "fixed left-1/2 z-20 mx-auto w-full -translate-x-1/2 transition-all duration-300 ease-in-out",
          isScrolled
            ? "top-0 max-w-[100rem] border-b border-b-white/5 bg-black/10 backdrop-blur-lg md:top-2 md:rounded-full md:border md:border-white/5"
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
                className="h-[24px] w-auto md:h-[30px]"
                priority
              />
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-9 lg:gap-10">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => handleNavClick(item.id)}
                        className={cn(
                          "font-sans text-base font-medium tracking-wide transition-colors duration-200",
                          isActive
                            ? "text-white"
                            : "text-white/70 hover:text-white",
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Fale Comigo CTA */}
            <div className="hidden md:block">
              <GlareHover className="rounded-full">
                <a
                  href={`https://wa.me/5514991459254?text=${encodeURIComponent(
                    "Olá! Vi o site de vocês e gostaria de conversar sobre um projeto.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading flex items-center gap-2 rounded-full bg-[#2563EB] px-6.5 py-3 text-sm font-semibold tracking-[-1.5%] text-white transition-all duration-200 hover:bg-blue-700 md:text-base"
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

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-100 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white transition-all duration-300 active:scale-90 md:hidden"
              aria-label="Toggle menu"
            >
              <div className="relative h-5 w-5">
                <span
                  className={cn(
                    "absolute top-1 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300",
                    isMenuOpen ? "top-2.5 rotate-45" : "",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-2.5 -left-1 h-0.5 w-5 rounded-full bg-white transition-all duration-200",
                    isMenuOpen ? "scale-x-0 opacity-0" : "",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-4 left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300",
                    isMenuOpen ? "top-2.5 -rotate-45" : "",
                  )}
                />
              </div>
            </button>
          </div>
        </header>
      </BlurFade>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "bg-site-bg/98 fixed inset-0 z-10 flex flex-col justify-between p-6 pt-32 pb-10 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden",
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-10 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                className={cn(
                  "transition-all duration-500 ease-out",
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0",
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : "0ms",
                }}
              >
                <a
                  href={item.href}
                  onClick={() => {
                    handleNavClick(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "font-heading text-4xl font-semibold tracking-tight transition-colors",
                    isActive ? "text-white" : "text-white/60 hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div
          className={cn(
            "w-full transition-all delay-350 duration-500 ease-out",
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0",
          )}
        >
          <a
            href={`https://wa.me/5514991459254?text=${encodeURIComponent(
              "Olá! Vi o site de vocês e gostaria de conversar sobre um projeto.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="font-heading flex w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700"
          >
            Fale comigo
            <Image src={WhatsAppIcon} alt="WhatsApp" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </>
  );
}

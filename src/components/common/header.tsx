import MoroLogo from "@public/logo.svg";
import Image from "next/image";

import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg";

import { GlareHover } from "../ui/glare-hover";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 w-full">
      <div className="mx-auto flex h-24 max-w-[100rem] items-center justify-between px-6 md:px-12 lg:px-20">
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
                href="#"
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
              href="https://wa.me/5514991459254"
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
  );
}

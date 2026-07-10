import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Header from "@/components/layout/header";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Moro | Tecnologia pensada para o seu negócio",
  description:
    "Sites, lojas e sistemas sob medida — com SEO, automação e IA para sua empresa vender mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn("h-full", "antialiased", "dark", manrope.variable)}
    >
      <body className="bg-site-bg flex min-h-full flex-col text-white selection:bg-[#2563EB] selection:text-white">
        {/* Header / Navigation Bar */}
        <Header />

        {children}

        {/* WhatsApp Icon */}
        <FloatingWhatsApp message="Olá! Vi o site de vocês e gostaria de conversar sobre um projeto." />
      </body>
    </html>
  );
}

import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

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
      <body className="min-h-full flex flex-col bg-[#020202] text-white selection:bg-[#2563EB] selection:text-white">
        {children}
      </body>
    </html>
  );
}

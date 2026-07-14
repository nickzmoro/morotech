import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

import JsonLd from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://morotech.digital"),
  title: {
    default: "Moro Tech | Tecnologia e Design Digital Sob Medida",
    template: "%s | Moro Tech",
  },
  description:
    "Sites rápidos, landing pages de alta conversão, e-commerce e sistemas sob medida com inteligência artificial. Design premium exclusivo para sua empresa vender mais.",
  keywords: [
    "Moro Tech",
    "Nicolas Moro",
    "desenvolvimento de sites",
    "criação de landing pages",
    "loja online",
    "sistemas sob medida",
    "desenvolvimento de e-commerce",
    "automação com IA",
    "SEO técnico",
    "Next.js",
    "desenvolvedor de software",
    "presença digital premium",
    "landing page",
    "loja virtual",
  ],
  authors: [{ name: "Nicolas Moro", url: "https://morotech.digital" }],
  creator: "Moro Tech",
  publisher: "Moro Tech",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  alternates: {
    canonical: "/",
  },
  applicationName: "Moro Tech",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Moro Tech | Tecnologia e Design Digital Sob Medida",
    description:
      "Sites rápidos, landing pages de alta conversão, e-commerce e sistemas sob medida com inteligência artificial. Design premium exclusivo para sua empresa vender mais.",
    url: "https://morotech.digital",
    siteName: "Moro Tech",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/share-image.webp",
        width: 1200,
        height: 630,
        alt: "Moro Tech | Tecnologia e Design Digital Sob Medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moro Tech | Tecnologia e Design Digital Sob Medida",
    description:
      "Sites rápidos, landing pages de alta conversão, e-commerce e sistemas sob medida com inteligência artificial. Design premium exclusivo para sua empresa vender mais.",
    images: ["/share-image.webp"],
    creator: "@morotech.br",
  },
};

export const viewport = {
  themeColor: "#02091B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
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
        <SmoothCursor />

        {/* Header / Navigation Bar */}
        <Header />

        {children}

        {/* Footer */}
        <Footer />

        {/* WhatsApp Icon */}
        <FloatingWhatsApp message="Olá! Vi o site de vocês e gostaria de conversar sobre um projeto." />

        {/* Structured Data */}
        <JsonLd />
      </body>
    </html>
  );
}

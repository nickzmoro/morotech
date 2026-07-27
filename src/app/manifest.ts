import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moro Tech",
    short_name: "Moro Tech",
    description:
      "Sites, lojas e sistemas sob medida — com SEO, automação e IA para sua empresa vender mais.",
    start_url: "/",
    display: "standalone",
    background_color: "#02091B",
    theme_color: "#02091B",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

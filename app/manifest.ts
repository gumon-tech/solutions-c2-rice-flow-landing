import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rice Flow",
    short_name: "Rice Flow",
    description: "Secure digital operations platform for rice mill telemetry, alerts, maintenance, and multi-site control.",
    start_url: "/en",
    display: "standalone",
    background_color: "#07101c",
    theme_color: "#07101c",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Smalto — Maison de couture masculine",
    short_name: "Smalto",
    description:
      "Une vision parisienne de l’élégance masculine.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#171714",
    lang: "fr",
  };
}

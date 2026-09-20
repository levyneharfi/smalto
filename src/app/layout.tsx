import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MotionController } from "@/components/motion/motion-controller";
import "./globals.css";
import "./catalog.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Smalto — Maison de couture masculine",
    template: "%s | Smalto",
  },
  description:
    "Découvrez l'univers Smalto : une vision parisienne de l'élégance masculine, entre précision du geste et liberté d'allure.",
  applicationName: "Smalto",
  keywords: [
    "Smalto",
    "couture masculine",
    "costume homme",
    "élégance parisienne",
    "sur-mesure",
  ],
  authors: [{ name: "Smalto" }],
  creator: "Smalto",
  publisher: "Smalto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Smalto",
    title: "Smalto — Maison de couture masculine",
    description:
      "Une vision parisienne de l'élégance masculine, entre précision du geste et liberté d'allure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <MotionController />
        <a className="skip-link" href="#contenu-principal">
          Aller au contenu principal
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

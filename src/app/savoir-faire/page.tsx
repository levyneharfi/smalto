import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentHero } from "@/components/content/content-hero";

export const metadata: Metadata = {
  title: "Savoir-faire",
  description:
    "Une présentation éditoriale des gestes, des matières et de la construction du vestiaire.",
};

const steps = [
  {
    number: "01",
    title: "Observer",
    description:
      "Comprendre la posture, le mouvement et l’usage auquel la pièce est destinée.",
  },
  {
    number: "02",
    title: "Tracer",
    description:
      "Définir les lignes et les proportions avant de donner forme au volume.",
  },
  {
    number: "03",
    title: "Construire",
    description:
      "Assembler les éléments en recherchant souplesse, équilibre et précision.",
  },
  {
    number: "04",
    title: "Ajuster",
    description:
      "Corriger les tensions et affiner le tombé jusqu’à obtenir une silhouette naturelle.",
  },
];

export default function SavoirFairePage() {
  return (
    <main id="contenu-principal">
      <ContentHero
        eyebrow="Savoir-faire"
        title="La précision du geste"
        description="Du dessin initial à l’équilibre final, chaque étape participe à la liberté de la silhouette."
        image="/media/atelier.svg"
        imageAlt="Composition abstraite évoquant les lignes d’un patron de couture"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Savoir-faire" },
        ]}
      />

      <section className="craft-introduction section-shell">
        <p className="eyebrow">Dans l’atelier</p>
        <h2>Donner forme à une intention</h2>
        <p>
          Les contenus de cette page sont une interprétation éditoriale de
          démonstration. Ils ne constituent pas une description contractuelle
          des procédés, matériaux ou lieux de fabrication officiels.
        </p>
      </section>

      <ol className="craft-steps section-shell">
        {steps.map((step) => (
          <li key={step.number}>
            <span>{step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>

      <section className="editorial-split editorial-split-reverse">
        <div className="editorial-split-image">
          <Image
            src="/media/essentiels.svg"
            alt="Composition abstraite de matières dans des tons naturels"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="editorial-split-content">
          <p className="eyebrow">Les matières</p>
          <h2>Le toucher guide la ligne</h2>
          <p>
            Une étoffe ne se choisit pas uniquement pour son apparence. Son
            poids, sa souplesse et sa réaction au mouvement déterminent la
            manière dont la silhouette prendra vie.
          </p>
          <Link className="text-link" href="/collections">
            Explorer les collections
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentHero } from "@/components/content/content-hero";

export const metadata: Metadata = {
  title: "La Maison",
  description:
    "Découvrez l’interprétation éditoriale de la Maison Smalto et de son allure parisienne.",
};

export default function MaisonPage() {
  return (
    <main id="contenu-principal">
      <ContentHero
        eyebrow="La Maison"
        title="Une allure parisienne"
        description="Une vision du vestiaire masculin guidée par la coupe, le mouvement et la recherche d’un équilibre naturel."
        image="/media/paris.svg"
        imageAlt="Interprétation graphique d’une façade parisienne au crépuscule"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "La Maison" },
        ]}
      />

      <section className="editorial-statement section-shell">
        <p className="eyebrow">Une vision</p>
        <h2>
          Construire une présence sans jamais contraindre le mouvement.
        </h2>
        <p>
          Cette expérience numérique de démonstration interprète les codes
          d’une maison de couture masculine : la précision d’une ligne,
          l’attention portée aux matières et une élégance qui demeure
          personnelle.
        </p>
      </section>

      <section className="editorial-split">
        <div className="editorial-split-image">
          <Image
            src="/media/costume.svg"
            alt="Silhouette graphique en costume anthracite"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="editorial-split-content">
          <p className="eyebrow">Le vocabulaire</p>
          <h2>La ligne avant l’effet</h2>
          <p>
            L’épaule, le revers, l’équilibre de la veste et la fluidité du
            pantalon composent une grammaire sobre. Chaque élément trouve sa
            place sans chercher à dominer l’ensemble.
          </p>
          <Link className="text-link" href="/savoir-faire">
            Découvrir le savoir-faire
          </Link>
        </div>
      </section>

      <section className="editorial-values section-shell">
        <article>
          <span>01</span>
          <h2>Précision</h2>
          <p>
            Une attention portée aux proportions et à la cohérence de chaque
            détail.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Mouvement</h2>
          <p>
            Des volumes conçus pour accompagner le corps plutôt que le figer.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Discrétion</h2>
          <p>
            Une expression maîtrisée, révélée par les matières et la coupe.
          </p>
        </article>
      </section>
    </main>
  );
}

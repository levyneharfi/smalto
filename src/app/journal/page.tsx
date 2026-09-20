import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Histoires de lignes, de matières et de culture parisienne dans le journal éditorial Smalto.",
};

const stories = [
  {
    title: "Paris, ligne de conduite",
    category: "Inspiration",
    description:
      "Architecture, lumière et mouvement dessinent un vocabulaire fait de contrastes mesurés.",
    image: "/media/paris.svg",
    imageAlt: "Interprétation graphique d’une façade parisienne",
  },
  {
    title: "L’équilibre d’une veste",
    category: "Atelier",
    description:
      "Une lecture éditoriale des proportions qui construisent la silhouette.",
    image: "/media/atelier.svg",
    imageAlt: "Lignes graphiques évoquant un patron de veste",
  },
  {
    title: "Le noir après la lumière",
    category: "Le soir",
    description:
      "Le vestiaire du soir se révèle dans les contrastes, les textures et le mouvement.",
    image: "/media/soir.svg",
    imageAlt: "Composition abstraite noire et ivoire",
  },
];

export default function JournalPage() {
  return (
    <main id="contenu-principal" className="journal-page section-shell">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Journal" },
        ]}
      />

      <header className="journal-header">
        <p className="eyebrow">Regards et conversations</p>
        <h1>Le Journal</h1>
        <p>
          Des récits éditoriaux de démonstration autour de l’allure, de
          l’atelier et de Paris.
        </p>
      </header>

      <div className="journal-grid">
        {stories.map((story, index) => (
          <article className={index === 0 ? "journal-card is-featured" : "journal-card"} key={story.title}>
            <div className="journal-card-image">
              <Image
                src={story.image}
                alt={story.imageAlt}
                fill
                priority={index === 0}
                sizes={index === 0 ? "100vw" : "(max-width: 720px) 100vw, 50vw"}
              />
            </div>
            <div className="journal-card-content">
              <p className="eyebrow">{story.category}</p>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              <span className="journal-demo-label">
                Article éditorial de démonstration
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="journal-collection-link">
        <Link className="button button-dark" href="/collections">
          Découvrir le vestiaire
        </Link>
      </div>
    </main>
  );
}

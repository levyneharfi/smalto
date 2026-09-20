import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";
import { categories } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explorez les collections de démonstration Smalto : costumes, vestes, chemises, mailles et accessoires.",
};

export default function CollectionsPage() {
  return (
    <main id="contenu-principal">
      <div className="catalog-page-intro section-shell">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Collections" },
          ]}
        />
        <p className="eyebrow">Le vestiaire Smalto</p>
        <h1>Collections</h1>
        <p className="catalog-intro-copy">
          Une garde-robe masculine construite autour de la coupe, de la matière
          et du mouvement. Les contenus et tarifs présentés ici sont des données
          de démonstration non contractuelles.
        </p>
      </div>

      <div className="category-index section-shell">
        {categories.map((category, index) => (
            <article className="category-index-card" key={category.slug}>
              <Link href={`/collections/${category.slug}`}>
                <div className="category-index-image">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                </div>
                <div className="category-index-content">
                  <p className="eyebrow">0{index + 1}</p>
                  <h2>{category.name}</h2>
                  <p>{category.shortDescription}</p>
                  <span className="text-link" aria-hidden="true">
                    Explorer
                  </span>
                </div>
              </Link>
            </article>
          ))}
      </div>
    </main>
  );
}

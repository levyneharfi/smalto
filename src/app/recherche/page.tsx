import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";
import { ProductGrid } from "@/components/catalog/product-grid";
import { products } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Recherchez une pièce dans le catalogue de démonstration Smalto.",
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string | string[];
  }>;
};

function getFirstValue(value?: string | string[]): string {
  return (Array.isArray(value) ? value[0] : value)?.trim().slice(0, 100) ?? "";
}

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr");
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const query = getFirstValue((await searchParams).q);
  const normalizedQuery = normalize(query);

  const results = normalizedQuery
    ? products.filter((product) => {
        const searchableContent = normalize(
          [
            product.name,
            product.categoryLabel,
            product.description,
            product.material,
            ...product.colors.map((color) => color.name),
          ].join(" "),
        );

        return searchableContent.includes(normalizedQuery);
      })
    : [];

  return (
    <main id="contenu-principal" className="search-page section-shell">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Recherche" },
        ]}
      />

      <header className="search-header">
        <p className="eyebrow">Le catalogue</p>
        <h1>Recherche</h1>
      </header>

      <form className="search-form" action="/recherche" method="get" role="search">
        <label htmlFor="site-search">Que recherchez-vous ?</label>
        <div>
          <input
            id="site-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Costume, veste, maille…"
            maxLength={100}
          />
          <button type="submit">Rechercher</button>
        </div>
      </form>

      {!query ? (
        <section className="search-state">
          <p className="eyebrow">Commencer une recherche</p>
          <h2>Entrez un produit, une matière ou un coloris.</h2>
          <p>
            Essayez par exemple « costume », « nuit », « laine » ou « maille ».
          </p>
        </section>
      ) : (
        <section className="search-results" aria-labelledby="results-title">
          <div className="search-results-heading">
            <h2 id="results-title">
              {results.length}{" "}
              {results.length > 1 ? "résultats" : "résultat"} pour « {query} »
            </h2>
          </div>

          <ProductGrid products={results} resetHref="/recherche" />
        </section>
      )}
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";
import { CatalogToolbar } from "@/components/catalog/catalog-toolbar";
import { ProductGrid } from "@/components/catalog/product-grid";
import {
  filterAndSortProducts,
  getAvailableColors,
  parseProductSort,
  products,
} from "@/data/catalog";

export const metadata: Metadata = {
  title: "Nouveautés",
  description: "Découvrez les nouvelles pièces du vestiaire Smalto.",
};

type NewProductsPageProps = {
  searchParams: Promise<{
    color?: string | string[];
    sort?: string | string[];
  }>;
};

function firstValue(value?: string | string[]): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function NewProductsPage({
  searchParams,
}: NewProductsPageProps) {
  const query = await searchParams;
  const selectedColor = firstValue(query.color);
  const selectedSort = parseProductSort(firstValue(query.sort));
  const newProducts = products.filter((product) => product.isNew);
  const visibleProducts = filterAndSortProducts(
    newProducts,
    selectedColor,
    selectedSort,
  );

  return (
    <main id="contenu-principal">
      <div className="catalog-page-intro section-shell">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Nouveautés" },
          ]}
        />
        <p className="eyebrow">Nouvelle saison</p>
        <h1>Nouveautés</h1>
        <p className="catalog-intro-copy">
          De nouvelles expressions de l&apos;allure parisienne, réunies dans une
          sélection éditoriale de démonstration.
        </p>
      </div>

      <section
        className="catalog-listing section-shell catalog-listing-standalone"
        aria-labelledby="new-products-title"
      >
        <h2 className="visually-hidden" id="new-products-title">
          Nouvelles pièces
        </h2>

        <CatalogToolbar
          action="/nouveautes"
          colors={getAvailableColors(newProducts)}
          selectedColor={selectedColor}
          selectedSort={selectedSort}
          productCount={visibleProducts.length}
        />

        <ProductGrid products={visibleProducts} resetHref="/nouveautes" />
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";
import { CatalogToolbar } from "@/components/catalog/catalog-toolbar";
import { ProductGrid } from "@/components/catalog/product-grid";
import {
  categories,
  filterAndSortProducts,
  getAvailableColors,
  getCategory,
  getProductsByCategory,
  isCategorySlug,
  parseProductSort,
} from "@/data/catalog";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    color?: string | string[];
    sort?: string | string[];
  }>;
};

function firstValue(value?: string | string[]): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    return {
      title: "Collection introuvable",
    };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category: categorySlug } = await params;

  if (!isCategorySlug(categorySlug)) {
    notFound();
  }

  const category = getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const query = await searchParams;
  const selectedColor = firstValue(query.color);
  const selectedSort = parseProductSort(firstValue(query.sort));
  const categoryProducts = getProductsByCategory(categorySlug);
  const visibleProducts = filterAndSortProducts(
    categoryProducts,
    selectedColor,
    selectedSort,
  );
  const availableColors = getAvailableColors(categoryProducts);

  return (
    <main id="contenu-principal">
      <section className="collection-hero">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          priority
          sizes="100vw"
        />
        <div className="collection-hero-overlay" aria-hidden="true" />
        <div className="collection-hero-content">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Collections", href: "/collections" },
              { label: category.name },
            ]}
          />
          <p className="eyebrow">Collection</p>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <section
        className="catalog-listing section-shell"
        aria-labelledby="catalog-title"
      >
        <div className="visually-hidden">
          <h2 id="catalog-title">Pièces de la collection {category.name}</h2>
        </div>

        <CatalogToolbar
          action={`/collections/${category.slug}`}
          colors={availableColors}
          selectedColor={selectedColor}
          selectedSort={selectedSort}
          productCount={visibleProducts.length}
        />

        <ProductGrid
          products={visibleProducts}
          resetHref={`/collections/${category.slug}`}
        />
      </section>
    </main>
  );
}

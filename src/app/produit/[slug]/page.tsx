import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";
import { ProductCard } from "@/components/catalog/product-card";
import { ProductActions } from "@/components/commerce/product-actions";
import { getProduct, products } from "@/data/catalog";
import { formatPrice } from "@/lib/format";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Produit introuvable",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const suggestions = products
    .filter(
      (suggestion) =>
        suggestion.slug !== product.slug &&
        (suggestion.category === product.category || suggestion.featured),
    )
    .slice(0, 3);

  return (
    <main id="contenu-principal">
      <div className="product-page">
        <div className="product-gallery">
          <div className="product-gallery-item product-gallery-primary">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 899px) 100vw, 55vw"
            />
          </div>
          <div className="product-gallery-item">
            <Image
              src={product.secondaryImage}
              alt={product.secondaryImageAlt}
              fill
              sizes="(max-width: 899px) 100vw, 55vw"
            />
          </div>
        </div>

        <aside className="product-information">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Collections", href: "/collections" },
              {
                label: product.categoryLabel,
                href: `/collections/${product.category}`,
              },
              { label: product.name },
            ]}
          />

          {product.isNew ? <p className="eyebrow">Nouvelle collection</p> : null}

          <h1>{product.name}</h1>
          <p className="product-reference">Référence {product.id}</p>
          <p className="product-detail-price">{formatPrice(product.price)}</p>
          <p className="product-tax-note">
            Prix de démonstration, taxes incluses. Non disponible à la vente.
          </p>

          <p className="product-description">{product.description}</p>

          <ProductActions
            productSlug={product.slug}
            productName={product.name}
            colors={product.colors}
            sizes={product.sizes}
          />

          <details className="product-accordion" open>
            <summary>Description et détails</summary>
            <ul>
              {product.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </details>

          <details className="product-accordion">
            <summary>Matière et origine</summary>
            <p>{product.material}</p>
            <p>{product.origin}</p>
          </details>

          <details className="product-accordion">
            <summary>Livraison et retours</summary>
            <p>
              Les informations logistiques sont présentées à titre de
              démonstration et seront connectées à la future plateforme
              commerciale.
            </p>
          </details>
        </aside>
      </div>

      <section className="product-suggestions section-shell" aria-labelledby="suggestions-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Une même intention</p>
            <h2 id="suggestions-title">Vous aimerez aussi</h2>
          </div>
          <Link className="text-link" href="/collections">
            Toutes les collections
          </Link>
        </div>

        <div className="product-grid product-grid-suggestions">
          {suggestions.map((suggestion) => (
            <ProductCard key={suggestion.id} product={suggestion} />
          ))}
        </div>
      </section>
    </main>
  );
}

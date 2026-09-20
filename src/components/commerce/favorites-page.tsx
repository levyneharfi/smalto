"use client";

import Link from "next/link";
import { ProductCard } from "@/components/catalog/product-card";
import { products } from "@/data/catalog";
import { useCommerceStore } from "@/lib/commerce-store";

export function FavoritesPage() {
  const commerce = useCommerceStore();

  const favoriteProducts = commerce.favorites.flatMap((slug) => {
    const product = products.find(
      (candidate) => candidate.slug === slug,
    );

    return product ? [product] : [];
  });

  if (favoriteProducts.length === 0) {
    return (
      <div className="commerce-empty">
        <p className="eyebrow">Votre sélection</p>
        <h1>Aucun favori pour le moment.</h1>
        <p>
          Enregistrez les pièces qui vous intéressent pour les retrouver
          ici.
        </p>
        <Link className="button button-dark" href="/collections">
          Découvrir les collections
        </Link>
      </div>
    );
  }

  return (
    <section
      className="favorites-page section-shell"
      aria-labelledby="favorites-title"
    >
      <p className="eyebrow">Votre sélection</p>
      <h1 id="favorites-title">Favoris</h1>
      <p className="favorites-introduction">
        {favoriteProducts.length}{" "}
        {favoriteProducts.length > 1
          ? "pièces enregistrées"
          : "pièce enregistrée"}
      </p>

      <div className="product-grid">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

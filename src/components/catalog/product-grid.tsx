import Link from "next/link";
import type { Product } from "@/types/catalog";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
  resetHref: string;
};

export function ProductGrid({ products, resetHref }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="catalog-empty">
        <p className="eyebrow">Aucun résultat</p>
        <h2>Aucune pièce ne correspond à ce filtre.</h2>
        <p>Modifiez votre sélection pour découvrir le reste de la collection.</p>
        <Link className="button button-dark" href={resetHref}>
          Réinitialiser les filtres
        </Link>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < 3}
        />
      ))}
    </div>
  );
}

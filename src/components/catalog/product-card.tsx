import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/catalog";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link
        className="product-card-link"
        href={`/produit/${product.slug}`}
        aria-label={`Découvrir ${product.name}`}
      >
        <div className="product-card-image">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
          {product.isNew ? <span className="product-badge">Nouveau</span> : null}
        </div>

        <div className="product-card-content">
          <div>
            <p className="product-category">{product.categoryLabel}</p>
            <h2>{product.name}</h2>
          </div>
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>

        <ul
          className="product-card-colors"
          aria-label={`${product.colors.length} coloris disponibles`}
        >
          {product.colors.map((color) => (
            <li
              key={color.name}
              title={color.name}
              style={{ backgroundColor: color.hex }}
            >
              <span className="visually-hidden">{color.name}</span>
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}

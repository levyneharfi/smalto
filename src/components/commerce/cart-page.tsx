"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import {
  removeCartItem,
  updateCartQuantity,
  useCommerceStore,
} from "@/lib/commerce-store";

export function CartPage() {
  const commerce = useCommerceStore();

  const validItems = commerce.cart.flatMap((item) => {
    const product = products.find(
      (candidate) => candidate.slug === item.productSlug,
    );

    return product ? [{ item, product }] : [];
  });

  const total = validItems.reduce(
    (sum, { item, product }) =>
      sum + item.quantity * product.price,
    0,
  );

  if (validItems.length === 0) {
    return (
      <div className="commerce-empty">
        <p className="eyebrow">Votre sélection</p>
        <h1>Votre panier est vide.</h1>
        <p>
          Découvrez les pièces de la collection et composez votre
          vestiaire.
        </p>
        <Link className="button button-dark" href="/collections">
          Découvrir les collections
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <section className="cart-products" aria-labelledby="cart-title">
        <p className="eyebrow">Votre sélection</p>
        <h1 id="cart-title">Panier</h1>

        <p className="commerce-demo-warning" role="note">
          Catalogue de démonstration : aucune commande ni aucun paiement
          ne sera transmis.
        </p>

        <ul className="cart-list">
          {validItems.map(({ item, product }) => {
            const lineKey = [
              item.productSlug,
              item.color,
              item.size,
            ].join("-");

            return (
              <li className="cart-item" key={lineKey}>
                <Link
                  className="cart-item-image"
                  href={`/produit/${product.slug}`}
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="160px"
                  />
                </Link>

                <div className="cart-item-information">
                  <div>
                    <p className="product-category">
                      {product.categoryLabel}
                    </p>
                    <h2>
                      <Link href={`/produit/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h2>
                    <p>
                      {item.color} — Taille {item.size}
                    </p>
                  </div>

                  <p>{formatPrice(product.price)}</p>

                  <div className="cart-item-actions">
                    <label>
                      <span>Quantité</span>
                      <select
                        value={item.quantity}
                        onChange={(event) =>
                          updateCartQuantity(
                            item.productSlug,
                            item.color,
                            item.size,
                            Number(event.target.value),
                          )
                        }
                      >
                        {Array.from(
                          { length: 10 },
                          (_, index) => index + 1,
                        ).map((quantity) => (
                          <option value={quantity} key={quantity}>
                            {quantity}
                          </option>
                        ))}
                      </select>
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        removeCartItem(
                          item.productSlug,
                          item.color,
                          item.size,
                        )
                      }
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <aside className="cart-summary" aria-labelledby="summary-title">
        <h2 id="summary-title">Récapitulatif</h2>

        <dl>
          <div>
            <dt>Sous-total</dt>
            <dd>{formatPrice(total)}</dd>
          </div>
          <div>
            <dt>Livraison</dt>
            <dd>Offerte</dd>
          </div>
          <div className="cart-total">
            <dt>Total indicatif</dt>
            <dd>{formatPrice(total)}</dd>
          </div>
        </dl>

        <button
          className="button button-dark cart-checkout-button"
          type="button"
          disabled
          aria-describedby="checkout-explanation"
        >
          Paiement indisponible
        </button>

        <p id="checkout-explanation">
          Le paiement est désactivé dans cette démonstration.
        </p>
      </aside>
    </div>
  );
}

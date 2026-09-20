"use client";

import Link from "next/link";
import {
  getCartQuantity,
  useCommerceStore,
} from "@/lib/commerce-store";

export function CommerceNavigation() {
  const commerce = useCommerceStore();
  const cartQuantity = getCartQuantity(commerce);
  const favoriteQuantity = commerce.favorites.length;

  return (
    <>
      <li className="desktop-only">
        <Link href="/favoris">
          Favoris{" "}
          <span aria-label={`${favoriteQuantity} favoris`}>
            ({favoriteQuantity})
          </span>
        </Link>
      </li>
      <li>
        <Link href="/panier">
          Panier{" "}
          <span aria-label={`${cartQuantity} articles dans le panier`}>
            ({cartQuantity})
          </span>
        </Link>
      </li>
    </>
  );
}

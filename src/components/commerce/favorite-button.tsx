"use client";

import {
  toggleFavorite,
  useCommerceStore,
} from "@/lib/commerce-store";

type FavoriteButtonProps = {
  productSlug: string;
  productName: string;
  compact?: boolean;
};

export function FavoriteButton({
  productSlug,
  productName,
  compact = false,
}: FavoriteButtonProps) {
  const commerce = useCommerceStore();
  const isFavorite = commerce.favorites.includes(productSlug);

  return (
    <button
      className={
        compact
          ? "favorite-button favorite-button-compact"
          : "favorite-button"
      }
      type="button"
      aria-pressed={isFavorite}
      aria-label={
        isFavorite
          ? `Retirer ${productName} des favoris`
          : `Ajouter ${productName} aux favoris`
      }
      onClick={() => toggleFavorite(productSlug)}
    >
      <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
      {!compact ? (
        <span>{isFavorite ? "Dans vos favoris" : "Ajouter aux favoris"}</span>
      ) : null}
    </button>
  );
}

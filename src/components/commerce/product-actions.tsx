"use client";

import { useState } from "react";
import { addCartItem } from "@/lib/commerce-store";
import type { ProductColor } from "@/types/catalog";
import { FavoriteButton } from "./favorite-button";

type ProductActionsProps = {
  productSlug: string;
  productName: string;
  colors: ProductColor[];
  sizes: string[];
};

export function ProductActions({
  productSlug,
  productName,
  colors,
  sizes,
}: ProductActionsProps) {
  const [selectedColor, setSelectedColor] = useState(
    colors[0]?.name ?? "",
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  function addToCart() {
    if (!selectedColor) {
      setHasError(true);
      setMessage("Veuillez sélectionner un coloris.");
      return;
    }

    if (!selectedSize) {
      setHasError(true);
      setMessage("Veuillez sélectionner une taille.");
      return;
    }

    addCartItem({
      productSlug,
      color: selectedColor,
      size: selectedSize,
    });

    setHasError(false);
    setMessage(`${productName} a été ajouté au panier.`);
  }

  return (
    <div className="product-commerce-actions">
      <fieldset className="product-choice">
        <legend>
          Coloris{" "}
          <span className="product-choice-value">{selectedColor}</span>
        </legend>

        <div className="product-color-buttons">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              className={
                selectedColor === color.name
                  ? "product-color-button is-selected"
                  : "product-color-button"
              }
              aria-pressed={selectedColor === color.name}
              onClick={() => {
                setSelectedColor(color.name);
                setMessage("");
              }}
            >
              <span
                className="color-swatch"
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <span>{color.name}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="product-choice">
        <legend>
          Taille{" "}
          {selectedSize ? (
            <span className="product-choice-value">{selectedSize}</span>
          ) : null}
        </legend>

        <div className="product-size-buttons">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={
                selectedSize === size
                  ? "product-size-button is-selected"
                  : "product-size-button"
              }
              aria-pressed={selectedSize === size}
              onClick={() => {
                setSelectedSize(size);
                setHasError(false);
                setMessage("");
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="product-action-buttons">
        <button
          className="button button-dark product-add-button"
          type="button"
          onClick={addToCart}
        >
          Ajouter au panier
        </button>

        <FavoriteButton
          productSlug={productSlug}
          productName={productName}
        />
      </div>

      <p
        className={
          hasError
            ? "product-action-message is-error"
            : "product-action-message"
        }
        role={hasError ? "alert" : "status"}
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
}

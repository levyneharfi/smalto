import { describe, expect, it } from "vitest";
import {
  categories,
  getAvailableColors,
  getCategory,
  getProduct,
  getProductsByCategory,
  isCategorySlug,
  products,
} from "@/data/catalog";

describe("catalogue Smalto", () => {
  it("contient des produits avec des identifiants et des slugs uniques", () => {
    expect(products.length).toBeGreaterThan(0);

    expect(new Set(products.map((product) => product.id)).size).toBe(
      products.length,
    );

    expect(new Set(products.map((product) => product.slug)).size).toBe(
      products.length,
    );
  });

  it("contient uniquement des produits valides", () => {
    for (const product of products) {
      expect(product.id.trim()).not.toBe("");
      expect(product.name.trim()).not.toBe("");
      expect(product.slug).toMatch(/^[a-z0-9-]+$/);
      expect(product.price).toBeGreaterThan(0);
      expect(product.image.trim()).not.toBe("");
      expect(product.sizes.length).toBeGreaterThan(0);
      expect(product.colors.length).toBeGreaterThan(0);
    }
  });

  it("retrouve un produit par son slug", () => {
    const product = products[0];

    expect(product).toBeDefined();
    expect(getProduct(product.slug)).toEqual(product);
    expect(getProduct("produit-inexistant")).toBeUndefined();
  });

  it("contient des catégories avec des slugs uniques", () => {
    expect(categories.length).toBeGreaterThan(0);

    expect(new Set(categories.map((category) => category.slug)).size).toBe(
      categories.length,
    );
  });

  it("retrouve une catégorie par son slug", () => {
    const category = categories[0];

    expect(category).toBeDefined();
    expect(getCategory(category.slug)).toEqual(category);
    expect(getCategory("categorie-inexistante")).toBeUndefined();
  });

  it("reconnaît uniquement les slugs de catégories existantes", () => {
    for (const category of categories) {
      expect(isCategorySlug(category.slug)).toBe(true);
    }

    expect(isCategorySlug("categorie-inexistante")).toBe(false);
  });

  it("associe chaque produit à une catégorie existante", () => {
    for (const product of products) {
      expect(isCategorySlug(product.category)).toBe(true);
    }
  });

  it("filtre correctement les catégories commerciales", () => {
    const editorialCategories = new Set(["soiree", "essentiels"]);

    for (const category of categories) {
      if (editorialCategories.has(category.slug)) {
        continue;
      }

      const categoryProducts = getProductsByCategory(category.slug);

      for (const product of categoryProducts) {
        expect(product.category).toBe(category.slug);
      }
    }
  });

  it("alimente les sélections éditoriales Soirée et Essentiels", () => {
    const eveningProducts = getProductsByCategory("soiree");
    const essentialProducts = getProductsByCategory("essentiels");

    expect(eveningProducts.length).toBeGreaterThan(0);
    expect(essentialProducts.length).toBeGreaterThan(0);

    expect(
      eveningProducts.every(
        (product) =>
          product.category === "soiree" ||
          /soir|smoking|velours|soie/i.test(
            `${product.name} ${product.slug} ${product.description}`,
          ),
      ),
    ).toBe(true);
  });

  it("retourne une liste de couleurs sans doublon", () => {
    const colors = getAvailableColors(products);

    expect(colors.length).toBeGreaterThan(0);
    expect(new Set(colors).size).toBe(colors.length);
    expect(colors.every((color) => color.trim().length > 0)).toBe(true);
  });
});

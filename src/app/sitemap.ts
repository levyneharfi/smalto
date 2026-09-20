import type { MetadataRoute } from "next";
import { categories, products } from "@/data/catalog";
import { siteUrl } from "@/lib/site";

const staticRoutes = [
  "",
  "/collections",
  "/nouveautes",
  "/recherche",
  "/maison",
  "/savoir-faire",
  "/journal",
  "/boutiques",
  "/newsletter",
  "/panier",
  "/favoris",
  "/services/livraison",
  "/services/contact",
  "/services/guide-des-tailles",
  "/services/entretien",
  "/mentions-legales",
  "/confidentialite",
  "/conditions-generales",
  "/accessibilite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    (route) => ({
      url: new URL(route || "/", siteUrl).toString(),
      lastModified: now,
      changeFrequency:
        route === "" || route === "/nouveautes"
          ? "weekly"
          : "monthly",
      priority:
        route === ""
          ? 1
          : route === "/collections" || route === "/nouveautes"
            ? 0.9
            : 0.6,
    }),
  );

  const categoryEntries: MetadataRoute.Sitemap = categories.map(
    (category) => ({
      url: new URL(
        `/collections/${category.slug}`,
        siteUrl,
      ).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  const productEntries: MetadataRoute.Sitemap = products.map(
    (product) => ({
      url: new URL(`/produit/${product.slug}`, siteUrl).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  return [
    ...staticEntries,
    ...categoryEntries,
    ...productEntries,
  ];
}

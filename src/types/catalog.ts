export const categorySlugs = [
  "costumes",
  "vestes",
  "chemises",
  "mailles",
  "accessoires",
  "soiree",
  "essentiels",
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  categoryLabel: string;
  price: number;
  description: string;
  details: string[];
  colors: ProductColor[];
  sizes: string[];
  material: string;
  origin: string;
  image: string;
  secondaryImage: string;
  imageAlt: string;
  secondaryImageAlt: string;
  isNew: boolean;
  featured: boolean;
};

export type Category = {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ProductSort = "selection" | "price-asc" | "price-desc" | "name";

export type CatalogSearchParams = {
  color?: string | string[];
  sort?: string | string[];
};

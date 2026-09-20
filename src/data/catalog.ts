import type {
  Category,
  CategorySlug,
  Product,
  ProductSort,
} from "@/types/catalog";
import { categorySlugs } from "@/types/catalog";

export const categories: Category[] = [
  {
    slug: "costumes",
    name: "Costumes",
    shortDescription: "La précision d'une ligne, la liberté du mouvement.",
    description:
      "Des costumes construits avec souplesse, où l'équilibre des volumes révèle une silhouette contemporaine.",
    image: "/media/costume.svg",
    imageAlt: "Composition abstraite évoquant un costume sombre structuré",
  },
  {
    slug: "vestes",
    name: "Vestes",
    shortDescription: "Une architecture légère pensée pour le quotidien.",
    description:
      "Des vestes aux épaules naturelles et aux matières profondes, conçues pour accompagner chaque moment.",
    image: "/media/hero.svg",
    imageAlt: "Silhouette abstraite portant une veste sombre",
  },
  {
    slug: "chemises",
    name: "Chemises",
    shortDescription: "La netteté d'un col, la douceur d'une étoffe.",
    description:
      "Popeline, voile de coton et textures subtiles composent un répertoire de chemises essentielles.",
    image: "/media/soir.svg",
    imageAlt: "Composition abstraite évoquant une chemise blanche de soirée",
  },
  {
    slug: "mailles",
    name: "Mailles",
    shortDescription: "Des matières tactiles aux volumes mesurés.",
    description:
      "Des mailles fines ou généreuses, travaillées pour leur toucher et leur capacité à accompagner le corps.",
    image: "/media/essentiels.svg",
    imageAlt: "Composition textile abstraite dans des tons sable",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    shortDescription: "Les détails qui donnent le ton.",
    description:
      "Cravates, pochettes et pièces de cuir prolongent le vocabulaire de la Maison avec discrétion.",
    image: "/media/atelier.svg",
    imageAlt: "Composition abstraite de lignes et de matières",
  },
  {
    slug: "soiree",
    name: "Le soir",
    shortDescription: "Le noir, la lumière et la précision.",
    description:
      "Un vestiaire de cérémonie où les contrastes et les matières dessinent une présence singulière.",
    image: "/media/soir.svg",
    imageAlt: "Composition noire et ivoire évoquant une tenue de soirée",
  },
  {
    slug: "essentiels",
    name: "Les essentiels",
    shortDescription: "Une garde-robe quotidienne, précise et naturelle.",
    description:
      "Des pièces faciles à associer, portées par la qualité des étoffes et la justesse des proportions.",
    image: "/media/essentiels.svg",
    imageAlt: "Composition textile abstraite dans des teintes naturelles",
  },
];

export const products: Product[] = [
  {
    id: "SM-DEMO-001",
    slug: "costume-solaro-anthracite",
    name: "Costume Solaro",
    category: "costumes",
    categoryLabel: "Costumes",
    price: 2290,
    description:
      "Un costume deux boutons à la construction souple, dessiné pour une allure précise sans rigidité.",
    details: [
      "Veste deux boutons",
      "Revers crantés",
      "Poches passepoilées à rabat",
      "Pantalon à pli marqué",
    ],
    colors: [
      { name: "Anthracite", hex: "#383b3d" },
      { name: "Nuit", hex: "#171d27" },
    ],
    sizes: ["44", "46", "48", "50", "52", "54", "56"],
    material: "Laine vierge de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/costume.svg",
    secondaryImage: "/media/atelier.svg",
    imageAlt: "Interprétation graphique d'un costume anthracite",
    secondaryImageAlt: "Détail graphique inspiré d'un patron de costume",
    isNew: true,
    featured: true,
  },
  {
    id: "SM-DEMO-002",
    slug: "costume-croise-nuit",
    name: "Costume croisé Nuit",
    category: "costumes",
    categoryLabel: "Costumes",
    price: 2490,
    description:
      "Une veste croisée aux proportions maîtrisées, associée à un pantalon à la ligne fluide.",
    details: [
      "Veste croisée six boutons",
      "Revers en pointe",
      "Épaule naturelle",
      "Pantalon à taille régulière",
    ],
    colors: [
      { name: "Nuit", hex: "#151c28" },
      { name: "Graphite", hex: "#45474a" },
    ],
    sizes: ["44", "46", "48", "50", "52", "54"],
    material: "Laine froide de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/hero.svg",
    secondaryImage: "/media/costume.svg",
    imageAlt: "Silhouette abstraite en costume bleu nuit",
    secondaryImageAlt: "Détail graphique d'une veste structurée",
    isNew: false,
    featured: true,
  },
  {
    id: "SM-DEMO-003",
    slug: "smoking-signature-noir",
    name: "Smoking Signature",
    category: "soiree",
    categoryLabel: "Le soir",
    price: 2790,
    description:
      "Une interprétation du smoking où le satin souligne une construction nette et élancée.",
    details: [
      "Col châle en satin",
      "Fermeture un bouton",
      "Poches passepoilées",
      "Pantalon à galon",
    ],
    colors: [{ name: "Noir", hex: "#0d0e0f" }],
    sizes: ["44", "46", "48", "50", "52", "54"],
    material: "Laine et satin de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/soir.svg",
    secondaryImage: "/media/paris.svg",
    imageAlt: "Interprétation graphique d'un smoking noir",
    secondaryImageAlt: "Scène parisienne graphique à la tombée du jour",
    isNew: true,
    featured: true,
  },
  {
    id: "SM-DEMO-004",
    slug: "veste-horizon-sable",
    name: "Veste Horizon",
    category: "vestes",
    categoryLabel: "Vestes",
    price: 1590,
    description:
      "Une veste non doublée aux tons minéraux, pensée pour conjuguer aisance et tenue.",
    details: [
      "Construction semi-entoilée",
      "Deux boutons",
      "Poches plaquées",
      "Fentes latérales",
    ],
    colors: [
      { name: "Sable", hex: "#b5a58d" },
      { name: "Pierre", hex: "#918b81" },
    ],
    sizes: ["44", "46", "48", "50", "52", "54", "56"],
    material: "Lin et laine de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/essentiels.svg",
    secondaryImage: "/media/atelier.svg",
    imageAlt: "Interprétation graphique d'une veste couleur sable",
    secondaryImageAlt: "Lignes abstraites évoquant la construction d'une veste",
    isNew: true,
    featured: false,
  },
  {
    id: "SM-DEMO-005",
    slug: "veste-velours-minuit",
    name: "Veste Velours Minuit",
    category: "vestes",
    categoryLabel: "Vestes",
    price: 1890,
    description:
      "Une veste du soir en velours profond, éclairée par un col au dessin affirmé.",
    details: [
      "Velours de démonstration",
      "Revers en pointe",
      "Bouton recouvert",
      "Doublure ton sur ton",
    ],
    colors: [
      { name: "Minuit", hex: "#18202c" },
      { name: "Noir", hex: "#101112" },
    ],
    sizes: ["44", "46", "48", "50", "52", "54"],
    material: "Velours de coton de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/soir.svg",
    secondaryImage: "/media/hero.svg",
    imageAlt: "Interprétation graphique d'une veste de velours sombre",
    secondaryImageAlt: "Silhouette graphique en tenue sombre",
    isNew: false,
    featured: false,
  },
  {
    id: "SM-DEMO-006",
    slug: "chemise-popeline-blanche",
    name: "Chemise Popeline",
    category: "chemises",
    categoryLabel: "Chemises",
    price: 390,
    description:
      "Une chemise blanche à la ligne nette, caractérisée par un col précis et une popeline souple.",
    details: [
      "Col italien",
      "Poignets simples",
      "Gorge cachée",
      "Coupe ajustée",
    ],
    colors: [
      { name: "Blanc", hex: "#f2f0e9" },
      { name: "Ciel", hex: "#b8c9d2" },
    ],
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44"],
    material: "Coton de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/atelier.svg",
    secondaryImage: "/media/essentiels.svg",
    imageAlt: "Composition graphique claire évoquant une chemise blanche",
    secondaryImageAlt: "Détail abstrait dans des tons naturels",
    isNew: true,
    featured: true,
  },
  {
    id: "SM-DEMO-007",
    slug: "chemise-soie-noire",
    name: "Chemise de soir",
    category: "chemises",
    categoryLabel: "Chemises",
    price: 590,
    description:
      "Une chemise fluide qui capte discrètement la lumière et accompagne les tenues du soir.",
    details: [
      "Col ouvert",
      "Boutons ton sur ton",
      "Poignets simples",
      "Coupe fluide",
    ],
    colors: [
      { name: "Noir", hex: "#101112" },
      { name: "Ivoire", hex: "#ded6c7" },
    ],
    sizes: ["37", "38", "39", "40", "41", "42", "43"],
    material: "Matière satinée de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/soir.svg",
    secondaryImage: "/media/costume.svg",
    imageAlt: "Composition sombre évoquant une chemise du soir",
    secondaryImageAlt: "Silhouette abstraite dans des tons anthracite",
    isNew: false,
    featured: false,
  },
  {
    id: "SM-DEMO-008",
    slug: "polo-maille-merinos",
    name: "Polo Maille",
    category: "mailles",
    categoryLabel: "Mailles",
    price: 520,
    description:
      "Un polo à manches longues en maille fine, pensé comme une alternative souple à la chemise.",
    details: [
      "Col ouvert",
      "Maille fine",
      "Bords-côtes discrets",
      "Coupe régulière",
    ],
    colors: [
      { name: "Taupe", hex: "#8c8172" },
      { name: "Marine", hex: "#222b36" },
      { name: "Écru", hex: "#d8d0c1" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    material: "Laine mérinos de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/essentiels.svg",
    secondaryImage: "/media/atelier.svg",
    imageAlt: "Interprétation graphique d'un polo en maille taupe",
    secondaryImageAlt: "Détail abstrait de lignes de construction",
    isNew: true,
    featured: true,
  },
  {
    id: "SM-DEMO-009",
    slug: "col-roule-cachemire-nuit",
    name: "Col roulé Cachemire",
    category: "mailles",
    categoryLabel: "Mailles",
    price: 690,
    description:
      "Un col roulé à la maille dense et douce, dessiné pour se glisser sous une veste.",
    details: [
      "Col roulé",
      "Jauge fine",
      "Poignets côtelés",
      "Coupe près du corps",
    ],
    colors: [
      { name: "Nuit", hex: "#1c2530" },
      { name: "Charbon", hex: "#424140" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    material: "Cachemire de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/hero.svg",
    secondaryImage: "/media/essentiels.svg",
    imageAlt: "Silhouette abstraite portant une maille bleu nuit",
    secondaryImageAlt: "Composition textile aux tons pierre",
    isNew: false,
    featured: false,
  },
  {
    id: "SM-DEMO-010",
    slug: "cravate-grenadine-noire",
    name: "Cravate Grenadine",
    category: "accessoires",
    categoryLabel: "Accessoires",
    price: 190,
    description:
      "Une cravate texturée qui apporte profondeur et retenue aux silhouettes formelles.",
    details: [
      "Largeur de démonstration : 8 cm",
      "Finition main simulée",
      "Doublure ton sur ton",
      "Texture grenadine",
    ],
    colors: [
      { name: "Noir", hex: "#111213" },
      { name: "Bordeaux", hex: "#572b2f" },
    ],
    sizes: ["Taille unique"],
    material: "Soie de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/atelier.svg",
    secondaryImage: "/media/soir.svg",
    imageAlt: "Composition de lignes évoquant une cravate noire",
    secondaryImageAlt: "Contraste graphique noir et ivoire",
    isNew: true,
    featured: false,
  },
  {
    id: "SM-DEMO-011",
    slug: "pochette-soie-ivoire",
    name: "Pochette de soie",
    category: "accessoires",
    categoryLabel: "Accessoires",
    price: 150,
    description:
      "Un carré souple aux bords contrastés, destiné à ponctuer une veste avec discrétion.",
    details: [
      "Format de démonstration : 33 × 33 cm",
      "Bords roulottés simulés",
      "Motif exclusif de démonstration",
      "Finition légère",
    ],
    colors: [
      { name: "Ivoire", hex: "#e3ddcf" },
      { name: "Nuit", hex: "#222936" },
    ],
    sizes: ["Taille unique"],
    material: "Soie de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/essentiels.svg",
    secondaryImage: "/media/paris.svg",
    imageAlt: "Composition claire évoquant une pochette de soie",
    secondaryImageAlt: "Interprétation graphique d'une façade parisienne",
    isNew: false,
    featured: false,
  },
  {
    id: "SM-DEMO-012",
    slug: "blouson-laine-graphite",
    name: "Blouson Graphite",
    category: "essentiels",
    categoryLabel: "Les essentiels",
    price: 1190,
    description:
      "Un blouson épuré aux volumes équilibrés, conçu pour prolonger le vestiaire au quotidien.",
    details: [
      "Col minimal",
      "Fermeture zippée",
      "Poches latérales",
      "Doublure légère",
    ],
    colors: [
      { name: "Graphite", hex: "#4b4d4e" },
      { name: "Tabac", hex: "#74543f" },
    ],
    sizes: ["44", "46", "48", "50", "52", "54"],
    material: "Laine de démonstration",
    origin: "Prototype éditorial — origine non contractuelle",
    image: "/media/costume.svg",
    secondaryImage: "/media/hero.svg",
    imageAlt: "Interprétation graphique d'un blouson graphite",
    secondaryImageAlt: "Silhouette sombre dans un décor abstrait",
    isNew: true,
    featured: false,
  },
];

export function isCategorySlug(value: string): value is CategorySlug {
  return categorySlugs.includes(value as CategorySlug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  if (category === "essentiels") {
    return products.filter(
      (product) =>
        product.category === "essentiels" ||
        product.category === "mailles" ||
        product.category === "chemises",
    );
  }

  if (category === "soiree") {
    return products.filter(
      (product) =>
        product.category === "soiree" ||
        product.slug.includes("velours") ||
        product.slug.includes("soie"),
    );
  }

  return products.filter((product) => product.category === category);
}

export function getAvailableColors(input: Product[]): string[] {
  return Array.from(
    new Set(input.flatMap((product) => product.colors.map((color) => color.name))),
  ).sort((first, second) => first.localeCompare(second, "fr"));
}

export function filterAndSortProducts(
  input: Product[],
  selectedColor?: string,
  selectedSort: ProductSort = "selection",
): Product[] {
  const filtered = selectedColor
    ? input.filter((product) =>
        product.colors.some(
          (color) => color.name.toLocaleLowerCase("fr") === selectedColor.toLocaleLowerCase("fr"),
        ),
      )
    : [...input];

  switch (selectedSort) {
    case "price-asc":
      return filtered.sort((first, second) => first.price - second.price);
    case "price-desc":
      return filtered.sort((first, second) => second.price - first.price);
    case "name":
      return filtered.sort((first, second) =>
        first.name.localeCompare(second.name, "fr"),
      );
    case "selection":
    default:
      return filtered.sort(
        (first, second) =>
          Number(second.featured) - Number(first.featured) ||
          Number(second.isNew) - Number(first.isNew),
      );
  }
}

export function parseProductSort(value?: string): ProductSort {
  if (
    value === "price-asc" ||
    value === "price-desc" ||
    value === "name"
  ) {
    return value;
  }

  return "selection";
}

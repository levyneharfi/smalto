import type { Metadata } from "next";
import { FavoritesPage } from "@/components/commerce/favorites-page";

export const metadata: Metadata = {
  title: "Favoris",
  description: "Retrouvez les pièces Smalto que vous avez enregistrées.",
};

export default function Page() {
  return (
    <main id="contenu-principal">
      <FavoritesPage />
    </main>
  );
}

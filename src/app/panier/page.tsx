import type { Metadata } from "next";
import { CartPage } from "@/components/commerce/cart-page";

export const metadata: Metadata = {
  title: "Panier",
  description: "Consultez votre sélection Smalto.",
};

export default function Page() {
  return (
    <main id="contenu-principal" className="commerce-page section-shell">
      <CartPage />
    </main>
  );
}

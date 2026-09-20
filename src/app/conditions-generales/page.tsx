import type { Metadata } from "next";
import { InformationPage } from "@/components/content/information-page";

export const metadata: Metadata = {
  title: "Conditions générales",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <InformationPage
      eyebrow="Informations commerciales"
      title="Conditions générales"
      introduction="Aucune transaction commerciale réelle n’est possible sur cette version du site."
      notice="Les prix, produits, disponibilités et informations logistiques sont fictifs ou non contractuels. Des conditions générales de vente validées devront être intégrées avant tout paiement."
      sections={[
        {
          title: "Produits",
          paragraphs: [
            "Le catalogue actuel est constitué de données de démonstration et ne représente pas une offre ferme.",
          ],
        },
        {
          title: "Prix",
          paragraphs: [
            "Les montants affichés servent uniquement à tester les formats et calculs du panier.",
          ],
        },
        {
          title: "Commandes et paiement",
          paragraphs: [
            "Le bouton de paiement est désactivé. Aucune commande n’est créée et aucune donnée bancaire n’est traitée.",
          ],
        },
      ]}
    />
  );
}

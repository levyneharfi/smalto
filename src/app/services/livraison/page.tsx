import type { Metadata } from "next";
import { InformationPage } from "@/components/content/information-page";

export const metadata: Metadata = {
  title: "Livraison et retours",
};

export default function Page() {
  return (
    <InformationPage
      eyebrow="Services"
      title="Livraison et retours"
      introduction="Cette page présente la structure prévue pour les informations logistiques de la boutique."
      notice="Les délais, pays desservis, transporteurs, tarifs et conditions de retour doivent être fournis et validés avant toute ouverture commerciale."
      sections={[
        {
          title: "Livraison",
          paragraphs: [
            "Les modes de livraison et leurs délais seront affichés après validation des partenaires logistiques.",
            "Le coût définitif devra être calculé selon la destination et le contenu du panier.",
          ],
        },
        {
          title: "Retours",
          paragraphs: [
            "La procédure de retour devra préciser le délai applicable, l’état attendu des articles et les éventuelles exclusions.",
          ],
        },
        {
          title: "Suivi",
          paragraphs: [
            "Un lien de suivi pourra être transmis après préparation de la commande lorsqu’un système commercial sera connecté.",
          ],
        },
      ]}
      backHref="/collections"
      backLabel="Découvrir les collections"
    />
  );
}

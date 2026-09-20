import type { Metadata } from "next";
import { InformationPage } from "@/components/content/information-page";

export const metadata: Metadata = {
  title: "Confidentialité",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <InformationPage
      eyebrow="Protection des données"
      title="Confidentialité"
      introduction="Cette démonstration ne possède ni compte client, ni paiement, ni système réel de newsletter."
      notice="Une politique de confidentialité adaptée aux traitements réellement mis en œuvre devra être rédigée avant la collecte de données personnelles."
      sections={[
        {
          title: "Stockage local",
          paragraphs: [
            "Le panier et les favoris sont stockés uniquement dans le localStorage du navigateur utilisé.",
            "Ces données peuvent être supprimées depuis les paramètres du navigateur et ne sont pas transmises au serveur.",
          ],
        },
        {
          title: "Formulaires",
          paragraphs: [
            "Le formulaire de newsletter fonctionne uniquement comme validation locale de démonstration et n’envoie aucune adresse.",
          ],
        },
        {
          title: "Services futurs",
          paragraphs: [
            "Tout outil d’analyse, paiement, authentification ou communication devra être documenté avec sa finalité, sa base légale et sa durée de conservation.",
          ],
        },
      ]}
    />
  );
}

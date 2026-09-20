import type { Metadata } from "next";
import { InformationPage } from "@/components/content/information-page";

export const metadata: Metadata = {
  title: "Nous contacter",
};

export default function Page() {
  return (
    <InformationPage
      eyebrow="Services"
      title="Nous contacter"
      introduction="L’espace de contact sera relié aux canaux officiels de la Maison avant la mise en production."
      notice="Aucune adresse électronique ou ligne téléphonique non vérifiée n’est affichée dans cette démonstration."
      sections={[
        {
          title: "Conseil produit",
          paragraphs: [
            "Une équipe pourra accompagner le choix d’une coupe, d’une taille ou d’une matière lorsque le service client officiel sera connecté.",
          ],
        },
        {
          title: "Commande en ligne",
          paragraphs: [
            "Les demandes relatives aux commandes nécessiteront une authentification ou un numéro de commande vérifiable.",
          ],
        },
        {
          title: "Presse et professionnels",
          paragraphs: [
            "Les contacts dédiés devront être fournis par la Maison avant publication.",
          ],
        },
      ]}
    />
  );
}

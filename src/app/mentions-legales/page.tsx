import type { Metadata } from "next";
import { InformationPage } from "@/components/content/information-page";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <InformationPage
      eyebrow="Informations légales"
      title="Mentions légales"
      introduction="Structure provisoire destinée à recevoir les mentions obligatoires du futur éditeur du site."
      notice="Cette page n’est pas juridiquement exploitable en production. Elle doit être complétée et validée par un professionnel compétent."
      sections={[
        {
          title: "Éditeur",
          paragraphs: [
            "Raison sociale, forme juridique, capital, siège, immatriculation, numéro de TVA et coordonnées à fournir.",
          ],
        },
        {
          title: "Direction de la publication",
          paragraphs: [
            "Identité de la personne responsable de la publication à fournir.",
          ],
        },
        {
          title: "Hébergement",
          paragraphs: [
            "Nom, adresse et coordonnées de l’hébergeur à renseigner après le choix de la plateforme de production.",
          ],
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { InformationPage } from "@/components/content/information-page";

export const metadata: Metadata = {
  title: "Accessibilité",
};

export default function Page() {
  return (
    <InformationPage
      eyebrow="Accessibilité numérique"
      title="Accessibilité"
      introduction="Le projet vise une navigation utilisable au clavier, une structure sémantique cohérente et une adaptation aux préférences de mouvement."
      notice="Cette page ne constitue pas encore une déclaration réglementaire de conformité. Un audit complet devra être réalisé avant publication."
      sections={[
        {
          title: "Fonctionnalités intégrées",
          paragraphs: [
            "Lien d’évitement, focus visible, navigation au clavier, titres structurés, alternatives textuelles et prise en charge de prefers-reduced-motion.",
          ],
        },
        {
          title: "Contrôles prévus",
          paragraphs: [
            "Les prochains lots ajouteront des tests automatisés axe et des parcours E2E au clavier.",
          ],
        },
        {
          title: "Signaler une difficulté",
          paragraphs: [
            "Un canal de contact accessible devra être renseigné lorsque les coordonnées officielles auront été validées.",
          ],
        },
      ]}
    />
  );
}

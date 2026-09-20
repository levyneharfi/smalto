import type { Metadata } from "next";
import { InformationPage } from "@/components/content/information-page";

export const metadata: Metadata = {
  title: "Conseils d’entretien",
};

export default function Page() {
  return (
    <InformationPage
      eyebrow="Services"
      title="Conseils d’entretien"
      introduction="La longévité d’une pièce dépend de gestes adaptés à sa construction et à sa matière."
      notice="Les consignes présentes sur l’étiquette officielle de chaque article devront toujours prévaloir. Les recommandations détaillées seront validées produit par produit."
      sections={[
        {
          title: "Aérer",
          paragraphs: [
            "Laisser reposer et aérer un vêtement entre deux ports contribue à préserver sa forme.",
          ],
        },
        {
          title: "Ranger",
          paragraphs: [
            "Utiliser un cintre adapté et éviter une exposition prolongée à la lumière ou à l’humidité.",
          ],
        },
        {
          title: "Nettoyer",
          paragraphs: [
            "Respecter exclusivement les symboles d’entretien de l’article et faire appel à un professionnel lorsque cela est indiqué.",
          ],
        },
      ]}
      backHref="/collections"
      backLabel="Découvrir les collections"
    />
  );
}

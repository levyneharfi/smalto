import type { Metadata } from "next";
import { InformationPage } from "@/components/content/information-page";

export const metadata: Metadata = {
  title: "Guide des tailles",
};

export default function Page() {
  return (
    <InformationPage
      eyebrow="Services"
      title="Guide des tailles"
      introduction="Les tailles visibles dans le catalogue sont proposées uniquement pour tester le parcours."
      notice="Un guide officiel avec mesures, équivalences internationales et conseils de prise de mesure doit être fourni avant la commercialisation."
      sections={[
        {
          title: "Vestes et costumes",
          paragraphs: [
            "Les tailles de démonstration vont actuellement du 44 au 56. Elles ne constituent pas un tableau de correspondance officiel.",
          ],
        },
        {
          title: "Chemises",
          paragraphs: [
            "Les tailles de col affichées permettent seulement de tester la sélection d’une variante.",
          ],
        },
        {
          title: "Mailles",
          paragraphs: [
            "Les tailles internationales XS à XXL devront être reliées aux mesures officielles de chaque modèle.",
          ],
        },
      ]}
      backHref="/collections"
      backLabel="Revenir aux collections"
    />
  );
}

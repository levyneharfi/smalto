import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";
import { NewsletterForm } from "@/components/content/newsletter-form";

export const metadata: Metadata = {
  title: "Correspondance privée",
  description:
    "Page de démonstration de la correspondance éditoriale Smalto.",
};

export default function NewsletterPage() {
  return (
    <main id="contenu-principal" className="newsletter-page section-shell">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Correspondance privée" },
        ]}
      />

      <div className="newsletter-layout">
        <header>
          <p className="eyebrow">Correspondance privée</p>
          <h1>Les nouvelles de la Maison</h1>
          <p>
            Découvrez les collections et les histoires éditoriales de la
            Maison. Ce formulaire valide uniquement les données dans votre
            navigateur.
          </p>
        </header>

        <div>
          <div className="information-notice" role="note">
            <strong>Démonstration sans collecte</strong>
            <p>
              Aucun serveur d’abonnement n’est configuré. L’adresse saisie
              n’est ni enregistrée ni envoyée à un service externe.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </main>
  );
}

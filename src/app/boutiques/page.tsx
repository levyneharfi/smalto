import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";

export const metadata: Metadata = {
  title: "Boutiques",
  description:
    "Informations provisoires concernant les boutiques et points de vente Smalto.",
};

export default function BoutiquesPage() {
  return (
    <main id="contenu-principal">
      <section className="stores-introduction section-shell">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Boutiques" },
          ]}
        />
        <p className="eyebrow">Rencontrer la Maison</p>
        <h1>Nos boutiques</h1>
        <p>
          Les adresses et horaires officiels doivent être validés par la
          Maison avant la mise en production. Aucune adresse fictive n’est
          présentée dans cette démonstration.
        </p>
      </section>

      <section className="stores-placeholder">
        <div className="stores-placeholder-image">
          <Image
            src="/media/paris.svg"
            alt="Interprétation graphique de Paris"
            fill
            sizes="(max-width: 800px) 100vw, 55vw"
          />
        </div>
        <div className="stores-placeholder-content">
          <p className="eyebrow">Annuaire en préparation</p>
          <h2>Retrouver un point de vente</h2>
          <p>
            Cette zone accueillera la liste vérifiée des boutiques, leurs
            horaires, leurs services et les moyens de prise de rendez-vous.
          </p>
          <div className="information-notice" role="note">
            <strong>Données requises avant publication</strong>
            <p>
              Adresses officielles, coordonnées, horaires, accessibilité,
              services proposés et liens cartographiques.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

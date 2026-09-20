import Link from "next/link";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";

type InformationSection = {
  title: string;
  paragraphs: string[];
};

type InformationPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: InformationSection[];
  notice?: string;
  backHref?: string;
  backLabel?: string;
};

export function InformationPage({
  eyebrow,
  title,
  introduction,
  sections,
  notice,
  backHref = "/",
  backLabel = "Revenir à l’accueil",
}: InformationPageProps) {
  return (
    <main id="contenu-principal" className="information-page section-shell">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: title },
        ]}
      />

      <header className="information-header">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{introduction}</p>
      </header>

      {notice ? (
        <div className="information-notice" role="note">
          <strong>Information importante</strong>
          <p>{notice}</p>
        </div>
      ) : null}

      <div className="information-sections">
        {sections.map((section, index) => (
          <section key={section.title}>
            <p className="information-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Link className="text-link" href={backHref}>
        {backLabel}
      </Link>
    </main>
  );
}

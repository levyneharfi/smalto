import Link from "next/link";

const footerGroups = [
  {
    title: "La Maison",
    links: [
      { href: "/maison", label: "Notre histoire" },
      { href: "/savoir-faire", label: "Savoir-faire" },
      { href: "/journal", label: "Journal" },
      { href: "/boutiques", label: "Nos boutiques" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/livraison", label: "Livraison et retours" },
      { href: "/services/contact", label: "Nous contacter" },
      { href: "/services/guide-des-tailles", label: "Guide des tailles" },
      { href: "/services/entretien", label: "Conseils d'entretien" },
    ],
  },
  {
    title: "Informations",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/conditions-generales", label: "Conditions générales" },
      { href: "/accessibilite", label: "Accessibilité" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-introduction">
        <div>
          <p className="eyebrow footer-eyebrow">Correspondance privée</p>
          <h2>Les nouvelles de la Maison</h2>
        </div>
        <p>
          Découvrez en avant-première les collections, les histoires d&apos;atelier
          et les rendez-vous de la Maison.
        </p>
        <Link className="text-link text-link-light" href="/newsletter">
          S&apos;inscrire à la correspondance
        </Link>
      </div>

      <div className="footer-navigation">
        {footerGroups.map((group) => (
          <section key={group.title} aria-labelledby={`footer-${group.title}`}>
            <h2 id={`footer-${group.title}`}>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="footer-social">
          <h2 id="footer-social">Suivre Smalto</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" rel="noreferrer">
                YouTube
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Smalto — Démonstration digitale</p>
        <p>Paris, France</p>
      </div>
    </footer>
  );
}

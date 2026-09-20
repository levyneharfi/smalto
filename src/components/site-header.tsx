import Link from "next/link";
import { CommerceNavigation } from "@/components/commerce/commerce-navigation";

const primaryNavigation = [
  { href: "/collections", label: "Collection" },
  { href: "/nouveautes", label: "Nouveautés" },
  { href: "/maison", label: "La Maison" },
  { href: "/savoir-faire", label: "Savoir-faire" },
  { href: "/journal", label: "Journal" },
];

const utilityNavigation = [
  { href: "/recherche", label: "Rechercher" },
  { href: "/boutiques", label: "Boutiques" },
  { href: "/favoris", label: "Favoris" },
  { href: "/panier", label: "Panier" },
];

export function SiteHeader() {
  return (
    <>
      <div className="announcement">
        <p>Livraison offerte en France métropolitaine</p>
      </div>

      <header className="site-header">
        <div className="header-shell">
          <details className="mobile-menu">
            <summary aria-label="Ouvrir le menu principal">
              <span className="menu-icon" aria-hidden="true">
                <span />
                <span />
              </span>
              <span>Menu</span>
            </summary>

            <div className="mobile-menu-panel">
              <div className="mobile-menu-heading">
                <p className="eyebrow">Navigation</p>
                <p className="mobile-menu-note">
                  L&apos;allure parisienne, pensée dans chaque détail.
                </p>
              </div>

              <nav aria-label="Navigation mobile principale">
                <ul className="mobile-primary-links">
                  {primaryNavigation.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Navigation mobile secondaire">
                <ul className="mobile-utility-links">
                  {utilityNavigation.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </details>

          <nav className="desktop-navigation" aria-label="Navigation principale">
            <ul>
              {primaryNavigation.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link className="wordmark" href="/" aria-label="Smalto, accueil">
            SMALTO
          </Link>

          <nav className="header-actions" aria-label="Navigation secondaire">
            <ul>
              <li className="desktop-only">
                <Link href="/boutiques">Boutiques</Link>
              </li>
              <li>
                <Link href="/recherche" aria-label="Rechercher">
                  Recherche
                </Link>
              </li>
              <CommerceNavigation />
            </ul>
          </nav>
        </div>

        <nav className="collection-navigation" aria-label="Univers Smalto">
          <ul>
            <li>
              <Link href="/collections/costumes">Costumes</Link>
            </li>
            <li>
              <Link href="/collections/vestes">Vestes</Link>
            </li>
            <li>
              <Link href="/collections/chemises">Chemises</Link>
            </li>
            <li>
              <Link href="/collections/mailles">Mailles</Link>
            </li>
            <li>
              <Link href="/collections/accessoires">Accessoires</Link>
            </li>
            <li>
              <Link href="/savoir-faire">Sur-mesure</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

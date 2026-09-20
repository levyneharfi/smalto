import Link from "next/link";

export default function NotFound() {
  return (
    <main id="contenu-principal" className="not-found-page">
      <p className="eyebrow">Erreur 404</p>
      <h1>Cette page reste introuvable.</h1>
      <p>
        Le contenu recherché a peut-être changé d&apos;adresse ou n&apos;est plus
        disponible.
      </p>
      <div className="not-found-actions">
        <Link className="button button-dark" href="/">
          Revenir à l&apos;accueil
        </Link>
        <Link className="text-link" href="/collections">
          Découvrir les collections
        </Link>
      </div>
    </main>
  );
}
